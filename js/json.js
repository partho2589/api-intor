// javaScript object Notation
// JSON
const user = { id:10, name:'rana', job:'developer', }
const stringifile = JSON.stringify(user);
// console.log(user)
// console.log(stringifile);

const shop = {
    name: 'Partho Telecom',
    address: 'Mostofapur bajar',
    profide:15000,
    product:['mobile cach', 'charjar', 'leamp'],
    isExpensive:false
}
const shopStringigile = JSON.stringify(shop);
// console.log(shop)
 const convarten = JSON.parse(shopStringigile)
console.log(shopStringigile)
console.log(convarten)