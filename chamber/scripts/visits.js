
let numVisits = Number(window.localStorage.getItem("visits-ls"));

if (numVisits !== 0) {
    document.querySelector('#visits').textContent = `You have visited the site ${numVisits} times`;
} else {
    document.querySelector('#visits').textContent = "Welcome!";
}
numVisits++;
