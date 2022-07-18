function logMessage(value: string) {
    console.log(value);
}

logMessage('hello');
// logMessage(100);

function logMessage1(value: string | number) {
    console.log(value);
}
logMessage1('hello');
logMessage1(100);
