const planetDistanceFromSum = ({ name, distanceFromSum: { value, measurementUnit } }) => 
    `${name} is ${value} ${measurementUnit} apart from the Sum`;

const mars = {
    name: "Mars",
    distanceFromSum: {
        value: 227900000,
        measurementUnit: "kilometers",
    },
}

const venus = {
    name: "Venus",
    distanceFromSum: {
        value: 108200000,
        measurementUnit: "kilometers",
    },
};

const jupiter = {
    name: "Jupiter",
    distanceFromSum: {
        value: 778500000,
        measurementUnit: "kilometers",
    },
};
  
console.log(planetDistanceFromSum(mars)); // a
setTimeout(() => console.log(planetDistanceFromSum(venus)), 3000); // b
setTimeout(() => console.log(planetDistanceFromSum(jupiter)), 2000); //c
