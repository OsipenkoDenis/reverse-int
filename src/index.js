module.exports = function reverse (n) {
    if(n < 0){
      n *=(-1)
    }
    let str = '' + n;
    let arr = Array.from(str);
    arr = arr.reverse();
    let string = '';
    for(let key in arr){
      string += arr[key];
    }
    let num = +string;
    return num;
}
