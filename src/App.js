import "./App.css";
import imgbanner from "./assests/image1.png";
import imgNetflixLogo from "./assests/image2.png";
import imgOLD from "./assests/image.png";
import imgDisney from "./assests/disneyImage.png";
import React, {useState} from 'react';
import dat from "./assests/dat.json";

function App() {
  const [isValue, setIsValue]= useState(true);
  const onChange = ({target: {value}}) => {
    value.length>9 && setIsValue(false);
  };
  const clicked= () =>{
    alert('Submitted Successfully');
  }
  return (
    <div className="App">
      <div>
        <div>
          <div className="navbar">
            <img src={imgNetflixLogo} alt="" className="img1" />
          </div>
          <div className="banner">
            <img src={imgOLD} alt="" className="img2" />
          </div>
          <div className="movies">
            <img src={imgbanner} className="img3" alt="" />
          </div>
        </div>
        <br />
      </div>
      <br />
      <div className="txt1">{dat.txt1}</div>
      <div className="Desc">
        {dat.Desc}
      </div>
      <div className="planClass">
        <div className="planDiv">
          PLAN
          <br />1
        </div>
        <div className="planDiv">
          PLAN
          <br />1
        </div>
        <div className="planDiv">
          PLAN
          <br />1
        </div>
        <div className="planDiv">
          PLAN
          <br />1
        </div>
        <div className="planDiv">
          PLAN
          <br />1
        </div>
      </div>
      <div className="planClass">
        <div className="disDiv">
          <img src={imgDisney} className="disneyImg" alt="" />
        </div>
        <div className="disDiv">
          <img src={imgDisney} className="disneyImg" alt="" />
        </div>
        <div className="disDiv">
          <img src={imgDisney} className="disneyImg" alt="" />
        </div>
      </div>
      <div className="planClass">
        <div className="txtBoxDiv1">
          <select className="inpDiv">
            <option value="+971">+971</option>
            <option value="+972">+972</option>
          </select>
        </div>
        <div className="txtBoxDiv2">
          <input className="inpDiv" type="text" placeholder="000 000 00000" onChange={onChange}/>
        </div>
      </div>
      <div className="txtDiv">{dat.txtDiv}</div>
      <div>
        <button className={isValue ? 'btnDiv opacity' : 'btnDiv'} disabled={isValue} onClick={clicked}>SUBSCRIBE</button>
      </div>
      <div className="txtDiv2">{dat.txtDiv}</div>
      <div className="txtDiv3">
        {dat.txtDiv3}
      </div>
    </div>
  );
}

export default App;
