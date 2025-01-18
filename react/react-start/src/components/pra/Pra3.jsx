import { useEffect, useState } from "react";
import { useRef } from "react";

export default function Pra3() {
  const inputRef = useRef();
  const [number1, setNumber1] = useState(0);
  const [number2, setNumber2] = useState(0);
  const [operate, setOperate] = useState("+");
  const randomNumber = () => {
    setNumber1(Math.floor(Math.random() * 11));
    setNumber2(Math.floor(Math.random() * 11));
    const oper = Math.floor(Math.random() * 3) + 1;
    if (oper == 1) {
      setOperate("+");
    } else if (oper == 2) {
      setOperate("-");
    } else {
      setOperate("x");
    }
  };

  useEffect(() => {
    randomNumber();
  }, []);

  const result = () => {
    let trueResult = 0;
    if (operate == "+") trueResult = number1 + number2;
    else if (operate == "-") trueResult = number1 - number2;
    else trueResult = number1 * number2;

    const resultNumber = Number(inputRef.current.value);

    if (resultNumber === trueResult) {
      alert("맞았어요~");
      inputRef.current.focus();
    } else {
      alert(`틀렸어요! 정담은 ${trueResult}입니다`);
    }
  };

  return (
    <div>
      <h1>
        {number1} {operate} {number2}
        <br />
        <input type="text" ref={inputRef} />
        <button onClick={result}>정답 제출</button>
      </h1>
    </div>
  );
}
