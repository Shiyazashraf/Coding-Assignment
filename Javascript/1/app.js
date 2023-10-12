let reverseText = document.querySelector('#revtext');
const revButton = document.querySelector('#reverseButton');

revButton.addEventListener('click',() => {
    let inputText = document.getElementById('rev').value;
    if (inputText){
        reverseText.textContent = ` ${inputText.split('').reverse().join('')}`
    }
    else {
        alert("Enter some text to reverse")
    }
});
