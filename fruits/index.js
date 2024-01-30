const orange = require("./orange");
const apple = require("./apple");

module.exports = [orange, apple];

const figlet = require("figlet");

figlet("Web Dev Noor!!", function (err, data) {
   if (err) {
      console.log("Something went wrong...");
      console.dir(err);
      return;
   }
   console.log(data);
});
