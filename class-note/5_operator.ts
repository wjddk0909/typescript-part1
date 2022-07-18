function logMessage(value: string) {
    console.log(value);
}

logMessage('hello');
// logMessage(100);

// const name1: string | number | boolean;
function logMessage1(value: string | number) {
    // console.log(value);
    if(typeof value === 'number') {
        value.toLocaleString();
    }
    if (typeof value === 'string') {
        value.toUpperCase();
    }
    throw new TypeError('value must be string or number');
}
logMessage1('hello');
logMessage1(100);