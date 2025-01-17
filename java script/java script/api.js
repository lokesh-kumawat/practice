const URL = "http://cat-fact.herokuapp.com/facts";
let factPara = document.querySelector("#fact");
let btn = document.querySelector("#btn");

const getfacts = async () => {
    let response = await fetch(URL);
    console.log(response);
    let data = await response.json();
    // console.log(data[0].text);
    factPara.innerText = data[3].text;
}

btn.addEventListener("click",getfacts);