
//import { } from "../src/Decider";
/*when check button is clicked*/
/*change background color*/
function generateRandomOutcome() {
    const currentTime = new Date().getTime();
    const randomSeed = currentTime % 2 + 1;
    return randomSeed;
  }

  // Call the function to get a random outcome
  /*the answer how to the user*/ 
  /*mark both cages when clicked*/
  const cage = document.getElementById("cage1")
  function markCageOne() {
      cage.style.border = "solid 5px red";
      const cageBorder = document.getElementById("cage2");
      cageBorder.style.border = "";
  }
  cage.onclick = markCageOne; 
  const cageTwo = document.getElementById('cage2')
  function markCageTwo() {
   cageTwo.style.border = "5px solid red";
   const cageBorder = document.getElementById("cage1");
   cageBorder.style.border = "";
  }
  cageTwo.onclick = markCageTwo;
  const rebets = document.getElementById('rebet');
  function rebet() {
      const el = document.getElementById("cage1");
      el.style.backgroundColor = "lightgreen";
      const youWin = document.getElementById("youWin");
      youWin.innerHTML = "";
      youWin.style.backgroundColor = "";
      const cage2 = document.getElementById("cage2");
      cage2.style.backgroundColor = "skyBlue";
      const youLoose = document.getElementById("youLoose");
      youLoose.innerHTML = "";
      youLoose.style.backgroundColor = "";
      cage2.style.border = ""; 
      el.style.border = "";
      /*const lioncage = document.getElementById("lionCage");
      lioncage.style.backgroundColor = "";
      lioncage.innerText = "";*/
  }
  
rebets.onclick = rebet;
  /*const menu = document.getElementById("menus")
  function menubar() {

      home.innerHTML = "home";
      const account = document.getElementById("accountId")
      account.innerHTML = "account";
      const about = document.getElementById("about")
     about.innerHTML = "about";
  }*/
  
  /*stake multiplier*/
  const betButton = document.getElementById("betButton");
  function change() {
  // Call the function to get a random outcome
      const randomOutcome = generateRandomOutcome();
      if (randomOutcome === 1) {
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
      }
      const el = document.getElementById("cage1");
      el.style.backgroundColor = "white";
  
      const cage2 = document.getElementById("cage2");
      cage2.style.backgroundColor = "white";
     // const balance = document.getElementById("accountBalance");
     // balance.innerHTML = "100.57";
      const cageBorder = document.getElementById("cage1");
      cageBorder.style.border = "";
      const cage2Border = document.getElementById("cage2");
   cage2Border.style.border = "";
   /*
   const lioncage = document.getElementById("lionCage");
   lioncage.style.backgroundColor = "";
   lioncage.innerText = "";*/
  } 
  betButton.onclick = change;


  