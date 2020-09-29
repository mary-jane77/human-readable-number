module.exports = function toReadable(number) {
    let arr1 = [
        'zero',
        'one',
        'two',
        'three',
        'four',
        'five',
        'six',
        'seven',
        'eight',
        'nine',
        'ten',
    ]
    let arr2 = [
        'ten',
        'eleven',
        'twelve',
        'thirteen',
        'fourteen',
        'fifteen',
        'sixteen',
        'seventeen',
        'eighteen',
        'nineteen',
    ]
    let arr3 = [
        'zero',
        'ten',
        'twenty',
        'thirty',
        'forty',
        'fifty',
        'sixty',
        'seventy',
        'eighty',
        'ninety',
    ]
    number = number.toString().split('')
    switch (number.length) {
        case 1:
            return arr1[number]
            break
        case 2:
            if (number[0] == 1) {
                return arr2[number[1]]
            } else if (number[1] == 0) {
                return arr3[number[0]]
            } else {
                return `${arr3[number[0]]} ${arr1[number[1]]}`
            }
            break
        case 3:
            let newNum = [number[1], number[2]]
            if (number[2] == 0 && number[1] == 0) {
                return `${arr1[number[0]]} hundred`
            } else if (number[1] == 0 && number[2] !== 0) {
                newNum = toReadable(number[2])
            } else {
                newNum = toReadable(newNum.join(''))
            }
            return `${arr1[number[0]]} hundred ${newNum}`
            break
    }
}
