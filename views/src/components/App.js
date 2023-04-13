import "../style/app.scss";
import Canvas from "./Canvas";
import SettingBar from "./SettingBar";
import Toolbar from "./Toolbar";

const App = () => {
  return (
    <div className="app">
      <Toolbar />
      <SettingBar />
      <Canvas />
    </div>
  );
};

export default App;
