const EventEmitter=require('events');
const ad=new EventEmitter()

ad.on('greet',(name)=>{
    console.log(`Hello there ${name}`)
})
ad.on('exit',(num)=>{
    console.log(`thank you for visit ${num}`)
})
ad.emit('greet','Utkarsh')
ad.emit('exit',100)