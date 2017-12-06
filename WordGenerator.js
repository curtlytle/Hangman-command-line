var words = ["Basketball", "Apple", "Christmas", "Alaska", "Cabin", "Pumpkin", "Tree", "Santa"];
function WordGenerator () {
    this.generateWord = function() {
        var index = getRndInteger(0,words.length);
        return words[index];
    }
}

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
}
module.exports = WordGenerator;