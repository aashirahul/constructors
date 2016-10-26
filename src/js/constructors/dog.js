/*function Dog () {
/}*/

var Dog = function(options){
	options = options || {};
	this.color= options.color;
	if(options.hungry== undefined) {
		this.hungry = true;
	} else {
		this.hungry = options.hungry;
	}
	this.status= "normal";

}


export { Dog };
