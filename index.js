
/*
var possitve,sum;
possitve=prompt(parseInt("enter your positive number"));
sum=0;
    for(i=0; i<=possitve; i++){
        sum=sum+i;
    }
    console.log(sum);
    */
   var a=parseInt(prompt("loop"));
        for(i=0; i<=a; i++){
            var value1=parseInt(prompt("enter the value"));
            var value2=parseInt(prompt("enter the value"));
            var value3=parseInt(prompt("enter the value"));
                var sum=0;
            if(value1>=0 && value2>=0 && value3>=0){
                sum=value1+value2+value3;
                console.log(sum);
            }
            else{
                console.log("this negative number");
            }
        }