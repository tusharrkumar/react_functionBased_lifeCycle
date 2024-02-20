import { useEffect, useState } from 'react'
import './Comp.css'

function Comp() {
    const[num,setNum]=useState(0);
    const[num1,setNum1]=useState(0);

    //# without any dependancy --> it will render everytime after clicking the button
    // useEffect(()=>{
    //     alert("I am clicked");
    // });


    //# with empty dependancy --> it will render only one time whenever the page will refresh
    // useEffect(()=>{
    //     alert("I am clicked");
    // },[]);


    //# with dependancy --> it will render only this time when this particular button is clicking --> whatever variable we are passing inside dependancy after clicking this button it will work
    // useEffect(()=>{
    //     alert("I am clicked");
    // },[num]);

    //# here we are passing 2 varibles inside this dependancy so it will work for this two variables
    useEffect(()=>{
        alert("I am clicked");
    },[num,num1]);

    return (
        <>
            <button onClick={()=> {setNum(num+1)}}>Click Me {num}</button>
            <br />
            <br />
            <button onClick={()=> {setNum1(num1+1)}}>Click Me {num1}</button>
        </>
    )
}

export default Comp
