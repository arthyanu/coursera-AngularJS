var student = {
  name: "",
  type: "student"
};

document.addEventListener('DOMContentLoaded', contentLoaded);

function contentLoaded(event){
  document.getElementById('name').addEventListener("keyup", keyUp);
}

function keyUp(event){
  calculateNumericValue();
}

function calculateNumericValue(){
  student.name = document.getElementById('name').value;

  var sum = 0;
  for(var i = 0; i < student.name.length; i++)
    sum += student.name.charCodeAt(i);

    var output = "Total Value = " + sum;

    document.getElementById('output').innerHTML = output;
}
