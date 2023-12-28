import react from 'react';

//style
import './App.css';

//pictures
import ToolPic from "./pictures/tool.jpg";
import DiagnosticPic from "./pictures/diagnostick.png";
import KlimaPic from "./pictures/klima.png";
import SkloPic from "./pictures/sklo.png";
import PneuservisPic from "./pictures/pneuservis.png";
import AutoservisPic from "./pictures/autoservis.png";

//components
import Header from './components/Header';
import Main from './components/Main';


function App() {
  return (
    <div className="App">
      <Header ToolPic={ToolPic}/>
      <Main 
      DiagnosticPic={DiagnosticPic} 
      KlimaPic={KlimaPic}
      SkloPic={SkloPic} 
      PneuservisPic={PneuservisPic} 
      AutoservisPic={AutoservisPic} 
      />
    </div>
  );
}

export default App;
