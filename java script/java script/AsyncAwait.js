function getData(dataid) {
    return new Promise ((resolve,reject) =>{
        setTimeout(()=>{
            console.log("data",dataid);
            resolve(200);
        },2000);
    });
}

async function getAllData(){
    await getData(1);
    await getData(2);
}