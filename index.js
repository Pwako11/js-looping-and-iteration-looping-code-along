// Code your solutions in this file
const names = ["Lisa", "Kaitlin", "Jan"];
const eventname = 'surprise';

function writeCards(names, eventname){
  const newArray = new Array();
  for (let countDown = 0; countDown < names.length; countDown++){
  newArray.push(`Thank you, ${names[countDown]}, for the wonderful ${eventname} gift!`);
  console.log(`Thank you, ${names[countDown]}, for the wonderful ${eventname} gift!`);
  }
  return newArray;
}
writeCards(names, eventname);

// number = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


function countDown(number) {
        let countDown  = number  

        while (countDown > -1) {
            console.log(countDown--);
        };
};
countDown(number);
