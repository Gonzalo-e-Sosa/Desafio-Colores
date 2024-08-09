export function getRandomHexadecimalNumber(key = 0): string {
  return Math.floor((Math.random() + key) * 0xffffff).toString(16).padEnd(6, "0")
}

export function fromRGBtoHexadecimal(rgb: string): string {
  return (rgb.split("(")[1].split(")")[0])
    .split(",")
    .map(n => {
      let hex = parseInt(n).toString(16);
      return hex.length == 1
        ? "0" + hex
        : hex
    })
    .join("");
}