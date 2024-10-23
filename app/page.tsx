"use client"
import { useEffect, useState } from "react";
import Cell from "./components/cell";


export default function Home() {
  const [cells,setCells]=useState(["","","","","","","","",""]);
  const [turn,setTurn]=useState("Player1");
  const [winner,setWinner]=useState("");
  const winnerCombos=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
  ]
  useEffect(()=>{
    winnerCombos.forEach((combo)=>{
      const player1Wins=combo.every((cell)=>cells[cell]==="X");
      const player2Wins=combo.every((cell)=>cells[cell]==="O");
      if(player1Wins){
        setWinner("Player1");
        setTimeout(() => {
          location.reload();
        }, 1000);
      }
      else if(player2Wins){
        setWinner("Player2");
        setTimeout(() => {
          location.reload();
        }, 1000);
      }
    })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[cells,winner])

  useEffect(()=>{
    if(cells.every((cell)=>cell!=="") && !winner){
      setWinner("Draw");
      setTimeout(() => {
        location.reload();
      }, 1000);
    }
  },[cells,winner])


  return (

        <div className="container">
          <div className="game-board">
            {cells.map((cell,index)=>(
              <Cell key={index} turn={turn} setTurn={setTurn} id={index} cells={cells} setCells={setCells} winner={winner}/>
            ))}
          </div>
          {winner&&<div className="winning-message"><div className={winner}>{winner}</div>{winner!="Draw"&&" Wins"}</div>}
          {!winner&&<div className="game-state">Its <div className={turn}>{turn}</div> turn</div>}
        </div>

  );
}
