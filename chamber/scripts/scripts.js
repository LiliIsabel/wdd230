
document.querySelector('#lastUpdated').textContent = `Last Updated: ${document.lastModified}`;
const d = new Date();
currentDate = d.getDay();
let year = d.getFullYear();
document.querySelector('#year').textContent = `\u00a9 ${year} Mountain Valley Chamber | Lili Perez | WDD 230 Project |`;
let date = new Intl.DateTimeFormat("en-US", { dateStyle: "full"}).format(d);

function toggleMenu(){
    document.getElementById("navigation").classList.toggle("open");
    document.getElementById("hamburgerBtn").classList.toggle("open");
}
const x = document.getElementById("hamburgerBtn");
x.onclick = toggleMenu;

const banner =document.querySelector('#date').textContent =` ${date} ` ;


if(currentDate == 1 || currentDate == 4){
    document.querySelector('#meeting').textContent =` "🤝🏼 Come join us for the chamber meet and greet Wednesday at 7:00 p.m."` ;
} else{
    document.querySelector('#meeting').style.display="none";
}