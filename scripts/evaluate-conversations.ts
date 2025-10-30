#!/usr/bin/env tsx
/**
 * Evaluatie script voor gesprekskwaliteit
 * 
 * Genereert gesprekken over 5 basis onderwerpen en slaat ze op in JSON
 * Gebruik: npx tsx scripts/evaluate-conversations.ts
 */

import "dotenv/config";
import { genereerGesprekBerichten } from "@/lib/live-formatie/genereer-gesprek-berichten";
import { deelnemers } from "@/data/deelnemers";
import fs from "fs";
import path from "path";

const EVALUATION_TOPICS = [
  "De prijs van frikandelbroodjes bij de appie",
  "Migratie en asiel",
  "Zorg en ouderenzorg",
  "De huidige politieke situatie",
  "Woningmarkt en bouwen",
];

// Selecteer een diverse set politici (van links naar rechts)
const EVALUATION_DEELNEMERS = [
  1,  // Geert Wilders (PVV)
  2,  // Jesse Klaver (GL-PvdA)
  3,  // Dilan Yeşilgöz (VVD)
  4,  // Eddy van Hijum (NSC)
  5,  // Rob Jetten (D66)
  6,  // Caroline van der Plas (BBB)
];

// Test with ALL politicians to verify system works at scale
const ALL_POLITICIANS_TEST = {
  topic: "De huidige politieke situatie",
  deelnemerIds: deelnemers.map(d => d.id), // All 17 politicians
};

interface EvaluationResult {
  timestamp: string;
  topic: string;
  deelnemers: Array<{ id: number; name: string; partij: string }>;
  messages: Array<{
    deelnemerName: string;
    message: string;
    timestamp: string;
  }>;
  metadata: {
    totalMessages: number;
    messagesByDeelnemer: Record<string, number>;
    averageMessageLength: number;
    hasEmojis: boolean;
    conversationFlow: {
      uniqueSpeakers: number;
      speakerTransitions: number;
    };
  };
}

function printConversation(result: EvaluationResult) {
  console.log(`\n${"=".repeat(80)}`);
  console.log(`📝 ${result.topic}`);
  console.log(`${"=".repeat(80)}\n`);

  let lastSpeaker = "";
  result.messages.forEach((msg, index) => {
    // Add spacing between different speakers
    if (lastSpeaker && lastSpeaker !== msg.deelnemerName) {
      console.log("");
    }
    
    // Format: [Name] Message
    const speaker = msg.deelnemerName === lastSpeaker ? "  ↳" : `[${msg.deelnemerName}]`;
    console.log(`${speaker} ${msg.message}`);
    
    lastSpeaker = msg.deelnemerName;
  });

  console.log(`\n${"─".repeat(80)}`);
  console.log(`📊 ${result.metadata.totalMessages} berichten | ${result.metadata.conversationFlow.uniqueSpeakers} sprekers | ${Math.round(result.metadata.averageMessageLength)} chars/msg`);
  console.log(`${"=".repeat(80)}\n`);
}

async function evaluateConversation(
  topic: string,
  deelnemerIds: number[]
): Promise<EvaluationResult> {
  console.log(`\n🗣️  Generating conversation: "${topic}"`);

  const selectedDeelnemers = deelnemers.filter((d) =>
    deelnemerIds.includes(d.id)
  );

  try {
    const now = new Date();
    const endAt = new Date(now.getTime() + 5 * 60 * 1000); // 5 minutes from now
    
    const messages = await genereerGesprekBerichten({
      onderwerp: topic,
      deelnemers: selectedDeelnemers,
      startAt: now,
      endAt: endAt,
    });

    // Calculate metadata
    const messagesByDeelnemer: Record<string, number> = {};
    let totalLength = 0;
    let hasEmojis = false;
    let speakerTransitions = 0;
    let lastSpeaker = "";

    messages.forEach((msg) => {
      messagesByDeelnemer[msg.deelnemerName] =
        (messagesByDeelnemer[msg.deelnemerName] || 0) + 1;
      totalLength += msg.message.length;
      if (/[\p{Emoji}]/u.test(msg.message)) {
        hasEmojis = true;
      }
      if (lastSpeaker && lastSpeaker !== msg.deelnemerName) {
        speakerTransitions++;
      }
      lastSpeaker = msg.deelnemerName;
    });

    const result: EvaluationResult = {
      timestamp: new Date().toISOString(),
      topic,
      deelnemers: selectedDeelnemers.map((d) => ({
        id: d.id,
        name: d.name,
        partij: d.partij.short,
      })),
      messages: messages.map((msg) => ({
        deelnemerName: msg.deelnemerName,
        message: msg.message,
        timestamp: msg.timestamp.toISOString(),
      })),
      metadata: {
        totalMessages: messages.length,
        messagesByDeelnemer,
        averageMessageLength:
          messages.length > 0 ? totalLength / messages.length : 0,
        hasEmojis,
        conversationFlow: {
          uniqueSpeakers: Object.keys(messagesByDeelnemer).length,
          speakerTransitions,
        },
      },
    };

    console.log(`✅ Generated ${messages.length} messages`);
    console.log(`   👥 ${result.metadata.conversationFlow.uniqueSpeakers} unique speakers`);
    console.log(`   📏 Avg message length: ${Math.round(result.metadata.averageMessageLength)} chars`);
    console.log(`   🔄 ${result.metadata.conversationFlow.speakerTransitions} speaker transitions`);

    // Print the conversation
    printConversation(result);

    return result;
  } catch (error) {
    console.error(`❌ Error generating conversation for "${topic}":`, error);
    throw error;
  }
}

async function runEvaluation() {
  console.log("🚀 Starting conversation evaluation...\n");
  console.log(`📋 Topics: ${EVALUATION_TOPICS.join(", ")}`);
  console.log(`👥 Regular tests: ${EVALUATION_DEELNEMERS.length} participants`);
  console.log(`👥 Large group test: ${ALL_POLITICIANS_TEST.deelnemerIds.length} participants (ALL politicians)`);

  const results: EvaluationResult[] = [];

  // Run regular topic evaluations with 6 politicians
  for (const topic of EVALUATION_TOPICS) {
    try {
      const result = await evaluateConversation(topic, EVALUATION_DEELNEMERS);
      results.push(result);

      // Small delay between conversations to avoid rate limiting
      await new Promise((resolve) => setTimeout(resolve, 1000));
    } catch (error) {
      console.error(`Failed to generate conversation for "${topic}"`, error);
      // Continue with other topics
    }
  }

  // Run large group test with ALL politicians
  console.log("\n" + "=".repeat(80));
  console.log("🌟 LARGE GROUP TEST: Testing with ALL 17 politicians");
  console.log("=".repeat(80) + "\n");
  
  try {
    const result = await evaluateConversation(
      ALL_POLITICIANS_TEST.topic,
      ALL_POLITICIANS_TEST.deelnemerIds
    );
    results.push(result);
    
    console.log(`\n✅ Large group test completed successfully!`);
    console.log(`   Unique speakers: ${result.metadata.conversationFlow.uniqueSpeakers}/${ALL_POLITICIANS_TEST.deelnemerIds.length}`);
    console.log(`   Total messages: ${result.metadata.totalMessages}`);
  } catch (error) {
    console.error(`Failed to generate large group conversation`, error);
  }

  // Save results to JSON file
  const timestamp = new Date().toISOString().replace(/[:.]/g, "-");
  const outputDir = path.join(process.cwd(), "evaluation-results");
  const outputFile = path.join(outputDir, `evaluation-${timestamp}.json`);

  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  fs.writeFileSync(
    outputFile,
    JSON.stringify(
      {
        evaluationTimestamp: new Date().toISOString(),
        totalConversations: results.length,
        conversations: results,
        summary: {
          totalMessages: results.reduce((sum, r) => sum + r.metadata.totalMessages, 0),
          averageMessagesPerConversation: results.length > 0 
            ? results.reduce((sum, r) => sum + r.metadata.totalMessages, 0) / results.length
            : 0,
          conversationsWithEmojis: results.filter((r) => r.metadata.hasEmojis).length,
        },
      },
      null,
      2
    )
  );

  console.log(`\n${"=".repeat(80)}`);
  console.log(`✅ EVALUATION COMPLETE`);
  console.log(`${"=".repeat(80)}`);
  console.log(`\n📊 Generated ${results.length} conversations`);
  console.log(`💾 Results saved to: ${outputFile}`);
  console.log(`\n📈 Overall Summary:`);
  console.log(`   Total messages: ${results.reduce((sum, r) => sum + r.metadata.totalMessages, 0)}`);
  console.log(`   Avg per conversation: ${Math.round(results.reduce((sum, r) => sum + r.metadata.totalMessages, 0) / results.length)}`);
  console.log(`   With emojis: ${results.filter((r) => r.metadata.hasEmojis).length}/${results.length}`);
  console.log(`\n${"=".repeat(80)}\n`);
}

// Run evaluation
runEvaluation().catch((error) => {
  console.error("❌ Evaluation failed:", error);
  process.exit(1);
});

