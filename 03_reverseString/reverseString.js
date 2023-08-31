

const reverseString = function (string) {

    if (string == '') {
        return '';
    }

    const originalStringSplit = string.split('');
    const reversedStringsplit = [];


    for (let i = originalStringSplit.length - 1; i > -1; i--) {

        reversedStringsplit.push(originalStringSplit[i]);
    }

    return reversedStringsplit.join('');

};

// Do not edit below this line
module.exports = reverseString;
