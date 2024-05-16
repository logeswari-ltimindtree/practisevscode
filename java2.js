function fetchData() {

 
    return new Promise((resolve, reject ) => {
      setTimeout(() => {
       resolve("hi there2");
      }, 5000);
    });
 
    
  }

 
  fetchData().then(data => {console.log(data);})
  .catch(error => {
    console.error(error);
  });
 
  
  console.log("Fetching data1");
  fetchData();
  console.log("Fetching data2");