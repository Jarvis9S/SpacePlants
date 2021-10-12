const Plant = require("./plant.js");

const fumi = new Plant({
  collectdate: new Date(),
  nickname: "Fumi",
});
const netta = new Plant({
  collectdate: new Date(),
  nickname: "Netta",
});
const mimar = new Plant();

setTimeout(() => {
  const gooby = new Plant();
  console.log(gooby);
}, 3000);

console.log(fumi);
console.log(netta);
console.log(mimar);
