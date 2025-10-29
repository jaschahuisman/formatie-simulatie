# Evaluatie Scripts

## Gesprekskwaliteit Evaluatie

Dit script genereert gesprekken over 5 basis onderwerpen en slaat ze op voor analyse.

### Gebruik

```bash
npm run evaluate
# of
yarn evaluate
```

### Wat doet het?

Het script genereert automatisch gesprekken over deze onderwerpen:
- Klimaat en duurzaamheid
- Migratie en asiel
- Zorg en ouderenzorg
- Economie en werkgelegenheid
- Woningmarkt en bouwen

Met deze politici:
- Geert Wilders (PVV)
- Frans Timmermans (GL-PvdA)
- Dilan Yeşilgöz (VVD)
- Eddy van Hijum (CDA)
- Rob Jetten (D66)
- Caroline van der Plas (BBB)

### Output

De resultaten worden opgeslagen in `evaluation-results/evaluation-[timestamp].json`

Elk resultaat bevat:
- **Alle berichten** van het gesprek
- **Metadata** over het gesprek:
  - Totaal aantal berichten
  - Berichten per deelnemer (sprekersverdeling)
  - Gemiddelde berichtlengte
  - Of er emojis gebruikt zijn
  - Aantal unieke sprekers
  - Aantal overgangen tussen sprekers

### Analyse

Je kunt de JSON files vergelijken om te zien:

1. **Sprekersverdeling**: Komen alle politici aan bod?
2. **Berichtlengte**: Zijn berichten kort genoeg (chat-stijl)?
3. **Speaker transitions**: Is het gesprek dynamisch genoeg?
4. **Emoji gebruik**: Wordt er emoji gebruikt waar passend?
5. **Flow**: Reageren politici logisch op elkaar? (handmatig checken)

### Voorbeeld Output

```json
{
  "evaluationTimestamp": "2025-10-29T19:30:00.000Z",
  "totalConversations": 5,
  "conversations": [
    {
      "topic": "Klimaat en duurzaamheid",
      "messages": [...],
      "metadata": {
        "totalMessages": 22,
        "messagesByDeelnemer": {
          "Geert Wilders": 4,
          "Frans Timmermans": 5,
          "Dilan Yeşilgöz": 3,
          ...
        },
        "averageMessageLength": 65,
        "hasEmojis": true,
        "conversationFlow": {
          "uniqueSpeakers": 6,
          "speakerTransitions": 18
        }
      }
    }
  ],
  "summary": {
    "totalMessages": 110,
    "averageMessagesPerConversation": 22,
    "conversationsWithEmojis": 4
  }
}
```

### Tips

- Run het script **voor** en **na** wijzigingen aan de prompts/personas
- Vergelijk de JSON files om te zien wat er veranderd is
- Let vooral op sprekersverdeling en transitions
- Check handmatig of reacties logisch zijn op de vorige berichten

