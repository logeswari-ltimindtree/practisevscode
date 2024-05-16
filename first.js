function test1(){
 
    console.log('test1');
     
    let myPromise = new Promise(function(myResolve, myReject) {
    setTimeout(function(){ myResolve('asynch call!!'); }, 2000);
    });
    console.log('1');
    console.log('2');
    console.log('3');
    myPromise.then(function(value) {
    console.log(value)
    });
    //basically this call waits for 5 seconds.executeion of this line of code waits for results,but the next line get’s execute immediately,after5 seconds this
    console.log('synnchronouse exection');
    }
     
     
    test1();
     
    //arrow function
    let x = (msg) => {
     
    let name ='Naren';
     
    let cars = ["BMW","Volvo","Mini"];
    for(x in cars){
     
    console.log(cars[x]);
    }
    }
     
     
     
    //braces are not needed if single line is there
    //x('test3');