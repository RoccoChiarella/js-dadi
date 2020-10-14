var primo = Math.floor(Math.random() * 6 ) + 1;

console.log(primo);

var secondo = Math.floor(Math.random() * 6 ) + 1;

console.log(secondo);

if (primo == secondo) {
    document.getElementById('vincitore').innerHTML = "nessuno, pareggio";
} else if (primo > secondo) {
    document.getElementById('vincitore').innerHTML = "il primo";
} else {
    document.getElementById('vincitore').innerHTML = "il secondo";
}
