function get_properties(obj){
    for (let prop in obj){
        if (obj.hasOwnProperty(prop))
            console.log(`${prop} - ${obj[prop]}`);
    }
}
const foo = { a: '2'};
const bar = Object.create(foo);
bar.b = '3';
get_properties(bar)
