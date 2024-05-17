let Calculation = document.getElementById("BMIP")





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


}