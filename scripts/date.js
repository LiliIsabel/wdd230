
document.querySelector('#lastUpdated').textContent = `Last Updated: ${document.lastModified}`;
const d = new Date();
let year = d.getFullYear();
document.querySelector('#year').textContent = `\u00a9 ${year} Lili Perez | Herriman, UT`;