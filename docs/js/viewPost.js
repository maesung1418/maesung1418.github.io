var mainEl = document.querySelector("#main");
var params = {};
mainEl.style.background = "whitesmoke";
location.href.split("?").slice(1).forEach((e) => {
    x = e.split("=");
    params[x[0]] = x[1];
})

getPostJson().then(data => displayPost(data));
async function getPostJson() {
    let data;
    await fetch("./posts/" + params.post + ".json")
        .then(response => response.json())
        .then(_data => data = _data)
        .catch(e => {console.log(e)});
    return data;
}

function displayPost(data) {
    console.log(data);
    let header = document.querySelector("header");
    let titleEl = document.createElement("h1");
    titleEl.textContent = data.title;
    titleEl.style.fontSize = "20px";
    titleEl.style.padding = "0 20px";
    titleEl.style["-webkit-text-fill-color"] = "white";
    header.appendChild(titleEl);
    let txtEl = document.createElement("div");
    txtEl.innerHTML = escapeSeqFormat(data.content);
    txtEl.style.padding = "10px";
    txtEl.style["word-break"] = "keep-all";
    mainEl.appendChild(txtEl);
}
