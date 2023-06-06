class post {
	constructor(el, jsn, id) {
		this.element = el;
		this.json = jsn;
        this.id = id;
	}
	cardify(post) { //yeah its illegal word
		var el = this.element;
		el.setAttribute("class", "post");
        resistAttrScale(el, {
            "height": [100, 0.4]
        })

        var fl = document.createElement("h1"); fl.textContent =
        this.json.content[0];
        fl.classList.add("firstLetter"); 
        resistAttrScale(fl, {
            "fontSize": [25, 0.5],
        })
        el.appendChild(fl);

        var preview = document.createElement("span");
        preview.innerHTML = escapeSeqFormat(this.json.content.slice(1, 50)) + " ····";
        preview.classList.add("postPreview");
        resistAttrScale(preview, {
            "fontSize": [10, 0.1]
        })
        el.appendChild(preview);

        var date = document.createElement("p");
        date.textContent = this.json.date;
        date.classList.add("postDate");
        resistAttrScale(date, {
            "fontSize": [10, 0.2]
        })
        el.appendChild(date);

        el.addEventListener("click", () => {
        	location.href = "./viewPost.html?post="+id;
        })
		return this;
	}
}