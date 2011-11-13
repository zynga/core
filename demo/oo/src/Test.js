var dog = new oo.Dog;
var cat = new oo.Cat;

for(var i=0; i<12; i++) {
	Math.random() < 0.5 ? dog.run() : cat.run();
}

if (dog.getPosition() > cat.getPosition()) {
	console.debug("Dog wins");
} else {
	console.debug("Cat wins");
}

core.Interface.assert(dog, oo.Feed);
core.Interface.assert(cat, oo.Feed);
