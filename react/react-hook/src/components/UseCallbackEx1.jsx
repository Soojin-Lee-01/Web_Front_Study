import { useCallback, useEffect, useState } from "react";

export default function UseCallbackEx1() {
  const [number, setNumber] = useState(0);
  const [isTrue, setIsTrue] = useState(true);

  const func1 = () => {
    console.log("number : ", +number);
  };

  const func2 = useCallback(() => {
    console.log(`number : ${number} 😀`);
  }, [number]);

  // 함수 변경되었을 때 -> isTrue useState가 변경되면서 number도 변경된다.
  useEffect(() => {
    console.log("함수 1변경");
  }, [func1]);

  useEffect(() => {
    console.log("함수 2변경");
  }, [func2]);
  return (
    <div>
      <br />
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <br />
      <button
        onClick={() => {
          func1();
          func2();
        }}
      >
        call function
      </button>
      <button onClick={() => setIsTrue(!isTrue)}>{isTrue.toString()}</button>
    </div>
  );
}
