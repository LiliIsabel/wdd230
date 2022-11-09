const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';
const cards = document.querySelector('.cards');

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);
    const prophets = jsonObject['prophets'];
    prophets.forEach(displayProphets);  
  });


  function displayProphets(prophet){
    let card = document.createElement('section');
    let h2 = document.createElement('h2');
    let portrait = document.createElement('img');
    let title = document.createElement('p');
    let h3 = document.createElement('h3');
    
    h2.textContent = `${prophet.name} ${prophet.lastname}`;
    h3.textContent =`Date of birth: ${prophet.birthdate}`
    title.textContent =`Place of birth: ${prophet.birthplace}`;

    portrait.setAttribute('src', prophet.imageurl);
    portrait.setAttribute('alt',  `Portrait of ${prophet.name} ${prophet.lastname}, ${prophet.order}${getOrdinal(prophet.order)} Latter-day President`);
    portrait.setAttribute('loading', 'lazy');

   
    
    card.appendChild(h2);
    card.appendChild(portrait);
    card.appendChild(title);
    card.appendChild(h3);
    

    document.querySelector('div.cards').appendChild(card);

  }


function getOrdinal(value) {
  var s = String(value),
  len = s.length,
  end  = s.substring(len - 1, 1),
  teen = len > 1 && s.substring(len - 2, 1) === "1",
  ord = "th";
if (end === "1" && !teen) {
  ord = "st";
} else if (end === "2" && !teen) {
  ord = "nd";
} else if (end === "3" && !teen) {
  ord = "rd";
}
return ord;
}