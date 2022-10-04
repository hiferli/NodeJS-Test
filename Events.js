const EventEmitter = require('events');

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();
myEmitter.on('EventHappening', () => {
  console.log('This event is running! It runs when the emitter is emitted');
});
myEmitter.emit('event');

console.log("Hello World")
myEmitter.emit('EventHappening');
console.log('Hello World Again')