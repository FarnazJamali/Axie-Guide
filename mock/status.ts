export interface IStatus {
  readonly value: string;
  readonly label: string;
  readonly type: string;
  readonly description: string;
  readonly image: string;
}

export const status_data = [
  {
    value: "Bad Luck",
    label: "Bad Luck (Debuff)",
    type: "Debuff",
    description: "Increases Jinx damage by 5 per stack.",
    image: "/img/png/debuff_bad_luck.png",
  },
  {
    value: "Bleed",
    label: "Bleed (Debuff)",
    type: "Debuff",
    description: "Target loses 15 HP when playing a card.",
    image: "/img/png/debuff_bleed.png",
  },
  {
    value: "Bloodspike",
    label: "Bloodspike (Buff)",
    type: "Buff",
    description:
      "Cannot be Dispelled. When this unit dies, deal <Pure DMG> equal to the number of Bloodspike stack to all enemies",
    image: "/img/png/buff_bloodspike.png",
  },
  {
    value: "Bubble",
    label: "Bubble (Buff)",
    type: "Buff",
    description:
      "Single Attack deal DMG = 1.5% of the target current HP per stack. Turn into Bubble Bomb upon reaching 5 stacks.",
    image: "/img/png/buff_bubble.png",
  },
  {
    value: "Bubble Bomb",
    label: "Bubble Bomb (Buff)",
    type: "Buff",
    description:
      "Cannot be Dispelled. The next Single Attack make Bubble Bomb explode and deals 20 DMG to all enemies",
    image: "/img/png/buff_bubble_bomb.png",
  },
  {
    value: "Cleanser",
    label: "Cleanser (Buff)",
    type: "Buff",
    description:
      "Each stack negates up to 3 stacks or 3 turns of 1 Debuff applied to the target.",
    image: "/img/png/buff_cleanser.png",
  },
  {
    value: "Cocoon",
    label: "Cocoon (Buff)",
    type: "Buff",
    description:
      "When your opponent's turn starts, this Unit gains 4 Shield per stack. When that turn ends, if the Unit still has Shield, Retain 5% of that Shield per stack. Max stack: 10.",
    image: "/img/png/buff_cocoon.png",
  },
  {
    value: "Damage Boost",
    label: "Damage Boost (Buff)",
    type: "Buff",
    description: "The target has Attack DMG increased by 1 per stack.",
    image: "/img/png/buff_damage_boost.png",
  },
  {
    value: "Death Mark",
    label: "Death Mark (Debuff)",
    type: "Debuff",
    description:
      "Whenever your opponent plays an Attack card, the target takes 15 DMG per Energy spent.",
    image: "/img/png/debuff_death_mark.png",
  },
  {
    value: "Disarmed",
    label: "Disarmed (Debuff)",
    type: "Debuff",
    description: "The target cannot use Attack Abilities.",
    image: "/img/png/debuff_disarmed.png",
  },
  {
    value: "Doubt",
    label: "Doubt (Debuff)",
    type: "Debuff",
    description: "The target gains 50% less HP from Healing.",
    image: "/img/png/debuff_doubt.png",
  },
  {
    value: "Eggshell",
    label: "Eggshell (Buff)",
    type: "Buff",
    description: "At the end of the turn, every summon gain 25 Shield.",
    image: "/img/png/buff_eggshell.png",
  },
  {
    value: "Fear",
    label: "Fear (Debuff)",
    type: "Debuff",
    description:
      "Whenever the target uses an Attack card, shuffle a Confused into its draw pile.",
    image: "/img/png/debuff_fear.png",
  },
  {
    value: "Feather",
    label: "Feather (Buff)",
    type: "Buff",
    description:
      "Deal 1 bonus DMG per hit. Whenever this Axie hits a target, increase this bonus by 1 DMG. When this Axie has no Feathers, bonus DMG is reset. When your turn ends, if this Axie used an Attack card, it loses 1 Feather.",
    image: "/img/png/buff_feather.png",
  },
  {
    value: "Fragile",
    label: "Fragile (Debuff)",
    type: "Debuff",
    description: "/img/png/The target gains 40% less Shield from cards.",
    image: "/img/png/debuff_fragile.png",
  },
  {
    value: "Fury",
    label: "Fury (Buff)",
    type: "Buff",
    description:
      "Cannot be Dispelled. When transformed, gain 1 Energy, deal 50% bonus DMG but can't grant Energy Fragment and can't gain Rage until the end of turn.",
    image: "/img/png/buff_fury.png",
  },
  {
    value: "Grievous Wound",
    label: "Grievous Wound (Debuff)",
    type: "Debuff",
    description:
      "Each time this Unit takes DMG from Bleed, it also takes 10 Pure DMG per Grievous Wound stack, then it gains 1 Grievous Wound stack. Max stack: 10.",
    image: "/img/png/debuff_grievous_wound.png",
  },
  {
    value: "Heal Block",
    label: "Heal Block (Debuff)",
    type: "Debuff",
    description: "The target cannot be healed.",
    image: "/img/png/debuff_heal_block.png",
  },
  {
    value: "Healing Boost",
    label: "Healing Boost (Buff)",
    type: "Buff",
    description:
      "Increase healing card effects to this unit by 1 HP per stack.",
    image: "/img/png/buff_healing_boost.png",
  },
  {
    value: "Hex",
    label: "Hex (Debuff)",
    type: "Debuff",
    description:
      "Whenever the target uses a non-Attack card, shuffle a Confused into its draw pile.",
    image: "/img/png/debuff_hex.png",
  },
  {
    value: "Leaf",
    label: "Leaf (Buff)",
    type: "Buff",
    description:
      "The Unit heals 4 HP per stack at the end of its turn. Max stack: 10.",
    image: "/img/png/buff_leaf.png",
  },
  {
    value: "Meditate",
    label: "Meditate (Buff)",
    type: "Buff",
    description:
      "Meditate for 2  turns. If attacked while Meditating, awake and gain 3 Rage. If not, Cleanse 1 debuff and gain 1 Energy after effect ends.",
    image: "/img/png/buff_meditate.png",
  },
  {
    value: "Poison",
    label: "Poison (Debuff)",
    type: "Debuff",
    description:
      "When your turn starts, this Unit loses 3 HP per stack of Poison, then remove 1 stack. Cap at 40 stacks.",
    image: "/img/png/debuff_poison.png",
  },
  {
    value: "Rage",
    label: "Rage (Buff)",
    type: "Buff",
    description:
      "Attacks deal 1 bonus DMG per hit for each stack. This unit suffers 1 extra DMG per hit for each stack. Upon reaching 10 Rage stacks, consume all stacks and enter Fury form.",
    image: "/img/png/buff_rage.png",
  },
  {
    value: "Shield Boost",
    label: "Shield Boost (Buff)",
    type: "Buff",
    description:
      "The target has Shield gained from cards increased by 1 per stack.",
    image: "/img/png/buff_shield_boost.png",
  },
  {
    value: "Silence",
    label: "Silence (Debuff)",
    type: "Debuff",
    description: "The target cannot use non-Attack Abilities.",
    image: "/img/png/debuff_silence.png",
  },
  {
    value: "Sleep",
    label: "Sleep (Debuff)",
    type: "Debuff",
    description:
      "While this Axie has Sleep, next time it plays a card, negate that card then remove Sleep. When this Axie is attacked, remove Sleep.",
    image: "/img/png/debuff_sleep.png",
  },
  {
    value: "Snake Jar",
    label: "Snake Jar (Buff)",
    type: "Buff",
    description:
      "Cannot be Dispelled. If this unit doesn't die in 6 turns, deal 100 DMG to all enemies.",
    image: "/img/png/buff_snake_jar.png",
  },
  {
    vqlue: "Spike",
    label: "Spike (Buff)",
    type: "Buff",
    description:
      "When hit, consume 1 stack to reflect 5 DMG and gain 5 Bloodspike. Max stack: 10.",
    image: "/img/png/buff_spike.png",
  },
  {
    value: "Stealth",
    label: "Stealth (Buff)",
    type: "Buff",
    description:
      "The target cannot be targeted directly. If it uses a card, remove Stealth.",
    image: "/img/png/buff_stealth.png",
  },
  {
    value: "Stunned",
    label: "Stunned (Debuff)",
    type: "Debuff",
    description: "Target cannot use any abilities.",
    image: "/img/png/debuff_stunned.png",
  },
  {
    value: "Taunt",
    label: "Taunt (Neutral)",
    type: "Neutral",
    description: "The target is always targeted by enemy's attack abilities",
    image: "/img/png/neutral_taunt.png",
  },
  {
    value: "Vulnerable",
    label: "Vulnerable (Debuff)",
    type: "Debuff",
    description: "The Unit takes 20% more DMG from Attacks.",
    image: "/img/png/debuff_vulnerable.png",
  },
  {
    value: "Weak",
    label: "Weak (Debuff)",
    type: "Debuff",
    description: "The target deals 20% less attack damage.",
    image: "/img/png/debuff_weak.png",
  },
];
