var mainEl = document.querySelector("#main");
posts = getPosts();
for (let i = posts.length - 1; i >= 0; i--) {
	mainEl.appendChild(posts[i].cardify().element);
}

function getPosts() {
	posts = [];

	let i = 1;
	while (true) {
		data = 0;
		fetch("./posts/" + i + ".json")
		  .then((response) => response.json())
		  .then((_data) => data = _data);
		if (data == 0) break;
		pst = new post(document.createElement("div"), data);
		posts.push(pst);
	}

	return posts;

}
