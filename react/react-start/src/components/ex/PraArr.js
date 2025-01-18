import { useState } from "react";
export default function PraArr(test) {
  const [count, setCount] = useState(0);
  const changeArr = () => {
    if (count >= test.objArr.length - 1) {
      setCount(0);
    } else {
      setCount(count + 1);
    }
  };
  return (
    <div>
      <p>이름 : {test.objArr[count].name}</p>
      <p>나이 : {test.objArr[count].age}</p>
      <p>별명 : {test.objArr[count].nickName}</p>
      <button onClick={changeArr}>멤버 바꾸기</button>
    </div>
  );
}
