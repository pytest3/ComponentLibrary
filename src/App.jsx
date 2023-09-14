import "./App.css";
import Badge from "./components/Badge/Badge";
import Banner from "./components/Banner/Banner";

function App() {
  return (
    <>
      <Badge type="pill" color="blue">
        Hi
      </Badge>
      <br></br>
      <Badge type="pill" color="brown">
        Hi
      </Badge>
      <br></br>
      <Badge color="yellow">Hi</Badge>
      <br></br>
      <Badge type="pill">Hi</Badge>
      <Banner status="success">banner</Banner>
      <Banner status="warning">warning</Banner>
      <Banner status="error">warning</Banner>
    </>
  );
}

export default App;
