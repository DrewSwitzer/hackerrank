'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

function swap(arr, a, b) {
    const temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
    return arr;
}

// Complete the countSwaps function below.
function countSwaps(a, n) {
    let swaps = 0;

    for(let i=0; i < n; i++) {
        for(let j=0; j < n-1; j++) {
            if(a[j] > a[j+1]) {
                const temp = a[j];
                a[j] = a[j+1];
                a[j+1] = temp;
                swaps++;
            }
        }
    }

    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);
    ws.write('Array is sorted in ' + swaps + ' swaps.\n');
    ws.write('First Element: ' + a[0] + '\n');
    ws.write('Last Element: ' + a[a.length-1] + '\n');
    ws.end();
}

function main() {
    const n = parseInt(readLine(), 10);

    const a = readLine().split(' ').map(aTemp => parseInt(aTemp, 10));

    countSwaps(a, n);
}
