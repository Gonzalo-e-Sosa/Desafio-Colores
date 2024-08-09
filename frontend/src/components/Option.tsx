import './Option.css';
import type { Level as TLevel } from '../types.d';
import { getRandomHexadecimalNumber } from '../utils/func';

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
          ? getRandomModifiedHexadecimalNumber(seedColor, id)
          : getRandomHexadecimalNumber();
        break;
      case 'normal':
        color = id % 2 === 0
          ? getRandomModifiedHexadecimalNumber(seedColor, id)
          : getRandomHexadecimalNumber(id);
        break;
      case 'difícil':
        color = getRandomModifiedHexadecimalNumber(seedColor, id);
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

const getRandomModifiedHexadecimalNumber = (seedColor: string, id: number): string => {
  const randomPos = Math.floor(Math.random() * 6);
  const randomNum = Math.floor((Math.random() + id) * 0xff);
  const fractionToChange = seedColor.substring(randomPos, randomPos + 1);

  return seedColor.replace(fractionToChange, randomNum.toString(16));
};

export default Option;