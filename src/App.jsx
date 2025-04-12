import UpperBar from "./components/UpperBar";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <UpperBar />
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default App;
