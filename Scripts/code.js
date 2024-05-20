let Calculation = document.getElementById("BMIP")
let Nullchecker = document.getElementById("BMIScale")





function BMICheck() {

    let BMIR = document.getElementById("BMIScale")
    let Weight = +document.getElementById("Weight").value
     let Height = +document.getElementById("Height").value
    let HeightSq = (Height/100) ** 2
    console.log(HeightSq)
    let BMI = Weight / HeightSq
 
    BMIR.innerHTML = BMI.toFixed(2)

//     if (BMI < 18.5) {

//    Calculation.innerHTML="Underweight"


//     }
//     else if (BMI >= 18,5) 

//         Calculation.innerHTML="Healthy"

// else if (BMI <= 25 ) {

//     Calculation.innerHTML="Overweight"


// }

// else if (BMI >= 30 ) {

//     Calculation.innerHTML="Obese"


// }

switch (true) {
   
    case BMI < 18.5:
        
    Calculation.innerHTML="Underweight";
    Calculation.style.color = "#ff7b7b";
    
    break;
    case BMI >=18.5 && BMI <= 24.9:
        Calculation.innerHTML="Healthy";
        Calculation.style.color = "green";

        break;
        case BMI >= 24.9 && BMI <= 29.9:
        
        Calculation.innerHTML="Overweight";
        Calculation.style.color = "#ff5252";

        break;
        case BMI >= 30 && BMI <= 34.9:
        
        Calculation.innerHTML="Obese";
        Calculation.style.color = "#ff0000";

       break;

       case BMI >= 34.9:
        
       Calculation.innerHTML="Extremely Obese";
       Calculation.style.color = "#a70000";

       break;

       case isNaN(BMI):
       Calculation.style.color = "black";        
       Calculation.innerHTML="Invalid Value";
    Nullchecker.innerHTML = "You have selected an invalid value please check input fields.";

       break;
   }



}