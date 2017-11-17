//imports your code to be tested
const Stock = require("./stock.js");
const Portfolio = require("./portfolio.js");

//Imports my code to run your examples against the economic forcast
const Forecast = require("./forcast");

function main(){

    //create all of your stocks
    let s1 = new Stock("Microsoft Corp","MSFT","NASDAQ",83.94,100);
    let s2 = new Stock("Ubisoft Entertainment","UBSFF","OTC",82.40,100);
    let s3 = new Stock("McDonald's Corp","MCD","NYSE",168.48,100);
    let s4 = new Stock("Netflix","NFLX","NASDAQ",193.11,85);

    //build your Portfolio
    let myport = new Portfolio();
    myport.add(s1);
    myport.add(s2);
    myport.add(s3);
    myport.add(s4);

    //generate a test forcast
    let economicStorm = new Forecast(myport);
    console.log(economicStorm);

    //build prediction
}

main();
