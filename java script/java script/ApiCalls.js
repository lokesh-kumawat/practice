// async function getusers() {
//     try {
//         const response = await fetch( "https://jsonplaceholder.typicode.com/users")
//         const data = await response.json()
//         console.log(data)
//     } catch (error) {
//         console.log('Error', error)
//     }

// }

// getusers()

// fetch("https://jsonplaceholder.typicode.com/users")
// .then((Response) =>{
//     return Response.json()
// })
// .then((data) =>{
//     console.log(data)
// })
// .catch((e) =>{
//     console.log('error',e)
// })



const query = "cartoon";  

const url = `https://youtube-data8.p.rapidapi.com/auto-complete/?q=${encodeURIComponent(query)}&hl=en&gl=US`;

fetch(url, {
    method: 'GET',
    headers: {
        'x-rapidapi-host': 'youtube-data8.p.rapidapi.com',
        'x-rapidapi-key': 'e1b2dcfd9emsha5e4950a5fbc26dp17a3d9jsn80abc3dd671a',
        'Content-Type': 'application/json'
    }
})
.then((response) => {
    return response.json();
})
.then((data) => {
    console.log(data); 
})
.catch((e) => {
    console.log('Error:', e);
});

