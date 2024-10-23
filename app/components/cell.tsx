import { Dispatch, SetStateAction} from "react";

type cellPrams={
    turn:string;
    setTurn: Dispatch<SetStateAction<string>>;
    id:number;
    cells:string[];
    setCells:Dispatch<SetStateAction<string[]>>;
    winner:string
}
function Cell({turn,setTurn,id,cells,setCells,winner}:cellPrams){
    function changeCell(input:string){
        let copyCells=[];
        copyCells = [...cells];
        copyCells[id]=input;
        setCells(copyCells);
    }
    function handleClick(){
        if(winner){
            return;
        }
        const taken=cells[id];
        if(!taken){
            if(turn==="Player1"){
                changeCell("X");
                setTurn("Player2")
            }
            else{
                changeCell("O")
                setTurn("Player1")
            }
            
        }
    }
    return(
        <div className="square" onClick={handleClick}>
            <div className={cells[id]}>
                {cells[id]}
            </div>
        </div>
    );
}
export default Cell;