const reversedText = document.querySelector('#revtext');
const submitButton = document.querySelector('#reverseButton');

submitButton.addEventListener('click',() => {
    let inputText = document.getElementById('rev').value;
    if (inputText){
        reversedText.textContent = ` ${reverseWords(inputText)}`
    }
    else {
        alert("Enter some text to reverse")
    }
});


 function reverseWords(inputText) {
    const words = inputText.split(" ");
    const reversedWords = words.map(word => word.split('').reverse().join(''));     
    return reversedWords.join(' ');
 }