export const Difficulties = {
  Trivial: "Trivial",
  Easy: "Easy",
  Standard: "Standard",
  Hard: "Hard",
  Extreme: "Extreme",
} as const;

export type Difficulty = keyof typeof Difficulties;