const wordSearch = (letters, word) => { 
    const horizontalJoin = letters.map(ls => ls.join(''))
    for (l of horizontalJoin) {
        if (l.includes(word)) {
            return true;
        }
    }
    let result = [];
    let counter = 0;
    for (let i = 0; i < letters.length; i++) {
        for (let j= 0; j < letters[i].length; j++) {
            if (letters[i][j] === word[0]) {
                for (let k = i; k < letters.length - i; k++) {
                    if (letters[k][j] === word[counter]) {
                        result.push(letters[k][j]);
                        counter += 1;
                        if (result.length === word.length) {
                            return true;
                        }
                    } else {
                        result = [];
                        counter = 0;
                        k = letters.length;
                    }
                }
            }
        }
    }
    return false;
};

module.exports = wordSearch