const File=require("../Model/fileUpload");

//localfileupload ->  handler function

exports.localFileUpload=async (req,res)=>{
    try{

        //req.file.file    for fetch the file
        //for fileuploadtion need move()
        const file=req.files.file;
        console.log(file);
        //__dir ->  tell the current working directory(folder)

        //this is server 's path to store data in server
        let path= __divname + "/files/" + Date.now();
        console.log("PATH -->",path);

        file.mv(path,(err)=>{
            console.log(err);
        });
        res.json({
            success:true,
            message:'Local file uploaded Successfully',
        })

    }
    catch(error){
        console.log(error);

    }
}
