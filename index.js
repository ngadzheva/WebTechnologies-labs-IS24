function sum(b, c) {
    var d;
    if (a < 10) {
        d = a + 6;
        let z = d - b;
        const DEFAULT = 10;
        // DEFAULT = z;
    }

    // console.log(DEFAULT)
    return a + b + c + d;
}

console.log(sum(8, 9));
// console.log(d);

// a = 'sdfkds';
var a = 5;
console.log(a != '5')

console.log(1 + +'1')

const array = [1, 5, 'kdgjkf', [1, 5, true]];
array[6] = 'khkjhjk';
console.log(array)
console.log(array[4])
array.push(8)
console.log(array)
array.unshift(7)
console.log(array)
array.pop()
console.log(array)
array.shift()
console.log(array)
array.splice(2, 0, 9)
console.log(array)
array.splice(3, 2)
console.log(array)
array.splice(5, 1, 3)
console.log(array)
array.splice(3, 2)
console.log(array)

let object = {
    prop: {
        subprop: 'ajdksjf'
    },
    func: function asdf() {
        console.log('asdf')
    }
};

object['prop']
console.log(object.prop)
object.prop.subprop
object.newProp = 8;
console.log(object)

delete object.func
console.log(object.func)
