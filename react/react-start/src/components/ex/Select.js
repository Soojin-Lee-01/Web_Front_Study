export default function Select({ setData }) {
  return (
    <div>
      {/* select 3개 */}
      과일 :
      <select
        onChange={(event) => {
          //   console.log("t", event.target);
          //   console.log("ct", event.currentTarget);
          //   console.log(event.target.value);
          setData((prevState) => {
            return { ...prevState, fruit: event.target.value };
          });
        }}
      >
        <option value="apple">사과</option>
        <option value="grape">포도</option>
        <option value="peach">복숭아</option>
        <option value="banana">바나나</option>
      </select>
      배경색 :
      <select
        onChange={(event) => {
          setData((prevState) => {
            return { ...prevState, background: event.target.value };
          });
        }}
      >
        <option value="black">검정색</option>
        <option value="white">흰색</option>
        <option value="red">빨간색</option>
        <option value="yellow">노란색</option>
        <option value="green">초록색</option>
        <option value="purple">보라색</option>
        <option value="blue">파란색</option>
        <option value="pink">핑크색</option>
      </select>
      글자색 :
      <select
        onChange={(event) => {
          setData((prevState) => {
            return { ...prevState, color: event.target.value };
          });
        }}
      >
        <option value="black">검정색</option>
        <option value="white">흰색</option>
        <option value="red">빨간색</option>
        <option value="yellow">노란색</option>
        <option value="green">초록색</option>
        <option value="purple">보라색</option>
        <option value="blue">파란색</option>
        <option value="pink">핑크색</option>
      </select>
    </div>
  );
}
