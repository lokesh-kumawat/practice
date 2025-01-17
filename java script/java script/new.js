 function getData(dataId){
    return new Promise((resolve, reject) =>{
       setTimeout(()=>{
        console.log("data id:", dataId);
        resolve("success");
       },2000); 
    });
 }

//  async function getAllData(){
//     await getData(1);
//     console.log("getting data2......");
//     await getData(2);
//     console.log("getting data3......");
//     await getData(3);
//  }

// IIFF = iiff is immediately invoked
(async function(){
    console.log("getting data1......");
    await getData(1);
    console.log("getting data2......");
    await getData(2);
    console.log("getting data3......");
    await getData(3);
})();