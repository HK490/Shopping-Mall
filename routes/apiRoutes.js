const scarfData = require("../data/scarf-data.js");

module.exports = function(app) {
  app.get("/api/scarfData", function(req, res) {
    res.json(scarfData);
  });

//   app.post("/api/scarfData", function(req, res) {
//     for (let i = 0; i < scarfData[i].length; i++) {
//         console.log(scarfData[1]);
//         res.json(scarfData)
//     }
//   });


};
