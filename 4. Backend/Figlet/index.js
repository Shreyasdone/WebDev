const figlet = require("figlet");

figlet("Shreays", function(err,data) {
    if(err) {
        console.log("Something went Wrong...");
        console.dir(err);
        return;
    }
    console.log(data);    
});