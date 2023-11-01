const abilities = [
  {
    id: 56,
    name: "Bloodspike",
    type: "Buff",
    description:
      "Cannot be <Dispelled>. When this unit dies, deal <Pure DMG> equal to the number of {Bloodspike} stack to all enemies",
    image: "buff_bloodspike.png",
  },
  {
    id: 4,
    name: "Bubble",
    type: "Buff",
    description:
      "Single Attack deal DMG = 1.5% of the target current HP per stack. Turn into {Bubble Bomb} upon reaching 5 stacks.",
    image: "buff_bubble.png",
  },
  {
    id: 5,
    name: "Bubble Bomb",
    type: "Buff",
    description:
      "Cannot be <Dispelled>. The next Single Attack make {Bubble Bomb} explode and deals 20 DMG to all enemies",
    image: "buff_bubble_bomb.png",
  },
  {
    id: 8,
    name: "Cleanser",
    type: "Buff",
    description:
      "Each stack negates up to 3 stacks or 3 turns of 1 Debuff applied to the target.",
    image: "buff_cleanser.png",
  },
  {
    id: 51,
    name: "Cocoon",
    type: "Buff",
    description:
      "When your opponent's turn starts, this Unit gains 4 Shield per stack. When that turn ends, if the Unit still has Shield, Retain 5% of that Shield per stack. Max stack: 10.",
    image: "buff_cocoon.png",
  },
  {
    id: 9,
    name: "Damage Boost",
    type: "Buff",
    description: "The target has Attack DMG increased by 1 per stack.",
    image: "buff_damage_boost.png",
  },
  {
    id: 52,
    name: "Eggshell",
    type: "Buff",
    description: "At the end of the turn, every summon gain 25 Shield.",
    image: "buff_eggshell.png",
  },
  {
    id: 6,
    name: "Feather",
    type: "Buff",
    description:
      "Deal 1 bonus DMG per hit. Whenever this Axie hits a target, increase this bonus by 1 DMG. When this Axie has no Feathers, bonus DMG is reset. When your turn ends, if this Axie used an Attack card, it loses 1 Feather.",
    image: "buff_feather.png",
  },
  {
    id: 10,
    name: "Healing Boost",
    type: "Buff",
    description:
      "Increase healing card effects to this unit by 1 HP per stack.",
    image: "buff_healing_boost.png",
  },
  {
    id: 3,
    name: "Leaf",
    type: "Buff",
    description:
      "The Unit heals 4 HP per stack at the end of its turn. Max stack: 10.",
    image: "buff_leaf.png",
  },
  {
    id: 38,
    name: "Meditate",
    type: "Buff",
    description:
      "Meditate for 2  turns. If attacked while Meditating, awake and gain 3 Rage. If not, Cleanse 1 debuff and gain 1 Energy after effect ends.",
    image: "buff_meditate.png",
  },
  {
    id: 1,
    name: "Rage",
    type: "Buff",
    description:
      "Attacks deal 1 bonus DMG per hit for each stack. This unit suffers 1 extra DMG per hit for each stack. Upon reaching 10 Rage stacks, consume all stacks and enter Fury form.",
    image: "buff_rage.png",
  },
  {
    id: 11,
    name: "Shield Boost",
    type: "Buff",
    description:
      "The target has Shield gained from cards increased by 1 per stack.",
    image: "buff_shield_boost.png",
  },
  {
    id: 58,
    name: "Snake Jar",
    type: "Buff",
    description:
      "Cannot be Dispelled. If this unit doesn't die in 6 turns, deal 100 DMG to all enemies.",
    image: "buff_snake_jar.png",
  },
  {
    id: 55,
    name: "Spike",
    type: "Buff",
    description:
      "When hit, consume 1 stack to reflect 5 DMG and gain 5 {Bloodspike}. Max stack: 10.",
    image: "buff_spike.png",
  },
  {
    id: 7,
    name: "Stealth",
    type: "Buff",
    description:
      "The target cannot be targeted directly. If it uses a card, remove Stealth.",
    image: "buff_stealth.png",
  },
  {
    id: 28,
    name: "Banish",
    type: "Card Property",
    description:
      "After usage, move the card to the Banish Pile, removing it from your deck until the end of battle.",
    image: "",
  },
  {
    id: 61,
    name: "Bloodstorms",
    type: "Card Property",
    description:
      "Reduce 1 turn of <Bleed> on the target to deal 15 pure DMG to all enemy Axies.",
    image: "",
  },
  {
    id: 45,
    name: "Class Bonus",
    type: "Card Property",
    description:
      "Increase (ATK/Heal/Shield) of this Card if used by an Axie of the same class.",
    image: "",
  },
  {
    id: 29,
    name: "Cleanse",
    type: "Card Property",
    description:
      "Remove 1 random Debuff from target, up to 3 stacks or 3 turns.",
    image: "",
  },
  {
    id: 53,
    name: "Cuckoo",
    type: "Card Property",
    description:
      "Prevent Sleep 1 time or grant 65 bonus DMG to the target's next Single Attack.",
    image: "",
  },
  {
    id: 31,
    name: "Deck",
    type: "Card Property",
    description:
      "The combined set of cards in your Draw pile, Discard pile and on your hand.",
    image: "",
  },
  {
    id: 41,
    name: "Degrade",
    type: "Card Property",
    description:
      "When your turn ends, if this card is still in your hand, it is Exiled and a Confuse Curse Card is shuffled into your Discard Pile.",
    image: "",
  },
  {
    id: 30,
    name: "Dispel",
    type: "Card Property",
    description: "Remove 1 random Buff from target, up to 3 stacks or 3 turns.",
    image: "",
  },
  {
    id: 60,
    name: "Energy Fragment",
    type: "Card Property",
    description:
      "Collecting enough Energy Fragments will cause an Energy Burst.",
    image: "",
  },
  {
    id: 32,
    name: "Ethereal",
    type: "Card Property",
    description:
      "When your turn ends, if the card is still in your hand, <Banish> it.",
    image: "",
  },
  {
    id: 43,
    name: "Exile",
    type: "Card Property",
    description:
      "After usage, the card disappears (not going to the Banish Pile) for the rest of the battle.",
    image: "",
  },
  {
    id: 33,
    name: "Initial",
    type: "Card Property",
    description: "The first card played in a turn.",
    image: "",
  },
  {
    id: 34,
    name: "Innate",
    type: "Card Property",
    description: "Start each battle with this card in your hand.",
    image: "",
  },
  {
    id: 59,
    name: "Keep",
    type: "Card Property",
    description:
      "A battle mechanic. Select cards in your Hand and they will be kept in your Hand till the end of your next turn.",
    image: "",
  },
  {
    id: 42,
    name: "Limit",
    type: "Card Property",
    description:
      "Only a set number of copies of this card can be played each turn. Once the limit is reached, other copies will be disabled till the end of turn.",
    image: "",
  },
  {
    id: 46,
    name: "Pure DMG",
    type: "Card Property",
    description: "Deal DMG that ignores Shield.",
    image: "",
  },
  {
    id: 35,
    name: "Retain",
    type: "Card Property",
    description:
      "This card will not be discarded from your hand at the end of your turn.",
    image: "",
  },
  {
    id: 57,
    name: "Return",
    type: "Card Property",
    description:
      "If this is not used, put it onto the top of your Draw Pile at the end of your turn.",
    image: "",
  },
  {
    id: 47,
    name: "Revenge",
    type: "Card Property",
    description:
      "Transformed from a Dead Axie’s Card based on its Original Type.",
    image: "",
  },
  {
    id: 44,
    name: "Round",
    type: "Card Property",
    description:
      "1 Round includes 1 of your Turn and 1 of the opponent's Turn.",
    image: "",
  },
  {
    id: 37,
    name: "Scry",
    type: "Card Property",
    description:
      "Look at the top cards of your draw pile. You may discard any of them.",
    image: "",
  },
  {
    id: 49,
    name: "Silence",
    type: "Card Property",
    description: "The target cannot use non-Attack abilities.",
    image: "",
  },
  {
    id: 39,
    name: "Solo",
    type: "Card Property",
    description: "Only 1 Axie per team can have this Effect activated.",
    image: "",
  },
  {
    id: 48,
    name: "Steal",
    type: "Card Property",
    description: "Deal Pure DMG and gain HP.",
    image: "",
  },
  {
    id: 36,
    name: "Unplayable",
    type: "Card Property",
    description: "This card cannot be played.",
    image: "",
  },
  {
    id: 40,
    name: "Unstable",
    type: "Card Property",
    description:
      "After usage, the card disappears, and a Confused card will be shuffled into your Discard pile. If contacts with <Banish>, <Banish> will override <Unstable>.",
    image: "",
  },
  {
    id: 54,
    name: "Bad Luck",
    type: "Debuff",
    description: "Increases Jinx damage by 5 per stack.",
    image: "debuff_bad_luck.png",
  },
  {
    id: 14,
    name: "Bleed",
    type: "Debuff",
    description: "Target loses 15 HP when playing a card.",
    image: "debuff_bleed.png",
  },
  {
    id: 15,
    name: "Death Mark",
    type: "Debuff",
    description:
      "Whenever your opponent plays an Attack card, the target takes 15 DMG per Energy spent.",
    image: "debuff_death_mark.png",
  },
  {
    id: 23,
    name: "Disarmed",
    type: "Debuff",
    description: "The target cannot use Attack Abilities.",
    image: "debuff_disarmed.png",
  },
  {
    id: 25,
    name: "Doubt",
    type: "Debuff",
    description: "The target gains 50% less HP from Healing.",
    image: "debuff_doubt.png",
  },
  {
    id: 21,
    name: "Fear",
    type: "Debuff",
    description:
      "Whenever the target uses an Attack card, shuffle a Confused into its draw pile.",
    image: "debuff_fear.png",
  },
  {
    id: 19,
    name: "Fragile",
    type: "Debuff",
    description: "The target gains 40% less Shield from cards.",
    image: "debuff_fragile.png",
  },
  {
    id: 50,
    name: "Grievous Wound",
    type: "Debuff",
    description:
      "Each time this Unit takes DMG from {Bleed}, it also takes 10 <Pure DMG> per {Grievous Wound} stack, then it gains 1 {Grievous Wound} stack. Max stack: 10.",
    image: "debuff_grievous_wound.png",
  },
  {
    id: 26,
    name: "Heal Block",
    type: "Debuff",
    description: "The target cannot be healed.",
    image: "debuff_heal_block.png",
  },
  {
    id: 22,
    name: "Hex",
    type: "Debuff",
    description:
      "Whenever the target uses a non-Attack card, shuffle a Confused into its draw pile.",
    image: "debuff_hex.png",
  },
  {
    id: 13,
    name: "Poison",
    type: "Debuff",
    description:
      "When your turn starts, this Unit loses 3 HP per stack of Poison, then remove 1 stack. Cap at 40 stacks.",
    image: "debuff_poison.png",
  },
  {
    id: 24,
    name: "Silence",
    type: "Debuff",
    description: "The target cannot use non-Attack Abilities.",
    image: "debuff_silence.png",
  },
  {
    id: 16,
    name: "Sleep",
    type: "Debuff",
    description:
      "While this Axie has Sleep, next time it plays a card, negate that card then remove Sleep. When this Axie is attacked, remove Sleep.",
    image: "debuff_sleep.png",
  },
  {
    id: 17,
    name: "Stunned",
    type: "Debuff",
    description: "Target cannot use any abilities.",
    image: "debuff_stunned.png",
  },
  {
    id: 18,
    name: "Vulnerable",
    type: "Debuff",
    description: "The Unit takes 20% more DMG from Attacks.",
    image: "debuff_vulnerable.png",
  },
  {
    id: 20,
    name: "Weak",
    type: "Debuff",
    description: "The target deals 20% less attack damage.",
    image: "debuff_weak.png",
  },
  {
    id: 27,
    name: "Taunt",
    type: "Neutral",
    description: "The target is always targeted by enemy's attack abilities",
    image: "neutral_taunt.png",
  },
  {
    id: 2,
    name: "Fury",
    type: "Transform/Buff",
    description:
      "Cannot be <Dispelled>. When transformed, gain 1 Energy, deal 50% bonus DMG but can't grant <Energy Fragment> and can't gain {Rage} until the end of turn.",
    image: "buff_fury.png",
  },
];
