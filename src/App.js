import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import HomePage from "./components/Home"
import Level from "./components/Levels";
import Game from "./components/Game";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/levels" element={<Level />} />
          <Route path="/game" element={<Game />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
