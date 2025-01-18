import CustomHook from "./components/CustomHook.jsx";
import UseCallbackEx1 from "./components/UseCallbackEx1.jsx";
import UseCallbackEx2 from "./components/UseCallbackEx2.jsx";
import UseMemo1 from "./components/UseMemo1.jsx";
import UseMemoObj from "./components/UseMemoObj.jsx";
import UseReducer from "./components/UseReducer.jsx";
import UseTitle from "./hooks/useTitle.js";
import Form from "./components/Form.jsx";
import Pra1 from "./components/practice/Pra1.jsx";

function App() {
  UseTitle("hook 공부하기");
  return (
    <div>
      {/* <UseMemo1 />
      <UseMemoObj /> 
      <UseCallbackEx1 /> 
      <UseCallbackEx2 />
      <UseReducer />
      <CustomHook />
      <Form />*/}
      <Pra1 />
    </div>
  );
}

export default App;
