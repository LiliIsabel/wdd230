
let Temperature =document.getElementById('temp');
let Wind = document.getElementById('windspeed');
 
let Temp = Number(Temperature.innerHTML);
let WindSpeed = Number(Wind.innerHTML);

let WindChill = 35.74 + 0.6215*Temp - 35.75*WindSpeed**0.16 + 0.4275*Temp*WindSpeed**0.16;
WindChill = Math.floor(WindChill);

if( Temp <= 50 & WindSpeed > 3){
    
    document.getElementById('windchill').innerHTML = `${WindChill}`;
} else{
    
    document.getElementById('windchill').textContent = "N/A";
}