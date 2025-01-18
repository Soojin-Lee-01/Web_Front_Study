import { useNavigate, useParams } from "react-router-dom";

export default function ProductDetailPage({ products }) {
  const navigate = useNavigate();
  console.log(products);
  // params를 통해서 몇 번 id 정보를 찾고있는지 확인
  // id 기준으로 products에서 원하는 데이터 찾기
  const params = useParams();
  console.log("params", params);
  // {productID: '1'}

  // 객체 분해 구조 할당
  const { productID } = useParams();
  console.log(productID);

  // productID 기준으로 products 에서 원하는 데이터 찾기
  const [targetProduct] = products.filter((p) => p.id === Number(productID));

  console.log(targetProduct);
  // {id, name, body, email} or undefined
  if (!targetProduct) {
    return <main> 없는 상품이에요</main>;
  }

  return (
    <main>
      <p>여기는 상품 디테일 페이지!</p>
      <button onClick={() => navigate(-1)}>뒤로가기</button>
      <button onClick={() => navigate("/")}>홈으로 이동</button>
      <ul>
        <li>판매번호 : {targetProduct.id}</li>
        <li>상품명 : {targetProduct.name}</li>
        <li>판매자 : {targetProduct.email}</li>
        <li>상세설명 : {targetProduct.body}</li>
      </ul>
    </main>
  );
}
