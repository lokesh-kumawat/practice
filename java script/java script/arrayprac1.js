// array with prices of 5 item [250,645,300,900,50] . All item have an offer of 10% off in item.
// change the array ti store final price after applying offer.


let item = [250, 645, 300, 900, 50];
let offer;
for (let i = 0; i < item.length; i++) {
    offer = item[i] / 10;
    item[i] = item[i] - offer;
    // console.log(item[i]);
}
console.log("After offer values =", item);