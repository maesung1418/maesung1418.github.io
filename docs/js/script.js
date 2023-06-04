var mainEl = document.querySelector("#main");

getPosts().then(data => displayPosts(data));

async function getPosts() {
	result = [];

	let i = 1;
	while (true) {
		data = null;
        await fetch("./posts/" + i + ".json")
            .then(response => response.json())
            .then(_data => data = _data)
            .catch(e => {console.log(e)});

        if (data == null) break;
		i++;
        //
		pst = new post(document.createElement("div"), data);
		result.push(pst);
	}
	console.log("^^ 100% intended ^^");
	return result;
}

escapeSeqChar = "#";
escapeSeqDict = {
    "n": "<br>"
}
function escapeSeqFormat(txt) {
    Object.keys(escapeSeqDict).forEach(key => {
        var target = escapeSeqChar + key;
        txt = txt.replaceAll(target, escapeSeqDict[key]);
    })
    return txt;
}
function displayPosts(posts) {
    for (let i = posts.length - 1; i >= 0; i--) {
        mainEl.appendChild(posts[i].cardify().element);
    }
}