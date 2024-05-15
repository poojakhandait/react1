
import { useState,useEffect} from 'react'

const Task2=()=> {
let [num,setNum]=useState(0)
let [nums,setNums]=useState(0)
useEffect(()=>{
    alert("I Am Clicked")

},[num])
  return (
    <div>
    <button onClick={()=>{setNum(num+1)}}>Click Me{num}</button><br></br>
    <button onClick={()=>{setNums(nums+1)}}>Click Me{nums}</button>

      
    </div>
  )
}

export default Task2 
