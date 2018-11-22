'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the miniMaxSum function below.
function miniMaxSum(arr) {
    var minSum = 0,maxSum = 0;
    arr.sort();
    for (var i = 0; i < arr.length; i++){
        if (i < 4) {
            minSum += arr[i];   
        }
        if (i > 0) {
            maxSum += arr[i];   
        } 
    }
    process.stdout.write(minSum+' '+maxSum);

}

function main() {
    const arr = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));

    miniMaxSum(arr);
}

