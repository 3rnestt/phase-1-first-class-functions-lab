// Code your solution in this file!
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];
 const   returnFirstTwoDrivers = () => {
    return drivers.slice(0, 2)

 }

 const  returnLastTwoDrivers = () => {
    return drivers.slice(-2)
 }

 let selectingDrivers = [
    returnFirstTwoDrivers,
     returnLastTwoDrivers];


const createFareMultiplier = () => {
    return  function () {
        let num1 = 5;
        const fareMultiplier = createFareMultiplier(num1);
        return num1*5
    }
    let fare
}
function fareDoubler(fare){
    return fare*2

}

function fareTripler(fare){
    return fare *3
}
let argument1;
let argument2;
function selectDifferentDrivers(argument1, argument2){
    if (argument2 === returnFirstTwoDrivers  ) {
        return drivers.slice(0, 2);
    }
    if (argument2 === returnLastTwoDrivers) {
        return drivers.slice(-2)
    }
}