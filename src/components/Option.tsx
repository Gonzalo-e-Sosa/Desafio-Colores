import './Option.css';
import type { Level as TLevel } from '../types.d';
import { getRandomHexaNumber } from '../utils/random';

interface Props {
  id: number
  seedColor: string
  generateRandom: boolean
  level: TLevel
  onClick: (e: React.MouseEvent) => void
}

const Option: React.FC<Props> = ({ id, seedColor, generateRandom, level, onClick }) => {
  let color = seedColor;

  if (generateRandom) {
    switch (level) {
      case 'fácil':
        color = id % 2 === 0
          ? getRandomModifiedHexaNumber(seedColor, id)
          : getRandomHexaNumber();
        break;
      case 'normal':
        color = id % 2 === 0
          ? getRandomModifiedHexaNumber(seedColor, id)
          : getRandomHexaNumber(id);
        break;
      case 'difícil':
        color = getRandomModifiedHexaNumber(seedColor, id);
        break;
    }
  }

  return (
    <button
      onClick={onClick}
      className="option"
      style={{ backgroundColor: `#${color}` }}
    >
    </button>
  )
}

const getRandomModifiedHexaNumber = (seedColor: string, id: number): string => {
  const randomPos = Math.floor(Math.random() * 6);
  const randomNum = Math.floor((Math.random() + id) * 0xff);
  const fractionToChange = seedColor.substring(randomPos, randomPos + 1);

  return seedColor.replace(fractionToChange, randomNum.toString(16));
};

export default Option;