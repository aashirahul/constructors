/*function Person () {
};*/
var Person = function(options){
	options = options || {};
	if(options.cool== undefined) {
		this.cool=false;
	} else {
		this.cool = options.cool;
	}
}

Person.prototype.pet=function(Dog){
	Dog.status = "happy";
}
Person.prototype.feed=function(Dog){
	if(Dog.hungry==true){
		Dog.hungry=false;
	}
}

export { Person };
