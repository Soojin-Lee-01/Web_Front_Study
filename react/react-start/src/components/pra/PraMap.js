import { useState } from "react";

export default function PraMap() {
  const [data, setData] = useState([]);
  const addData = () => {
    const newName = document.querySelector(".name").value;
    const newEmail = document.querySelector(".email").value;
    const newData = data.concat({
      id: data.length + 1,
      name: newName,
      email: newEmail,
    });
    setData(newData);
  };

  const activeEvent = (event) => {
    if (event.key === "Enter") {
      addData();
    }
  };
  // 삭제하는 연산자
  const deleteData = (id) => {
    const newData = data.filter((el) => {
      return el.id != id;
    });
    setData(newData);
  };

  return (
    <div>
      <div>
        작성자 : <input className="name" type="text" placeholder="이름" />
        제목 :{" "}
        <input
          className="email"
          type="text"
          placeholder="이메일"
          onKeyDown={activeEvent}
        />
        <button onClick={addData}>등록</button>
      </div>
      <div>
        <select>
          <option>작성자</option>
          <option>제목</option>
        </select>
        <input type="text" placeholder="검색어" />
        <button>검색</button>
        <button>전체</button>
      </div>
      <div>
        <table border="1px solid #000" cellSpacing="0">
          <tr>
            <th>번호</th>
            <th>제목</th>
            <th>작성자</th>
          </tr>
          {data.map((el) => {
            return (
              <tr>
                <th>{el.id}</th>
                <th>{el.name}</th>
                <th>{el.email}</th>
              </tr>
            );
          })}
        </table>
      </div>
    </div>
  );
}
