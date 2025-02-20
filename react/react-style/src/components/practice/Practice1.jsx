import styled, { keyframes } from "styled-components";
import logo from "./logo.svg";

const RootDiv = styled.div`
  text-align: center;
`;

const AppHeader = styled.header`
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;

const AppSpin = keyframes`
0%{
    transform: rotate(0);
}
50%{
    transform: rotate(180deg);
}
100%{
    transform: rotate(360deg);
}    
`;

const AppLogo = styled.img`
  animation: ${AppSpin} 20s linear infinite;
`;

const MyA = styled.a`
  color: #61dafb;
`;

export default function Practice1() {
  return (
    <RootDiv>
      <AppHeader>
        <AppLogo src={logo} alt="app" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <MyA
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </MyA>
      </AppHeader>
    </RootDiv>
  );
}
