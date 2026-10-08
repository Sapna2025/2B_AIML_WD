//PERFORM CRUD OPERATIONS ON FILES fs MODULE-
const fs=require('fs')
fs.writeFile("std.txt","Name : Sapna",(err)=>{
    if(err){
        console.log(err)
    }
    else{
        console.log("file created")
    }
})
fs.readFile('std.txt','utf8',(err,data)=>{
    if(err){
    console.log(err)
    }
    else{
        console.log(data)
    }
})
fs.appendFile('std.txt','sapna saini',(err)=>{
    if(err){
        console.log(err)
    }
    else{
        console.log("updated file")
    }
})



// C:create   writeFile('filename','data',callback())
// R:Read     readfile('filename',utf8->encoded,callback())
// U:Update   appendfile('filename',data_update',callback())
// D:Delete   unlink('filename',callback())


