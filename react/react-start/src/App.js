import ClassComp from "./ClassComp";
import UseJSX from "./UseJSX";
import Animal from "./Animal";
import PracticeState from "./components/PracticeState";
import { ClassProps, ClassProps2 } from "./components/ClassProps";
import {
  FunctionProps,
  FunctionProps2,
  FunctionProps3,
  FunctionProps4,
} from "./components/FunctionProps";
import SyntheticEvent from "./components/SyntheticEvent";
import Counter from "./components/Counter";
import HanedlerEx from "./components/ex/HandlerEx";
import Change from "./components/ex/Change";
import PraText from "./components/ex/PraText";
import PraChange from "./components/ex/PraChange";
import PororoObj from "./components/ex/PororoObj";
import EntirePractice from "./components/ex/EntirePractice";
import PropsMap from "./components/PropsMap";
import PropsMap2 from "./components/PropsMap2";
import Alphabet from "./components/Alphabet";
import PraMap from "./components/pra/PraMap";
import MapPractice2 from "./components/pra/MapPractice2";

import Pra2 from "./components/pra/Pra2";
import Pra3 from "./components/pra/Pra3";
function App() {
  const arr = [
    { name: "peach", krPrice: 10000, number: 5 },
    { name: "strawberry", krPrice: 15000, number: 1 },
    { name: "pear", krPrice: 5000, number: 3 },
    { name: "apple", krPrice: 20000, number: 15 },
  ];
  return (
    <div>
      {/* <HanedlerEx />
      <Change />

      <br />
      <br />
      <PraText />

      <br />
      <br />
      <PraChange />

      <br />
      <br />
      <PororoObj />

      <br />
      <br /> */}
      {/* <h2>실습문제</h2>
      <EntirePractice /> */}

      {/* <div></div>
      <h3>클래스형 컴포넌트 props 사용해보기</h3> */}
      {/* <ClassProps name="루피" color="pink" nickname="공주" />

      <ClassProps2
        name="루피"
        color="pink"
        nickname="공주"
        // fontColor="blue"
      />

      <h3>함수형 컴포넌트 props 사용해보기</h3>
      <FunctionProps name="사과" number={5} krPrice={10000} />
      <FunctionProps2 name="사과" number={5} krPrice={10000} />
      <FunctionProps3 name="샤인머스캣" number={1} krPrice={15000} />
      <FunctionProps4 name="딸기" number={1} krPrice={20000}>
        <span style={{ color: "red" }}>children 요소입니다!!!!</span>
      </FunctionProps4>
      <FunctionProps4 name="딸기">
        <span style={{ color: "red" }}>children 요소입니다!!!!</span>
      </FunctionProps4>

      <PracticeState />
      <h2>확인을 해볼까용!</h2>
      <SyntheticEvent />

      <Counter /> */}

      {/*<PropsMap arr={arr} />
      <PropsMap2 arr={arr} />
      <PropsMap2 /> 
      <Alphabet />
      <PraMap />

      <MapPractice2 />*/}
      <Pra3 />
    </div>
  );
}

export default App;
