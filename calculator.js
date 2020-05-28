const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({extended:true}));

app.get("/", function(request, response) {
  response.sendFile(__dirname + "/index.html");
});

app.post("/", function(request, response) {
  var num1 = Number(request.body.num1);
  var num2 = Number(request.body.num2);

  var result = num1 + num2;
  response.send("The Result is: " + result);
});

app.get("/bmiCalculator", function(request, response){
  response.sendFile(__dirname + "/bmiCalculator.html");
});

app.post("/bmiCalculator", function(request, response){
  var weight = parseFloat(request.body.weight); //this is used to take a float value from the user
  var height = parseFloat(request.body.height); //

  var bmi = weight / (height * height);

  response.send("Your BMI is " + bmi);
});

app.listen(2000, function() {
  console.log("Started at Port");
});
