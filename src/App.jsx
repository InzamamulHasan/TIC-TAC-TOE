import React, { useState } from "react";
import Symbols from "./Components/Symbols";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./App.css";


 let tikArray=new Array(9).fill("");



const App=()=>{

  let [isCross,setIsCross]=useState(true);
  let [winner,setWinner]=useState("");

  function playAgain(){
    tikArray.fill("");
    setIsCross(true);
    setWinner("");
  }
  console.log(Date.now())
  function win(){
    if(tikArray[0]==tikArray[1] &&tikArray[1]==tikArray[2] && tikArray[0]!=""){
      setWinner(`${tikArray[0]} is the winner`)
    }else if(tikArray[3]==tikArray[4] &&tikArray[4]==tikArray[5] && tikArray[3]!=""){
      setWinner(`${tikArray[3]} is the winner`)
    }else if(tikArray[6]==tikArray[7] &&tikArray[7]==tikArray[8] && tikArray[6]!=""){
      setWinner(`${tikArray[6]} is the winner`)
    }else if(tikArray[0]==tikArray[3] &&tikArray[3]==tikArray[6] && tikArray[0]!=""){
      setWinner(`${tikArray[0]} is the winner`)  
    }else if(tikArray[1]==tikArray[4] &&tikArray[4]==tikArray[7] && tikArray[1]!=""){
      setWinner(`${tikArray[2]} is the winner`)  
    }else if(tikArray[2]==tikArray[5] &&tikArray[5]==tikArray[8] && tikArray[2]!=""){
      setWinner(`${tikArray[2]} is the winner`)
    }else if(tikArray[0]==tikArray[4] &&tikArray[4]==tikArray[8] && tikArray[0]!=""){
      setWinner(`${tikArray[0]} is the winner`)   
    }else if(tikArray[6]==tikArray[4] &&tikArray[4]==tikArray[2] && tikArray[6]!=""){
      setWinner(`${tikArray[6]} is the winner`)
    } else if(tikArray.indexOf("")==-1){
      setWinner("It's a Draw")
    }   
}

function changeItem(index){
  console.log("hey")
  if(winner!=""){
    return toast("Game has already been over");
  }
  if(tikArray[index]!=""){
    return toast("Hey ! you already tapped here...");
  }else{
    tikArray[index]=isCross==true?"Cross":"Circle";
    setIsCross(!isCross)
  }
  win();

}
  return(
    <div className="cont">
      <ToastContainer position="bottom-center"/>
      <div><h1>Play Tic-Tac-Toe</h1></div>
      <div className="grid">
        {tikArray.map((el,i)=>{
          return(<div key={i} onClick={()=>changeItem(i)}>
            <Symbols ic={el}></Symbols>
            </div>)
        })}
      </div>
      <div>
        {winner?
        (<div>
          <h1 className="status">{winner}</h1>
          </div>):<h1 className="status">Chaneg is of - {isCross?"X":"O"}</h1>}
          <button onClick={playAgain}>Play Again</button>
      </div>
    </div>
    
  )
}
export default App;