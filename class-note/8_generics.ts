// function logText(text) {
//     console.log(text);
//     return text;
// }
//
// logText(10);
// logText('hi');
// logText(true);

// function logText<T>(text: T):T {
//     console.log(text);
//     return text;
// }
//
// logText<string>('hi');
// logText<number>(10);

function logText(text: string) {
    console.log(text);
    text.split('').reverse().join('');
    return text;
}
logText('a');
logText(10); // error
logText(true) // error