// Code your solutions in this file
function writeCards(names, eventName){
    const newArray=[...names];
    for(let i= 0; i<names.length ;i++){
    
        newArray[i] =        `Thank you, ${names[i]}, for the wonderful ${eventName} gift!`;

    }
    return newArray
}
//writeCards(names, eventName) ;

function countDown (num){
    while(num>=0){
        console.log(num)
        num--
    }
}