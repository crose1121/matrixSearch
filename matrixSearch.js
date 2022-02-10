// Matrix Search
// Jenny digs image and wants to make a JavaScript imaging library like PIL for python. She is given 2 different two-dimensional arrays, containing integers between 0 and 65535. Each two dimensional array represents a grey-scale image, where each integer value is a pixel. The second image might be somewhere inside the larger one. Return whether it is.
// Given Array: [ [12, 34, 45, 56],    And Array: [ [67, 78],      return: true
//                [98, 87, 76, 65],                 [43, 32] ];   
//                [56, 67, 78, 89],
//                [54, 43, 32, 21] ];


let x = [
    [12, 34, 45, 56],
    [98, 87, 76, 65],
    [56, 67, 78, 89],
    [54, 43, 32, 21]
]

let y = [
    [67, 78],
    [43, 32]
]

let z = [
    [12,34],
    [98,85]
]

function matrixSearch(bigArr, smallArr){
    let char1 = smallArr[0][0];
    let char2 = smallArr[0][1];
    let char3 = smallArr[1][0];
    let char4 = smallArr[1][1];

    for (let i=0;i<bigArr.length;i++) {
        for (let n=0;n<bigArr.length;n++) {
            if (char1===bigArr[i][n] && char2===bigArr[i][n+1]) { //if we have a top row match
                if (char3===bigArr[i+1][n] && char4===bigArr[i+1][n+1]) {
                    return true
                }
            }
        }
    }
    return false;
}

console.log(matrixSearch(x,y)) //true
console.log(matrixSearch(x,z)) //false