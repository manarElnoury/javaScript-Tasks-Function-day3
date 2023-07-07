// function test (num1 , num2 , num3 , num4 ){


//     if(isNaN(num1)||isNaN(num2)||isNaN(num3)||isNaN(num4)){
//         console.log("Arguments shoud be number only");
//     }
//     else{
//         console.log("All arguments is numbers");
        
//     }

// }

// test('a','e',1,2);

// test(4,3,1,2);




// function test2(num1 ,num2){
//      if(arguments.length>2){
//         console.log("arguments is only two numbers");
//      }
//      else{
//         console.log("done");
//      }



// }
// test2(5,6,7)

// test2(5,6)



function test3(){
    var arr=[]
    for(var i=0 ;i<3;i++){
        arr.push(function(){
            console.log(i);
        }())
    }


}
test3();