// Code your solutions in this file
const name = ["Guadalupe,", "Ollie,", "Aki"];

function writeCards(names, eventNames) {
    let messages = []
       for (let i = 0; i < names.length; i++) { 
        messages.push(`Thank you, ${names[i]}, for the wonderful ${eventNames} gift!`);
    } 
        return messages;
    }

function countDown(number){
   while (number >= 0){
    console.log(number);       
    number --;
}
}