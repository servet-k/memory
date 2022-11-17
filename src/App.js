import React from 'react';
import './App.css';
import Main from './components/Main';
import Header from './components/Header';
import { useDispatch,useSelector } from "react-redux";
import { getPictures } from './features/catPicSlice';

function App() {
  const dispatch = useDispatch();
  const {status}=useSelector(state=>state.cat)
  
  React.useEffect(() =>{  
    if (status==="idle") {dispatch(getPictures())} }, [status,dispatch])
  
  return (
    <div className="App">
      <Header />
      <Main />
      
    </div>
  );
}

export default App;
