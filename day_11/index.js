// document.getElementById("btnn").onclick=function(){
//     document.getElementById("sample").style.color= 'red';
// };

// var newArr = [20,30,40,10,9,55]
// var solvedArr = newArr.sort((a, b) => a - b);
// console.log(solvedArr)

// function findElement(arr,n, key){
 
    
//     let i ;
//     for(i=0;i<n;i++)
//         if(arr[i]== key)
//             return i;
//         return  -1;
// }

// let arr = [11,22,3,33,44,55,65];
// let n =  arr.length;
function fetdata(){
    fetch("https://dog.ceo/api/breeds/image/random")
    .then((response)=> response.json())
    .then((data)=>{
        console.log(data);
    })
}
fetdata();