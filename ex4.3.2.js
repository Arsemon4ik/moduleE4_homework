function get_true_prop(str,obj){
    return obj.hasOwnProperty(str);
}
const foo = { a : '2', b : '1', c:undefined}
const result = get_true_prop('a',foo)
console.log(result)