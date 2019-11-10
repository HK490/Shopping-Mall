module.exports=function(app,path){
    app.get("/", function(req,res){
        res.sendFile(path.join(__dirname, "../public/index.html"))
    });

    app.get("/SignedIn", function(req,res){
        res.sendFile(path.join(__dirname, "../public/afterLogin.html"))
    });
};