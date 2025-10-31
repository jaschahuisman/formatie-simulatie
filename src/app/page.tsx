import { Container, Page } from "@/components/layout";
import { ConversationDialog } from "@/components/conversation-dialog";
import { Ornament } from "@/components/ornament";
import { deelnemers } from "@/data/deelnemers";
import Image from "next/image";

export default async function Home() {
  const topDeelnemers = deelnemers
    .sort((a, b) => b.partij.zetels - a.partij.zetels)
    .slice(0, 5);

  return (
    <Page className="items-center justify-center min-h-screen">
      {/* Decorative Ornaments */}
      <Ornament
        type="star"
        color="#5ED18F"
        initialX={10}
        initialY={15}
        size={20}
        floatSpeed={0.4}
      />
      <Ornament
        type="dot"
        color="#E97A3B"
        initialX={85}
        initialY={20}
        size={15}
        floatSpeed={0.6}
      />
      <Ornament
        type="wiggle"
        color="#6ECBE2"
        initialX={15}
        initialY={70}
        size={20}
        floatSpeed={0.5}
      />
      <Ornament
        type="turd"
        color="#F88195"
        initialX={90}
        initialY={75}
        size={20}
        floatSpeed={0.55}
      />
      <Ornament
        type="star"
        color="#38418B"
        initialX={50}
        initialY={10}
        size={20}
        floatSpeed={0.7}
      />
      <Ornament
        type="dot"
        color="#5ED18F"
        initialX={5}
        initialY={45}
        size={15}
        floatSpeed={0.45}
      />
      <Ornament
        type="wiggle"
        color="#E97A3B"
        initialX={92}
        initialY={50}
        size={20}
        floatSpeed={0.52}
      />
      <Ornament
        type="turd"
        color="#6ECBE2"
        initialX={25}
        initialY={30}
        size={20}
        floatSpeed={0.48}
      />
      <Ornament
        type="star"
        color="#F88195"
        initialX={75}
        initialY={45}
        size={20}
        floatSpeed={0.58}
      />
      <Ornament
        type="dot"
        color="#38418B"
        initialX={12}
        initialY={88}
        size={20}
        floatSpeed={0.42}
      />
      <Ornament
        type="wiggle"
        color="#5ED18F"
        initialX={88}
        initialY={85}
        size={15}
        floatSpeed={0.65}
      />
      <Ornament
        type="turd"
        color="#E97A3B"
        initialX={50}
        initialY={92}
        size={20}
        floatSpeed={0.5}
      />
      <Ornament
        type="star"
        color="#6ECBE2"
        initialX={3}
        initialY={25}
        size={20}
        floatSpeed={0.62}
      />
      <Ornament
        type="dot"
        color="#F88195"
        initialX={95}
        initialY={35}
        size={20}
        floatSpeed={0.47}
      />
      <Ornament
        type="wiggle"
        color="#38418B"
        initialX={30}
        initialY={8}
        size={15}
        floatSpeed={0.55}
      />
      <Ornament
        type="turd"
        color="#5ED18F"
        initialX={70}
        initialY={12}
        size={20}
        floatSpeed={0.6}
      />

      <Container>
        <div className="flex items-center flex-col gap-2 mb-8">
          <Image
            className="w-72 h-auto"
            src="/logo.png"
            alt="Logo"
            width={800}
            height={200}
          />

          <h2 className="text-2xl font-bold max-w-xl text-center text-pink-200 font-comic">
            Maak je eigen formatiegesprek en ontdek hoe partijen tot een
            compromis kunnen komen.
          </h2>
        </div>

        {/* Conversation Dialog */}
        <div className="flex justify-center">
          <ConversationDialog deelnemers={deelnemers} />
        </div>
      </Container>
      <div className="fixed bottom-0 left-1/2 -translate-x-1/2 flex justify-center items-end -space-x-[5%] -z-1">
        {topDeelnemers.map((deelnemer, index) => (
          <div
            key={deelnemer.id}
            className="relative w-32 h-32 overflow-hidden"
            style={{ zIndex: topDeelnemers.length - index }}
          >
            <Image
              src={`/images/partijleiders/${deelnemer.image}`}
              alt={deelnemer.name}
              fill
              className="object-cover"
            />
          </div>
        ))}
      </div>
    </Page>
  );
}
