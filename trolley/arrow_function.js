const val = (a,b) => a * b; // Works like a lambda function but with a few differences. 

console.log(val(2,4))
function conversion(len,from,to){
    const len_type = {
        km : { miles : len => len / 1.6, ft : len => len * 3281}, miles : { km : len => len * 1.6, ft : len => len * 5280}
    };
    
    if (from === to){
        return len;
    }
    
    if(len_type[from] && len_type[from][to]){
        return len_type[from][to](len);
    }
    
    return `${to} is not valid`;
}

console.log(conversion(50,'km','ft'))
console.log(conversion(12,'miles','km'))