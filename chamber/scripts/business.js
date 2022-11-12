const requestURL = 'JSON/data.json';
const cards = document.querySelector('.cards');

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);
    const business = jsonObject['business'];
    business.forEach(displaybusiness);  
  });

 const gridbutton = document.querySelector("#grid");
 const listbutton = document.querySelector("#list");
 const display = document.querySelector("#members")

 gridbutton.addEventListener("click", () => {
	display.classList.add("grid");
	display.classList.remove("list");
});

listbutton.addEventListener("click", () => {
	display.classList.add("list");
	display.classList.remove("grid");
});

  function displaybusiness(business){
    let card = document.createElement('section');
    let portrait = document.createElement('img');
    let h2 = document.createElement('h2');
    let h3 = document.createElement('h3');
    let h4 = document.createElement('h4');
    let a = document.createElement('a');
    let p = document.createElement('p');
    
    h2.textContent = `${business.businessname}`;
    h3.textContent =` ${business.staddress}`;
    h4.textContent =` ${business.phonenumber}`;
    a.textContent =`${business.businessname}`;
    a.href =business.website;
    p.textContent =`${business.level}`;
    
    portrait.setAttribute('src', business.imageurl);
    portrait.setAttribute('alt',`Image of the ${business.businessname} logo, ${business.order}${getOrdinal(business.order)} `);
    portrait.setAttribute('loading', 'lazy');

   
    card.appendChild(portrait);
    card.appendChild(h2);
    card.appendChild(h3);
    card.appendChild(h4);
    card.appendChild(a);
    card.appendChild(p);
    
    
    display.classList.add("grid");
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