const requestURL = 'json/fruits.json';


fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);
    const fruits = jsonObject;
    fruits.forEach(displaybusiness);  
  });

  function example(element){
    console.log(element);
  }

  function displayFruits(fruits){
    let card = document.createElement('section');
    let portrait = document.createElement('img');
    let h2 = document.createElement('h2');
    let h3 = document.createElement('h3');
    let h4 = document.createElement('h4');
    let a = document.createElement('a');
    let p = document.createElement('p');
    
  }
