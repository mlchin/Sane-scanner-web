const scan_doc_root="/home/pi/ScanDocuments/",scan_resolutions=["75","150","300","600"],scan_modes=["colour","monochrome","lineart"],scan_formats=["pnm","tiff","png","jpeg"],scan_defaults={resolution:"150",mode:"colour",format:"png",filename:""};var validateConfig=function(req,res,next){const scan_selected={resolution:req.body.scanResolution,mode:req.body.scanMode,format:req.body.scanFormat,filename:req.body.filename.trim()};let isValid={valid:!0,message:""};-1===scan_resolutions.indexOf(scan_selected.resolution)&&(console.log("Fail resolution validaton"),isValid={valid:!1,message:"Fail resolution validation"}),-1===scan_modes.indexOf(scan_selected.mode)&&(console.log("Fail scan mode validaton"),isValid={valid:!1,message:"Fail scan mode validaton"}),-1===scan_formats.indexOf(scan_selected.format)&&(console.log("Fail scan format validaton"),isValid={valid:!1,message:"Fail scan format validaton"}),!1===/^[0-9a-zA-Z_][0-9a-zA-Z_-]*$/.test(scan_selected.filename)&&(console.log("Fail filename validaton"),isValid={valid:!1,message:"Fail filename validaton"}),next()},express=require("express"),router=express.Router();router.get("/",(function(req,res,next){console.log("\n++ GET /scanner"),res.render("index",{title:"Scanner Configuration",scan_resolutions:scan_resolutions,scan_modes:scan_modes,scan_formats:scan_formats,scan_checked:scan_defaults})})),router.post("/",validateConfig,(function(req,res,next){console.log("\n++ POST /scanner");const path=require("path"),fs=require("fs"),exec=require("child_process").exec,scan_selected_resolution=req.body.scanResolution,scan_selected_mode=req.body.scanMode.trim(),scan_selected_format=req.body.scanFormat.trim(),scan_selected_filename=req.body.filename.trim(),absFilename=path.join(scan_doc_root,scan_selected_filename+"."+scan_selected_format);var scanimage_cmdline="scanimage --verbose --resolution="+scan_selected_resolution+" --mode="+scan_selected_mode+" --format="+scan_selected_format+" > "+absFilename;scanimage_cmdline=(scanimage_cmdline=scanimage_cmdline.replace("colour","color")).replace("monochrome","gray"),console.log(`++ Commandline: ${scanimage_cmdline}\n`);var message="";exec("scanimage -L",(function(error,stdout,stderr){error&&(message="ERROR: Unknown error in scanimage -L. Scan aborted.",console.log(message),next(new Error(message))),stdout.indexOf("No scanners were identified.")>-1?(message="No scanners detected. Check connection and Power. Scan aborted.",console.log(message),next(new Error(message))):exec(scanimage_cmdline,(function(error,stdout,stderr){error?(fs.existsSync(absFilename)&&exec("rm "+absFilename,(function(error,stdout,stderr){error?(message="ERROR: Unknown error during file deletion.",console.log(message),next(new Error(message))):console.log("pipe file deleted.")})),message=error.toString().trim(),console.log(message),next(error)):(message="++ Scanning successful. Scanimage file created: "+absFilename,console.log(message),res.redirect("/"))}))}))})),module.exports=router;