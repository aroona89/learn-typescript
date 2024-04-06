/* Q#13
Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car,
and make a list that stores several examples. Use your list to print a series of statements about
these items, such as “I would like to own a Honda motorcycle.” */

var fav_transport: string[] = ['Bicycle', 'Car', 'Aeroplane']; // array of strings

// Method-1 (using for Loop)
for (var i=0; i < fav_transport.length; i++) {
  console.log(`I love to travel using ${fav_transport[i]}`);
}

// Method-2 (using for of Loop)
for (var transport of fav_transport){
    console.log(`I love to travel using ${transport}`);
}