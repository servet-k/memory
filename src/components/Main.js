import { useSelector,useDispatch } from "react-redux";
import { increase,clear } from "../features/scoreSlice";
import { Shuffle,toggle,reset } from "../features/catPicSlice";

const Main=()=>{
    const dispatch=useDispatch();

    const {picArray}=useSelector(store=>store.cat)
    const handleClick=(item)=>{
        dispatch(Shuffle(picArray));
        if(item.isClicked===false ){
            dispatch(increase());
            dispatch(toggle(item));

        }else {
            dispatch(clear());
            dispatch(reset());
        }
        
        


    }
    
    return (
        <div className="cards">
         {picArray.map(item=>{
          return  <img className="pic" src={item.url} width="290px" height="240px" alt="catpic" key={item.id}
          onClick={()=>handleClick(item)}/> 
         })}
        </div>
    )
}
export default Main;