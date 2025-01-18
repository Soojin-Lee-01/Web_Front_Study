import { useEffect, useState } from "react";
import { useMemo } from "react";
export default function useMemoObj() {
  const [number, setNumber] = useState(0);
  const [isKorea, setIsKorea] = useState(true);

  //   const location = {
  //     country: isKorea ? "korea" : "abroad",
  //   };
  const location = useMemo(() => {
    return { country: isKorea ? "korea" : "abroad" };
  }, [isKorea]);
  // location의 주소값이 계속 바뀌기 때문에!
  useEffect(() => {
    console.log("location이 변경될 때마다 실행됩니다. :)");
  }, [location]);
  return (
    <div style={{ border: "1px solid blue" }}>
      <input
        type="number"
        onChange={(e) => setNumber(e.target.value)}
        value={number}
      />
      <p>나라 : {location.country}</p>
      <button onClick={() => setIsKorea(!isKorea)}>나라 변경</button>
    </div>
  );
}
