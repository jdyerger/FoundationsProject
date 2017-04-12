function addition(x , y, z){
    var result = x * y - z;
    return result;
};

console.log(addition(1,2,3));

function sentence(name){
    return "Hello," + " " + name + "!";
};
console.log(sentence("Jennifer"));

var name = "brett"
var greeting = "Hello";

console.log(greeting + " " + name);


for(i = 0; i <= 15; i++){
	console.log(i);
}

var ray =["sunshine", "Sting", "Steve Erwin"];

console.log(ray[0], ray[1]);

ray[3]= "Charles";

console.log(ray[3]);

console.log(ray.length);

for(i=0; i< ray.length; i++){
  console.log(ray[i]);
}

var beer ={


};

beer.hops = "cascade";
beer.color = "gold";

console.log(beer.hops);


var name = "Briana";

function people(name){
    var greeting = "hello";
    return greeting + " " + name;
};

console.log(greeting);
