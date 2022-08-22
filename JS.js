let numberofbutton=document.querySelectorAll(".btn").length;

for(let i=0;i<numberofbutton;i++){
  document.querySelectorAll(".btn")[i].addEventListener("click",function(){
    let operation= this.value;
    console.log(operation);
    document.querySelector("#symbol").textcontent=operation;
    let num1= Number(document.getElementsByName("num1")[0].value);
    let num2= Number(document.getElementsByName("num2")[0].value);

  let res=0;
  switch (operation) {
    case '+':
  res= num1+num2
  console.log(res);
    document.getElementById("symbol").innerHTML ="+ ";

      break;
      case '-':{
        if(num1>=num2)
      {
      res= num1-num2;  console.log(res);
}
    else {
    res=num2-num1;  console.log(res);
  }}    document.getElementById("symbol").innerHTML ="- ";
      break;
      case '*':
      res= num1*num2;  console.log(res);
          document.getElementById("symbol").innerHTML ="x ";
      break;
      case '/':
      res= num1/num2;  console.log(res);
          document.getElementById("symbol").innerHTML ="/ ";
          break;
    default:
    res="Not A option";

  }
  document.querySelector("#result").textcontent=res;


  document.getElementById("rest").innerHTML =res;

});
}
