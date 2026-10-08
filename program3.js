const program3=require('http')
const createServer=program3.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type':'text/html'})
    res.end('<h1>Hello Sec B FSD Workshop</h1>')
})
createServer.listen(4000,()=>{
    console.log('Server is running on port 4000')
})