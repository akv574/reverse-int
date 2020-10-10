module.exports = function reverse (n) {
    let result = String( Math.abs(n)).split("").reverse().join("");
    result[0] == 0 ? result = result.substr(1,result.length-1) : result;
    return Number(result)
  
}
