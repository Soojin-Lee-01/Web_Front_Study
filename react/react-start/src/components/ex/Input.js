export default function Input({ setData }) {
  //   console.log(setData);
  const handleChange = (event) => {
    // console.log("target", event.target);
    // console.log("ctarget", event.currentTarget);
    setData((prevState) => {
      // ...prevState 전개 연산자, 그 후에 content는 덮어쓴다.
      return {
        ...prevState,
        content: event.target.value,
      };
    });
  };
  return (
    <div>
      {/* input 1개 */}
      내용 :
      <input
        type="text"
        placeholder="내용을 입력하세요."
        onChange={handleChange}
      />
    </div>
  );
}
