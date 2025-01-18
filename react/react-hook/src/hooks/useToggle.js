import { useState } from "react";

// initialState가 안들어왔을 때는 false가 초기값이 된다.
export default function useToggle(initialState = false) {
  // value 는 토글의 상태
  const [value, setValue] = useState(initialState);

  // value 를 반대값으로 전환시키는 함수
  const toggleValue = () => {
    setValue(!value);
  };

  // 현재의 value 값과, 반대전환함수를 배열에 담아서 리턴
  return [value, toggleValue];
}
