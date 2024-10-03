function lowerCaseWords(mixedArray) {
    const filtArray = [];
    for (let i = 0; i < mixedArray.length; i++) {
        if (typeof mixedArray[i] === 'string') { 
            filtArray.push(mixedArray[i]);
        }        
    }   
    return filtArray.map(word => word.toLowerCase());
}

const mixArray = ['PIZZA',10,true,25,false,'Wings'];
console.log(lowerCaseWords(mixArray)); 
