import './App.css'
import Option from './components/Option';
import { getRandomHexaNumber } from './utils/random';
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
  const correctOption = Math.round(Math.random() * 6);

  function handleSelection() {

  }

  return (
    <main>
      <div id='title'>
        <h1>Colores</h1>
        <select
          onChange={
            (e) => {
              setLevel(Number(e.target.value))
              setColor(getRandomHexaNumber())
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
