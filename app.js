#!/usr/local/bin/node
var port=process.env.PORT||8e3,createError=require("http-errors"),express=require("express"),path=require("path"),logger=require("morgan"),cookieParser=require("cookie-parser"),indexRouter=require("./routes/index"),manageRouter=require("./routes/manage"),scannerRouter=require("./routes/scanner"),pollRouter=require("./routes/serversidePoll"),app=express();app.set("views",path.join(__dirname,"views")),app.set("view engine","ejs"),app.use(express.static(path.join(__dirname,"public"))),app.use("/ScanDocuments",express.static(path.join(__dirname,"../ScanDocuments"))),app.use(logger("dev")),app.use(express.json()),app.use(express.urlencoded({extended:!1})),app.use(cookieParser()),app.use("/",indexRouter),app.use("/manage",manageRouter),app.use("/scanner",scannerRouter),app.use("/poll",pollRouter),app.use((function(req,res,next){next(createError(404))})),app.use((function(err,req,res,next){res.locals.message=err.message,res.locals.error="development"===req.app.get("env")?err:{},res.status(err.status||500),res.render("error")})),process.on("SIGINT",(function(){server.close(),console.log("\n\nShutdown request detected..."),console.log("Bye! Bye!\n\n"),process.exit(0)}));var http=require("http");app.set("port",port);var server=http.createServer(app);server.listen(port,(function(){console.log("\n\n++ Scan Web started on port: "+port),console.log("\nHit CTRL+C to stop the server\n")})),module.exports=app;