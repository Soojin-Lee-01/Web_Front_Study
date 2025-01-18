import { useState } from "react";
import { useRef } from "react";

export default function MapPractice2() {
  const [comment, setComment] = useState([
    { writer: "수진", title: "졸리다" },
    { writer: "철수", title: "안녕" },
    { writer: "영희", title: "배불러" },
  ]);
  const [inputWriter, setInputWriter] = useState(""); // 작성자 등록 input
  const [inputTitle, setInputTitle] = useState(""); // 제목 등록 input
  const [inputSearch, setInputSearch] = useState(""); // 검색어 input

  const [result, setResult] = useState([]); // 검색결과에 대한 배열
  const [searchType, setSearchType] = useState("writer");

  // ref 객체 만듬
  const inputRef = useRef();
  const inputRef2 = useRef();

  const addComment = () => {
    const input1 = inputRef.current.value;
    const input2 = inputRef2.current.value;

    if (input1 === "" && input2 === "") {
      inputRef.current.focus();
    } else if (input1 === "") {
      inputRef.current.focus();
    } else if (input2 === "") {
      inputRef2.current.focus();
    } else {
      let newComment = {
        writer: inputWriter,
        title: inputTitle,
      };
      setComment([...comment, newComment]);

      setInputTitle("");
      setInputWriter("");
    }
  };

  // 검색을 실행하는 함수
  const searchComment = () => {
    let searchResult = comment.filter((item) => {
      console.log(item);
      console.log(item[searchType]);
      console.log("검색어 검사", item[searchType].includes(inputSearch));
      if (!item[searchType].includes(inputSearch)) {
        return null;
      }
      return item;
    });

    console.log(searchResult);
    setResult(searchResult); // 검색어 결과 설정
    setInputSearch("");
  };

  // searchType에 따라 어떤 검색을 할지 결정
  const selectSerachType = (e) => {
    setSearchType(e.target.value);
  };
  return (
    <div>
      <form>
        <label htmlFor="writer">작성자 : </label>
        <input
          type="text"
          name="writer"
          id="writer"
          value={inputWriter}
          onChange={(e) => {
            setInputWriter(e.target.value);
          }}
          ref={inputRef}
        />{" "}
        <label htmlFor="title">제목 : </label>
        <input
          type="text"
          name="title"
          id="title"
          value={inputTitle}
          onChange={(e) => {
            setInputTitle(e.target.value);
          }}
          ref={inputRef2}
        />{" "}
        <button type="button" onClick={addComment}>
          작성
        </button>
      </form>
      {/* 검색폼 */}
      <form>
        <select name="type" onChange={selectSerachType}>
          <option value={"writer"}>작성자</option>
          <option value={"title"}>제목</option>
        </select>
        <input
          type="text"
          onChange={(e) => setInputSearch(e.target.value)}
          name="search"
          placeholder="검색어를 입력해주세요."
          value={inputSearch}
        />
        <button type="button" onClick={searchComment}>
          검색
        </button>
      </form>
      <table border={1} style={{ margin: "30px auto", width: "500px" }}>
        <thead>
          <tr>
            <th>번호</th>
            <th>제목</th>
            <th>작성자</th>
          </tr>
        </thead>
        <tbody>
          {comment.map((value, idx) => {
            return (
              <tr key={idx + 1}>
                <td>{idx + 1}</td>
                <td>{value.title}</td>
                <td>{value.writer}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <h4>검색결과</h4>
      {result.length == 0 ? (
        <h3>검색결과가 없어요! </h3>
      ) : (
        <table border={1} style={{ width: "500px", margin: "0 auto" }}>
          <thead>
            <tr>
              <th>번호</th>
              <th>제목</th>
              <th>작성자</th>
            </tr>
          </thead>
          <tbody>
            {result.map((el, i) => {
              return (
                <tr key={i + 1}>
                  <td>{i + 1}</td>
                  <td>{el.title}</td>
                  <td>{el.writer}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </div>
  );
}
