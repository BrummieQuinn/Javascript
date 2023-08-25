// example for break and continue keywords
let cars = [
  {
    model: 'Golf',
    make: 'Volkswagen',
    year: 1999,
    colour: 'black',
  },
  {
    model: 'Picanto',
    make: 'Kia',
    year: 2020,
    colour: 'red',
  },
  {
    model: 'Peugeot',
    make: '208',
    year: 2021,
    colour: 'black',
  },
  {
    model: 'Fiat',
    make: 'Punto',
    year: 2020,
    colour: 'black',
  },
];
// break:
for (let i = 0; i < 10; i++) {
    console.log(i);
    if (i === 4) {
        break;
        // as soon as  i === 4 the break command ends the loop
        // only logs to 4
    }

}
// using break on array of cars: stop looping when car found
for (let i = 0; i < cars.length; i++) {
// if statement: condition for year
    if (cars[i].year >= 2020) {
// if statement: condition for colour
        if (cars[i].colour === 'black') {
            console.log('I have found my new car:', cars[i]);
            break;
        }
    }
}
// continue:

for (let car of cars) {
    // approach skips over every car not black
    if (car.colour !== 'black') {
        continue;
    }
    // consider others not older than year 2020 or later
    if (car.year >= 2020) {
        console.log('we could get this one:', car);
    // the output will be all cars that meet the conditions
    }
}