let chars = ['A', 'B', 'A', 'C', 'B'];

let uniquechars = [];
chars.forEach((c) => {
    if(!uniquechars.includes(c)) {
        uniquechars.push(c);
    }
})

console.log(uniquechars);