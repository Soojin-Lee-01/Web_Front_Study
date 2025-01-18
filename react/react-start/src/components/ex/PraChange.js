import { useState } from "react";

export default function PraChange() {
  const [number, setNumber] = useState(0);

  const increase = () => {
    setNumber(number + 1);
  };
  const decrease = () => {
    setNumber(number - 1);
  };

  return (
    <div>
      <p>
        {number} {number >= 8 ? "🧑" : "👩"}
      </p>
      <button onClick={increase}>1 증가</button>
      <button onClick={decrease}>1 감소</button>
    </div>
  );
}
