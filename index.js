let input='a';
let first;

function reflect(str=''){
    let reflection='';
    for(let i=str.length;i>=0;i--){
        reflection+=str[i];
    }
    return reflection;
}

if(input.length%2===0){
    first=(input.length)/2
}else{
    first=(input.length/2)+1;
}
let last=input.length/2;

let first_half=input.slice(0,first);
let second_half=input.slice(last,input.length);
let sort_second_half='';
sort_second_half=reflect(second_half);
console.log(first_half);
console.log(second_half);
if(sort_second_half.includes(first_half)){
    console.log(true);
}
else{
    console.log(false);
}
