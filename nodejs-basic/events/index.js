const { EventEmitter} = require('events');

const myEmitter = new EventEmitter();

const birthdayEventListener = (name) => {
    console.log(`Happy birthday ${name}!`);
}

myEmitter.on('birthday-saying', birthdayEventListener);

myEmitter.emit('birthday-saying', 'Arsi');

/*const { EventEmitter } = require('events');
 
const myEventEmitter = new EventEmitter();
 
const makeCoffee = ({ name }) => {
    console.log(`Kopi ${name} telah dibuat!`);
};
 
myEventEmitter.on('coffee-order', makeCoffee);
 
// Memicu event 'coffee-order' terjadi.
myEventEmitter.emit('coffee-order', { name: 'Tubruk' });*/