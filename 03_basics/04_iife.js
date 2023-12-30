// Immediatly Invoked Functions Expressions

function chai() {
    console.log('DB Connected Successfully');
}

chai();

(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh')