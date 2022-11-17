import { useSelector } from "react-redux";


const Header=()=>{
    const {current,bestScore}=useSelector(state=>state.score)
    return(
        <div className="header">
            <h1>Cat Memory Game</h1>
            <h2>current score: {current} </h2>
            <h2>Best Score: {bestScore}</h2>
        </div>
    )
}

export default Header;
