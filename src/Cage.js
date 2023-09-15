 import { useState } from "react";
import DeductBalance from "./deductBalance";

import { generateRandomOutcome } from "./Decider";
//import LionCage from "./lionCage"
var bal = 0;
const Cage = (props) => {

    function rebet() {
        const el = document.getElementById("cage1");
        el.style.backgroundColor = "lightgreen";
        el.style.border = "solid 3px red";
        const youWin = document.getElementById("youWin");
        youWin.style.backgroundColor = "";
        youWin.innerHTML = "";
        const cage2 = document.getElementById("cage2");
        cage2.style.backgroundColor = "";
        const youLoose = document.getElementById("youLoose");
        youLoose.style.backgroundColor = "";
        youLoose.innerHTML = "";
        cage2.style.border = "";
        //const lioncage = document.getElementById("lionCage");
        //lioncage.style.backgroundColor = "";
        //lioncage.innerText = "";
    };

    function markCageTwo() {
        const el = document.getElementById("cage1");
        el.style.backgroundColor = "lightgreen";
        el.style.border = "solid 3px red";
        const youWin = document.getElementById("youWin");
        youWin.style.backgroundColor = "";
        youWin.innerHTML = "";
        const cage2 = document.getElementById("cage2");
        cage2.style.backgroundColor = "";
        const youLoose = document.getElementById("youLoose");
        youLoose.style.backgroundColor = "";
        youLoose.innerHTML = "";
        cage2.style.border = "";
        cage2.style.border = "blue solid 4px";
        el.style.border = ""
        /*const lioncage = document.getElementById("lionCage");
        lioncage.style.backgroundColor = "";
        lioncage.innerText = "";*/
    };

    const [isClicked, setIsClicked] = useState(false);
    const [isButtonDisabled, setButtonDisabled] = useState(false)

    const handleClick = () => {
        setIsClicked(!isClicked)
        setButtonDisabled(true)
        setTimeout(() => {
            setButtonDisabled(!isButtonDisabled);

        }, 3000);

    }

    
    /*function generateRandomOutcome() {
        const currentTime = new Date().getTime();
        const randomSeed = currentTime % 2 + 1;
        return randomSeed;
    }
    const outcome = generateRandomOutcome()*/
    const OUTCOME = generateRandomOutcome;
    let balance;
    if (isClicked && OUTCOME === 1) {
        balance = bal++;

    } else if (isClicked && OUTCOME === 2) {
        balance = bal--;
    } else if (!isClicked && OUTCOME === 1) {

        balance = bal;
    } else if (!isClicked && OUTCOME === 2)
        balance = bal;
    
    return (
        <div id="cage" class="cage" onClick={handleClick}>
                <div id="message" class="message">
                <p id="how"></p>
            </div>
                <div id="cage1" class="cage1" onClick={rebet} >
                        <div class="youWinCage"><div class="youWin" id="youWin">s</div></div>   
                </div> 
                <DeductBalance balance={balance} />
                <div id="cage2" class="cage2" onClick={markCageTwo}>
                    <div class="youWinCages"><div class="youLoose" id="youLoose">s</div></div>     
                </div>
            </div>       
    )
}
export default Cage;