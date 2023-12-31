let result = document.querySelector('#result')
const cancel = document.querySelector('.cancel')
const back = document.querySelector('.back')
const equals = document.querySelector('.equals')
let resultText = ''


function formatText(sign) {
    resultText += sign
    resultText = resultText.replace(/^[+/*]|[a-zA-Z,~`!@#$%^&|"':=;'\\><?()\[\]{_}]/gi, '')
    resultText = resultText.replace(/(\+(?=\+)|\-(?=\-)|\*(?=\*)|\/(?=\/)|\+(?=\*)|\+(?=\-)|\+(?=\/)|\-(?=\*)|\-(?=\/)|\-(?=\+)|\/(?=\+)|\/(?=\*)|\*(?=\/)|\*(?=\+)|\*(?=\+-))/g, '')
    resultText = resultText.replace(/(\+(?=\+)|\-(?=\-)|\*(?=\*)|\/(?=\/)|\+(?=\*)|\+(?=\-)|\+(?=\/)|\-(?=\*)|\-(?=\/)|\-(?=\+)|\/(?=\+)|\/(?=\*)|\*(?=\/)|\*(?=\+)|\*(?=\+-))/g, '')

    switch(resultText) {
        case '/':
            resultText = ''
        break
        case '*':
            resultText = ''
        break
        case '+':
            resultText = ''
        break
        case '-':
            resultText = '-'
        break
    }
    return resultText
}

function updateResult() {
    if (result.dataset.animate === 'true' && this.classList.contains('digit')) {
        resultText = this.innerText
        result.value = resultText    
        console.log(this, this.classList.contains('digit'))
        return
    } else {
    resultText = result.value + this.innerText
    result.value = resultText
    console.log(result.dataset.animate, resultText)
    }
    result.dataset.animate = 'false'

    var sign;
    switch(this.dataset.sign) {
        case 'plus':
            sign = '+'
            formatText(sign)
            result.value = resultText
        break
        case 'minus':
            sign = '-'
            formatText(sign)
            result.value = resultText
        break
        case 'multiply':
            sign = '*'
            formatText(sign)
            result.value = resultText
        break
        case 'divide':
            sign = '/'
            formatText(sign)
            result.value = resultText
        break
    }
}

function digitPress() {
    let digits = document.querySelectorAll('.digit')
    digits.forEach(digit => {
        digit.addEventListener('click', updateResult)
    });
}
digitPress()

function signPress() {
    let signs = document.querySelectorAll('.sign')
    signs.forEach(sign => {
        sign.addEventListener('click', updateResult)
    });
}
signPress()

function resultEquals() {
    if (resultText === '') return
    result.dataset.animate = 'true'

    switch(resultText[resultText.length-1]) {
        case '/':
            resultText = resultText.substring(0,resultText.length-1)
        break
        case '*':
            resultText = resultText.substring(0,resultText.length-1)
        break
        case '+':
            resultText = resultText.substring(0,resultText.length-1)
        break
        case '-':
            resultText = resultText.substring(0,resultText.length-1)
        break
    }
    let evaluation = eval(resultText)
    result.value = evaluation
}

function equalsPress() {
    equals.addEventListener('click', resultEquals)
}
equalsPress()

function stepClearResult() {
    resultText = resultText.substring(0, resultText.length-1)
    result.value = resultText
}

function backPress() {
    back.addEventListener('click', stepClearResult)
}
backPress()

function clearResult() {
    resultText = ''
    result.value = resultText
}

function cancelPress() {
    cancel.addEventListener('click', clearResult)
}
cancelPress()















































































// function replaceSubtext(text, sign) {
//     let arr = text.split('')
//     arr[arr.length-1] = sign
//     let newText = arr.join('')
//     return newText
// }

// function formatText(sign) {

//     const element = resultText[resultText.length - 1]
//     if(element === 'x'||element === '-'||element === '/'||element === '+') {
//         resultText = replaceSubtext(resultText, sign)
//     } else {
//         resultText = resultText + sign
//     }
// }

// function updateResult() {
//     resultText = result.value + this.innerText
//     result.value = resultText

//     var sign;
//     switch(this.dataset.sign) {
//         case 'plus':
//             sign = '+'
//             formatText(sign)
//             result.value = resultText
//         break
//         case 'minus':
//             sign = '-'
//             formatText(sign)
//             result.value = resultText
//         break
//         case 'multiply':
//             sign = 'x'
//             formatText(sign)
//             result.value = resultText
//         break
//         case 'divide':
//             sign = '/'
//             formatText(sign)
//             result.value = resultText
//         break
//     }
// }

// function digitPress() {
//     let digits = document.querySelectorAll('.digit')
//     digits.forEach(digit => {
//         digit.addEventListener('click', updateResult)
//     });
// }
// digitPress()

// function signPress() {
//     let signs = document.querySelectorAll('.sign')
//     signs.forEach(sign => {
//         sign.addEventListener('click', updateResult)
//     });
// }
// signPress()
// // function equalsPress() {}

// // function backPress() {}

// function clearResult() {
//     resultText = null
//     result.value = resultText
// }

// function cancelPress() {
//     cancel.addEventListener('click', clearResult)
// }
// cancelPress()

// // function resultPress() {}