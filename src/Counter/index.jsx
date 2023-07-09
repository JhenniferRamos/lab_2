import React from "react";
import {useEffect,useState} from "react";


const Counter =()=>{
  const [minutos,setMinutos]=useState(0);
  const [count,setCount]=useState(0);
  const increment = () =>{ setCount(count + 1)}
  const decrement = () =>{ setCount(count - 1)}
  var tiempo;
  const mystyle = {
    color: "black",
    padding: "30px",
    fontFamily: "Algerial",
  };
  useEffect(()=>{
    tiempo=setInterval(()=>{
      setCount((count)=>count+1);
      if(count === 59){ 
        setMinutos(minutos+1);
        setCount(0);
      }
    },1000);
    return ()=>clearInterval(tiempo);
  });
  return <div>
    <h1 aling="center">Lab. 2 Contador con temporalizador</h1>
    <h1 style={mystyle}>{minutos}:{count}</h1>
    <button  onClick={increment}>incremento</button>
    <br></br>
    <br></br>
    <button onClick={decrement}>decremento</button>
  </div>
}
export default Counter;
