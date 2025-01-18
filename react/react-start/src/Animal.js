export default function Animal() {
  const name = "토깽";
  const animal = "토끼";
  let a = 5;
  let b = 3;
  return (
    <div>
      <h2>제 반려 동물의 이름은 {name}입니다.</h2>
      <h2>
        {name}는 {animal}입니다.
      </h2>
      <h2>{3 + 5 === 8 ? "정답입니다." : "오답입니다."}</h2>
      <h2>{a > b && "a가 b보다 큽니다."}</h2>
    </div>
  );
}
