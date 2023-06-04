class post {
	constructor(el, jsn) {
		this.element = el;
		this.json = jsn;
	}
	cardify(post) { //yeah its illegal word
		var el = this.element;
		el.setAttribute("class", "post");

        var fl = document.createElement("h1");
        fl.textContent = this.json.content[0];
        fl.setAttribute("class", "firstLetter");
        el.appendChild(fl);

        var preview = document.createElement("span");
        preview.textContent = escapeSeqFormat(this.json.content.slice(1, 50)) + " ····";
        preview.setAttribute("class", "postPreview");
        el.appendChild(preview);

        var date = document.createElement("p");
        date.textContent = this.json.date;
        date.setAttribute("class", "postDate");
        el.appendChild(date);

        el.addEventListener("click", () => {
        	location.href = "./viewPost.html?post=1";
        })
		return this;
	}
}