//defin varaible
let $=document;
let FirstValue=$.querySelector(".C");
let SecondValue=$.querySelector(".F");
let converter=$.querySelector("#converter");
let result=$.querySelector(".result");
let convertButton=$.querySelector(".convertButton");
let resetButton=$.querySelector(".resetButton");
let changeButton=$.querySelector(".changeButton");

// evenlistener
convertButton.addEventListener("click",convert)
resetButton.addEventListener("click",reset)
changeButton.addEventListener("click",swap)




///function
 function  convert(){
    if(converter.value === ""){
        result.innerHTML="insert correct value";
        result.style.color="red";
    }
 else{
   if(FirstValue.innerHTML ==="°C"){
       let ResultValue=(converter.value * 1.8) +32 ;
       result.innerHTML=converter.value + "°C is  "+ResultValue +"°F";
       result.style.color="pink";


   }else{

    let ResultValue=(converter.value -32) * 5/9;
    result.innerHTML=converter.value + "°F is  "+ResultValue +"°C";
    result.style.color="rgb(255,255,102)"
   }
 }

 }
 function  reset(){
     result.innerHTML="";
     converter.value=""
     
}

function  swap(){
     if(FirstValue.innerHTML== "°C"){
         FirstValue.innerHTML="°F";
         SecondValue.innerHTML="°C";
        converter.setAttribute("placeholder" ,"°F")
        document.title="converte °F to °C "
     }
     else{

        FirstValue.innerHTML="°C";
        SecondValue.innerHTML="°F";
       converter.setAttribute("placeholder" ,"°C")
       document.title="converte °C to °F "

     }
     
}