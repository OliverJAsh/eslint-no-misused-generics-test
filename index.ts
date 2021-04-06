// Errors as expected
type MyFunction = <T>(param: T) => number;

// Expected error, got none
const myFunction = <T,>(param: T) => 1;