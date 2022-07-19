let comments = []; // массив 

document.querySelector('button').addEventListener('click', addComment); // получаю строку от пользователя, после события нажатия на кнопку и действия функции addComment()

function addComment() {
    let message = document.getElementById('newComment').value; // переменная, в которую записывается строка из textarea, введенная пользователем 
    comments.push(message); // строка записывается в конец массива
    checkSpam(); // вызов функции проверки на спам
    showComment(); // вызов функции показа обработанного текста 
}

function checkSpam() {
    console.log(comments)
    comments = comments.map(element => {
        if (element.toLowerCase() === 'viagra') {
            return '***';
        };
        if (element.toLowerCase() === 'xxx') {
            return '***';
        };
        return element;
    })
    let newString = comments.join(' ');
    return newString;
}
checkSpam();

function showComment() {
    let optionsString = '';
    for (let comment of comments) {
        optionsString += `<div><span>${comment}</span></div>`;
    }
    document.getElementById('container').innerHTML = optionsString;
}
showComment();

// const text = 'some text what contains word ViaGra and other XxX words';

// function checkSpam(text) {
//     let arr = text.split(' ');
//     console.log(arr);
//     arr = arr.map(element => {
//         if (element.toLowerCase() === 'viagra') {
//             return '***';
//         };
//         if (element.toLowerCase() === 'xxx') {
//             return '***';
//         };
//         return element;
//     })
//     let newString = arr.join(' ');
//     return newString;
// }
// checkSpam(text);