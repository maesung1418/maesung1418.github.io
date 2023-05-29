class post {
	constructor(el, jsn) {
		this.element = el;
		this.json = jsn;
	}
	cardify(post) { //yeah its illegal word
		this.element.setAttribute("class", "post");
		
		return this;
	}
}