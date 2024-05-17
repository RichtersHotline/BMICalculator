let Calculation = document.getElementById("BMIP")





function BMICheck() {
    let BMIR = document.getElementById("BMIScale")
    let Weight = document.getElementById("Weight").value
     let Height = document.getElementById("Height").value
    let HeightSq = Height * Height
    console.log(HeightSq)
    let BMI = Weight / HeightSq
    

    BMIR.innerHTML = BMI 



}