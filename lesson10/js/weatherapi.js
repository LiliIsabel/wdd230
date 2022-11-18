const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const description = document.querySelector('#currently')
const captionDesc = document.querySelector('figcaption');

const url = 'https://api.openweathermap.org/data/2.5/weather?q=Fairbanks&units=imperial&appid=06d6a5dd37cd20be2764424784dcc66a';



async function apiFetch() {
    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        console.log(data); 
        displayResults(data);
      } else {
          console.log(`Response not OK ${await response.text()}`)
      }
    } catch (error) {
        console.log(error);
    }
  }
  
  apiFetch();

function capitalize(string){
    return `${string.charAt(0).toUpperCase()}${string.slice(1)}`;
}

function displayResults(data){
    currentTemp.textContent = data.main.temp.toFixed(0);
    let desc = capitalize(data.weather[0].description);
    description.textContent = desc;
    captionDesc.textContent = `Icon of current weather conditions at Fairbanks, Alaska which is: ${desc}`;
    weatherIcon.src= `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
    weatherIcon.alt = `${captionDesc.textContent}`;
}


  //API key: 06d6a5dd37cd20be2764424784dcc66a
  
