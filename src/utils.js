
console.log('utils.js is running !!! ');

const square = (a) =>  a + a ;

//export const add = (a,b) =>  a + b ;
const add = (a,b) =>  a + b ;

const subt = (a,b) => a - b ;

// export {square}; // named export
export { square, add, subt as default }; // named export
//
