import { generateRandomOutcome } from './Decider';
import './ftl.css';
//import { useState } from 'react';
//import Cage from './Cage';

/*function generateRandomOutcome() {
    const currentTime = new Date().getTime();
    const randomSeed = currentTime % 2 + 1;
    return randomSeed;
  }*/
const Bet = (props) => {   

   /* const [isClicked, setIsClicked] = useState(false);

    const handleClick = () => {
        setIsClicked(!isClicked);
    };
    const styles = {
        border: isClicked ? '2px solid red' : 'none',
        backgroundColor: isClicked ? 'grey' : 'lightGrey'
    //const bet = document.getElementById("betButton");
    }*/
    
  /* const [isClickeds, setIsClickeds] = useState(false);

    const handleClicks = () => {
        setIsClickeds(!isClickeds);
    };*/
   function change() {
        // Call the function to get a random outcome
            const OUTCOME = generateRandomOutcome;
            if (OUTCOME === 1) {
                const youWin = document.getElementById("youWin");
                youWin.innerHTML = "LION";
                youWin.style.backgroundColor  = "black";
                const youLoose = document.getElementById("youLoose");
                youLoose.style.backgroundColor = "white"
                youLoose.innerHTML = "LOSS"; 
            //else if (randomOutcome === 0) {
                 //const youLoose = document.getElementById("youLoose");
                //youLoose.innerHTML = "You Loose 50$!"; 
                //const youWin = document.getElementById("youWin");
           // youWin.innerHTML = "You loose!";
            } else {
                const youWin = document.getElementById("youWin");
                youWin.innerHTML = "LOSS";
                youWin.style.backgroundColor = "white";
                const youLoose = document.getElementById("youLoose");
                youLoose.innerHTML = "LION"
                youLoose.style.backgroundColor = "black";;
            const el = document.getElementById("cage1");
            el.style.backgroundColor = "white";
            const cage2 = document.getElementById("cage2");
            cage2.style.backgroundColor = "white";
            const balance = document.getElementById("accountBalance");
            balance.innerHTML = "100.57";
            const cageBorder = document.getElementById("cage1");
            cageBorder.style.border = "";
            const cage2Border = document.getElementById("cage2");
         cage2Border.style.border = "";
        }
        /*function rebet() {
            const el = document.getElementById("cage1");
            el.style.backgroundColor = "lightgreen";
            const youWin = document.getElementById("youWin");
            youWin.innerHTML = "";
            const cage2 = document.getElementById("cage2");
            cage2.style.backgroundImage = "url('photo_2023-01-03_06-39-48.jpg')";
        
            const youLoose = document.getElementById("youLoose");
            youLoose.innerHTML = "";
            cage2.style.border = "";
            el.style.border = "";
        }*/
        
    
   }

    return (
        <div id="bet" class="bet">
                <button class="betButton" id="betButton" onClick={change}><h1>Bet</h1></button>
            </div>
    )
    };
export default Bet;

