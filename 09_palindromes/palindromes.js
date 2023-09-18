const palindromes = function(str) {
    // Remove non-alphanumeric characters and convert to lowercase
    const cleanedStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    // Reverse the cleaned string
    const reversedStr = cleanedStr.split('').reverse().join('');
    // Compare the cleaned string with its reverse
    return cleanedStr === reversedStr;
};
// Do not edit below this line
module.exports = palindromes;
