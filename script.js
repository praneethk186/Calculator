const numbers=document.querySelectorAll(".number");
numbers.forEach(
    (number)=>{
        number.addEventListener("click",(event)=>{
           inputno(event.target.value);
            updatescreen(currentinput);
        })
    }
)
const calculatorscreen=document.querySelector(".calculator-screen");
const updatescreen=(number)=>{
    calculatorscreen.value=number;
}

let  currentinput='0';
let  caloperator='';
let previnput='0';

const inputno=(number)=>{
    if(currentinput=='0')
    {
        currentinput =number;
    }
    else{
        currentinput +=number;
    }
}
const operator=document.querySelectorAll(".operator");
operator.forEach(
    (op) =>{
         op.addEventListener("click",(event)=>{
        inputop(event.target.value);
    })
    }
)
const inputop=(operator)=>{
    previnput=currentinput;
    caloperator=operator;
    currentinput='0';
}
const equal=document.querySelector(".equals");
equal.addEventListener("click",(event)=>{
    output();
    updatescreen(currentinput);
})
const output=()=>{
    let result=0;
    switch(caloperator)
    {
        case '+':result=parseInt(previnput)+parseInt(currentinput);
                break;
        case '-':result=parseInt(previnput)-parseInt(currentinput);
                break;
        case '*':result=parseInt(previnput)*parseInt(currentinput);
                break;
        case '/':result=parseInt(previnput)/parseInt(currentinput);
                break;
        default:

    }
   currentinput=result.toString();
    caloperator='';
}
const clear=document.querySelector(".all-clear");
clear.addEventListener("click",(event)=>{
     currentinput=0;
    updatescreen(currentinput);
})
const float=document.querySelector(".flaot");
clear.addEventListener("click",(event)=>{

})