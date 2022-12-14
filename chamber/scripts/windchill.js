


const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const description = document.querySelector('#currently');
const wspeed = document.querySelector("#windspeed");
const wchill = document.querySelector("#windchill");


const url = 'https://api.openweathermap.org/data/2.5/weather?q=Herriman&units=imperial&appid=06d6a5dd37cd20be2764424784dcc66a';



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
    weatherIcon.src= `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    weatherIcon.setAttribute('alt', desc, src);
    
    wspeed.textContent = data.wind.speed.toFixed(0);
    
    let Temp = Number(currentTemp.innerHTML);
    let WindSpeed = data.wind.speed;

    let WindChill = 35.74 + 0.6215*Temp - 35.75*WindSpeed**0.16 + 0.4275*Temp*WindSpeed**0.16;
    WindChill = Math.floor(WindChill);

    if( Temp <= 50 & WindSpeed > 3){
    
         document.getElementById('windchill').innerHTML = `${WindChill}`;
      } else{
          
         document.getElementById('windchill').textContent = "N/A";
      }

      wchill.textContent = WindChill;
}





  //API key: 06d6a5dd37cd20be2764424784dcc66a
  
