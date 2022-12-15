const requestURL = 'json/fruits.json';


fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);
    const fruits = jsonObject;
    fruits.forEach(displayFruits);  
  });

  function example(element){
    console.log(element);
  }
  

  function displayFruits(fruits) {
    let choice1 = document.createElement('option');
    let choice2 = document.createElement('option');
    let choice3 = document.createElement('option');

    choice1.setAttribute('value', fruits.name);
    choice1.text = fruits.name;
    choice2.setAttribute('value', fruits.name);
    choice2.text = fruits.name;
    choice3.setAttribute('value', fruits.name);
    choice3.text = fruits.name;
    
    const firstBox = document.getElementById('choice1');
    const secondBox = document.getElementById('choice2');
    const thirdBox = document.getElementById('choice3');
    firstBox.appendChild(choice1);
    secondBox.appendChild(choice2);
    thirdBox.appendChild(choice3);
}
    

