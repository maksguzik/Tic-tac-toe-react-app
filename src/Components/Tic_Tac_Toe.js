import React, {useState, useEffect} from 'react'
import './Style.css'
import Element from './Validator.js'

let MainComponent = () =>{

    let [change,setChange] = useState({
        list : ["","","","","","","","",""],
        mark : "X",
        turn : true,
    });

    let [winner,setWinner] = useState("Start play");

    function Sleep(time){
        return new Promise((resolve)=>setTimeout(resolve,time));
    }

    async function CheckWinner(){
        if(change.list[0].length>0 && change.list[1]===change.list[2] && change.list[0]===change.list[1]){
            if(change.list[0]==="X"){
                setWinner("You won");
                setChange({
                    ...change,
                    turn : true,
                })
            }else{
                setWinner("PC won");
                setChange({
                    ...change,
                    turn : true,
                })
            }
            await Sleep(1500);
            setChange({
                ...change,
                list : ["","","","","","","","",""],
                mark : "X",
                turn : true, 
            });
            setWinner("Start play");
        }else if(change.list[3].length>0 && change.list[4]===change.list[5] && change.list[3]===change.list[4]){
            if(change.list[3]==="X"){
                setWinner("You won");
                setChange({
                    ...change,
                    turn : true,
                })
            }else{
                setWinner("PC won");
                setChange({
                    ...change,
                    turn : true,
                })
            }
            await Sleep(1500);
            setChange({
                ...change,
                list : ["","","","","","","","",""],
                mark : "X",
                turn : true, 
            });
            setWinner("Start play");
        }else if(change.list[6].length>0 && change.list[7]===change.list[8] && change.list[6]===change.list[7]){
            if(change.list[6]==="X"){
                setWinner("You won");
                setChange({
                    ...change,
                    turn : true,
                })
            }else{
                setWinner("PC won");
                setChange({
                    ...change,
                    turn : true,
                })
            }
            await Sleep(1500);
            setChange({
                ...change,
                list : ["","","","","","","","",""],
                mark : "X",
                turn : true, 
            });
            setWinner("Start play");
        }else if(change.list[0].length>0 && change.list[3]===change.list[6] && change.list[3]===change.list[0]){
            if(change.list[0]==="X"){
                setWinner("You won");
                setChange({
                    ...change,
                    turn : true,
                })
            }else{
                setWinner("PC won");
                setChange({
                    ...change,
                    turn : true,
                })
            }
            await Sleep(1500);
            setChange({
                ...change,
                list : ["","","","","","","","",""],
                mark : "X",
                turn : true, 
            });
            setWinner("Start play");
        }else if(change.list[1].length>0 && change.list[4]===change.list[7] && change.list[1]===change.list[4]){
            if(change.list[1]==="X"){
                setWinner("You won");
                setChange({
                    ...change,
                    turn : true,
                })
            }else{
                setWinner("PC won");
                setChange({
                    ...change,
                    turn : true,
                })
            }
            await Sleep(1500);
            setChange({
                ...change,
                list : ["","","","","","","","",""],
                mark : "X",
                turn : true, 
            });
            setWinner("Start play");
        }else if(change.list[2].length>0 && change.list[5]===change.list[8] && change.list[2]===change.list[5]){
            if(change.list[2]==="X"){
                setWinner("You won");
                setChange({
                    ...change,
                    turn : true,
                })
            }else{
                setWinner("PC won");
                setChange({
                    ...change,
                    turn : true,
                })
            }
            await Sleep(1500);
            setChange({
                ...change,
                list : ["","","","","","","","",""],
                mark : "X",
                turn : true, 
            });
            setWinner("Start play");
        }else if(change.list[0].length>0 && change.list[4]===change.list[8] && change.list[4]===change.list[0]){
            if(change.list[0]==="X"){
                setWinner("You won");
                setChange({
                    ...change,
                    turn : true,
                })
            }else{
                setWinner("PC won");
                setChange({
                    ...change,
                    turn : true,
                })
            }
            await Sleep(1500);
            setChange({
                ...change,
                list : ["","","","","","","","",""],
                mark : "X",
                turn : true, 
            });
            setWinner("Start play");
        }else if(change.list[2].length>0 && change.list[4]===change.list[6] && change.list[4]===change.list[2]){
            if(change.list[2]==="X"){
                setWinner("You won");
                setChange({
                    ...change,
                    turn : true,
                })
            }else{
                setWinner("PC won");
                setChange({
                    ...change,
                    turn : true,
                })
            }
            await Sleep(1500);
            setChange({
                ...change,
                list : ["","","","","","","","",""],
                mark : "X",
                turn : true, 
            });
            setWinner("Start play");
        }
    }

    async function GetPCturn (){
        await Sleep(1800);
        let empty_idx = change.list.map((element,idx)=>element=(element.length===0)? idx : -1)
        .filter((element)=>element!==-1);
        let index_from_empty = Math.floor(Math.random() * empty_idx.length);
        setChange({
            ...change,
            list : change.list.map((value,idx)=>(idx===empty_idx[index_from_empty]) ? change.mark:value),
            mark : "X",
            turn : true,
        });
    }

    let ClickHandler = (element) =>{
        if(change.turn===true){
            setChange({
                ...change,
                list : change.list.map((value,idx)=>(idx===element && value.length===0) ? change.mark:value),
                mark : "O",
                turn : false,
            });
        }
    }

    async function TurnHandler(){
        if(!change.turn){
            if(winner==="Your turn" || "Start play"){
                GetPCturn();
                setWinner("PC turn");
            }else{
                await Sleep(1500);
            }
        }
        if(change.turn){
            if(winner==="PC turn"){
                setWinner("Your turn");
            }else{
                await Sleep(1500);
            }
        }
    }

    useEffect(
        ()=>{
            const WinnInfo = async event =>{
                CheckWinner();
            }
            WinnInfo();
            TurnHandler();
        }
    )

    return (
        <>
        <div id="Text">Tic-Tac-Toe!</div>
        <div className="Tic_Tac_Toe">
            <div className="Container">
                <div className="Block">
                    <div className="Row">
                        <Element value={change.list[0]} classname={"Element"} ClickHandler={()=>ClickHandler(0)}/>
                        <Element value={change.list[1]} classname={"Element"} ClickHandler={()=>ClickHandler(1)}/>
                        <Element value={change.list[2]} classname={"Element_diff"} ClickHandler={()=>ClickHandler(2)}/>
                    </div>
                    <div className="Row">
                        <Element value={change.list[3]} classname={"Element"} ClickHandler={()=>ClickHandler(3)}/>
                        <Element value={change.list[4]} classname={"Element"} ClickHandler={()=>ClickHandler(4)}/>
                        <Element value={change.list[5]} classname={"Element_diff"} ClickHandler={()=>ClickHandler(5)}/>
                    </div>
                    <div className="Row" id="Third_row">  
                        <Element value={change.list[6]} classname={"Element"} ClickHandler={()=>ClickHandler(6)}/>
                        <Element value={change.list[7]} classname={"Element"} ClickHandler={()=>ClickHandler(7)}/>
                        <Element value={change.list[8]} classname={"Element_diff"} ClickHandler={()=>ClickHandler(8)}/>
                    </div>
                </div>
            </div>
        </div>
        <div className="Result">{winner}</div>
        </>
    )
}

export default MainComponent;