import { useState, useCallback } from "react";
import { getRandomNumber, getRandomHexadecimal } from "../services/getRandom";

export function useRandomInt({ min, max }: { min: number, max: number })
  : [number, () => void] {
  const [randomNumber, setRandomNumber] = useState<number>(0);
  const generateRandom = useCallback(() => {
    getRandomNumber(max, min)
      .then((number) => setRandomNumber(number));
  }, []);

  return [randomNumber, generateRandom];
}

export function useRandomHexadecimal({ length }: { length: number })
  : [string, () => void] {
  const [randomNumber, setRandomNumber] = useState<string>('');
  const generateRandom = useCallback(() => {
    getRandomHexadecimal(length)
      .then((number) => setRandomNumber(number));
  }, []);

  return [randomNumber, generateRandom];
}