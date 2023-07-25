function Calcular() {
    let graus1 = document.querySelector(".graus2");
    let graus = Number(graus1.value);
    let res =document.querySelector(".info");

    let kel = (graus + 273.15);

    let fah = (graus * 1.8 + 32) ;

    console.log(kel, fah)

    res.innerHTML =`<h2> A temperatura de ${graus}°C, corresponde a ... </h2>
    <p> ${kel}°K (Kelvin)  </p>
    <p>${fah}°F (Fahrenheit) </p>`
}

console.log(Calcular())