const repeatString = function(str, num) {
    if (num < 0){return "ERROR"}
    let result = "";
    let i = 0;
    while (i < num){
        result += str;
        i++;
    }
    return result    
    };

// Do not edit below this line
module.exports = repeatString;
