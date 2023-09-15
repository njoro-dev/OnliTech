//import from "./lionCage";
import DeductBalance from "./deductBalance";
import { useState } from "react";
var bal = 0;
const Account = (props) => {
    
    const [isClicked, setIsClicked] = useState(false);

    const handleClick = () => {
        setIsClicked(!isClicked)
    }

    let balance;
    if (isClicked ) {
        balance = bal++;


    }
    

    
    
  
  
    return (
        <div id="account" class="account">
                <h4 id="accountBalance" class="accountBalance" >{balance}</h4>
                
            </div>
            
    )
};

export default Account;
