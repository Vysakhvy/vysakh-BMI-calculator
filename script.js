
calculateBMI = () => {
    
    const height = document.getElementById("heightInput").value;
    const weight = document.getElementById("weightInput").value;
  
    
    if (height === "" || weight === "") {
      alert("Please enter both height and weight values");
      return;
    }
  
    
    let bmi = weight / (height / 100) ** 2;
    let result = "Your BMI is " + bmi.toFixed(2);
  
    let category = "";
  
   
    if (bmi < 18.5) {
      category = "Underweight";
    } else if (bmi >= 18.5 && bmi < 25) {
      category = "Normal weight";
    } else if (bmi >= 25 && bmi < 30) {
      category = "Overweight";
    } else {
      category = "Obese";
    }
  
    result += "<br> Category: " + category;
  
    
    document.getElementById("result").innerHTML = result;
  };








