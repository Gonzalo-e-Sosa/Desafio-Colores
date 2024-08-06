import './App.css'
import Option from './components/Option';
import NotificationCard from './components/NotificationCard';
import { getRandomHexaNumber, fromRGBtoHexadecimal } from './utils/func';
import { useState } from 'react';
import type { Level as TLevel } from './types';

type IDifficulty = {
  [key in TLevel]: number;
};

const Difficulty: IDifficulty = {
  'fácil': 3,
  'normal': 4,
  'difícil': 6
}

function App() {
  // const [isLoading, setIsLoading] = useState(false);
  // const [error, setError] = useState(false);

  const [color, setColor] = useState(getRandomHexaNumber());
  const [level, setLevel] = useState(Difficulty['fácil']);
  const [answer, setAnswer] = useState<string | null>(null);
  const correctOption = Math.round(Math.random() * 6);

  function handleSelection(e: React.MouseEvent) {
    setAnswer(fromRGBtoHexadecimal(e.currentTarget.style.backgroundColor));
  }

  function handleRestart(e: React.MouseEvent) {
    setColor(getRandomHexaNumber())
    setAnswer(null)
  }

  return (
    <main>
      {answer &&
        <NotificationCard
          result={answer === color}
          btnAction={handleRestart}
        />
      }
      <div id='title'>
        <h1>Colores</h1>
        <select
          onChange={
            (e) => {
              setLevel(Number(e.target.value))
              setColor(getRandomHexaNumber())
              setAnswer(null);
            }
          }
          value={level}
        >
          {
            Object.entries(Difficulty).map(([key, value]) => (
              <option key={key} value={value}>
                {key.toUpperCase()}
              </option>
            ))
          }
        </select>
      </div>
      <div id="options">
        {color &&
          <>
            <h2>¿Cuál es #{color}?</h2>
            <div style={{ display: 'flex', gap: '.5rem' }}>
              {
                [...Array(level)].map((_, i) => (
                  <Option
                    key={i}
                    id={Math.round(Math.random() + i)}
                    seedColor={color}
                    generateRandom={i !== correctOption}
                    level={
                      Object.entries(Difficulty).find(([, value]) => value === level)![0] as TLevel
                    }
                    onClick={handleSelection}
                  />
                ))
              }
            </div>
          </>
        }
      </div>
    </main>
  )
}

export default App
