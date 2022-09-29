import './App.scss';

import { useEffect, useState } from 'react';

interface Color {
  keyword: string;
  value: string;
}

const App = () => {
  const [colors, setColors] = useState<Color[]>([]);

  useEffect(
    () =>
      void fetch(
        'https://gist.githubusercontent.com/sabry-awad97/b79b2c0b58a5bb16368c9733cad93939/raw/c8decba5ed4288b0375e50ce371a63b8d412d040/css-colors'
      )
        .then(r => r.json())
        .then((colors: Color[]) => {
          colors.sort((a, b) => a.keyword.localeCompare(b.keyword));
          setColors(colors);
        }),
    []
  );

  return (
    <>
      <h1>CSS Colors</h1>
      <div className="card">
        {colors.map(({ keyword, value }, idx) => (
          <div key={idx} className="card__item">
            <div
              style={{
                backgroundColor: value,
              }}
              className="card__rectangle"
            ></div>
            <div className="card__label">{keyword}</div>
          </div>
        ))}
      </div>
    </>
  );
};

export default App;
