import "./styles.css";
import {useState,useEffect} from 'react'
//useState
//useEffect
export default function App() {
  let [cnt,setCnt]=useState(0);
  useEffect(()=>{
    console.log('In useEffect');
    let timer=setInterval(()=>{
      setCnt(prev=>prev+1);  
    },2000);
    return ()=>{
      console.log('CleanUp Function');
      clearInterval(timer);
    }
  },[cnt]);
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>{cnt}</h2>
    </div>
  );
}