import LifeCycleClass from "./components/LifecycleClass";
import LifeCycleFunc from "./components/LifecycleFunc";
import { RefClass1, RefClass2 } from "./components/ReFClass";
import { RefFunc1, RefFunc2 } from "./components/RefFunc";
import Test from "./components/Test";
import FakePost from "./components/practice/FakePost";
import Pra1 from "./components/practice/Pra1";
import Container from "./components/practice/Container";
import RealPost from "./components/practice/RealPost";

function App() {
  return (
    <div>
      {/* <RefClass1 />
      <RefClass2 />

      <RefFunc1 />
      <hr />
      <RefFunc2 /> */}

      {/* LifeCycle */}
      {/* <LifeCycleClass /> 
      <LifeCycleFunc />
      <Test />
      <Pra1 />*/}

      <Container>
        {/*<FakePost />*/}
        <RealPost />
      </Container>
    </div>
  );
}

export default App;
