/**
 * I want to explore what zone.js is
 */
 
// zone.js
// execution context

// setTimeout, setInterval, fetch, Event
import 'zone.js';

console.log(Zone.current.name);


// try to connect an hook that will jump when the setTimeout returns
const angularRoom = Zone.current.fork({
	name: 'angular',
	onHasTask: () => {
		console.log('trigger cd')
	}
});

angularRoom.run(() => {
	setTimeout(() => {
		console.log('timer is now running');
	}, 1000)
})