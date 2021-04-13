const euroCities = ["Paris", "London", "Valletta", "Prague", "Rome"];

const cities = [ "London"];

euroCities.splice(0, 1, "Berlin");

console.log(euroCities);

console.log(euroCities.length);

euroCities.splice(-1, 1);

console.log(euroCities);

euroCities.push("Budapest" );

console.log(euroCities);

euroCities.splice(1, 2);

console.log(euroCities);

const asianCities = ["Chine", "Nepal", "India", "Thailand", "Sri Lanka"];

const sliced = asianCities.slice(1,4);

console.log(sliced);

const worldCities = euroCities.concat(asianCities);

console.log(worldCities);

worldCities.reverse();

console.log(worldCities);

worldCities.splice(2, 1, "Toronto");

console.log(worldCities);

worldCities.splice(2, 0, "Washington");

console.log(worldCities);


console.log(worldCities.join(","));
