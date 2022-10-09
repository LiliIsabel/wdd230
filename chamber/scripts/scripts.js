
document.querySelector('#lastUpdated').textContent = `Last Updated: ${document.lastModified}`;
const d = new Date();
let year = d.getFullYear();
document.querySelector('#year').textContent = `\u00a9 ${year} Mountain Valley Chamber | Lili Perez | WDD 230 Project |`;

function toggleMenu(){
    document.getElementById("navigation").classList.toggle("open");
    document.getElementById("hamburgerBtn").classList.toggle("open");
}
const x = document.getElementById("hamburgerBtn");
x.onclick = toggleMenu;