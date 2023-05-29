var mainEl = document.querySelector("#main");
posts = getPosts();
for (let i = posts.length - 1; i >= 0; i--) {
	mainEl.appendChild(posts[i].cardify().element);
}

function getPosts() {
	posts = [];

	let i = 1;
	while (true) {
		data = null;
		fetch("./posts/" + i + ".json")
		  .then((response) => response.json())
		  .then((data) => {console.log(data); data = data;});
		if (data == null) break;
	}
	jsn = {};
	posts.push(new post(document.createElement("a"), jsn));
	posts.push(new post(document.createElement("b"), jsn));


	return posts;

}
