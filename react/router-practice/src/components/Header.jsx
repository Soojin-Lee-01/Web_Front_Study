import { Link } from "react-router-dom";

export default function Header() {
  const style = { margin: "4px" };
  return (
    <header className="Header">
      <h2>React Router 실습</h2>
      <nav>
        <ul>
          <li style={style}>
            <Link to="/student/sean">학생</Link>
          </li>
          <li style={style}>
            <Link to="/student/coding">코딩</Link>
          </li>
          <li style={style}>
            <Link to="/student/new?name=soojin">searchParams</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
