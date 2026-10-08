//Simulate DOM-like event handling in node.js using events
const EventEmitter = require('events');
const button = new EventEmitter();

button.on('click', (name) => {
    console.log(`Button clicked by ${name}!`);
});
button.on('hover', () => {
    console.log(`Button hovered!`);
});

button.emit('click', 'Sapna');
button.emit('hover');