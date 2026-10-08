//Visualize the event loop using seTimeout,setimmediate,and process.nextTick
console.log('Start of the event loop visualization');
setTimeout(() => {
    console.log('Inside setTimeout callback');
}, 0);
setImmediate(() => {
    console.log('Inside setImmediate callback');
});
process.nextTick(() => {
    console.log('Inside process.nextTick callback');
});
console.log('End of the event loop visualization');