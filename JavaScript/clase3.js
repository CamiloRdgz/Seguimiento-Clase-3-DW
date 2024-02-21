//SEGUIMIENTO

//Variables
let peso = "60kg";
const nombre = "Camilo";
let estatura = 1.78;
const añoNacimiento = 2006;
let carrera = "Tecnologia en Desarrollo de Software";

//Funciones

//no params
const randomNumberGenerator = () => {
    let randNum = Math.trunc(Math.random(100) * 100);
    return randNum
}

//one param
const ageCalculator = añoNacimiento => {
    edad = 2024 - añoNacimiento;
    return edad
}

//two params
const BodyMassIndexCalculator = (peso, estatura) => {
    bmi = peso / (estatura**2);
    return bmi.toFixed(2);
}

console.log("Numero Aleatorio: " + randomNumberGenerator());
console.log("Su edad es: " + ageCalculator(2006));
console.log("Su Indice de Masa Corporal es: " + BodyMassIndexCalculator(60, 1.79));