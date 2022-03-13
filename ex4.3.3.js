function create_func_without_proto(){
    const obj = Object.create(null)
    return obj;
}
const obj = create_func_without_proto()
console.log(obj)