
function task1(){
    var array1 = [1,2,3,4];
    var sum = 0;
    for(let i = 0;i <= array1.length;i++){
        sum += array1[i] ;
    }

    document.getElementById("a").innerHTML = array1;
    document.getElementById("b").innerHTML = sum;
    

}



function add(){
    var n1 = Number(document.getElementById("Num1").value);
    var n2 = Number(document.getElementById("Num2").value);

    document.getElementById("demo").innerHTML = n1+n2;
}

function subtract(n1,n2){
    var n1 = Number(document.getElementById("Num1").value);
    var n2 = Number(document.getElementById("Num2").value);

    document.getElementById("demo").innerHTML = n1-n2;}

function multiply(n1,n2){
    var n1 = Number(document.getElementById("Num1").value);
    var n2 = Number(document.getElementById("Num2").value);

    document.getElementById("demo").innerHTML = n1*n2;}

function divide(n1,n2){
    var n1 = Number(document.getElementById("Num1").value);
    var n2 = Number(document.getElementById("Num2").value);

    document.getElementById("demo").innerHTML = n1/n2;}


function sortArray(){

    var ar = document.getElementById("arrayInput").value;

    var intArray;

    intArray = ar.split(",");
    intArray.sort();
    document.getElementById("demo1").innerHTML = intArray;



}

function validateForm(){

    var inpName = document.getElementById("name").value;
    var inpEmail = document.getElementById("email").value;    
    var inpPass = document.getElementById("pass").value;

    if(inpEmail == "" || inpName == "" || inpPass == ""){
    }


    if(inpEmail.length <= 8|| inpName.length <= 8 || inpPass.length <= 8){

    }

}

function tipCalc(){

    var bill = Number(document.getElementById("billed").value);
    var people = Number(document.getElementById("people").value);


    document.getElementById("tipVal1").innerHTML = "Outstanding = " + (bill*0.3)/people + "$ per person";
    document.getElementById("tipVal2").innerHTML = "Good = " + (bill*0.2)/people+ "$ per person";
    document.getElementById("tipVal3").innerHTML = "Okay = " + (bill*0.15)/people+ "$ per person";
    document.getElementById("tipVal4").innerHTML = "bad = " + (bill*0.10)/people+ "$ per person";
    document.getElementById("tipVal4").innerHTML = "Terible = " + (bill*0.05)/people+ "$ per person";






}

