const runes = [
  {
    id: 22,
    tokenId: 0,
    itemId: "rune_aquatic_3001_s0",
    name: "Bloodlust",
    class: "Aquatic",
    isBlockchain: 0,
    rarity: "Epic",
    effect:
      "Single attacks {Steal} 12 HP. AoE and Multihit attacks {Steal} 3 HP per hit.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_aquatic_hybrid_1.png",
    season: "Season 0",
  },
  {
    id: 26,
    tokenId: 0,
    itemId: "rune_aquatic_hybrid_1",
    name: "Bloodlust",
    class: "Aquatic",
    isBlockchain: 0,
    rarity: "Epic",
    effect:
      "Non-Multihit Attacks {Steal} 12 HP. Multihit Attacks {Steal} 3 HP per hit.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_aquatic_hybrid_1.png",
    season: "Season Alpha",
  },
  {
    id: 151,
    tokenId: 0,
    itemId: "rune_aquatic_3001_s1",
    name: "Bloodlust",
    class: "Aquatic",
    isBlockchain: 0,
    rarity: "Epic",
    effect:
      "Attacks that cause HP loss will {Steal}s HP. Single attacks {Steal}s 12 HP. AoE and Multihit attacks {Steal}s 4 HP per hit.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_aquatic_hybrid_1.png",
    season: "Season 1",
  },
  {
    id: 329,
    tokenId: 0,
    itemId: "rune_aquatic_3010_s2_nondec",
    name: "Calcium Armor",
    class: "Aquatic",
    isBlockchain: 0,
    rarity: "Epic",
    effect:
      "{Solo}. When your turn starts, this Axie gains Shield = 10% of its max HP.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_aquatic_defensive_1.png",
    season: "Season 2",
  },
  {
    id: 396,
    tokenId: 0,
    itemId: "rune_aquatic_3010_s2",
    name: "Calcium Armor",
    class: "Aquatic",
    isBlockchain: 0,
    rarity: "Epic",
    effect:
      "{Solo}. When your turn starts, this Axie gains Shield = 10% of its max HP.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_aquatic_defensive_1.png",
    season: "Season 2",
  },
  {
    id: 574,
    tokenId: 0,
    itemId: "rune_aquatic_3011_s3",
    name: "Calcium Armor",
    class: "Aquatic",
    isBlockchain: 0,
    rarity: "Epic",
    effect:
      "{Solo}. When your turn starts, this Axie gains Shield = 10% of its max HP.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_aquatic_defensive_1.png",
    season: "Season 3",
  },
  {
    id: 735,
    tokenId: 0,
    itemId: "rune_aquatic_3011_s3_nondec",
    name: "Calcium Armor",
    class: "Aquatic",
    isBlockchain: 0,
    rarity: "Epic",
    effect:
      "{Solo}. When your turn starts, this Axie gains Shield = 10% of its max HP.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_aquatic_defensive_1.png",
    season: "Season 3",
  },
  {
    id: 833,
    tokenId: 0,
    itemId: "rune_aquatic_3011_s4",
    name: "Calcium Armor",
    class: "Aquatic",
    isBlockchain: 0,
    rarity: "Epic",
    effect:
      "{Solo}. When your turn starts, this Axie gains Shield = 10% of its max HP.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_aquatic_defensive_1.png",
    season: "Season 4",
  },
  {
    id: 836,
    tokenId: 0,
    itemId: "rune_aquatic_3011_s4_nondec",
    name: "Calcium Armor",
    class: "Aquatic",
    isBlockchain: 0,
    rarity: "Epic",
    effect:
      "{Solo}. When your turn starts, this Axie gains Shield = 10% of its max HP.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_aquatic_defensive_1.png",
    season: "Season 4",
  },
  {
    id: 466,
    tokenId: 0,
    itemId: "rune_aquatic_3010_s1",
    name: "Calcium Armor (S1.5)",
    class: "Aquatic",
    isBlockchain: 0,
    rarity: "Epic",
    effect:
      "{Solo}. When your turn starts, this Axie gains Shield = 10% of its max HP.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_aquatic_defensive_1.png",
    season: "Season 1",
  },
  {
    id: 331,
    tokenId: 0,
    itemId: "rune_aquatic_3011_s2",
    name: "Giant Bubble",
    class: "Aquatic",
    isBlockchain: 0,
    rarity: "Epic",
    effect:
      "{Solo}. Before the battle starts, add 1 [Giant Bubble] to your Deck.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_giant_bubble.png",
    season: "Season 2",
  },
  {
    id: 397,
    tokenId: 0,
    itemId: "rune_aquatic_3011_s2_nondec",
    name: "Giant Bubble",
    class: "Aquatic",
    isBlockchain: 0,
    rarity: "Epic",
    effect:
      "{Solo}. Before the battle starts, add 1 [Giant Bubble] to your Deck.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_giant_bubble.png",
    season: "Season 2",
  },
  {
    id: 558,
    tokenId: 0,
    itemId: "rune_aquatic_3012_s3",
    name: "Giant Bubble",
    class: "Aquatic",
    isBlockchain: 0,
    rarity: "Epic",
    effect:
      "{Solo}. Before the battle starts, add 1 [Giant Bubble] to your Deck.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_giant_bubble.png",
    season: "Season 3",
  },
  {
    id: 682,
    tokenId: 0,
    itemId: "rune_aquatic_3012_s3_nondec",
    name: "Giant Bubble",
    class: "Aquatic",
    isBlockchain: 0,
    rarity: "Epic",
    effect:
      "{Solo}. Before the battle starts, add 1 [Giant Bubble] to your Deck.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_giant_bubble.png",
    season: "Season 3",
  },
  {
    id: 886,
    tokenId: 0,
    itemId: "rune_aquatic_3012_s4",
    name: "Giant Bubble",
    class: "Aquatic",
    isBlockchain: 0,
    rarity: "Epic",
    effect:
      "{Solo}. Before the battle starts, add 1 [Giant Bubble] to your Deck.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_giant_bubble.png",
    season: "Season 4",
  },
  {
    id: 923,
    tokenId: 0,
    itemId: "rune_aquatic_3012_s4_nondec",
    name: "Giant Bubble",
    class: "Aquatic",
    isBlockchain: 0,
    rarity: "Epic",
    effect:
      "{Solo}. Before the battle starts, add 1 [Giant Bubble] to your Deck.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_giant_bubble.png",
    season: "Season 4",
  },
  {
    id: 524,
    tokenId: 0,
    itemId: "rune_aquatic_3011_s1",
    name: "Giant Bubble (S1.5)",
    class: "Aquatic",
    isBlockchain: 0,
    rarity: "Epic",
    effect:
      "{Solo}. Before the battle starts, add 1 [Giant Bubble] to your Deck.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_giant_bubble.png",
    season: "Season 1",
  },
  {
    id: 586,
    tokenId: 0,
    itemId: "rune_aquatic_3010_s3",
    name: "Hearty Warrior",
    class: "Aquatic",
    isBlockchain: 0,
    rarity: "Epic",
    effect:
      "{Solo}. This Axie's Attack deal 25% bonus DMG if the target's HP is >= 50%; otherwise, deal 15% bonus DMG.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_aquatic_offensive_1.png",
    season: "Season 3",
  },
  {
    id: 644,
    tokenId: 0,
    itemId: "rune_aquatic_3010_s3_nondec",
    name: "Hearty Warrior",
    class: "Aquatic",
    isBlockchain: 0,
    rarity: "Epic",
    effect:
      "{Solo}. This Axie's Attack deal 25% bonus DMG if the target's HP is >= 50%; otherwise, deal 15% bonus DMG.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_aquatic_offensive_1.png",
    season: "Season 3",
  },
  {
    id: 763,
    tokenId: 0,
    itemId: "rune_aquatic_3010_s4",
    name: "Hearty Warrior",
    class: "Aquatic",
    isBlockchain: 0,
    rarity: "Epic",
    effect:
      "{Solo}. This Axie's Attack deal 25% bonus DMG if the target's HP is >= 50%; otherwise, deal 15% bonus DMG.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_aquatic_offensive_1.png",
    season: "Season 4",
  },
  {
    id: 962,
    tokenId: 0,
    itemId: "rune_aquatic_3010_s4_nondec",
    name: "Hearty Warrior",
    class: "Aquatic",
    isBlockchain: 0,
    rarity: "Epic",
    effect:
      "{Solo}. This Axie's Attack deal 25% bonus DMG if the target's HP is >= 50%; otherwise, deal 15% bonus DMG.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_aquatic_offensive_1.png",
    season: "Season 4",
  },
  {
    id: 594,
    tokenId: 0,
    itemId: "rune_aquatic_4011_s3",
    name: "Bloodlust",
    class: "Aquatic",
    isBlockchain: 0,
    rarity: "Mystic",
    effect:
      "{Solo}. This Axie's Single Attacks Steal 15 HP.\nThis Axie's AOE and Multihit Attacks Steal 5 HP per hit. ",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_aquatic_hybrid_1.png",
    season: "Season 3",
  },
  {
    id: 662,
    tokenId: 0,
    itemId: "rune_aquatic_4011_s3_nondec",
    name: "Bloodlust",
    class: "Aquatic",
    isBlockchain: 0,
    rarity: "Mystic",
    effect:
      "{Solo}. This Axie's Single Attacks Steal 15 HP.\nThis Axie's AOE and Multihit Attacks Steal 5 HP per hit. ",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_aquatic_hybrid_1.png",
    season: "Season 3",
  },
  {
    id: 780,
    tokenId: 0,
    itemId: "rune_aquatic_4011_s4",
    name: "Bloodlust",
    class: "Aquatic",
    isBlockchain: 0,
    rarity: "Mystic",
    effect:
      "{Solo}. This Axie's Single Attacks Steal 15 HP.\nThis Axie's AOE and Multihit Attacks Steal 5 HP per hit. ",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_aquatic_hybrid_1.png",
    season: "Season 4",
  },
  {
    id: 868,
    tokenId: 0,
    itemId: "rune_aquatic_4011_s4_nondec",
    name: "Bloodlust",
    class: "Aquatic",
    isBlockchain: 0,
    rarity: "Mystic",
    effect:
      "{Solo}. This Axie's Single Attacks Steal 15 HP.\nThis Axie's AOE and Multihit Attacks Steal 5 HP per hit. ",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_aquatic_hybrid_1.png",
    season: "Season 4",
  },
  {
    id: 654,
    tokenId: 0,
    itemId: "rune_aquatic_4010_s3_nondec",
    name: "Heart of Ocean",
    class: "Aquatic",
    isBlockchain: 0,
    rarity: "Mystic",
    effect:
      "{Solo}. When your turn starts, this Axie gains 1 {Bubble}. {Bubble Bomb} detonated by this Axie deal 50% bonus DMG.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_aquatic_utility_1.png",
    season: "Season 3",
  },
  {
    id: 802,
    tokenId: 0,
    itemId: "rune_aquatic_4010_s4_nondec",
    name: "Heart of Ocean",
    class: "Aquatic",
    isBlockchain: 0,
    rarity: "Mystic",
    effect:
      "{Solo}. When your turn starts, this Axie gains 1 {Bubble}. {Bubble Bomb} detonated by this Axie deal 50% bonus DMG.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_aquatic_utility_1.png",
    season: "Season 4",
  },
  {
    id: 858,
    tokenId: 0,
    itemId: "rune_aquatic_4010_s4",
    name: "Heart of Ocean",
    class: "Aquatic",
    isBlockchain: 0,
    rarity: "Mystic",
    effect:
      "{Solo}. When your turn starts, this Axie gains 1 {Bubble}. {Bubble Bomb} detonated by this Axie deal 50% bonus DMG.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_aquatic_utility_1.png",
    season: "Season 4",
  },
  {
    id: 71,
    tokenId: 0,
    itemId: "rune_aquatic_utility_1",
    name: "Heart of Ocean",
    class: "Aquatic",
    isBlockchain: 0,
    rarity: "Mystic",
    effect:
      "{Solo}. When your turn starts, this Axie gains 1 {Bubble}. {Bubble Bomb} detonated by this Axie deal double DMG.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_aquatic_utility_1.png",
    season: "Season Alpha",
  },
  {
    id: 88,
    tokenId: 0,
    itemId: "rune_aquatic_4001_s0",
    name: "Heart of Ocean",
    class: "Aquatic",
    isBlockchain: 0,
    rarity: "Mystic",
    effect:
      "{Solo}. When your turn starts, this Axie gains 1 {Bubble}. {Bubble Bomb} detonated by this Axie deal x1.5 DMG.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_aquatic_utility_1.png",
    season: "Season 0",
  },
  {
    id: 165,
    tokenId: 0,
    itemId: "rune_aquatic_4001_s1",
    name: "Heart of Ocean",
    class: "Aquatic",
    isBlockchain: 0,
    rarity: "Mystic",
    effect:
      "{Solo}. When your turn starts, this Axie gains 1 {Bubble}. {Bubble Bomb} detonated by this Axie deal x1.5 DMG.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_aquatic_utility_1.png",
    season: "Season 1",
  },
  {
    id: 307,
    tokenId: 0,
    itemId: "rune_aquatic_4010_s2",
    name: "Heart of Ocean",
    class: "Aquatic",
    isBlockchain: 0,
    rarity: "Mystic",
    effect:
      "{Solo}. When your turn starts, this Axie gains 1 {Bubble}. {Bubble Bomb} detonated by this Axie deal 50% bonus DMG.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_aquatic_utility_1.png",
    season: "Season 2",
  },
  {
    id: 392,
    tokenId: 0,
    itemId: "rune_aquatic_4010_s2_nondec",
    name: "Heart of Ocean",
    class: "Aquatic",
    isBlockchain: 0,
    rarity: "Mystic",
    effect:
      "{Solo}. When your turn starts, this Axie gains 1 {Bubble}. {Bubble Bomb} detonated by this Axie deal 50% bonus DMG.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_aquatic_utility_1.png",
    season: "Season 2",
  },
  {
    id: 542,
    tokenId: 0,
    itemId: "rune_aquatic_4010_s3",
    name: "Heart of Ocean",
    class: "Aquatic",
    isBlockchain: 0,
    rarity: "Mystic",
    effect:
      "{Solo}. When your turn starts, this Axie gains 1 {Bubble}. {Bubble Bomb} detonated by this Axie deal 50% bonus DMG.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_aquatic_utility_1.png",
    season: "Season 3",
  },
  {
    id: 415,
    tokenId: 0,
    itemId: "rune_aquatic_4010_s1",
    name: "Heart of Ocean (S1.5)",
    class: "Aquatic",
    isBlockchain: 0,
    rarity: "Mystic",
    effect:
      "{Solo}. When your turn starts, this Axie gains 1 {Bubble}. {Bubble Bomb} detonated by this Axie deal 50% bonus DMG.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_aquatic_utility_1.png",
    season: "Season 1",
  },
  {
    id: 440,
    tokenId: 0,
    itemId: "rune_aquatic_2012_s2_nondec",
    name: "Blunt Teeth",
    class: "Aquatic",
    isBlockchain: 0,
    rarity: "Rare",
    effect:
      "This Axie's Attack cards deal 30% less DMG but grant 1 bonus <Energy Fragment> per their Energy cost.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_blunt_teeth.png",
    season: "Season 2",
  },
  {
    id: 519,
    tokenId: 0,
    itemId: "rune_aquatic_2012_s2",
    name: "Blunt Teeth",
    class: "Aquatic",
    isBlockchain: 0,
    rarity: "Rare",
    effect:
      "This Axie's Attack cards deal 30% less DMG but grant 1 bonus <Energy Fragment> per their Energy cost.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_blunt_teeth.png",
    season: "Season 2",
  },
  {
    id: 602,
    tokenId: 0,
    itemId: "rune_aquatic_2011_s3",
    name: "Blunt Teeth",
    class: "Aquatic",
    isBlockchain: 0,
    rarity: "Rare",
    effect:
      "This Axie's Attack cards deal 15% less DMG but grant 1 bonus <Energy Fragment> per Energy spent.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_blunt_teeth.png",
    season: "Season 3",
  },
  {
    id: 719,
    tokenId: 0,
    itemId: "rune_aquatic_2011_s3_nondec",
    name: "Blunt Teeth",
    class: "Aquatic",
    isBlockchain: 0,
    rarity: "Rare",
    effect:
      "This Axie's Attack cards deal 15% less DMG but grant 1 bonus <Energy Fragment> per Energy spent.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_blunt_teeth.png",
    season: "Season 3",
  },
  {
    id: 783,
    tokenId: 0,
    itemId: "rune_aquatic_2011_s4_nondec",
    name: "Blunt Teeth",
    class: "Aquatic",
    isBlockchain: 0,
    rarity: "Rare",
    effect:
      "This Axie's Attack cards deal 15% less DMG but grant 1 bonus <Energy Fragment> per Energy spent.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_blunt_teeth.png",
    season: "Season 4",
  },
  {
    id: 795,
    tokenId: 0,
    itemId: "rune_aquatic_2011_s4",
    name: "Blunt Teeth",
    class: "Aquatic",
    isBlockchain: 0,
    rarity: "Rare",
    effect:
      "This Axie's Attack cards deal 15% less DMG but grant 1 bonus <Energy Fragment> per Energy spent.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_blunt_teeth.png",
    season: "Season 4",
  },
  {
    id: 385,
    tokenId: 0,
    itemId: "rune_aquatic_2012_s1",
    name: "Blunt Teeth (S1.5)",
    class: "Aquatic",
    isBlockchain: 0,
    rarity: "Rare",
    effect:
      "This Axie's Attack cards deal 30% less DMG but grant 1 bonus <Energy Fragment> per their Energy cost.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_blunt_teeth.png",
    season: "Season 1",
  },
  {
    id: 817,
    tokenId: 0,
    itemId: "rune_aquatic_puffy_1",
    name: "Bubble Shooter",
    class: "Aquatic",
    isBlockchain: 0,
    rarity: "Rare",
    effect:
      "Until <Round> 4, when your turn starts, gain 1 {Bubble}.\nBubble's bonus DMG also applies to Multihit and AOE Attacks at 1/3 of the base value.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_aquatic_puffy_1.png",
    season: null,
  },
  {
    id: 51,
    tokenId: 0,
    itemId: "rune_aquatic_2001_s0",
    name: "Calcium Armor",
    class: "Aquatic",
    isBlockchain: 0,
    rarity: "Rare",
    effect: "At the beginning of your turn, gain Shield equal to 4% of max HP.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_aquatic_defensive_1.png",
    season: "Season 0",
  },
  {
    id: 117,
    tokenId: 0,
    itemId: "rune_aquatic_defensive_1",
    name: "Calcium Armor",
    class: "Aquatic",
    isBlockchain: 0,
    rarity: "Rare",
    effect: "At the beginning of your turn, gain Shield equal to 4% of max HP.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_aquatic_defensive_1.png",
    season: "Season Alpha",
  },
  {
    id: 138,
    tokenId: 0,
    itemId: "rune_aquatic_2001_s1",
    name: "Calcium Armor",
    class: "Aquatic",
    isBlockchain: 0,
    rarity: "Rare",
    effect:
      "{Solo}. At the begining of your turn, gain Shield equal 10% max HP.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_aquatic_defensive_1.png",
    season: "Season 1",
  },
  {
    id: 12,
    tokenId: 0,
    itemId: "rune_aquatic_offensive_1",
    name: "Hearty Warrior",
    class: "Aquatic",
    isBlockchain: 0,
    rarity: "Rare",
    effect:
      "Non-Multihit attack deal bonus DMG equal to 5% of remaining HP. Multihit attack deal bonus DMG equal to 3% of remaining HP.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_aquatic_offensive_1.png",
    season: "Season Alpha",
  },
  {
    id: 65,
    tokenId: 0,
    itemId: "rune_aquatic_2002_s0",
    name: "Hearty Warrior",
    class: "Aquatic",
    isBlockchain: 0,
    rarity: "Rare",
    effect:
      "Single attacks attack deal bonus DMG equal to 5% of remaining HP. AoE and multihit attacks deal bonus DMG equal to 3% of remaining HP.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_aquatic_offensive_1.png",
    season: "Season 0",
  },
  {
    id: 180,
    tokenId: 0,
    itemId: "rune_aquatic_2002_s1",
    name: "Hearty Warrior",
    class: "Aquatic",
    isBlockchain: 0,
    rarity: "Rare",
    effect: "This Axie deals 25% bonus DMG if the target's HP is above 60%.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_aquatic_offensive_1.png",
    season: "Season 1",
  },
  {
    id: 461,
    tokenId: 0,
    itemId: "rune_aquatic_2011_s2",
    name: "Hearty Warrior",
    class: "Aquatic",
    isBlockchain: 0,
    rarity: "Rare",
    effect: "This Axie deals 25% bonus DMG if its target's HP is > 60%.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_aquatic_offensive_1.png",
    season: "Season 2",
  },
  {
    id: 522,
    tokenId: 0,
    itemId: "rune_aquatic_2011_s2_nondec",
    name: "Hearty Warrior",
    class: "Aquatic",
    isBlockchain: 0,
    rarity: "Rare",
    effect: "This Axie deals 25% bonus DMG if its target's HP is > 60%.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_aquatic_offensive_1.png",
    season: "Season 2",
  },
  {
    id: 474,
    tokenId: 0,
    itemId: "rune_aquatic_2011_s1",
    name: "Hearty Warrior (S1.5)",
    class: "Aquatic",
    isBlockchain: 0,
    rarity: "Rare",
    effect: "This Axie deals 25% bonus DMG if its target's HP is > 60%.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_aquatic_offensive_1.png",
    season: "Season 1",
  },
  {
    id: 304,
    tokenId: 0,
    itemId: "rune_aquatic_2010_s2_nondec",
    name: "Way of Aquatic",
    class: "Aquatic",
    isBlockchain: 0,
    rarity: "Rare",
    effect:
      "When the battle starts, this Axie gains 1 {Bubble}, then its Attacks deal 10% bonus DMG for the rest of the battle.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_way_of_aquatic.png",
    season: "Season 2",
  },
  {
    id: 437,
    tokenId: 0,
    itemId: "rune_aquatic_2010_s2",
    name: "Way of Aquatic",
    class: "Aquatic",
    isBlockchain: 0,
    rarity: "Rare",
    effect:
      "When the battle starts, this Axie gains 1 {Bubble}, then its Attacks deal 10% bonus DMG for the rest of the battle.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_way_of_aquatic.png",
    season: "Season 2",
  },
  {
    id: 596,
    tokenId: 0,
    itemId: "rune_aquatic_2010_s3",
    name: "Way of Aquatic",
    class: "Aquatic",
    isBlockchain: 0,
    rarity: "Rare",
    effect:
      "When the battle starts, this Axie gains 1 {Bubble}. This Axie's Attack cards deal 15% bonus DMG.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_way_of_aquatic.png",
    season: "Season 3",
  },
  {
    id: 743,
    tokenId: 0,
    itemId: "rune_aquatic_2010_s3_nondec",
    name: "Way of Aquatic",
    class: "Aquatic",
    isBlockchain: 0,
    rarity: "Rare",
    effect:
      "When the battle starts, this Axie gains 1 {Bubble}. This Axie's Attack cards deal 15% bonus DMG.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_way_of_aquatic.png",
    season: "Season 3",
  },
  {
    id: 895,
    tokenId: 0,
    itemId: "rune_aquatic_2010_s4",
    name: "Way of Aquatic",
    class: "Aquatic",
    isBlockchain: 0,
    rarity: "Rare",
    effect:
      "When the battle starts, this Axie gains 1 {Bubble}. This Axie's Attack cards deal 15% bonus DMG.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_way_of_aquatic.png",
    season: "Season 4",
  },
  {
    id: 959,
    tokenId: 0,
    itemId: "rune_aquatic_2010_s4_nondec",
    name: "Way of Aquatic",
    class: "Aquatic",
    isBlockchain: 0,
    rarity: "Rare",
    effect:
      "When the battle starts, this Axie gains 1 {Bubble}. This Axie's Attack cards deal 15% bonus DMG.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_way_of_aquatic.png",
    season: "Season 4",
  },
  {
    id: 296,
    tokenId: 0,
    itemId: "rune_aquatic_2010_s1",
    name: "Way of Aquatic (S1.5)",
    class: "Aquatic",
    isBlockchain: 0,
    rarity: "Rare",
    effect:
      "When the battle starts, this Axie gains 1 {Bubble}, then its Attacks deal 10% bonus DMG for the rest of the battle.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_way_of_aquatic.png",
    season: "Season 1",
  },
  {
    id: 14,
    tokenId: 0,
    itemId: "rune_beast_3001_s0",
    name: "Dominant Predator",
    class: "Beast",
    isBlockchain: 0,
    rarity: "Epic",
    effect:
      "\"Single attacks apply {Bleed} for 2 turns if target doesn't have {Bleed} and this Axie's HP is above 75%. Deal 20% more DMG against Bleeding Enemies.\nTake 10% less DMG from Bleeding Enemies\"",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_beast_hybrid_1.png",
    season: "Season 0",
  },
  {
    id: 24,
    tokenId: 0,
    itemId: "rune_beast_hybrid_1",
    name: "Dominant Predator",
    class: "Beast",
    isBlockchain: 0,
    rarity: "Epic",
    effect:
      "Deal 20% more DMG against Bleeding Enemies\nTake 10% less DMG from Bleeding Enemies",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_beast_hybrid_1.png",
    season: "Season Alpha",
  },
  {
    id: 191,
    tokenId: 0,
    itemId: "rune_beast_3001_s1",
    name: "Dominant Predator",
    class: "Beast",
    isBlockchain: 0,
    rarity: "Epic",
    effect:
      "Single attacks apply {Bleed} for 2 turns if the target doesn't have {Bleed}. Attacks against bleeding enemies deal 10% more DMG and recover 15 HP after all hit.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_beast_hybrid_1.png",
    season: "Season 1",
  },
  {
    id: 403,
    tokenId: 0,
    itemId: "rune_beast_3011_s2_nondec",
    name: "Glorious Mane",
    class: "Beast",
    isBlockchain: 0,
    rarity: "Epic",
    effect:
      "{Solo}. This Axie's Single Attacks no longer grant <Energy Fragment>, but gain a permanent 10 bonus DMG to itself when played.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_glorious_mane.png",
    season: "Season 2",
  },
  {
    id: 529,
    tokenId: 0,
    itemId: "rune_beast_3011_s2",
    name: "Glorious Mane",
    class: "Beast",
    isBlockchain: 0,
    rarity: "Epic",
    effect:
      "{Solo}. This Axie's Single Attacks no longer grant <Energy Fragment>, but gain a permanent 10 bonus DMG to itself when played.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_glorious_mane.png",
    season: "Season 2",
  },
  {
    id: 532,
    tokenId: 0,
    itemId: "rune_beast_3012_s3",
    name: "Glorious Mane",
    class: "Beast",
    isBlockchain: 0,
    rarity: "Epic",
    effect:
      "{Solo}. This Axie's Attacks no longer grant <Energy Fragment>, but their base DMG is increased by 6% per Energy Spent whenever this Axie attacks.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_glorious_mane.png",
    season: "Season 3",
  },
  {
    id: 652,
    tokenId: 0,
    itemId: "rune_beast_3012_s3_nondec",
    name: "Glorious Mane",
    class: "Beast",
    isBlockchain: 0,
    rarity: "Epic",
    effect:
      "{Solo}. This Axie's Attacks no longer grant <Energy Fragment>, but their base DMG is increased by 6% per Energy Spent whenever this Axie attacks.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_glorious_mane.png",
    season: "Season 3",
  },
  {
    id: 812,
    tokenId: 0,
    itemId: "rune_beast_3012_s4_nondec",
    name: "Glorious Mane",
    class: "Beast",
    isBlockchain: 0,
    rarity: "Epic",
    effect:
      "{Solo}. This Axie's Attacks no longer grant <Energy Fragment>, but their base DMG is increased by 10% per Energy Spent whenever this Axie attacks.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_glorious_mane.png",
    season: "Season 4",
  },
  {
    id: 884,
    tokenId: 0,
    itemId: "rune_beast_3012_s4",
    name: "Glorious Mane",
    class: "Beast",
    isBlockchain: 0,
    rarity: "Epic",
    effect:
      "{Solo}. This Axie's Attacks no longer grant <Energy Fragment>, but their base DMG is increased by 10% per Energy Spent whenever this Axie attacks.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_glorious_mane.png",
    season: "Season 4",
  },
  {
    id: 501,
    tokenId: 0,
    itemId: "rune_beast_3011_s1",
    name: "Glorious Mane (S1.5)",
    class: "Beast",
    isBlockchain: 0,
    rarity: "Epic",
    effect:
      "{Solo}. This Axie's Single Attacks no longer grant <Energy Fragment>, but gain a permanent 10 bonus DMG to itself when played.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_glorious_mane.png",
    season: "Season 1",
  },
  {
    id: 310,
    tokenId: 0,
    itemId: "rune_beast_3010_s2_nondec",
    name: "Pangolin Scale",
    class: "Beast",
    isBlockchain: 0,
    rarity: "Epic",
    effect: "{Solo}. This Axie take 15% less DMG but cannot gain Shields.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_beast_defensive_1.png",
    season: "Season 2",
  },
  {
    id: 453,
    tokenId: 0,
    itemId: "rune_beast_3010_s2",
    name: "Pangolin Scale",
    class: "Beast",
    isBlockchain: 0,
    rarity: "Epic",
    effect: "{Solo}. This Axie take 15% less DMG but cannot gain Shields.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_beast_defensive_1.png",
    season: "Season 2",
  },
  {
    id: 557,
    tokenId: 0,
    itemId: "rune_beast_3011_s3",
    name: "Pangolin Scale",
    class: "Beast",
    isBlockchain: 0,
    rarity: "Epic",
    effect: "{Solo}. This Axie take 18% less DMG but cannot gain Shields.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_beast_defensive_1.png",
    season: "Season 3",
  },
  {
    id: 664,
    tokenId: 0,
    itemId: "rune_beast_3011_s3_nondec",
    name: "Pangolin Scale",
    class: "Beast",
    isBlockchain: 0,
    rarity: "Epic",
    effect: "{Solo}. This Axie take 18% less DMG but cannot gain Shields.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_beast_defensive_1.png",
    season: "Season 3",
  },
  {
    id: 940,
    tokenId: 0,
    itemId: "rune_beast_3011_s4",
    name: "Pangolin Scale",
    class: "Beast",
    isBlockchain: 0,
    rarity: "Epic",
    effect: "{Solo}. This Axie takes 20% less DMG but cannot gain Shields.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_beast_defensive_1.png",
    season: "Season 4",
  },
  {
    id: 965,
    tokenId: 0,
    itemId: "rune_beast_3011_s4_nondec",
    name: "Pangolin Scale",
    class: "Beast",
    isBlockchain: 0,
    rarity: "Epic",
    effect: "{Solo}. This Axie takes 20% less DMG but cannot gain Shields.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_beast_defensive_1.png",
    season: "Season 4",
  },
  {
    id: 280,
    tokenId: 0,
    itemId: "rune_beast_3010_s1",
    name: "Pangolin Scale (S1.5)",
    class: "Beast",
    isBlockchain: 0,
    rarity: "Epic",
    effect: "{Solo}. This Axie take 15% less DMG but cannot gain Shields.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_beast_defensive_1.png",
    season: "Season 1",
  },
  {
    id: 579,
    tokenId: 0,
    itemId: "rune_beast_3010_s3",
    name: "Reckless Hunter",
    class: "Beast",
    isBlockchain: 0,
    rarity: "Epic",
    effect: "{Solo} This Axie deals 25% bonus DMG but also takes 15% more DMG.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_beast_offensive_1.png",
    season: "Season 3",
  },
  {
    id: 678,
    tokenId: 0,
    itemId: "rune_beast_3010_s3_nondec",
    name: "Reckless Hunter",
    class: "Beast",
    isBlockchain: 0,
    rarity: "Epic",
    effect: "{Solo} This Axie deals 25% bonus DMG but also takes 15% more DMG.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_beast_offensive_1.png",
    season: "Season 3",
  },
  {
    id: 846,
    tokenId: 0,
    itemId: "rune_beast_3010_s4_nondec",
    name: "Reckless Hunter",
    class: "Beast",
    isBlockchain: 0,
    rarity: "Epic",
    effect: "{Solo} This Axie deals 25% bonus DMG but also takes 10% more DMG.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_beast_offensive_1.png",
    season: "Season 4",
  },
  {
    id: 951,
    tokenId: 0,
    itemId: "rune_beast_3010_s4",
    name: "Reckless Hunter",
    class: "Beast",
    isBlockchain: 0,
    rarity: "Epic",
    effect: "{Solo} This Axie deals 25% bonus DMG but also takes 10% more DMG.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_beast_offensive_1.png",
    season: "Season 4",
  },
  {
    id: 572,
    tokenId: 0,
    itemId: "rune_beast_4011_s3",
    name: "Brutal Claw",
    class: "Beast",
    isBlockchain: 0,
    rarity: "Mystic",
    effect:
      "{Solo}. Against targets with less than 6 {Bleed} turns, this Axie's Single and AOE Attacks double the {Bleed} turns on targets, otherwise, create <Bloodstorm>s.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_brutal_claw.png",
    season: "Season 3",
  },
  {
    id: 723,
    tokenId: 0,
    itemId: "rune_beast_4011_s3_nondec",
    name: "Brutal Claw",
    class: "Beast",
    isBlockchain: 0,
    rarity: "Mystic",
    effect:
      "{Solo}. Against targets with less than 6 {Bleed} turns, this Axie's Single and AOE Attacks double the {Bleed} turns on targets, otherwise, create <Bloodstorm>s.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_brutal_claw.png",
    season: "Season 3",
  },
  {
    id: 883,
    tokenId: 0,
    itemId: "rune_beast_4011_s4_nondec",
    name: "Brutal Claw",
    class: "Beast",
    isBlockchain: 0,
    rarity: "Mystic",
    effect:
      "{Solo}. Against targets with less than 6 {Bleed} turns, this Axie's Single and AOE Attacks double the {Bleed} turns on targets, otherwise, create <Bloodstorm>s.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_brutal_claw.png",
    season: "Season 4",
  },
  {
    id: 888,
    tokenId: 0,
    itemId: "rune_beast_4011_s4",
    name: "Brutal Claw",
    class: "Beast",
    isBlockchain: 0,
    rarity: "Mystic",
    effect:
      "{Solo}. Against targets with less than 6 {Bleed} turns, this Axie's Single and AOE Attacks double the {Bleed} turns on targets, otherwise, create <Bloodstorm>s.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_brutal_claw.png",
    season: "Season 4",
  },
  {
    id: 562,
    tokenId: 0,
    itemId: "rune_beast_4010_s3",
    name: "Endless Anger",
    class: "Beast",
    isBlockchain: 0,
    rarity: "Mystic",
    effect:
      "{Solo}. When your turn starts, this Axie gains 2 {Rage}. {Rage} on this Axie now grant 2 bonus DMG per stack.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_beast_utility_1.png",
    season: "Season 3",
  },
  {
    id: 606,
    tokenId: 0,
    itemId: "rune_beast_4010_s3_nondec",
    name: "Endless Anger",
    class: "Beast",
    isBlockchain: 0,
    rarity: "Mystic",
    effect:
      "{Solo}. When your turn starts, this Axie gains 2 {Rage}. {Rage} on this Axie now grant 2 bonus DMG per stack.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_beast_utility_1.png",
    season: "Season 3",
  },
  {
    id: 863,
    tokenId: 0,
    itemId: "rune_beast_4010_s4",
    name: "Endless Anger",
    class: "Beast",
    isBlockchain: 0,
    rarity: "Mystic",
    effect:
      "{Solo}. When your turn starts, this Axie gains 2 {Rage}. {Rage} on this Axie now grant 2 bonus DMG per stack.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_beast_utility_1.png",
    season: "Season 4",
  },
  {
    id: 948,
    tokenId: 0,
    itemId: "rune_beast_4010_s4_nondec",
    name: "Endless Anger",
    class: "Beast",
    isBlockchain: 0,
    rarity: "Mystic",
    effect:
      "{Solo}. When your turn starts, this Axie gains 2 {Rage}. {Rage} on this Axie now grant 2 bonus DMG per stack.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_beast_utility_1.png",
    season: "Season 4",
  },
  {
    id: 53,
    tokenId: 0,
    itemId: "rune_beast_4001_s0",
    name: "Endless Anger",
    class: "Beast",
    isBlockchain: 0,
    rarity: "Mystic",
    effect:
      "{Solo}. Gain 2 {Rage} when your turn starts. {Rage} now grant 3 bonus DMG.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_beast_utility_1.png",
    season: "Season 0",
  },
  {
    id: 70,
    tokenId: 0,
    itemId: "rune_beast_utility_1",
    name: "Endless Anger",
    class: "Beast",
    isBlockchain: 0,
    rarity: "Mystic",
    effect:
      "{Solo}. Gain 2 {Rage} when your turn starts. {Rage} now grant 3 bonus DMG.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_beast_utility_1.png",
    season: "Season Alpha",
  },
  {
    id: 147,
    tokenId: 0,
    itemId: "rune_beast_4001_s1",
    name: "Endless Anger",
    class: "Beast",
    isBlockchain: 0,
    rarity: "Mystic",
    effect:
      "{Solo}. Gain 1 {Rage} when your turn starts. {Rage} now grants 3 bonus DMG per stack to attacks.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_beast_utility_1.png",
    season: "Season 1",
  },
  {
    id: 407,
    tokenId: 0,
    itemId: "rune_beast_4010_s2_nondec",
    name: "Endless Anger",
    class: "Beast",
    isBlockchain: 0,
    rarity: "Mystic",
    effect:
      "{Solo}. When your turn starts, this Axie gains 1 {Rage}. {Rage} on this Axie now grant 3 bonus DMG per stack.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_beast_utility_1.png",
    season: "Season 2",
  },
  {
    id: 421,
    tokenId: 0,
    itemId: "rune_beast_4010_s2",
    name: "Endless Anger",
    class: "Beast",
    isBlockchain: 0,
    rarity: "Mystic",
    effect:
      "{Solo}. When your turn starts, this Axie gains 1 {Rage}. {Rage} on this Axie now grant 3 bonus DMG per stack.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_beast_utility_1.png",
    season: "Season 2",
  },
  {
    id: 335,
    tokenId: 0,
    itemId: "rune_beast_4010_s1",
    name: "Endless Anger (S1.5)",
    class: "Beast",
    isBlockchain: 0,
    rarity: "Mystic",
    effect:
      "{Solo}. When your turn starts, this Axie gains 1 {Rage}. {Rage} on this Axie now grant 3 bonus DMG per stack.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_beast_utility_1.png",
    season: "Season 1",
  },
  {
    id: 283,
    tokenId: 0,
    itemId: "rune_beast_2012_s2_nondec",
    name: "Dominant Predator",
    class: "Beast",
    isBlockchain: 0,
    rarity: "Rare",
    effect:
      "This Axie's Single Attacks apply {Bleed} for 2 turns if its target doesn't have {Bleed}. Against Bleeding enemies, it deals 10% bonus DMG then heals 15 HP to self.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_beast_hybrid_1.png",
    season: "Season 2",
  },
  {
    id: 417,
    tokenId: 0,
    itemId: "rune_beast_2012_s2",
    name: "Dominant Predator",
    class: "Beast",
    isBlockchain: 0,
    rarity: "Rare",
    effect:
      "This Axie's Single Attacks apply {Bleed} for 2 turns if its target doesn't have {Bleed}. Against Bleeding enemies, it deals 10% bonus DMG then heals 15 HP to self.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_beast_hybrid_1.png",
    season: "Season 2",
  },
  {
    id: 535,
    tokenId: 0,
    itemId: "rune_beast_2011_s3",
    name: "Dominant Predator",
    class: "Beast",
    isBlockchain: 0,
    rarity: "Rare",
    effect:
      "Whenever this Axie attacks, if the target has {Bleed}, bonus 10% DMG then heal 12 HP; otherwise, Single Attacks apply {Bleed} for 2 turns.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_beast_hybrid_1.png",
    season: "Season 3",
  },
  {
    id: 689,
    tokenId: 0,
    itemId: "rune_beast_2011_s3_nondec",
    name: "Dominant Predator",
    class: "Beast",
    isBlockchain: 0,
    rarity: "Rare",
    effect:
      "Whenever this Axie attacks, if the target has {Bleed}, bonus 10% DMG then heal 12 HP; otherwise, Single Attacks apply {Bleed} for 2 turns.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_beast_hybrid_1.png",
    season: "Season 3",
  },
  {
    id: 851,
    tokenId: 0,
    itemId: "rune_beast_2011_s4_nondec",
    name: "Dominant Predator",
    class: "Beast",
    isBlockchain: 0,
    rarity: "Rare",
    effect:
      "Whenever this Axie attacks, if the target has {Bleed}, bonus 10% DMG then heal 12 HP; otherwise, Single Attacks apply {Bleed} for 2 turns.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_beast_hybrid_1.png",
    season: "Season 4",
  },
  {
    id: 878,
    tokenId: 0,
    itemId: "rune_beast_2011_s4",
    name: "Dominant Predator",
    class: "Beast",
    isBlockchain: 0,
    rarity: "Rare",
    effect:
      "Whenever this Axie attacks, if the target has {Bleed}, bonus 10% DMG then heal 12 HP; otherwise, Single Attacks apply {Bleed} for 2 turns.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_beast_hybrid_1.png",
    season: "Season 4",
  },
  {
    id: 391,
    tokenId: 0,
    itemId: "rune_beast_2012_s1",
    name: "Dominant Predator (S1.5)",
    class: "Beast",
    isBlockchain: 0,
    rarity: "Rare",
    effect:
      "This Axie's Single Attacks apply {Bleed} for 2 turns if its target doesn't have {Bleed}. Against Bleeding enemies, it deals 10% bonus DMG then heals 15 HP to self.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_beast_hybrid_1.png",
    season: "Season 1",
  },
  {
    id: 942,
    tokenId: 0,
    itemId: "rune_beast_buba_1",
    name: "Furious Fox",
    class: "Beast",
    isBlockchain: 0,
    rarity: "Rare",
    effect:
      "Until <Round> 4, when your turn starts, gain 1 {Rage}.\n+20% bonus DMG in Fury Form.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_beast_buba_1.png",
    season: null,
  },
  {
    id: 866,
    tokenId: 0,
    itemId: "rune_beast_tripp_1",
    name: "Nut Hunter",
    class: "Beast",
    isBlockchain: 0,
    rarity: "Rare",
    effect:
      "Until <Round> 4, when your turn ends, put 1 Nut Cracker Card from your Discard Pile to top of your Draw Pile.\nAll Nut Cracker card in your deck deal 10% bonus DMG.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_beast_tripp_1.png",
    season: null,
  },
  {
    id: 105,
    tokenId: 0,
    itemId: "rune_beast_defensive_1",
    name: "Pangolin Scale",
    class: "Beast",
    isBlockchain: 0,
    rarity: "Rare",
    effect: "Cannot gain Shield. Take 15% less DMG.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_beast_defensive_1.png",
    season: "Season Alpha",
  },
  {
    id: 108,
    tokenId: 0,
    itemId: "rune_beast_2001_s0",
    name: "Pangolin Scale",
    class: "Beast",
    isBlockchain: 0,
    rarity: "Rare",
    effect: "Cannot gain Shield. Take 15% less DMG.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_beast_defensive_1.png",
    season: "Season 0",
  },
  {
    id: 137,
    tokenId: 0,
    itemId: "rune_beast_2001_s1",
    name: "Pangolin Scale",
    class: "Beast",
    isBlockchain: 0,
    rarity: "Rare",
    effect: "{Solo}. Cannot gain Shield. Take 15% less DMG.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_beast_defensive_1.png",
    season: "Season 1",
  },
  {
    id: 35,
    tokenId: 0,
    itemId: "rune_beast_2002_s0",
    name: "Reckless Hunter",
    class: "Beast",
    isBlockchain: 0,
    rarity: "Rare",
    effect: "Deal 20% more DMG.\nTake 10% more DMG.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_beast_offensive_1.png",
    season: "Season 0",
  },
  {
    id: 91,
    tokenId: 0,
    itemId: "rune_beast_offensive_1",
    name: "Reckless Hunter",
    class: "Beast",
    isBlockchain: 0,
    rarity: "Rare",
    effect: "Deal 20% more DMG.\nTake 10% more DMG.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_beast_offensive_1.png",
    season: "Season Alpha",
  },
  {
    id: 153,
    tokenId: 0,
    itemId: "rune_beast_2002_s1",
    name: "Reckless Hunter",
    class: "Beast",
    isBlockchain: 0,
    rarity: "Rare",
    effect: "Deal 20% more DMG.\nTake 10% more DMG.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_beast_offensive_1.png",
    season: "Season 1",
  },
  {
    id: 327,
    tokenId: 0,
    itemId: "rune_beast_2011_s2_nondec",
    name: "Reckless Hunter",
    class: "Beast",
    isBlockchain: 0,
    rarity: "Rare",
    effect: "This Axie deals 20% bonus DMG but also takes 10% more DMG.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_beast_offensive_1.png",
    season: "Season 2",
  },
  {
    id: 375,
    tokenId: 0,
    itemId: "rune_beast_2011_s2",
    name: "Reckless Hunter",
    class: "Beast",
    isBlockchain: 0,
    rarity: "Rare",
    effect: "This Axie deals 20% bonus DMG but also takes 10% more DMG.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_beast_offensive_1.png",
    season: "Season 2",
  },
  {
    id: 499,
    tokenId: 0,
    itemId: "rune_beast_2011_s1",
    name: "Reckless Hunter (S1.5)",
    class: "Beast",
    isBlockchain: 0,
    rarity: "Rare",
    effect: "This Axie deals 20% bonus DMG but also takes 10% more DMG.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_beast_offensive_1.png",
    season: "Season 1",
  },
  {
    id: 290,
    tokenId: 0,
    itemId: "rune_beast_2010_s2_nondec",
    name: "Way of Beast",
    class: "Beast",
    isBlockchain: 0,
    rarity: "Rare",
    effect:
      "When the battle starts, this Axie gains 2 {Rage}, then its Attacks deal 10% bonus DMG for the rest of the battle.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_way_of_beast.png",
    season: "Season 2",
  },
  {
    id: 300,
    tokenId: 0,
    itemId: "rune_beast_2010_s2",
    name: "Way of Beast",
    class: "Beast",
    isBlockchain: 0,
    rarity: "Rare",
    effect:
      "When the battle starts, this Axie gains 2 {Rage}, then its Attacks deal 10% bonus DMG for the rest of the battle.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_way_of_beast.png",
    season: "Season 2",
  },
  {
    id: 543,
    tokenId: 0,
    itemId: "rune_beast_2010_s3",
    name: "Way of Beast",
    class: "Beast",
    isBlockchain: 0,
    rarity: "Rare",
    effect:
      "When the battle starts, this Axie gains 2 {Rage}s. This Axie's Attack cards deal 15% bonus DMG.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_way_of_beast.png",
    season: "Season 3",
  },
  {
    id: 625,
    tokenId: 0,
    itemId: "rune_beast_2010_s3_nondec",
    name: "Way of Beast",
    class: "Beast",
    isBlockchain: 0,
    rarity: "Rare",
    effect:
      "When the battle starts, this Axie gains 2 {Rage}s. This Axie's Attack cards deal 15% bonus DMG.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_way_of_beast.png",
    season: "Season 3",
  },
  {
    id: 901,
    tokenId: 0,
    itemId: "rune_beast_2010_s4_nondec",
    name: "Way of Beast",
    class: "Beast",
    isBlockchain: 0,
    rarity: "Rare",
    effect:
      "When the battle starts, this Axie gains 2 {Rage}s. This Axie's Attack cards deal 15% bonus DMG.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_way_of_beast.png",
    season: "Season 4",
  },
  {
    id: 960,
    tokenId: 0,
    itemId: "rune_beast_2010_s4",
    name: "Way of Beast",
    class: "Beast",
    isBlockchain: 0,
    rarity: "Rare",
    effect:
      "When the battle starts, this Axie gains 2 {Rage}s. This Axie's Attack cards deal 15% bonus DMG.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_way_of_beast.png",
    season: "Season 4",
  },
  {
    id: 465,
    tokenId: 0,
    itemId: "rune_beast_2010_s1",
    name: "Way of Beast (S1.5)",
    class: "Beast",
    isBlockchain: 0,
    rarity: "Rare",
    effect:
      "When the battle starts, this Axie gains 2 {Rage}, then its Attacks deal 10% bonus DMG for the rest of the battle.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_way_of_beast.png",
    season: "Season 1",
  },
  {
    id: 573,
    tokenId: 0,
    itemId: "rune_bird_3010_s3",
    name: "Energy Guru",
    class: "Bird",
    isBlockchain: 0,
    rarity: "Epic",
    effect:
      "{Solo} When your turn start on Even <Round>, gain 1 <Energy Fragment>. \nThis Axie's Attacks deal 7 DMG per their Energy Cost to all enemy Axies.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_bird_offensive_1.png",
    season: "Season 3",
  },
  {
    id: 626,
    tokenId: 0,
    itemId: "rune_bird_3010_s3_nondec",
    name: "Energy Guru",
    class: "Bird",
    isBlockchain: 0,
    rarity: "Epic",
    effect:
      "{Solo} When your turn start on Even <Round>, gain 1 <Energy Fragment>. \nThis Axie's Attacks deal 7 DMG per their Energy Cost to all enemy Axies.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_bird_offensive_1.png",
    season: "Season 3",
  },
  {
    id: 897,
    tokenId: 0,
    itemId: "rune_bird_3010_s4",
    name: "Energy Guru",
    class: "Bird",
    isBlockchain: 0,
    rarity: "Epic",
    effect:
      "{Solo} When your turn start on Even <Round>, gain 1 <Energy Fragment>. \nThis Axie's Attacks deal 7 DMG per their Energy Cost to all enemy Axies.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_bird_offensive_1.png",
    season: "Season 4",
  },
  {
    id: 914,
    tokenId: 0,
    itemId: "rune_bird_3010_s4_nondec",
    name: "Energy Guru",
    class: "Bird",
    isBlockchain: 0,
    rarity: "Epic",
    effect:
      "{Solo} When your turn start on Even <Round>, gain 1 <Energy Fragment>. \nThis Axie's Attacks deal 7 DMG per their Energy Cost to all enemy Axies.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_bird_offensive_1.png",
    season: "Season 4",
  },
  {
    id: 87,
    tokenId: 0,
    itemId: "rune_bird_3001_s0",
    name: "Raven's Tactic",
    class: "Bird",
    isBlockchain: 0,
    rarity: "Epic",
    effect:
      "Deal 20% bonus DMG if HP is above 50%. Take 20% less DMG if HP is below 50%.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_bird_hybrid_1.png",
    season: "Season 0",
  },
  {
    id: 99,
    tokenId: 0,
    itemId: "rune_bird_hybrid_1",
    name: "Raven's Tactic",
    class: "Bird",
    isBlockchain: 0,
    rarity: "Epic",
    effect:
      "Deal 20% bonus DMG if HP is above 50%. Take 20% less DMG if HP is below 50%.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_bird_hybrid_1.png",
    season: "Season Alpha",
  },
  {
    id: 203,
    tokenId: 0,
    itemId: "rune_bird_3001_s1",
    name: "Raven's Tactic",
    class: "Bird",
    isBlockchain: 0,
    rarity: "Epic",
    effect:
      "{Solo} This Axie deals 20% bonus DMG if its HP is above 50%. \nThis Axie takes 20% less DMG if its HP is below 50%.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_bird_hybrid_1.png",
    season: "Season 1",
  },
  {
    id: 371,
    tokenId: 0,
    itemId: "rune_bird_3010_s2",
    name: "Raven's Tactic",
    class: "Bird",
    isBlockchain: 0,
    rarity: "Epic",
    effect:
      "{Solo}. This Axie deals 20% bonus DMG if its HP is > 50%, and takes 20% less DMG if its HP is < 50%.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_bird_hybrid_1.png",
    season: "Season 2",
  },
  {
    id: 515,
    tokenId: 0,
    itemId: "rune_bird_3010_s2_nondec",
    name: "Raven's Tactic",
    class: "Bird",
    isBlockchain: 0,
    rarity: "Epic",
    effect:
      "{Solo}. This Axie deals 20% bonus DMG if its HP is > 50%, and takes 20% less DMG if its HP is < 50%.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_bird_hybrid_1.png",
    season: "Season 2",
  },
  {
    id: 344,
    tokenId: 0,
    itemId: "rune_bird_3010_s1",
    name: "Raven's Tactic (S1.5)",
    class: "Bird",
    isBlockchain: 0,
    rarity: "Epic",
    effect:
      "{Solo}. This Axie deals 20% bonus DMG if its HP is > 50%, and takes 20% less DMG if its HP is < 50%.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_bird_hybrid_1.png",
    season: "Season 1",
  },
  {
    id: 286,
    tokenId: 0,
    itemId: "rune_bird_3011_s2_nondec",
    name: "Sacred Feather",
    class: "Bird",
    isBlockchain: 0,
    rarity: "Epic",
    effect:
      "{Solo}. Once per battle, if this Axie would die, it survives with 1 HP, then heals 5% of its max HP for each of its {Feather}. Afterward, deal 20 DMG to all enemies.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_sacred_feather.png",
    season: "Season 2",
  },
  {
    id: 382,
    tokenId: 0,
    itemId: "rune_bird_3011_s2",
    name: "Sacred Feather",
    class: "Bird",
    isBlockchain: 0,
    rarity: "Epic",
    effect:
      "{Solo}. Once per battle, if this Axie would die, it survives with 1 HP, then heals 5% of its max HP for each of its {Feather}. Afterward, deal 20 DMG to all enemies.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_sacred_feather.png",
    season: "Season 2",
  },
  {
    id: 576,
    tokenId: 0,
    itemId: "rune_bird_3012_s3",
    name: "Sacred Feather",
    class: "Bird",
    isBlockchain: 0,
    rarity: "Epic",
    effect:
      "{Solo}. Once per battle, if this Axie would die, it survives with 1 HP, then heals 5% of its max HP for each of its {Feather}. Afterward, deal 20 DMG to all enemies.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_sacred_feather.png",
    season: "Season 3",
  },
  {
    id: 637,
    tokenId: 0,
    itemId: "rune_bird_3012_s3_nondec",
    name: "Sacred Feather",
    class: "Bird",
    isBlockchain: 0,
    rarity: "Epic",
    effect:
      "{Solo}. Once per battle, if this Axie would die, it survives with 1 HP, then heals 5% of its max HP for each of its {Feather}. Afterward, deal 20 DMG to all enemies.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_sacred_feather.png",
    season: "Season 3",
  },
  {
    id: 764,
    tokenId: 0,
    itemId: "rune_bird_3012_s4",
    name: "Sacred Feather",
    class: "Bird",
    isBlockchain: 0,
    rarity: "Epic",
    effect:
      "{Solo}. Once per battle, if this Axie would die, it survives with 1 HP, then heals 5% of its max HP for each of its {Feather}. Afterward, deal 20 DMG to all enemies.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_sacred_feather.png",
    season: "Season 4",
  },
  {
    id: 913,
    tokenId: 0,
    itemId: "rune_bird_3012_s4_nondec",
    name: "Sacred Feather",
    class: "Bird",
    isBlockchain: 0,
    rarity: "Epic",
    effect:
      "{Solo}. Once per battle, if this Axie would die, it survives with 1 HP, then heals 5% of its max HP for each of its {Feather}. Afterward, deal 20 DMG to all enemies.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_sacred_feather.png",
    season: "Season 4",
  },
  {
    id: 517,
    tokenId: 0,
    itemId: "rune_bird_3011_s1",
    name: "Sacred Feather (S1.5)",
    class: "Bird",
    isBlockchain: 0,
    rarity: "Epic",
    effect:
      "{Solo}. Once per battle, if this Axie would die, it survives with 1 HP, then heals 5% of its max HP for each of its {Feather}. Afterward, deal 20 DMG to all enemies.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_sacred_feather.png",
    season: "Season 1",
  },
  {
    id: 530,
    tokenId: 0,
    itemId: "rune_bird_3011_s3",
    name: "Sharp Talon",
    class: "Bird",
    isBlockchain: 0,
    rarity: "Epic",
    effect:
      "{Solo}. This Axie deals 25% bonus DMG against enemies that have no Shield; otherwise, deal 15% bonus DMG.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_sharp_talon.png",
    season: "Season 3",
  },
  {
    id: 658,
    tokenId: 0,
    itemId: "rune_bird_3011_s3_nondec",
    name: "Sharp Talon",
    class: "Bird",
    isBlockchain: 0,
    rarity: "Epic",
    effect:
      "{Solo}. This Axie deals 25% bonus DMG against enemies that have no Shield; otherwise, deal 15% bonus DMG.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_sharp_talon.png",
    season: "Season 3",
  },
  {
    id: 877,
    tokenId: 0,
    itemId: "rune_bird_3011_s4_nondec",
    name: "Sharp Talon",
    class: "Bird",
    isBlockchain: 0,
    rarity: "Epic",
    effect:
      "{Solo}. This Axie deals 25% bonus DMG against enemies that have no Shield; otherwise, deal 15% bonus DMG.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_sharp_talon.png",
    season: "Season 4",
  },
  {
    id: 955,
    tokenId: 0,
    itemId: "rune_bird_3011_s4",
    name: "Sharp Talon",
    class: "Bird",
    isBlockchain: 0,
    rarity: "Epic",
    effect:
      "{Solo}. This Axie deals 25% bonus DMG against enemies that have no Shield; otherwise, deal 15% bonus DMG.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_sharp_talon.png",
    season: "Season 4",
  },
  {
    id: 687,
    tokenId: 0,
    itemId: "rune_bird_4010_s3_nondec",
    name: "Feather Descend",
    class: "Bird",
    isBlockchain: 0,
    rarity: "Mystic",
    effect:
      "{Solo}. When your turn starts, this Axie gains 1 {Feather}. If the Axie has 10 stacks, add [Feather Dagger] into your Hand until it's full. When your turn ends, the Axie loses {Feather} = the number of [Feather Dagger] added this way.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_bird_utility_1.png",
    season: "Season 3",
  },
  {
    id: 753,
    tokenId: 0,
    itemId: "rune_bird_4010_s4",
    name: "Feather Descend",
    class: "Bird",
    isBlockchain: 0,
    rarity: "Mystic",
    effect:
      "{Solo}. When your turn starts, this Axie gains 2 {Feather}s. If the Axie has 10 stacks, add [Feather Dagger] into your Hand until it's full. When your turn ends, the Axie loses {Feather} = the number of [Feather Dagger] added this way.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_bird_utility_1.png",
    season: "Season 4",
  },
  {
    id: 784,
    tokenId: 0,
    itemId: "rune_bird_4010_s4_nondec",
    name: "Feather Descend",
    class: "Bird",
    isBlockchain: 0,
    rarity: "Mystic",
    effect:
      "{Solo}. When your turn starts, this Axie gains 2 {Feather}s. If the Axie has 10 stacks, add [Feather Dagger] into your Hand until it's full. When your turn ends, the Axie loses {Feather} = the number of [Feather Dagger] added this way.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_bird_utility_1.png",
    season: "Season 4",
  },
  {
    id: 1,
    tokenId: 0,
    itemId: "rune_bird_4001_s0",
    name: "Feather Descend",
    class: "Bird",
    isBlockchain: 0,
    rarity: "Mystic",
    effect:
      "{Solo}. When your turn starts, this Axie gain 2 {Feather}, another random ally (not summon) gain 2 {Feather}. This Axie gains back half of the Feather stack consumed.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_bird_utility_1.png",
    season: "Season 0",
  },
  {
    id: 58,
    tokenId: 0,
    itemId: "rune_bird_utility_1",
    name: "Feather Descend",
    class: "Bird",
    isBlockchain: 0,
    rarity: "Mystic",
    effect:
      "{Solo}. When your turn starts, this Axie gain 2 {Feather}, another random ally (not summon) gain 2 {Feather}. This Axie gains back half of the Feather stack consumed.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_bird_utility_1.png",
    season: "Season Alpha",
  },
  {
    id: 140,
    tokenId: 0,
    itemId: "rune_bird_4001_s1",
    name: "Feather Descend",
    class: "Bird",
    isBlockchain: 0,
    rarity: "Mystic",
    effect:
      "{Solo}. When your turn starts, this Axie gains 1 {Feather}. Upon reaching the maxium number of stacks, shuffles [Feather Dagger] into your hand until it maxed out. At the end of turn reduce the number of stack = the number of [Feather Dagger] shuffled in.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_bird_utility_1.png",
    season: "Season 1",
  },
  {
    id: 363,
    tokenId: 0,
    itemId: "rune_bird_4010_s2",
    name: "Feather Descend",
    class: "Bird",
    isBlockchain: 0,
    rarity: "Mystic",
    effect:
      "{Solo}. When your turn starts, this Axie gains 1 {Feather}. If the Axie has 10 stacks, add [Feather Dagger] into your Hand until it's full. When your turn ends, the Axie loses {Feather} = the number of [Feather Dagger] added this way.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_bird_utility_1.png",
    season: "Season 2",
  },
  {
    id: 378,
    tokenId: 0,
    itemId: "rune_bird_4010_s2_nondec",
    name: "Feather Descend",
    class: "Bird",
    isBlockchain: 0,
    rarity: "Mystic",
    effect:
      "{Solo}. When your turn starts, this Axie gains 1 {Feather}. If the Axie has 10 stacks, add [Feather Dagger] into your Hand until it's full. When your turn ends, the Axie loses {Feather} = the number of [Feather Dagger] added this way.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_bird_utility_1.png",
    season: "Season 2",
  },
  {
    id: 555,
    tokenId: 0,
    itemId: "rune_bird_4010_s3",
    name: "Feather Descend",
    class: "Bird",
    isBlockchain: 0,
    rarity: "Mystic",
    effect:
      "{Solo}. When your turn starts, this Axie gains 1 {Feather}. If the Axie has 10 stacks, add [Feather Dagger] into your Hand until it's full. When your turn ends, the Axie loses {Feather} = the number of [Feather Dagger] added this way.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_bird_utility_1.png",
    season: "Season 3",
  },
  {
    id: 492,
    tokenId: 0,
    itemId: "rune_bird_4010_s1",
    name: "Feather Descend (S1.5)",
    class: "Bird",
    isBlockchain: 0,
    rarity: "Mystic",
    effect:
      "{Solo}. When your turn starts, this Axie gains 1 {Feather}. If the Axie has 10 stacks, add [Feather Dagger] into your Hand until it's full. When your turn ends, the Axie loses {Feather} = the number of [Feather Dagger] added this way.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_bird_utility_1.png",
    season: "Season 1",
  },
  {
    id: 570,
    tokenId: 0,
    itemId: "rune_bird_4011_s3",
    name: "Raven's Tactic",
    class: "Bird",
    isBlockchain: 0,
    rarity: "Mystic",
    effect:
      "{Solo}. When your turn starts, this Axie consumes all {Feather} to self heal 2 HP per {Feather}.\nEach hit by this Axie increases the DMG of its next hit by 15% (cap at 45% bonus DMG). When your turn ends, reset bonus DMG to 0%.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_bird_hybrid_1.png",
    season: "Season 3",
  },
  {
    id: 628,
    tokenId: 0,
    itemId: "rune_bird_4011_s3_nondec",
    name: "Raven's Tactic",
    class: "Bird",
    isBlockchain: 0,
    rarity: "Mystic",
    effect:
      "{Solo}. When your turn starts, this Axie consumes all {Feather} to self heal 2 HP per {Feather}.\nEach hit by this Axie increases the DMG of its next hit by 15% (cap at 45% bonus DMG). When your turn ends, reset bonus DMG to 0%.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_bird_hybrid_1.png",
    season: "Season 3",
  },
  {
    id: 826,
    tokenId: 0,
    itemId: "rune_bird_4011_s4",
    name: "Raven's Tactic",
    class: "Bird",
    isBlockchain: 0,
    rarity: "Mystic",
    effect:
      "{Solo}. When your turn starts, consume all {Feather} on self to heal your team for 1 HP per Feather. Deal 15% bonus DMG. Bonus 15% DMG per hit this Axie deals until end of turn. (Cap at 2 hits)",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_bird_hybrid_1.png",
    season: "Season 4",
  },
  {
    id: 849,
    tokenId: 0,
    itemId: "rune_bird_4011_s4_nondec",
    name: "Raven's Tactic",
    class: "Bird",
    isBlockchain: 0,
    rarity: "Mystic",
    effect:
      "{Solo}. When your turn starts, consume all {Feather} on self to heal your team for 1 HP per Feather. Deal 15% bonus DMG. Bonus 15% DMG per hit this Axie deals until end of turn. (Cap at 2 hits)",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_bird_hybrid_1.png",
    season: "Season 4",
  },
  {
    id: 40,
    tokenId: 0,
    itemId: "rune_bird_offensive_1",
    name: "Energy Guru",
    class: "Bird",
    isBlockchain: 0,
    rarity: "Rare",
    effect: "Attack cards also deal 8 DMG per Energy cost to all enemies.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_bird_offensive_1.png",
    season: "Season Alpha",
  },
  {
    id: 48,
    tokenId: 0,
    itemId: "rune_bird_2002_s0",
    name: "Energy Guru",
    class: "Bird",
    isBlockchain: 0,
    rarity: "Rare",
    effect: "Attack cards also deal 6 DMG per Energy cost to all enemies.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_bird_offensive_1.png",
    season: "Season 0",
  },
  {
    id: 181,
    tokenId: 0,
    itemId: "rune_bird_2002_s1",
    name: "Energy Guru",
    class: "Bird",
    isBlockchain: 0,
    rarity: "Rare",
    effect:
      "You gain 1 <Energy Fragment> every Even <Round>s. Attack cards also deal 4 DMG per Energy cost to all enemies.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_bird_offensive_1.png",
    season: "Season 1",
  },
  {
    id: 447,
    tokenId: 0,
    itemId: "rune_bird_2011_s2",
    name: "Energy Guru",
    class: "Bird",
    isBlockchain: 0,
    rarity: "Rare",
    effect:
      "When your turn start in Even <Round>, gain 1 <Energy Fragment>. This Axie's Attacks deal 4 DMG per their Energy Cost to all enemies.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_bird_offensive_1.png",
    season: "Season 2",
  },
  {
    id: 511,
    tokenId: 0,
    itemId: "rune_bird_2011_s2_nondec",
    name: "Energy Guru",
    class: "Bird",
    isBlockchain: 0,
    rarity: "Rare",
    effect:
      "When your turn start in Even <Round>, gain 1 <Energy Fragment>. This Axie's Attacks deal 4 DMG per their Energy Cost to all enemies.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_bird_offensive_1.png",
    season: "Season 2",
  },
  {
    id: 495,
    tokenId: 0,
    itemId: "rune_bird_2011_s1",
    name: "Energy Guru (S1.5)",
    class: "Bird",
    isBlockchain: 0,
    rarity: "Rare",
    effect:
      "When your turn start in Even <Round>, gain 1 <Energy Fragment>. This Axie's Attacks deal 4 DMG per their Energy Cost to all enemies.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_bird_offensive_1.png",
    season: "Season 1",
  },
  {
    id: 601,
    tokenId: 0,
    itemId: "rune_bird_2011_s3",
    name: "Frail Egg",
    class: "Bird",
    isBlockchain: 0,
    rarity: "Rare",
    effect:
      "When your turn starts, randomly apply Weak for 3 turns to an enemy Axie that doesn’t have Weak.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_bird_defensive_1.png",
    season: "Season 3",
  },
  {
    id: 711,
    tokenId: 0,
    itemId: "rune_bird_2011_s3_nondec",
    name: "Frail Egg",
    class: "Bird",
    isBlockchain: 0,
    rarity: "Rare",
    effect:
      "When your turn starts, randomly apply Weak for 3 turns to an enemy Axie that doesn’t have Weak.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_bird_defensive_1.png",
    season: "Season 3",
  },
  {
    id: 822,
    tokenId: 0,
    itemId: "rune_bird_2011_s4_nondec",
    name: "Frail Egg",
    class: "Bird",
    isBlockchain: 0,
    rarity: "Rare",
    effect:
      "When your turn starts, randomly deal 10 DMG and apply {Weak} for 3 turns to an enemy Axie that doesn’t have {Weak}.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_bird_defensive_1.png",
    season: "Season 4",
  },
  {
    id: 909,
    tokenId: 0,
    itemId: "rune_bird_2011_s4",
    name: "Frail Egg",
    class: "Bird",
    isBlockchain: 0,
    rarity: "Rare",
    effect:
      "When your turn starts, randomly deal 10 DMG and apply {Weak} for 3 turns to an enemy Axie that doesn’t have {Weak}.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_bird_defensive_1.png",
    season: "Season 4",
  },
  {
    id: 365,
    tokenId: 0,
    itemId: "rune_bird_2012_s2",
    name: "Sharp Talon",
    class: "Bird",
    isBlockchain: 0,
    rarity: "Rare",
    effect: "This Axie deal 20% bonus DMG against enemies that have no Shield.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_sharp_talon.png",
    season: "Season 2",
  },
  {
    id: 473,
    tokenId: 0,
    itemId: "rune_bird_2012_s2_nondec",
    name: "Sharp Talon",
    class: "Bird",
    isBlockchain: 0,
    rarity: "Rare",
    effect: "This Axie deal 20% bonus DMG against enemies that have no Shield.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_sharp_talon.png",
    season: "Season 2",
  },
  {
    id: 313,
    tokenId: 0,
    itemId: "rune_bird_2012_s1",
    name: "Sharp Talon (S1.5)",
    class: "Bird",
    isBlockchain: 0,
    rarity: "Rare",
    effect: "This Axie deal 20% bonus DMG against enemies that have no Shield.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_sharp_talon.png",
    season: "Season 1",
  },
  {
    id: 100,
    tokenId: 0,
    itemId: "rune_bird_2001_s0",
    name: "The Incubator",
    class: "Bird",
    isBlockchain: 0,
    rarity: "Rare",
    effect: "Summons summoned by this Axie gain 14 bonus max HP.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_bird_defensive_1.png",
    season: "Season 0",
  },
  {
    id: 124,
    tokenId: 0,
    itemId: "rune_bird_defensive_1",
    name: "The Incubator",
    class: "Bird",
    isBlockchain: 0,
    rarity: "Rare",
    effect: "Summons summoned by this Axie gain 14 bonus max HP.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_bird_defensive_1.png",
    season: "Season Alpha",
  },
  {
    id: 154,
    tokenId: 0,
    itemId: "rune_bird_2001_s1",
    name: "The Incubator",
    class: "Bird",
    isBlockchain: 0,
    rarity: "Rare",
    effect: "Summons summoned by this Axie gain 14 bonus max HP.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_bird_defensive_1.png",
    season: "Season 1",
  },
  {
    id: 388,
    tokenId: 0,
    itemId: "rune_bird_2010_s2",
    name: "Way of Bird",
    class: "Bird",
    isBlockchain: 0,
    rarity: "Rare",
    effect:
      "When the battle starts, this Axie gains 2 {Feather}, then its Attacks deal 10% bonus DMG for the rest of the battle.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_way_of_bird.png",
    season: "Season 2",
  },
  {
    id: 432,
    tokenId: 0,
    itemId: "rune_bird_2010_s2_nondec",
    name: "Way of Bird",
    class: "Bird",
    isBlockchain: 0,
    rarity: "Rare",
    effect:
      "When the battle starts, this Axie gains 2 {Feather}, then its Attacks deal 10% bonus DMG for the rest of the battle.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_way_of_bird.png",
    season: "Season 2",
  },
  {
    id: 539,
    tokenId: 0,
    itemId: "rune_bird_2010_s3",
    name: "Way of Bird",
    class: "Bird",
    isBlockchain: 0,
    rarity: "Rare",
    effect:
      "When the battle starts, this Axie gains 2 {Feather}s. This Axie's Attack cards deal 15% bonus DMG.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_way_of_bird.png",
    season: "Season 3",
  },
  {
    id: 677,
    tokenId: 0,
    itemId: "rune_bird_2010_s3_nondec",
    name: "Way of Bird",
    class: "Bird",
    isBlockchain: 0,
    rarity: "Rare",
    effect:
      "When the battle starts, this Axie gains 2 {Feather}s. This Axie's Attack cards deal 15% bonus DMG.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_way_of_bird.png",
    season: "Season 3",
  },
  {
    id: 771,
    tokenId: 0,
    itemId: "rune_bird_2010_s4_nondec",
    name: "Way of Bird",
    class: "Bird",
    isBlockchain: 0,
    rarity: "Rare",
    effect:
      "When the battle starts, this Axie gains 2 {Feather}s. This Axie's Attack cards deal 15% bonus DMG.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_way_of_bird.png",
    season: "Season 4",
  },
  {
    id: 879,
    tokenId: 0,
    itemId: "rune_bird_2010_s4",
    name: "Way of Bird",
    class: "Bird",
    isBlockchain: 0,
    rarity: "Rare",
    effect:
      "When the battle starts, this Axie gains 2 {Feather}s. This Axie's Attack cards deal 15% bonus DMG.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_way_of_bird.png",
    season: "Season 4",
  },
  {
    id: 337,
    tokenId: 0,
    itemId: "rune_bird_2010_s1",
    name: "Way of Bird (S1.5)",
    class: "Bird",
    isBlockchain: 0,
    rarity: "Rare",
    effect:
      "When the battle starts, this Axie gains 2 {Feather}, then its Attacks deal 10% bonus DMG for the rest of the battle.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_way_of_bird.png",
    season: "Season 1",
  },
  {
    id: 534,
    tokenId: 0,
    itemId: "rune_bug_3012_s3",
    name: "Fate Maker",
    class: "Bug",
    isBlockchain: 0,
    rarity: "Epic",
    effect:
      "{Solo}. Enemy cards discarded by this Axie have their stat reduced by 10%, your cards discarded by this Axie have their stat increased by 10%.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_fate_maker.png",
    season: "Season 3",
  },
  {
    id: 685,
    tokenId: 0,
    itemId: "rune_bug_3012_s3_nondec",
    name: "Fate Maker",
    class: "Bug",
    isBlockchain: 0,
    rarity: "Epic",
    effect:
      "{Solo}. Enemy cards discarded by this Axie have their stat reduced by 10%, your cards discarded by this Axie have their stat increased by 10%.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_fate_maker.png",
    season: "Season 3",
  },
  {
    id: 801,
    tokenId: 0,
    itemId: "rune_bug_3012_s4",
    name: "Fate Maker",
    class: "Bug",
    isBlockchain: 0,
    rarity: "Epic",
    effect:
      "{Solo}. Enemy cards discarded by your team have their stat reduced by 10% and deal DMG to their owner equal to 3x the stat reduced. Your cards discarded by your team have their stat increased by 10%.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_fate_maker.png",
    season: "Season 4",
  },
  {
    id: 937,
    tokenId: 0,
    itemId: "rune_bug_3012_s4_nondec",
    name: "Fate Maker",
    class: "Bug",
    isBlockchain: 0,
    rarity: "Epic",
    effect:
      "{Solo}. Enemy cards discarded by your team have their stat reduced by 10% and deal DMG to their owner equal to 3x the stat reduced. Your cards discarded by your team have their stat increased by 10%.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_fate_maker.png",
    season: "Season 4",
  },
  {
    id: 621,
    tokenId: 0,
    itemId: "rune_bug_3010_s3_nondec",
    name: "Leech",
    class: "Bug",
    isBlockchain: 0,
    rarity: "Epic",
    effect:
      "{Solo}. When your turn starts, this Axie steals 40% of the Shield from the enemy Axie with the highest Shield. If no enemy Axie have Shield, it {Steal}s 6 HP from all enemy Axies instead.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_bug_hybrid_1.png",
    season: "Season 3",
  },
  {
    id: 842,
    tokenId: 0,
    itemId: "rune_bug_3010_s4",
    name: "Leech",
    class: "Bug",
    isBlockchain: 0,
    rarity: "Epic",
    effect:
      "{Solo}. When your turn starts, this Axie steals 35% of the Shield from the enemy Axie with the highest Shield. If no enemy Axie have Shield, it {Steal}s 6 HP from all enemy Axies instead.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_bug_hybrid_1.png",
    season: "Season 4",
  },
  {
    id: 856,
    tokenId: 0,
    itemId: "rune_bug_3010_s4_nondec",
    name: "Leech",
    class: "Bug",
    isBlockchain: 0,
    rarity: "Epic",
    effect:
      "{Solo}. When your turn starts, this Axie steals 35% of the Shield from the enemy Axie with the highest Shield. If no enemy Axie have Shield, it {Steal}s 6 HP from all enemy Axies instead.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_bug_hybrid_1.png",
    season: "Season 4",
  },
  {
    id: 550,
    tokenId: 0,
    itemId: "rune_bug_3010_s3",
    name: "Leech",
    class: "Bug",
    isBlockchain: 0,
    rarity: "Epic",
    effect:
      "{Solo}. When your turn starts, this Axie steals 40% of the Shield from the enemy Axie with the highest Shield. If no enemy Axie have Shield, it {Steal}s 6 HP from all enemy Axies instead.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_bug_hybrid_1.png",
    season: "Season 3",
  },
  {
    id: 347,
    tokenId: 0,
    itemId: "rune_bug_3011_s2_nondec",
    name: "Metamorphosis",
    class: "Bug",
    isBlockchain: 0,
    rarity: "Epic",
    effect:
      "{Solo}. When your turn starts, this Axie gains 1 {Cocoon} then gain 5 Shield for each {Cocoon} on this Axie.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_metamorphosis.png",
    season: "Season 2",
  },
  {
    id: 394,
    tokenId: 0,
    itemId: "rune_bug_3011_s2",
    name: "Metamorphosis",
    class: "Bug",
    isBlockchain: 0,
    rarity: "Epic",
    effect:
      "{Solo}. When your turn starts, this Axie gains 1 {Cocoon} then gain 5 Shield for each {Cocoon} on this Axie.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_metamorphosis.png",
    season: "Season 2",
  },
  {
    id: 336,
    tokenId: 0,
    itemId: "rune_bug_3011_s1",
    name: "Metamorphosis (S1.5)",
    class: "Bug",
    isBlockchain: 0,
    rarity: "Epic",
    effect:
      "{Solo}. When your turn starts, this Axie gains 1 {Cocoon}. When your turn starts, gain 4 Shield for each {Cocoon} on this Axie.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_metamorphosis.png",
    season: "Season 1",
  },
  {
    id: 18,
    tokenId: 0,
    itemId: "rune_bug_offensive_1",
    name: "Sturdy Fighter",
    class: "Bug",
    isBlockchain: 0,
    rarity: "Epic",
    effect:
      "Single Attack consumes 50% of current Shield and deal bonus DMG equal to x1.5 times that amount.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_bug_offensive_1.png",
    season: "Season Alpha",
  },
  {
    id: 52,
    tokenId: 0,
    itemId: "rune_bug_3001_s0",
    name: "Sturdy Fighter",
    class: "Bug",
    isBlockchain: 0,
    rarity: "Epic",
    effect:
      "Single Attack consumes 25% of current Shield and deal bonus DMG equal to 2 times that amount.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_bug_offensive_1.png",
    season: "Season 0",
  },
  {
    id: 169,
    tokenId: 0,
    itemId: "rune_bug_3001_s1",
    name: "Sturdy Fighter",
    class: "Bug",
    isBlockchain: 0,
    rarity: "Epic",
    effect:
      "{Solo}. Single attacks consume 20% of current Shield and deal bonus DMG equal to 3 times that amount.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_bug_offensive_1.png",
    season: "Season 1",
  },
  {
    id: 314,
    tokenId: 0,
    itemId: "rune_bug_3010_s2",
    name: "Sturdy Fighter",
    class: "Bug",
    isBlockchain: 0,
    rarity: "Epic",
    effect:
      "{Solo}. This Axie's Single Attacks consume 20% of the Axie's current Shield and deal bonus DMG = 3 times that amount.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_bug_offensive_1.png",
    season: "Season 2",
  },
  {
    id: 355,
    tokenId: 0,
    itemId: "rune_bug_3010_s2_nondec",
    name: "Sturdy Fighter",
    class: "Bug",
    isBlockchain: 0,
    rarity: "Epic",
    effect:
      "{Solo}. This Axie's Single Attacks consume 20% of the Axie's current Shield and deal bonus DMG = 3 times that amount.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_bug_offensive_1.png",
    season: "Season 2",
  },
  {
    id: 559,
    tokenId: 0,
    itemId: "rune_bug_3011_s3",
    name: "Sturdy Fighter",
    class: "Bug",
    isBlockchain: 0,
    rarity: "Epic",
    effect:
      "{Solo}. This Axie's Single Attacks consume 25% of the Axie's current Shield and deal bonus DMG = 3 times that amount.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_bug_offensive_1.png",
    season: "Season 3",
  },
  {
    id: 665,
    tokenId: 0,
    itemId: "rune_bug_3011_s3_nondec",
    name: "Sturdy Fighter",
    class: "Bug",
    isBlockchain: 0,
    rarity: "Epic",
    effect:
      "{Solo}. This Axie's Single Attacks consume 25% of the Axie's current Shield and deal bonus DMG = 3 times that amount.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_bug_offensive_1.png",
    season: "Season 3",
  },
  {
    id: 797,
    tokenId: 0,
    itemId: "rune_bug_3011_s4_nondec",
    name: "Sturdy Fighter",
    class: "Bug",
    isBlockchain: 0,
    rarity: "Epic",
    effect:
      "{Solo}. This Axie's Single Attacks consume 25% of the Axie's current Shield and deal bonus DMG = 3 times that amount.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_bug_offensive_1.png",
    season: "Season 4",
  },
  {
    id: 894,
    tokenId: 0,
    itemId: "rune_bug_3011_s4",
    name: "Sturdy Fighter",
    class: "Bug",
    isBlockchain: 0,
    rarity: "Epic",
    effect:
      "{Solo}. This Axie's Single Attacks consume 25% of the Axie's current Shield and deal bonus DMG = 3 times that amount.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_bug_offensive_1.png",
    season: "Season 4",
  },
  {
    id: 426,
    tokenId: 0,
    itemId: "rune_bug_3010_s1",
    name: "Sturdy Fighter (S1.5)",
    class: "Bug",
    isBlockchain: 0,
    rarity: "Epic",
    effect:
      "{Solo}. This Axie's Single Attacks consume 20% of the Axie's current Shield and deal bonus DMG = 3 times that amount.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_bug_offensive_1.png",
    season: "Season 1",
  },
  {
    id: 57,
    tokenId: 0,
    itemId: "rune_bug_utility_1",
    name: "Collect And Protect",
    class: "Bug",
    isBlockchain: 0,
    rarity: "Mystic",
    effect:
      "{Solo}. In odd <Round>s, draw 1 additional Card when your turn starts. In even <Round>s, gain 50 Shield when your turn starts.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_bug_utility_1.png",
    season: "Season Alpha",
  },
  {
    id: 78,
    tokenId: 0,
    itemId: "rune_bug_4001_s0",
    name: "Collect And Protect",
    class: "Bug",
    isBlockchain: 0,
    rarity: "Mystic",
    effect:
      "{Solo}. In odd <Round>s, draw 1 additional Card when your turn starts. In even <Round>s, gain 50 Shield when your turn starts.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_bug_utility_1.png",
    season: "Season 0",
  },
  {
    id: 149,
    tokenId: 0,
    itemId: "rune_bug_4001_s1",
    name: "Collect And Protect",
    class: "Bug",
    isBlockchain: 0,
    rarity: "Mystic",
    effect:
      "{Solo}. In odd <Round>s, draw 1 additional Card when your turn starts. In even <Round>s, gain 60 Shield when your turn starts.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_bug_utility_1.png",
    season: "Season 1",
  },
  {
    id: 340,
    tokenId: 0,
    itemId: "rune_bug_4010_s2_nondec",
    name: "Collect And Protect",
    class: "Bug",
    isBlockchain: 0,
    rarity: "Mystic",
    effect:
      "{Solo}. When your turn starts in Odd <Round>, draw 1 bonus Card; in even <Round>, gain 60 Shield.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_bug_utility_1.png",
    season: "Season 2",
  },
  {
    id: 508,
    tokenId: 0,
    itemId: "rune_bug_4010_s2",
    name: "Collect And Protect",
    class: "Bug",
    isBlockchain: 0,
    rarity: "Mystic",
    effect:
      "{Solo}. When your turn starts in Odd <Round>, draw 1 bonus Card; in even <Round>, gain 60 Shield.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_bug_utility_1.png",
    season: "Season 2",
  },
  {
    id: 583,
    tokenId: 0,
    itemId: "rune_bug_4010_s3",
    name: "Collect And Protect",
    class: "Bug",
    isBlockchain: 0,
    rarity: "Mystic",
    effect:
      "{Solo}. When your turn starts in Odd <Round>, draw 1 bonus Card; in even <Round>, gain 60 Shield.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_bug_utility_1.png",
    season: "Season 3",
  },
  {
    id: 610,
    tokenId: 0,
    itemId: "rune_bug_4010_s3_nondec",
    name: "Collect And Protect",
    class: "Bug",
    isBlockchain: 0,
    rarity: "Mystic",
    effect:
      "{Solo}. When your turn starts in Odd <Round>, draw 1 bonus Card; in even <Round>, gain 60 Shield.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_bug_utility_1.png",
    season: "Season 3",
  },
  {
    id: 781,
    tokenId: 0,
    itemId: "rune_bug_4010_s4",
    name: "Collect And Protect",
    class: "Bug",
    isBlockchain: 0,
    rarity: "Mystic",
    effect:
      "{Solo}. When your turn starts in Odd <Round>, draw 1 bonus Card; in even <Round>, gain 60 Shield.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_bug_utility_1.png",
    season: "Season 4",
  },
  {
    id: 963,
    tokenId: 0,
    itemId: "rune_bug_4010_s4_nondec",
    name: "Collect And Protect",
    class: "Bug",
    isBlockchain: 0,
    rarity: "Mystic",
    effect:
      "{Solo}. When your turn starts in Odd <Round>, draw 1 bonus Card; in even <Round>, gain 60 Shield.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_bug_utility_1.png",
    season: "Season 4",
  },
  {
    id: 455,
    tokenId: 0,
    itemId: "rune_bug_4010_s1",
    name: "Collect And Protect (S1.5)",
    class: "Bug",
    isBlockchain: 0,
    rarity: "Mystic",
    effect:
      "{Solo}. When your turn starts in Odd <Round>, draw 1 bonus Card; in even <Round>, gain 60 Shield.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_bug_utility_1.png",
    season: "Season 1",
  },
  {
    id: 591,
    tokenId: 0,
    itemId: "rune_bug_4011_s3",
    name: "Metamorphosis",
    class: "Bug",
    isBlockchain: 0,
    rarity: "Mystic",
    effect:
      "{Solo}. When your turn starts, this Axie gains 2 {Cocoon} and deals DMG equal to 5% of its Shield per {Cocoon} stack to all Enemy Axies.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_metamorphosis.png",
    season: "Season 3",
  },
  {
    id: 715,
    tokenId: 0,
    itemId: "rune_bug_4011_s3_nondec",
    name: "Metamorphosis",
    class: "Bug",
    isBlockchain: 0,
    rarity: "Mystic",
    effect:
      "{Solo}. When your turn starts, this Axie gains 2 {Cocoon} and deals DMG equal to 5% of its Shield per {Cocoon} stack to all Enemy Axies.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_metamorphosis.png",
    season: "Season 3",
  },
  {
    id: 788,
    tokenId: 0,
    itemId: "rune_bug_4011_s4_nondec",
    name: "Metamorphosis",
    class: "Bug",
    isBlockchain: 0,
    rarity: "Mystic",
    effect:
      "{Solo}. When your turn starts, this Axie gains 2 {Cocoon} and deals DMG equal to 7% of its Shield per {Cocoon} stack to all Enemy Axies.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_metamorphosis.png",
    season: "Season 4",
  },
  {
    id: 964,
    tokenId: 0,
    itemId: "rune_bug_4011_s4",
    name: "Metamorphosis",
    class: "Bug",
    isBlockchain: 0,
    rarity: "Mystic",
    effect:
      "{Solo}. When your turn starts, this Axie gains 2 {Cocoon} and deals DMG equal to 7% of its Shield per {Cocoon} stack to all Enemy Axies.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_metamorphosis.png",
    season: "Season 4",
  },
  {
    id: 142,
    tokenId: 0,
    itemId: "rune_bug_2002_s1",
    name: "Leech",
    class: "Bug",
    isBlockchain: 0,
    rarity: "Rare",
    effect:
      "When your turn start, steal 30% Shield from the enemy with the highest Shield. If no one has Shield, {Steal} 4 HP from that one instead.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_bug_hybrid_1.png",
    season: "Season 1",
  },
  {
    id: 298,
    tokenId: 0,
    itemId: "rune_bug_2012_s2_nondec",
    name: "Leech",
    class: "Bug",
    isBlockchain: 0,
    rarity: "Rare",
    effect:
      "When your turn start, this Axie steals 30% of the Shield from the enemy Axie with the highest Shield. If no enemy Axie have Shield, it {Steal}s 4 HP from all enemy Axies instead.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_bug_hybrid_1.png",
    season: "Season 2",
  },
  {
    id: 438,
    tokenId: 0,
    itemId: "rune_bug_2012_s2",
    name: "Leech",
    class: "Bug",
    isBlockchain: 0,
    rarity: "Rare",
    effect:
      "When your turn start, this Axie steals 30% of the Shield from the enemy Axie with the highest Shield. If no enemy Axie have Shield, it {Steal}s 4 HP from all enemy Axies instead.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_bug_hybrid_1.png",
    season: "Season 2",
  },
  {
    id: 379,
    tokenId: 0,
    itemId: "rune_bug_2012_s1",
    name: "Leech (S1.5)",
    class: "Bug",
    isBlockchain: 0,
    rarity: "Rare",
    effect:
      "When your turn start, this Axie steals 30% of the Shield from the enemy Axie with the highest Shield. If no enemy Axie have Shield, it {Steal}s 4 HP from all enemy Axies instead.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_bug_hybrid_1.png",
    season: "Season 1",
  },
  {
    id: 42,
    tokenId: 0,
    itemId: "rune_bug_hybrid_1",
    name: "Shield Leecher",
    class: "Bug",
    isBlockchain: 0,
    rarity: "Rare",
    effect:
      "When your turn starts, steal 50% Shield from the Enemy with highest Shield.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_bug_hybrid_1.png",
    season: "Season Alpha",
  },
  {
    id: 111,
    tokenId: 0,
    itemId: "rune_bug_2002_s0",
    name: "Shield Leecher",
    class: "Bug",
    isBlockchain: 0,
    rarity: "Rare",
    effect:
      "When your turn starts, steal 50% Shield from the Enemy with highest Shield.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_bug_hybrid_1.png",
    season: "Season 0",
  },
  {
    id: 21,
    tokenId: 0,
    itemId: "rune_bug_defensive_1",
    name: "Vault Builder",
    class: "Bug",
    isBlockchain: 0,
    rarity: "Rare",
    effect:
      "When your turn ends, gain Shield equal to (3 x the number of cards in your Discard Pile).",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_bug_defensive_1.png",
    season: "Season Alpha",
  },
  {
    id: 113,
    tokenId: 0,
    itemId: "rune_bug_2001_s0",
    name: "Vault Builder",
    class: "Bug",
    isBlockchain: 0,
    rarity: "Rare",
    effect:
      "When your turn ends, gain Shield equal to (3 x the number of cards in your Discard Pile).",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_bug_defensive_1.png",
    season: "Season 0",
  },
  {
    id: 210,
    tokenId: 0,
    itemId: "rune_bug_2001_s1",
    name: "Vault Builder",
    class: "Bug",
    isBlockchain: 0,
    rarity: "Rare",
    effect:
      "When your turn start, gain Shield = the number of cards in your Draw Pile. When your turn ends, gain Shield = 3 x the number of cards in your Discard Pile.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_bug_defensive_1.png",
    season: "Season 1",
  },
  {
    id: 292,
    tokenId: 0,
    itemId: "rune_bug_2011_s2",
    name: "Vault Builder",
    class: "Bug",
    isBlockchain: 0,
    rarity: "Rare",
    effect:
      "When your turn starts, this Axie gains 1 Shield for each card in your Draw Pile. When your turn ends, it gains 3 Shield for each card in your Discard Pile.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_bug_defensive_1.png",
    season: "Season 2",
  },
  {
    id: 393,
    tokenId: 0,
    itemId: "rune_bug_2011_s2_nondec",
    name: "Vault Builder",
    class: "Bug",
    isBlockchain: 0,
    rarity: "Rare",
    effect:
      "When your turn starts, this Axie gains 1 Shield for each card in your Draw Pile. When your turn ends, it gains 3 Shield for each card in your Discard Pile.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_bug_defensive_1.png",
    season: "Season 2",
  },
  {
    id: 582,
    tokenId: 0,
    itemId: "rune_bug_2011_s3",
    name: "Vault Builder",
    class: "Bug",
    isBlockchain: 0,
    rarity: "Rare",
    effect:
      "When your turn starts, this Axie gains 1 Shield for each card in your Draw Pile. When your turn ends, it gains 3 Shield for each card in your Discard Pile.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_bug_defensive_1.png",
    season: "Season 3",
  },
  {
    id: 703,
    tokenId: 0,
    itemId: "rune_bug_2011_s3_nondec",
    name: "Vault Builder",
    class: "Bug",
    isBlockchain: 0,
    rarity: "Rare",
    effect:
      "When your turn starts, this Axie gains 1 Shield for each card in your Draw Pile. When your turn ends, it gains 3 Shield for each card in your Discard Pile.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_bug_defensive_1.png",
    season: "Season 3",
  },
  {
    id: 900,
    tokenId: 0,
    itemId: "rune_bug_2011_s4_nondec",
    name: "Vault Builder",
    class: "Bug",
    isBlockchain: 0,
    rarity: "Rare",
    effect:
      "When your turn starts, this Axie gains 1 Shield for each card in your Draw Pile. When your turn ends, it gains 3 Shield for each card in your Discard Pile.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_bug_defensive_1.png",
    season: "Season 4",
  },
  {
    id: 908,
    tokenId: 0,
    itemId: "rune_bug_2011_s4",
    name: "Vault Builder",
    class: "Bug",
    isBlockchain: 0,
    rarity: "Rare",
    effect:
      "When your turn starts, this Axie gains 1 Shield for each card in your Draw Pile. When your turn ends, it gains 3 Shield for each card in your Discard Pile.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_bug_defensive_1.png",
    season: "Season 4",
  },
  {
    id: 367,
    tokenId: 0,
    itemId: "rune_bug_2011_s1",
    name: "Vault Builder (S1.5)",
    class: "Bug",
    isBlockchain: 0,
    rarity: "Rare",
    effect:
      "When your turn starts, this Axie gains 1 Shield for each card in your Draw Pile. When your turn ends, it gains 3 Shield for each card in your Discard Pile.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_bug_defensive_1.png",
    season: "Season 1",
  },
  {
    id: 459,
    tokenId: 0,
    itemId: "rune_bug_2010_s2_nondec",
    name: "Way of Bug",
    class: "Bug",
    isBlockchain: 0,
    rarity: "Rare",
    effect:
      "When the battle starts, this Axie gains 2 {Cocoon}, then its Shield cards grant 10% bonus Shield for the rest of the battle.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_way_of_bug.png",
    season: "Season 2",
  },
  {
    id: 528,
    tokenId: 0,
    itemId: "rune_bug_2010_s2",
    name: "Way of Bug",
    class: "Bug",
    isBlockchain: 0,
    rarity: "Rare",
    effect:
      "When the battle starts, this Axie gains 2 {Cocoon}, then its Shield cards grant 10% bonus Shield for the rest of the battle.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_way_of_bug.png",
    season: "Season 2",
  },
  {
    id: 575,
    tokenId: 0,
    itemId: "rune_bug_2010_s3",
    name: "Way of Bug",
    class: "Bug",
    isBlockchain: 0,
    rarity: "Rare",
    effect:
      "When the battle starts, this Axie gains 2 {Cocoon}. This Axie gains 15% bonus Shield from all sources.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_way_of_bug.png",
    season: "Season 3",
  },
  {
    id: 641,
    tokenId: 0,
    itemId: "rune_bug_2010_s3_nondec",
    name: "Way of Bug",
    class: "Bug",
    isBlockchain: 0,
    rarity: "Rare",
    effect:
      "When the battle starts, this Axie gains 2 {Cocoon}. This Axie gains 15% bonus Shield from all sources.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_way_of_bug.png",
    season: "Season 3",
  },
  {
    id: 787,
    tokenId: 0,
    itemId: "rune_bug_2010_s4_nondec",
    name: "Way of Bug",
    class: "Bug",
    isBlockchain: 0,
    rarity: "Rare",
    effect:
      "When the battle starts, this Axie gains 2 {Cocoon}. This Axie gains 15% bonus Shield from all sources.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_way_of_bug.png",
    season: "Season 4",
  },
  {
    id: 941,
    tokenId: 0,
    itemId: "rune_bug_2010_s4",
    name: "Way of Bug",
    class: "Bug",
    isBlockchain: 0,
    rarity: "Rare",
    effect:
      "When the battle starts, this Axie gains 2 {Cocoon}. This Axie gains 15% bonus Shield from all sources.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_way_of_bug.png",
    season: "Season 4",
  },
  {
    id: 480,
    tokenId: 0,
    itemId: "rune_bug_2010_s1",
    name: "Way of Bug (S1.5)",
    class: "Bug",
    isBlockchain: 0,
    rarity: "Rare",
    effect:
      "When the battle starts, this Axie gains 2 {Cocoon}, then its Shield cards grant 10% bonus Shield for the rest of the battle.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_way_of_bug.png",
    season: "Season 1",
  },
  {
    id: 305,
    tokenId: 0,
    itemId: "rune_dawn_3011_s2",
    name: "Healing Force",
    class: "Dawn",
    isBlockchain: 0,
    rarity: "Epic",
    effect:
      "{Solo}. When your turn starts, for each alive allies in your team, heal 8 HP to your team and deal 4 DMG to all enemies.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_healing_force.png",
    season: "Season 2",
  },
  {
    id: 402,
    tokenId: 0,
    itemId: "rune_dawn_3011_s2_nondec",
    name: "Healing Force",
    class: "Dawn",
    isBlockchain: 0,
    rarity: "Epic",
    effect:
      "{Solo}. When your turn starts, for each alive allies in your team, heal 8 HP to your team and deal 4 DMG to all enemies.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_healing_force.png",
    season: "Season 2",
  },
  {
    id: 541,
    tokenId: 0,
    itemId: "rune_dawn_3012_s3",
    name: "Healing Force",
    class: "Dawn",
    isBlockchain: 0,
    rarity: "Epic",
    effect:
      "{Solo}. When your turn starts, for each alive allies in your team, heal 8 HP to your team and deal 4 DMG to all enemies.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_healing_force.png",
    season: "Season 3",
  },
  {
    id: 640,
    tokenId: 0,
    itemId: "rune_dawn_3012_s3_nondec",
    name: "Healing Force",
    class: "Dawn",
    isBlockchain: 0,
    rarity: "Epic",
    effect:
      "{Solo}. When your turn starts, for each alive allies in your team, heal 8 HP to your team and deal 4 DMG to all enemies.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_healing_force.png",
    season: "Season 3",
  },
  {
    id: 915,
    tokenId: 0,
    itemId: "rune_dawn_3012_s4_nondec",
    name: "Healing Force",
    class: "Dawn",
    isBlockchain: 0,
    rarity: "Epic",
    effect:
      "{Solo}. When your turn starts, heal all allies for 8 HP and for each living ally, deal 3 DMG to all enemies. ",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_healing_force.png",
    season: "Season 4",
  },
  {
    id: 968,
    tokenId: 0,
    itemId: "rune_dawn_3012_s4",
    name: "Healing Force",
    class: "Dawn",
    isBlockchain: 0,
    rarity: "Epic",
    effect:
      "{Solo}. When your turn starts, heal all allies for 8 HP and for each living ally, deal 3 DMG to all enemies. ",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_healing_force.png",
    season: "Season 4",
  },
  {
    id: 476,
    tokenId: 0,
    itemId: "rune_dawn_3011_s1",
    name: "Healing Force (S1.5)",
    class: "Dawn",
    isBlockchain: 0,
    rarity: "Epic",
    effect:
      "{Solo}. When your turn starts, for each alive allies in your team, heal 8 HP to your team and deal 4 DMG to all enemies.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_healing_force.png",
    season: "Season 1",
  },
  {
    id: 4,
    tokenId: 0,
    itemId: "rune_dawn_3001_s0",
    name: "Heaven's Echoes",
    class: "Dawn",
    isBlockchain: 0,
    rarity: "Epic",
    effect:
      "Your allies gain 1 {Damage Boost} whenever this Axie attacks. Your allies gain 15 Shield whenever this Axie uses a Skill.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_dawn_hybrid_1.png",
    season: "Season 0",
  },
  {
    id: 30,
    tokenId: 0,
    itemId: "rune_dawn_hybrid_1",
    name: "Heaven's Echoes",
    class: "Dawn",
    isBlockchain: 0,
    rarity: "Epic",
    effect:
      "Your allies gain 1 {Damage Boost} whenever this Axie attacks. Your allies gain 8 Shield whenever this Axie uses a Skill.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_dawn_hybrid_1.png",
    season: "Season Alpha",
  },
  {
    id: 158,
    tokenId: 0,
    itemId: "rune_dawn_3001_s1",
    name: "Heaven's Echoes",
    class: "Dawn",
    isBlockchain: 0,
    rarity: "Epic",
    effect:
      "{Solo}. When this Axie use an Attack card, other allies in the same turn deal 15% more DMG. If it's a Skill card, they gain 15 Shield instead.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_dawn_hybrid_1.png",
    season: "Season 1",
  },
  {
    id: 445,
    tokenId: 0,
    itemId: "rune_dawn_3010_s2_nondec",
    name: "Heaven's Echoes",
    class: "Dawn",
    isBlockchain: 0,
    rarity: "Epic",
    effect:
      "{Solo}. If this Axie had attacked in the turn, other allied Axies deal 15% bonus DMG until the turn ends. If it had used Skill cards instead, other allied Axies gain 15 Shield.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_dawn_hybrid_1.png",
    season: "Season 2",
  },
  {
    id: 491,
    tokenId: 0,
    itemId: "rune_dawn_3010_s2",
    name: "Heaven's Echoes",
    class: "Dawn",
    isBlockchain: 0,
    rarity: "Epic",
    effect:
      "{Solo}. If this Axie had attacked in the turn, other allied Axies deal 15% bonus DMG until the turn ends. If it had used Skill cards instead, other allied Axies gain 15 Shield.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_dawn_hybrid_1.png",
    season: "Season 2",
  },
  {
    id: 565,
    tokenId: 0,
    itemId: "rune_dawn_3011_s3",
    name: "Heaven's Echoes",
    class: "Dawn",
    isBlockchain: 0,
    rarity: "Epic",
    effect:
      "{Solo}. After this Axie attacks, until your turn ends, other allied Axies deal 20% bonus damage. Whenever this Axie uses a Skill, other allied Axies gain 20 Shield.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_dawn_hybrid_1.png",
    season: "Season 3",
  },
  {
    id: 660,
    tokenId: 0,
    itemId: "rune_dawn_3011_s3_nondec",
    name: "Heaven's Echoes",
    class: "Dawn",
    isBlockchain: 0,
    rarity: "Epic",
    effect:
      "{Solo}. After this Axie attacks, until your turn ends, other allied Axies deal 20% bonus damage. Whenever this Axie uses a Skill, other allied Axies gain 20 Shield.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_dawn_hybrid_1.png",
    season: "Season 3",
  },
  {
    id: 789,
    tokenId: 0,
    itemId: "rune_dawn_3011_s4_nondec",
    name: "Heaven's Echoes",
    class: "Dawn",
    isBlockchain: 0,
    rarity: "Epic",
    effect:
      "{Solo}. After this Axie attacks, until your turn ends, other allied Axies deal 20% bonus damage. Whenever this Axie uses a Skill, other allied Axies gain 20 Shield.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_dawn_hybrid_1.png",
    season: "Season 4",
  },
  {
    id: 953,
    tokenId: 0,
    itemId: "rune_dawn_3011_s4",
    name: "Heaven's Echoes",
    class: "Dawn",
    isBlockchain: 0,
    rarity: "Epic",
    effect:
      "{Solo}. After this Axie attacks, until your turn ends, other allied Axies deal 20% bonus damage. Whenever this Axie uses a Skill, other allied Axies gain 20 Shield.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_dawn_hybrid_1.png",
    season: "Season 4",
  },
  {
    id: 299,
    tokenId: 0,
    itemId: "rune_dawn_3010_s1",
    name: "Heaven's Echoes (S1.5)",
    class: "Dawn",
    isBlockchain: 0,
    rarity: "Epic",
    effect:
      "{Solo}. If this Axie had attacked in the turn, other allied Axies deal 15% bonus DMG until the turn ends. If it had used Skill cards instead, other allied Axies gain 15 Shield.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_dawn_hybrid_1.png",
    season: "Season 1",
  },
  {
    id: 554,
    tokenId: 0,
    itemId: "rune_dawn_3010_s3",
    name: "Rejuvenate",
    class: "Dawn",
    isBlockchain: 0,
    rarity: "Epic",
    effect:
      "{Solo}. This Axie's Heal and Shield cards gain 15% bonus stat and apply 1 {Cleanser} to their targets.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_rejuvenate.png",
    season: "Season 3",
  },
  {
    id: 631,
    tokenId: 0,
    itemId: "rune_dawn_3010_s3_nondec",
    name: "Rejuvenate",
    class: "Dawn",
    isBlockchain: 0,
    rarity: "Epic",
    effect:
      "{Solo}. This Axie's Heal and Shield cards gain 15% bonus stat and apply 1 {Cleanser} to their targets.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_rejuvenate.png",
    season: "Season 3",
  },
  {
    id: 848,
    tokenId: 0,
    itemId: "rune_dawn_3010_s4_nondec",
    name: "Rejuvenate",
    class: "Dawn",
    isBlockchain: 0,
    rarity: "Epic",
    effect:
      "{Solo}. This Axie's Heal and Shield cards gain 15% bonus stat and apply 1 {Cleanser} to their targets.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_rejuvenate.png",
    season: "Season 4",
  },
  {
    id: 954,
    tokenId: 0,
    itemId: "rune_dawn_3010_s4",
    name: "Rejuvenate",
    class: "Dawn",
    isBlockchain: 0,
    rarity: "Epic",
    effect:
      "{Solo}. This Axie's Heal and Shield cards gain 15% bonus stat and apply 1 {Cleanser} to their targets.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_rejuvenate.png",
    season: "Season 4",
  },
  {
    id: 563,
    tokenId: 0,
    itemId: "rune_dawn_4011_s3",
    name: "Celestial Might",
    class: "Dawn",
    isBlockchain: 0,
    rarity: "Mystic",
    effect:
      "{Solo}. This Axie's abilities gain 25% bonus stats when played. This Axie's abilities are <Banish>ed after they are played two times.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_dawn_offensive_1.png",
    season: "Season 3",
  },
  {
    id: 655,
    tokenId: 0,
    itemId: "rune_dawn_4011_s3_nondec",
    name: "Celestial Might",
    class: "Dawn",
    isBlockchain: 0,
    rarity: "Mystic",
    effect:
      "{Solo}. This Axie's abilities gain 25% bonus stats when played. This Axie's abilities are <Banish>ed after they are played two times.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_dawn_offensive_1.png",
    season: "Season 3",
  },
  {
    id: 925,
    tokenId: 0,
    itemId: "rune_dawn_4011_s4_nondec",
    name: "Celestial Might",
    class: "Dawn",
    isBlockchain: 0,
    rarity: "Mystic",
    effect:
      "{Solo}. This Axie's abilities gain 25% bonus stats when played. This Axie's abilities are <Banish>ed after they are played two times.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_dawn_offensive_1.png",
    season: "Season 4",
  },
  {
    id: 938,
    tokenId: 0,
    itemId: "rune_dawn_4011_s4",
    name: "Celestial Might",
    class: "Dawn",
    isBlockchain: 0,
    rarity: "Mystic",
    effect:
      "{Solo}. This Axie's abilities gain 25% bonus stats when played. This Axie's abilities are <Banish>ed after they are played two times.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_dawn_offensive_1.png",
    season: "Season 4",
  },
  {
    id: 649,
    tokenId: 0,
    itemId: "rune_dawn_4010_s3_nondec",
    name: "Holy Prayer",
    class: "Dawn",
    isBlockchain: 0,
    rarity: "Mystic",
    effect:
      "{Solo}. When your turn starts, remove up to 2 Cursed cards in your Deck. While there are no Cursed cards in your Deck, all allied Axies' cards gain 10% bonus stats.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_dawn_utility_1.png",
    season: "Season 3",
  },
  {
    id: 778,
    tokenId: 0,
    itemId: "rune_dawn_4010_s4",
    name: "Holy Prayer",
    class: "Dawn",
    isBlockchain: 0,
    rarity: "Mystic",
    effect:
      "{Solo}. When your turn starts, remove 1 Cursed card in your Deck. While there are no Cursed cards in your Deck, all allied Axies' cards gain 15% bonus stats.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_dawn_utility_1.png",
    season: "Season 4",
  },
  {
    id: 946,
    tokenId: 0,
    itemId: "rune_dawn_4010_s4_nondec",
    name: "Holy Prayer",
    class: "Dawn",
    isBlockchain: 0,
    rarity: "Mystic",
    effect:
      "{Solo}. When your turn starts, remove 1 Cursed card in your Deck. While there are no Cursed cards in your Deck, all allied Axies' cards gain 15% bonus stats.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_dawn_utility_1.png",
    season: "Season 4",
  },
  {
    id: 74,
    tokenId: 0,
    itemId: "rune_dawn_4001_s0",
    name: "Holy Prayer",
    class: "Dawn",
    isBlockchain: 0,
    rarity: "Mystic",
    effect:
      "{Solo}. When your turn starts, remove 1 Curse in your deck. Heal all teammates for 10 HP and grant all teammate 1 {Damage Boost} when successfully removing a Curse this way.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_dawn_utility_1.png",
    season: "Season 0",
  },
  {
    id: 79,
    tokenId: 0,
    itemId: "rune_dawn_utility_1",
    name: "Holy Prayer",
    class: "Dawn",
    isBlockchain: 0,
    rarity: "Mystic",
    effect:
      "{Solo}. When your turn starts, remove 1 Curse in your deck. Heal all teammates for 10 HP and grant all teammate 1 {Damage Boost} when successfully removing a Curse this way.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_dawn_utility_1.png",
    season: "Season Alpha",
  },
  {
    id: 186,
    tokenId: 0,
    itemId: "rune_dawn_4001_s1",
    name: "Holy Prayer",
    class: "Dawn",
    isBlockchain: 0,
    rarity: "Mystic",
    effect:
      "{Solo}. When your turn starts, remove 2 Cursed cards in your Deck. Increase your team's card base stat by 10% if there isn't any Cursed card in your Deck.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_dawn_utility_1.png",
    season: "Season 1",
  },
  {
    id: 383,
    tokenId: 0,
    itemId: "rune_dawn_4010_s2_nondec",
    name: "Holy Prayer",
    class: "Dawn",
    isBlockchain: 0,
    rarity: "Mystic",
    effect:
      "{Solo}. When your turn starts, remove up to 2 Cursed cards in your Deck. While there are no Cursed cards in your Deck, all allied Axies' cards gain 10% bonus stats.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_dawn_utility_1.png",
    season: "Season 2",
  },
  {
    id: 446,
    tokenId: 0,
    itemId: "rune_dawn_4010_s2",
    name: "Holy Prayer",
    class: "Dawn",
    isBlockchain: 0,
    rarity: "Mystic",
    effect:
      "{Solo}. When your turn starts, remove up to 2 Cursed cards in your Deck. While there are no Cursed cards in your Deck, all allied Axies' cards gain 10% bonus stats.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_dawn_utility_1.png",
    season: "Season 2",
  },
  {
    id: 553,
    tokenId: 0,
    itemId: "rune_dawn_4010_s3",
    name: "Holy Prayer",
    class: "Dawn",
    isBlockchain: 0,
    rarity: "Mystic",
    effect:
      "{Solo}. When your turn starts, remove up to 2 Cursed cards in your Deck. While there are no Cursed cards in your Deck, all allied Axies' cards gain 10% bonus stats.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_dawn_utility_1.png",
    season: "Season 3",
  },
  {
    id: 431,
    tokenId: 0,
    itemId: "rune_dawn_4010_s1",
    name: "Holy Prayer (S1.5)",
    class: "Dawn",
    isBlockchain: 0,
    rarity: "Mystic",
    effect:
      "{Solo}. When your turn starts, remove up to 2 Cursed cards in your Deck. While there are no Cursed cards in your Deck, all allied Axies' cards gain 10% bonus stats.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_dawn_utility_1.png",
    season: "Season 1",
  },
  {
    id: 5,
    tokenId: 0,
    itemId: "rune_dawn_2001_s0",
    name: "Arcane Protection",
    class: "Dawn",
    isBlockchain: 0,
    rarity: "Rare",
    effect: "Take 5% less DMG per Buff on this Axie (capped at 20%).",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_dawn_defensive_1.png",
    season: "Season 0",
  },
  {
    id: 23,
    tokenId: 0,
    itemId: "rune_dawn_defensive_1",
    name: "Arcane Protection",
    class: "Dawn",
    isBlockchain: 0,
    rarity: "Rare",
    effect: "Take 5% less DMG per Buff on this Axie (capped at 20%).",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_dawn_defensive_1.png",
    season: "Season Alpha",
  },
  {
    id: 170,
    tokenId: 0,
    itemId: "rune_dawn_2001_s1",
    name: "Arcane Protection",
    class: "Dawn",
    isBlockchain: 0,
    rarity: "Rare",
    effect: "Take 5% less DMG per Buff or Secret on this Axie (capped at 20%).",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_dawn_defensive_1.png",
    season: "Season 1",
  },
  {
    id: 295,
    tokenId: 0,
    itemId: "rune_dawn_2012_s2",
    name: "Arcane Protection",
    class: "Dawn",
    isBlockchain: 0,
    rarity: "Rare",
    effect: "Take 5% less DMG per Buff or Secret on this Axie (Cap at 20%).",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_dawn_defensive_1.png",
    season: "Season 2",
  },
  {
    id: 301,
    tokenId: 0,
    itemId: "rune_dawn_2012_s2_nondec",
    name: "Arcane Protection",
    class: "Dawn",
    isBlockchain: 0,
    rarity: "Rare",
    effect: "Take 5% less DMG per Buff or Secret on this Axie (Cap at 20%).",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_dawn_defensive_1.png",
    season: "Season 2",
  },
  {
    id: 587,
    tokenId: 0,
    itemId: "rune_dawn_2011_s3",
    name: "Arcane Protection",
    class: "Dawn",
    isBlockchain: 0,
    rarity: "Rare",
    effect: "Take 5% less DMG per Buff or Secret on this Axie (Cap at 20%).",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_dawn_defensive_1.png",
    season: "Season 3",
  },
  {
    id: 668,
    tokenId: 0,
    itemId: "rune_dawn_2011_s3_nondec",
    name: "Arcane Protection",
    class: "Dawn",
    isBlockchain: 0,
    rarity: "Rare",
    effect: "Take 5% less DMG per Buff or Secret on this Axie (Cap at 20%).",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_dawn_defensive_1.png",
    season: "Season 3",
  },
  {
    id: 912,
    tokenId: 0,
    itemId: "rune_dawn_2011_s4",
    name: "Arcane Protection",
    class: "Dawn",
    isBlockchain: 0,
    rarity: "Rare",
    effect: "Take 5% less DMG per Buff or Secret on this Axie (Cap at 20%).",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_dawn_defensive_1.png",
    season: "Season 4",
  },
  {
    id: 944,
    tokenId: 0,
    itemId: "rune_dawn_2011_s4_nondec",
    name: "Arcane Protection",
    class: "Dawn",
    isBlockchain: 0,
    rarity: "Rare",
    effect: "Take 5% less DMG per Buff or Secret on this Axie (Cap at 20%).",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_dawn_defensive_1.png",
    season: "Season 4",
  },
  {
    id: 366,
    tokenId: 0,
    itemId: "rune_dawn_2012_s1",
    name: "Arcane Protection (S1.5)",
    class: "Dawn",
    isBlockchain: 0,
    rarity: "Rare",
    effect: "Take 5% less DMG per Buff or Secret on this Axie (Cap at 20%).",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_dawn_defensive_1.png",
    season: "Season 1",
  },
  {
    id: 39,
    tokenId: 0,
    itemId: "rune_dawn_2002_s0",
    name: "Celestial Might",
    class: "Dawn",
    isBlockchain: 0,
    rarity: "Rare",
    effect: "Deal 5% more DMG per Buff on this Axie (capped at 20%).",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_dawn_offensive_1.png",
    season: "Season 0",
  },
  {
    id: 119,
    tokenId: 0,
    itemId: "rune_dawn_offensive_1",
    name: "Celestial Might",
    class: "Dawn",
    isBlockchain: 0,
    rarity: "Rare",
    effect: "Deal 5% more DMG per Buff on this Axie (capped at 20%).",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_dawn_offensive_1.png",
    season: "Season Alpha",
  },
  {
    id: 157,
    tokenId: 0,
    itemId: "rune_dawn_2002_s1",
    name: "Celestial Might",
    class: "Dawn",
    isBlockchain: 0,
    rarity: "Rare",
    effect: "Deal 5% bonus DMG per Buff on this Axie (capped at 20%).",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_dawn_offensive_1.png",
    season: "Season 1",
  },
  {
    id: 352,
    tokenId: 0,
    itemId: "rune_dawn_2010_s2",
    name: "Divine Ring",
    class: "Dawn",
    isBlockchain: 0,
    rarity: "Rare",
    effect:
      "Before the battle starts, add 1 [Purify] to your Deck. This Axie's Heal and Shield cards gain 5% bonus stat for the rest of the battle.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_divine_ring.png",
    season: "Season 2",
  },
  {
    id: 381,
    tokenId: 0,
    itemId: "rune_dawn_2010_s2_nondec",
    name: "Divine Ring",
    class: "Dawn",
    isBlockchain: 0,
    rarity: "Rare",
    effect:
      "Before the battle starts, add 1 [Purify] to your Deck. This Axie's Heal and Shield cards gain 5% bonus stat for the rest of the battle.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_divine_ring.png",
    season: "Season 2",
  },
  {
    id: 564,
    tokenId: 0,
    itemId: "rune_dawn_2010_s3",
    name: "Divine Ring",
    class: "Dawn",
    isBlockchain: 0,
    rarity: "Rare",
    effect:
      "Before the battle starts, add 1 [Purify] to your Deck. \nThis Axie's cards gain 10% bonus stat for the rest of the battle.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_divine_ring.png",
    season: "Season 3",
  },
  {
    id: 730,
    tokenId: 0,
    itemId: "rune_dawn_2010_s3_nondec",
    name: "Divine Ring",
    class: "Dawn",
    isBlockchain: 0,
    rarity: "Rare",
    effect:
      "Before the battle starts, add 1 [Purify] to your Deck. \nThis Axie's cards gain 10% bonus stat for the rest of the battle.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_divine_ring.png",
    season: "Season 3",
  },
  {
    id: 893,
    tokenId: 0,
    itemId: "rune_dawn_2010_s4_nondec",
    name: "Divine Ring",
    class: "Dawn",
    isBlockchain: 0,
    rarity: "Rare",
    effect:
      "Before the battle starts, add 1 [Purify] to your Deck. \nThis Axie's cards gain 10% bonus stat for the rest of the battle.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_divine_ring.png",
    season: "Season 4",
  },
  {
    id: 920,
    tokenId: 0,
    itemId: "rune_dawn_2010_s4",
    name: "Divine Ring",
    class: "Dawn",
    isBlockchain: 0,
    rarity: "Rare",
    effect:
      "Before the battle starts, add 1 [Purify] to your Deck. \nThis Axie's cards gain 10% bonus stat for the rest of the battle.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_divine_ring.png",
    season: "Season 4",
  },
  {
    id: 294,
    tokenId: 0,
    itemId: "rune_dawn_2010_s1",
    name: "Divine Ring (S1.5)",
    class: "Dawn",
    isBlockchain: 0,
    rarity: "Rare",
    effect:
      "Before the battle starts, add 1 [Purify] to your Deck. This Axie's Heal and Shield cards gain 5% bonus stat for the rest of the battle.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_divine_ring.png",
    season: "Season 1",
  },
  {
    id: 345,
    tokenId: 0,
    itemId: "rune_dawn_2011_s2_nondec",
    name: "Rejuvenate",
    class: "Dawn",
    isBlockchain: 0,
    rarity: "Rare",
    effect:
      "This Axie's Skill and Secret cards gain 10% bonus stat and apply 1 {Cleanser} to their targets.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_rejuvenate.png",
    season: "Season 2",
  },
  {
    id: 360,
    tokenId: 0,
    itemId: "rune_dawn_2011_s2",
    name: "Rejuvenate",
    class: "Dawn",
    isBlockchain: 0,
    rarity: "Rare",
    effect:
      "This Axie's Skill and Secret cards gain 10% bonus stat and apply 1 {Cleanser} to their targets.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_rejuvenate.png",
    season: "Season 2",
  },
  {
    id: 481,
    tokenId: 0,
    itemId: "rune_dawn_2011_s1",
    name: "Rejuvenate (S1.5)",
    class: "Dawn",
    isBlockchain: 0,
    rarity: "Rare",
    effect:
      "This Axie's Heal and Shield cards gain 10% bonus stat and apply 1 {Cleanser} to their targets.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_rejuvenate.png",
    season: "Season 1",
  },
  {
    id: 8,
    tokenId: 0,
    itemId: "rune_dusk_3001_s0",
    name: "Malediction",
    class: "Dusk",
    isBlockchain: 0,
    rarity: "Epic",
    effect:
      "Deal 15% more DMG against debuffed Enemies. Take 15% less DMG from debuffed Enemies",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_dusk_hybrid_1.png",
    season: "Season 0",
  },
  {
    id: 54,
    tokenId: 0,
    itemId: "rune_dusk_hybrid_1",
    name: "Malediction",
    class: "Dusk",
    isBlockchain: 0,
    rarity: "Epic",
    effect:
      "Deal 15% more DMG against debuffed Enemies. Take 15% less DMG from debuffed Enemies",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_dusk_hybrid_1.png",
    season: "Season Alpha",
  },
  {
    id: 183,
    tokenId: 0,
    itemId: "rune_dusk_3001_s1",
    name: "Malediction",
    class: "Dusk",
    isBlockchain: 0,
    rarity: "Epic",
    effect:
      "{Solo} Deal 15% more DMG against debuffed Enemies. Take 15% less DMG from debuffed Enemies",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_dusk_hybrid_1.png",
    season: "Season 1",
  },
  {
    id: 408,
    tokenId: 0,
    itemId: "rune_dusk_3010_s2",
    name: "Malediction",
    class: "Dusk",
    isBlockchain: 0,
    rarity: "Epic",
    effect:
      "{Solo}. This Axie deals 15% bonus DMG against Debuffed enemies, and take 15% less DMG from Debuffed enemies.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_dusk_hybrid_1.png",
    season: "Season 2",
  },
  {
    id: 449,
    tokenId: 0,
    itemId: "rune_dusk_3010_s2_nondec",
    name: "Malediction",
    class: "Dusk",
    isBlockchain: 0,
    rarity: "Epic",
    effect:
      "{Solo}. This Axie deals 15% bonus DMG against Debuffed enemies, and take 15% less DMG from Debuffed enemies.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_dusk_hybrid_1.png",
    season: "Season 2",
  },
  {
    id: 600,
    tokenId: 0,
    itemId: "rune_dusk_3011_s3",
    name: "Malediction",
    class: "Dusk",
    isBlockchain: 0,
    rarity: "Epic",
    effect:
      "{Solo}. This Axie deals 15% bonus DMG against Debuffed enemies, and take 15% less DMG from Debuffed enemies.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_dusk_hybrid_1.png",
    season: "Season 3",
  },
  {
    id: 667,
    tokenId: 0,
    itemId: "rune_dusk_3011_s3_nondec",
    name: "Malediction",
    class: "Dusk",
    isBlockchain: 0,
    rarity: "Epic",
    effect:
      "{Solo}. This Axie deals 15% bonus DMG against Debuffed enemies, and take 15% less DMG from Debuffed enemies.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_dusk_hybrid_1.png",
    season: "Season 3",
  },
  {
    id: 844,
    tokenId: 0,
    itemId: "rune_dusk_3011_s4",
    name: "Malediction",
    class: "Dusk",
    isBlockchain: 0,
    rarity: "Epic",
    effect:
      "{Solo}. This Axie deals 15% bonus DMG against Debuffed enemies, and take 15% less DMG from Debuffed enemies.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_dusk_hybrid_1.png",
    season: "Season 4",
  },
  {
    id: 916,
    tokenId: 0,
    itemId: "rune_dusk_3011_s4_nondec",
    name: "Malediction",
    class: "Dusk",
    isBlockchain: 0,
    rarity: "Epic",
    effect:
      "{Solo}. This Axie deals 15% bonus DMG against Debuffed enemies, and take 15% less DMG from Debuffed enemies.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_dusk_hybrid_1.png",
    season: "Season 4",
  },
  {
    id: 494,
    tokenId: 0,
    itemId: "rune_dusk_3010_s1",
    name: "Malediction (S1.5)",
    class: "Dusk",
    isBlockchain: 0,
    rarity: "Epic",
    effect:
      "{Solo}. This Axie deals 15% bonus DMG against Debuffed enemies, and take 15% less DMG from Debuffed enemies.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_dusk_hybrid_1.png",
    season: "Season 1",
  },
  {
    id: 370,
    tokenId: 0,
    itemId: "rune_dusk_3011_s2",
    name: "Moonlight Thief",
    class: "Dusk",
    isBlockchain: 0,
    rarity: "Epic",
    effect:
      "{Solo}. When your turn starts, if you have less <Energy Fragment> or <Energy Burst> Level than your opponent, steal 1 Fragment. When your turn ends, this Axie heals HP = 4 times your Fragments.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_moonlight_thief.png",
    season: "Season 2",
  },
  {
    id: 428,
    tokenId: 0,
    itemId: "rune_dusk_3011_s2_nondec",
    name: "Moonlight Thief",
    class: "Dusk",
    isBlockchain: 0,
    rarity: "Epic",
    effect:
      "{Solo}. When your turn starts, if you have less <Energy Fragment> or <Energy Burst> Level than your opponent, steal 1 Fragment. When your turn ends, this Axie heals HP = 4 times your Fragments.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_moonlight_thief.png",
    season: "Season 2",
  },
  {
    id: 578,
    tokenId: 0,
    itemId: "rune_dusk_3012_s3",
    name: "Moonlight Thief",
    class: "Dusk",
    isBlockchain: 0,
    rarity: "Epic",
    effect:
      "{Solo}. When your turn starts, if you have less <Energy Fragment> or <Energy Burst> Level than your opponent, steal 1 Fragment. When your turn ends, this Axie heals HP = 4 times your Fragments.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_moonlight_thief.png",
    season: "Season 3",
  },
  {
    id: 713,
    tokenId: 0,
    itemId: "rune_dusk_3012_s3_nondec",
    name: "Moonlight Thief",
    class: "Dusk",
    isBlockchain: 0,
    rarity: "Epic",
    effect:
      "{Solo}. When your turn starts, if you have less <Energy Fragment> or <Energy Burst> Level than your opponent, steal 1 Fragment. When your turn ends, this Axie heals HP = 4 times your Fragments.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_moonlight_thief.png",
    season: "Season 3",
  },
  {
    id: 813,
    tokenId: 0,
    itemId: "rune_dusk_3012_s4_nondec",
    name: "Moonlight Thief",
    class: "Dusk",
    isBlockchain: 0,
    rarity: "Epic",
    effect:
      "{Solo}. When your turn starts, if you have less <Energy Fragment> or <Energy Burst> Level than your opponent, steal 1 Fragment. When your turn ends, this Axie heals HP = 4 times your Fragments.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_moonlight_thief.png",
    season: "Season 4",
  },
  {
    id: 898,
    tokenId: 0,
    itemId: "rune_dusk_3012_s4",
    name: "Moonlight Thief",
    class: "Dusk",
    isBlockchain: 0,
    rarity: "Epic",
    effect:
      "{Solo}. When your turn starts, if you have less <Energy Fragment> or <Energy Burst> Level than your opponent, steal 1 Fragment. When your turn ends, this Axie heals HP = 4 times your Fragments.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_moonlight_thief.png",
    season: "Season 4",
  },
  {
    id: 373,
    tokenId: 0,
    itemId: "rune_dusk_3011_s1",
    name: "Moonlight Thief (S1.5)",
    class: "Dusk",
    isBlockchain: 0,
    rarity: "Epic",
    effect:
      "{Solo}. When your turn starts, steal 1 <Energy Fragment>. When your turn ends, this Axie heals HP = 3 times your current <Energy Fragment>.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_moonlight_thief.png",
    season: "Season 1",
  },
  {
    id: 533,
    tokenId: 0,
    itemId: "rune_dusk_3010_s3",
    name: "Wicked Ward",
    class: "Dusk",
    isBlockchain: 0,
    rarity: "Epic",
    effect:
      "{Solo} Whenever an ally plays a Card that applies Curse, all allied Axies gain 12 Shield.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_dusk_defensive_1.png",
    season: "Season 3",
  },
  {
    id: 733,
    tokenId: 0,
    itemId: "rune_dusk_3010_s3_nondec",
    name: "Wicked Ward",
    class: "Dusk",
    isBlockchain: 0,
    rarity: "Epic",
    effect:
      "{Solo} Whenever an ally plays a Card that applies Curse, all allied Axies gain 12 Shield.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_dusk_defensive_1.png",
    season: "Season 3",
  },
  {
    id: 779,
    tokenId: 0,
    itemId: "rune_dusk_3010_s4_nondec",
    name: "Wicked Ward",
    class: "Dusk",
    isBlockchain: 0,
    rarity: "Epic",
    effect:
      "{Solo} Whenever an ally plays a Card that applies Curse, all allied Axies gain 12 Shield.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_dusk_defensive_1.png",
    season: "Season 4",
  },
  {
    id: 929,
    tokenId: 0,
    itemId: "rune_dusk_3010_s4",
    name: "Wicked Ward",
    class: "Dusk",
    isBlockchain: 0,
    rarity: "Epic",
    effect:
      "{Solo} Whenever an ally plays a Card that applies Curse, all allied Axies gain 12 Shield.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_dusk_defensive_1.png",
    season: "Season 4",
  },
  {
    id: 595,
    tokenId: 0,
    itemId: "rune_dusk_4010_s3",
    name: "Gloomy Dice",
    class: "Dusk",
    isBlockchain: 0,
    rarity: "Mystic",
    effect:
      "{Solo}. At the starts of your turn on Odd <Round>, randomly apply {Hex} or {Fear} to all enemy Axies for 3 turns.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_dusk_utility_1.png",
    season: "Season 3",
  },
  {
    id: 710,
    tokenId: 0,
    itemId: "rune_dusk_4010_s3_nondec",
    name: "Gloomy Dice",
    class: "Dusk",
    isBlockchain: 0,
    rarity: "Mystic",
    effect:
      "{Solo}. At the starts of your turn on Odd <Round>, randomly apply {Hex} or {Fear} to all enemy Axies for 3 turns.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_dusk_utility_1.png",
    season: "Season 3",
  },
  {
    id: 869,
    tokenId: 0,
    itemId: "rune_dusk_4010_s4_nondec",
    name: "Gloomy Dice",
    class: "Dusk",
    isBlockchain: 0,
    rarity: "Mystic",
    effect:
      "{Solo}. At the starts of your turn on Odd <Round>, randomly apply {Hex} or {Fear} to all enemy Axies for 3 turns.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_dusk_utility_1.png",
    season: "Season 4",
  },
  {
    id: 906,
    tokenId: 0,
    itemId: "rune_dusk_4010_s4",
    name: "Gloomy Dice",
    class: "Dusk",
    isBlockchain: 0,
    rarity: "Mystic",
    effect:
      "{Solo}. At the starts of your turn on Odd <Round>, randomly apply {Hex} or {Fear} to all enemy Axies for 3 turns.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_dusk_utility_1.png",
    season: "Season 4",
  },
  {
    id: 38,
    tokenId: 0,
    itemId: "rune_dusk_4001_s0",
    name: "Gloomy Dice",
    class: "Dusk",
    isBlockchain: 0,
    rarity: "Mystic",
    effect:
      "{Solo}. In Odd <Round>s, randomly apply {Hex} or {Fear} to all enemies for 2 turns at the start of your turn.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_dusk_utility_1.png",
    season: "Season 0",
  },
  {
    id: 46,
    tokenId: 0,
    itemId: "rune_dusk_utility_1",
    name: "Gloomy Dice",
    class: "Dusk",
    isBlockchain: 0,
    rarity: "Mystic",
    effect:
      "{Solo}. In Odd <Round>s, randomly apply {Hex} or {Fear} to all enemies for 2 turns at the start of your turn.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_dusk_utility_1.png",
    season: "Season Alpha",
  },
  {
    id: 185,
    tokenId: 0,
    itemId: "rune_dusk_4001_s1",
    name: "Gloomy Dice",
    class: "Dusk",
    isBlockchain: 0,
    rarity: "Mystic",
    effect:
      "{Solo}. In Odd <Round>s, randomly apply {Hex} or {Fear} to all enemies for 3 turns at the start of your turn.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_dusk_utility_1.png",
    season: "Season 1",
  },
  {
    id: 293,
    tokenId: 0,
    itemId: "rune_dusk_4010_s2_nondec",
    name: "Gloomy Dice",
    class: "Dusk",
    isBlockchain: 0,
    rarity: "Mystic",
    effect:
      "{Solo}. At the starts of your turn in Odd <Round>, randomly apply {Hex} or {Fear} to all enemy Axies for 3 turns.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_dusk_utility_1.png",
    season: "Season 2",
  },
  {
    id: 316,
    tokenId: 0,
    itemId: "rune_dusk_4010_s2",
    name: "Gloomy Dice",
    class: "Dusk",
    isBlockchain: 0,
    rarity: "Mystic",
    effect:
      "{Solo}. At the starts of your turn in Odd <Round>, randomly apply {Hex} or {Fear} to all enemy Axies for 3 turns.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_dusk_utility_1.png",
    season: "Season 2",
  },
  {
    id: 475,
    tokenId: 0,
    itemId: "rune_dusk_4010_s1",
    name: "Gloomy Dice (S1.5)",
    class: "Dusk",
    isBlockchain: 0,
    rarity: "Mystic",
    effect:
      "{Solo}. At the starts of your turn in Odd <Round>, randomly apply {Hex} or {Fear} to all enemy Axies for 3 turns.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_dusk_utility_1.png",
    season: "Season 1",
  },
  {
    id: 549,
    tokenId: 0,
    itemId: "rune_dusk_4011_s3",
    name: "Soul Eater",
    class: "Dusk",
    isBlockchain: 0,
    rarity: "Mystic",
    effect:
      "{Solo}. When played, this Axie's abilities consume 66 HP from the lowest HP ally then gain 6% base stat.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_soul_eater.png",
    season: "Season 3",
  },
  {
    id: 712,
    tokenId: 0,
    itemId: "rune_dusk_4011_s3_nondec",
    name: "Soul Eater",
    class: "Dusk",
    isBlockchain: 0,
    rarity: "Mystic",
    effect:
      "{Solo}. When played, this Axie's abilities consume 66 HP from the lowest HP ally then gain 6% base stat.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_soul_eater.png",
    season: "Season 3",
  },
  {
    id: 760,
    tokenId: 0,
    itemId: "rune_dusk_4011_s4_nondec",
    name: "Soul Eater",
    class: "Dusk",
    isBlockchain: 0,
    rarity: "Mystic",
    effect:
      "{Solo}. When your turn starts, consume 66 HP from the lowest HP ally and increases base stat of all allied Axies' cards by 6%.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_soul_eater.png",
    season: "Season 4",
  },
  {
    id: 924,
    tokenId: 0,
    itemId: "rune_dusk_4011_s4",
    name: "Soul Eater",
    class: "Dusk",
    isBlockchain: 0,
    rarity: "Mystic",
    effect:
      "{Solo}. When your turn starts, consume 66 HP from the lowest HP ally and increases base stat of all allied Axies' cards by 6%.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_soul_eater.png",
    season: "Season 4",
  },
  {
    id: 630,
    tokenId: 0,
    itemId: "rune_dusk_2011_s3_nondec",
    name: "Cursed Ritual",
    class: "Dusk",
    isBlockchain: 0,
    rarity: "Rare",
    effect:
      "When your turn ends, the closest enemy Axie takes 5 DMG per Cursed card in your opponent's Deck (capped at 25 DMG).",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_dusk_offensive_1.png",
    season: "Season 3",
  },
  {
    id: 772,
    tokenId: 0,
    itemId: "rune_dusk_2011_s4_nondec",
    name: "Cursed Ritual",
    class: "Dusk",
    isBlockchain: 0,
    rarity: "Rare",
    effect:
      "When your turn ends, the closest enemy Axie takes 5 DMG per Cursed card in your opponent's Deck (capped at 25 DMG).",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_dusk_offensive_1.png",
    season: "Season 4",
  },
  {
    id: 887,
    tokenId: 0,
    itemId: "rune_dusk_2011_s4",
    name: "Cursed Ritual",
    class: "Dusk",
    isBlockchain: 0,
    rarity: "Rare",
    effect:
      "When your turn ends, the closest enemy Axie takes 5 DMG per Cursed card in your opponent's Deck (capped at 25 DMG).",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_dusk_offensive_1.png",
    season: "Season 4",
  },
  {
    id: 60,
    tokenId: 0,
    itemId: "rune_dusk_offensive_1",
    name: "Cursed Ritual",
    class: "Dusk",
    isBlockchain: 0,
    rarity: "Rare",
    effect:
      "Attacks deal 5 bonus DMG per Curse card in your deck (capped at 15 DMG).",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_dusk_offensive_1.png",
    season: "Season Alpha",
  },
  {
    id: 102,
    tokenId: 0,
    itemId: "rune_dusk_2002_s0",
    name: "Cursed Ritual",
    class: "Dusk",
    isBlockchain: 0,
    rarity: "Rare",
    effect:
      "This Axie attacks deal bonus DMG per Curse card in your deck.\nSingle attacks deal 5 bonus DMG per card (cap at 15 DMG).\nAoE and Multihit attack deal 2 bonus DMG per card (cap at 6 DMG).",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_dusk_offensive_1.png",
    season: "Season 0",
  },
  {
    id: 146,
    tokenId: 0,
    itemId: "rune_dusk_2002_s1",
    name: "Cursed Ritual",
    class: "Dusk",
    isBlockchain: 0,
    rarity: "Rare",
    effect:
      "Opponent's frontline Axie takes 3 DMG per Cursed card in their Deck when your turn ends (capped at 30 DMG).",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_dusk_offensive_1.png",
    season: "Season 1",
  },
  {
    id: 387,
    tokenId: 0,
    itemId: "rune_dusk_2012_s2_nondec",
    name: "Cursed Ritual",
    class: "Dusk",
    isBlockchain: 0,
    rarity: "Rare",
    effect:
      "When your turn ends, the closest enemy Axie takes 3 DMG per Cursed card in your opponent's Deck (capped at 30 DMG).",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_dusk_offensive_1.png",
    season: "Season 2",
  },
  {
    id: 404,
    tokenId: 0,
    itemId: "rune_dusk_2012_s2",
    name: "Cursed Ritual",
    class: "Dusk",
    isBlockchain: 0,
    rarity: "Rare",
    effect:
      "When your turn ends, the closest enemy Axie takes 3 DMG per Cursed card in your opponent's Deck (capped at 30 DMG).",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_dusk_offensive_1.png",
    season: "Season 2",
  },
  {
    id: 540,
    tokenId: 0,
    itemId: "rune_dusk_2011_s3",
    name: "Cursed Ritual",
    class: "Dusk",
    isBlockchain: 0,
    rarity: "Rare",
    effect:
      "When your turn ends, the closest enemy Axie takes 5 DMG per Cursed card in your opponent's Deck (capped at 25 DMG).",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_dusk_offensive_1.png",
    season: "Season 3",
  },
  {
    id: 384,
    tokenId: 0,
    itemId: "rune_dusk_2012_s1",
    name: "Cursed Ritual (S1.5)",
    class: "Dusk",
    isBlockchain: 0,
    rarity: "Rare",
    effect:
      "When your turn ends, the closest enemy Axie takes 3 DMG per Cursed card in your opponent's Deck (capped at 30 DMG).",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_dusk_offensive_1.png",
    season: "Season 1",
  },
  {
    id: 439,
    tokenId: 0,
    itemId: "rune_dusk_2010_s2_nondec",
    name: "Dark Flame",
    class: "Dusk",
    isBlockchain: 0,
    rarity: "Rare",
    effect:
      "Before the battle starts, add 1 [Purge] to your Deck. This Axie's cards gain 5% bonus stat for the rest of the battle.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_dark_flame.png",
    season: "Season 2",
  },
  {
    id: 497,
    tokenId: 0,
    itemId: "rune_dusk_2010_s2",
    name: "Dark Flame",
    class: "Dusk",
    isBlockchain: 0,
    rarity: "Rare",
    effect:
      "Before the battle starts, add 1 [Purge] to your Deck. This Axie's cards gain 5% bonus stat for the rest of the battle.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_dark_flame.png",
    season: "Season 2",
  },
  {
    id: 538,
    tokenId: 0,
    itemId: "rune_dusk_2010_s3",
    name: "Dark Flame",
    class: "Dusk",
    isBlockchain: 0,
    rarity: "Rare",
    effect:
      "Before the battle starts, add 1 [Purge] to your Deck. This Axie's cards gain 10% bonus stat for the rest of the battle.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_dark_flame.png",
    season: "Season 3",
  },
  {
    id: 663,
    tokenId: 0,
    itemId: "rune_dusk_2010_s3_nondec",
    name: "Dark Flame",
    class: "Dusk",
    isBlockchain: 0,
    rarity: "Rare",
    effect:
      "Before the battle starts, add 1 [Purge] to your Deck. This Axie's cards gain 10% bonus stat for the rest of the battle.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_dark_flame.png",
    season: "Season 3",
  },
  {
    id: 749,
    tokenId: 0,
    itemId: "rune_dusk_2010_s4_nondec",
    name: "Dark Flame",
    class: "Dusk",
    isBlockchain: 0,
    rarity: "Rare",
    effect:
      "Before the battle starts, add 1 [Purge] to your Deck. This Axie's cards gain 10% bonus stat for the rest of the battle.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_dark_flame.png",
    season: "Season 4",
  },
  {
    id: 774,
    tokenId: 0,
    itemId: "rune_dusk_2010_s4",
    name: "Dark Flame",
    class: "Dusk",
    isBlockchain: 0,
    rarity: "Rare",
    effect:
      "Before the battle starts, add 1 [Purge] to your Deck. This Axie's cards gain 10% bonus stat for the rest of the battle.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_dark_flame.png",
    season: "Season 4",
  },
  {
    id: 398,
    tokenId: 0,
    itemId: "rune_dusk_2010_s1",
    name: "Dark Flame (S1.5)",
    class: "Dusk",
    isBlockchain: 0,
    rarity: "Rare",
    effect:
      "Before the battle starts, add 1 [Purge] to your Deck. This Axie's cards gain 5% bonus stat for the rest of the battle.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_dark_flame.png",
    season: "Season 1",
  },
  {
    id: 75,
    tokenId: 0,
    itemId: "rune_dusk_defensive_1",
    name: "Wicked Ward",
    class: "Dusk",
    isBlockchain: 0,
    rarity: "Rare",
    effect: "Gain 15 Shield whenever you play a card that apply Curse.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_dusk_defensive_1.png",
    season: "Season Alpha",
  },
  {
    id: 76,
    tokenId: 0,
    itemId: "rune_dusk_2001_s0",
    name: "Wicked Ward",
    class: "Dusk",
    isBlockchain: 0,
    rarity: "Rare",
    effect: "Gain 15 Shield whenever you play a card that apply Curse.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_dusk_defensive_1.png",
    season: "Season 0",
  },
  {
    id: 152,
    tokenId: 0,
    itemId: "rune_dusk_2001_s1",
    name: "Wicked Ward",
    class: "Dusk",
    isBlockchain: 0,
    rarity: "Rare",
    effect:
      "All teammates gains 10 Shield whenever this Axie play a Card that apply Curse.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_dusk_defensive_1.png",
    season: "Season 1",
  },
  {
    id: 279,
    tokenId: 0,
    itemId: "rune_dusk_2011_s2",
    name: "Wicked Ward",
    class: "Dusk",
    isBlockchain: 0,
    rarity: "Rare",
    effect:
      "Whenever this Axie play a Card that apply Curse, all allied Axies gain 10 Shield.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_dusk_defensive_1.png",
    season: "Season 2",
  },
  {
    id: 420,
    tokenId: 0,
    itemId: "rune_dusk_2011_s2_nondec",
    name: "Wicked Ward",
    class: "Dusk",
    isBlockchain: 0,
    rarity: "Rare",
    effect:
      "Whenever this Axie play a Card that apply Curse, all allied Axies gain 10 Shield.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_dusk_defensive_1.png",
    season: "Season 2",
  },
  {
    id: 464,
    tokenId: 0,
    itemId: "rune_dusk_2011_s1",
    name: "Wicked Ward (S1.5)",
    class: "Dusk",
    isBlockchain: 0,
    rarity: "Rare",
    effect:
      "Whenever this Axie play a Card that apply Curse, all allied Axies gain 10 Shield.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_dusk_defensive_1.png",
    season: "Season 1",
  },
  {
    id: 29,
    tokenId: 0,
    itemId: "rune_mech_3001_s0",
    name: "Adaptive Program",
    class: "Mech",
    isBlockchain: 0,
    rarity: "Epic",
    effect:
      "Gain 10 bonus Shield from cards. Gain 3 {Damage Boost} whenever using a Shield card.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_mech_hybrid_1.png",
    season: "Season 0",
  },
  {
    id: 41,
    tokenId: 0,
    itemId: "rune_mech_hybrid_1",
    name: "Adaptive Program",
    class: "Mech",
    isBlockchain: 0,
    rarity: "Epic",
    effect:
      "Gain 10 bonus Shield from cards. Gain 3 {Damage Boost} whenever using a Shield card.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_mech_hybrid_1.png",
    season: "Season Alpha",
  },
  {
    id: 182,
    tokenId: 0,
    itemId: "rune_mech_3001_s1",
    name: "Adaptive Program",
    class: "Mech",
    isBlockchain: 0,
    rarity: "Epic",
    effect:
      "{Solo}. Gain 25% bonus Shield from cards. If gained 99 and above Shield from a single card, you gain 2 <Energy Fragment>.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_mech_hybrid_1.png",
    season: "Season 1",
  },
  {
    id: 330,
    tokenId: 0,
    itemId: "rune_mech_3010_s2_nondec",
    name: "Adaptive Program",
    class: "Mech",
    isBlockchain: 0,
    rarity: "Epic",
    effect:
      "{Solo}. This Axie receives 25% bonus Shield from cards. Whenever it gains at least 99 Shield from a single card, gain 2 <Energy Fragment>.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_mech_hybrid_1.png",
    season: "Season 2",
  },
  {
    id: 526,
    tokenId: 0,
    itemId: "rune_mech_3010_s2",
    name: "Adaptive Program",
    class: "Mech",
    isBlockchain: 0,
    rarity: "Epic",
    effect:
      "{Solo}. This Axie receives 25% bonus Shield from cards. Whenever it gains at least 99 Shield from a single card, gain 2 <Energy Fragment>.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_mech_hybrid_1.png",
    season: "Season 2",
  },
  {
    id: 544,
    tokenId: 0,
    itemId: "rune_mech_3011_s3",
    name: "Adaptive Program",
    class: "Mech",
    isBlockchain: 0,
    rarity: "Epic",
    effect:
      "{Solo}. This Axie receives 25% bonus Shield from cards. Whenever it gains at least 99 Shield from a single card, gain 2 <Energy Fragment>.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_mech_hybrid_1.png",
    season: "Season 3",
  },
  {
    id: 647,
    tokenId: 0,
    itemId: "rune_mech_3011_s3_nondec",
    name: "Adaptive Program",
    class: "Mech",
    isBlockchain: 0,
    rarity: "Epic",
    effect:
      "{Solo}. This Axie receives 25% bonus Shield from cards. Whenever it gains at least 99 Shield from a single card, gain 2 <Energy Fragment>.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_mech_hybrid_1.png",
    season: "Season 3",
  },
  {
    id: 775,
    tokenId: 0,
    itemId: "rune_mech_3011_s4",
    name: "Adaptive Program",
    class: "Mech",
    isBlockchain: 0,
    rarity: "Epic",
    effect:
      "{Solo}. This Axie receives 25% bonus Shield from cards. Whenever it gains at least 99 Shield from a single card, gain 2 <Energy Fragment>.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_mech_hybrid_1.png",
    season: "Season 4",
  },
  {
    id: 931,
    tokenId: 0,
    itemId: "rune_mech_3011_s4_nondec",
    name: "Adaptive Program",
    class: "Mech",
    isBlockchain: 0,
    rarity: "Epic",
    effect:
      "{Solo}. This Axie receives 25% bonus Shield from cards. Whenever it gains at least 99 Shield from a single card, gain 2 <Energy Fragment>.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_mech_hybrid_1.png",
    season: "Season 4",
  },
  {
    id: 321,
    tokenId: 0,
    itemId: "rune_mech_3010_s1",
    name: "Adaptive Program (S1.5)",
    class: "Mech",
    isBlockchain: 0,
    rarity: "Epic",
    effect:
      "{Solo}. This Axie receives 25% bonus Shield from cards. Whenever it gains at least 99 Shield from a single card, gain 2 <Energy Fragment>.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_mech_hybrid_1.png",
    season: "Season 1",
  },
  {
    id: 448,
    tokenId: 0,
    itemId: "rune_mech_3011_s2",
    name: "Lens of Truth",
    class: "Mech",
    isBlockchain: 0,
    rarity: "Epic",
    effect:
      "{Solo}. This Axie's Attacks remove 1 Secret from their targets. It deals 15% bonus DMG against enemies with no Secret.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_lens_of_truth.png",
    season: "Season 2",
  },
  {
    id: 487,
    tokenId: 0,
    itemId: "rune_mech_3011_s2_nondec",
    name: "Lens of Truth",
    class: "Mech",
    isBlockchain: 0,
    rarity: "Epic",
    effect:
      "{Solo}. This Axie's Attacks remove 1 Secret from their targets. It deals 15% bonus DMG against enemies with no Secret.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_lens_of_truth.png",
    season: "Season 2",
  },
  {
    id: 592,
    tokenId: 0,
    itemId: "rune_mech_3012_s3",
    name: "Lens of Truth",
    class: "Mech",
    isBlockchain: 0,
    rarity: "Epic",
    effect:
      "{Solo}. This Axie's Attacks remove 1 Secret from their targets. It deals 20% bonus DMG against enemies with no Secret.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_lens_of_truth.png",
    season: "Season 3",
  },
  {
    id: 636,
    tokenId: 0,
    itemId: "rune_mech_3012_s3_nondec",
    name: "Lens of Truth",
    class: "Mech",
    isBlockchain: 0,
    rarity: "Epic",
    effect:
      "{Solo}. This Axie's Attacks remove 1 Secret from their targets. It deals 20% bonus DMG against enemies with no Secret.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_lens_of_truth.png",
    season: "Season 3",
  },
  {
    id: 776,
    tokenId: 0,
    itemId: "rune_mech_3012_s4",
    name: "Lens of Truth",
    class: "Mech",
    isBlockchain: 0,
    rarity: "Epic",
    effect:
      "{Solo}. This Axie's Attacks remove 1 Secret from their targets. It deals 20% bonus DMG against enemies with no Secret.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_lens_of_truth.png",
    season: "Season 4",
  },
  {
    id: 902,
    tokenId: 0,
    itemId: "rune_mech_3012_s4_nondec",
    name: "Lens of Truth",
    class: "Mech",
    isBlockchain: 0,
    rarity: "Epic",
    effect:
      "{Solo}. This Axie's Attacks remove 1 Secret from their targets. It deals 20% bonus DMG against enemies with no Secret.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_lens_of_truth.png",
    season: "Season 4",
  },
  {
    id: 368,
    tokenId: 0,
    itemId: "rune_mech_3011_s1",
    name: "Lens of Truth (S1.5)",
    class: "Mech",
    isBlockchain: 0,
    rarity: "Epic",
    effect:
      "{Solo}. This Axie's Attacks remove 1 Secret from their targets. It deals 15% bonus DMG against enemies with no Secret.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_lens_of_truth.png",
    season: "Season 1",
  },
  {
    id: 589,
    tokenId: 0,
    itemId: "rune_mech_3010_s3",
    name: "Zap Armor",
    class: "Mech",
    isBlockchain: 0,
    rarity: "Epic",
    effect:
      "{Solo}. This Axie deals 20% bonus DMG and take 20% less DMG when it's Shielded.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_mech_offensive_1.png",
    season: "Season 3",
  },
  {
    id: 623,
    tokenId: 0,
    itemId: "rune_mech_3010_s3_nondec",
    name: "Zap Armor",
    class: "Mech",
    isBlockchain: 0,
    rarity: "Epic",
    effect:
      "{Solo}. This Axie deals 20% bonus DMG and take 20% less DMG when it's Shielded.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_mech_offensive_1.png",
    season: "Season 3",
  },
  {
    id: 829,
    tokenId: 0,
    itemId: "rune_mech_3010_s4",
    name: "Zap Armor",
    class: "Mech",
    isBlockchain: 0,
    rarity: "Epic",
    effect:
      "{Solo}. This Axie deals 20% bonus DMG and take 20% less DMG when it's Shielded.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_mech_offensive_1.png",
    season: "Season 4",
  },
  {
    id: 845,
    tokenId: 0,
    itemId: "rune_mech_3010_s4_nondec",
    name: "Zap Armor",
    class: "Mech",
    isBlockchain: 0,
    rarity: "Epic",
    effect:
      "{Solo}. This Axie deals 20% bonus DMG and take 20% less DMG when it's Shielded.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_mech_offensive_1.png",
    season: "Season 4",
  },
  {
    id: 580,
    tokenId: 0,
    itemId: "rune_mech_4011_s3",
    name: "Last Stand",
    class: "Mech",
    isBlockchain: 0,
    rarity: "Mystic",
    effect:
      "{Solo}. Once per battle, if this Axie would die, it survives with 1 HP, cannot die, and its Abilities gain 50% bonus stats. At the end of the next turn, this Axie dies.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_mech_defensive_1.png",
    season: "Season 3",
  },
  {
    id: 659,
    tokenId: 0,
    itemId: "rune_mech_4011_s3_nondec",
    name: "Last Stand",
    class: "Mech",
    isBlockchain: 0,
    rarity: "Mystic",
    effect:
      "{Solo}. Once per battle, if this Axie would die, it survives with 1 HP, cannot die, and its Abilities gain 50% bonus stats. At the end of the next turn, this Axie dies.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_mech_defensive_1.png",
    season: "Season 3",
  },
  {
    id: 872,
    tokenId: 0,
    itemId: "rune_mech_4011_s4_nondec",
    name: "Last Stand",
    class: "Mech",
    isBlockchain: 0,
    rarity: "Mystic",
    effect:
      "{Solo}. Once per battle, if this Axie would die, it survives with 1 HP, cannot die, and its Abilities gain 50% bonus stats. At the end of the next turn, this Axie dies.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_mech_defensive_1.png",
    season: "Season 4",
  },
  {
    id: 889,
    tokenId: 0,
    itemId: "rune_mech_4011_s4",
    name: "Last Stand",
    class: "Mech",
    isBlockchain: 0,
    rarity: "Mystic",
    effect:
      "{Solo}. Once per battle, if this Axie would die, it survives with 1 HP, cannot die, and its Abilities gain 50% bonus stats. At the end of the next turn, this Axie dies.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_mech_defensive_1.png",
    season: "Season 4",
  },
  {
    id: 739,
    tokenId: 0,
    itemId: "rune_mech_4010_s3_nondec",
    name: "Shield Backup",
    class: "Mech",
    isBlockchain: 0,
    rarity: "Mystic",
    effect:
      "{Solo}. This Axie's Shield cards grant 20% bonus Shield. The Axie takes 20% less DMG if it has Shield, and retains 50% leftover Shield.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_mech_utility_1.png",
    season: "Season 3",
  },
  {
    id: 921,
    tokenId: 0,
    itemId: "rune_mech_4010_s4",
    name: "Shield Backup",
    class: "Mech",
    isBlockchain: 0,
    rarity: "Mystic",
    effect:
      "{Solo}. This Axie's Shield cards grant 20% bonus Shield. The Axie takes 20% less DMG if it has Shield, and retains 50% leftover Shield.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_mech_utility_1.png",
    season: "Season 4",
  },
  {
    id: 969,
    tokenId: 0,
    itemId: "rune_mech_4010_s4_nondec",
    name: "Shield Backup",
    class: "Mech",
    isBlockchain: 0,
    rarity: "Mystic",
    effect:
      "{Solo}. This Axie's Shield cards grant 20% bonus Shield. The Axie takes 20% less DMG if it has Shield, and retains 50% leftover Shield.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_mech_utility_1.png",
    season: "Season 4",
  },
  {
    id: 47,
    tokenId: 0,
    itemId: "rune_mech_4001_s0",
    name: "Shield Backup",
    class: "Mech",
    isBlockchain: 0,
    rarity: "Mystic",
    effect:
      "{Solo}. Increase Shield card's effect by 15%. This Axie's Shield isn't removed when your enemy's turn ends.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_mech_utility_1.png",
    season: "Season 0",
  },
  {
    id: 128,
    tokenId: 0,
    itemId: "rune_mech_utility_1",
    name: "Shield Backup",
    class: "Mech",
    isBlockchain: 0,
    rarity: "Mystic",
    effect:
      "{Solo}. This Axie's Shield isn't removed when your enemy's turn ends.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_mech_utility_1.png",
    season: "Season Alpha",
  },
  {
    id: 163,
    tokenId: 0,
    itemId: "rune_mech_4001_s1",
    name: "Shield Backup",
    class: "Mech",
    isBlockchain: 0,
    rarity: "Mystic",
    effect:
      "{Solo}. Increase Shield card's stat by 20%. Take 20% less DMG if has Shield. Retain 50%  leftover Shield.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_mech_utility_1.png",
    season: "Season 1",
  },
  {
    id: 306,
    tokenId: 0,
    itemId: "rune_mech_4010_s2_nondec",
    name: "Shield Backup",
    class: "Mech",
    isBlockchain: 0,
    rarity: "Mystic",
    effect:
      "{Solo}. This Axie's Shield cards grant 20% bonus Shield. The Axie takes 20% less DMG if it has Shield, and retains 50% leftover Shield.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_mech_utility_1.png",
    season: "Season 2",
  },
  {
    id: 479,
    tokenId: 0,
    itemId: "rune_mech_4010_s2",
    name: "Shield Backup",
    class: "Mech",
    isBlockchain: 0,
    rarity: "Mystic",
    effect:
      "{Solo}. This Axie's Shield cards grant 20% bonus Shield. The Axie takes 20% less DMG if it has Shield, and retains 50% leftover Shield.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_mech_utility_1.png",
    season: "Season 2",
  },
  {
    id: 547,
    tokenId: 0,
    itemId: "rune_mech_4010_s3",
    name: "Shield Backup",
    class: "Mech",
    isBlockchain: 0,
    rarity: "Mystic",
    effect:
      "{Solo}. This Axie's Shield cards grant 20% bonus Shield. The Axie takes 20% less DMG if it has Shield, and retains 50% leftover Shield.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_mech_utility_1.png",
    season: "Season 3",
  },
  {
    id: 282,
    tokenId: 0,
    itemId: "rune_mech_4010_s1",
    name: "Shield Backup (S1.5)",
    class: "Mech",
    isBlockchain: 0,
    rarity: "Mystic",
    effect:
      "{Solo}. This Axie's Shield cards grant 20% bonus Shield. The Axie takes 20% less DMG if it has Shield, and retains 50% leftover Shield.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_mech_utility_1.png",
    season: "Season 1",
  },
  {
    id: 2,
    tokenId: 0,
    itemId: "rune_mech_defensive_1",
    name: "Last Stand",
    class: "Mech",
    isBlockchain: 0,
    rarity: "Rare",
    effect:
      "When taking a fatal hit, survive with 1 HP until end of turn (active 1 time per battle). After that, apply an irremovable {Heal Block}.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_mech_defensive_1.png",
    season: "Season Alpha",
  },
  {
    id: 61,
    tokenId: 0,
    itemId: "rune_mech_2001_s0",
    name: "Last Stand",
    class: "Mech",
    isBlockchain: 0,
    rarity: "Rare",
    effect:
      "When taking a fatal hit, survive with 1 HP until end of turn (active 1 time per battle). After that, apply an irremovable {Heal Block}.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_mech_defensive_1.png",
    season: "Season 0",
  },
  {
    id: 176,
    tokenId: 0,
    itemId: "rune_mech_2001_s1",
    name: "Last Stand",
    class: "Mech",
    isBlockchain: 0,
    rarity: "Rare",
    effect:
      "When taking a fatal hit, survive with 1 HP until end of turn (active 1 time per battle). After that, apply an irremovable {Heal Block}.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_mech_defensive_1.png",
    season: "Season 1",
  },
  {
    id: 357,
    tokenId: 0,
    itemId: "rune_mech_2011_s2_nondec",
    name: "Steelskin",
    class: "Mech",
    isBlockchain: 0,
    rarity: "Rare",
    effect: "This Axie take 10 less DMG from Attacks.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_steelskin.png",
    season: "Season 2",
  },
  {
    id: 477,
    tokenId: 0,
    itemId: "rune_mech_2011_s2",
    name: "Steelskin",
    class: "Mech",
    isBlockchain: 0,
    rarity: "Rare",
    effect: "This Axie take 10 less DMG from Attacks.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_steelskin.png",
    season: "Season 2",
  },
  {
    id: 548,
    tokenId: 0,
    itemId: "rune_mech_2011_s3",
    name: "Steelskin",
    class: "Mech",
    isBlockchain: 0,
    rarity: "Rare",
    effect: "This Axie take 10 less DMG from Attacks.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_steelskin.png",
    season: "Season 3",
  },
  {
    id: 666,
    tokenId: 0,
    itemId: "rune_mech_2011_s3_nondec",
    name: "Steelskin",
    class: "Mech",
    isBlockchain: 0,
    rarity: "Rare",
    effect: "This Axie take 10 less DMG from Attacks.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_steelskin.png",
    season: "Season 3",
  },
  {
    id: 782,
    tokenId: 0,
    itemId: "rune_mech_2011_s4",
    name: "Steelskin",
    class: "Mech",
    isBlockchain: 0,
    rarity: "Rare",
    effect: "This Axie take 10 less DMG from Attacks.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_steelskin.png",
    season: "Season 4",
  },
  {
    id: 903,
    tokenId: 0,
    itemId: "rune_mech_2011_s4_nondec",
    name: "Steelskin",
    class: "Mech",
    isBlockchain: 0,
    rarity: "Rare",
    effect: "This Axie take 10 less DMG from Attacks.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_steelskin.png",
    season: "Season 4",
  },
  {
    id: 332,
    tokenId: 0,
    itemId: "rune_mech_2011_s1",
    name: "Steelskin (S1.5)",
    class: "Mech",
    isBlockchain: 0,
    rarity: "Rare",
    effect: "This Axie take 10 less DMG from Attacks.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_steelskin.png",
    season: "Season 1",
  },
  {
    id: 458,
    tokenId: 0,
    itemId: "rune_mech_2010_s2_nondec",
    name: "Trap Nullifier",
    class: "Mech",
    isBlockchain: 0,
    rarity: "Rare",
    effect:
      "Before the battle starts, add 1 [Detect] to your Deck. This Axie's cards gain 5% bonus stat for the rest of the battle.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_trap_nullifier.png",
    season: "Season 2",
  },
  {
    id: 520,
    tokenId: 0,
    itemId: "rune_mech_2010_s2",
    name: "Trap Nullifier",
    class: "Mech",
    isBlockchain: 0,
    rarity: "Rare",
    effect:
      "Before the battle starts, add 1 [Detect] to your Deck. This Axie's cards gain 5% bonus stat for the rest of the battle.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_trap_nullifier.png",
    season: "Season 2",
  },
  {
    id: 567,
    tokenId: 0,
    itemId: "rune_mech_2010_s3",
    name: "Trap Nullifier",
    class: "Mech",
    isBlockchain: 0,
    rarity: "Rare",
    effect:
      "Before the battle starts, add 1 [Detect] to your Deck. \nThis Axie's cards gain 10% bonus stat for the rest of the battle.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_trap_nullifier.png",
    season: "Season 3",
  },
  {
    id: 690,
    tokenId: 0,
    itemId: "rune_mech_2010_s3_nondec",
    name: "Trap Nullifier",
    class: "Mech",
    isBlockchain: 0,
    rarity: "Rare",
    effect:
      "Before the battle starts, add 1 [Detect] to your Deck. \nThis Axie's cards gain 10% bonus stat for the rest of the battle.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_trap_nullifier.png",
    season: "Season 3",
  },
  {
    id: 800,
    tokenId: 0,
    itemId: "rune_mech_2010_s4",
    name: "Trap Nullifier",
    class: "Mech",
    isBlockchain: 0,
    rarity: "Rare",
    effect:
      "Before the battle starts, add 1 [Detect] to your Deck. \nThis Axie's cards gain 10% bonus stat for the rest of the battle.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_trap_nullifier.png",
    season: "Season 4",
  },
  {
    id: 922,
    tokenId: 0,
    itemId: "rune_mech_2010_s4_nondec",
    name: "Trap Nullifier",
    class: "Mech",
    isBlockchain: 0,
    rarity: "Rare",
    effect:
      "Before the battle starts, add 1 [Detect] to your Deck. \nThis Axie's cards gain 10% bonus stat for the rest of the battle.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_trap_nullifier.png",
    season: "Season 4",
  },
  {
    id: 490,
    tokenId: 0,
    itemId: "rune_mech_2010_s1",
    name: "Trap Nullifier (S1.5)",
    class: "Mech",
    isBlockchain: 0,
    rarity: "Rare",
    effect:
      "Before the battle starts, add 1 [Detect] to your Deck. This Axie's cards gain 5% bonus stat for the rest of the battle.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_trap_nullifier.png",
    season: "Season 1",
  },
  {
    id: 34,
    tokenId: 0,
    itemId: "rune_mech_2002_s0",
    name: "Zap Armor",
    class: "Mech",
    isBlockchain: 0,
    rarity: "Rare",
    effect: "Deal 20% more DMG if this Axie has Shield.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_mech_offensive_1.png",
    season: "Season 0",
  },
  {
    id: 56,
    tokenId: 0,
    itemId: "rune_mech_offensive_1",
    name: "Zap Armor",
    class: "Mech",
    isBlockchain: 0,
    rarity: "Rare",
    effect: "Deal 20% more DMG if this Axie has Shield.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_mech_offensive_1.png",
    season: "Season Alpha",
  },
  {
    id: 187,
    tokenId: 0,
    itemId: "rune_mech_2002_s1",
    name: "Zap Armor",
    class: "Mech",
    isBlockchain: 0,
    rarity: "Rare",
    effect: "Deal 10% bonus DMG and take 20% less DMG if this Axie has Shield.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_mech_offensive_1.png",
    season: "Season 1",
  },
  {
    id: 410,
    tokenId: 0,
    itemId: "rune_mech_2012_s2_nondec",
    name: "Zap Armor",
    class: "Mech",
    isBlockchain: 0,
    rarity: "Rare",
    effect:
      "This Axie deals 10% bonus DMG and take 20% less DMG when it's Shielded.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_mech_offensive_1.png",
    season: "Season 2",
  },
  {
    id: 500,
    tokenId: 0,
    itemId: "rune_mech_2012_s2",
    name: "Zap Armor",
    class: "Mech",
    isBlockchain: 0,
    rarity: "Rare",
    effect:
      "This Axie deals 10% bonus DMG and take 20% less DMG when it's Shielded.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_mech_offensive_1.png",
    season: "Season 2",
  },
  {
    id: 443,
    tokenId: 0,
    itemId: "rune_mech_2012_s1",
    name: "Zap Armor (S1.5)",
    class: "Mech",
    isBlockchain: 0,
    rarity: "Rare",
    effect:
      "This Axie deals 10% bonus DMG and take 20% less DMG when it's Shielded.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_mech_offensive_1.png",
    season: "Season 1",
  },
  {
    id: 63,
    tokenId: 0,
    itemId: "rune_neutral_utility_1",
    name: "Leftover Potion",
    class: "Neutral",
    isBlockchain: 0,
    rarity: "Common",
    effect: "Recover 4% of max HP at the end of your turn.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_neutral_utility_1.png",
    season: null,
  },
  {
    id: 64,
    tokenId: 0,
    itemId: "rune_neutral_1001_s0",
    name: "Leftover Potion",
    class: "Neutral",
    isBlockchain: 0,
    rarity: "Common",
    effect: "Recover 4% of max HP at the end of your turn.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_neutral_utility_1.png",
    season: "Season 0",
  },
  {
    id: 194,
    tokenId: 0,
    itemId: "rune_neutral_1001_s1",
    name: "Leftover Potion",
    class: "Neutral",
    isBlockchain: 0,
    rarity: "Common",
    effect: "Heal HP = 3% max HP at the end of your turn.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_neutral_utility_1.png",
    season: "Season 1",
  },
  {
    id: 281,
    tokenId: 0,
    itemId: "rune_neutral_1010_s2_nondec",
    name: "Leftover Potion",
    class: "Neutral",
    isBlockchain: 0,
    rarity: "Common",
    effect: "When your turn ends, this Axie heals HP = 3% of its max HP.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_neutral_utility_1.png",
    season: "Season 2",
  },
  {
    id: 454,
    tokenId: 0,
    itemId: "rune_neutral_1010_s2",
    name: "Leftover Potion",
    class: "Neutral",
    isBlockchain: 0,
    rarity: "Common",
    effect: "When your turn ends, this Axie heals HP = 3% of its max HP.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_neutral_utility_1.png",
    season: "Season 2",
  },
  {
    id: 585,
    tokenId: 0,
    itemId: "rune_neutral_1010_s3",
    name: "Leftover Potion",
    class: "Neutral",
    isBlockchain: 0,
    rarity: "Common",
    effect: "When your turn ends, this Axie heals HP = 3% of its max HP.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_neutral_utility_1.png",
    season: "Season 3",
  },
  {
    id: 740,
    tokenId: 0,
    itemId: "rune_neutral_1010_s3_nondec",
    name: "Leftover Potion",
    class: "Neutral",
    isBlockchain: 0,
    rarity: "Common",
    effect: "When your turn ends, this Axie heals HP = 3% of its max HP.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_neutral_utility_1.png",
    season: "Season 3",
  },
  {
    id: 752,
    tokenId: 0,
    itemId: "rune_neutral_1010_s4",
    name: "Leftover Potion",
    class: "Neutral",
    isBlockchain: 0,
    rarity: "Common",
    effect: "When your turn ends, this Axie heals HP = 3% of its max HP.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_neutral_utility_1.png",
    season: "Season 4",
  },
  {
    id: 770,
    tokenId: 0,
    itemId: "rune_neutral_1010_s4_nondec",
    name: "Leftover Potion",
    class: "Neutral",
    isBlockchain: 0,
    rarity: "Common",
    effect: "When your turn ends, this Axie heals HP = 3% of its max HP.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_neutral_utility_1.png",
    season: "Season 4",
  },
  {
    id: 416,
    tokenId: 0,
    itemId: "rune_neutral_1010_s1",
    name: "Leftover Potion (S1.5)",
    class: "Neutral",
    isBlockchain: 0,
    rarity: "Common",
    effect: "When your turn ends, this Axie heals HP = 3% of its max HP.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_neutral_utility_1.png",
    season: "Season 1",
  },
  {
    id: 25,
    tokenId: 0,
    itemId: "rune_neutral_hybrid_1",
    name: "Mini Legion",
    class: "Neutral",
    isBlockchain: 0,
    rarity: "Common",
    effect: "This Axie's summoned units gain 8 bonus max HP.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_neutral_hybrid_1.png",
    season: null,
  },
  {
    id: 89,
    tokenId: 0,
    itemId: "rune_neutral_1004_s0",
    name: "Mini Legion",
    class: "Neutral",
    isBlockchain: 0,
    rarity: "Common",
    effect:
      "Deal 5 DMG per summon to all enemies at the beginning of your turn.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_neutral_hybrid_1.png",
    season: "Season 0",
  },
  {
    id: 139,
    tokenId: 0,
    itemId: "rune_neutral_1004_s1",
    name: "Mini Legion",
    class: "Neutral",
    isBlockchain: 0,
    rarity: "Common",
    effect: "This Axie's summoned units gain 8 bonus max HP.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_neutral_hybrid_1.png",
    season: "Season 1",
  },
  {
    id: 419,
    tokenId: 0,
    itemId: "rune_neutral_1013_s2_nondec",
    name: "Mini Legion",
    class: "Neutral",
    isBlockchain: 0,
    rarity: "Common",
    effect: "This Axie's Summoned Units gain 8 bonus max HP.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_neutral_hybrid_1.png",
    season: "Season 2",
  },
  {
    id: 516,
    tokenId: 0,
    itemId: "rune_neutral_1013_s2",
    name: "Mini Legion",
    class: "Neutral",
    isBlockchain: 0,
    rarity: "Common",
    effect: "This Axie's Summoned Units gain 8 bonus max HP.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_neutral_hybrid_1.png",
    season: "Season 2",
  },
  {
    id: 603,
    tokenId: 0,
    itemId: "rune_neutral_1013_s3",
    name: "Mini Legion",
    class: "Neutral",
    isBlockchain: 0,
    rarity: "Common",
    effect: "This Axie's Summoned Units gain 8 bonus max HP.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_neutral_hybrid_1.png",
    season: "Season 3",
  },
  {
    id: 634,
    tokenId: 0,
    itemId: "rune_neutral_1013_s3_nondec",
    name: "Mini Legion",
    class: "Neutral",
    isBlockchain: 0,
    rarity: "Common",
    effect: "This Axie's Summoned Units gain 8 bonus max HP.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_neutral_hybrid_1.png",
    season: "Season 3",
  },
  {
    id: 777,
    tokenId: 0,
    itemId: "rune_neutral_1013_s4_nondec",
    name: "Mini Legion",
    class: "Neutral",
    isBlockchain: 0,
    rarity: "Common",
    effect: "This Axie's Summoned Units gain 8 bonus max HP.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_neutral_hybrid_1.png",
    season: "Season 4",
  },
  {
    id: 785,
    tokenId: 0,
    itemId: "rune_neutral_1013_s4",
    name: "Mini Legion",
    class: "Neutral",
    isBlockchain: 0,
    rarity: "Common",
    effect: "This Axie's Summoned Units gain 8 bonus max HP.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_neutral_hybrid_1.png",
    season: "Season 4",
  },
  {
    id: 377,
    tokenId: 0,
    itemId: "rune_neutral_1013_s1",
    name: "Mini Legion (S1.5)",
    class: "Neutral",
    isBlockchain: 0,
    rarity: "Common",
    effect: "This Axie's Summoned Units gain 8 bonus max HP.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_neutral_hybrid_1.png",
    season: "Season 1",
  },
  {
    id: 9,
    tokenId: 0,
    itemId: "rune_neutral_defensive_1",
    name: "Thick Shield",
    class: "Neutral",
    isBlockchain: 0,
    rarity: "Common",
    effect: "This Axie receives 10% bonus Shield from cards.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_neutral_defensive_1.png",
    season: null,
  },
  {
    id: 85,
    tokenId: 0,
    itemId: "rune_neutral_1003_s0",
    name: "Thick Shield",
    class: "Neutral",
    isBlockchain: 0,
    rarity: "Common",
    effect: "Gain 10% bonus Shield from cards.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_neutral_defensive_1.png",
    season: "Season 0",
  },
  {
    id: 188,
    tokenId: 0,
    itemId: "rune_neutral_1003_s1",
    name: "Thick Shield",
    class: "Neutral",
    isBlockchain: 0,
    rarity: "Common",
    effect: "Gain 10% bonus Shield from cards.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_neutral_defensive_1.png",
    season: "Season 1",
  },
  {
    id: 429,
    tokenId: 0,
    itemId: "rune_neutral_1012_s2",
    name: "Thick Shield",
    class: "Neutral",
    isBlockchain: 0,
    rarity: "Common",
    effect: "This Axie receives 10% bonus Shield from cards.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_neutral_defensive_1.png",
    season: "Season 2",
  },
  {
    id: 452,
    tokenId: 0,
    itemId: "rune_neutral_1012_s2_nondec",
    name: "Thick Shield",
    class: "Neutral",
    isBlockchain: 0,
    rarity: "Common",
    effect: "This Axie receives 10% bonus Shield from cards.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_neutral_defensive_1.png",
    season: "Season 2",
  },
  {
    id: 566,
    tokenId: 0,
    itemId: "rune_neutral_1012_s3",
    name: "Thick Shield",
    class: "Neutral",
    isBlockchain: 0,
    rarity: "Common",
    effect: "This Axie receives 10% bonus Shield from cards.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_neutral_defensive_1.png",
    season: "Season 3",
  },
  {
    id: 706,
    tokenId: 0,
    itemId: "rune_neutral_1012_s3_nondec",
    name: "Thick Shield",
    class: "Neutral",
    isBlockchain: 0,
    rarity: "Common",
    effect: "This Axie receives 10% bonus Shield from cards.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_neutral_defensive_1.png",
    season: "Season 3",
  },
  {
    id: 766,
    tokenId: 0,
    itemId: "rune_neutral_1012_s4_nondec",
    name: "Thick Shield",
    class: "Neutral",
    isBlockchain: 0,
    rarity: "Common",
    effect: "This Axie receives 10% bonus Shield from cards.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_neutral_defensive_1.png",
    season: "Season 4",
  },
  {
    id: 792,
    tokenId: 0,
    itemId: "rune_neutral_1012_s4",
    name: "Thick Shield",
    class: "Neutral",
    isBlockchain: 0,
    rarity: "Common",
    effect: "This Axie receives 10% bonus Shield from cards.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_neutral_defensive_1.png",
    season: "Season 4",
  },
  {
    id: 341,
    tokenId: 0,
    itemId: "rune_neutral_1012_s1",
    name: "Thick Shield (S1.5)",
    class: "Neutral",
    isBlockchain: 0,
    rarity: "Common",
    effect: "This Axie receives 10% bonus Shield from cards.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_neutral_defensive_1.png",
    season: "Season 1",
  },
  {
    id: 107,
    tokenId: 0,
    itemId: "rune_neutral_1002_s0",
    name: "Tough Strike",
    class: "Neutral",
    isBlockchain: 0,
    rarity: "Common",
    effect: "Non Multihit Attack cards deal 10% bonus DMG.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_neutral_offensive_1.png",
    season: "Season 0",
  },
  {
    id: 127,
    tokenId: 0,
    itemId: "rune_neutral_offensive_1",
    name: "Tough Strike",
    class: "Neutral",
    isBlockchain: 0,
    rarity: "Common",
    effect: "Attack cards deal 10% bonus DMG.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_neutral_offensive_1.png",
    season: null,
  },
  {
    id: 193,
    tokenId: 0,
    itemId: "rune_neutral_1002_s1",
    name: "Tough Strike",
    class: "Neutral",
    isBlockchain: 0,
    rarity: "Common",
    effect: "Single and <AoE> Attack cards deal 10% bonus DMG.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_neutral_offensive_1.png",
    season: "Season 1",
  },
  {
    id: 278,
    tokenId: 0,
    itemId: "rune_neutral_1011_s2_nondec",
    name: "Tough Strike",
    class: "Neutral",
    isBlockchain: 0,
    rarity: "Common",
    effect: "This Axie's Attacks deal 10% bonus DMG.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_neutral_offensive_1.png",
    season: "Season 2",
  },
  {
    id: 318,
    tokenId: 0,
    itemId: "rune_neutral_1011_s2",
    name: "Tough Strike",
    class: "Neutral",
    isBlockchain: 0,
    rarity: "Common",
    effect: "This Axie's Attacks deal 10% bonus DMG.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_neutral_offensive_1.png",
    season: "Season 2",
  },
  {
    id: 584,
    tokenId: 0,
    itemId: "rune_neutral_1011_s3",
    name: "Tough Strike",
    class: "Neutral",
    isBlockchain: 0,
    rarity: "Common",
    effect: "This Axie's Attacks deal 10% bonus DMG.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_neutral_offensive_1.png",
    season: "Season 3",
  },
  {
    id: 722,
    tokenId: 0,
    itemId: "rune_neutral_1011_s3_nondec",
    name: "Tough Strike",
    class: "Neutral",
    isBlockchain: 0,
    rarity: "Common",
    effect: "This Axie's Attacks deal 10% bonus DMG.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_neutral_offensive_1.png",
    season: "Season 3",
  },
  {
    id: 857,
    tokenId: 0,
    itemId: "rune_neutral_1011_s4",
    name: "Tough Strike",
    class: "Neutral",
    isBlockchain: 0,
    rarity: "Common",
    effect: "This Axie's Attacks deal 10% bonus DMG.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_neutral_offensive_1.png",
    season: "Season 4",
  },
  {
    id: 867,
    tokenId: 0,
    itemId: "rune_neutral_1011_s4_nondec",
    name: "Tough Strike",
    class: "Neutral",
    isBlockchain: 0,
    rarity: "Common",
    effect: "This Axie's Attacks deal 10% bonus DMG.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_neutral_offensive_1.png",
    season: "Season 4",
  },
  {
    id: 374,
    tokenId: 0,
    itemId: "rune_neutral_1011_s1",
    name: "Tough Strike (S1.5)",
    class: "Neutral",
    isBlockchain: 0,
    rarity: "Common",
    effect: "This Axie's Attacks deal 10% bonus DMG.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_neutral_offensive_1.png",
    season: "Season 1",
  },
  {
    id: 546,
    tokenId: 0,
    itemId: "rune_neutral_3011_s3",
    name: "Energy Shard",
    class: "Neutral",
    isBlockchain: 0,
    rarity: "Epic",
    effect:
      "{Solo}. When the battle starts, gain 1 <Energy Fragment> per unique Axie Class in your team.\nWhenever you create an <Energy Burst>, all allied Axies heal 40 HP.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_energy_shard.png",
    season: "Season 3",
  },
  {
    id: 696,
    tokenId: 0,
    itemId: "rune_neutral_3011_s3_nondec",
    name: "Energy Shard",
    class: "Neutral",
    isBlockchain: 0,
    rarity: "Epic",
    effect:
      "{Solo}. When the battle starts, gain 1 <Energy Fragment> per unique Axie Class in your team.\nWhenever you create an <Energy Burst>, all allied Axies heal 40 HP.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_energy_shard.png",
    season: "Season 3",
  },
  {
    id: 824,
    tokenId: 0,
    itemId: "rune_neutral_3011_s4_nondec",
    name: "Energy Shard",
    class: "Neutral",
    isBlockchain: 0,
    rarity: "Epic",
    effect:
      "{Solo}. When the battle starts, gain 1 <Energy Fragment> per unique Axie Class in your team.\nWhenever you create an <Energy Burst>, all allied Axies heal 40 HP.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_energy_shard.png",
    season: "Season 4",
  },
  {
    id: 834,
    tokenId: 0,
    itemId: "rune_neutral_3011_s4",
    name: "Energy Shard",
    class: "Neutral",
    isBlockchain: 0,
    rarity: "Epic",
    effect:
      "{Solo}. When the battle starts, gain 1 <Energy Fragment> per unique Axie Class in your team.\nWhenever you create an <Energy Burst>, all allied Axies heal 40 HP.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_energy_shard.png",
    season: "Season 4",
  },
  {
    id: 588,
    tokenId: 0,
    itemId: "rune_neutral_3012_s3",
    name: "Last Wish",
    class: "Neutral",
    isBlockchain: 0,
    rarity: "Epic",
    effect:
      "{Solo}. This Axie gains 40 bonus max HP. When it dies, Shields other allies and deals DMG to all enemies an amount = 10% of its max HP.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_last_wish.png",
    season: "Season 3",
  },
  {
    id: 638,
    tokenId: 0,
    itemId: "rune_neutral_3012_s3_nondec",
    name: "Last Wish",
    class: "Neutral",
    isBlockchain: 0,
    rarity: "Epic",
    effect:
      "{Solo}. This Axie gains 40 bonus max HP. When it dies, Shields other allies and deals DMG to all enemies an amount = 10% of its max HP.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_last_wish.png",
    season: "Season 3",
  },
  {
    id: 751,
    tokenId: 0,
    itemId: "rune_neutral_3012_s4_nondec",
    name: "Last Wish",
    class: "Neutral",
    isBlockchain: 0,
    rarity: "Epic",
    effect:
      "{Solo}. This Axie gains 40 bonus max HP. When it dies, Shields other allies and deals DMG to all enemies an amount = 10% of its max HP.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_last_wish.png",
    season: "Season 4",
  },
  {
    id: 904,
    tokenId: 0,
    itemId: "rune_neutral_3012_s4",
    name: "Last Wish",
    class: "Neutral",
    isBlockchain: 0,
    rarity: "Epic",
    effect:
      "{Solo}. This Axie gains 40 bonus max HP. When it dies, Shields other allies and deals DMG to all enemies an amount = 10% of its max HP.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_last_wish.png",
    season: "Season 4",
  },
  {
    id: 343,
    tokenId: 0,
    itemId: "rune_neutral_3011_s2_nondec",
    name: "Last Wish",
    class: "Neutral",
    isBlockchain: 0,
    rarity: "Epic",
    effect:
      "{Solo}. This Axie gains 40 bonus max HP. When it dies, Shields other allies and deals DMG to all enemies an amount = 10% of its max HP.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_last_wish.png",
    season: "Season 2",
  },
  {
    id: 527,
    tokenId: 0,
    itemId: "rune_neutral_3011_s2",
    name: "Last Wish",
    class: "Neutral",
    isBlockchain: 0,
    rarity: "Epic",
    effect:
      "{Solo}. This Axie gains 40 bonus max HP. When it dies, Shields other allies and deals DMG to all enemies an amount = 10% of its max HP.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_last_wish.png",
    season: "Season 2",
  },
  {
    id: 423,
    tokenId: 0,
    itemId: "rune_neutral_3011_s1",
    name: "Last Wish (S1.5)",
    class: "Neutral",
    isBlockchain: 0,
    rarity: "Epic",
    effect:
      "{Solo}. This Axie gains 40 bonus max HP. When it dies, Shields other allies and deals DMG to all enemies an amount = 10% of its max HP.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_last_wish.png",
    season: "Season 1",
  },
  {
    id: 82,
    tokenId: 0,
    itemId: "rune_neutral_3001_s0",
    name: "Pure Instinct",
    class: "Neutral",
    isBlockchain: 0,
    rarity: "Epic",
    effect: "All cards gain 15% {Class Bonus}.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_neutral_hybrid_2.png",
    season: "Season 0",
  },
  {
    id: 95,
    tokenId: 0,
    itemId: "rune_neutral_hybrid_2",
    name: "Pure Instinct",
    class: "Neutral",
    isBlockchain: 0,
    rarity: "Epic",
    effect: "All cards gain 15% {Class Bonus}.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_neutral_hybrid_2.png",
    season: "Season Alpha",
  },
  {
    id: 156,
    tokenId: 0,
    itemId: "rune_neutral_3001_s1",
    name: "Pure Instinct",
    class: "Neutral",
    isBlockchain: 0,
    rarity: "Epic",
    effect: "{Solo}. All cards of other allies gain 10% {Class Bonus}.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_neutral_hybrid_2.png",
    season: "Season 1",
  },
  {
    id: 358,
    tokenId: 0,
    itemId: "rune_neutral_3010_s2_nondec",
    name: "Pure Instinct",
    class: "Neutral",
    isBlockchain: 0,
    rarity: "Epic",
    effect: "{Solo}. Other allied Axies' cards gain 10% {Class Bonus}.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_neutral_hybrid_2.png",
    season: "Season 2",
  },
  {
    id: 513,
    tokenId: 0,
    itemId: "rune_neutral_3010_s2",
    name: "Pure Instinct",
    class: "Neutral",
    isBlockchain: 0,
    rarity: "Epic",
    effect: "{Solo}. Other allied Axies' cards gain 10% {Class Bonus}.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_neutral_hybrid_2.png",
    season: "Season 2",
  },
  {
    id: 308,
    tokenId: 0,
    itemId: "rune_neutral_3010_s1",
    name: "Pure Instinct (S1.5)",
    class: "Neutral",
    isBlockchain: 0,
    rarity: "Epic",
    effect: "{Solo}. Other allied Axies' cards gain 10% {Class Bonus}.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_neutral_hybrid_2.png",
    season: "Season 1",
  },
  {
    id: 552,
    tokenId: 0,
    itemId: "rune_neutral_3010_s3",
    name: "Pure Luck",
    class: "Neutral",
    isBlockchain: 0,
    rarity: "Epic",
    effect:
      "{Solo}. When your turn starts, if there's at least 2 Cursed Cards in your Hand and Draw Pile, draw 1 additional card; otherwise, this Axie's cards gain 15% bonus stats until your turn ends.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_pure_luck.png",
    season: "Season 3",
  },
  {
    id: 614,
    tokenId: 0,
    itemId: "rune_neutral_3010_s3_nondec",
    name: "Pure Luck",
    class: "Neutral",
    isBlockchain: 0,
    rarity: "Epic",
    effect:
      "{Solo}. When your turn starts, if there's at least 2 Cursed Cards in your Hand and Draw Pile, draw 1 additional card; otherwise, this Axie's cards gain 15% bonus stats until your turn ends.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_pure_luck.png",
    season: "Season 3",
  },
  {
    id: 791,
    tokenId: 0,
    itemId: "rune_neutral_3010_s4_nondec",
    name: "Pure Luck",
    class: "Neutral",
    isBlockchain: 0,
    rarity: "Epic",
    effect:
      "{Solo}. When your turn starts, if there's at least 2 Cursed Cards in your Hand and Draw Pile, draw 1 additional card; otherwise, this Axie's cards gain 15% bonus stats until your turn ends.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_pure_luck.png",
    season: "Season 4",
  },
  {
    id: 815,
    tokenId: 0,
    itemId: "rune_neutral_3010_s4",
    name: "Pure Luck",
    class: "Neutral",
    isBlockchain: 0,
    rarity: "Epic",
    effect:
      "{Solo}. When your turn starts, if there's at least 2 Cursed Cards in your Hand and Draw Pile, draw 1 additional card; otherwise, this Axie's cards gain 15% bonus stats until your turn ends.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_pure_luck.png",
    season: "Season 4",
  },
  {
    id: 657,
    tokenId: 0,
    itemId: "rune_neutral_4010_s3_nondec",
    name: "Pure Instinct",
    class: "Neutral",
    isBlockchain: 0,
    rarity: "Mystic",
    effect:
      "{Solo}. Other allied Axies' cards have 5% bonus stats when played. Additional 5% bonus stats per unique Axie Class in your team.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_neutral_hybrid_2.png",
    season: "Season 3",
  },
  {
    id: 819,
    tokenId: 0,
    itemId: "rune_neutral_4010_s4_nondec",
    name: "Pure Instinct",
    class: "Neutral",
    isBlockchain: 0,
    rarity: "Mystic",
    effect:
      "{Solo}. Other allied Axies' cards have 5% bonus stats when played. Additional 5% bonus stats per unique Axie Class in your team.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_neutral_hybrid_2.png",
    season: "Season 4",
  },
  {
    id: 873,
    tokenId: 0,
    itemId: "rune_neutral_4010_s4",
    name: "Pure Instinct",
    class: "Neutral",
    isBlockchain: 0,
    rarity: "Mystic",
    effect:
      "{Solo}. Other allied Axies' cards have 5% bonus stats when played. Additional 5% bonus stats per unique Axie Class in your team.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_neutral_hybrid_2.png",
    season: "Season 4",
  },
  {
    id: 551,
    tokenId: 0,
    itemId: "rune_neutral_4010_s3",
    name: "Pure Instinct",
    class: "Neutral",
    isBlockchain: 0,
    rarity: "Mystic",
    effect:
      "{Solo}. Other allied Axies' cards have 5% bonus stats when played. Additional 5% bonus stats per unique Axie Class in your team.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_neutral_hybrid_2.png",
    season: "Season 3",
  },
  {
    id: 97,
    tokenId: 0,
    itemId: "rune_neutral_4001_s0",
    name: "Shady Exchange",
    class: "Neutral",
    isBlockchain: 0,
    rarity: "Mystic",
    effect: "{Solo}.Energy +1 in Even <Round>s.\nAdd 2 [Daze] to your deck.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_neutral_utility_2.png",
    season: "Season 0",
  },
  {
    id: 104,
    tokenId: 0,
    itemId: "rune_neutral_utility_2",
    name: "Shady Exchange",
    class: "Neutral",
    isBlockchain: 0,
    rarity: "Mystic",
    effect:
      "{Solo}.Energy +1 in Even <Round>s.\nAdd 2 [Daze] and 1 [Void] to your deck.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_neutral_utility_2.png",
    season: "Season Alpha",
  },
  {
    id: 208,
    tokenId: 0,
    itemId: "rune_neutral_4001_s1",
    name: "Shady Exchange",
    class: "Neutral",
    isBlockchain: 0,
    rarity: "Mystic",
    effect:
      "{Solo}. Gain 3 <Energy Fragment> at the start of your turn. Add 3 [Void] to your Deck.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_neutral_utility_2.png",
    season: "Season 1",
  },
  {
    id: 364,
    tokenId: 0,
    itemId: "rune_neutral_4010_s2_nondec",
    name: "Shady Exchange",
    class: "Neutral",
    isBlockchain: 0,
    rarity: "Mystic",
    effect:
      "{Solo}. Until <Round> 3, when your turn ends, lose up to 3 <Energy Fragment>s. After <Round> 3, when your turn starts, gain 3 Fragments.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_neutral_utility_2.png",
    season: "Season 2",
  },
  {
    id: 503,
    tokenId: 0,
    itemId: "rune_neutral_4010_s2",
    name: "Shady Exchange",
    class: "Neutral",
    isBlockchain: 0,
    rarity: "Mystic",
    effect:
      "{Solo}. Until <Round> 3, when your turn ends, lose up to 3 <Energy Fragment>s. After <Round> 3, when your turn starts, gain 3 Fragments.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_neutral_utility_2.png",
    season: "Season 2",
  },
  {
    id: 593,
    tokenId: 0,
    itemId: "rune_neutral_4011_s3",
    name: "Shady Exchange",
    class: "Neutral",
    isBlockchain: 0,
    rarity: "Mystic",
    effect:
      "{Solo}. Until <Round> 3, when your turn ends, lose up to 2 <Energy Fragment>s. After <Round> 3, when your turn starts, gain 3 Fragments.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_neutral_utility_2.png",
    season: "Season 3",
  },
  {
    id: 717,
    tokenId: 0,
    itemId: "rune_neutral_4011_s3_nondec",
    name: "Shady Exchange",
    class: "Neutral",
    isBlockchain: 0,
    rarity: "Mystic",
    effect:
      "{Solo}. Until <Round> 3, when your turn ends, lose up to 2 <Energy Fragment>s. After <Round> 3, when your turn starts, gain 3 Fragments.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_neutral_utility_2.png",
    season: "Season 3",
  },
  {
    id: 910,
    tokenId: 0,
    itemId: "rune_neutral_4011_s4",
    name: "Shady Exchange",
    class: "Neutral",
    isBlockchain: 0,
    rarity: "Mystic",
    effect:
      "{Solo}. Until <Round> 2, when your turn ends, lose up to 2 <Energy Fragment>s. After <Round> 2, when your turn starts, gain 3 Fragments.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_neutral_utility_2.png",
    season: "Season 4",
  },
  {
    id: 911,
    tokenId: 0,
    itemId: "rune_neutral_4011_s4_nondec",
    name: "Shady Exchange",
    class: "Neutral",
    isBlockchain: 0,
    rarity: "Mystic",
    effect:
      "{Solo}. Until <Round> 2, when your turn ends, lose up to 2 <Energy Fragment>s. After <Round> 2, when your turn starts, gain 3 Fragments.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_neutral_utility_2.png",
    season: "Season 4",
  },
  {
    id: 505,
    tokenId: 0,
    itemId: "rune_neutral_4010_s1",
    name: "Shady Exchange (S1.5)",
    class: "Neutral",
    isBlockchain: 0,
    rarity: "Mystic",
    effect:
      "{Solo}. Until <Round> 3, when your turn ends, lose up to 3 <Energy Fragment>s. After <Round> 3, when your turn starts, gain 3 Fragments.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_neutral_utility_2.png",
    season: "Season 1",
  },
  {
    id: 333,
    tokenId: 0,
    itemId: "rune_neutral_2010_s2_nondec",
    name: "Energy Shard",
    class: "Neutral",
    isBlockchain: 0,
    rarity: "Rare",
    effect:
      "When the battle starts, gain 1 <Energy Fragment>. Whenever you create an <Energy Burst>, this Axie heals 40 HP.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_energy_shard.png",
    season: "Season 2",
  },
  {
    id: 441,
    tokenId: 0,
    itemId: "rune_neutral_2010_s2",
    name: "Energy Shard",
    class: "Neutral",
    isBlockchain: 0,
    rarity: "Rare",
    effect:
      "When the battle starts, gain 1 <Energy Fragment>. Whenever you create an <Energy Burst>, this Axie heals 40 HP.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_energy_shard.png",
    season: "Season 2",
  },
  {
    id: 303,
    tokenId: 0,
    itemId: "rune_neutral_2010_s1",
    name: "Energy Shard (S1.5)",
    class: "Neutral",
    isBlockchain: 0,
    rarity: "Rare",
    effect:
      "When the battle starts, gain 1 <Energy Fragment>. Whenever you create an <Energy Burst>, this Axie heals 40 HP.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_energy_shard.png",
    season: "Season 1",
  },
  {
    id: 7,
    tokenId: 0,
    itemId: "rune_neutral_2002_s0",
    name: "Pure Power",
    class: "Neutral",
    isBlockchain: 0,
    rarity: "Rare",
    effect: "Attack cards gain 15% {Class Bonus}.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_neutral_offensive_2.png",
    season: "Season 0",
  },
  {
    id: 19,
    tokenId: 0,
    itemId: "rune_neutral_offensive_2",
    name: "Pure Power",
    class: "Neutral",
    isBlockchain: 0,
    rarity: "Rare",
    effect: "Attack cards gain 15% {Class Bonus}.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_neutral_offensive_2.png",
    season: "Season Alpha",
  },
  {
    id: 197,
    tokenId: 0,
    itemId: "rune_neutral_2002_s1",
    name: "Pure Power",
    class: "Neutral",
    isBlockchain: 0,
    rarity: "Rare",
    effect: "Attack cards gain 15% {Class Bonus}.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_neutral_offensive_2.png",
    season: "Season 1",
  },
  {
    id: 324,
    tokenId: 0,
    itemId: "rune_neutral_2011_s2_nondec",
    name: "Pure Power",
    class: "Neutral",
    isBlockchain: 0,
    rarity: "Rare",
    effect: "This Axie's Attack cards gain 15% {Class Bonus}.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_neutral_offensive_2.png",
    season: "Season 2",
  },
  {
    id: 427,
    tokenId: 0,
    itemId: "rune_neutral_2011_s2",
    name: "Pure Power",
    class: "Neutral",
    isBlockchain: 0,
    rarity: "Rare",
    effect: "This Axie's Attack cards gain 15% {Class Bonus}.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_neutral_offensive_2.png",
    season: "Season 2",
  },
  {
    id: 577,
    tokenId: 0,
    itemId: "rune_neutral_2010_s3",
    name: "Pure Power",
    class: "Neutral",
    isBlockchain: 0,
    rarity: "Rare",
    effect:
      "Other allied Axies' Attack cards have 10% bonus stats when played.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_neutral_offensive_2.png",
    season: "Season 3",
  },
  {
    id: 725,
    tokenId: 0,
    itemId: "rune_neutral_2010_s3_nondec",
    name: "Pure Power",
    class: "Neutral",
    isBlockchain: 0,
    rarity: "Rare",
    effect:
      "Other allied Axies' Attack cards have 10% bonus stats when played.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_neutral_offensive_2.png",
    season: "Season 3",
  },
  {
    id: 847,
    tokenId: 0,
    itemId: "rune_neutral_2010_s4_nondec",
    name: "Pure Power",
    class: "Neutral",
    isBlockchain: 0,
    rarity: "Rare",
    effect:
      "Other allied Axies' Attack cards have 10% bonus stats when played.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_neutral_offensive_2.png",
    season: "Season 4",
  },
  {
    id: 882,
    tokenId: 0,
    itemId: "rune_neutral_2010_s4",
    name: "Pure Power",
    class: "Neutral",
    isBlockchain: 0,
    rarity: "Rare",
    effect:
      "Other allied Axies' Attack cards have 10% bonus stats when played.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_neutral_offensive_2.png",
    season: "Season 4",
  },
  {
    id: 488,
    tokenId: 0,
    itemId: "rune_neutral_2011_s1",
    name: "Pure Power (S1.5)",
    class: "Neutral",
    isBlockchain: 0,
    rarity: "Rare",
    effect: "This Axie's Attack cards gain 15% {Class Bonus}.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_neutral_offensive_2.png",
    season: "Season 1",
  },
  {
    id: 93,
    tokenId: 0,
    itemId: "rune_neutral_2001_s0",
    name: "Pure Skill",
    class: "Neutral",
    isBlockchain: 0,
    rarity: "Rare",
    effect: "Healing and Shield cards gain 15% {Class Bonus}.        ",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_neutral_defensive_2.png",
    season: "Season 0",
  },
  {
    id: 112,
    tokenId: 0,
    itemId: "rune_neutral_defensive_2",
    name: "Pure Skill",
    class: "Neutral",
    isBlockchain: 0,
    rarity: "Rare",
    effect: "Healing and Shield cards gain 15% {Class Bonus}.        ",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_neutral_defensive_2.png",
    season: "Season Alpha",
  },
  {
    id: 202,
    tokenId: 0,
    itemId: "rune_neutral_2001_s1",
    name: "Pure Skill",
    class: "Neutral",
    isBlockchain: 0,
    rarity: "Rare",
    effect: "Healing and Shield cards gain 15% {Class Bonus}.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_neutral_defensive_2.png",
    season: "Season 1",
  },
  {
    id: 284,
    tokenId: 0,
    itemId: "rune_neutral_2012_s2_nondec",
    name: "Pure Skill",
    class: "Neutral",
    isBlockchain: 0,
    rarity: "Rare",
    effect: "This Axie's Skill cards gain 15% {Class Bonus}.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_neutral_defensive_2.png",
    season: "Season 2",
  },
  {
    id: 425,
    tokenId: 0,
    itemId: "rune_neutral_2012_s2",
    name: "Pure Skill",
    class: "Neutral",
    isBlockchain: 0,
    rarity: "Rare",
    effect: "This Axie's Skill cards gain 15% {Class Bonus}.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_neutral_defensive_2.png",
    season: "Season 2",
  },
  {
    id: 571,
    tokenId: 0,
    itemId: "rune_neutral_2011_s3",
    name: "Pure Skill",
    class: "Neutral",
    isBlockchain: 0,
    rarity: "Rare",
    effect:
      "Other allied Axies' Heal and Shield cards have 10% bonus stats when played.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_neutral_defensive_2.png",
    season: "Season 3",
  },
  {
    id: 728,
    tokenId: 0,
    itemId: "rune_neutral_2011_s3_nondec",
    name: "Pure Skill",
    class: "Neutral",
    isBlockchain: 0,
    rarity: "Rare",
    effect:
      "Other allied Axies' Heal and Shield cards have 10% bonus stats when played.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_neutral_defensive_2.png",
    season: "Season 3",
  },
  {
    id: 814,
    tokenId: 0,
    itemId: "rune_neutral_2011_s4",
    name: "Pure Skill",
    class: "Neutral",
    isBlockchain: 0,
    rarity: "Rare",
    effect:
      "Other allied Axies' Heal and Shield cards have 10% bonus stats when played.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_neutral_defensive_2.png",
    season: "Season 4",
  },
  {
    id: 927,
    tokenId: 0,
    itemId: "rune_neutral_2011_s4_nondec",
    name: "Pure Skill",
    class: "Neutral",
    isBlockchain: 0,
    rarity: "Rare",
    effect:
      "Other allied Axies' Heal and Shield cards have 10% bonus stats when played.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_neutral_defensive_2.png",
    season: "Season 4",
  },
  {
    id: 297,
    tokenId: 0,
    itemId: "rune_neutral_2012_s1",
    name: "Pure Skill (S1.5)",
    class: "Neutral",
    isBlockchain: 0,
    rarity: "Rare",
    effect: "This Axie's Skill cards gain 15% {Class Bonus}.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_neutral_defensive_2.png",
    season: "Season 1",
  },
  {
    id: 444,
    tokenId: 0,
    itemId: "rune_plant_3011_s2",
    name: "Leaf Cloak",
    class: "Plant",
    isBlockchain: 0,
    rarity: "Epic",
    effect:
      "{Solo}. Whenever hit, if this Axie has {Leaf}, it takes 15% less DMG, lose 1 {Leaf}, then grant 1 {Leaf} to other allied Axies; otherwise it gains 2 {Leaf}.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_leaf_cloak.png",
    season: "Season 2",
  },
  {
    id: 489,
    tokenId: 0,
    itemId: "rune_plant_3011_s2_nondec",
    name: "Leaf Cloak",
    class: "Plant",
    isBlockchain: 0,
    rarity: "Epic",
    effect:
      "{Solo}. Whenever hit, if this Axie has {Leaf}, it takes 15% less DMG, lose 1 {Leaf}, then grant 1 {Leaf} to other allied Axies; otherwise it gains 2 {Leaf}.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_leaf_cloak.png",
    season: "Season 2",
  },
  {
    id: 556,
    tokenId: 0,
    itemId: "rune_plant_3011_s3",
    name: "Leaf Cloak",
    class: "Plant",
    isBlockchain: 0,
    rarity: "Epic",
    effect:
      "{Solo}. Whenever hit, if this Axie has {Leaf}, it takes 20% less DMG, lose 1 {Leaf}, then grant 1 {Leaf} to other allied Axies; otherwise it gains 2 {Leaf}.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_leaf_cloak.png",
    season: "Season 3",
  },
  {
    id: 705,
    tokenId: 0,
    itemId: "rune_plant_3011_s3_nondec",
    name: "Leaf Cloak",
    class: "Plant",
    isBlockchain: 0,
    rarity: "Epic",
    effect:
      "{Solo}. Whenever hit, if this Axie has {Leaf}, it takes 20% less DMG, lose 1 {Leaf}, then grant 1 {Leaf} to other allied Axies; otherwise it gains 2 {Leaf}.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_leaf_cloak.png",
    season: "Season 3",
  },
  {
    id: 947,
    tokenId: 0,
    itemId: "rune_plant_3011_s4_nondec",
    name: "Leaf Cloak",
    class: "Plant",
    isBlockchain: 0,
    rarity: "Epic",
    effect:
      "{Solo}. Whenever hit, if this Axie has {Leaf}, it takes 20% less DMG, lose 1 {Leaf}, then grant 1 {Leaf} to other allied Axies; otherwise it gains 2 {Leaf}.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_leaf_cloak.png",
    season: "Season 4",
  },
  {
    id: 950,
    tokenId: 0,
    itemId: "rune_plant_3011_s4",
    name: "Leaf Cloak",
    class: "Plant",
    isBlockchain: 0,
    rarity: "Epic",
    effect:
      "{Solo}. Whenever hit, if this Axie has {Leaf}, it takes 20% less DMG, lose 1 {Leaf}, then grant 1 {Leaf} to other allied Axies; otherwise it gains 2 {Leaf}.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_leaf_cloak.png",
    season: "Season 4",
  },
  {
    id: 478,
    tokenId: 0,
    itemId: "rune_plant_3011_s1",
    name: "Leaf Cloak (S1.5)",
    class: "Plant",
    isBlockchain: 0,
    rarity: "Epic",
    effect:
      "{Solo}. This Axie takes 15% less DMG if it has {Leaf}. When attacked, the Axie lose 1 {Leaf} to grant 1 {Leaf} to other allied Axies.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_leaf_cloak.png",
    season: "Season 1",
  },
  {
    id: 590,
    tokenId: 0,
    itemId: "rune_plant_3012_s3",
    name: "Miracle Leaf",
    class: "Plant",
    isBlockchain: 0,
    rarity: "Epic",
    effect:
      "{Solo} Gain 1 Leaf when your turn starts.\nThis Axie's Attacks deal 1 bonus DMG per {Leaf}. If this Axie has at least 5 {Leaf} before attacking, deal 20% bonus DMG.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_plant_offensive_1.png",
    season: "Season 3",
  },
  {
    id: 701,
    tokenId: 0,
    itemId: "rune_plant_3012_s3_nondec",
    name: "Miracle Leaf",
    class: "Plant",
    isBlockchain: 0,
    rarity: "Epic",
    effect:
      "{Solo} Gain 1 Leaf when your turn starts.\nThis Axie's Attacks deal 1 bonus DMG per {Leaf}. If this Axie has at least 5 {Leaf} before attacking, deal 20% bonus DMG.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_plant_offensive_1.png",
    season: "Season 3",
  },
  {
    id: 864,
    tokenId: 0,
    itemId: "rune_plant_3012_s4",
    name: "Miracle Leaf",
    class: "Plant",
    isBlockchain: 0,
    rarity: "Epic",
    effect:
      "{Solo} Gain 1 Leaf when your turn starts.\nThis Axie's Attacks deal 1 bonus DMG per {Leaf}. If this Axie has at least 5 {Leaf} before attacking, deal 20% bonus DMG.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_plant_offensive_1.png",
    season: "Season 4",
  },
  {
    id: 905,
    tokenId: 0,
    itemId: "rune_plant_3012_s4_nondec",
    name: "Miracle Leaf",
    class: "Plant",
    isBlockchain: 0,
    rarity: "Epic",
    effect:
      "{Solo} Gain 1 Leaf when your turn starts.\nThis Axie's Attacks deal 1 bonus DMG per {Leaf}. If this Axie has at least 5 {Leaf} before attacking, deal 20% bonus DMG.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_plant_offensive_1.png",
    season: "Season 4",
  },
  {
    id: 653,
    tokenId: 0,
    itemId: "rune_plant_3010_s3_nondec",
    name: "Rise And Ruin",
    class: "Plant",
    isBlockchain: 0,
    rarity: "Epic",
    effect:
      "{Solo}. Before the battle starts, add 1 [Forest Breath] to your Deck.\nOnce per turn, when an ally is <Cleanse>d, add 1 [Forest Wrath] to your Hand.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_plant_hybrid_1.png",
    season: "Season 3",
  },
  {
    id: 790,
    tokenId: 0,
    itemId: "rune_plant_3010_s4",
    name: "Rise And Ruin",
    class: "Plant",
    isBlockchain: 0,
    rarity: "Epic",
    effect:
      "{Solo}. Before the battle starts, add 1 [Forest Breath] to your Deck.\nOnce per turn, when an ally is <Cleanse>d, add 1 [Forest Wrath] to your Hand.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_plant_hybrid_1.png",
    season: "Season 4",
  },
  {
    id: 806,
    tokenId: 0,
    itemId: "rune_plant_3010_s4_nondec",
    name: "Rise And Ruin",
    class: "Plant",
    isBlockchain: 0,
    rarity: "Epic",
    effect:
      "{Solo}. Before the battle starts, add 1 [Forest Breath] to your Deck.\nOnce per turn, when an ally is <Cleanse>d, add 1 [Forest Wrath] to your Hand.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_plant_hybrid_1.png",
    season: "Season 4",
  },
  {
    id: 36,
    tokenId: 0,
    itemId: "rune_plant_hybrid_1",
    name: "Rise And Ruin",
    class: "Plant",
    isBlockchain: 0,
    rarity: "Epic",
    effect:
      "{Solo}. Shielding cards of this Axie also restore HP equal to 100% of Shield gained but grant 25% less Shield.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_plant_hybrid_1.png",
    season: "Season Alpha",
  },
  {
    id: 115,
    tokenId: 0,
    itemId: "rune_plant_3001_s0",
    name: "Rise And Ruin",
    class: "Plant",
    isBlockchain: 0,
    rarity: "Epic",
    effect:
      "{Solo}. Shielding cards of this Axie also restore HP equal to 100% of Shield gained but grant 35% less Shield.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_plant_hybrid_1.png",
    season: "Season 0",
  },
  {
    id: 150,
    tokenId: 0,
    itemId: "rune_plant_3001_s1",
    name: "Rise And Ruin",
    class: "Plant",
    isBlockchain: 0,
    rarity: "Epic",
    effect:
      "{Solo}. Shielding cards of this Axie also Heal HP equal to 100% of Shield gained but grant 35% less Shield.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_plant_hybrid_1.png",
    season: "Season 1",
  },
  {
    id: 413,
    tokenId: 0,
    itemId: "rune_plant_3010_s2_nondec",
    name: "Rise And Ruin",
    class: "Plant",
    isBlockchain: 0,
    rarity: "Epic",
    effect:
      "{Solo}. This Axie's Shield cards grant 35% less Shield, but heal their targets HP = 100% Shield granted.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_plant_hybrid_1.png",
    season: "Season 2",
  },
  {
    id: 424,
    tokenId: 0,
    itemId: "rune_plant_3010_s2",
    name: "Rise And Ruin",
    class: "Plant",
    isBlockchain: 0,
    rarity: "Epic",
    effect:
      "{Solo}. This Axie's Shield cards grant 35% less Shield, but heal their targets HP = 100% Shield granted.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_plant_hybrid_1.png",
    season: "Season 2",
  },
  {
    id: 545,
    tokenId: 0,
    itemId: "rune_plant_3010_s3",
    name: "Rise And Ruin",
    class: "Plant",
    isBlockchain: 0,
    rarity: "Epic",
    effect:
      "{Solo}. Before the battle starts, add 1 [Forest Breath] to your Deck.\nOnce per turn, when an ally is <Cleanse>d, add 1 [Forest Wrath] to your Hand.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_plant_hybrid_1.png",
    season: "Season 3",
  },
  {
    id: 463,
    tokenId: 0,
    itemId: "rune_plant_3010_s1",
    name: "Rise And Ruin (S1.5)",
    class: "Plant",
    isBlockchain: 0,
    rarity: "Epic",
    effect:
      "{Solo}. This Axie's Shield cards grant 35% less Shield, but heal their targets HP = 100% Shield granted.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_plant_hybrid_1.png",
    season: "Season 1",
  },
  {
    id: 45,
    tokenId: 0,
    itemId: "rune_plant_defensive_1",
    name: "Gaia's Embrace",
    class: "Plant",
    isBlockchain: 0,
    rarity: "Mystic",
    effect: "{Solo}. Increase all ally Axies' max HP by 50.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_plant_defensive_1.png",
    season: "Season Alpha",
  },
  {
    id: 66,
    tokenId: 0,
    itemId: "rune_plant_4001_s0",
    name: "Gaia's Embrace",
    class: "Plant",
    isBlockchain: 0,
    rarity: "Mystic",
    effect: "{Solo}. Increase all ally Axies' max HP by 50.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_plant_defensive_1.png",
    season: "Season 0",
  },
  {
    id: 167,
    tokenId: 0,
    itemId: "rune_plant_4001_s1",
    name: "Gaia's Embrace",
    class: "Plant",
    isBlockchain: 0,
    rarity: "Mystic",
    effect:
      "{Solo}. Increase all ally Axies' max HP by 40. They also Heal 1% max HP when your turn starts.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_plant_defensive_1.png",
    season: "Season 1",
  },
  {
    id: 302,
    tokenId: 0,
    itemId: "rune_plant_4010_s2_nondec",
    name: "Gaia's Embrace",
    class: "Plant",
    isBlockchain: 0,
    rarity: "Mystic",
    effect:
      "{Solo}. All allied Axies gain 40 bonus max HP. They also heal HP = 1% of this Rune's owner's max HP when your turn starts.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_plant_defensive_1.png",
    season: "Season 2",
  },
  {
    id: 386,
    tokenId: 0,
    itemId: "rune_plant_4010_s2",
    name: "Gaia's Embrace",
    class: "Plant",
    isBlockchain: 0,
    rarity: "Mystic",
    effect:
      "{Solo}. All allied Axies gain 40 bonus max HP. They also heal HP = 1% of this Rune's owner's max HP when your turn starts.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_plant_defensive_1.png",
    season: "Season 2",
  },
  {
    id: 597,
    tokenId: 0,
    itemId: "rune_plant_4010_s3",
    name: "Gaia's Embrace",
    class: "Plant",
    isBlockchain: 0,
    rarity: "Mystic",
    effect:
      "{Solo}. All allied Axies gain 40 bonus max HP. They also heal HP = 1% of this Rune's owner's max HP when your turn starts.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_plant_defensive_1.png",
    season: "Season 3",
  },
  {
    id: 612,
    tokenId: 0,
    itemId: "rune_plant_4010_s3_nondec",
    name: "Gaia's Embrace",
    class: "Plant",
    isBlockchain: 0,
    rarity: "Mystic",
    effect:
      "{Solo}. All allied Axies gain 40 bonus max HP. They also heal HP = 1% of this Rune's owner's max HP when your turn starts.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_plant_defensive_1.png",
    season: "Season 3",
  },
  {
    id: 757,
    tokenId: 0,
    itemId: "rune_plant_4010_s4",
    name: "Gaia's Embrace",
    class: "Plant",
    isBlockchain: 0,
    rarity: "Mystic",
    effect:
      "{Solo}. All allied Axies gain 40 bonus max HP. They also heal HP = 1% of this Rune's owner's max HP when your turn starts.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_plant_defensive_1.png",
    season: "Season 4",
  },
  {
    id: 773,
    tokenId: 0,
    itemId: "rune_plant_4010_s4_nondec",
    name: "Gaia's Embrace",
    class: "Plant",
    isBlockchain: 0,
    rarity: "Mystic",
    effect:
      "{Solo}. All allied Axies gain 40 bonus max HP. They also heal HP = 1% of this Rune's owner's max HP when your turn starts.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_plant_defensive_1.png",
    season: "Season 4",
  },
  {
    id: 362,
    tokenId: 0,
    itemId: "rune_plant_4010_s1",
    name: "Gaia's Embrace (S1.5)",
    class: "Plant",
    isBlockchain: 0,
    rarity: "Mystic",
    effect:
      "{Solo}. All allied Axies gain 40 bonus max HP. They also heal HP = 1% of this Rune's owner's max HP when your turn starts.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_plant_defensive_1.png",
    season: "Season 1",
  },
  {
    id: 569,
    tokenId: 0,
    itemId: "rune_plant_4011_s3",
    name: "Healing Pulse",
    class: "Plant",
    isBlockchain: 0,
    rarity: "Mystic",
    effect:
      "{Solo}. This Axie Heals 20% bonus HP.\nOverheal amount granted by this Axie converts to Shield.\nOverheal amount granted by this Axie converts to DMG to 1 random enemy.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_plant_utility_1.png",
    season: "Season 3",
  },
  {
    id: 624,
    tokenId: 0,
    itemId: "rune_plant_4011_s3_nondec",
    name: "Healing Pulse",
    class: "Plant",
    isBlockchain: 0,
    rarity: "Mystic",
    effect:
      "{Solo}. This Axie Heals 20% bonus HP.\nOverheal amount granted by this Axie converts to Shield.\nOverheal amount granted by this Axie converts to DMG to 1 random enemy.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_plant_utility_1.png",
    season: "Season 3",
  },
  {
    id: 805,
    tokenId: 0,
    itemId: "rune_plant_4011_s4",
    name: "Healing Pulse",
    class: "Plant",
    isBlockchain: 0,
    rarity: "Mystic",
    effect:
      "{Solo}. This Axie Heals 20% bonus HP.\nOverheal amount granted by this Axie converts to Shield.\nOverheal amount granted by this Axie converts to DMG to 1 random enemy.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_plant_utility_1.png",
    season: "Season 4",
  },
  {
    id: 870,
    tokenId: 0,
    itemId: "rune_plant_4011_s4_nondec",
    name: "Healing Pulse",
    class: "Plant",
    isBlockchain: 0,
    rarity: "Mystic",
    effect:
      "{Solo}. This Axie Heals 20% bonus HP.\nOverheal amount granted by this Axie converts to Shield.\nOverheal amount granted by this Axie converts to DMG to 1 random enemy.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_plant_utility_1.png",
    season: "Season 4",
  },
  {
    id: 896,
    tokenId: 0,
    itemId: "rune_plant_2011_s4",
    name: "Destiny Leaf",
    class: "Plant",
    isBlockchain: 0,
    rarity: "Rare",
    effect:
      "This Axie's Summoned Units gain 14 bonus max HP. When this Axie's Summons die, deal DMG equal to 8% of this Axie's current HP to the closest enemy Axie.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_memento_leaf.png",
    season: "Season 4",
  },
  {
    id: 899,
    tokenId: 0,
    itemId: "rune_plant_2011_s4_nondec",
    name: "Destiny Leaf",
    class: "Plant",
    isBlockchain: 0,
    rarity: "Rare",
    effect:
      "This Axie's Summoned Units gain 14 bonus max HP. When this Axie's Summons die, deal DMG equal to 8% of this Axie's current HP to the closest enemy Axie.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_memento_leaf.png",
    season: "Season 4",
  },
  {
    id: 67,
    tokenId: 0,
    itemId: "rune_plant_2002_s0",
    name: "Healing Pulse",
    class: "Plant",
    isBlockchain: 0,
    rarity: "Rare",
    effect:
      "All teammates regen 4 HP when your turn ends. Increase Healing card effects by 10%.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_plant_utility_1.png",
    season: "Season 0",
  },
  {
    id: 90,
    tokenId: 0,
    itemId: "rune_plant_utility_1",
    name: "Healing Pulse",
    class: "Plant",
    isBlockchain: 0,
    rarity: "Rare",
    effect:
      "All teammates regen 4 HP when your turn ends. Increase Healing card effects by 10%.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_plant_utility_1.png",
    season: "Season Alpha",
  },
  {
    id: 192,
    tokenId: 0,
    itemId: "rune_plant_2002_s1",
    name: "Healing Pulse",
    class: "Plant",
    isBlockchain: 0,
    rarity: "Rare",
    effect:
      "All teammates regen 4 HP when your turn ends. Increase Healing card effects by 10%.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_plant_utility_1.png",
    season: "Season 1",
  },
  {
    id: 400,
    tokenId: 0,
    itemId: "rune_plant_2012_s2_nondec",
    name: "Memento Leaf",
    class: "Plant",
    isBlockchain: 0,
    rarity: "Rare",
    effect:
      "This Axie's Summoned Units gain 14 bonus max HP. When die, those Summons grant 1 {Leaf} to the Axie.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_memento_leaf.png",
    season: "Season 2",
  },
  {
    id: 456,
    tokenId: 0,
    itemId: "rune_plant_2012_s2",
    name: "Memento Leaf",
    class: "Plant",
    isBlockchain: 0,
    rarity: "Rare",
    effect:
      "This Axie's Summoned Units gain 14 bonus max HP. When die, those Summons grant 1 {Leaf} to the Axie.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_memento_leaf.png",
    season: "Season 2",
  },
  {
    id: 537,
    tokenId: 0,
    itemId: "rune_plant_2011_s3",
    name: "Memento Leaf",
    class: "Plant",
    isBlockchain: 0,
    rarity: "Rare",
    effect:
      "This Axie's Summoned Units gain 14 bonus max HP. When die, those Summons grant 1 {Leaf} to the Axie.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_memento_leaf.png",
    season: "Season 3",
  },
  {
    id: 627,
    tokenId: 0,
    itemId: "rune_plant_2011_s3_nondec",
    name: "Memento Leaf",
    class: "Plant",
    isBlockchain: 0,
    rarity: "Rare",
    effect:
      "This Axie's Summoned Units gain 14 bonus max HP. When die, those Summons grant 1 {Leaf} to the Axie.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_memento_leaf.png",
    season: "Season 3",
  },
  {
    id: 342,
    tokenId: 0,
    itemId: "rune_plant_2012_s1",
    name: "Memento Leaf (S1.5)",
    class: "Plant",
    isBlockchain: 0,
    rarity: "Rare",
    effect:
      "This Axie's Summoned Units gain 14 bonus max HP. When die, those Summons grant 1 {Leaf} to the Axie.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_memento_leaf.png",
    season: "Season 1",
  },
  {
    id: 32,
    tokenId: 0,
    itemId: "rune_plant_2001_s0",
    name: "Miracle Leaf",
    class: "Plant",
    isBlockchain: 0,
    rarity: "Rare",
    effect:
      "Start Battle with 3 {Leaf}.\nSingle attacks consume 1 {Leaf} and deal 15 bonus DMG.\nAoE attacks consume 1 {Leaf} and deal 6 bonus DMG.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_plant_offensive_1.png",
    season: "Season 0",
  },
  {
    id: 118,
    tokenId: 0,
    itemId: "rune_plant_offensive_1",
    name: "Miracle Leaf",
    class: "Plant",
    isBlockchain: 0,
    rarity: "Rare",
    effect:
      "Start Battle with 3 {Leaf}. Non-Multihit Attacks consume 1 {Leaf} and deal 15 bonus DMG",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_plant_offensive_1.png",
    season: "Season Alpha",
  },
  {
    id: 205,
    tokenId: 0,
    itemId: "rune_plant_2001_s1",
    name: "Miracle Leaf",
    class: "Plant",
    isBlockchain: 0,
    rarity: "Rare",
    effect:
      "This Axie's attack cards deal 1 bonus DMG per {Leaf}. Double the effect if max stack.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_plant_offensive_1.png",
    season: "Season 1",
  },
  {
    id: 462,
    tokenId: 0,
    itemId: "rune_plant_2011_s2_nondec",
    name: "Miracle Leaf",
    class: "Plant",
    isBlockchain: 0,
    rarity: "Rare",
    effect:
      "This Axie's Attacks deal 1 bonus DMG per {Leaf}. Double the bonus DMG if the Axie reaches max {Leaf} stack.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_plant_offensive_1.png",
    season: "Season 2",
  },
  {
    id: 483,
    tokenId: 0,
    itemId: "rune_plant_2011_s2",
    name: "Miracle Leaf",
    class: "Plant",
    isBlockchain: 0,
    rarity: "Rare",
    effect:
      "This Axie's Attacks deal 1 bonus DMG per {Leaf}. Double the bonus DMG if the Axie reaches max {Leaf} stack.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_plant_offensive_1.png",
    season: "Season 2",
  },
  {
    id: 493,
    tokenId: 0,
    itemId: "rune_plant_2011_s1",
    name: "Miracle Leaf (S1.5)",
    class: "Plant",
    isBlockchain: 0,
    rarity: "Rare",
    effect:
      "This Axie's Attacks deal 1 bonus DMG per {Leaf}. Double the bonus DMG if the Axie reaches max {Leaf} stack.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_plant_offensive_1.png",
    season: "Season 1",
  },
  {
    id: 966,
    tokenId: 0,
    itemId: "rune_plant_ena_1",
    name: "Spring Blossom",
    class: "Plant",
    isBlockchain: 0,
    rarity: "Rare",
    effect:
      "Until <Round> 4, when your turn starts, gain 1 {Leaf}.\nHealing Effect +15% while this Axie has Leaf.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_plant_ena_1.png",
    season: null,
  },
  {
    id: 932,
    tokenId: 0,
    itemId: "rune_plant_olek_1",
    name: "The Protector",
    class: "Plant",
    isBlockchain: 0,
    rarity: "Rare",
    effect: "Take 10% less DMG if this Axie is in the frontmost position.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_plant_olek_1.png",
    season: null,
  },
  {
    id: 581,
    tokenId: 0,
    itemId: "rune_plant_2010_s3",
    name: "Way of Plant",
    class: "Plant",
    isBlockchain: 0,
    rarity: "Rare",
    effect:
      "When the battle starts, this Axie gains 2 {Leaf}. This Axie's base HP is increase by 8%.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_way_of_plant.png",
    season: "Season 3",
  },
  {
    id: 714,
    tokenId: 0,
    itemId: "rune_plant_2010_s3_nondec",
    name: "Way of Plant",
    class: "Plant",
    isBlockchain: 0,
    rarity: "Rare",
    effect:
      "When the battle starts, this Axie gains 2 {Leaf}. This Axie's base HP is increase by 8%.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_way_of_plant.png",
    season: "Season 3",
  },
  {
    id: 880,
    tokenId: 0,
    itemId: "rune_plant_2010_s4_nondec",
    name: "Way of Plant",
    class: "Plant",
    isBlockchain: 0,
    rarity: "Rare",
    effect:
      "When the battle starts, this Axie gains 2 {Leaf}. This Axie's base HP is increase by 8%.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_way_of_plant.png",
    season: "Season 4",
  },
  {
    id: 934,
    tokenId: 0,
    itemId: "rune_plant_2010_s4",
    name: "Way of Plant",
    class: "Plant",
    isBlockchain: 0,
    rarity: "Rare",
    effect:
      "When the battle starts, this Axie gains 2 {Leaf}. This Axie's base HP is increase by 8%.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_way_of_plant.png",
    season: "Season 4",
  },
  {
    id: 338,
    tokenId: 0,
    itemId: "rune_plant_2010_s2_nondec",
    name: "Way of Plant",
    class: "Plant",
    isBlockchain: 0,
    rarity: "Rare",
    effect:
      "When the battle starts, this Axie gains 2 {Leaf}, then its Heal cards grant 10% bonus HP for the rest of the battle.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_way_of_plant.png",
    season: "Season 2",
  },
  {
    id: 348,
    tokenId: 0,
    itemId: "rune_plant_2010_s2",
    name: "Way of Plant",
    class: "Plant",
    isBlockchain: 0,
    rarity: "Rare",
    effect:
      "When the battle starts, this Axie gains 2 {Leaf}, then its Heal cards grant 10% bonus HP for the rest of the battle.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_way_of_plant.png",
    season: "Season 2",
  },
  {
    id: 436,
    tokenId: 0,
    itemId: "rune_plant_2010_s1",
    name: "Way of Plant (S1.5)",
    class: "Plant",
    isBlockchain: 0,
    rarity: "Rare",
    effect:
      "When the battle starts, this Axie gains 2 {Leaf}, then its Heal cards grant 10% bonus HP for the rest of the battle.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_way_of_plant.png",
    season: "Season 1",
  },
  {
    id: 59,
    tokenId: 0,
    itemId: "rune_reptile_3001_s0",
    name: "Poison Touch",
    class: "Reptile",
    isBlockchain: 0,
    rarity: "Epic",
    effect:
      "{Solo}. Apply 1 {Poison} to Attacker. Take 2% less DMG per {Poison} stack on the attacking enemy. Max at 20%.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_reptile_hybrid_1.png",
    season: "Season 0",
  },
  {
    id: 110,
    tokenId: 0,
    itemId: "rune_reptile_hybrid_1",
    name: "Poison Touch",
    class: "Reptile",
    isBlockchain: 0,
    rarity: "Epic",
    effect:
      "Apply 1 {Poison} to Attacker. Take 2% less DMG per {Poison} stack on the attacking enemy. Max at 20%.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_reptile_hybrid_1.png",
    season: "Season Alpha",
  },
  {
    id: 200,
    tokenId: 0,
    itemId: "rune_reptile_3001_s1",
    name: "Poison Touch",
    class: "Reptile",
    isBlockchain: 0,
    rarity: "Epic",
    effect:
      "{Solo}. Apply 1 {Poison} to the attacker. Take 2% less DMG per {Poison} stack on the attacker. Max at 20%.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_reptile_hybrid_1.png",
    season: "Season 1",
  },
  {
    id: 470,
    tokenId: 0,
    itemId: "rune_reptile_3010_s2_nondec",
    name: "Poison Touch",
    class: "Reptile",
    isBlockchain: 0,
    rarity: "Epic",
    effect:
      "{Solo}. When this Axie gets attacked, apply 1 {Poison} to the attacker. The Axie also takes 2% less DMG for each {Poison} stack on the attacker. Max at 20%.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_reptile_hybrid_1.png",
    season: "Season 2",
  },
  {
    id: 471,
    tokenId: 0,
    itemId: "rune_reptile_3010_s2",
    name: "Poison Touch",
    class: "Reptile",
    isBlockchain: 0,
    rarity: "Epic",
    effect:
      "{Solo}. When this Axie gets attacked, apply 1 {Poison} to the attacker. The Axie also takes 2% less DMG for each {Poison} stack on the attacker. Max at 20%.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_reptile_hybrid_1.png",
    season: "Season 2",
  },
  {
    id: 285,
    tokenId: 0,
    itemId: "rune_reptile_3010_s1",
    name: "Poison Touch (S1.5)",
    class: "Reptile",
    isBlockchain: 0,
    rarity: "Epic",
    effect:
      "{Solo}. When this Axie gets attacked, apply 1 {Poison} to the attacker. The Axie also takes 2% less DMG for each {Poison} stack on the attacker. Max at 20%.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_reptile_hybrid_1.png",
    season: "Season 1",
  },
  {
    id: 339,
    tokenId: 0,
    itemId: "rune_reptile_3011_s2_nondec",
    name: "Prehistoric Armor",
    class: "Reptile",
    isBlockchain: 0,
    rarity: "Epic",
    effect:
      "{Solo}. When your turn starts, this Axie gains 1 {Spike}. {Spike} on this Axie grant 3 bonus {Bloodspike}. Whenever hit, this Axie heals 8 HP.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_prehistoric_armor.png",
    season: "Season 2",
  },
  {
    id: 450,
    tokenId: 0,
    itemId: "rune_reptile_3011_s2",
    name: "Prehistoric Armor",
    class: "Reptile",
    isBlockchain: 0,
    rarity: "Epic",
    effect:
      "{Solo}. When your turn starts, this Axie gains 1 {Spike}. {Spike} on this Axie grant 3 bonus {Bloodspike}. Whenever hit, this Axie heals 8 HP.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_prehistoric_armor.png",
    season: "Season 2",
  },
  {
    id: 536,
    tokenId: 0,
    itemId: "rune_reptile_3012_s3",
    name: "Prehistoric Armor",
    class: "Reptile",
    isBlockchain: 0,
    rarity: "Epic",
    effect:
      "{Solo}. When your turn starts, this Axie gains 1 {Spike}. {Spike} on this Axie grant 3 bonus {Bloodspike}. Whenever hit, this Axie heals 10 HP.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_prehistoric_armor.png",
    season: "Season 3",
  },
  {
    id: 686,
    tokenId: 0,
    itemId: "rune_reptile_3012_s3_nondec",
    name: "Prehistoric Armor",
    class: "Reptile",
    isBlockchain: 0,
    rarity: "Epic",
    effect:
      "{Solo}. When your turn starts, this Axie gains 1 {Spike}. {Spike} on this Axie grant 3 bonus {Bloodspike}. Whenever hit, this Axie heals 10 HP.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_prehistoric_armor.png",
    season: "Season 3",
  },
  {
    id: 767,
    tokenId: 0,
    itemId: "rune_reptile_3012_s4_nondec",
    name: "Prehistoric Armor",
    class: "Reptile",
    isBlockchain: 0,
    rarity: "Epic",
    effect:
      "{Solo}. When your turn starts, this Axie gains 1 {Spike}. {Spike} on this Axie grant 3 bonus {Bloodspike}. Whenever hit, this Axie heals 10 HP.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_prehistoric_armor.png",
    season: "Season 4",
  },
  {
    id: 841,
    tokenId: 0,
    itemId: "rune_reptile_3012_s4",
    name: "Prehistoric Armor",
    class: "Reptile",
    isBlockchain: 0,
    rarity: "Epic",
    effect:
      "{Solo}. When your turn starts, this Axie gains 1 {Spike}. {Spike} on this Axie grant 3 bonus {Bloodspike}. Whenever hit, this Axie heals 10 HP.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_prehistoric_armor.png",
    season: "Season 4",
  },
  {
    id: 525,
    tokenId: 0,
    itemId: "rune_reptile_3011_s1",
    name: "Prehistoric Armor (S1.5)",
    class: "Reptile",
    isBlockchain: 0,
    rarity: "Epic",
    effect:
      "{Solo}. {Spike} on this Axie give 3 bonus {Bloodspike} when triggered. The Axie also heals 1 HP for each {Bloodspike} gained from {Spike}.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_prehistoric_armor.png",
    season: "Season 1",
  },
  {
    id: 568,
    tokenId: 0,
    itemId: "rune_reptile_3011_s3",
    name: "Shellshock",
    class: "Reptile",
    isBlockchain: 0,
    rarity: "Epic",
    effect:
      "{Solo}. When an allied Secret is triggered, deal 15 <Pure DMG> to all enemy Axies then heal this Axie for 15 HP.\n(Revealed Shields isn't a triggered Secret).",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_reptile_defensive_1.png",
    season: "Season 3",
  },
  {
    id: 694,
    tokenId: 0,
    itemId: "rune_reptile_3011_s3_nondec",
    name: "Shellshock",
    class: "Reptile",
    isBlockchain: 0,
    rarity: "Epic",
    effect:
      "{Solo}. When an allied Secret is triggered, deal 15 <Pure DMG> to all enemy Axies then heal this Axie for 15 HP.\n(Revealed Shields isn't a triggered Secret).",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_reptile_defensive_1.png",
    season: "Season 3",
  },
  {
    id: 786,
    tokenId: 0,
    itemId: "rune_reptile_3011_s4_nondec",
    name: "Shellshock",
    class: "Reptile",
    isBlockchain: 0,
    rarity: "Epic",
    effect:
      "{Solo}. When an allied Secret is triggered, deal 15 <Pure DMG> to all enemy Axies then heal this Axie for 15 HP.\n(Revealed Shields isn't a triggered Secret).",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_reptile_defensive_1.png",
    season: "Season 4",
  },
  {
    id: 810,
    tokenId: 0,
    itemId: "rune_reptile_3011_s4",
    name: "Shellshock",
    class: "Reptile",
    isBlockchain: 0,
    rarity: "Epic",
    effect:
      "{Solo}. When an allied Secret is triggered, deal 15 <Pure DMG> to all enemy Axies then heal this Axie for 15 HP.\n(Revealed Shields isn't a triggered Secret).",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_reptile_defensive_1.png",
    season: "Season 4",
  },
  {
    id: 599,
    tokenId: 0,
    itemId: "rune_reptile_3010_s3",
    name: "Venom Master",
    class: "Reptile",
    isBlockchain: 0,
    rarity: "Epic",
    effect:
      "{Solo}. Before the battle starts, add 1 [Venom Burst] to your Deck. This Axie's attacks deal -15% DMG and apply 1 {Poison} per hit.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_reptile_offensive_1.png",
    season: "Season 3",
  },
  {
    id: 734,
    tokenId: 0,
    itemId: "rune_reptile_3010_s3_nondec",
    name: "Venom Master",
    class: "Reptile",
    isBlockchain: 0,
    rarity: "Epic",
    effect:
      "{Solo}. Before the battle starts, add 1 [Venom Burst] to your Deck. This Axie's attacks deal -15% DMG and apply 1 {Poison} per hit.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_reptile_offensive_1.png",
    season: "Season 3",
  },
  {
    id: 840,
    tokenId: 0,
    itemId: "rune_reptile_3010_s4",
    name: "Venom Master",
    class: "Reptile",
    isBlockchain: 0,
    rarity: "Epic",
    effect:
      "{Solo}. Before the battle starts, add 1 [Venom Burst] to your Deck. This Axie's attacks deal -15% DMG and apply 1 {Poison} per hit.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_reptile_offensive_1.png",
    season: "Season 4",
  },
  {
    id: 874,
    tokenId: 0,
    itemId: "rune_reptile_3010_s4_nondec",
    name: "Venom Master",
    class: "Reptile",
    isBlockchain: 0,
    rarity: "Epic",
    effect:
      "{Solo}. Before the battle starts, add 1 [Venom Burst] to your Deck. This Axie's attacks deal -15% DMG and apply 1 {Poison} per hit.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_reptile_offensive_1.png",
    season: "Season 4",
  },
  {
    id: 704,
    tokenId: 0,
    itemId: "rune_reptile_4011_s3_nondec",
    name: "Paralyzing Fang",
    class: "Reptile",
    isBlockchain: 0,
    rarity: "Mystic",
    effect:
      "{Solo}. This Axie's Debuff Abilities apply {Doubt} for 2 turns then deal <Pure DMG> equal to (3 + total debuff stacks and debuff turns on the target) to all enemy Axies (cap at 20 DMG).",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_paralyzing_glare.png",
    season: "Season 3",
  },
  {
    id: 825,
    tokenId: 0,
    itemId: "rune_reptile_4011_s4_nondec",
    name: "Paralyzing Fang",
    class: "Reptile",
    isBlockchain: 0,
    rarity: "Mystic",
    effect:
      "{Solo}. This Axie's Debuff Abilities apply {Doubt} for 2 turns then deal <Pure DMG> equal to (3 + total debuff stacks and debuff turns on the target) to all enemy Axies (cap at 20 DMG).",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_paralyzing_glare.png",
    season: "Season 4",
  },
  {
    id: 561,
    tokenId: 0,
    itemId: "rune_reptile_4011_s3",
    name: "Paralyzing Glare",
    class: "Reptile",
    isBlockchain: 0,
    rarity: "Mystic",
    effect:
      "{Solo}. This Axie's Debuff Abilities apply {Doubt} for 2 turns then deal <Pure DMG> equal to (3 + total debuff stacks and debuff turns on the target) to all enemy Axies (cap at 20 DMG).",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_paralyzing_glare.png",
    season: "Season 3",
  },
  {
    id: 808,
    tokenId: 0,
    itemId: "rune_reptile_4011_s4",
    name: "Paralyzing Glare",
    class: "Reptile",
    isBlockchain: 0,
    rarity: "Mystic",
    effect:
      "{Solo}. This Axie's Debuff Abilities apply {Doubt} for 2 turns then deal <Pure DMG> equal to (3 + total debuff stacks and debuff turns on the target) to all enemy Axies (cap at 20 DMG).",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_paralyzing_glare.png",
    season: "Season 4",
  },
  {
    id: 620,
    tokenId: 0,
    itemId: "rune_reptile_4010_s3_nondec",
    name: "Regenerator",
    class: "Reptile",
    isBlockchain: 0,
    rarity: "Mystic",
    effect:
      "{Solo}. When your turn start, <Cleanse> this Axie 1 time. If its HP > 75%, <Cleanse> 1 more time, otherwise, heal 10% of its max HP.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_reptile_utility_1.png",
    season: "Season 3",
  },
  {
    id: 807,
    tokenId: 0,
    itemId: "rune_reptile_4010_s4_nondec",
    name: "Regenerator",
    class: "Reptile",
    isBlockchain: 0,
    rarity: "Mystic",
    effect:
      "{Solo}. When your turn start, <Cleanse> this Axie 1 time. If its HP > 75%, <Cleanse> 1 more time, otherwise, heal 10% of its max HP.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_reptile_utility_1.png",
    season: "Season 4",
  },
  {
    id: 861,
    tokenId: 0,
    itemId: "rune_reptile_4010_s4",
    name: "Regenerator",
    class: "Reptile",
    isBlockchain: 0,
    rarity: "Mystic",
    effect:
      "{Solo}. When your turn start, <Cleanse> this Axie 1 time. If its HP > 75%, <Cleanse> 1 more time, otherwise, heal 10% of its max HP.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_reptile_utility_1.png",
    season: "Season 4",
  },
  {
    id: 120,
    tokenId: 0,
    itemId: "rune_reptile_utility_1",
    name: "Regenerator",
    class: "Reptile",
    isBlockchain: 0,
    rarity: "Mystic",
    effect:
      "{Solo}. When your turn start, {Cleanse} 2 random debuffs if HP is above 75% or recover 10% of max HP if not.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_reptile_utility_1.png",
    season: "Season Alpha",
  },
  {
    id: 121,
    tokenId: 0,
    itemId: "rune_reptile_4001_s0",
    name: "Regenerator",
    class: "Reptile",
    isBlockchain: 0,
    rarity: "Mystic",
    effect:
      "{Solo}. When your turn start, {Cleanse} 2 random debuffs if HP is above 75% or recover 10% of max HP if not.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_reptile_utility_1.png",
    season: "Season 0",
  },
  {
    id: 161,
    tokenId: 0,
    itemId: "rune_reptile_4001_s1",
    name: "Regenerator",
    class: "Reptile",
    isBlockchain: 0,
    rarity: "Mystic",
    effect:
      "{Solo}. When your turn starts, {Cleanse} this Axie 1 time.\nIf this Axie's HP is above 75%, {Cleanse} 1 additional time. If not, recover 10% of its max HP.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_reptile_utility_1.png",
    season: "Season 1",
  },
  {
    id: 326,
    tokenId: 0,
    itemId: "rune_reptile_4010_s2",
    name: "Regenerator",
    class: "Reptile",
    isBlockchain: 0,
    rarity: "Mystic",
    effect:
      "{Solo}. When your turn start, <Cleanse> this Axie 1 time. If its HP > 75%, <Cleanse> 1 more time, otherwise, heal 10% of its max HP.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_reptile_utility_1.png",
    season: "Season 2",
  },
  {
    id: 414,
    tokenId: 0,
    itemId: "rune_reptile_4010_s2_nondec",
    name: "Regenerator",
    class: "Reptile",
    isBlockchain: 0,
    rarity: "Mystic",
    effect:
      "{Solo}. When your turn start, <Cleanse> this Axie 1 time. If its HP > 75%, <Cleanse> 1 more time, otherwise, heal 10% of its max HP.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_reptile_utility_1.png",
    season: "Season 2",
  },
  {
    id: 531,
    tokenId: 0,
    itemId: "rune_reptile_4010_s3",
    name: "Regenerator",
    class: "Reptile",
    isBlockchain: 0,
    rarity: "Mystic",
    effect:
      "{Solo}. When your turn start, <Cleanse> this Axie 1 time. If its HP > 75%, <Cleanse> 1 more time, otherwise, heal 10% of its max HP.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_reptile_utility_1.png",
    season: "Season 3",
  },
  {
    id: 399,
    tokenId: 0,
    itemId: "rune_reptile_4010_s1",
    name: "Regenerator (S1.5)",
    class: "Reptile",
    isBlockchain: 0,
    rarity: "Mystic",
    effect:
      "{Solo}. When your turn start, <Cleanse> this Axie 1 time. If its HP > 75%, <Cleanse> 1 more time, otherwise, heal 10% of its max HP.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_reptile_utility_1.png",
    season: "Season 1",
  },
  {
    id: 28,
    tokenId: 0,
    itemId: "rune_reptile_defensive_1",
    name: "Delayed Protection",
    class: "Reptile",
    isBlockchain: 0,
    rarity: "Rare",
    effect:
      "When your turn starts, gain 12 Shield for each attack this Axie took in the previous turn.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_reptile_defensive_1.png",
    season: "Season Alpha",
  },
  {
    id: 103,
    tokenId: 0,
    itemId: "rune_reptile_2001_s0",
    name: "Delayed Protection",
    class: "Reptile",
    isBlockchain: 0,
    rarity: "Rare",
    effect:
      "When your turn starts, gain 12 Shield for each attack this Axie took in the previous turn.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_reptile_defensive_1.png",
    season: "Season 0",
  },
  {
    id: 598,
    tokenId: 0,
    itemId: "rune_reptile_2011_s3",
    name: "Poison Touch",
    class: "Reptile",
    isBlockchain: 0,
    rarity: "Rare",
    effect:
      "When this Axie gets hit, apply 1 {Poison} to the attacker. The Axie also takes 1% less DMG for each {Poison} stack on the attacker. Max at 15%.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_reptile_hybrid_1.png",
    season: "Season 3",
  },
  {
    id: 642,
    tokenId: 0,
    itemId: "rune_reptile_2011_s3_nondec",
    name: "Poison Touch",
    class: "Reptile",
    isBlockchain: 0,
    rarity: "Rare",
    effect:
      "When this Axie gets hit, apply 1 {Poison} to the attacker. The Axie also takes 1% less DMG for each {Poison} stack on the attacker. Max at 15%.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_reptile_hybrid_1.png",
    season: "Season 3",
  },
  {
    id: 875,
    tokenId: 0,
    itemId: "rune_reptile_2011_s4",
    name: "Poison Touch",
    class: "Reptile",
    isBlockchain: 0,
    rarity: "Rare",
    effect:
      "When this Axie gets hit, apply 1 {Poison} to the attacker. The Axie also takes 1% less DMG for each {Poison} stack on the attacker. Max at 15%.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_reptile_hybrid_1.png",
    season: "Season 4",
  },
  {
    id: 949,
    tokenId: 0,
    itemId: "rune_reptile_2011_s4_nondec",
    name: "Poison Touch",
    class: "Reptile",
    isBlockchain: 0,
    rarity: "Rare",
    effect:
      "When this Axie gets hit, apply 1 {Poison} to the attacker. The Axie also takes 1% less DMG for each {Poison} stack on the attacker. Max at 15%.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_reptile_hybrid_1.png",
    season: "Season 4",
  },
  {
    id: 174,
    tokenId: 0,
    itemId: "rune_reptile_2001_s1",
    name: "Shellshock",
    class: "Reptile",
    isBlockchain: 0,
    rarity: "Rare",
    effect:
      "When a Secret on any ally triggered, deal 10 <Pure DMG> to a random enemy Axie, then this Axie heal 10 HP. (revealed Shield isn't a triggered Secret)",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_reptile_defensive_1.png",
    season: "Season 1",
  },
  {
    id: 411,
    tokenId: 0,
    itemId: "rune_reptile_2012_s2",
    name: "Shellshock",
    class: "Reptile",
    isBlockchain: 0,
    rarity: "Rare",
    effect:
      "When a Secret on any ally triggered, deal 10 <Pure DMG> to a random enemy Axie, then heal 10 HP to this Axie. (revealed Shield isn't a triggered Secret)",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_reptile_defensive_1.png",
    season: "Season 2",
  },
  {
    id: 412,
    tokenId: 0,
    itemId: "rune_reptile_2012_s2_nondec",
    name: "Shellshock",
    class: "Reptile",
    isBlockchain: 0,
    rarity: "Rare",
    effect:
      "When a Secret on any ally triggered, deal 10 <Pure DMG> to a random enemy Axie, then heal 10 HP to this Axie. (revealed Shield isn't a triggered Secret)",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_reptile_defensive_1.png",
    season: "Season 2",
  },
  {
    id: 325,
    tokenId: 0,
    itemId: "rune_reptile_2012_s1",
    name: "Shellshock (S1.5)",
    class: "Reptile",
    isBlockchain: 0,
    rarity: "Rare",
    effect:
      "When a Secret on any ally triggered, deal 10 <Pure DMG> to a random enemy Axie, then heal 10 HP to this Axie. (revealed Shield isn't a triggered Secret)",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_reptile_defensive_1.png",
    season: "Season 1",
  },
  {
    id: 17,
    tokenId: 0,
    itemId: "rune_reptile_offensive_1",
    name: "Venom Master",
    class: "Reptile",
    isBlockchain: 0,
    rarity: "Rare",
    effect:
      "Attack cards apply 1 additional {Poison}.\nNon- Multihit Attacks deal 1 bonus DMG per 2 {Poison} on target.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_reptile_offensive_1.png",
    season: "Season Alpha",
  },
  {
    id: 123,
    tokenId: 0,
    itemId: "rune_reptile_2002_s0",
    name: "Venom Master",
    class: "Reptile",
    isBlockchain: 0,
    rarity: "Rare",
    effect:
      "Attack cards apply 1 additional {Poison}.\nNon- Multihit Attacks deal 1 bonus DMG per 2 {Poison} on target.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_reptile_offensive_1.png",
    season: "Season 0",
  },
  {
    id: 207,
    tokenId: 0,
    itemId: "rune_reptile_2002_s1",
    name: "Venom Master",
    class: "Reptile",
    isBlockchain: 0,
    rarity: "Rare",
    effect: "Single Attacks apply 2 {Poison} but deal 25% less DMG.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_reptile_offensive_1.png",
    season: "Season 1",
  },
  {
    id: 395,
    tokenId: 0,
    itemId: "rune_reptile_2011_s2",
    name: "Venom Master",
    class: "Reptile",
    isBlockchain: 0,
    rarity: "Rare",
    effect:
      "This Axie's Single Attacks apply 2 {Poison} but deal 25% less DMG.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_reptile_offensive_1.png",
    season: "Season 2",
  },
  {
    id: 405,
    tokenId: 0,
    itemId: "rune_reptile_2011_s2_nondec",
    name: "Venom Master",
    class: "Reptile",
    isBlockchain: 0,
    rarity: "Rare",
    effect:
      "This Axie's Single Attacks apply 2 {Poison} but deal 25% less DMG.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_reptile_offensive_1.png",
    season: "Season 2",
  },
  {
    id: 380,
    tokenId: 0,
    itemId: "rune_reptile_2011_s1",
    name: "Venom Master (S1.5)",
    class: "Reptile",
    isBlockchain: 0,
    rarity: "Rare",
    effect:
      "This Axie's Single Attacks apply 2 {Poison} but deal 25% less DMG.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_reptile_offensive_1.png",
    season: "Season 1",
  },
  {
    id: 291,
    tokenId: 0,
    itemId: "rune_reptile_2010_s2",
    name: "Way of Reptile",
    class: "Reptile",
    isBlockchain: 0,
    rarity: "Rare",
    effect:
      "When the battle starts, this Axie gains 2 {Spike}, then for the rest of the battle, when your turn ends, it heals HP = 3% of its max HP.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_way_of_reptile.png",
    season: "Season 2",
  },
  {
    id: 369,
    tokenId: 0,
    itemId: "rune_reptile_2010_s2_nondec",
    name: "Way of Reptile",
    class: "Reptile",
    isBlockchain: 0,
    rarity: "Rare",
    effect:
      "When the battle starts, this Axie gains 2 {Spike}, then for the rest of the battle, when your turn ends, it heals HP = 3% of its max HP.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_way_of_reptile.png",
    season: "Season 2",
  },
  {
    id: 560,
    tokenId: 0,
    itemId: "rune_reptile_2010_s3",
    name: "Way of Reptile",
    class: "Reptile",
    isBlockchain: 0,
    rarity: "Rare",
    effect:
      "When the battle starts, this Axie gains 2 {Spike}s. When your turn ends, this Axie heals HP = 5% of its max HP.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_way_of_reptile.png",
    season: "Season 3",
  },
  {
    id: 737,
    tokenId: 0,
    itemId: "rune_reptile_2010_s3_nondec",
    name: "Way of Reptile",
    class: "Reptile",
    isBlockchain: 0,
    rarity: "Rare",
    effect:
      "When the battle starts, this Axie gains 2 {Spike}s. When your turn ends, this Axie heals HP = 5% of its max HP.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_way_of_reptile.png",
    season: "Season 3",
  },
  {
    id: 755,
    tokenId: 0,
    itemId: "rune_reptile_2010_s4_nondec",
    name: "Way of Reptile",
    class: "Reptile",
    isBlockchain: 0,
    rarity: "Rare",
    effect:
      "When the battle starts, this Axie gains 2 {Spike}s. When your turn ends, this Axie heals HP = 5% of its max HP.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_way_of_reptile.png",
    season: "Season 4",
  },
  {
    id: 961,
    tokenId: 0,
    itemId: "rune_reptile_2010_s4",
    name: "Way of Reptile",
    class: "Reptile",
    isBlockchain: 0,
    rarity: "Rare",
    effect:
      "When the battle starts, this Axie gains 2 {Spike}s. When your turn ends, this Axie heals HP = 5% of its max HP.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_way_of_reptile.png",
    season: "Season 4",
  },
  {
    id: 468,
    tokenId: 0,
    itemId: "rune_reptile_2010_s1",
    name: "Way of Reptile (S1.5)",
    class: "Reptile",
    isBlockchain: 0,
    rarity: "Rare",
    effect:
      "When the battle starts, this Axie gains 2 {Spike}, then for the rest of the battle, when your turn ends, it heals HP = 3% of its max HP.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_way_of_reptile.png",
    season: "Season 1",
  },
  {
    id: 43,
    tokenId: 1000003,
    itemId: "rune_aquatic_3001_s0_nft",
    name: "Bloodlust",
    class: "Aquatic",
    isBlockchain: 1,
    rarity: "Epic",
    effect:
      "Single attacks {Steal} 12 HP. AoE and Multihit attacks {Steal} 3 HP per hit.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_aquatic_hybrid_1.png",
    season: "Season 0",
  },
  {
    id: 130,
    tokenId: 1001003,
    itemId: "rune_aquatic_3001_s1_nft",
    name: "Bloodlust",
    class: "Aquatic",
    isBlockchain: 1,
    rarity: "Epic",
    effect:
      "Attacks that cause HP loss will {Steal}s HP. Single attacks {Steal}s 12 HP. AoE and Multihit attacks {Steal}s 4 HP per hit.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_aquatic_hybrid_1.png",
    season: "Season 1",
  },
  {
    id: 226,
    tokenId: null,
    itemId: "",
    name: "Calcium Armor",
    class: "Aquatic",
    isBlockchain: 1,
    rarity: "Epic",
    effect:
      "{Solo}. When your turn starts, this Axie gains Shield equal to 10% of its max HP.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_aquatic_defensive_1.png",
    season: "Season 2",
  },
  {
    id: 361,
    tokenId: 1002034,
    itemId: "rune_aquatic_3010_s2_nft",
    name: "Calcium Armor",
    class: "Aquatic",
    isBlockchain: 1,
    rarity: "Epic",
    effect:
      "{Solo}. When your turn starts, this Axie gains Shield = 10% of its max HP.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_aquatic_defensive_1.png",
    season: "Season 2",
  },
  {
    id: 661,
    tokenId: 1003039,
    itemId: "rune_aquatic_3011_s3_nft",
    name: "Calcium Armor",
    class: "Aquatic",
    isBlockchain: 1,
    rarity: "Epic",
    effect:
      "{Solo}. When your turn starts, this Axie gains Shield = 10% of its max HP.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_aquatic_defensive_1.png",
    season: "Season 3",
  },
  {
    id: 816,
    tokenId: 1004039,
    itemId: "rune_aquatic_3011_s4_nft",
    name: "Calcium Armor",
    class: "Aquatic",
    isBlockchain: 1,
    rarity: "Epic",
    effect:
      "{Solo}. When your turn starts, this Axie gains Shield = 10% of its max HP.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_aquatic_defensive_1.png",
    season: "Season 4",
  },
  {
    id: 700,
    tokenId: 1003040,
    itemId: "rune_aquatic_3012_s3_nft",
    name: "Giant Bubble",
    class: "Aquatic",
    isBlockchain: 1,
    rarity: "Epic",
    effect:
      "{Solo}. Before the battle starts, add 1 [Giant Bubble] to your Deck.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_giant_bubble.png",
    season: "Season 3",
  },
  {
    id: 907,
    tokenId: 1004040,
    itemId: "rune_aquatic_3012_s4_nft",
    name: "Giant Bubble",
    class: "Aquatic",
    isBlockchain: 1,
    rarity: "Epic",
    effect:
      "{Solo}. Before the battle starts, add 1 [Giant Bubble] to your Deck.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_giant_bubble.png",
    season: "Season 4",
  },
  {
    id: 227,
    tokenId: null,
    itemId: "",
    name: "Giant Bubble",
    class: "Aquatic",
    isBlockchain: 1,
    rarity: "Epic",
    effect:
      "{Solo}. When the battle starts, shuffle <Giant Bubble> into your Draw Pile.",
    image:
      "https://lh3.googleusercontent.com/JQUGFHFX4xjbtOuV4le-Tn6YR7bOqHF4eR5r1WWpKFH07-XjPi7QpCKuKxNhCWQFEjLdHx5tkN2N237bR4nBgk4srytQq5hEt1qlaC6gaofudwpAg-sK-iiukze1gy_yP6PhGg0uEIVR14_itVIi3DLQK-umODd_BprPF6OApuVa9KdH5vHwxESjCKveHRJw7IaSADmK4JjVfHIEbyyTq5WnpsdMQq1_7QR0NJFUwa2SwPfdpLYAXdrsprOI3vDew6mf1_pwrC95fP2pilq1yd-kk8qI6YDJr9LpjUBkdtKjf_zFAhIY2bjDrYrc7i_GZzK7nmmJeIpvDDL5pMCgABQwZA2lqh8HDzgG7gv8qnq6YVjvBZcY_zms6gy5lSlvEvCHz_fBi5BLW5_2FbHYT3t16-Na0GtPY1uefxpim9hiyaw2E8nRROzynCnNsxm27nC_hCeadeC2xyC-asbZkAlHFPR9FcG8poQjt70daQ3m1UD-sfhlICE5PXVq1_cvFIbHRwDU7ru7H7Hr8JDv_WROR-JwXuy4I-6Sma0zSoMekF9deassAOm1K9mk9lgQxcQiwCq5o1Oc6b2qFpZIpyfpRJZF6-uvqhTXsjV_DABZZ127BQwe2h2QhM5fkV3U--lEMoxfGNVZ-keXYbfaly2moeD3QByAtJP8J_1Qt8Yvu2jo61-DBgn4J3RnM1FY02LYlh0h4TZJyacjrvxGBwL-NmCq6kXg-z9RZubswG6-xGS2AnoUeby0ESHlnUSVMMuYRwXinU8SRWtc8UQ3WJoduyLcrLGTgLwo6_la2r_0ZNv1VMt45J0VGUF2crfIJFTetdbMOKJX4E9CTmOo68oHcPrZpFICoX5jebSuSTt1CxpzLBGca5fjrA_farnKfec_TdiDzFrgZtVrqr4a7Docf6pIy_d0Vagi7k8NG0P7=w217-h232-no?authuser=0",
    season: "Season 2",
  },
  {
    id: 510,
    tokenId: 1002035,
    itemId: "rune_aquatic_3011_s2_nft",
    name: "Giant Bubble",
    class: "Aquatic",
    isBlockchain: 1,
    rarity: "Epic",
    effect:
      "{Solo}. Before the battle starts, add 1 [Giant Bubble] to your Deck.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_giant_bubble.png",
    season: "Season 2",
  },
  {
    id: 608,
    tokenId: 1003038,
    itemId: "rune_aquatic_3010_s3_nft",
    name: "Hearty Warrior",
    class: "Aquatic",
    isBlockchain: 1,
    rarity: "Epic",
    effect:
      "{Solo}. This Axie's Attack deal 25% bonus DMG if the target's HP is >= 50%; otherwise, deal 15% bonus DMG.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_aquatic_offensive_1.png",
    season: "Season 3",
  },
  {
    id: 756,
    tokenId: 1004038,
    itemId: "rune_aquatic_3010_s4_nft",
    name: "Hearty Warrior",
    class: "Aquatic",
    isBlockchain: 1,
    rarity: "Epic",
    effect:
      "{Solo}. This Axie's Attack deal 25% bonus DMG if the target's HP is >= 50%; otherwise, deal 15% bonus DMG.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_aquatic_offensive_1.png",
    season: "Season 4",
  },
  {
    id: 727,
    tokenId: 1003042,
    itemId: "rune_aquatic_4011_s3_nft",
    name: "Bloodlust",
    class: "Aquatic",
    isBlockchain: 1,
    rarity: "Mystic",
    effect:
      "{Solo}. This Axie's Single Attacks Steal 15 HP.\nThis Axie's AOE and Multihit Attacks Steal 5 HP per hit. ",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_aquatic_hybrid_1.png",
    season: "Season 3",
  },
  {
    id: 758,
    tokenId: 1004042,
    itemId: "rune_aquatic_4011_s4_nft",
    name: "Bloodlust",
    class: "Aquatic",
    isBlockchain: 1,
    rarity: "Mystic",
    effect:
      "{Solo}. This Axie's Single Attacks Steal 15 HP.\nThis Axie's AOE and Multihit Attacks Steal 5 HP per hit. ",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_aquatic_hybrid_1.png",
    season: "Season 4",
  },
  {
    id: 691,
    tokenId: 1003041,
    itemId: "rune_aquatic_4010_s3_nft",
    name: "Heart of Ocean",
    class: "Aquatic",
    isBlockchain: 1,
    rarity: "Mystic",
    effect:
      "{Solo}. When your turn starts, this Axie gains 1 {Bubble}. {Bubble Bomb} detonated by this Axie deal 50% bonus DMG.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_aquatic_utility_1.png",
    season: "Season 3",
  },
  {
    id: 804,
    tokenId: 1004041,
    itemId: "rune_aquatic_4010_s4_nft",
    name: "Heart of Ocean",
    class: "Aquatic",
    isBlockchain: 1,
    rarity: "Mystic",
    effect:
      "{Solo}. When your turn starts, this Axie gains 1 {Bubble}. {Bubble Bomb} detonated by this Axie deal 50% bonus DMG.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_aquatic_utility_1.png",
    season: "Season 4",
  },
  {
    id: 125,
    tokenId: 1000004,
    itemId: "rune_aquatic_4001_s0_nft",
    name: "Heart of Ocean",
    class: "Aquatic",
    isBlockchain: 1,
    rarity: "Mystic",
    effect:
      "{Solo}. When your turn starts, this Axie gains 1 {Bubble}. {Bubble Bomb} detonated by this Axie deal x1.5 DMG.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_aquatic_utility_1.png",
    season: "Season 0",
  },
  {
    id: 131,
    tokenId: 1001004,
    itemId: "rune_aquatic_4001_s1_nft",
    name: "Heart of Ocean",
    class: "Aquatic",
    isBlockchain: 1,
    rarity: "Mystic",
    effect:
      "{Solo}. When your turn starts, this Axie gains 1 {Bubble}. {Bubble Bomb} detonated by this Axie deal x1.5 DMG.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_aquatic_utility_1.png",
    season: "Season 1",
  },
  {
    id: 228,
    tokenId: null,
    itemId: "",
    name: "Heart of Ocean",
    class: "Aquatic",
    isBlockchain: 1,
    rarity: "mystic",
    effect:
      "{Solo}. When your turn starts, this Axie gains 1 {Bubble}. {Bubble Bomb} detonated by this Axie deals x1.5 DMG.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_aquatic_utility_1.png",
    season: "Season 2",
  },
  {
    id: 319,
    tokenId: 1002036,
    itemId: "rune_aquatic_4010_s2_nft",
    name: "Heart of Ocean",
    class: "Aquatic",
    isBlockchain: 1,
    rarity: "Mystic",
    effect:
      "{Solo}. When your turn starts, this Axie gains 1 {Bubble}. {Bubble Bomb} detonated by this Axie deal 50% bonus DMG.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_aquatic_utility_1.png",
    season: "Season 2",
  },
  {
    id: 225,
    tokenId: null,
    itemId: "",
    name: "Blunt Teeth",
    class: "Aquatic",
    isBlockchain: 1,
    rarity: "Rare",
    effect:
      "This Axie's Attack cards deal 30% less DMG but grant 1 bonus Energy Fragment per Energy Cost.",
    image:
      "https://lh3.googleusercontent.com/RBbBBb738IXSBoUY0shenc8T5l-GLuLl7EUTyHCIy4TOtgkxbUlVki5BlOSv4IGFvTYYr5xoMwKU1Rss1HW6YXKfgQq7D4EXNdGHpGeENhDWbOo0Lq4MkefbpPMdCmmrPJZpcPl-HEjW97hCCHx5nHlK1QM_-BEEmSZ0VImGpUYZ-t44CttMx-zYOrGWC3kRC3BwaGahMYkxoUAjWMfj8YT8rztWBGxH5tjlxLATqkE0avtWqve-okBGOjUL90xSIacbqMD7kXnPCg2QlZlofUkfWZzRs4gX7CsxZE0IOGj4Mrfimyo_ZMSQwsOqTUaaHnyiqoSwQP5f84E8udYDiphpYKxc17grmDFHF0LJT5L08l7-MlQDba5KDM2aLjQpCAcUTUSZdM4Tc62PWO5D6xbtTnGRQIWbjIC9rj2JAJcmB_84z-rmoGJJofGw9b91zSsDNyoM9re0u_8TKlp34qUkBPlK6tyBh4P-9h7aPWFkGvMS9UHZvMEfDpsArlh1RhbxjgFU0KvPKJdebY1egYXuLbeHP187Zr6REovXQGMZMA4Qm_kwCY3dfTXqn4Bt2ue2euAFEVSXjB17nsA_XkshP0S2bA_IdUPLeeHn4ZqhMCfTjMEtInaRx6U0Mm3Ld_ozEV3ElmUur8rm0Rog07-_J5bYzv3skuDK03x8quAENlFQYHFD65YsT2Dg6wFvLYKX8psj6HXXNMAPRmEsPLaHUTbrjOcQ0jiny-yXARuBU3bJtthJqmzfvkHNw7eQzcsoEtyCUyiGqGMtuVt80SS39eyW54yP6uxPQ5Jbimw1whaOecH1H-vLGXCvPIVZIplOVF-Fm8zXXiA9SkR1lSLPDsS6Xlry88WugKkNgQbR_4jmwJi4VTU1B2_qrJQNlc4jbVbwNno5fn9sgkbe_8kHAIeKBT2_HUqxuwE0b3vK=w217-h232-no?authuser=0",
    season: "Season 2",
  },
  {
    id: 502,
    tokenId: 1002033,
    itemId: "rune_aquatic_2012_s2_nft",
    name: "Blunt Teeth",
    class: "Aquatic",
    isBlockchain: 1,
    rarity: "Rare",
    effect:
      "This Axie's Attack cards deal 30% less DMG but grant 1 bonus <Energy Fragment> per their Energy cost.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_blunt_teeth.png",
    season: "Season 2",
  },
  {
    id: 645,
    tokenId: 1003037,
    itemId: "rune_aquatic_2011_s3_nft",
    name: "Blunt Teeth",
    class: "Aquatic",
    isBlockchain: 1,
    rarity: "Rare",
    effect:
      "This Axie's Attack cards deal 15% less DMG but grant 1 bonus <Energy Fragment> per Energy spent.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_blunt_teeth.png",
    season: "Season 3",
  },
  {
    id: 827,
    tokenId: 1004037,
    itemId: "rune_aquatic_2011_s4_nft",
    name: "Blunt Teeth",
    class: "Aquatic",
    isBlockchain: 1,
    rarity: "Rare",
    effect:
      "This Axie's Attack cards deal 15% less DMG but grant 1 bonus <Energy Fragment> per Energy spent.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_blunt_teeth.png",
    season: "Season 4",
  },
  {
    id: 16,
    tokenId: 1000001,
    itemId: "rune_aquatic_2001_s0_nft",
    name: "Calcium Armor",
    class: "Aquatic",
    isBlockchain: 1,
    rarity: "Rare",
    effect: "At the beginning of your turn, gain Shield equal to 4% of max HP.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_aquatic_defensive_1.png",
    season: "Season 0",
  },
  {
    id: 160,
    tokenId: 1001001,
    itemId: "rune_aquatic_2001_s1_nft",
    name: "Calcium Armor",
    class: "Aquatic",
    isBlockchain: 1,
    rarity: "Rare",
    effect:
      "{Solo}. At the begining of your turn, gain Shield equal 10% max HP.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_aquatic_defensive_1.png",
    season: "Season 1",
  },
  {
    id: 49,
    tokenId: 1000002,
    itemId: "rune_aquatic_2002_s0_nft",
    name: "Hearty Warrior",
    class: "Aquatic",
    isBlockchain: 1,
    rarity: "Rare",
    effect:
      "Single attacks attack deal bonus DMG equal to 5% of remaining HP. AoE and multihit attacks deal bonus DMG equal to 3% of remaining HP.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_aquatic_offensive_1.png",
    season: "Season 0",
  },
  {
    id: 162,
    tokenId: 1001002,
    itemId: "rune_aquatic_2002_s1_nft",
    name: "Hearty Warrior",
    class: "Aquatic",
    isBlockchain: 1,
    rarity: "Rare",
    effect: "This Axie deals 25% bonus DMG if the target's HP is above 60%.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_aquatic_offensive_1.png",
    season: "Season 1",
  },
  {
    id: 224,
    tokenId: null,
    itemId: "",
    name: "Hearty Warrior",
    class: "Aquatic",
    isBlockchain: 1,
    rarity: "Rare",
    effect: "This Axie deals 25% bonus DMG if the target's HP is above 60%.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_aquatic_offensive_1.png",
    season: "Season 2",
  },
  {
    id: 372,
    tokenId: 1002032,
    itemId: "rune_aquatic_2011_s2_nft",
    name: "Hearty Warrior",
    class: "Aquatic",
    isBlockchain: 1,
    rarity: "Rare",
    effect: "This Axie deals 25% bonus DMG if its target's HP is > 60%.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_aquatic_offensive_1.png",
    season: "Season 2",
  },
  {
    id: 223,
    tokenId: null,
    itemId: "",
    name: "Way of Aqua",
    class: "Aquatic",
    isBlockchain: 1,
    rarity: "Rare",
    effect:
      "When the battle starts, this Axie gains 1 {Bubble}. This Axie's Attack cards deal 10% bonus DMG.",
    image:
      "https://lh3.googleusercontent.com/0E3qP3QkoA5hK0xkmIzhUtm6MfPLtJ1WcJOPdTWXcxl0E7E0OQk38KJwkQ-8z1WhBlDFoYhZSfHNcxoIQHAfqLUkU-b_Xaz-x_BVh7gtJvUpnPQu6mnHlPFKZVOvyah_ZM62aaXcASnYlEKG6zV8FncZsU2Q50lerspIJskz282XlCz6NDiFNYVYcAvv_D8ticnJcSmSW7shyW9o02IV-C0t7ALBj7qt9zE1jsBm0Piig627jVxhB0hQKVquh79SNgIEyL0KFOtxhh8yqS3-ab-kwFioXdCdsoxqL-a4N6gEyEHNQchbIjhvnq_U2Kda_ktbkXwMZk7chgXt1zeRTkpV_ONYjoS3vAwIU2UwSjMI7Q_OrM8Wsku-xCthptjiBjTDE5axoBDcmP3-TW7XAFMGEFRwRgi7napeAUSz4kG1EZsOB4hBzBIwpJd2ck9oZEvZsQ9Ecvgj-_1IJ25wChSknV2A7X7FaeZujPlZ4kUPlucmYu401H139xGbRAEmSxhyRviRgdUG7HsvtIh7EBG2K-ILZ_aKW2r3OOTVq8oigdWRwzVhqUZfRDxYTY4evOaQNNfUxC2DrYCjr1ht2toZ1xgWIVNURe6LhLdlRNNDhgIYbjNEJaLiDdvpSqhXAbkJIaH_09eSlWNpa1SqWxgiKoXUgBZjSTrXN7AHL_hV30IjVRqYlHCdwJ2TaIPeaGPi2kvV071rne8XoIVZ6uaIuzVZyv_T2KmUJSN563Fys0rQ6uiGqUbhdLt8q7v0GFD-lvCnCmDcVaDfMhgpSqN6urVhvB-MvReLmUCzNe-dEdFRerIPOIslXjmDLbBpm4yIhaNA_ZsIogI3bhlt8ke1hAS0zijx992vWx2KbfHGE86JADcT8MlKUUs9DMt-uzsK8-FOlfGHX57mnRv3cUWjgQ9UUvUu4S1NUW6_bNhf=w218-h232-no?authuser=0",
    season: "Season 2",
  },
  {
    id: 356,
    tokenId: 1002031,
    itemId: "rune_aquatic_2010_s2_nft",
    name: "Way of Aquatic",
    class: "Aquatic",
    isBlockchain: 1,
    rarity: "Rare",
    effect:
      "When the battle starts, this Axie gains 1 {Bubble}, then its Attacks deal 10% bonus DMG for the rest of the battle.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_way_of_aquatic.png",
    season: "Season 2",
  },
  {
    id: 698,
    tokenId: 1003036,
    itemId: "rune_aquatic_2010_s3_nft",
    name: "Way of Aquatic",
    class: "Aquatic",
    isBlockchain: 1,
    rarity: "Rare",
    effect:
      "When the battle starts, this Axie gains 1 {Bubble}. This Axie's Attack cards deal 15% bonus DMG.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_way_of_aquatic.png",
    season: "Season 3",
  },
  {
    id: 852,
    tokenId: 1004036,
    itemId: "rune_aquatic_2010_s4_nft",
    name: "Way of Aquatic",
    class: "Aquatic",
    isBlockchain: 1,
    rarity: "Rare",
    effect:
      "When the battle starts, this Axie gains 1 {Bubble}. This Axie's Attack cards deal 15% bonus DMG.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_way_of_aquatic.png",
    season: "Season 4",
  },
  {
    id: 44,
    tokenId: 1000007,
    itemId: "rune_beast_3001_s0_nft",
    name: "Dominant Predator",
    class: "Beast",
    isBlockchain: 1,
    rarity: "Epic",
    effect:
      "Single attacks apply {Bleed} for 2 turns if target doesn't have {Bleed} and this Axie's HP is above 75%. Deal 20% more DMG against Bleeding Enemies.\nTake 10% less DMG from Bleeding Enemies",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_beast_hybrid_1.png",
    season: "Season 0",
  },
  {
    id: 159,
    tokenId: 1001007,
    itemId: "rune_beast_3001_s1_nft",
    name: "Dominant Predator",
    class: "Beast",
    isBlockchain: 1,
    rarity: "Epic",
    effect:
      "Single attacks apply {Bleed} for 2 turns if the target doesn't have {Bleed}. Attacks against bleeding enemies deal 10% more DMG and recover 15 HP after all hit.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_beast_hybrid_1.png",
    season: "Season 1",
  },
  {
    id: 239,
    tokenId: null,
    itemId: "",
    name: "Glorious Mane",
    class: "Beast",
    isBlockchain: 1,
    rarity: "Epic",
    effect:
      "{Solo}. When played, this Axie's Single Attack cards no longer grant {Energy Fragment}s but gain 5 permanent DMG instead.",
    image:
      "https://lh3.googleusercontent.com/PKYu55VK6E0StVoqtBs3nxYy7FaHzuJhSjkOEPuhAA0dXzpYjpkWfP4-zyju4hOhqsEAQpn__lKG3gPh-HXPAYwg9912roIISu_C9NkeUuTgcBILNRTDoomG8ikN4lN8Q5MXaYfJAK2CjuJeCosblah1KcLuQC7mgWIv2spPuEya3nq8dBKMGHqAXH6IW_wkBKyuBUzeLddPmuX_pd-hk3x79xYzDO0mz2ZC5oAsdyhbEkf60ScBZSFmkVt9XJDNxhRduc6ROVmEWE8gqPUDVXYtKEd3LZR2s97QSJyRU0MuJv_35KxqepYEnth1onKApZoyg49ATLG0Yt9GqFqL5CAMrHr5GAH9sVLOi2GGrXVyjBqX7urFMdCZLk26atfRph3GHiqdkrsOKoldJq1O2CUa2lFg0tFw5Ttv5_Dak1o5tIES0Qlh3FHwenL8l0ESr3XqE3SegY0Ok8DsJadbNRtpq8Op1UnStzgEXyF9QTs9fniG8e4LVGYWr0LT3Bv1EZfbg3h81WdmN2tvd6mkOkPQcd8sm9O6mU8bu38hGpKTHzLzO11bkfF7jYHSrTVav19bjW0UbjKGpwLulh0JcrvePlIjTi_c_gRzCv9eTvK2K4Li7uDFrF_BxxZ7QUjrt5APeei0qY7mEsRK_aX5834e0EH5NnDtAEyDVeyHdhKO5Ut9BHe2iYsn_WNB3HykBzrV069RvW1PabCx9TxbUnofLBXoCNbpKZRa1-a6hpB0lLkLa9Yjy78magISo30tZ-r37kGlZpqcaDsAxCV8fVgmgHCZgLiN6ef4OiF1vWgf5zAIVlfoNPrZAnZQm7-6RfTgC7wq4Q6fJzmUXKsh0M5teX9S3nl1JZkYbq9XejzNtOCnwsDKhUQtbKetx0ZD-fjXqONuSdYCwPSKTgR8vsRdjfDLxFExG56iTrpfu6K3=w216-h232-no?authuser=0",
    season: "Season 2",
  },
  {
    id: 346,
    tokenId: 1002011,
    itemId: "rune_beast_3011_s2_nft",
    name: "Glorious Mane",
    class: "Beast",
    isBlockchain: 1,
    rarity: "Epic",
    effect:
      "{Solo}. This Axie's Single Attacks no longer grant <Energy Fragment>, but gain a permanent 10 bonus DMG to itself when played.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_glorious_mane.png",
    season: "Season 2",
  },
  {
    id: 732,
    tokenId: 1003012,
    itemId: "rune_beast_3012_s3_nft",
    name: "Glorious Mane",
    class: "Beast",
    isBlockchain: 1,
    rarity: "Epic",
    effect:
      "{Solo}. This Axie's Attacks no longer grant <Energy Fragment>, but their base DMG is increased by 6% per Energy Spent whenever this Axie attacks.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_glorious_mane.png",
    season: "Season 3",
  },
  {
    id: 928,
    tokenId: 1004012,
    itemId: "rune_beast_3012_s4_nft",
    name: "Glorious Mane",
    class: "Beast",
    isBlockchain: 1,
    rarity: "Epic",
    effect:
      "{Solo}. This Axie's Attacks no longer grant <Energy Fragment>, but their base DMG is increased by 10% per Energy Spent whenever this Axie attacks.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_glorious_mane.png",
    season: "Season 4",
  },
  {
    id: 726,
    tokenId: 1003011,
    itemId: "rune_beast_3011_s3_nft",
    name: "Pangolin Scale",
    class: "Beast",
    isBlockchain: 1,
    rarity: "Epic",
    effect: "{Solo}. This Axie take 18% less DMG but cannot gain Shields.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_beast_defensive_1.png",
    season: "Season 3",
  },
  {
    id: 919,
    tokenId: 1004011,
    itemId: "rune_beast_3011_s4_nft",
    name: "Pangolin Scale",
    class: "Beast",
    isBlockchain: 1,
    rarity: "Epic",
    effect: "{Solo}. This Axie takes 20% less DMG but cannot gain Shields.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_beast_defensive_1.png",
    season: "Season 4",
  },
  {
    id: 240,
    tokenId: null,
    itemId: "",
    name: "Pangolin Scale",
    class: "Beast",
    isBlockchain: 1,
    rarity: "Epic",
    effect: "{Solo}. This Axie takes 15% less DMG but cannot gain Shields.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_beast_defensive_1.png",
    season: "Season 2",
  },
  {
    id: 390,
    tokenId: 1002010,
    itemId: "rune_beast_3010_s2_nft",
    name: "Pangolin Scale",
    class: "Beast",
    isBlockchain: 1,
    rarity: "Epic",
    effect: "{Solo}. This Axie take 15% less DMG but cannot gain Shields.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_beast_defensive_1.png",
    season: "Season 2",
  },
  {
    id: 611,
    tokenId: 1003010,
    itemId: "rune_beast_3010_s3_nft",
    name: "Reckless Hunter",
    class: "Beast",
    isBlockchain: 1,
    rarity: "Epic",
    effect: "{Solo} This Axie deals 25% bonus DMG but also takes 15% more DMG.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_beast_offensive_1.png",
    season: "Season 3",
  },
  {
    id: 926,
    tokenId: 1004010,
    itemId: "rune_beast_3010_s4_nft",
    name: "Reckless Hunter",
    class: "Beast",
    isBlockchain: 1,
    rarity: "Epic",
    effect: "{Solo} This Axie deals 25% bonus DMG but also takes 10% more DMG.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_beast_offensive_1.png",
    season: "Season 4",
  },
  {
    id: 675,
    tokenId: 1003014,
    itemId: "rune_beast_4011_s3_nft",
    name: "Brutal Claw",
    class: "Beast",
    isBlockchain: 1,
    rarity: "Mystic",
    effect:
      "{Solo}. Against targets with less than 6 {Bleed} turns, this Axie's Single and AOE Attacks double the {Bleed} turns on targets, otherwise, create <Bloodstorm>s.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_brutal_claw.png",
    season: "Season 3",
  },
  {
    id: 936,
    tokenId: 1004014,
    itemId: "rune_beast_4011_s4_nft",
    name: "Brutal Claw",
    class: "Beast",
    isBlockchain: 1,
    rarity: "Mystic",
    effect:
      "{Solo}. Against targets with less than 6 {Bleed} turns, this Axie's Single and AOE Attacks double the {Bleed} turns on targets, otherwise, create <Bloodstorm>s.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_brutal_claw.png",
    season: "Season 4",
  },
  {
    id: 670,
    tokenId: 1003013,
    itemId: "rune_beast_4010_s3_nft",
    name: "Endless Anger",
    class: "Beast",
    isBlockchain: 1,
    rarity: "Mystic",
    effect:
      "{Solo}. When your turn starts, this Axie gains 2 {Rage}. {Rage} on this Axie now grant 2 bonus DMG per stack.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_beast_utility_1.png",
    season: "Season 3",
  },
  {
    id: 850,
    tokenId: 1004013,
    itemId: "rune_beast_4010_s4_nft",
    name: "Endless Anger",
    class: "Beast",
    isBlockchain: 1,
    rarity: "Mystic",
    effect:
      "{Solo}. When your turn starts, this Axie gains 2 {Rage}. {Rage} on this Axie now grant 2 bonus DMG per stack.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_beast_utility_1.png",
    season: "Season 4",
  },
  {
    id: 106,
    tokenId: 1000008,
    itemId: "rune_beast_4001_s0_nft",
    name: "Endless Anger",
    class: "Beast",
    isBlockchain: 1,
    rarity: "Mystic",
    effect:
      "{Solo}. Gain 2 {Rage} when your turn starts. {Rage} now grant 3 bonus DMG.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_beast_utility_1.png",
    season: "Season 0",
  },
  {
    id: 206,
    tokenId: 1001008,
    itemId: "rune_beast_4001_s1_nft",
    name: "Endless Anger",
    class: "Beast",
    isBlockchain: 1,
    rarity: "Mystic",
    effect:
      "{Solo}. Gain 1 {Rage} when your turn starts. {Rage} now grants 3 bonus DMG per stack to attacks.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_beast_utility_1.png",
    season: "Season 1",
  },
  {
    id: 241,
    tokenId: null,
    itemId: "",
    name: "Endless Anger",
    class: "Beast",
    isBlockchain: 1,
    rarity: "Mystic",
    effect:
      "{Solo}. When your turn starts, this Axie gains 1 {Rage}. {Rage} on this Axie now grants 3 bonus DMG per stack.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_beast_utility_1.png",
    season: "Season 2",
  },
  {
    id: 484,
    tokenId: 1002012,
    itemId: "rune_beast_4010_s2_nft",
    name: "Endless Anger",
    class: "Beast",
    isBlockchain: 1,
    rarity: "Mystic",
    effect:
      "{Solo}. When your turn starts, this Axie gains 1 {Rage}. {Rage} on this Axie now grant 3 bonus DMG per stack.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_beast_utility_1.png",
    season: "Season 2",
  },
  {
    id: 236,
    tokenId: null,
    itemId: "",
    name: "Dominant Predator",
    class: "Beast",
    isBlockchain: 1,
    rarity: "Rare",
    effect:
      "If the target does not have {Bleed}, Single attacks of this Axie apply {Bleed} for 2 turns. \nWhenever this Axie attacks, if any of its targets has Bleed, deal 10% bonus DMG and heal this Axie for 15 HP.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_beast_hybrid_1.png",
    season: "Season 2",
  },
  {
    id: 430,
    tokenId: 1002009,
    itemId: "rune_beast_2012_s2_nft",
    name: "Dominant Predator",
    class: "Beast",
    isBlockchain: 1,
    rarity: "Rare",
    effect:
      "This Axie's Single Attacks apply {Bleed} for 2 turns if its target doesn't have {Bleed}. Against Bleeding enemies, it deals 10% bonus DMG then heals 15 HP to self.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_beast_hybrid_1.png",
    season: "Season 2",
  },
  {
    id: 747,
    tokenId: 1003009,
    itemId: "rune_beast_2011_s3_nft",
    name: "Dominant Predator",
    class: "Beast",
    isBlockchain: 1,
    rarity: "Rare",
    effect:
      "Whenever this Axie attacks, if the target has {Bleed}, bonus 10% DMG then heal 12 HP; otherwise, Single Attacks apply {Bleed} for 2 turns.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_beast_hybrid_1.png",
    season: "Season 3",
  },
  {
    id: 957,
    tokenId: 1004009,
    itemId: "rune_beast_2011_s4_nft",
    name: "Dominant Predator",
    class: "Beast",
    isBlockchain: 1,
    rarity: "Rare",
    effect:
      "Whenever this Axie attacks, if the target has {Bleed}, bonus 10% DMG then heal 12 HP; otherwise, Single Attacks apply {Bleed} for 2 turns.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_beast_hybrid_1.png",
    season: "Season 4",
  },
  {
    id: 13,
    tokenId: 1000005,
    itemId: "rune_beast_2001_s0_nft",
    name: "Pangolin Scale",
    class: "Beast",
    isBlockchain: 1,
    rarity: "Rare",
    effect: "Cannot gain Shield. Take 15% less DMG.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_beast_defensive_1.png",
    season: "Season 0",
  },
  {
    id: 171,
    tokenId: 1001005,
    itemId: "rune_beast_2001_s1_nft",
    name: "Pangolin Scale",
    class: "Beast",
    isBlockchain: 1,
    rarity: "Rare",
    effect: "{Solo}. Cannot gain Shield. Take 15% less DMG.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_beast_defensive_1.png",
    season: "Season 1",
  },
  {
    id: 84,
    tokenId: 1000006,
    itemId: "rune_beast_2002_s0_nft",
    name: "Reckless Hunter",
    class: "Beast",
    isBlockchain: 1,
    rarity: "Rare",
    effect: "Deal 20% more DMG.\nTake 10% more DMG.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_beast_offensive_1.png",
    season: "Season 0",
  },
  {
    id: 132,
    tokenId: 1001006,
    itemId: "rune_beast_2002_s1_nft",
    name: "Reckless Hunter",
    class: "Beast",
    isBlockchain: 1,
    rarity: "Rare",
    effect: "Deal 20% more DMG.\nTake 10% more DMG.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_beast_offensive_1.png",
    season: "Season 1",
  },
  {
    id: 237,
    tokenId: null,
    itemId: "",
    name: "Reckless Hunter",
    class: "Beast",
    isBlockchain: 1,
    rarity: "Rare",
    effect: "This Axie deals 20% bonus DMG and takes 10% more DMG.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_beast_offensive_1.png",
    season: "Season 2",
  },
  {
    id: 351,
    tokenId: 1002008,
    itemId: "rune_beast_2011_s2_nft",
    name: "Reckless Hunter",
    class: "Beast",
    isBlockchain: 1,
    rarity: "Rare",
    effect: "This Axie deals 20% bonus DMG but also takes 10% more DMG.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_beast_offensive_1.png",
    season: "Season 2",
  },
  {
    id: 238,
    tokenId: null,
    itemId: "",
    name: "Way of Beast",
    class: "Beast",
    isBlockchain: 1,
    rarity: "Rare",
    effect:
      "When the battle starts, this Axie gains 1 {Rage}. This Axie's Attack cards deal 10% bonus DMG.",
    image:
      "https://lh3.googleusercontent.com/3VSXoYqWSEFyNDv4zSGEKcR5wk4XnG8Bd76Y5LjLUisf2Wsvkker2vmtqw2X_6yltCMECWG2DSsMaFiXBrfn-xKPmfSp_V7zf6D37SlSUv7gzfmoEnUvrOt46-DCad2ALSTuIveKRCX_wgcu23EfT8S8LqmZh9d-4fFJD0dhCQxneaxumwj0nJWDCUf108S8pU1nCfVmFj9QOq1OKIc6QVaQglG1PIfDQzxUOcHVPrTTbiNyarZnzUnocjpWOMlCGozOkPyJmUoNYYPKirf1bcjflhPZtaXzLantOc_OSz94evTc0E7moNqKUyZ8wkeVBYN86c4csRR-GwtiWMhm02jevxEl9VLVj2rz7Y5g4Qh1Z1-XS3xbShVCKddbgvjSA_TUjJnwwjOPQeGTRKI9SnrCOYmu_xzK3Dsu3d9ZculaOhdnM9bVl7kJrFbJNMVdfROu2xnALF57v_tj5F88SVwmIocSR6nQGJ9whVsF1an7DYkdMTvKZ-71s2pmsp3JSbOcNL7lZOMlGr1dspqChtK1dpn-orgEaNUiyh2WPhjBNdWxENbh3TqOJxymWNd9h_-PJg7P8Jpfu_8qVeXFdfFJy5CSHpggjwKRRF7E3LoKaqlq3xLVeVQegpWtRCalj_UZ7fqQyex0yhU0SLG0D-DVH33J_d9OkRtvAChRA0_MX9MVA_TmaKCF4KPeFo73DxH3rPWBBffZZ9aysoGfey0Xi2X3nmzsVZI8841uQi2rZgmNJ3PQwSVmK4I-gWWJYlP0_ngz4XJRTkhzCVs7GYoyGtHRPqs927EeqS-rfavZr8FwWQQmqa1X7-F4_uTZVGaLAjLbLYPAta_T0Wvq1jhLV_hJ1OwX_2A72TWgWpi50znYm5-dXJNEG_ZG3XzUGR7549AIHBtGh4lnDihU4UNunuLCSNnfPJrCq8mzCjIu=w216-h232-no?authuser=0",
    season: "Season 2",
  },
  {
    id: 518,
    tokenId: 1002007,
    itemId: "rune_beast_2010_s2_nft",
    name: "Way of Beast",
    class: "Beast",
    isBlockchain: 1,
    rarity: "Rare",
    effect:
      "When the battle starts, this Axie gains 2 {Rage}, then its Attacks deal 10% bonus DMG for the rest of the battle.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_way_of_beast.png",
    season: "Season 2",
  },
  {
    id: 736,
    tokenId: 1003008,
    itemId: "rune_beast_2010_s3_nft",
    name: "Way of Beast",
    class: "Beast",
    isBlockchain: 1,
    rarity: "Rare",
    effect:
      "When the battle starts, this Axie gains 2 {Rage}s. This Axie's Attack cards deal 15% bonus DMG.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_way_of_beast.png",
    season: "Season 3",
  },
  {
    id: 970,
    tokenId: 1004008,
    itemId: "rune_beast_2010_s4_nft",
    name: "Way of Beast",
    class: "Beast",
    isBlockchain: 1,
    rarity: "Rare",
    effect:
      "When the battle starts, this Axie gains 2 {Rage}s. This Axie's Attack cards deal 15% bonus DMG.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_way_of_beast.png",
    season: "Season 4",
  },
  {
    id: 697,
    tokenId: 1003024,
    itemId: "rune_bird_3010_s3_nft",
    name: "Energy Guru",
    class: "Bird",
    isBlockchain: 1,
    rarity: "Epic",
    effect:
      "{Solo} When your turn start on Even <Round>, gain 1 <Energy Fragment>. \nThis Axie's Attacks deal 7 DMG per their Energy Cost to all enemy Axies.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_bird_offensive_1.png",
    season: "Season 3",
  },
  {
    id: 793,
    tokenId: 1004024,
    itemId: "rune_bird_3010_s4_nft",
    name: "Energy Guru",
    class: "Bird",
    isBlockchain: 1,
    rarity: "Epic",
    effect:
      "{Solo} When your turn start on Even <Round>, gain 1 <Energy Fragment>. \nThis Axie's Attacks deal 7 DMG per their Energy Cost to all enemy Axies.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_bird_offensive_1.png",
    season: "Season 4",
  },
  {
    id: 55,
    tokenId: 1000011,
    itemId: "rune_bird_3001_s0_nft",
    name: "Raven's Tactic",
    class: "Bird",
    isBlockchain: 1,
    rarity: "Epic",
    effect:
      "Deal 20% bonus DMG if HP is above 50%. Take 20% less DMG if HP is below 50%.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_bird_hybrid_1.png",
    season: "Season 0",
  },
  {
    id: 179,
    tokenId: 1001011,
    itemId: "rune_bird_3001_s1_nft",
    name: "Raven's Tactic",
    class: "Bird",
    isBlockchain: 1,
    rarity: "Epic",
    effect:
      "{Solo} This Axie deals 20% bonus DMG if its HP is above 50%. \nThis Axie takes 20% less DMG if its HP is below 50%.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_bird_hybrid_1.png",
    season: "Season 1",
  },
  {
    id: 245,
    tokenId: null,
    itemId: "",
    name: "Raven's Tactic",
    class: "Bird",
    isBlockchain: 1,
    rarity: "Epic",
    effect:
      "{Solo}. This Axie deals 20% bonus DMG if its HP is above 50%. This Axie takes 20% less DMG if its HP is below 50%.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_bird_hybrid_1.png",
    season: "Season 2",
  },
  {
    id: 406,
    tokenId: 1002022,
    itemId: "rune_bird_3010_s2_nft",
    name: "Raven's Tactic",
    class: "Bird",
    isBlockchain: 1,
    rarity: "Epic",
    effect:
      "{Solo}. This Axie deals 20% bonus DMG if its HP is > 50%, and takes 20% less DMG if its HP is < 50%.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_bird_hybrid_1.png",
    season: "Season 2",
  },
  {
    id: 246,
    tokenId: null,
    itemId: "",
    name: "Sacred Feather",
    class: "Bird",
    isBlockchain: 1,
    rarity: "Epic",
    effect:
      "{Solo}. Once per battle, if this Axie would die, it survives with 1 HP then healed for 5% of its Max HP for each of its {Feather}s, afterwards, deal 20 DMG to all enemies.",
    image:
      "https://lh3.googleusercontent.com/Z6NfFlMuAJIWRsPiVennqk9YJOODy373almAunEDC9nVFRShjFI-RdL7zJOFSHkolNzDJcPRX4bc3AbV436CVKJU-wK62BvHGARPfyyAuv2bRJLiEtRoDCQBSs1e84c0KnMXxizTvyoJQNjdgO17KCfU82lKBcX5eH2egqLJjoNkbFMTrSPnq5GLzF3yvOxPDU-lU1lXVRDaAwQ9zYPKnjC5ioKLclbf2lOIRTZeUdEsgLnlpFpaoKEeL5rySnE1_uloUJkg6A70O-g4rgDPNViaD5mVfym4qzFy6B3wOLYM0xGXyXbJobWp0r-uwFAPivfsxU1QSNITUBrZHbYQ2jeIB-5fMIilFq5OVv0cjgjCJPB7w2qnmlzoJQuH706EyJApZFkWmB9MB0kZZNcgbabYASuabEzk81_cKXidSIHundCkLCoAfQbT027UCsnRWlgkifg98aTzzdtiGhPpS2YAEwJCTVm_G8BaDOop8ImO33SsbQssJ7jDn0uvXNqXE_jwEi-B0g0aosyHSrSS4-4N4i9WqFWDFOKoAIU4SgrtGv4p3CJCMiHzjxh6lUeqKzR7lcUfhNmgOYZzYT_Ay3Qu2snMV4WAtdTl3UCcMTOp1W-O0m3nb5NOdTOjPf7eWsIVdmZyhq64Zd_jqbm7o9Y5LWp84TWMt09R5d3RoQxS5Cv3vRNRxbZF9N3wH2FmsRHuG41OUtZC4QfIC7iEHEANrwLIOIb3qfiHK9twe1iiY90SoS8kEtUunvKAvElWwRqrqb68-EMYCdB00GZzyAM-zq4d8oCAK_3TmHBL30p4_nBaHGBpuhXMsGvD-7sWoH0019IwAm6nWK_3GaP-GP4KH0lRVjT294AfbFjfuw5U5VpgAD5nT-UyfAztx7Cbmw__oPF-rBVL-MgQb_dnMEjEZbVGCayovuu3RMMAeACj=w217-h232-no?authuser=0",
    season: "Season 2",
  },
  {
    id: 512,
    tokenId: 1002023,
    itemId: "rune_bird_3011_s2_nft",
    name: "Sacred Feather",
    class: "Bird",
    isBlockchain: 1,
    rarity: "Epic",
    effect:
      "{Solo}. Once per battle, if this Axie would die, it survives with 1 HP, then heals 5% of its max HP for each of its {Feather}. Afterward, deal 20 DMG to all enemies.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_sacred_feather.png",
    season: "Season 2",
  },
  {
    id: 742,
    tokenId: 1003026,
    itemId: "rune_bird_3012_s3_nft",
    name: "Sacred Feather",
    class: "Bird",
    isBlockchain: 1,
    rarity: "Epic",
    effect:
      "{Solo}. Once per battle, if this Axie would die, it survives with 1 HP, then heals 5% of its max HP for each of its {Feather}. Afterward, deal 20 DMG to all enemies.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_sacred_feather.png",
    season: "Season 3",
  },
  {
    id: 754,
    tokenId: 1004026,
    itemId: "rune_bird_3012_s4_nft",
    name: "Sacred Feather",
    class: "Bird",
    isBlockchain: 1,
    rarity: "Epic",
    effect:
      "{Solo}. Once per battle, if this Axie would die, it survives with 1 HP, then heals 5% of its max HP for each of its {Feather}. Afterward, deal 20 DMG to all enemies.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_sacred_feather.png",
    season: "Season 4",
  },
  {
    id: 709,
    tokenId: 1003025,
    itemId: "rune_bird_3011_s3_nft",
    name: "Sharp Talon",
    class: "Bird",
    isBlockchain: 1,
    rarity: "Epic",
    effect:
      "{Solo}. This Axie deals 25% bonus DMG against enemies that have no Shield; otherwise, deal 15% bonus DMG.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_sharp_talon.png",
    season: "Season 3",
  },
  {
    id: 811,
    tokenId: 1004025,
    itemId: "rune_bird_3011_s4_nft",
    name: "Sharp Talon",
    class: "Bird",
    isBlockchain: 1,
    rarity: "Epic",
    effect:
      "{Solo}. This Axie deals 25% bonus DMG against enemies that have no Shield; otherwise, deal 15% bonus DMG.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_sharp_talon.png",
    season: "Season 4",
  },
  {
    id: 684,
    tokenId: 1003027,
    itemId: "rune_bird_4010_s3_nft",
    name: "Feather Descend",
    class: "Bird",
    isBlockchain: 1,
    rarity: "Mystic",
    effect:
      "{Solo}. When your turn starts, this Axie gains 1 {Feather}. If the Axie has 10 stacks, add [Feather Dagger] into your Hand until it's full. When your turn ends, the Axie loses {Feather} = the number of [Feather Dagger] added this way.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_bird_utility_1.png",
    season: "Season 3",
  },
  {
    id: 952,
    tokenId: 1004027,
    itemId: "rune_bird_4010_s4_nft",
    name: "Feather Descend",
    class: "Bird",
    isBlockchain: 1,
    rarity: "Mystic",
    effect:
      "{Solo}. When your turn starts, this Axie gains 2 {Feather}s. If the Axie has 10 stacks, add [Feather Dagger] into your Hand until it's full. When your turn ends, the Axie loses {Feather} = the number of [Feather Dagger] added this way.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_bird_utility_1.png",
    season: "Season 4",
  },
  {
    id: 116,
    tokenId: 1000012,
    itemId: "rune_bird_4001_s0_nft",
    name: "Feather Descend",
    class: "Bird",
    isBlockchain: 1,
    rarity: "Mystic",
    effect:
      "{Solo}. When your turn starts, this Axie gain 2 {Feather}, another random ally (not summon) gain 2 {Feather}. This Axie gains back half of the Feather stack consumed.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_bird_utility_1.png",
    season: "Season 0",
  },
  {
    id: 178,
    tokenId: 1001012,
    itemId: "rune_bird_4001_s1_nft",
    name: "Feather Descend",
    class: "Bird",
    isBlockchain: 1,
    rarity: "Mystic",
    effect:
      "{Solo}. When your turn starts, this Axie gains 1 {Feather}. Upon reaching the maxium number of stacks, shuffles [Feather Dagger] into your hand until it maxed out. At the end of turn reduce the number of stack = the number of [Feather Dagger] shuffled in.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_bird_utility_1.png",
    season: "Season 1",
  },
  {
    id: 247,
    tokenId: null,
    itemId: "",
    name: "Feather Descend",
    class: "Bird",
    isBlockchain: 1,
    rarity: "Mystic",
    effect:
      "{Solo}. When your turn starts, this Axie gains 1 {Feather}. Upon reaching 10 stacks, add [Feather Dagger] into your hand until your hand is full. When your turn ends, this Axie loses {Feather}s equal to the number of [Feather Dagger]s received this way.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_bird_utility_1.png",
    season: "Season 2",
  },
  {
    id: 317,
    tokenId: 1002024,
    itemId: "rune_bird_4010_s2_nft",
    name: "Feather Descend",
    class: "Bird",
    isBlockchain: 1,
    rarity: "Mystic",
    effect:
      "{Solo}. When your turn starts, this Axie gains 1 {Feather}. If the Axie has 10 stacks, add [Feather Dagger] into your Hand until it's full. When your turn ends, the Axie loses {Feather} = the number of [Feather Dagger] added this way.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_bird_utility_1.png",
    season: "Season 2",
  },
  {
    id: 720,
    tokenId: 1003028,
    itemId: "rune_bird_4011_s3_nft",
    name: "Raven's Tactic",
    class: "Bird",
    isBlockchain: 1,
    rarity: "Mystic",
    effect:
      "{Solo}. When your turn starts, this Axie consumes all {Feather} to self heal 2 HP per {Feather}.\nEach hit by this Axie increases the DMG of its next hit by 15% (cap at 45% bonus DMG). When your turn ends, reset bonus DMG to 0%.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_bird_hybrid_1.png",
    season: "Season 3",
  },
  {
    id: 935,
    tokenId: 1004028,
    itemId: "rune_bird_4011_s4_nft",
    name: "Raven's Tactic",
    class: "Bird",
    isBlockchain: 1,
    rarity: "Mystic",
    effect:
      "{Solo}. When your turn starts, consume all {Feather} on self to heal your team for 1 HP per Feather. Deal 15% bonus DMG. Bonus 15% DMG per hit this Axie deals until end of turn. (Cap at 2 hits)",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_bird_hybrid_1.png",
    season: "Season 4",
  },
  {
    id: 10,
    tokenId: 1000010,
    itemId: "rune_bird_2002_s0_nft",
    name: "Energy Guru",
    class: "Bird",
    isBlockchain: 1,
    rarity: "Rare",
    effect: "Attack cards also deal 6 DMG per Energy cost to all enemies.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_bird_offensive_1.png",
    season: "Season 0",
  },
  {
    id: 198,
    tokenId: 1001010,
    itemId: "rune_bird_2002_s1_nft",
    name: "Energy Guru",
    class: "Bird",
    isBlockchain: 1,
    rarity: "Rare",
    effect:
      "You gain 1 <Energy Fragment> every Even <Round>s. Attack cards also deal 4 DMG per Energy cost to all enemies.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_bird_offensive_1.png",
    season: "Season 1",
  },
  {
    id: 242,
    tokenId: null,
    itemId: "",
    name: "Energy Guru",
    class: "Bird",
    isBlockchain: 1,
    rarity: "Rare",
    effect:
      "When your turn starts, during Even Rounds, gain 1 Energy Fragment. Whenever this Axie uses an Attack card, deal 4 DMG per Energy Cost to all enemy Axies.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_bird_offensive_1.png",
    season: "Season 2",
  },
  {
    id: 523,
    tokenId: 1002020,
    itemId: "rune_bird_2011_s2_nft",
    name: "Energy Guru",
    class: "Bird",
    isBlockchain: 1,
    rarity: "Rare",
    effect:
      "When your turn start in Even <Round>, gain 1 <Energy Fragment>. This Axie's Attacks deal 4 DMG per their Energy Cost to all enemies.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_bird_offensive_1.png",
    season: "Season 2",
  },
  {
    id: 605,
    tokenId: 1003023,
    itemId: "rune_bird_2011_s3_nft",
    name: "Frail Egg",
    class: "Bird",
    isBlockchain: 1,
    rarity: "Rare",
    effect:
      "When your turn starts, randomly apply Weak for 3 turns to an enemy Axie that doesn’t have Weak.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_bird_defensive_1.png",
    season: "Season 3",
  },
  {
    id: 871,
    tokenId: 1004023,
    itemId: "rune_bird_2011_s4_nft",
    name: "Frail Egg",
    class: "Bird",
    isBlockchain: 1,
    rarity: "Rare",
    effect:
      "When your turn starts, randomly deal 10 DMG and apply {Weak} for 3 turns to an enemy Axie that doesn’t have {Weak}.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_bird_defensive_1.png",
    season: "Season 4",
  },
  {
    id: 243,
    tokenId: null,
    itemId: "",
    name: "Sharp Talon",
    class: "Bird",
    isBlockchain: 1,
    rarity: "Rare",
    effect: "This Axie deals 20% more DMG against enemies that have no Shield.",
    image:
      "https://lh3.googleusercontent.com/PUQTYKtI3_xRzq5jfJkTb3e99FOzybCdBBpIfyZ6_Q7odbIcEtqHNCoWjNjsIk5y56uyz9DgI0zUaR0KqPcbZO2skOquQW6rex3fmFmKvzGdgw3pHxZ66WKBrVMYqd9LhBo8Y60R_YChwfWBcsOwpKRUlybkufJ2SQm2Hvj_Tl9hHXiiuZK-IqdFZdaGbqqZ2GwVkzGNBzClHM4UKSiKs64k0IKKcyZ1QrfXIToKQ92siVCHwArQpS9HFTBuU3feTVi258z9yDgne0hdkDN0vZjvomBWOg5WjOoeSf-aLTbopR94GTGAM6LWiO66Sd3CQlbOyAu4qSb0-ERyQsVQmzpqePnlqizxQ47s7aPrFQZ_rsYCddcZpEso80LQQcAHFSA7vcKTjweZZiuipINqhcF9VlDl8IbMWtC44jkY-CABSodPd8G69UWqqy4d1K6aGnVuSO0YtGuloHxyGORO4q38TK-S0BjxDDGUbxi1lWzmWRAZe7_X18J_nDavvw4ybVXgr8GJv5ZQML1cINjk4WTBEns6C4VZSENy97wUR7Lh1jSTxc-c9yAre35vplQW3HbuHBaqUdvYQ4UTaYcSsEXVkmbRUwLxT5VXEFWZ22pqPexH_RvlS-taC686Hy4i1-HPN506nf2dJgyW0TnM_qd1QbVQ8cxzJ_U17R1RH7KwEoQl0HPQcBk5IhbM-F3dv6UCcUaFxRZKIsj7PJE33PWhhP09xXHCRN3p_zA4QknG2BJr6OHmX7xACHzq220fnMo-snqd9m7y_UTHedQWRc73YFacmYD0Y15EOdEs8VlzpvlbwmxJNgyYUYdkugXfHQvpJ2Zh7zeVv-nrXwBUed19cIa5ZKjil5_AthIeEVMQkg3jCVBYJVL2NDvE1hdF6T4yD51K08GV5R-74yjpC2BkX6NVVL_RXi6gEzB7JrDD=w216-h232-no?authuser=0",
    season: "Season 2",
  },
  {
    id: 514,
    tokenId: 1002021,
    itemId: "rune_bird_2012_s2_nft",
    name: "Sharp Talon",
    class: "Bird",
    isBlockchain: 1,
    rarity: "Rare",
    effect: "This Axie deal 20% bonus DMG against enemies that have no Shield.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_sharp_talon.png",
    season: "Season 2",
  },
  {
    id: 31,
    tokenId: 1000009,
    itemId: "rune_bird_2001_s0_nft",
    name: "The Incubator",
    class: "Bird",
    isBlockchain: 1,
    rarity: "Rare",
    effect: "Summons summoned by this Axie gain 14 bonus max HP.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_bird_defensive_1.png",
    season: "Season 0",
  },
  {
    id: 129,
    tokenId: 1001009,
    itemId: "rune_bird_2001_s1_nft",
    name: "The Incubator",
    class: "Bird",
    isBlockchain: 1,
    rarity: "Rare",
    effect: "Summons summoned by this Axie gain 14 bonus max HP.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_bird_defensive_1.png",
    season: "Season 1",
  },
  {
    id: 244,
    tokenId: null,
    itemId: "",
    name: "Way of Bird",
    class: "Bird",
    isBlockchain: 1,
    rarity: "Rare",
    effect:
      "When the battle starts, this Axie gains 2 {Feather}. This Axie's Attack cards deal 10% bonus DMG.",
    image:
      "https://lh3.googleusercontent.com/JiTNChaPQ4P2sdu71TajuyBsGaqoc1hOGX6ugNwl7ssn3NRDWGB3UZHbZQKH6_d-wf2RIEzvGuv-Fp2ZotZAIfsU4KwohQsVGDmrGKKc0pdfOpKoqj_bU6nDi0IhK9I2Od37j75wJmA_mbHoOgf2H2XwWiuUcnJ5fH_mput9hqPy36MtR_WIXQ-sDhMh7iwx4aszKsjqxA8OAQNcsXNCfu-mr1nxcqZUQ0MSiu8RArU3KRVU22ISNY_T0rqLvUJugkS43EoAR4HKKxZ9eNS3BQT89qROrRselP6cWehZtc44ScOx6r_Rnm_CRFZu9ZTe7Mmin61zIHZlYRgY5kCjVD1iDrtjG37vrsHgLSLQUFs2jole0OZQpr0Gro99IcTOZOs-Bb6oz-UlwLAqC996UHGUkJEpxsvhbGjy_01NNbxMEiORXOAslb1c47HvLUHnBBFqc8q-zs8nlaahyvkmQ4taNpSyShIEgQ2YsNGIwUVFHi_tYK6UY_kSHp5lp7YuSesgD5HegeF1TmFMg1B6x4rn52__A-Xp8PjcAoTbYh435fHOk7UH2cXzqo-u0AS2fR0WWvoPHBSZ4_jD_YBmhezl4B8KNZCoTp5dOnxEDAf1oQBuYR34L3YopHZl8r8edCJK3mFZGl-jG1Xh2VOgflOEw2Kld_UHxZGMIvujVVcqe_rIc7wQs7G7RtzjBcvRMfshzdEXCdRxXkXijVgmJLUpIL9pOTAQoQmhiCBGZBm_f6y-FmM3z5ALhYzJ8ii7wAeoVEV8-8gz-fpYFrpIhhOtw-tuvcNBIENTIr9QKINMFtjF9PGnU2lK1vsHcaHl4ZFO_1-yzuI9_Q-15lfuyLkxmXvnnXEtng_uJdXMCTaQxcW__F3LulooCHkxC8AG_Fu11NzhuyYJcb1EbmwI7W9Ugo4Y_eRtylK61Y9uZXfV=w216-h232-no?authuser=0",
    season: "Season 2",
  },
  {
    id: 287,
    tokenId: 1002019,
    itemId: "rune_bird_2010_s2_nft",
    name: "Way of Bird",
    class: "Bird",
    isBlockchain: 1,
    rarity: "Rare",
    effect:
      "When the battle starts, this Axie gains 2 {Feather}, then its Attacks deal 10% bonus DMG for the rest of the battle.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_way_of_bird.png",
    season: "Season 2",
  },
  {
    id: 692,
    tokenId: 1003022,
    itemId: "rune_bird_2010_s3_nft",
    name: "Way of Bird",
    class: "Bird",
    isBlockchain: 1,
    rarity: "Rare",
    effect:
      "When the battle starts, this Axie gains 2 {Feather}s. This Axie's Attack cards deal 15% bonus DMG.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_way_of_bird.png",
    season: "Season 3",
  },
  {
    id: 865,
    tokenId: 1004022,
    itemId: "rune_bird_2010_s4_nft",
    name: "Way of Bird",
    class: "Bird",
    isBlockchain: 1,
    rarity: "Rare",
    effect:
      "When the battle starts, this Axie gains 2 {Feather}s. This Axie's Attack cards deal 15% bonus DMG.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_way_of_bird.png",
    season: "Season 4",
  },
  {
    id: 693,
    tokenId: 1003019,
    itemId: "rune_bug_3012_s3_nft",
    name: "Fate Maker",
    class: "Bug",
    isBlockchain: 1,
    rarity: "Epic",
    effect:
      "{Solo}. Enemy cards discarded by this Axie have their stat reduced by 10%, your cards discarded by this Axie have their stat increased by 10%.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_fate_maker.png",
    season: "Season 3",
  },
  {
    id: 768,
    tokenId: 1004019,
    itemId: "rune_bug_3012_s4_nft",
    name: "Fate Maker",
    class: "Bug",
    isBlockchain: 1,
    rarity: "Epic",
    effect:
      "{Solo}. Enemy cards discarded by your team have their stat reduced by 10% and deal DMG to their owner equal to 3x the stat reduced. Your cards discarded by your team have their stat increased by 10%.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_fate_maker.png",
    season: "Season 4",
  },
  {
    id: 617,
    tokenId: 1003017,
    itemId: "rune_bug_3010_s3_nft",
    name: "Leech",
    class: "Bug",
    isBlockchain: 1,
    rarity: "Epic",
    effect:
      "{Solo}. When your turn starts, this Axie steals 40% of the Shield from the enemy Axie with the highest Shield. If no enemy Axie have Shield, it {Steal}s 6 HP from all enemy Axies instead.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_bug_hybrid_1.png",
    season: "Season 3",
  },
  {
    id: 748,
    tokenId: 1004017,
    itemId: "rune_bug_3010_s4_nft",
    name: "Leech",
    class: "Bug",
    isBlockchain: 1,
    rarity: "Epic",
    effect:
      "{Solo}. When your turn starts, this Axie steals 35% of the Shield from the enemy Axie with the highest Shield. If no enemy Axie have Shield, it {Steal}s 6 HP from all enemy Axies instead.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_bug_hybrid_1.png",
    season: "Season 4",
  },
  {
    id: 251,
    tokenId: null,
    itemId: "",
    name: "Metamorphosis",
    class: "Bug",
    isBlockchain: 1,
    rarity: "Epic",
    effect:
      "{Solo}. When your turn starts, this Axie gains 1 {Cocoon}. {Cocoon}s on this Axie grant 4 bonus shield per stack.",
    image:
      "https://lh3.googleusercontent.com/qhiH6lYxsekzaQDemEEvlt7pBgnlZAcW4yYOgesg0wR-7wfKhCMysk24DXgvdSNuyMEbW_YlABS_LH1ATvETSnG3ZX0I9-QaiY3XjObilfoUxtBmWxmZ1Gll5hmx93ZoYdRacQaWkhtwTq6u8EfjBcn30wF7Ka2W_eL5YNJkUQoblvXYhh_jMOmMgxM0YhYcIp3QLw_rbap9YQdJiqbvqcLnBQ8S2wLzMIo6ikKWBkZ4he6ssbOKbEUGRWBFAZRQbQR6z_U9PAKgZyoNm0eDuFUo8Ug0GekThTDQnh7j569bXBSjFwF4E2pv2509Ot4luskxe6Yt90sAqsSw_Q6PRN-9jHhNjJbxOMsXmdCN6HJRVClyj1J3D9SrXw_G8dnCKuJraLJqyO5HYtvXzlGMeteOkcu1ZJNaPjC39mWt_sSLrG_ajqY3YHG54fy8e4m_j4-KKButa3DSyIJ2vXWRl-DRzu_w56b5Jp-lQVA1aaQib0kCwevXsPM8wxnRlC3KDoD_DExC5fOFwxp4o4x37_UJIHzLoDVO2VD4aP3QrTAFTntlCGDJljCJS9gGwq6yHY4QSZf3J_Gf9poqu6ROqoMUITkdpHxuAd2Qu2CFgbOY6eBVqiVpEo7-82nF5WtGA-P-2yoCZ_NrUg0TVMwAmjDt-48aLGejfG_tkiPOUEu2PvdeEwWR0c5NTzPJ4_U7ri5ZhnUOx1i0Lt52CxUMP8qiqAieFdQ5_s0f41VB-gE57BXJcKTfQcJvGM-9Kh_RsLi6CQ9ofDfQHnsMcxMUgfZhhjOiATkb3YBdIqGimr9zVLfiUDBH4Iz9BoJqX4Do5kXMVcLgeLw5D5z9QHt_FcJLji4-A3QHUjzblIkI2kpFEFKLRQFHKdiHsJiJlhpexuFbzXPuYcE4pAGUnoa38K-1vdndx295Db9UsXdhP2Ia=w216-h232-no?authuser=0",
    season: "Season 2",
  },
  {
    id: 334,
    tokenId: 1002017,
    itemId: "rune_bug_3011_s2_nft",
    name: "Metamorphosis",
    class: "Bug",
    isBlockchain: 1,
    rarity: "Epic",
    effect:
      "{Solo}. When your turn starts, this Axie gains 1 {Cocoon} then gain 5 Shield for each {Cocoon} on this Axie.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_metamorphosis.png",
    season: "Season 2",
  },
  {
    id: 27,
    tokenId: 1000015,
    itemId: "rune_bug_3001_s0_nft",
    name: "Sturdy Fighter",
    class: "Bug",
    isBlockchain: 1,
    rarity: "Epic",
    effect:
      "Single Attack consumes 25% of current Shield and deal bonus DMG equal to 2 times that amount.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_bug_offensive_1.png",
    season: "Season 0",
  },
  {
    id: 201,
    tokenId: 1001015,
    itemId: "rune_bug_3001_s1_nft",
    name: "Sturdy Fighter",
    class: "Bug",
    isBlockchain: 1,
    rarity: "Epic",
    effect:
      "{Solo}. Single attacks consume 20% of current Shield and deal bonus DMG equal to 3 times that amount.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_bug_offensive_1.png",
    season: "Season 1",
  },
  {
    id: 252,
    tokenId: null,
    itemId: "",
    name: "Sturdy Fighter",
    class: "Bug",
    isBlockchain: 1,
    rarity: "Epic",
    effect:
      "{Solo}. Single Attacks consume 20% of this Axie's current Shield and deal bonus DMG equal to 3 times that amount.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_bug_offensive_1.png",
    season: "Season 2",
  },
  {
    id: 496,
    tokenId: 1002016,
    itemId: "rune_bug_3010_s2_nft",
    name: "Sturdy Fighter",
    class: "Bug",
    isBlockchain: 1,
    rarity: "Epic",
    effect:
      "{Solo}. This Axie's Single Attacks consume 20% of the Axie's current Shield and deal bonus DMG = 3 times that amount.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_bug_offensive_1.png",
    season: "Season 2",
  },
  {
    id: 632,
    tokenId: 1003018,
    itemId: "rune_bug_3011_s3_nft",
    name: "Sturdy Fighter",
    class: "Bug",
    isBlockchain: 1,
    rarity: "Epic",
    effect:
      "{Solo}. This Axie's Single Attacks consume 25% of the Axie's current Shield and deal bonus DMG = 3 times that amount.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_bug_offensive_1.png",
    season: "Season 3",
  },
  {
    id: 769,
    tokenId: 1004018,
    itemId: "rune_bug_3011_s4_nft",
    name: "Sturdy Fighter",
    class: "Bug",
    isBlockchain: 1,
    rarity: "Epic",
    effect:
      "{Solo}. This Axie's Single Attacks consume 25% of the Axie's current Shield and deal bonus DMG = 3 times that amount.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_bug_offensive_1.png",
    season: "Season 4",
  },
  {
    id: 619,
    tokenId: 1003020,
    itemId: "rune_bug_4010_s3_nft",
    name: "Collect And Protect",
    class: "Bug",
    isBlockchain: 1,
    rarity: "Mystic",
    effect:
      "{Solo}. When your turn starts in Odd <Round>, draw 1 bonus Card; in even <Round>, gain 60 Shield.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_bug_utility_1.png",
    season: "Season 3",
  },
  {
    id: 762,
    tokenId: 1004020,
    itemId: "rune_bug_4010_s4_nft",
    name: "Collect And Protect",
    class: "Bug",
    isBlockchain: 1,
    rarity: "Mystic",
    effect:
      "{Solo}. When your turn starts in Odd <Round>, draw 1 bonus Card; in even <Round>, gain 60 Shield.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_bug_utility_1.png",
    season: "Season 4",
  },
  {
    id: 6,
    tokenId: 1000016,
    itemId: "rune_bug_4001_s0_nft",
    name: "Collect And Protect",
    class: "Bug",
    isBlockchain: 1,
    rarity: "Mystic",
    effect:
      "{Solo}. In odd <Round>s, draw 1 additional Card when your turn starts. In even <Round>s, gain 50 Shield when your turn starts.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_bug_utility_1.png",
    season: "Season 0",
  },
  {
    id: 211,
    tokenId: 1001016,
    itemId: "rune_bug_4001_s1_nft",
    name: "Collect And Protect",
    class: "Bug",
    isBlockchain: 1,
    rarity: "Mystic",
    effect:
      "{Solo}. In odd <Round>s, draw 1 additional Card when your turn starts. In even <Round>s, gain 60 Shield when your turn starts.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_bug_utility_1.png",
    season: "Season 1",
  },
  {
    id: 253,
    tokenId: null,
    itemId: "",
    name: "Collect And Protect",
    class: "Bug",
    isBlockchain: 1,
    rarity: "Mystic",
    effect:
      "{Solo}. When your turn starts, during Odd <Round>s, draw 1 additional card.\nWhen your turn starts, during Even <Round>s, this Axie gains 60 Shield.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_bug_utility_1.png",
    season: "Season 2",
  },
  {
    id: 288,
    tokenId: 1002018,
    itemId: "rune_bug_4010_s2_nft",
    name: "Collect And Protect",
    class: "Bug",
    isBlockchain: 1,
    rarity: "Mystic",
    effect:
      "{Solo}. When your turn starts in Odd <Round>, draw 1 bonus Card; in even <Round>, gain 60 Shield.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_bug_utility_1.png",
    season: "Season 2",
  },
  {
    id: 679,
    tokenId: 1003021,
    itemId: "rune_bug_4011_s3_nft",
    name: "Metamorphosis",
    class: "Bug",
    isBlockchain: 1,
    rarity: "Mystic",
    effect:
      "{Solo}. When your turn starts, this Axie gains 2 {Cocoon} and deals DMG equal to 5% of its Shield per {Cocoon} stack to all Enemy Axies.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_metamorphosis.png",
    season: "Season 3",
  },
  {
    id: 831,
    tokenId: 1004021,
    itemId: "rune_bug_4011_s4_nft",
    name: "Metamorphosis",
    class: "Bug",
    isBlockchain: 1,
    rarity: "Mystic",
    effect:
      "{Solo}. When your turn starts, this Axie gains 2 {Cocoon} and deals DMG equal to 7% of its Shield per {Cocoon} stack to all Enemy Axies.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_metamorphosis.png",
    season: "Season 4",
  },
  {
    id: 199,
    tokenId: 1001014,
    itemId: "rune_bug_2002_s1_nft",
    name: "Leech",
    class: "Bug",
    isBlockchain: 1,
    rarity: "Rare",
    effect:
      "When your turn start, steal 30% Shield from the enemy with the highest Shield. If no one has Shield, {Steal} 4 HP from that one instead.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_bug_hybrid_1.png",
    season: "Season 1",
  },
  {
    id: 248,
    tokenId: null,
    itemId: "",
    name: "Leech",
    class: "Bug",
    isBlockchain: 1,
    rarity: "Rare",
    effect:
      "When your turn starts, this Axie steals 30% Shield from the enemy Axie with the highest Shield.\nIf none of the enemy Axies have any Shield, steal 4 HP from all enemy Axies instead.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_bug_hybrid_1.png",
    season: "Season 2",
  },
  {
    id: 354,
    tokenId: 1002015,
    itemId: "rune_bug_2012_s2_nft",
    name: "Leech",
    class: "Bug",
    isBlockchain: 1,
    rarity: "Rare",
    effect:
      "When your turn start, this Axie steals 30% of the Shield from the enemy Axie with the highest Shield. If no enemy Axie have Shield, it {Steal}s 4 HP from all enemy Axies instead.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_bug_hybrid_1.png",
    season: "Season 2",
  },
  {
    id: 81,
    tokenId: 1000014,
    itemId: "rune_bug_2002_s0_nft",
    name: "Shield Leecher",
    class: "Bug",
    isBlockchain: 1,
    rarity: "Rare",
    effect:
      "When your turn starts, steal 50% Shield from the Enemy with highest Shield.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_bug_hybrid_1.png",
    season: "Season 0",
  },
  {
    id: 73,
    tokenId: 1000013,
    itemId: "rune_bug_2001_s0_nft",
    name: "Vault Builder",
    class: "Bug",
    isBlockchain: 1,
    rarity: "Rare",
    effect:
      "When your turn ends, gain Shield equal to (3 x the number of cards in your Discard Pile).",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_bug_defensive_1.png",
    season: "Season 0",
  },
  {
    id: 164,
    tokenId: 1001013,
    itemId: "rune_bug_2001_s1_nft",
    name: "Vault Builder",
    class: "Bug",
    isBlockchain: 1,
    rarity: "Rare",
    effect:
      "When your turn start, gain Shield = the number of cards in your Draw Pile. When your turn ends, gain Shield = 3 x the number of cards in your Discard Pile.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_bug_defensive_1.png",
    season: "Season 1",
  },
  {
    id: 250,
    tokenId: null,
    itemId: "",
    name: "Vault Builder",
    class: "Bug",
    isBlockchain: 1,
    rarity: "Rare",
    effect:
      "When your turn starts, this Axie gains 1 Shield for each card in your Draw Pile.\nWhen your turn ends, this Axie gains 3 Shield for each card in your Discard Pile.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_bug_defensive_1.png",
    season: "Season 2",
  },
  {
    id: 311,
    tokenId: 1002014,
    itemId: "rune_bug_2011_s2_nft",
    name: "Vault Builder",
    class: "Bug",
    isBlockchain: 1,
    rarity: "Rare",
    effect:
      "When your turn starts, this Axie gains 1 Shield for each card in your Draw Pile. When your turn ends, it gains 3 Shield for each card in your Discard Pile.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_bug_defensive_1.png",
    season: "Season 2",
  },
  {
    id: 741,
    tokenId: 1003016,
    itemId: "rune_bug_2011_s3_nft",
    name: "Vault Builder",
    class: "Bug",
    isBlockchain: 1,
    rarity: "Rare",
    effect:
      "When your turn starts, this Axie gains 1 Shield for each card in your Draw Pile. When your turn ends, it gains 3 Shield for each card in your Discard Pile.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_bug_defensive_1.png",
    season: "Season 3",
  },
  {
    id: 892,
    tokenId: 1004016,
    itemId: "rune_bug_2011_s4_nft",
    name: "Vault Builder",
    class: "Bug",
    isBlockchain: 1,
    rarity: "Rare",
    effect:
      "When your turn starts, this Axie gains 1 Shield for each card in your Draw Pile. When your turn ends, it gains 3 Shield for each card in your Discard Pile.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_bug_defensive_1.png",
    season: "Season 4",
  },
  {
    id: 607,
    tokenId: 1003015,
    itemId: "rune_bug_2010_s3_nft",
    name: "Way of Bug",
    class: "Bug",
    isBlockchain: 1,
    rarity: "Rare",
    effect:
      "When the battle starts, this Axie gains 2 {Cocoon}. This Axie gains 15% bonus Shield from all sources.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_way_of_bug.png",
    season: "Season 3",
  },
  {
    id: 798,
    tokenId: 1004015,
    itemId: "rune_bug_2010_s4_nft",
    name: "Way of Bug",
    class: "Bug",
    isBlockchain: 1,
    rarity: "Rare",
    effect:
      "When the battle starts, this Axie gains 2 {Cocoon}. This Axie gains 15% bonus Shield from all sources.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_way_of_bug.png",
    season: "Season 4",
  },
  {
    id: 249,
    tokenId: null,
    itemId: "",
    name: "Way of Bug",
    class: "Bug",
    isBlockchain: 1,
    rarity: "Rare",
    effect:
      "When the battle starts, this Axie gains 2 {Cocoon}. This Axie's Shield cards grant 10% bonus Shield.",
    image:
      "https://lh3.googleusercontent.com/1e_UtbWZqbk31_AKBaGuwHHqlDSnkExNVbhX6oVZC8hYTv8Su2dU0q5UOGHhVmfpCi0RWNbyhMezAPLghIv3A3K9BXe3fEODAw4uMdXvegJeSp9HIEznI6r5q9O3hZJxE3qi3d838LepK5xs7BxRgNuZm2msIU2mGgeL_qkT-6031LvkqUjTx6xewxP3ZNzjkC-YrYRSmGqS8zAk6T6LHCA8Op2-rkyIj1dL3gS5AcIUad1tyZs9J_jptfWSVHU88GmQMei8w4stpc0LSa6RTdOlcZlV5DKoFJPvOETiStihNpOnzcyQ0AIrnDVwMVjZCysNmwPvkOTlszkMKIEZu3_JSICOx2iqwh3jZTxrufLQkhcWqMUf2KsF2DFGj-a3XY2MpNqwLMPxkRfHBbmH6ObzG5ps1xciOigA-PDdOzGZv_5WElcycb5d-qQenn6_D74guYvDdpPLTHwXw2xl3QlPypmVDtNa26erDS2_HIxJJXDMJBf5KNhsgqD5xrmtrmiWXrcwSlt7_KSdrSfdejEoKf-eJjZcJVc7h_uLcSPtcNAUWGEX9q899zdDG81XI-JLweWf6UjL2G0mS37W-hYXJzEySPqxhP3l7CqOFPa7wWF5iiQELpcCXgLi3tL1ZSPbEVH9TlT5Q7-QYOi2uffNn6DTNQoNUOpiuFF4L0FIs84kfudf3z2104w2VtrIGCPvuP91BBTJqKXtJbyUFjWo4eWJdEHG_zy9TIRNyFj6NMb93TxvjYZafd3cEjgnOXKm9wSzHsZXlO3tHchGh1NqZThWt333l_II7De2IChTX0bF4jx6sDGMYIntfdybiW-h5IWc8D3NnXWfNOYCZMDlgvVNdYeTPG6KszH2sh4QUaqA2hG6op4pAr3vFE22UFQAV4upaJtJeCVGPBOxEVzdk6TDTybeXqnWc33INSSV=w216-h232-no?authuser=0",
    season: "Season 2",
  },
  {
    id: 504,
    tokenId: 1002013,
    itemId: "rune_bug_2010_s2_nft",
    name: "Way of Bug",
    class: "Bug",
    isBlockchain: 1,
    rarity: "Rare",
    effect:
      "When the battle starts, this Axie gains 2 {Cocoon}, then its Shield cards grant 10% bonus Shield for the rest of the battle.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_way_of_bug.png",
    season: "Season 2",
  },
  {
    id: 263,
    tokenId: null,
    itemId: "",
    name: "Healing Force",
    class: "Dawn",
    isBlockchain: 1,
    rarity: "Epic",
    effect:
      "{Solo}. When your turn starts, heal all allies for 8 HP then deal 4 DMG per allied Unit to all enemies.",
    image:
      "https://lh3.googleusercontent.com/iuF5zFy1ix9S76bpBKXAp_yM3Sh9cN78ieOo-0ThYrwPbTMyNIIvTWGmR2wITsCEHoYLAGbwhOD0JYFyvMJcIHV5o9WqD55bKUiGxgNkFP71EAt3tQhOKgSmiaXRSED4KOSyfJZVzl831_nA8M78_KLZD97KHMHQFkdIVYYsH0m5gVodhSX-KtN60R4FU1lLU5V1_NiQF1sS5qBZw_gDouauBWGNR6TOOOS2j6J0_1M5t1m-YZsfWXauAW8KwZ11lYmPSvlrs_sTy9C1UFPiOfE3v-ywLMQ9LTBw49osTVw0C3sIll2xzOuG2sYjSCS821JY5YBd5b4rUmCFSXLvVyoG5TU226aAtQi0W8FgWE7lctwCOIQbDh4zGh9dyHCbI81niiNErVes0J1Yw7HXK254m34KR5MRyFJeZmF1_uQcanEwwYsMAhl-GHRjkLGLNNk073O-WUZCPidKvcWOgT7-Drg7Us_pbbGsC7qDA2h0JcciXwW8xvfbNGZUcj3Ve2NsFxUVFy4RMpLxRjCDJdpDfYFsQrysMw-DM1mKEY3uRlJv_mBNL_n0QTfoRF4obMTx8t835-f3ieIGO2-txYTLImGgxr35OPILxmiLr1eJlWP5Q9j7BIeZqKzUsOiLLTOBVK-ISoMGAeb8uE0ZEtWEs314TJNdzrsP0-sxXsbkUjpCOyTDlc01RGQi-j8qYtWa71MZaQQFA-E5k_M2S-ssez1SUBoG4lGnIPSQWamOgC5-ssHzWzKJjWI2B9rVu06AMupumxsVQ9Hb32-4Cq99tRgGMIo-jzof1wH_wb6v-lDPyBAtxojhfJoad4You61znlSJAseSPsNcIZlv2IufvXpAtYPuMKDaVbH2ZQTnNHFBViLhL7lGVRLk_p_2OjUDq9cQ45nXj8VUHffqD7-39Yu2L-QgRrJm0qge-fjj=w220-h232-no?authuser=0",
    season: "Season 2",
  },
  {
    id: 409,
    tokenId: 1002053,
    itemId: "rune_dawn_3011_s2_nft",
    name: "Healing Force",
    class: "Dawn",
    isBlockchain: 1,
    rarity: "Epic",
    effect:
      "{Solo}. When your turn starts, for each alive allies in your team, heal 8 HP to your team and deal 4 DMG to all enemies.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_healing_force.png",
    season: "Season 2",
  },
  {
    id: 676,
    tokenId: 1003061,
    itemId: "rune_dawn_3012_s3_nft",
    name: "Healing Force",
    class: "Dawn",
    isBlockchain: 1,
    rarity: "Epic",
    effect:
      "{Solo}. When your turn starts, for each alive allies in your team, heal 8 HP to your team and deal 4 DMG to all enemies.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_healing_force.png",
    season: "Season 3",
  },
  {
    id: 809,
    tokenId: 1004061,
    itemId: "rune_dawn_3012_s4_nft",
    name: "Healing Force",
    class: "Dawn",
    isBlockchain: 1,
    rarity: "Epic",
    effect:
      "{Solo}. When your turn starts, heal all allies for 8 HP and for each living ally, deal 3 DMG to all enemies. ",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_healing_force.png",
    season: "Season 4",
  },
  {
    id: 622,
    tokenId: 1003060,
    itemId: "rune_dawn_3011_s3_nft",
    name: "Heaven's Echoes",
    class: "Dawn",
    isBlockchain: 1,
    rarity: "Epic",
    effect:
      "{Solo}. After this Axie attacks, until your turn ends, other allied Axies deal 20% bonus damage. Whenever this Axie uses a Skill, other allied Axies gain 20 Shield.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_dawn_hybrid_1.png",
    season: "Season 3",
  },
  {
    id: 761,
    tokenId: 1004060,
    itemId: "rune_dawn_3011_s4_nft",
    name: "Heaven's Echoes",
    class: "Dawn",
    isBlockchain: 1,
    rarity: "Epic",
    effect:
      "{Solo}. After this Axie attacks, until your turn ends, other allied Axies deal 20% bonus damage. Whenever this Axie uses a Skill, other allied Axies gain 20 Shield.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_dawn_hybrid_1.png",
    season: "Season 4",
  },
  {
    id: 62,
    tokenId: 1000019,
    itemId: "rune_dawn_3001_s0_nft",
    name: "Heaven's Echoes",
    class: "Dawn",
    isBlockchain: 1,
    rarity: "Epic",
    effect:
      "Your allies gain 1 {Damage Boost} whenever this Axie attacks. Your allies gain 15 Shield whenever this Axie uses a Skill.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_dawn_hybrid_1.png",
    season: "Season 0",
  },
  {
    id: 145,
    tokenId: 1001019,
    itemId: "rune_dawn_3001_s1_nft",
    name: "Heaven's Echoes",
    class: "Dawn",
    isBlockchain: 1,
    rarity: "Epic",
    effect:
      "{Solo}. When this Axie use an Attack card, other allies in the same turn deal 15% more DMG. If it's a Skill card, they gain 15 Shield instead.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_dawn_hybrid_1.png",
    season: "Season 1",
  },
  {
    id: 264,
    tokenId: null,
    itemId: "",
    name: "Heaven's Echoes",
    class: "Dawn",
    isBlockchain: 1,
    rarity: "Epic",
    effect:
      "{Solo}. After this Axie attacks, until your turn ends, other allied Axies deal 15% bonus damage.\nWhenever this Axie uses a Skill, other allied Units gain 15 Shield.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_dawn_hybrid_1.png",
    season: "Season 2",
  },
  {
    id: 509,
    tokenId: 1002052,
    itemId: "rune_dawn_3010_s2_nft",
    name: "Heaven's Echoes",
    class: "Dawn",
    isBlockchain: 1,
    rarity: "Epic",
    effect:
      "{Solo}. If this Axie had attacked in the turn, other allied Axies deal 15% bonus DMG until the turn ends. If it had used Skill cards instead, other allied Axies gain 15 Shield.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_dawn_hybrid_1.png",
    season: "Season 2",
  },
  {
    id: 672,
    tokenId: 1003059,
    itemId: "rune_dawn_3010_s3_nft",
    name: "Rejuvenate",
    class: "Dawn",
    isBlockchain: 1,
    rarity: "Epic",
    effect:
      "{Solo}. This Axie's Heal and Shield cards gain 15% bonus stat and apply 1 {Cleanser} to their targets.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_rejuvenate.png",
    season: "Season 3",
  },
  {
    id: 839,
    tokenId: 1004059,
    itemId: "rune_dawn_3010_s4_nft",
    name: "Rejuvenate",
    class: "Dawn",
    isBlockchain: 1,
    rarity: "Epic",
    effect:
      "{Solo}. This Axie's Heal and Shield cards gain 15% bonus stat and apply 1 {Cleanser} to their targets.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_rejuvenate.png",
    season: "Season 4",
  },
  {
    id: 646,
    tokenId: 1003063,
    itemId: "rune_dawn_4011_s3_nft",
    name: "Celestial Might",
    class: "Dawn",
    isBlockchain: 1,
    rarity: "Mystic",
    effect:
      "{Solo}. This Axie's abilities gain 25% bonus stats when played. This Axie's abilities are <Banish>ed after they are played two times.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_dawn_offensive_1.png",
    season: "Season 3",
  },
  {
    id: 855,
    tokenId: 1004063,
    itemId: "rune_dawn_4011_s4_nft",
    name: "Celestial Might",
    class: "Dawn",
    isBlockchain: 1,
    rarity: "Mystic",
    effect:
      "{Solo}. This Axie's abilities gain 25% bonus stats when played. This Axie's abilities are <Banish>ed after they are played two times.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_dawn_offensive_1.png",
    season: "Season 4",
  },
  {
    id: 683,
    tokenId: 1003062,
    itemId: "rune_dawn_4010_s3_nft",
    name: "Holy Prayer",
    class: "Dawn",
    isBlockchain: 1,
    rarity: "Mystic",
    effect:
      "{Solo}. When your turn starts, remove up to 2 Cursed cards in your Deck. While there are no Cursed cards in your Deck, all allied Axies' cards gain 10% bonus stats.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_dawn_utility_1.png",
    season: "Season 3",
  },
  {
    id: 933,
    tokenId: 1004062,
    itemId: "rune_dawn_4010_s4_nft",
    name: "Holy Prayer",
    class: "Dawn",
    isBlockchain: 1,
    rarity: "Mystic",
    effect:
      "{Solo}. When your turn starts, remove 1 Cursed card in your Deck. While there are no Cursed cards in your Deck, all allied Axies' cards gain 15% bonus stats.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_dawn_utility_1.png",
    season: "Season 4",
  },
  {
    id: 77,
    tokenId: 1000020,
    itemId: "rune_dawn_4001_s0_nft",
    name: "Holy Prayer",
    class: "Dawn",
    isBlockchain: 1,
    rarity: "Mystic",
    effect:
      "{Solo}. When your turn starts, remove 1 Curse in your deck. Heal all teammates for 10 HP and grant all teammate 1 {Damage Boost} when successfully removing a Curse this way.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_dawn_utility_1.png",
    season: "Season 0",
  },
  {
    id: 166,
    tokenId: 1001020,
    itemId: "rune_dawn_4001_s1_nft",
    name: "Holy Prayer",
    class: "Dawn",
    isBlockchain: 1,
    rarity: "Mystic",
    effect:
      "{Solo}. When your turn starts, remove 2 Cursed cards in your Deck. Increase your team's card base stat by 10% if there isn't any Cursed card in your Deck.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_dawn_utility_1.png",
    season: "Season 1",
  },
  {
    id: 265,
    tokenId: null,
    itemId: "",
    name: "Holy Prayer",
    class: "Dawn",
    isBlockchain: 1,
    rarity: "Mystic",
    effect:
      "{Solo}. When your turn starts, remove up to 2 Curses from your Deck.\nWhile there are no Curses in your Deck, all allied Axie's cards gain 10% bonus stats.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_dawn_utility_1.png",
    season: "Season 2",
  },
  {
    id: 353,
    tokenId: 1002054,
    itemId: "rune_dawn_4010_s2_nft",
    name: "Holy Prayer",
    class: "Dawn",
    isBlockchain: 1,
    rarity: "Mystic",
    effect:
      "{Solo}. When your turn starts, remove up to 2 Cursed cards in your Deck. While there are no Cursed cards in your Deck, all allied Axies' cards gain 10% bonus stats.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_dawn_utility_1.png",
    season: "Season 2",
  },
  {
    id: 69,
    tokenId: 1000017,
    itemId: "rune_dawn_2001_s0_nft",
    name: "Arcane Protection",
    class: "Dawn",
    isBlockchain: 1,
    rarity: "Rare",
    effect: "Take 5% less DMG per Buff on this Axie (capped at 20%).",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_dawn_defensive_1.png",
    season: "Season 0",
  },
  {
    id: 189,
    tokenId: 1001017,
    itemId: "rune_dawn_2001_s1_nft",
    name: "Arcane Protection",
    class: "Dawn",
    isBlockchain: 1,
    rarity: "Rare",
    effect: "Take 5% less DMG per Buff or Secret on this Axie (capped at 20%).",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_dawn_defensive_1.png",
    season: "Season 1",
  },
  {
    id: 260,
    tokenId: null,
    itemId: "",
    name: "Arcane Protection",
    class: "Dawn",
    isBlockchain: 1,
    rarity: "Rare",
    effect: "Take 5% less DMG per Buff or Secret on this Axie. (Cap at 20%)",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_dawn_defensive_1.png",
    season: "Season 2",
  },
  {
    id: 359,
    tokenId: 1002051,
    itemId: "rune_dawn_2012_s2_nft",
    name: "Arcane Protection",
    class: "Dawn",
    isBlockchain: 1,
    rarity: "Rare",
    effect: "Take 5% less DMG per Buff or Secret on this Axie (Cap at 20%).",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_dawn_defensive_1.png",
    season: "Season 2",
  },
  {
    id: 707,
    tokenId: 1003058,
    itemId: "rune_dawn_2011_s3_nft",
    name: "Arcane Protection",
    class: "Dawn",
    isBlockchain: 1,
    rarity: "Rare",
    effect: "Take 5% less DMG per Buff or Secret on this Axie (Cap at 20%).",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_dawn_defensive_1.png",
    season: "Season 3",
  },
  {
    id: 832,
    tokenId: 1004058,
    itemId: "rune_dawn_2011_s4_nft",
    name: "Arcane Protection",
    class: "Dawn",
    isBlockchain: 1,
    rarity: "Rare",
    effect: "Take 5% less DMG per Buff or Secret on this Axie (Cap at 20%).",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_dawn_defensive_1.png",
    season: "Season 4",
  },
  {
    id: 122,
    tokenId: 1000018,
    itemId: "rune_dawn_2002_s0_nft",
    name: "Celestial Might",
    class: "Dawn",
    isBlockchain: 1,
    rarity: "Rare",
    effect: "Deal 5% more DMG per Buff on this Axie (capped at 20%).",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_dawn_offensive_1.png",
    season: "Season 0",
  },
  {
    id: 168,
    tokenId: 1001018,
    itemId: "rune_dawn_2002_s1_nft",
    name: "Celestial Might",
    class: "Dawn",
    isBlockchain: 1,
    rarity: "Rare",
    effect: "Deal 5% bonus DMG per Buff on this Axie (capped at 20%).",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_dawn_offensive_1.png",
    season: "Season 1",
  },
  {
    id: 261,
    tokenId: null,
    itemId: "",
    name: "Divine Ring",
    class: "Dawn",
    isBlockchain: 1,
    rarity: "Rare",
    effect:
      "When the battle starts, add <Purify> to your Deck.\nThis Axie's Healing and Shielding cards gain 5% bonus stats.",
    image:
      "https://lh3.googleusercontent.com/OeKGkmsS-ra2ohsx2TRryNeYDJFe4Q087Qx0BmQp6qpeGJcNyzM0WnkHyrNtRfA6E2iuoUn8v7HFFmiWDcdi4FrHCaU8HqGqOQfw9oNZBD2JkcX3rEDX6BdFSv4r4fplqEdqe8OM51tf6fvgwiEghW5QQbbe6oSyDENT4y0tDHfqptvncyijjh_21mrTQm-tSP1MnVXII7LgiPX71OxvbGqd5x2eesDGdBiz-cFdpC8sVnvL_8gTA6jCa8umuhBE0ojg6PiHnvRvwuU6sc7ZVqV-pkxTJoWKRumYuIjL3R6FxoDRT2DHF77dStxnxbTFQ191egcn_zRE-n6cePaOulCH9V2EYJrg5QgYJqhP01_eNeVWicuai1RKNBdEeA92-QWed8ybJzRNfNK4kqyZHOjVNP0GENAFlhYE_dSy70tFDN2oOEEHyXk_ULbEwN7Zhu3bs0ep5DwmVFk2c__Btd6KG_lT2GkntGKuo5PzZGEHVP31yTVLdxTELghnmiLb5w8nSv0zpSQwd0jwkCv0ephgoiofiqf-_tdNdCjYJ4eT45EHx5C4XSuZxtV9Zpn4kD5k-CIeHAS8LBPft-OmFrBIAKHCsEKwZ3fE1MKO9x9kBnB-tZ0PgO7LEDoHLNAi-tGxKLh_X8HDy0Xe0ghDXkVnLv2r9Vgxjxhka7-mx_zSAV2P-Vk3mxj5cqdftrszNZBg_nefRn5e2oOgn6RjggAjOdsO3BQiADVIF80TVER2MmFwsWpK8r3gVzXKca4vFktxtDqgiEaa4EeEvdpA9AAZ2PQgFpZ6t_ep89kqWtV8CO11K-O6l0-AxjMZDvR_CnSRMhxFY98GDxtqqB0FxhqKWc7DlR0aOznHDNUmPPLY3IDDEWdi1IZgM9zBmsTO05lg2RGAiFueaiaao2QN6MqlH1F4uTSVh6WUB22KWRPQ=w216-h232-no?authuser=0",
    season: "Season 2",
  },
  {
    id: 442,
    tokenId: 1002049,
    itemId: "rune_dawn_2010_s2_nft",
    name: "Divine Ring",
    class: "Dawn",
    isBlockchain: 1,
    rarity: "Rare",
    effect:
      "Before the battle starts, add 1 [Purify] to your Deck. This Axie's Heal and Shield cards gain 5% bonus stat for the rest of the battle.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_divine_ring.png",
    season: "Season 2",
  },
  {
    id: 702,
    tokenId: 1003057,
    itemId: "rune_dawn_2010_s3_nft",
    name: "Divine Ring",
    class: "Dawn",
    isBlockchain: 1,
    rarity: "Rare",
    effect:
      "Before the battle starts, add 1 [Purify] to your Deck. \nThis Axie's cards gain 10% bonus stat for the rest of the battle.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_divine_ring.png",
    season: "Season 3",
  },
  {
    id: 943,
    tokenId: 1004057,
    itemId: "rune_dawn_2010_s4_nft",
    name: "Divine Ring",
    class: "Dawn",
    isBlockchain: 1,
    rarity: "Rare",
    effect:
      "Before the battle starts, add 1 [Purify] to your Deck. \nThis Axie's cards gain 10% bonus stat for the rest of the battle.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_divine_ring.png",
    season: "Season 4",
  },
  {
    id: 262,
    tokenId: null,
    itemId: "",
    name: "Rejuvenate",
    class: "Dawn",
    isBlockchain: 1,
    rarity: "Rare",
    effect:
      "This Axie's Healing and Shielding cards gain 10% bonus stats and apply 1 {Cleanser} to their targets.",
    image:
      "https://lh3.googleusercontent.com/gSaEo5Xazt8Hz9fzqhNxZuSaVWLANaMSiLXF6sOh02C1KZhl3xh1dOT6YWLb4G7nTG6CNY1bdeK-W8-fzsPv7RCu0V6H32lcPplHbXLUw5G9OJQk0S5YcBpslIsf6n7ni5MTHErGxhZbq5XHYv-zBw4UVMsYW7nJRTLun4w3u_5zdlB4hP1Yp7H15jtiIfWwvRuQg5xpEyRPWS-43-r8NRzc8qP6w0YunEr-knELn4J33PZUirADlNMAi09BUqHwx-S2x91LRIz0FTRwA-KMVF-G23ONmce1hiyGklRphViLOmy_KyQqd3vsBOAINAdpaT2g6k57VpX1_OTCB4v4OLz0i79dxTM-tYxWTq5aR0JYjGb6UxvAi3Xp8QlIumQxItxblU_VA4dFH4WlknZVHcvKeSprCXgmfN9Ptnhw7eNhrsf_f5Nyfy-_GEzm6vWFtjvOZp27iCibEP6N3lWh3i_ONH5XhT9IBLiGl73M2QO9nHuISfSPSsWpYbz7k7ylQcsP5gQPTYdpI9DEuZqAgGFIGR83XYda7CoK5fWuov5MWnDIjuDFMzCssT5zIJFuppjb7cLyu7fMDxDFW7H8XG9aC7feV3oMqJg8EskrSZQvhXYE0wnhRigYNnIYb7bfCj9Uckd3TzFqmQ402Hn71kto_JXyzWCoNtGHbZujBST4Z8II5HoAomzvIkNqf5MkKUTpQl-qlQTY5NT2U2uJR1PcLRdMTFt2nBofH23HfIImISq0U8Wi9ghdzpi87zvqvEi5VJRbQD9dMs308O7EYw0ZS1LdmFoZvS_AkBUxjz7B96a7IaJ5q8jjbVt_K0CCnUidubcbu4GQmjEE5dFz1RU5wMdUUc1dtCoRQ6zTNqXH5RTDwZYxLNWdaYuUNn0j2Si_LYsu8GZhyxvGGPcp8CdXRJm7waNhDnqBvVif3o85=w216-h232-no?authuser=0",
    season: "Season 2",
  },
  {
    id: 376,
    tokenId: 1002050,
    itemId: "rune_dawn_2011_s2_nft",
    name: "Rejuvenate",
    class: "Dawn",
    isBlockchain: 1,
    rarity: "Rare",
    effect:
      "This Axie's Skill and Secret cards gain 10% bonus stat and apply 1 {Cleanser} to their targets.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_rejuvenate.png",
    season: "Season 2",
  },
  {
    id: 3,
    tokenId: 1000023,
    itemId: "rune_dusk_3001_s0_nft",
    name: "Malediction",
    class: "Dusk",
    isBlockchain: 1,
    rarity: "Epic",
    effect:
      "Deal 15% more DMG against debuffed Enemies. Take 15% less DMG from debuffed Enemies",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_dusk_hybrid_1.png",
    season: "Season 0",
  },
  {
    id: 173,
    tokenId: 1001023,
    itemId: "rune_dusk_3001_s1_nft",
    name: "Malediction",
    class: "Dusk",
    isBlockchain: 1,
    rarity: "Epic",
    effect:
      "{Solo} Deal 15% more DMG against debuffed Enemies. Take 15% less DMG from debuffed Enemies",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_dusk_hybrid_1.png",
    season: "Season 1",
  },
  {
    id: 269,
    tokenId: null,
    itemId: "",
    name: "Malediction",
    class: "Dusk",
    isBlockchain: 1,
    rarity: "Epic",
    effect:
      "{Solo}. This Axie deals 15% bonus DMG against debuffed enemies. This Axie takes 15% less DMG from debuffed enemies.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_dusk_hybrid_1.png",
    season: "Season 2",
  },
  {
    id: 322,
    tokenId: 1002058,
    itemId: "rune_dusk_3010_s2_nft",
    name: "Malediction",
    class: "Dusk",
    isBlockchain: 1,
    rarity: "Epic",
    effect:
      "{Solo}. This Axie deals 15% bonus DMG against Debuffed enemies, and take 15% less DMG from Debuffed enemies.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_dusk_hybrid_1.png",
    season: "Season 2",
  },
  {
    id: 643,
    tokenId: 1003067,
    itemId: "rune_dusk_3011_s3_nft",
    name: "Malediction",
    class: "Dusk",
    isBlockchain: 1,
    rarity: "Epic",
    effect:
      "{Solo}. This Axie deals 15% bonus DMG against Debuffed enemies, and take 15% less DMG from Debuffed enemies.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_dusk_hybrid_1.png",
    season: "Season 3",
  },
  {
    id: 958,
    tokenId: 1004067,
    itemId: "rune_dusk_3011_s4_nft",
    name: "Malediction",
    class: "Dusk",
    isBlockchain: 1,
    rarity: "Epic",
    effect:
      "{Solo}. This Axie deals 15% bonus DMG against Debuffed enemies, and take 15% less DMG from Debuffed enemies.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_dusk_hybrid_1.png",
    season: "Season 4",
  },
  {
    id: 618,
    tokenId: 1003068,
    itemId: "rune_dusk_3012_s3_nft",
    name: "Moonlight Thief",
    class: "Dusk",
    isBlockchain: 1,
    rarity: "Epic",
    effect:
      "{Solo}. When your turn starts, if you have less <Energy Fragment> or <Energy Burst> Level than your opponent, steal 1 Fragment. When your turn ends, this Axie heals HP = 4 times your Fragments.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_moonlight_thief.png",
    season: "Season 3",
  },
  {
    id: 828,
    tokenId: 1004068,
    itemId: "rune_dusk_3012_s4_nft",
    name: "Moonlight Thief",
    class: "Dusk",
    isBlockchain: 1,
    rarity: "Epic",
    effect:
      "{Solo}. When your turn starts, if you have less <Energy Fragment> or <Energy Burst> Level than your opponent, steal 1 Fragment. When your turn ends, this Axie heals HP = 4 times your Fragments.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_moonlight_thief.png",
    season: "Season 4",
  },
  {
    id: 270,
    tokenId: null,
    itemId: "",
    name: "Moonlight Thief",
    class: "Dusk",
    isBlockchain: 1,
    rarity: "Epic",
    effect:
      "{Solo} When your turn starts, steal 1 {Energy Fragment} from your opponent. When your turn ends, this Axie heals HP equal to 3x your Energy Fragments.",
    image:
      "https://lh3.googleusercontent.com/dp74IT4NeZTesQTfElkGaHBso_0GTPC8POZSuGVLyg7wWGSEbIhz6I8m1lc8QXgmOXaEeNUH05hfKGpKmKcWa1YM6l_f4Eie0b3EzwbKD02a4vKhG6oXlM0KoWtwoOnCytlNyeCrbqvBZ8Fr1PgRXz0iGQUUfrpJIoj2cDByXzsLzNFz9EdQ9PZbp1ZScaqhhB8GJT8URkElQYnWiZiNmgkuqRaOs4FnN0fNwzVNlddK9x5jgAOYPZmQ0pWzD1gIOkPxmo-lYGR7dLYS53O7wYZtp_qbUdR1ShEDPCKoZuJLfggCSMxnbkapw1sigFTh3ZHVYlEi_GVKLI2Uy9wLOUqEY0HrLExFd7tqXLV76KOkIpB8zfnRmYJ34NkFa8goNAaxc9VYtmFQiv-mFmFJZ4WmoGGTtaFuIltzzxSkjB_fDc8DM2r88qaOh0rwIZaxKhlu0NfILV__Jx49QEVy8D_uBDfsD5E6Cp6xatv8CLdkGsdY_Aa5Hdr7sSgEP1MYu9vS5Rz97PZYcLowTEb089EphLUWq4rA4OspGKX5TXpTaVK9dMQtkuhI7FkrJvmsIXg_e6ri7ZCNFUNXYR0TPueTk91h8j2TLJdObrkEKOlZ81XMrS43llwV_RMPHrMsxc161hs9DnszdnqNVQmBHO4jUXNRXAYyBNkRJwJer__z6qeOU8DKnf_N2OOkpeHdYXpI8S4Jo7FTh-WFMRZQOAegxoJjw71iE9uwwveKK7xDTQo39sNje91LYsu95hI27F-WsWgAUydNUwiHSXMwYwvVMxC41lF6l23kFEt8AUCI9F73k87WFWRJDtAMBO4w22ZwOqzYjKcXTT2hpHQv6nucm_IUmvnTKXfOm_tSkBXg_dbwejCWxPwsCYOEZdB9ioAMVxk95eEIjd718nFD04J3aZ5ztW-ATGlqVJGUHVs1=w216-h232-no?authuser=0",
    season: "Season 2",
  },
  {
    id: 485,
    tokenId: 1002059,
    itemId: "rune_dusk_3011_s2_nft",
    name: "Moonlight Thief",
    class: "Dusk",
    isBlockchain: 1,
    rarity: "Epic",
    effect:
      "{Solo}. When your turn starts, if you have less <Energy Fragment> or <Energy Burst> Level than your opponent, steal 1 Fragment. When your turn ends, this Axie heals HP = 4 times your Fragments.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_moonlight_thief.png",
    season: "Season 2",
  },
  {
    id: 648,
    tokenId: 1003066,
    itemId: "rune_dusk_3010_s3_nft",
    name: "Wicked Ward",
    class: "Dusk",
    isBlockchain: 1,
    rarity: "Epic",
    effect:
      "{Solo} Whenever an ally plays a Card that applies Curse, all allied Axies gain 12 Shield.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_dusk_defensive_1.png",
    season: "Season 3",
  },
  {
    id: 803,
    tokenId: 1004066,
    itemId: "rune_dusk_3010_s4_nft",
    name: "Wicked Ward",
    class: "Dusk",
    isBlockchain: 1,
    rarity: "Epic",
    effect:
      "{Solo} Whenever an ally plays a Card that applies Curse, all allied Axies gain 12 Shield.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_dusk_defensive_1.png",
    season: "Season 4",
  },
  {
    id: 609,
    tokenId: 1003069,
    itemId: "rune_dusk_4010_s3_nft",
    name: "Gloomy Dice",
    class: "Dusk",
    isBlockchain: 1,
    rarity: "Mystic",
    effect:
      "{Solo}. At the starts of your turn on Odd <Round>, randomly apply {Hex} or {Fear} to all enemy Axies for 3 turns.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_dusk_utility_1.png",
    season: "Season 3",
  },
  {
    id: 860,
    tokenId: 1004069,
    itemId: "rune_dusk_4010_s4_nft",
    name: "Gloomy Dice",
    class: "Dusk",
    isBlockchain: 1,
    rarity: "Mystic",
    effect:
      "{Solo}. At the starts of your turn on Odd <Round>, randomly apply {Hex} or {Fear} to all enemy Axies for 3 turns.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_dusk_utility_1.png",
    season: "Season 4",
  },
  {
    id: 80,
    tokenId: 1000024,
    itemId: "rune_dusk_4001_s0_nft",
    name: "Gloomy Dice",
    class: "Dusk",
    isBlockchain: 1,
    rarity: "Mystic",
    effect:
      "{Solo}. In Odd <Round>s, randomly apply {Hex} or {Fear} to all enemies for 2 turns at the start of your turn.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_dusk_utility_1.png",
    season: "Season 0",
  },
  {
    id: 143,
    tokenId: 1001024,
    itemId: "rune_dusk_4001_s1_nft",
    name: "Gloomy Dice",
    class: "Dusk",
    isBlockchain: 1,
    rarity: "Mystic",
    effect:
      "{Solo}. In Odd <Round>s, randomly apply {Hex} or {Fear} to all enemies for 3 turns at the start of your turn.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_dusk_utility_1.png",
    season: "Season 1",
  },
  {
    id: 271,
    tokenId: null,
    itemId: "",
    name: "Gloomy Dice",
    class: "Dusk",
    isBlockchain: 1,
    rarity: "Mystic",
    effect:
      "{Solo}. When your turn starts, during Odd <Round>s, randomly apply {Hex} or {Fear} to all enemy Axies for 3 turns.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_dusk_utility_1.png",
    season: "Season 2",
  },
  {
    id: 309,
    tokenId: 1002060,
    itemId: "rune_dusk_4010_s2_nft",
    name: "Gloomy Dice",
    class: "Dusk",
    isBlockchain: 1,
    rarity: "Mystic",
    effect:
      "{Solo}. At the starts of your turn in Odd <Round>, randomly apply {Hex} or {Fear} to all enemy Axies for 3 turns.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_dusk_utility_1.png",
    season: "Season 2",
  },
  {
    id: 629,
    tokenId: 1003070,
    itemId: "rune_dusk_4011_s3_nft",
    name: "Soul Eater",
    class: "Dusk",
    isBlockchain: 1,
    rarity: "Mystic",
    effect:
      "{Solo}. When played, this Axie's abilities consume 66 HP from the lowest HP ally then gain 6% base stat.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_soul_eater.png",
    season: "Season 3",
  },
  {
    id: 917,
    tokenId: 1004070,
    itemId: "rune_dusk_4011_s4_nft",
    name: "Soul Eater",
    class: "Dusk",
    isBlockchain: 1,
    rarity: "Mystic",
    effect:
      "{Solo}. When your turn starts, consume 66 HP from the lowest HP ally and increases base stat of all allied Axies' cards by 6%.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_soul_eater.png",
    season: "Season 4",
  },
  {
    id: 651,
    tokenId: 1003065,
    itemId: "rune_dusk_2011_s3_nft",
    name: "Cursed Ritual",
    class: "Dusk",
    isBlockchain: 1,
    rarity: "Rare",
    effect:
      "When your turn ends, the closest enemy Axie takes 5 DMG per Cursed card in your opponent's Deck (capped at 25 DMG).",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_dusk_offensive_1.png",
    season: "Season 3",
  },
  {
    id: 939,
    tokenId: 1004065,
    itemId: "rune_dusk_2011_s4_nft",
    name: "Cursed Ritual",
    class: "Dusk",
    isBlockchain: 1,
    rarity: "Rare",
    effect:
      "When your turn ends, the closest enemy Axie takes 5 DMG per Cursed card in your opponent's Deck (capped at 25 DMG).",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_dusk_offensive_1.png",
    season: "Season 4",
  },
  {
    id: 86,
    tokenId: 1000022,
    itemId: "rune_dusk_2002_s0_nft",
    name: "Cursed Ritual",
    class: "Dusk",
    isBlockchain: 1,
    rarity: "Rare",
    effect:
      "This Axie attacks deal bonus DMG per Curse card in your deck.\nSingle attacks deal 5 bonus DMG per card (cap at 15 DMG).\nAoE and Multihit attack deal 2 bonus DMG per card (cap at 6 DMG).",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_dusk_offensive_1.png",
    season: "Season 0",
  },
  {
    id: 204,
    tokenId: 1001022,
    itemId: "rune_dusk_2002_s1_nft",
    name: "Cursed Ritual",
    class: "Dusk",
    isBlockchain: 1,
    rarity: "Rare",
    effect:
      "Opponent's frontline Axie takes 3 DMG per Cursed card in their Deck when your turn ends (capped at 30 DMG).",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_dusk_offensive_1.png",
    season: "Season 1",
  },
  {
    id: 266,
    tokenId: null,
    itemId: "",
    name: "Cursed Ritual",
    class: "Dusk",
    isBlockchain: 1,
    rarity: "Rare",
    effect:
      "When your turn ends, the frontmost enemy Axie takes 3 DMG for each {Curse} card in your Opponent's Deck. (Cap at 30 DMG)",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_dusk_offensive_1.png",
    season: "Season 2",
  },
  {
    id: 349,
    tokenId: 1002057,
    itemId: "rune_dusk_2012_s2_nft",
    name: "Cursed Ritual",
    class: "Dusk",
    isBlockchain: 1,
    rarity: "Rare",
    effect:
      "When your turn ends, the closest enemy Axie takes 3 DMG per Cursed card in your opponent's Deck (capped at 30 DMG).",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_dusk_offensive_1.png",
    season: "Season 2",
  },
  {
    id: 267,
    tokenId: null,
    itemId: "",
    name: "Dark Flame",
    class: "Dusk",
    isBlockchain: 1,
    rarity: "Rare",
    effect:
      "When the battle starts, add <Purge> to your Deck.\nThis Axie's cards gain 5% bonus stats.",
    image:
      "https://lh3.googleusercontent.com/mftJ6OFJe5LRMDIc1oKF9kmtFTaD4_HN1fLWyL4x7L_dJyWCNP5LWGTJdOSxgQXPpnZ_w3VBXtzhg03aBhyAcZt1hPJNYHZoMSaOepw2g7US0-GnoyPktAXdN14TNtt-iUujoT5xGIjlzHzFi1K9vjZP7XIqFi0eTfH3DUbSeeLUOUNHaoCv41JoHoQ56qwxkNEYM_3347iufijL-27d2i4h95GvaI3DayQlcIzq86mWYSeapPAjaMYvRQu0JwsOANvGBvVZGqw41BkTEe2HMM5v-qEZAVGwMVOsEiFObE6HFgFR0GSy7uEpiDfv4m6OFKgYqJ8JYV31dhbfWYhrIkcxVQ_5jEb42ByYeAZtrcSmRuBaWmrdrLP-1Xqbi4Hv5yoX3tWcFZNXvGvDd7DHvGOBknlwRmnH7C-fmOFuuDk7TooiCfLQzZJRJp5b3kA0lzGCjwKwiCQrv93WE1oqRO7ogQ6S-nnUSMJoEli-jI83EqbnifNAn_uDlsQGo_gH4ZHG7Vg6iTXSaDACm1bUKzEw-1YfLc3e6ua3C5p9l09U2OnATRcL7jrJ8G8yHD-WyYzeCOPwr6ZGT5kLM8uTIe3xruP1ZRLMrTq4pyMTXDsOEkmtuVeiKEH_mD9TeQWKsoBOlikCa22zRwFYcXI4Bj6nMwc9yfAe5MH50UqXN3Dgq9hggtm18D3THU1hj6yxDA4koCO6j_-zOTDZxfBB0OpbXmHsaarcOZT3JQaD__AilgWUBo73JFCylVtY3aAKnqPTI5DgDzD7f3TK-Cznvwa9BfYCoB1HqLlv-NmKkXqL4DWyLTbwo3JsewQ3Gw7UqOUsJAIAgHBv7CigTGgFfBi9yuH9zHcpEeh_yda1fLAoVfuSU0Zj56QXTd0WqRDjbnH0yeJqCjbdJo9UhOpdxFh74EwNg0GKc1Gb16EzHvPU=w216-h232-no?authuser=0",
    season: "Season 2",
  },
  {
    id: 320,
    tokenId: 1002055,
    itemId: "rune_dusk_2010_s2_nft",
    name: "Dark Flame",
    class: "Dusk",
    isBlockchain: 1,
    rarity: "Rare",
    effect:
      "Before the battle starts, add 1 [Purge] to your Deck. This Axie's cards gain 5% bonus stat for the rest of the battle.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_dark_flame.png",
    season: "Season 2",
  },
  {
    id: 613,
    tokenId: 1003064,
    itemId: "rune_dusk_2010_s3_nft",
    name: "Dark Flame",
    class: "Dusk",
    isBlockchain: 1,
    rarity: "Rare",
    effect:
      "Before the battle starts, add 1 [Purge] to your Deck. This Axie's cards gain 10% bonus stat for the rest of the battle.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_dark_flame.png",
    season: "Season 3",
  },
  {
    id: 918,
    tokenId: 1004064,
    itemId: "rune_dusk_2010_s4_nft",
    name: "Dark Flame",
    class: "Dusk",
    isBlockchain: 1,
    rarity: "Rare",
    effect:
      "Before the battle starts, add 1 [Purge] to your Deck. This Axie's cards gain 10% bonus stat for the rest of the battle.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_dark_flame.png",
    season: "Season 4",
  },
  {
    id: 98,
    tokenId: 1000021,
    itemId: "rune_dusk_2001_s0_nft",
    name: "Wicked Ward",
    class: "Dusk",
    isBlockchain: 1,
    rarity: "Rare",
    effect: "Gain 15 Shield whenever you play a card that apply Curse.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_dusk_defensive_1.png",
    season: "Season 0",
  },
  {
    id: 172,
    tokenId: 1001021,
    itemId: "rune_dusk_2001_s1_nft",
    name: "Wicked Ward",
    class: "Dusk",
    isBlockchain: 1,
    rarity: "Rare",
    effect:
      "All teammates gains 10 Shield whenever this Axie play a Card that apply Curse.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_dusk_defensive_1.png",
    season: "Season 1",
  },
  {
    id: 268,
    tokenId: null,
    itemId: "",
    name: "Wicked Ward",
    class: "Dusk",
    isBlockchain: 1,
    rarity: "Rare",
    effect:
      "Whenever this Axie plays a card that grants {Curse}, all allied Units gain 10 Shield.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_dusk_defensive_1.png",
    season: "Season 2",
  },
  {
    id: 328,
    tokenId: 1002056,
    itemId: "rune_dusk_2011_s2_nft",
    name: "Wicked Ward",
    class: "Dusk",
    isBlockchain: 1,
    rarity: "Rare",
    effect:
      "Whenever this Axie play a Card that apply Curse, all allied Axies gain 10 Shield.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_dusk_defensive_1.png",
    season: "Season 2",
  },
  {
    id: 92,
    tokenId: 1000027,
    itemId: "rune_mech_3001_s0_nft",
    name: "Adaptive Program",
    class: "Mech",
    isBlockchain: 1,
    rarity: "Epic",
    effect:
      "Gain 10 bonus Shield from cards. Gain 3 {Damage Boost} whenever using a Shield card.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_mech_hybrid_1.png",
    season: "Season 0",
  },
  {
    id: 133,
    tokenId: 1001027,
    itemId: "rune_mech_3001_s1_nft",
    name: "Adaptive Program",
    class: "Mech",
    isBlockchain: 1,
    rarity: "Epic",
    effect:
      "{Solo}. Gain 25% bonus Shield from cards. If gained 99 and above Shield from a single card, you gain 2 <Energy Fragment>.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_mech_hybrid_1.png",
    season: "Season 1",
  },
  {
    id: 275,
    tokenId: null,
    itemId: "",
    name: "Adaptive Program",
    class: "Mech",
    isBlockchain: 1,
    rarity: "Epic",
    effect:
      "{Solo}. This Axie gains 25% bonus Shield from cards. Whenever this Axie gains at least 99 Shield, gain 2 Energy Fragment.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_mech_hybrid_1.png",
    season: "Season 2",
  },
  {
    id: 498,
    tokenId: 1002046,
    itemId: "rune_mech_3010_s2_nft",
    name: "Adaptive Program",
    class: "Mech",
    isBlockchain: 1,
    rarity: "Epic",
    effect:
      "{Solo}. This Axie receives 25% bonus Shield from cards. Whenever it gains at least 99 Shield from a single card, gain 2 <Energy Fragment>.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_mech_hybrid_1.png",
    season: "Season 2",
  },
  {
    id: 680,
    tokenId: 1003053,
    itemId: "rune_mech_3011_s3_nft",
    name: "Adaptive Program",
    class: "Mech",
    isBlockchain: 1,
    rarity: "Epic",
    effect:
      "{Solo}. This Axie receives 25% bonus Shield from cards. Whenever it gains at least 99 Shield from a single card, gain 2 <Energy Fragment>.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_mech_hybrid_1.png",
    season: "Season 3",
  },
  {
    id: 799,
    tokenId: 1004053,
    itemId: "rune_mech_3011_s4_nft",
    name: "Adaptive Program",
    class: "Mech",
    isBlockchain: 1,
    rarity: "Epic",
    effect:
      "{Solo}. This Axie receives 25% bonus Shield from cards. Whenever it gains at least 99 Shield from a single card, gain 2 <Energy Fragment>.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_mech_hybrid_1.png",
    season: "Season 4",
  },
  {
    id: 616,
    tokenId: 1003054,
    itemId: "rune_mech_3012_s3_nft",
    name: "Lens of Truth",
    class: "Mech",
    isBlockchain: 1,
    rarity: "Epic",
    effect:
      "{Solo}. This Axie's Attacks remove 1 Secret from their targets. It deals 20% bonus DMG against enemies with no Secret.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_lens_of_truth.png",
    season: "Season 3",
  },
  {
    id: 885,
    tokenId: 1004054,
    itemId: "rune_mech_3012_s4_nft",
    name: "Lens of Truth",
    class: "Mech",
    isBlockchain: 1,
    rarity: "Epic",
    effect:
      "{Solo}. This Axie's Attacks remove 1 Secret from their targets. It deals 20% bonus DMG against enemies with no Secret.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_lens_of_truth.png",
    season: "Season 4",
  },
  {
    id: 276,
    tokenId: null,
    itemId: "",
    name: "Lens of Truth",
    class: "Mech",
    isBlockchain: 1,
    rarity: "Epic",
    effect:
      "{Solo}. This Axie's Attack cards remove 1 Secret from its targets. Deal 15% bonus DMG against enemies with no Secret.",
    image:
      "https://lh3.googleusercontent.com/V6S1VZIiZxAwbOVstbkwBQ0l_I0cyFux1jW8URdA2CMnsB8GWhwE5mVLrIuse9bF5DMOvW3ltvstrp5YytXmi8WkvdX-8cujBsb4jJJUvc2TQkHOu1HwHNEo_o7K_o8wB8TJcs9y7yENTz1cgPb7CKk51Z7P3CgGgRISu_08iaUPIk7oW85pQroxoaU7TYFpnzM0gxci_EmpsaB6HBVjwlIc3jQOGngCQIWTvjBna3f9jsQGd5XRwruUVtpi9qvCHUdZZvIFiwCHClVZJvpjlSYtQ-Wq7imSvdXkHK_KCXtWYUerbIKkkv03yqk5b6c4aNuLzBdv8Ign-7EcN_8bjOUXyyR7HaX-pbtu_WWE4WMSitZvrLzNL3rVCbzmHOUbn6NfRwOl1tqW4QOWEmKcUFbjg8Wry_yD5myRlbiCqYOiO7vVZvj00YE14JD_y3M6Us43haFo8DYfdjwxTC30L3udJ_EUDkl2D9Mg07xtkNysb0r1uQXEtybJUf6Pxa5x4JCauOryNZ5aodDD9Rn-H7nOqLlXO8DYvRtBnYadxSAKVG-lsDy538T7nf0M3dPGzidUzcb0lW5oH2kOcuqdBtFMs17aGWiH6uHUqLXptt4Y-X7CH2vaAnoziDagKB73gif4WQhVLuRDAkVsluGy_IF113jtc-H8CHzkycZm2HrLZJpAEiZstKoh397TDwQyVmFAytgl68HIzhz6eEJxDjvIQs8-U2Sq13pRZy33qKHFdu3GJiOF-FFOuxCzhuxJhnGGAGGmp6hXVo_1yOMedXDJVDrTNbrcCNQoXrXVNnE5pM0CTaYNpLp9uHMAp3fU_nD6pHgoQUglXZVpRTxpk6vbXrjaholGUXfM7mLZ0FzG4yVe9JJJjSlhYEAwbzUSlCgwuSphPOTLaPGNHrU6fXWh_DqDSTvkshvdplvWuyjz=w217-h232-no?authuser=0",
    season: "Season 2",
  },
  {
    id: 467,
    tokenId: 1002047,
    itemId: "rune_mech_3011_s2_nft",
    name: "Lens of Truth",
    class: "Mech",
    isBlockchain: 1,
    rarity: "Epic",
    effect:
      "{Solo}. This Axie's Attacks remove 1 Secret from their targets. It deals 15% bonus DMG against enemies with no Secret.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_lens_of_truth.png",
    season: "Season 2",
  },
  {
    id: 615,
    tokenId: 1003052,
    itemId: "rune_mech_3010_s3_nft",
    name: "Zap Armor",
    class: "Mech",
    isBlockchain: 1,
    rarity: "Epic",
    effect:
      "{Solo}. This Axie deals 20% bonus DMG and take 20% less DMG when it's Shielded.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_mech_offensive_1.png",
    season: "Season 3",
  },
  {
    id: 818,
    tokenId: 1004052,
    itemId: "rune_mech_3010_s4_nft",
    name: "Zap Armor",
    class: "Mech",
    isBlockchain: 1,
    rarity: "Epic",
    effect:
      "{Solo}. This Axie deals 20% bonus DMG and take 20% less DMG when it's Shielded.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_mech_offensive_1.png",
    season: "Season 4",
  },
  {
    id: 673,
    tokenId: 1003056,
    itemId: "rune_mech_4011_s3_nft",
    name: "Last Stand",
    class: "Mech",
    isBlockchain: 1,
    rarity: "Mystic",
    effect:
      "{Solo}. Once per battle, if this Axie would die, it survives with 1 HP, cannot die, and its Abilities gain 50% bonus stats. At the end of the next turn, this Axie dies.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_mech_defensive_1.png",
    season: "Season 3",
  },
  {
    id: 853,
    tokenId: 1004056,
    itemId: "rune_mech_4011_s4_nft",
    name: "Last Stand",
    class: "Mech",
    isBlockchain: 1,
    rarity: "Mystic",
    effect:
      "{Solo}. Once per battle, if this Axie would die, it survives with 1 HP, cannot die, and its Abilities gain 50% bonus stats. At the end of the next turn, this Axie dies.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_mech_defensive_1.png",
    season: "Season 4",
  },
  {
    id: 635,
    tokenId: 1003055,
    itemId: "rune_mech_4010_s3_nft",
    name: "Shield Backup",
    class: "Mech",
    isBlockchain: 1,
    rarity: "Mystic",
    effect:
      "{Solo}. This Axie's Shield cards grant 20% bonus Shield. The Axie takes 20% less DMG if it has Shield, and retains 50% leftover Shield.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_mech_utility_1.png",
    season: "Season 3",
  },
  {
    id: 862,
    tokenId: 1004055,
    itemId: "rune_mech_4010_s4_nft",
    name: "Shield Backup",
    class: "Mech",
    isBlockchain: 1,
    rarity: "Mystic",
    effect:
      "{Solo}. This Axie's Shield cards grant 20% bonus Shield. The Axie takes 20% less DMG if it has Shield, and retains 50% leftover Shield.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_mech_utility_1.png",
    season: "Season 4",
  },
  {
    id: 72,
    tokenId: 1000028,
    itemId: "rune_mech_4001_s0_nft",
    name: "Shield Backup",
    class: "Mech",
    isBlockchain: 1,
    rarity: "Mystic",
    effect:
      "{Solo}. Increase Shield card's effect by 15%. This Axie's Shield isn't removed when your enemy's turn ends.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_mech_utility_1.png",
    season: "Season 0",
  },
  {
    id: 155,
    tokenId: 1001028,
    itemId: "rune_mech_4001_s1_nft",
    name: "Shield Backup",
    class: "Mech",
    isBlockchain: 1,
    rarity: "Mystic",
    effect:
      "{Solo}. Increase Shield card's stat by 20%. Take 20% less DMG if has Shield. Retain 50%  leftover Shield.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_mech_utility_1.png",
    season: "Season 1",
  },
  {
    id: 277,
    tokenId: null,
    itemId: "",
    name: "Shield Backup",
    class: "Mech",
    isBlockchain: 1,
    rarity: "Mystic",
    effect:
      "{Solo}. This Axie's Shield cards gain 20% bonus Shield. This Axie takes 20% less DMG when it is Shielded. When your opponent's turn ends, this Axie retains 50% of its Shield.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_mech_utility_1.png",
    season: "Season 2",
  },
  {
    id: 469,
    tokenId: 1002048,
    itemId: "rune_mech_4010_s2_nft",
    name: "Shield Backup",
    class: "Mech",
    isBlockchain: 1,
    rarity: "Mystic",
    effect:
      "{Solo}. This Axie's Shield cards grant 20% bonus Shield. The Axie takes 20% less DMG if it has Shield, and retains 50% leftover Shield.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_mech_utility_1.png",
    season: "Season 2",
  },
  {
    id: 37,
    tokenId: 1000025,
    itemId: "rune_mech_2001_s0_nft",
    name: "Last Stand",
    class: "Mech",
    isBlockchain: 1,
    rarity: "Rare",
    effect:
      "When taking a fatal hit, survive with 1 HP until end of turn (active 1 time per battle). After that, apply an irremovable {Heal Block}.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_mech_defensive_1.png",
    season: "Season 0",
  },
  {
    id: 184,
    tokenId: 1001025,
    itemId: "rune_mech_2001_s1_nft",
    name: "Last Stand",
    class: "Mech",
    isBlockchain: 1,
    rarity: "Rare",
    effect:
      "When taking a fatal hit, survive with 1 HP until end of turn (active 1 time per battle). After that, apply an irremovable {Heal Block}.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_mech_defensive_1.png",
    season: "Season 1",
  },
  {
    id: 273,
    tokenId: null,
    itemId: "",
    name: "Steelskin",
    class: "Mech",
    isBlockchain: 1,
    rarity: "Rare",
    effect: "This Axie takes 10 less DMG from direct hits.",
    image:
      "https://lh3.googleusercontent.com/YQHARW5DiqPHIAKBrothksAvL9hkoeUcnC3zeChC5UUVdCvac_nE8r5PBU6R-PrbGQc94crNsc2Bg9gv_8vV0oUSgf05Rwg-FKS1LJqntE9JEblAAXwV7n9qDRsWWIMila6zn0uk8r6841i6Vgq-jhvCcCsYHxGhV4v_Pn6wzGbZ4RKOj5YltaAf_nO37LOuzkk7h0ynJdN3uRxchF8ybW8tdDOxLwSGuewLcDgkjqzWf-Y8pRmwI4Fit_DE8Lk5iiE-OoxNOEVjqQa_t5QhgiLIVybObEp-edcYwPfE4gAUXTJ1qHiZdq-F9jt9Vwxhk371kNTmfQqEqhca_KHv2hOdgx4VTNjmUUHoj7r8_ICjyt9jvSjdDwIl2Lf1dOSXMMnbShdF7g4tYMetSBqjtvRbdBtdXGKXhmjDzSfgsU9tCG71I3SKu3qFjvz8vMl9CKGQON581CWhxPn3f0oOrIco_1ofd7E2ipcEn81WBTrYAeKmyjdMz9uNxG5so2SuIHyISOX4s2WE_3G8_rTnl8dFavGOWRErlM1DPuWhlcEj-mavsLtjkCv6C7hogWovudN4JvC6ahyjm9bIQ1E2RYJl0WJily4ySEs-k7JFgdja-6R-PHg-UF9GnbkCtUgxtSh8K5S-ne6KNdMDV6MoaJ-z7gObuovXrJ-EFxqYqtEEXxJfNjaSVf13QzQ6m4zMHppNG3kkWYrILwVLmhmfvmqLYoP1dVe6dcWCKFPSAkwySFo3uzHzje4prIqgfEZmAO703dgNZ63Z3ytg80O7QvDbmhhMRv-oFF-yMyO56nZAGn923uLDtQdDVja4oSas8gfPxvfL18NXpPLzNCfYaCbxXrccM8YK4qKUpMzTHmyQU6YARdXDRHWs3T8jp6XTmG8osrj32uHqJECdmsu99IbQX2Sukvgrkq3K00M7oMZF=w216-h232-no?authuser=0",
    season: "Season 2",
  },
  {
    id: 472,
    tokenId: 1002044,
    itemId: "rune_mech_2011_s2_nft",
    name: "Steelskin",
    class: "Mech",
    isBlockchain: 1,
    rarity: "Rare",
    effect: "This Axie take 10 less DMG from Attacks.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_steelskin.png",
    season: "Season 2",
  },
  {
    id: 656,
    tokenId: 1003051,
    itemId: "rune_mech_2011_s3_nft",
    name: "Steelskin",
    class: "Mech",
    isBlockchain: 1,
    rarity: "Rare",
    effect: "This Axie take 10 less DMG from Attacks.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_steelskin.png",
    season: "Season 3",
  },
  {
    id: 956,
    tokenId: 1004051,
    itemId: "rune_mech_2011_s4_nft",
    name: "Steelskin",
    class: "Mech",
    isBlockchain: 1,
    rarity: "Rare",
    effect: "This Axie take 10 less DMG from Attacks.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_steelskin.png",
    season: "Season 4",
  },
  {
    id: 681,
    tokenId: 1003050,
    itemId: "rune_mech_2010_s3_nft",
    name: "Trap Nullifier",
    class: "Mech",
    isBlockchain: 1,
    rarity: "Rare",
    effect:
      "Before the battle starts, add 1 [Detect] to your Deck. \nThis Axie's cards gain 10% bonus stat for the rest of the battle.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_trap_nullifier.png",
    season: "Season 3",
  },
  {
    id: 859,
    tokenId: 1004050,
    itemId: "rune_mech_2010_s4_nft",
    name: "Trap Nullifier",
    class: "Mech",
    isBlockchain: 1,
    rarity: "Rare",
    effect:
      "Before the battle starts, add 1 [Detect] to your Deck. \nThis Axie's cards gain 10% bonus stat for the rest of the battle.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_trap_nullifier.png",
    season: "Season 4",
  },
  {
    id: 272,
    tokenId: null,
    itemId: "",
    name: "Trap Nullifier",
    class: "Mech",
    isBlockchain: 1,
    rarity: "Rare",
    effect:
      "When the battle starts, add <Detect> to your Deck.\nThis Axie's cards gain 5% bonus stats.",
    image:
      "https://lh3.googleusercontent.com/5rdNNGaz7ux1rnG6zvvgsEU9qLmb64n8B4nhAjIMcFlKWkXWaLY4-M63pFQzt4OW9OZ4czi0krlP0ENiIB5wU9qFThXiilWQDhOf3AzpK21YZrczi69iakYDmpmopEMlyPdEv8l42nVe7OtvHnSefJVgHSHQG93UNvYq_CH0lkP62K9TXM_jZx_4M3zMXlszDchMqlFgFXyZU_iUKDRibqHabmJzUc841sFsklA52jrVtIl93SFUqGRzsxGxQLg7AnwOWJ2bdD94LIKsptKDyJ1c1mU20tSmdLV3no1kUN-mI1hP6UEVYeGz7ytji73ik1675mYGvv2jGoCLt6GfqCoPrq76DJ26DCtxcUKH3XiFVduz48eivpaKbK96eYJWE57QMbElKpvqFlimZgdHOkvq8X-TL4eXnDWV5gnIHfiLTZLCsobiPZLjnYXHAzGevJWZUlmFEQlsehdJAf1V6ttp7hc8Xdnsb6eB5-PI2WrbpxpPENFgwaKHkt5xfi6XWl8V3Flhbl__FF5iR39FT_qmWSzbWyvglgFBDt7HDJk9wHm5RxXGvqZGNxQUPjhBi3tUPtNllLbo08zdDZE2PX8bd_74sHEmTH3Zmi1w-ISxoLAtykPL1LtB6Y-QHCvPFLlKU0yQApQ-J5T-Q5o8OGEvcdLnwPTKXCgGlnXQPiLCHKMZMJqT1KF18UW3xWn2WrVy_SG-242ousksxdgXxujbqwKt4FUhXoEN7uMKDeAhZEm_NmgtK5_8WbZhQEdAUB_nzHFxsTWPIBgTj4KB1RiNGoDcZtSHJZCW-zz6iU8BW8cqH6X3bqwy64Af38WhU1UbPsX2ASE4A4XeRHuhSmQaBdBEhSk7FBkJmtDJuYWzJlTvlsbt3-sVGjDEzQR_s9qZJhAMsCkdE390tN0zFk4AnNVahmkSzoyU5b4oeV6v=w216-h232-no?authuser=0",
    season: "Season 2",
  },
  {
    id: 460,
    tokenId: 1002043,
    itemId: "rune_mech_2010_s2_nft",
    name: "Trap Nullifier",
    class: "Mech",
    isBlockchain: 1,
    rarity: "Rare",
    effect:
      "Before the battle starts, add 1 [Detect] to your Deck. This Axie's cards gain 5% bonus stat for the rest of the battle.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_trap_nullifier.png",
    season: "Season 2",
  },
  {
    id: 109,
    tokenId: 1000026,
    itemId: "rune_mech_2002_s0_nft",
    name: "Zap Armor",
    class: "Mech",
    isBlockchain: 1,
    rarity: "Rare",
    effect: "Deal 20% more DMG if this Axie has Shield.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_mech_offensive_1.png",
    season: "Season 0",
  },
  {
    id: 196,
    tokenId: 1001026,
    itemId: "rune_mech_2002_s1_nft",
    name: "Zap Armor",
    class: "Mech",
    isBlockchain: 1,
    rarity: "Rare",
    effect: "Deal 10% bonus DMG and take 20% less DMG if this Axie has Shield.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_mech_offensive_1.png",
    season: "Season 1",
  },
  {
    id: 274,
    tokenId: null,
    itemId: "",
    name: "Zap Armor",
    class: "Mech",
    isBlockchain: 1,
    rarity: "Rare",
    effect:
      "This Axie deals 10% bonus DMG and takes 20% less DMG when it is Shielded.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_mech_offensive_1.png",
    season: "Season 2",
  },
  {
    id: 315,
    tokenId: 1002045,
    itemId: "rune_mech_2012_s2_nft",
    name: "Zap Armor",
    class: "Mech",
    isBlockchain: 1,
    rarity: "Rare",
    effect:
      "This Axie deals 10% bonus DMG and take 20% less DMG when it's Shielded.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_mech_offensive_1.png",
    season: "Season 2",
  },
  {
    id: 213,
    tokenId: null,
    itemId: "",
    name: "Leftover Potion",
    class: "Neutral",
    isBlockchain: 1,
    rarity: "Common",
    effect: "When your turn ends, this Axie is healed for 3% of its Max HP.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_neutral_utility_1.png",
    season: "Season 2",
  },
  {
    id: 214,
    tokenId: null,
    itemId: "",
    name: "Mini Legion",
    class: "Neutral",
    isBlockchain: 1,
    rarity: "Common",
    effect: "This Axie's Summons gain 8 bonus Max HP.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_neutral_hybrid_1.png",
    season: "Season 2",
  },
  {
    id: 215,
    tokenId: null,
    itemId: "",
    name: "Thick Shield",
    class: "Neutral",
    isBlockchain: 1,
    rarity: "Common",
    effect: "This Axie gains 10% bonus Shield from cards.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_neutral_defensive_1.png",
    season: "Season 2",
  },
  {
    id: 216,
    tokenId: null,
    itemId: "",
    name: "Tough Strike",
    class: "Neutral",
    isBlockchain: 1,
    rarity: "Common",
    effect: "This Axie's Attack cards deal 10% bonus DMG.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_neutral_offensive_1.png",
    season: "Season 2",
  },
  {
    id: 724,
    tokenId: 1003004,
    itemId: "rune_neutral_3011_s3_nft",
    name: "Energy Shard",
    class: "Neutral",
    isBlockchain: 1,
    rarity: "Epic",
    effect:
      "{Solo}. When the battle starts, gain 1 <Energy Fragment> per unique Axie Class in your team.\nWhenever you create an <Energy Burst>, all allied Axies heal 40 HP.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_energy_shard.png",
    season: "Season 3",
  },
  {
    id: 823,
    tokenId: 1004004,
    itemId: "rune_neutral_3011_s4_nft",
    name: "Energy Shard",
    class: "Neutral",
    isBlockchain: 1,
    rarity: "Epic",
    effect:
      "{Solo}. When the battle starts, gain 1 <Energy Fragment> per unique Axie Class in your team.\nWhenever you create an <Energy Burst>, all allied Axies heal 40 HP.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_energy_shard.png",
    season: "Season 4",
  },
  {
    id: 716,
    tokenId: 1003005,
    itemId: "rune_neutral_3012_s3_nft",
    name: "Last Wish",
    class: "Neutral",
    isBlockchain: 1,
    rarity: "Epic",
    effect:
      "{Solo}. This Axie gains 40 bonus max HP. When it dies, Shields other allies and deals DMG to all enemies an amount = 10% of its max HP.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_last_wish.png",
    season: "Season 3",
  },
  {
    id: 967,
    tokenId: 1004005,
    itemId: "rune_neutral_3012_s4_nft",
    name: "Last Wish",
    class: "Neutral",
    isBlockchain: 1,
    rarity: "Epic",
    effect:
      "{Solo}. This Axie gains 40 bonus max HP. When it dies, Shields other allies and deals DMG to all enemies an amount = 10% of its max HP.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_last_wish.png",
    season: "Season 4",
  },
  {
    id: 220,
    tokenId: null,
    itemId: "",
    name: "Last Wish",
    class: "Neutral",
    isBlockchain: 1,
    rarity: "Epic",
    effect:
      "{Solo}. This Axie gains 30 bonus Max HP. When this Axie dies, 8% of its Max HP is granted as Shield to other Allied Axies and dealt as DMG to all enemy Axies.",
    image:
      "https://lh3.googleusercontent.com/oPyAwicGHQqVfdTc0rkKhR1JfRxmrfoI3oamYkgKst7EJXx1ZRDICrynbJSoeaozyVNHWdNed96LYII6G9kIio1z8I8isjWiim_bh-nYabGe8raE9uyV8WoNNCcV362MhSaK1sQftMOTjoLWXK2RdQqyQnFJV52PY7x54xccYQ3KfKOq8kEMfZbvKGjS1WfWHf7E7T8RA_W0Czgj_p8QM74oioPJ3Svphz8AJ-6yt7iUDgbdQpMf5JYn-yixo4Pu1enrdPuGMwCOBMfYVWQdKtA48_SIwh9WILqDA3XABZhm58os29cUFlYnZxCgM-PzMj6VQNXxY2vJXReIkKiJu06oor8xjUbAju6YY2GLXXENKPW9fIjEgydnG3VIDmjUU8UrwIcYLbfJ8LcjhR0DHOHPoTCatfZO67TYo-bwvN9W5DmwypdHhi-M7_VPHuenU2XWswYn8EcZ8pEHNnpNBGEGYJMtSlPmNRXJQXnrTm8Pn2Ht4E9IOC1_PsKPn70nJUHsOZcAD39IJOSk0PkwjLCqnqMHe_Zgxv-kps1NXE_NqqJspWROR4KoJi2qfz7_HRd2mon8QDgzoh7JqqUKzMH0xpfhfA7XzMUWfzMuOMzGY3ZoU56iEm4e3J6w05RdxEVMo1LoDWs9v5zu8YZTJMMTQQzwYEqFZ8W4f4970_1hwnxbYX6btvXrbKOCgDerev_KNOcbE3zUhyqgnMXoyoJeR3rS9P5hembD5g91tPwTvi9wlzana96KMAXn3DFGjQGemcvhNKd0mt2DiBUhcXd5LhPsvNds_XJzdGQ1m4TA6UmpJxcXLeLM5NIZLBMXzdxrT4b1wwuf_RGQX3DKMY_zeDKqxLNetCpQrTx89jN8vGlcG6dPA9MuX1ddjE7pyfR5eVNx1AT2T3Dtawo-ZxpLxon1QPwmP9OUmsAZJlYd=w216-h232-no?authuser=0",
    season: "Season 2",
  },
  {
    id: 482,
    tokenId: 1002005,
    itemId: "rune_neutral_3011_s2_nft",
    name: "Last Wish",
    class: "Neutral",
    isBlockchain: 1,
    rarity: "Epic",
    effect:
      "{Solo}. This Axie gains 40 bonus max HP. When it dies, Shields other allies and deals DMG to all enemies an amount = 10% of its max HP.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_last_wish.png",
    season: "Season 2",
  },
  {
    id: 94,
    tokenId: 1000031,
    itemId: "rune_neutral_3001_s0_nft",
    name: "Pure Instinct",
    class: "Neutral",
    isBlockchain: 1,
    rarity: "Epic",
    effect: "All cards gain 15% {Class Bonus}.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_neutral_hybrid_2.png",
    season: "Season 0",
  },
  {
    id: 144,
    tokenId: 1001031,
    itemId: "rune_neutral_3001_s1_nft",
    name: "Pure Instinct",
    class: "Neutral",
    isBlockchain: 1,
    rarity: "Epic",
    effect: "{Solo}. All cards of other allies gain 10% {Class Bonus}.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_neutral_hybrid_2.png",
    season: "Season 1",
  },
  {
    id: 221,
    tokenId: null,
    itemId: "",
    name: "Pure Instinct",
    class: "Neutral",
    isBlockchain: 1,
    rarity: "Epic",
    effect: "{Solo}. Other allied Axie's cards have a 10% {Class Bonus}.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_neutral_hybrid_2.png",
    season: "Season 2",
  },
  {
    id: 486,
    tokenId: 1002004,
    itemId: "rune_neutral_3010_s2_nft",
    name: "Pure Instinct",
    class: "Neutral",
    isBlockchain: 1,
    rarity: "Epic",
    effect: "{Solo}. Other allied Axies' cards gain 10% {Class Bonus}.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_neutral_hybrid_2.png",
    season: "Season 2",
  },
  {
    id: 746,
    tokenId: 1003003,
    itemId: "rune_neutral_3010_s3_nft",
    name: "Pure Luck",
    class: "Neutral",
    isBlockchain: 1,
    rarity: "Epic",
    effect:
      "{Solo}. When your turn starts, if there's at least 2 Cursed Cards in your Hand and Draw Pile, draw 1 additional card; otherwise, this Axie's cards gain 15% bonus stats until your turn ends.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_pure_luck.png",
    season: "Season 3",
  },
  {
    id: 750,
    tokenId: 1004003,
    itemId: "rune_neutral_3010_s4_nft",
    name: "Pure Luck",
    class: "Neutral",
    isBlockchain: 1,
    rarity: "Epic",
    effect:
      "{Solo}. When your turn starts, if there's at least 2 Cursed Cards in your Hand and Draw Pile, draw 1 additional card; otherwise, this Axie's cards gain 15% bonus stats until your turn ends.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_pure_luck.png",
    season: "Season 4",
  },
  {
    id: 718,
    tokenId: 1003006,
    itemId: "rune_neutral_4010_s3_nft",
    name: "Pure Instinct",
    class: "Neutral",
    isBlockchain: 1,
    rarity: "Mystic",
    effect:
      "{Solo}. Other allied Axies' cards have 5% bonus stats when played. Additional 5% bonus stats per unique Axie Class in your team.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_neutral_hybrid_2.png",
    season: "Season 3",
  },
  {
    id: 835,
    tokenId: 1004006,
    itemId: "rune_neutral_4010_s4_nft",
    name: "Pure Instinct",
    class: "Neutral",
    isBlockchain: 1,
    rarity: "Mystic",
    effect:
      "{Solo}. Other allied Axies' cards have 5% bonus stats when played. Additional 5% bonus stats per unique Axie Class in your team.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_neutral_hybrid_2.png",
    season: "Season 4",
  },
  {
    id: 745,
    tokenId: 1003007,
    itemId: "rune_neutral_4011_s3_nft",
    name: "Shady Exchange",
    class: "Neutral",
    isBlockchain: 1,
    rarity: "Mystic",
    effect:
      "{Solo}. Until <Round> 3, when your turn ends, lose up to 2 <Energy Fragment>s. After <Round> 3, when your turn starts, gain 3 Fragments.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_neutral_utility_2.png",
    season: "Season 3",
  },
  {
    id: 821,
    tokenId: 1004007,
    itemId: "rune_neutral_4011_s4_nft",
    name: "Shady Exchange",
    class: "Neutral",
    isBlockchain: 1,
    rarity: "Mystic",
    effect:
      "{Solo}. Until <Round> 2, when your turn ends, lose up to 2 <Energy Fragment>s. After <Round> 2, when your turn starts, gain 3 Fragments.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_neutral_utility_2.png",
    season: "Season 4",
  },
  {
    id: 20,
    tokenId: 1000032,
    itemId: "rune_neutral_4001_s0_nft",
    name: "Shady Exchange",
    class: "Neutral",
    isBlockchain: 1,
    rarity: "Mystic",
    effect: "{Solo}.Energy +1 in Even <Round>s.\nAdd 2 [Daze] to your deck.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_neutral_utility_2.png",
    season: "Season 0",
  },
  {
    id: 177,
    tokenId: 1001032,
    itemId: "rune_neutral_4001_s1_nft",
    name: "Shady Exchange",
    class: "Neutral",
    isBlockchain: 1,
    rarity: "Mystic",
    effect:
      "{Solo}. Gain 3 <Energy Fragment> at the start of your turn. Add 3 [Void] to your Deck.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_neutral_utility_2.png",
    season: "Season 1",
  },
  {
    id: 222,
    tokenId: null,
    itemId: "",
    name: "Shady Exchange",
    class: "Neutral",
    isBlockchain: 1,
    rarity: "Mystic",
    effect:
      "{Solo}. When the battle starts, shuffle 3 [Void] into your deck.\nWhen your turn starts, gain 3 Energy Fragments.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_neutral_utility_2.png",
    season: "Season 2",
  },
  {
    id: 312,
    tokenId: 1002006,
    itemId: "rune_neutral_4010_s2_nft",
    name: "Shady Exchange",
    class: "Neutral",
    isBlockchain: 1,
    rarity: "Mystic",
    effect:
      "{Solo}. Until <Round> 3, when your turn ends, lose up to 3 <Energy Fragment>s. After <Round> 3, when your turn starts, gain 3 Fragments.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_neutral_utility_2.png",
    season: "Season 2",
  },
  {
    id: 217,
    tokenId: null,
    itemId: "",
    name: "Energy Shard",
    class: "Neutral",
    isBlockchain: 1,
    rarity: "Rare",
    effect:
      "When the battle starts, gain 1 Energy Fragment. Whenever you create an Energy Burst, heal this Axie for 40 HP.",
    image:
      "https://lh3.googleusercontent.com/ult_ptJWwzt_tH-lyl-dgV2-C8pfVohh_jx5k_yem7tQ3DxC8J0bj34e8Btd6qx-OvCocZrhmWXvfEIhNz8QKVFiekFF7vtnINa2qfh0o3BSjdNz9p1ra_z1r376UJIBsVDljD_UUh0jPYo67IJwKGWg9npUsxKquzCP9-sUTLhdcB7_Ibgz_71-gwbKpRQBOpULfYlmJHj1OZbMvF5M01xF0BNEVTl8zVElEToGkTIpy7fTYozzWewBwenzg-3027s7q9jW2zwvnbbooxkcLWLQYQwfb7E-J-zImizRRKt_GtA_fm8T3fsmQYUu_E6K6qRJwKvCeKKtozo5_HjRCwrDGgqRAOpwcv27oX2-Fv4_2_hMlZkzVT4JK2xuqzdqncVFAo3KvHb92mLZ_XW5SMhxnROjZ5FS38WFuGU4ZJfEjrtQVz7jix-YSIRs6oHdElJ1a9FNDgDdak8Lb-jYjz1bGYcDP_uBZDHy3pzrAamLon1PWXxh4jHDa797L8RvFThME_VZvDcCPWr9l_wZFnABu3XjHWVOv67i0xHvKPI314CPm2Gxu5ahnZCEGVnSrUp7MsldkuAtiZyt8aQbMRjIxVLfHng67-UZ1tHxu4RBg95ktHU_AIMroYD8ZBCiMjrl4gQKvCc9wGNQFe1H9ZGFObzfjO5Lp1JT_hUInfHsfMyBlsgsnKdsef2xY7XC0XBQHP74aG-Zjj02-OwEf2I_0OEs7fysENFA-DlVqiwUB5u8Y8hYkhmwlAebEle8nifKVs0DV55NJN1AXCeKQvb4rSDv6RQcNAcm85yjpdkixjX8mCyuMqUyS-gFJVEnz3suhzNUx6RsmyjmAu-qghpdkNVrNX8p9gOJ2VbjEinBUALXJc-UI0KoQ_r6N5UoExu8Gl4goksIdpk52kryY7M-w0r7Qe88bD5-QdKbcx1A=w216-h232-no?authuser=0",
    season: "Season 2",
  },
  {
    id: 435,
    tokenId: 1002001,
    itemId: "rune_neutral_2010_s2_nft",
    name: "Energy Shard",
    class: "Neutral",
    isBlockchain: 1,
    rarity: "Rare",
    effect:
      "When the battle starts, gain 1 <Energy Fragment>. Whenever you create an <Energy Burst>, this Axie heals 40 HP.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_energy_shard.png",
    season: "Season 2",
  },
  {
    id: 50,
    tokenId: 1000030,
    itemId: "rune_neutral_2002_s0_nft",
    name: "Pure Power",
    class: "Neutral",
    isBlockchain: 1,
    rarity: "Rare",
    effect: "Attack cards gain 15% {Class Bonus}.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_neutral_offensive_2.png",
    season: "Season 0",
  },
  {
    id: 148,
    tokenId: 1001030,
    itemId: "rune_neutral_2002_s1_nft",
    name: "Pure Power",
    class: "Neutral",
    isBlockchain: 1,
    rarity: "Rare",
    effect: "Attack cards gain 15% {Class Bonus}.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_neutral_offensive_2.png",
    season: "Season 1",
  },
  {
    id: 218,
    tokenId: null,
    itemId: "",
    name: "Pure Power",
    class: "Neutral",
    isBlockchain: 1,
    rarity: "Rare",
    effect: "This Axie's Attack cards have a 15% {Class Bonus}.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_neutral_offensive_2.png",
    season: "Season 2",
  },
  {
    id: 323,
    tokenId: 1002002,
    itemId: "rune_neutral_2011_s2_nft",
    name: "Pure Power",
    class: "Neutral",
    isBlockchain: 1,
    rarity: "Rare",
    effect: "This Axie's Attack cards gain 15% {Class Bonus}.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_neutral_offensive_2.png",
    season: "Season 2",
  },
  {
    id: 639,
    tokenId: 1003001,
    itemId: "rune_neutral_2010_s3_nft",
    name: "Pure Power",
    class: "Neutral",
    isBlockchain: 1,
    rarity: "Rare",
    effect:
      "Other allied Axies' Attack cards have 10% bonus stats when played.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_neutral_offensive_2.png",
    season: "Season 3",
  },
  {
    id: 854,
    tokenId: 1004001,
    itemId: "rune_neutral_2010_s4_nft",
    name: "Pure Power",
    class: "Neutral",
    isBlockchain: 1,
    rarity: "Rare",
    effect:
      "Other allied Axies' Attack cards have 10% bonus stats when played.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_neutral_offensive_2.png",
    season: "Season 4",
  },
  {
    id: 604,
    tokenId: 1003002,
    itemId: "rune_neutral_2011_s3_nft",
    name: "Pure Skill",
    class: "Neutral",
    isBlockchain: 1,
    rarity: "Rare",
    effect:
      "Other allied Axies' Heal and Shield cards have 10% bonus stats when played.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_neutral_defensive_2.png",
    season: "Season 3",
  },
  {
    id: 881,
    tokenId: 1004002,
    itemId: "rune_neutral_2011_s4_nft",
    name: "Pure Skill",
    class: "Neutral",
    isBlockchain: 1,
    rarity: "Rare",
    effect:
      "Other allied Axies' Heal and Shield cards have 10% bonus stats when played.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_neutral_defensive_2.png",
    season: "Season 4",
  },
  {
    id: 114,
    tokenId: 1000029,
    itemId: "rune_neutral_2001_s0_nft",
    name: "Pure Skill",
    class: "Neutral",
    isBlockchain: 1,
    rarity: "Rare",
    effect: "Healing and Shield cards gain 15% {Class Bonus}.        ",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_neutral_defensive_2.png",
    season: "Season 0",
  },
  {
    id: 195,
    tokenId: 1001029,
    itemId: "rune_neutral_2001_s1_nft",
    name: "Pure Skill",
    class: "Neutral",
    isBlockchain: 1,
    rarity: "Rare",
    effect: "Healing and Shield cards gain 15% {Class Bonus}.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_neutral_defensive_2.png",
    season: "Season 1",
  },
  {
    id: 219,
    tokenId: null,
    itemId: "",
    name: "Pure Skill",
    class: "Neutral",
    isBlockchain: 1,
    rarity: "Rare",
    effect: "This Axie's Skill cards have a 15% {Class Bonus}.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_neutral_defensive_2.png",
    season: "Season 2",
  },
  {
    id: 434,
    tokenId: 1002003,
    itemId: "rune_neutral_2012_s2_nft",
    name: "Pure Skill",
    class: "Neutral",
    isBlockchain: 1,
    rarity: "Rare",
    effect: "This Axie's Skill cards gain 15% {Class Bonus}.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_neutral_defensive_2.png",
    season: "Season 2",
  },
  {
    id: 234,
    tokenId: null,
    itemId: "",
    name: "Leaf Cloak",
    class: "Plant",
    isBlockchain: 1,
    rarity: "Epic",
    effect:
      "{Solo}. This Axie takes 15% less DMG if it has {Leaf}.\nWhen attacked, this Axie loses 1 Leaf then grants 1 Leaf to all other allied Axies.",
    image:
      "https://lh3.googleusercontent.com/NwbGRtv2JZmxHEkqG0RB0MbndNw2zxm0sLx9zRCBY7POrIc23EDQF3RD4P5YvUtGk-z6LY1fiOxfg1X0bjDt_O_xYZ3FiPWj2W9nWlFifSqPr1JI6vJof5ZiU9Lq5COeFryueEmB8uUM447bKd6VzRjmkkmuB_2STyeEAT6YRyzQzq9FpSBgqPY9XRjno1f3MFfQ-RugQWt8pAQVdVjMfMrUDWYbXxJEs3Tn0PXWrovPQhDNXA4T8CAIzwPCLmlCLTPuJWaliXyumBXr2vt2_wRZvzA0KlL3qPQOu_SJL0XgollZ9c1wFzD9muvY-4mpcHsapkhHlzbeEB1DqVifnfaTk4lwLwK6F1vqzEXi4j8teuDrZp3OHtXd5OrLqfrAbq3w6U6nEFJaCu1LdXqv5oluVOJLqFn7Ti1uKEXmeVpG9afilhbrKuOECprx_GfkQnoCVe7ifummLsQsdLyFaBs0yiGAlUk2nRtBM6qC4T1iXcmVsehnO32L0Lpt3Y0R4eROZcWor03d7pFCzgoqsh_f8LCG_ewYP7CC8teLmIx2LBNbARLErAOeDIirMb1RWuMnkPx8JE0eeYRKwMftUqY_8CMSjaEJUVekrk3c3vDkKivRCt0QUWoAKOO2XGJtxWdrj5DWFBgtb3zakU7eCL5iAHXEPrJwf8oM-3snOljt0CQ8bcF3sGu3wbvomrpiQ-6hP6Rn8lNQQMzQAQM6sgJNGM0VBt7yj3bVqBTHEFVNFm1SH7tdqeueVYmgukFZt4Vk6oJ7njUhHo9-8QUDlR4g1_e727ZRiI5Heog_eMpn789ip7OTA8CoBSvanmq7dPnXKHePuMzxQKaUjkLZEh8jfqLYSgS3sIfozEbsbbacdIboJqVBF6S95qebNzAHRwIinoPhELx8uHTwhIdRa7Ga5VamN9WRPZEdpkWQv9zU=w217-h232-no?authuser=0",
    season: "Season 2",
  },
  {
    id: 418,
    tokenId: 1002029,
    itemId: "rune_plant_3011_s2_nft",
    name: "Leaf Cloak",
    class: "Plant",
    isBlockchain: 1,
    rarity: "Epic",
    effect:
      "{Solo}. Whenever hit, if this Axie has {Leaf}, it takes 15% less DMG, lose 1 {Leaf}, then grant 1 {Leaf} to other allied Axies; otherwise it gains 2 {Leaf}.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_leaf_cloak.png",
    season: "Season 2",
  },
  {
    id: 738,
    tokenId: 1003032,
    itemId: "rune_plant_3011_s3_nft",
    name: "Leaf Cloak",
    class: "Plant",
    isBlockchain: 1,
    rarity: "Epic",
    effect:
      "{Solo}. Whenever hit, if this Axie has {Leaf}, it takes 20% less DMG, lose 1 {Leaf}, then grant 1 {Leaf} to other allied Axies; otherwise it gains 2 {Leaf}.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_leaf_cloak.png",
    season: "Season 3",
  },
  {
    id: 796,
    tokenId: 1004032,
    itemId: "rune_plant_3011_s4_nft",
    name: "Leaf Cloak",
    class: "Plant",
    isBlockchain: 1,
    rarity: "Epic",
    effect:
      "{Solo}. Whenever hit, if this Axie has {Leaf}, it takes 20% less DMG, lose 1 {Leaf}, then grant 1 {Leaf} to other allied Axies; otherwise it gains 2 {Leaf}.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_leaf_cloak.png",
    season: "Season 4",
  },
  {
    id: 744,
    tokenId: 1003033,
    itemId: "rune_plant_3012_s3_nft",
    name: "Miracle Leaf",
    class: "Plant",
    isBlockchain: 1,
    rarity: "Epic",
    effect:
      "{Solo} Gain 1 Leaf when your turn starts.\nThis Axie's Attacks deal 1 bonus DMG per {Leaf}. If this Axie has at least 5 {Leaf} before attacking, deal 20% bonus DMG.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_plant_offensive_1.png",
    season: "Season 3",
  },
  {
    id: 876,
    tokenId: 1004033,
    itemId: "rune_plant_3012_s4_nft",
    name: "Miracle Leaf",
    class: "Plant",
    isBlockchain: 1,
    rarity: "Epic",
    effect:
      "{Solo} Gain 1 Leaf when your turn starts.\nThis Axie's Attacks deal 1 bonus DMG per {Leaf}. If this Axie has at least 5 {Leaf} before attacking, deal 20% bonus DMG.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_plant_offensive_1.png",
    season: "Season 4",
  },
  {
    id: 633,
    tokenId: 1003031,
    itemId: "rune_plant_3010_s3_nft",
    name: "Rise And Ruin",
    class: "Plant",
    isBlockchain: 1,
    rarity: "Epic",
    effect:
      "{Solo}. Before the battle starts, add 1 [Forest Breath] to your Deck.\nOnce per turn, when an ally is <Cleanse>d, add 1 [Forest Wrath] to your Hand.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_plant_hybrid_1.png",
    season: "Season 3",
  },
  {
    id: 945,
    tokenId: 1004031,
    itemId: "rune_plant_3010_s4_nft",
    name: "Rise And Ruin",
    class: "Plant",
    isBlockchain: 1,
    rarity: "Epic",
    effect:
      "{Solo}. Before the battle starts, add 1 [Forest Breath] to your Deck.\nOnce per turn, when an ally is <Cleanse>d, add 1 [Forest Wrath] to your Hand.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_plant_hybrid_1.png",
    season: "Season 4",
  },
  {
    id: 96,
    tokenId: 1000035,
    itemId: "rune_plant_3001_s0_nft",
    name: "Rise And Ruin",
    class: "Plant",
    isBlockchain: 1,
    rarity: "Epic",
    effect:
      "{Solo}. Shielding cards of this Axie also restore HP equal to 100% of Shield gained but grant 35% less Shield.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_plant_hybrid_1.png",
    season: "Season 0",
  },
  {
    id: 212,
    tokenId: 1001035,
    itemId: "rune_plant_3001_s1_nft",
    name: "Rise And Ruin",
    class: "Plant",
    isBlockchain: 1,
    rarity: "Epic",
    effect:
      "{Solo}. Shielding cards of this Axie also Heal HP equal to 100% of Shield gained but grant 35% less Shield.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_plant_hybrid_1.png",
    season: "Season 1",
  },
  {
    id: 232,
    tokenId: null,
    itemId: "",
    name: "Rise And Ruin",
    class: "Plant",
    isBlockchain: 1,
    rarity: "Epic",
    effect:
      "{Solo}. Shielding cards of this Axie grant 35% less Shield then heal HP equal to 100% of Shield granted.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_plant_hybrid_1.png",
    season: "Season 2",
  },
  {
    id: 451,
    tokenId: 1002028,
    itemId: "rune_plant_3010_s2_nft",
    name: "Rise And Ruin",
    class: "Plant",
    isBlockchain: 1,
    rarity: "Epic",
    effect:
      "{Solo}. This Axie's Shield cards grant 35% less Shield, but heal their targets HP = 100% Shield granted.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_plant_hybrid_1.png",
    season: "Season 2",
  },
  {
    id: 68,
    tokenId: 1000036,
    itemId: "rune_plant_4001_s0_nft",
    name: "Gaia's Embrace",
    class: "Plant",
    isBlockchain: 1,
    rarity: "Mystic",
    effect: "{Solo}. Increase all ally Axies' max HP by 50.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_plant_defensive_1.png",
    season: "Season 0",
  },
  {
    id: 209,
    tokenId: 1001036,
    itemId: "rune_plant_4001_s1_nft",
    name: "Gaia's Embrace",
    class: "Plant",
    isBlockchain: 1,
    rarity: "Mystic",
    effect:
      "{Solo}. Increase all ally Axies' max HP by 40. They also Heal 1% max HP when your turn starts.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_plant_defensive_1.png",
    season: "Season 1",
  },
  {
    id: 235,
    tokenId: null,
    itemId: "",
    name: "Gaia's Embrace",
    class: "Plant",
    isBlockchain: 1,
    rarity: "Mystic",
    effect:
      "{Solo}. All allied Axies gain 40 bonus max HP. When your turn starts, all allied Axies heal 1% of their max HP.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_plant_defensive_1.png",
    season: "Season 2",
  },
  {
    id: 457,
    tokenId: 1002030,
    itemId: "rune_plant_4010_s2_nft",
    name: "Gaia's Embrace",
    class: "Plant",
    isBlockchain: 1,
    rarity: "Mystic",
    effect:
      "{Solo}. All allied Axies gain 40 bonus max HP. They also heal HP = 1% of this Rune's owner's max HP when your turn starts.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_plant_defensive_1.png",
    season: "Season 2",
  },
  {
    id: 699,
    tokenId: 1003034,
    itemId: "rune_plant_4010_s3_nft",
    name: "Gaia's Embrace",
    class: "Plant",
    isBlockchain: 1,
    rarity: "Mystic",
    effect:
      "{Solo}. All allied Axies gain 40 bonus max HP. They also heal HP = 1% of this Rune's owner's max HP when your turn starts.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_plant_defensive_1.png",
    season: "Season 3",
  },
  {
    id: 837,
    tokenId: 1004034,
    itemId: "rune_plant_4010_s4_nft",
    name: "Gaia's Embrace",
    class: "Plant",
    isBlockchain: 1,
    rarity: "Mystic",
    effect:
      "{Solo}. All allied Axies gain 40 bonus max HP. They also heal HP = 1% of this Rune's owner's max HP when your turn starts.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_plant_defensive_1.png",
    season: "Season 4",
  },
  {
    id: 729,
    tokenId: 1003035,
    itemId: "rune_plant_4011_s3_nft",
    name: "Healing Pulse",
    class: "Plant",
    isBlockchain: 1,
    rarity: "Mystic",
    effect:
      "{Solo}. This Axie Heals 20% bonus HP.\nOverheal amount granted by this Axie converts to Shield.\nOverheal amount granted by this Axie converts to DMG to 1 random enemy.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_plant_utility_1.png",
    season: "Season 3",
  },
  {
    id: 820,
    tokenId: 1004035,
    itemId: "rune_plant_4011_s4_nft",
    name: "Healing Pulse",
    class: "Plant",
    isBlockchain: 1,
    rarity: "Mystic",
    effect:
      "{Solo}. This Axie Heals 20% bonus HP.\nOverheal amount granted by this Axie converts to Shield.\nOverheal amount granted by this Axie converts to DMG to 1 random enemy.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_plant_utility_1.png",
    season: "Season 4",
  },
  {
    id: 891,
    tokenId: 1004030,
    itemId: "rune_plant_2011_s4_nft",
    name: "Destiny Leaf",
    class: "Plant",
    isBlockchain: 1,
    rarity: "Rare",
    effect:
      "This Axie's Summoned Units gain 14 bonus max HP. When this Axie's Summons die, deal DMG equal to 8% of this Axie's current HP to the closest enemy Axie.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_memento_leaf.png",
    season: "Season 4",
  },
  {
    id: 15,
    tokenId: 1000034,
    itemId: "rune_plant_2002_s0_nft",
    name: "Healing Pulse",
    class: "Plant",
    isBlockchain: 1,
    rarity: "Rare",
    effect:
      "All teammates regen 4 HP when your turn ends. Increase Healing card effects by 10%.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_plant_utility_1.png",
    season: "Season 0",
  },
  {
    id: 141,
    tokenId: 1001034,
    itemId: "rune_plant_2002_s1_nft",
    name: "Healing Pulse",
    class: "Plant",
    isBlockchain: 1,
    rarity: "Rare",
    effect:
      "All teammates regen 4 HP when your turn ends. Increase Healing card effects by 10%.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_plant_utility_1.png",
    season: "Season 1",
  },
  {
    id: 231,
    tokenId: null,
    itemId: "",
    name: "Memento Leaf",
    class: "Plant",
    isBlockchain: 1,
    rarity: "Rare",
    effect:
      "This Axie's Summons gain 14 bonus Max HP.\nWhenever a Summon belonging to this Axie dies, grant 1 {Leaf} to this Axie.",
    image:
      "https://lh3.googleusercontent.com/hn5_nlIvMYQb9bkS51c7YLQE4n9t0o0ncbgyWB-_iY6zliWPLdUq0RjSRMOTKO8gXollZmA-RadOSVNF3LXtj9evopq79V5Y2g23YckyvEuWYG3NOXnyDKUr0UK5W0_Xev9fc_EgtuiMHR8tBGKwYjurtgvL7O7b85HTQUAPHaLfmWBURhLwCOmLffQF5DfEuLF_vMGSIWydA4bRdETAImUeW4fwOCT9S55lmBRLG4IMkigTT6JQ9b_2lDlAtaKCmlGTNlf7YVtpiAlOka_fEjynuvJ1oOV8Pfk1lNxiF_MlL0vY-zay4j-W9fytA51cs1kqPQcS2Jc9oomkNBy54LAHu6mOKhQrGseSxHQ-VV9HNC34I23HuwroUS1VULiN-_Inzk07TFHzTqjTQNv7GUg9pwoAUOLH0N1zYlGiclzCD8IinENWGsYev113LOIta5ELBeT4Eds40qTvssZxWrIOVogBsFYsX1sew8OrrrUTZ0eH52XsTIbfruIWzk0Ov3NfAW94WJibWreXYInZJq_VjSYfsfRHDLDpc-09XQEXLDWvAb0bEocXiPsjgZyVFOClIidl7XdUNxe-QL2ZuJABUSilUNnLQW28BT_s8hV3wNYABhHenyK6cY_LfR8Mxw4fUtEDzesLaM8cXOF82yF_lvtSidrmJR75fYFQVAnOaBVmwJk1Shuw7Kl5_7URMzPR1a5wkTt-qnf0qtbrswehQ8-oYpkCKk2cErHWWgRjEX-lZpHUbToej3YP2aIPty1XEcgwviqfWIhlEKeGU1OmN8B0Kut9R43drLMizcOgp-jMkvIOTPjwuWH9c8S83jEQm6UWdgSUaXPRRG-K5YFP_nyStaOhwmTmcQwZg04oYhOhcJoJDLmPyBCscG59Mk7Nhpzpwz_BVHUfq4R1MYMBB_xQc2GaoUj9dPs_76Ow=w216-h232-no?authuser=0",
    season: "Season 2",
  },
  {
    id: 389,
    tokenId: 1002027,
    itemId: "rune_plant_2012_s2_nft",
    name: "Memento Leaf",
    class: "Plant",
    isBlockchain: 1,
    rarity: "Rare",
    effect:
      "This Axie's Summoned Units gain 14 bonus max HP. When die, those Summons grant 1 {Leaf} to the Axie.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_memento_leaf.png",
    season: "Season 2",
  },
  {
    id: 674,
    tokenId: 1003030,
    itemId: "rune_plant_2011_s3_nft",
    name: "Memento Leaf",
    class: "Plant",
    isBlockchain: 1,
    rarity: "Rare",
    effect:
      "This Axie's Summoned Units gain 14 bonus max HP. When die, those Summons grant 1 {Leaf} to the Axie.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_memento_leaf.png",
    season: "Season 3",
  },
  {
    id: 83,
    tokenId: 1000033,
    itemId: "rune_plant_2001_s0_nft",
    name: "Miracle Leaf",
    class: "Plant",
    isBlockchain: 1,
    rarity: "Rare",
    effect:
      "Start Battle with 3 {Leaf}.\nSingle attacks consume 1 {Leaf} and deal 15 bonus DMG.\nAoE attacks consume 1 {Leaf} and deal 6 bonus DMG.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_plant_offensive_1.png",
    season: "Season 0",
  },
  {
    id: 190,
    tokenId: 1001033,
    itemId: "rune_plant_2001_s1_nft",
    name: "Miracle Leaf",
    class: "Plant",
    isBlockchain: 1,
    rarity: "Rare",
    effect:
      "This Axie's attack cards deal 1 bonus DMG per {Leaf}. Double the effect if max stack.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_plant_offensive_1.png",
    season: "Season 1",
  },
  {
    id: 230,
    tokenId: null,
    itemId: "",
    name: "Miracle Leaf",
    class: "Plant",
    isBlockchain: 1,
    rarity: "Rare",
    effect:
      "This Axie's Attack cards deal 1 bonus DMG for each of its {Leaf}. This effect is doubled if this Axie's {Leaf} is at maximum stack.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_plant_offensive_1.png",
    season: "Season 2",
  },
  {
    id: 350,
    tokenId: 1002026,
    itemId: "rune_plant_2011_s2_nft",
    name: "Miracle Leaf",
    class: "Plant",
    isBlockchain: 1,
    rarity: "Rare",
    effect:
      "This Axie's Attacks deal 1 bonus DMG per {Leaf}. Double the bonus DMG if the Axie reaches max {Leaf} stack.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_plant_offensive_1.png",
    season: "Season 2",
  },
  {
    id: 229,
    tokenId: null,
    itemId: "",
    name: "Way of Plant",
    class: "Plant",
    isBlockchain: 1,
    rarity: "Rare",
    effect:
      "When the battle starts, this Axie gains 2 {Leaf}. This Axie's Healing cards heal 10% bonus HP.",
    image:
      "https://lh3.googleusercontent.com/l4ltsIv412g-jd6sAA-rM9p5kLn8WsnGkadaWNZ0vagmiEKWniEZe5LOh5radiNycBt_pDXBgwjSK3DYmmf3XZsjBCMZh1_350s3jDaoG-0exg1wjvVo9xbvuhRs9-DaF6zsC3r_prbftT92ojz-eMzvxeX3IwV6hyhI-3gJvNaf5IdVKNgubN_kbn8YNO4nbnvdbezXaDVnEBKTeypg5gla5uEE9-00g9jllztiJ74cPdLF9KmeSUY4nBSyWFjbidMytIHAoZ1KRubpKv84Bxhvz0l3bxW7eDgaH2ALiurnnh0Fh5YHoqyLlkuWjdsA_xfhEIHFp7S7-iPkCaSejC8jKQxP0S8k8xkbamx1fzAUT9g3APgXG1DN03JZ1atwof7Tk8rOb8dMx3mfec5rAPYAmnNGvqQwJeZ_MQ94FrXUZPWjUrQdN6Sfzjn5NmZGZbFlLqGOjAOWpz4bld3SyLYRp70mdUh291HGJXEd4juUhOoNqR4JnFPj7UsUMCvqG9J6kCjmYYj1ER4Z37tKaZSi9SmH6b-JPYy0LJxAWYR1Y__gLlpMDz1A67z0o9yFa6r0vwQy3DdtEOxgkpJs65PWuD-4Ilsk27uF2Wjng-FX9qxZQI93_clYw90vbAnHI02NTwOiBXgiqiespS-JDcZjridyqhYMs2iWsD3-apT9g55tO4cr-JhNMy9IOUTdRd7VetnUrAdD02SRrKEtXiGm35xq4oTdinX1nDEjHcnYEDNfPVKXWha2CloHZNg2T8JMkzPGxK_1vSGQfU04uncdN2FJ2N3SCtd9HdoXrWIJurPVQNINU6kay8kzIYSIH3cXXQQlXBxbXvIFEF63Rw_gh-65vnmudkXRhmCKuwvK67eeUfRfvz8Uh24DDWVCpcrBdNC8EwqQ4dtXOKu8uQD_5h1uE1FfxVgfiwwX-tod=w216-h232-no?authuser=0",
    season: "Season 2",
  },
  {
    id: 289,
    tokenId: 1002025,
    itemId: "rune_plant_2010_s2_nft",
    name: "Way of Plant",
    class: "Plant",
    isBlockchain: 1,
    rarity: "Rare",
    effect:
      "When the battle starts, this Axie gains 2 {Leaf}, then its Heal cards grant 10% bonus HP for the rest of the battle.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_way_of_plant.png",
    season: "Season 2",
  },
  {
    id: 695,
    tokenId: 1003029,
    itemId: "rune_plant_2010_s3_nft",
    name: "Way of Plant",
    class: "Plant",
    isBlockchain: 1,
    rarity: "Rare",
    effect:
      "When the battle starts, this Axie gains 2 {Leaf}. This Axie's base HP is increase by 8%.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_way_of_plant.png",
    season: "Season 3",
  },
  {
    id: 765,
    tokenId: 1004029,
    itemId: "rune_plant_2010_s4_nft",
    name: "Way of Plant",
    class: "Plant",
    isBlockchain: 1,
    rarity: "Rare",
    effect:
      "When the battle starts, this Axie gains 2 {Leaf}. This Axie's base HP is increase by 8%.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_way_of_plant.png",
    season: "Season 4",
  },
  {
    id: 11,
    tokenId: 1000039,
    itemId: "rune_reptile_3001_s0_nft",
    name: "Poison Touch",
    class: "Reptile",
    isBlockchain: 1,
    rarity: "Epic",
    effect:
      "{Solo}. Apply 1 {Poison} to Attacker. Take 2% less DMG per {Poison} stack on the attacking enemy. Max at 20%.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_reptile_hybrid_1.png",
    season: "Season 0",
  },
  {
    id: 175,
    tokenId: 1001039,
    itemId: "rune_reptile_3001_s1_nft",
    name: "Poison Touch",
    class: "Reptile",
    isBlockchain: 1,
    rarity: "Epic",
    effect:
      "{Solo}. Apply 1 {Poison} to the attacker. Take 2% less DMG per {Poison} stack on the attacker. Max at 20%.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_reptile_hybrid_1.png",
    season: "Season 1",
  },
  {
    id: 257,
    tokenId: null,
    itemId: "",
    name: "Poison Touch",
    class: "Reptile",
    isBlockchain: 1,
    rarity: "Epic",
    effect:
      "{Solo}. When this Axie gets attacked, Apply 1 {Poison} to the attacker. This Axie takes 2% less DMG for each {Poison} stack on the attacker. (Cap at 20% DMG reduction)",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_reptile_hybrid_1.png",
    season: "Season 2",
  },
  {
    id: 401,
    tokenId: 1002040,
    itemId: "rune_reptile_3010_s2_nft",
    name: "Poison Touch",
    class: "Reptile",
    isBlockchain: 1,
    rarity: "Epic",
    effect:
      "{Solo}. When this Axie gets attacked, apply 1 {Poison} to the attacker. The Axie also takes 2% less DMG for each {Poison} stack on the attacker. Max at 20%.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_reptile_hybrid_1.png",
    season: "Season 2",
  },
  {
    id: 258,
    tokenId: null,
    itemId: "",
    name: "Prehistoric Armor",
    class: "Reptile",
    isBlockchain: 1,
    rarity: "Epic",
    effect:
      "{Solo}. {Spike} on this Axie grant 3 bonus {Bloodspike}. Whenever this Axie gains a {Bloodspike} from {Spike}, heal 1 HP.",
    image:
      "https://lh3.googleusercontent.com/BQPOONBDXdJbfg-WZegbF5wdk3lL_Ac5en43VxxHdPgWuar9GfQK1aEHSb-zFEaoCGxujFQyQSRjP8A-tgYmAq305nm5U7iqrk2haH9u2FZlYZEuq_4n-ZL7FVs4U1jTd6LQ1u0JiwHw6FqPDX96hA5akISzZ3aPhBzQKVxA49TK_OSd1LMGLK1WWU8znj-nyGPmfyiNyw_JNR8xFiuPYrOsYh40K4z4XyGTQrjD6JlLqnGzyjOysQbDVgUSzSGN431GJ4hU3rBed7762TAV_cs_ROv0tVYB8UxCuQuSjG5ZfXHioRIa_WevFpQww-_sNQSzjV6LIF0GLMRoSukYca4w61QqAp4pWMV7aS37Zv27f7Rdsu3C-P-PeblqdnKCKMC8L3Bp0biRU1nOYAinTi-a8CoHZPOC-JZbRuC05B3XEi3WZoAJQ21GbPkX-QkgUg1SF2sxl5xk1sUcxEE8vNYEsj0jF6_I9xTjOTmJfTSYxJyZ1jPRtwK-5yuzguWTSYVIHJj-NErw4vKW3Y3_40JwzGBsIQylCclqAR-RUxuOhV7vz5WrjSvmOIIGwsEivg-vMqXzPuhzkepUnqAJSVXusMrXme3sE5oV5gYiG7PU6BnUQbCG0bU3JRokjiN7EEGEenMKT-fWJm3yVY_WQCUOVwcpaC-1HWv1MIHKDGOxwtoU-Rz5VU91rmN07Z7VeCVC4kijbb_p8ccPp0fbuNBhh56HO3UT9LdFMc-BsjWFGzixHT74xsBrqYLfcfV0c9rgS4dpFdI81ynZLYBMUDocbUD0gD3tyvSUG-w4J8vconRiRcAXKJbnFWXEfKna1AYHLs4J1htCT2GYeIJtI0UgQl0mK06P2k0xDEVxha1s-7a_G3HSOiLQGpRC4oDNHUyNCSpt6G2B1zEpy5DTA7IrZj6DGN5jO9h0mCnkBLgq=w216-h232-no?authuser=0",
    season: "Season 2",
  },
  {
    id: 433,
    tokenId: 1002041,
    itemId: "rune_reptile_3011_s2_nft",
    name: "Prehistoric Armor",
    class: "Reptile",
    isBlockchain: 1,
    rarity: "Epic",
    effect:
      "{Solo}. When your turn starts, this Axie gains 1 {Spike}. {Spike} on this Axie grant 3 bonus {Bloodspike}. Whenever hit, this Axie heals 8 HP.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_prehistoric_armor.png",
    season: "Season 2",
  },
  {
    id: 671,
    tokenId: 1003047,
    itemId: "rune_reptile_3012_s3_nft",
    name: "Prehistoric Armor",
    class: "Reptile",
    isBlockchain: 1,
    rarity: "Epic",
    effect:
      "{Solo}. When your turn starts, this Axie gains 1 {Spike}. {Spike} on this Axie grant 3 bonus {Bloodspike}. Whenever hit, this Axie heals 10 HP.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_prehistoric_armor.png",
    season: "Season 3",
  },
  {
    id: 794,
    tokenId: 1004047,
    itemId: "rune_reptile_3012_s4_nft",
    name: "Prehistoric Armor",
    class: "Reptile",
    isBlockchain: 1,
    rarity: "Epic",
    effect:
      "{Solo}. When your turn starts, this Axie gains 1 {Spike}. {Spike} on this Axie grant 3 bonus {Bloodspike}. Whenever hit, this Axie heals 10 HP.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_prehistoric_armor.png",
    season: "Season 4",
  },
  {
    id: 721,
    tokenId: 1003046,
    itemId: "rune_reptile_3011_s3_nft",
    name: "Shellshock",
    class: "Reptile",
    isBlockchain: 1,
    rarity: "Epic",
    effect:
      "{Solo}. When an allied Secret is triggered, deal 15 <Pure DMG> to all enemy Axies then heal this Axie for 15 HP.\n(Revealed Shields isn't a triggered Secret).",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_reptile_defensive_1.png",
    season: "Season 3",
  },
  {
    id: 830,
    tokenId: 1004046,
    itemId: "rune_reptile_3011_s4_nft",
    name: "Shellshock",
    class: "Reptile",
    isBlockchain: 1,
    rarity: "Epic",
    effect:
      "{Solo}. When an allied Secret is triggered, deal 15 <Pure DMG> to all enemy Axies then heal this Axie for 15 HP.\n(Revealed Shields isn't a triggered Secret).",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_reptile_defensive_1.png",
    season: "Season 4",
  },
  {
    id: 688,
    tokenId: 1003045,
    itemId: "rune_reptile_3010_s3_nft",
    name: "Venom Master",
    class: "Reptile",
    isBlockchain: 1,
    rarity: "Epic",
    effect:
      "{Solo}. Before the battle starts, add 1 [Venom Burst] to your Deck. This Axie's attacks deal -15% DMG and apply 1 {Poison} per hit.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_reptile_offensive_1.png",
    season: "Season 3",
  },
  {
    id: 890,
    tokenId: 1004045,
    itemId: "rune_reptile_3010_s4_nft",
    name: "Venom Master",
    class: "Reptile",
    isBlockchain: 1,
    rarity: "Epic",
    effect:
      "{Solo}. Before the battle starts, add 1 [Venom Burst] to your Deck. This Axie's attacks deal -15% DMG and apply 1 {Poison} per hit.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_reptile_offensive_1.png",
    season: "Season 4",
  },
  {
    id: 650,
    tokenId: 1003049,
    itemId: "rune_reptile_4011_s3_nft",
    name: "Paralyzing Glare",
    class: "Reptile",
    isBlockchain: 1,
    rarity: "Mystic",
    effect:
      "{Solo}. This Axie's Debuff Abilities apply {Doubt} for 2 turns then deal <Pure DMG> equal to (3 + total debuff stacks and debuff turns on the target) to all enemy Axies (cap at 20 DMG).",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_paralyzing_glare.png",
    season: "Season 3",
  },
  {
    id: 759,
    tokenId: 1004049,
    itemId: "rune_reptile_4011_s4_nft",
    name: "Paralyzing Glare",
    class: "Reptile",
    isBlockchain: 1,
    rarity: "Mystic",
    effect:
      "{Solo}. This Axie's Debuff Abilities apply {Doubt} for 2 turns then deal <Pure DMG> equal to (3 + total debuff stacks and debuff turns on the target) to all enemy Axies (cap at 20 DMG).",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_paralyzing_glare.png",
    season: "Season 4",
  },
  {
    id: 669,
    tokenId: 1003048,
    itemId: "rune_reptile_4010_s3_nft",
    name: "Regenerator",
    class: "Reptile",
    isBlockchain: 1,
    rarity: "Mystic",
    effect:
      "{Solo}. When your turn start, <Cleanse> this Axie 1 time. If its HP > 75%, <Cleanse> 1 more time, otherwise, heal 10% of its max HP.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_reptile_utility_1.png",
    season: "Season 3",
  },
  {
    id: 843,
    tokenId: 1004048,
    itemId: "rune_reptile_4010_s4_nft",
    name: "Regenerator",
    class: "Reptile",
    isBlockchain: 1,
    rarity: "Mystic",
    effect:
      "{Solo}. When your turn start, <Cleanse> this Axie 1 time. If its HP > 75%, <Cleanse> 1 more time, otherwise, heal 10% of its max HP.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_reptile_utility_1.png",
    season: "Season 4",
  },
  {
    id: 101,
    tokenId: 1000040,
    itemId: "rune_reptile_4001_s0_nft",
    name: "Regenerator",
    class: "Reptile",
    isBlockchain: 1,
    rarity: "Mystic",
    effect:
      "{Solo}. When your turn start, {Cleanse} 2 random debuffs if HP is above 75% or recover 10% of max HP if not.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_reptile_utility_1.png",
    season: "Season 0",
  },
  {
    id: 136,
    tokenId: 1001040,
    itemId: "rune_reptile_4001_s1_nft",
    name: "Regenerator",
    class: "Reptile",
    isBlockchain: 1,
    rarity: "Mystic",
    effect:
      "{Solo}. When your turn starts, {Cleanse} this Axie 1 time.\nIf this Axie's HP is above 75%, {Cleanse} 1 additional time. If not, recover 10% of its max HP.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_reptile_utility_1.png",
    season: "Season 1",
  },
  {
    id: 259,
    tokenId: null,
    itemId: "",
    name: "Regenerator",
    class: "Reptile",
    isBlockchain: 1,
    rarity: "Mystic",
    effect:
      "{Solo}. When your turn starts, {Cleanse} this Axie 1 time. If this Axie's HP is above 75%, {Cleanse} this Axie 1 time, otherwise, this Axie heals 10% of its Max HP.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_reptile_utility_1.png",
    season: "Season 2",
  },
  {
    id: 422,
    tokenId: 1002042,
    itemId: "rune_reptile_4010_s2_nft",
    name: "Regenerator",
    class: "Reptile",
    isBlockchain: 1,
    rarity: "Mystic",
    effect:
      "{Solo}. When your turn start, <Cleanse> this Axie 1 time. If its HP > 75%, <Cleanse> 1 more time, otherwise, heal 10% of its max HP.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_reptile_utility_1.png",
    season: "Season 2",
  },
  {
    id: 126,
    tokenId: 1000037,
    itemId: "rune_reptile_2001_s0_nft",
    name: "Delayed Protection",
    class: "Reptile",
    isBlockchain: 1,
    rarity: "Rare",
    effect:
      "When your turn starts, gain 12 Shield for each attack this Axie took in the previous turn.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_reptile_defensive_1.png",
    season: "Season 0",
  },
  {
    id: 731,
    tokenId: 1003044,
    itemId: "rune_reptile_2011_s3_nft",
    name: "Poison Touch",
    class: "Reptile",
    isBlockchain: 1,
    rarity: "Rare",
    effect:
      "When this Axie gets hit, apply 1 {Poison} to the attacker. The Axie also takes 1% less DMG for each {Poison} stack on the attacker. Max at 15%.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_reptile_hybrid_1.png",
    season: "Season 3",
  },
  {
    id: 838,
    tokenId: 1004044,
    itemId: "rune_reptile_2011_s4_nft",
    name: "Poison Touch",
    class: "Reptile",
    isBlockchain: 1,
    rarity: "Rare",
    effect:
      "When this Axie gets hit, apply 1 {Poison} to the attacker. The Axie also takes 1% less DMG for each {Poison} stack on the attacker. Max at 15%.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_reptile_hybrid_1.png",
    season: "Season 4",
  },
  {
    id: 135,
    tokenId: 1001037,
    itemId: "rune_reptile_2001_s1_nft",
    name: "Shellshock",
    class: "Reptile",
    isBlockchain: 1,
    rarity: "Rare",
    effect:
      "When a Secret on any ally triggered, deal 10 <Pure DMG> to a random enemy Axie, then this Axie heal 10 HP. (revealed Shield isn't a triggered Secret)",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_reptile_defensive_1.png",
    season: "Season 1",
  },
  {
    id: 254,
    tokenId: null,
    itemId: "",
    name: "Shellshock",
    class: "Reptile",
    isBlockchain: 1,
    rarity: "Rare",
    effect:
      "Whenever an allied Secret is triggered, randomly deal 10 Pure DMG to an enemy Axie and this Axie is healed for 10 HP.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_reptile_defensive_1.png",
    season: "Season 2",
  },
  {
    id: 506,
    tokenId: 1002039,
    itemId: "rune_reptile_2012_s2_nft",
    name: "Shellshock",
    class: "Reptile",
    isBlockchain: 1,
    rarity: "Rare",
    effect:
      "When a Secret on any ally triggered, deal 10 <Pure DMG> to a random enemy Axie, then heal 10 HP to this Axie. (revealed Shield isn't a triggered Secret)",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_reptile_defensive_1.png",
    season: "Season 2",
  },
  {
    id: 33,
    tokenId: 1000038,
    itemId: "rune_reptile_2002_s0_nft",
    name: "Venom Master",
    class: "Reptile",
    isBlockchain: 1,
    rarity: "Rare",
    effect:
      "Attack cards apply 1 additional {Poison}.\nNon- Multihit Attacks deal 1 bonus DMG per 2 {Poison} on target.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_reptile_offensive_1.png",
    season: "Season 0",
  },
  {
    id: 134,
    tokenId: 1001038,
    itemId: "rune_reptile_2002_s1_nft",
    name: "Venom Master",
    class: "Reptile",
    isBlockchain: 1,
    rarity: "Rare",
    effect: "Single Attacks apply 2 {Poison} but deal 25% less DMG.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_reptile_offensive_1.png",
    season: "Season 1",
  },
  {
    id: 256,
    tokenId: null,
    itemId: "",
    name: "Venom Master",
    class: "Reptile",
    isBlockchain: 1,
    rarity: "Rare",
    effect:
      "This Axie's Single Attack cards apply 2 {Poison} and deal 25% less DMG.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_reptile_offensive_1.png",
    season: "Season 2",
  },
  {
    id: 521,
    tokenId: 1002038,
    itemId: "rune_reptile_2011_s2_nft",
    name: "Venom Master",
    class: "Reptile",
    isBlockchain: 1,
    rarity: "Rare",
    effect:
      "This Axie's Single Attacks apply 2 {Poison} but deal 25% less DMG.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_reptile_offensive_1.png",
    season: "Season 2",
  },
  {
    id: 255,
    tokenId: null,
    itemId: "",
    name: "Way of Reptile",
    class: "Reptile",
    isBlockchain: 1,
    rarity: "Rare",
    effect:
      "When the battle starts, this Axie gains 2 {Spike}. When your turn ends, this Axie is healed for 3% of its Max HP.",
    image:
      "https://lh3.googleusercontent.com/09h1OoonAQGmv3HbIBRAIvQyBjZWKIGzpKLVfYqwdU5VXydo1dAHUyWQILWipEf4eV3SRygMh4bKLGIHuyd7lMojSMp0I9HX2S_dWknX25vb4w2yXMi2siFeflEEkK7Y3MUTCuldTWZknmxxxc-GR1Z40C0ttrPbwC5LvT-ZA5wxeZHzNtHYTgfqxlJaB8wX-lNbeuTbM8dNWxzv6Gn_A9P8wk_WIm9erDtYHLslCP9k1HHmK5VmaKgxpNka4Lr3dQkaTokgDJ7OAyxAI1QGZXMckJJLu0OkBBV1pfj45b7lnv3k1qUonR0anbWuRwlXIKdR2wIk_4c3q-9NcfczmXwpAHzhiI-7veGvBWU2vtBqlIWrqUp1Jho8COrr3pUJEyKGB6VCuM5Ni4Q4N_CDKGPV5WXHH2wIltZNTo9WFz388GW80BFEemVgcJUB75q0RzJwt6rGmIPUpawp9VhyPQYLo0Wogsyr9eSB9kyss1TSI7ZiRJgevUnlE9oieYSLGxMLrFiClbOrCJXsiIe5jWimtUzUpEkTp3ZGlZiD8i3hepuWtv6CHp_3IZltLYRWc-A7KWbuKl0uTozLML4OtmrllgjnirEicjjqHJk4biM6Z3SVI27xGBULAyrEqfrNSUn-EJZ4SKzvRxrdm1bRn1BkLGT7HwIjvYg6ybetkfLEwMQeL77_hLEpNgBRaOzPCDyKTzhbHKV45YnVQ-UWmhnU3MTaA1E-kLcimfObyM5o89WVvVn4_SiiLOZQn-aWIPrbjJFXSHd8HCCpP_1CZvJDoIJY1dK91SEqDzeQJSvBf-CKyQaDpXMlQIloBCjlQTL2TU3R6_KyKMEqJxlS9FWteVKAxOa52D8nQma6xwLU7_0Fj-PQeWwsnK5LPME1YhLIQRSdri5RfHQXq_TFAN2ywx_TILZQ0iKBkCIpBL7w=w216-h232-no?authuser=0",
    season: "Season 2",
  },
  {
    id: 507,
    tokenId: 1002037,
    itemId: "rune_reptile_2010_s2_nft",
    name: "Way of Reptile",
    class: "Reptile",
    isBlockchain: 1,
    rarity: "Rare",
    effect:
      "When the battle starts, this Axie gains 2 {Spike}, then for the rest of the battle, when your turn ends, it heals HP = 3% of its max HP.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_way_of_reptile.png",
    season: "Season 2",
  },
  {
    id: 708,
    tokenId: 1003043,
    itemId: "rune_reptile_2010_s3_nft",
    name: "Way of Reptile",
    class: "Reptile",
    isBlockchain: 1,
    rarity: "Rare",
    effect:
      "When the battle starts, this Axie gains 2 {Spike}s. When your turn ends, this Axie heals HP = 5% of its max HP.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_way_of_reptile.png",
    season: "Season 3",
  },
  {
    id: 930,
    tokenId: 1004043,
    itemId: "rune_reptile_2010_s4_nft",
    name: "Way of Reptile",
    class: "Reptile",
    isBlockchain: 1,
    rarity: "Rare",
    effect:
      "When the battle starts, this Axie gains 2 {Spike}s. When your turn ends, this Axie heals HP = 5% of its max HP.",
    image:
      "https://storage.googleapis.com/origin-production/assets/item/rune_way_of_reptile.png",
    season: "Season 4",
  },
];