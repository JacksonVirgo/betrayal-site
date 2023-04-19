export const goodRoleNames = [
    "agent",
    "analyst",
    "biker",
    "cerberus",
    "detective",
    "fisherman",
    "gunman",
    "hero",
    "hydra",
    "judge",
    "manager",
    "mecha",
    "medium",
    "nurse",
    "seraph",
    "terminal",
    "time traveller",
    "undercover",
    "wizard",
    "yeti",
];

export const neutralRoleNames = [
    "amalgamation",
    "backstabber",
    "banker",
    "bard",
    "bomber",
    "cheater",
    "cyborg",
    "entertainer",
    "ghost",
    "goliath",
    "incubus",
    "masochist",
    "mimic",
    "nephilim",
    "pathologist",
    "sidekick",
    "succubus",
    "tinkerer",
    "villager",
    "wanderer",
];

export const evilRoleNames = [
    "anarchist",
    "arsonist",
    "bartender",
    "consort",
    "cultist",
    "doll",
    "forsaken angel",
    "gatekeeper",
    "hacker",
    "highwayman",
    "hunter",
    "imp",
    "jester",
    "juggernaut",
    "overlord",
    "phantom",
    "psychotherapist",
    "slaughterer",
    "threatener",
    "witchdoctor",
];

export type Role = {
    name: string;
    alignment: "good" | "neutral" | "evil";
    flavour?: string;
    abilities: Ability[];
    perks: Perk[];
};

export type Ability = {
    name: string;
    effect: string;
    charges?: number;
    rarity:
        | "common"
        | "uncommon"
        | "rare"
        | "epic"
        | "legendary"
        | "mythic"
        | "unique"
        | "ultimate"
        | "none";
};

export type Perk = {
    name: string;
    effect: string;
};

export const roles: Record<string, Role> = {};
roles["agent"] = {
    name: "Agent",
    alignment: "good",
    flavour:
        "Your whole life, you've been watching others. Your scouting skills have stayed intact and led you to prepare for a life-threatening moment like this.",
    abilities: [
        {
            name: "Follow",
            effect: "You will know everything your target does and who to for 24 hours from use. Does not include perk-based actions.",
            charges: 3,
            rarity: "common",
        },
        {
            name: "Spy",
            effect: "You will know everything that happens to your target and who die it 24 hours from use.",
            charges: 3,
            rarity: "common",
        },
        {
            name: "Hidden",
            effect: "For 24 hours on use, anything done on you will be reflected back to the user.",
            charges: 2,
            rarity: "uncommon",
        },
    ],
    perks: [
        {
            name: "Hawkeye",

            effect: "If someone steals from you, you will know who did it.",
        },
        {
            name: "Organised",
            effect: "Your vote cannot be stolen, blocked or tampered with in any way.",
        },
        {
            name: "Tracker",
            effect: "If anyone in your alliance does a positive action to someone outside of your alliance, you will know who gave who, but not what it was.",
        },
    ],
};
