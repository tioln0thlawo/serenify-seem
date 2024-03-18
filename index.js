// serenify.js

const randomWords = require('random-words');

// Function to generate a calming quote
function generateCalmingQuote() {
    const quotes = [
        "In the midst of movement and chaos, keep stillness inside of you. - Deepak Chopra",
        "Nothing can disturb your peace of mind unless you allow it to. - Roy T. Bennett",
        "Peace is the result of retraining your mind to process life as it is, rather than as you think it should be. - Wayne W. Dyer",
        "Happiness depends on your mindset and attitude. - Roy T. Bennett"
    ];
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
}

// Function to generate a random serene word
function generateSereneWord() {
    return randomWords();
}

// Function to check if a word is serene
function isSereneWord(word) {
    const sereneWords = ["serenity", "tranquility", "calmness", "peace"];
    return sereneWords.includes(word.toLowerCase());
}

module.exports = {
    generateCalmingQuote,
    generateSereneWord,
    isSereneWord
};
