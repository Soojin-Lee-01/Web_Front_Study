import { useRef } from "react";
import { useState } from "react";

export default function Pra2() {
  const inputRef = useRef();
  const [color, setColor] = useState("");
  const changeColor = () => {
    setColor(inputRef.current.value);
    inputRef.current.value = "";
    inputRef.current.focus();
  };
  return (
    <div style={{ backgroundColor: color, height: "50px" }}>
      <input type="text" ref={inputRef} />
      <button onClick={changeColor}>색 적용</button>
    </div>
  );
}
