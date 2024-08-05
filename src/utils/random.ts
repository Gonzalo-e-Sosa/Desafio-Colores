export function getRandomHexaNumber(key = 0): string {
  return Math.floor((Math.random() + key) * 0xffffff).toString(16).padEnd(6, "0")
}