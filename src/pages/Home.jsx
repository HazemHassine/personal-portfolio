import Navbar from "../components/Navbar/Navbar";
import MainContainer from "../components/MainContainer/MainContainer";
function Home() {
  return (
    <div className="Home" style={{ height: "100%" }}>
      <Navbar current="Home Page"></Navbar>
      <MainContainer></MainContainer>
    </div>
  );
}

export default Home;
