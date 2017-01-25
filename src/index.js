import numeral from 'numeral';

const courseValue = numeral(1000).format('$0,0.00');
console.log(`You couldnt pay me ${courseValue} to take this course!`);