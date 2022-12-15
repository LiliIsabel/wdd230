
document.querySelector('#lastUpdated').textContent = `Last Updated: ${document.lastModified}`;
const d = new Date();
currentDate = d.getDay();
let year = d.getFullYear();
document.querySelector('#year').textContent = `\u00a9 ${year} Bountiful Foods | Lili Perez | WDD 230 Project |`;
let date = new Intl.DateTimeFormat("en-US", { dateStyle: "full"}).format(d);

function toggleMenu(){
    document.getElementById("navigation").classList.toggle("open");
    document.getElementById("hamburgerBtn").classList.toggle("open");
}
const x = document.getElementById("hamburgerBtn");
x.onclick = toggleMenu;


