import react, { useRef } from 'react';

//style
import './App.css';

//pictures
import ToolPic from "./pictures/tool.jpg";
import DiagnosticPic from "./pictures/diagnostick.png";
import KlimaPic from "./pictures/klima.png";
import SkloPic from "./pictures/sklo.png";
import PneuservisPic from "./pictures/pneuservis.png";
import AutoservisPic from "./pictures/autoservis.png";
import StkPic from "./pictures/stk.svg";

//components
import Navbar from './components/Navbar';
import Header from './components/Header';
import Main from './components/Main';
import Map from './components/Map';
import Footer from './components/Footer';


function App() {

  const main = useRef();
  const kontakt = useRef();
  
  return (
    <div className="App">
      <Navbar 
      main={main}
      kontakt={kontakt}
      />
      <Header ToolPic={ToolPic}/>
      <Main 
      main={main}
      DiagnosticPic={DiagnosticPic} 
      KlimaPic={KlimaPic}
      SkloPic={SkloPic} 
      PneuservisPic={PneuservisPic} 
      AutoservisPic={AutoservisPic} 
      StkPic={StkPic}
      />
      <Map kontakt={kontakt}/>
      <Footer />
    </div>
  );
}

export default App;
