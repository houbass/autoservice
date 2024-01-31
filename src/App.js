import React, { useEffect, useRef, useState } from 'react';

//style
import './App.css';

//pictures
import ToolPic from "./pictures/tool.webp";
import DiagnosticPic from "./pictures/diagnostick.png";
import KlimaPic from "./pictures/klima.png";
import SkloPic from "./pictures/sklo.png";
import PneuservisPic from "./pictures/pneuservis.png";
import AutoservisPic from "./pictures/autoservis.png";
import StkPic from "./pictures/stk.svg";

//components
import Navbar from './components/Navbar';
import Header from './components/Header';
import Sluzby from './components/Sluzby';
import Kontakt from './components/Kontakt';
import Galery from './components/Galery';
import About from './components/About';
import Footer from './components/Footer';


function App() {
  const header = useRef();
  const main = useRef();
  const kontakt = useRef();
  const galery = useRef();
  const about = useRef();

  const [allImagesLoaded, setAllImagesLoaded] = useState(false);
  const [mainOpacity, setMainOpacity] = useState(0);
  const [introAnimClass, setIntroAnimClass] = useState(["carMotionDefault", "introUnderlineDefault", "introTitleDefault"]);

  //IMAGES
  const imageUrls = [ToolPic, DiagnosticPic, KlimaPic, SkloPic, PneuservisPic, AutoservisPic];

  //WAIT TO LOAD ALL IMAGES
  useEffect(() => {
    const loadImage = (url) =>
      new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = () => resolve(img);
        img.onerror = reject;
        img.src = url;
      });

    const loadAllImages = async () => {
      try {
        const imagePromises = imageUrls.map(loadImage);
        await Promise.all(imagePromises);
        setAllImagesLoaded(true);
      } catch (error) {
        console.error('Error loading images:', error);
      }
    };

    loadAllImages();
    // eslint-disable-next-line
  }, []);


  //CHECK IF ALL IMAGES ARE LOADED
  useEffect(() => {
    if(allImagesLoaded === true){
      setMainOpacity(1);
      setIntroAnimClass(["carMotion", "introUnderline", "introTitle"])
    }
  }, [allImagesLoaded])

  
  return (
    <div 
    className="App" >
      <Navbar 
      header={header}
      main={main}
      kontakt={kontakt} 
      galery={galery} 
      about={about} 
      setIntroAnimClass={setIntroAnimClass}
      />
      <Header 
      header={header} 
      introAnimClass={introAnimClass} 
      mainOpacity={mainOpacity} 
      />

      <Sluzby 
      main={main}
      DiagnosticPic={DiagnosticPic} 
      KlimaPic={KlimaPic}
      SkloPic={SkloPic} 
      PneuservisPic={PneuservisPic} 
      AutoservisPic={AutoservisPic} 
      StkPic={StkPic} 
      mainOpacity={mainOpacity}
      />

      <Kontakt kontakt={kontakt}/>
      <Galery galery={galery}/>
      <About about={about}/>
      <Footer />
    </div>
  );
}

export default App;
