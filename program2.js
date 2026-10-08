const EventEmitter=require('events');
const ud=new EventEmitter()
ud.on('greet',(name)=>{
    console.log(`Hello ${name}!, How are you `)
})
ud.on('exit',(num)=>{
    console.log(`Thank you for visit ${num}`)
})
ud.emit('greet','Shreya')
ud.emit('exit',120)