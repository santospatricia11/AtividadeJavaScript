const textParagraph = document.getElementById('textParagraph');
let fontSize = 16;

document.getElementById('textColorWhite').addEventListener('click', () => {
    textParagraph.style.color = 'white';
});

document.getElementById('textColorBlack').addEventListener('click', () => {
    textParagraph.style.color = 'black';
});

document.getElementById('backgroundWhite').addEventListener('click', () => {
    textParagraph.style.backgroundColor = 'white';
});

document.getElementById('backgroundBlack').addEventListener('click', () => {
    textParagraph.style.backgroundColor = 'black';
});

document.getElementById('increaseFontSize').addEventListener('click', () => {
    fontSize += 2;
    textParagraph.style.fontSize = fontSize + 'px';
});

document.getElementById('decreaseFontSize').addEventListener('click', () => {
    if (fontSize > 6) {
        fontSize -= 2;
        textParagraph.style.fontSize = fontSize + 'px';
    }
});



document.getElementById('textColorWhite').addEventListener('click', () => {
    textParagraph.style.color = 'white';
});

document.getElementById('textColorBlack').addEventListener('click', () => {
    textParagraph.style.color = 'black';
});

document.getElementById('backgroundWhite').addEventListener('click', () => {
    textParagraph.style.backgroundColor = 'white';
});

document.getElementById('backgroundBlack').addEventListener('click', () => {
    textParagraph.style.backgroundColor = 'black';
});

document.getElementById('increaseFontSize').addEventListener('click', () => {
    fontSize += 2;
    textParagraph.style.fontSize = fontSize + 'px';
});

document.getElementById('decreaseFontSize').addEventListener('click', () => {
    if (fontSize > 6) {
        fontSize -= 2;
        textParagraph.style.fontSize = fontSize + 'px';
    }
});

document.getElementById('uppercaseText').addEventListener('click', () => {
    textParagraph.style.textTransform = 'uppercase';
});

document.getElementById('lowercaseText').addEventListener('click', () => {
    textParagraph.style.textTransform = 'lowercase';
});

