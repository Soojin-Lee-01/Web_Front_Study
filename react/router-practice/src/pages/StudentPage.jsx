import { useNavigate, useParams, useSearchParams } from "react-router-dom";

export default function StudentPage() {
  const navigate = useNavigate();

  const params = useParams();
  console.log(params.name);

  const { name } = useParams();
  const [searchParams] = useSearchParams();
  const real_name = searchParams.get("name");
  console.log(real_name);

  return (
    <>
      <p>학생의 이름은 {name}입니다.</p>
      <p>실제 이름은 {real_name}입니다. 😋</p>
      <button onClick={() => navigate("/")}>이전 페이지로</button>
    </>
  );
}
