let addNum_arrow = (a,b)=>{
    return a+b;
}
let minusNum_arrow = (a,b)=>{
    return a-b;
}

setTimeout(()=>console.log(addNum_arrow(100,5)),3000);
setTimeout(()=>console.log(minusNum_arrow(100,5)),5000);