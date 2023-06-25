escapeSeqChar = "#";
escapeSeqDict = {
    "n": "<br>",
    "dn": "<br><br>",
    "q": "\"",
    "CS": "<div class=\"codespace\">",
    "ED": "</div>",
    "t": "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp"
}
function escapeSeqFormat(txt) {
    Object.keys(escapeSeqDict).forEach(key => {
        var target = escapeSeqChar + key;
        txt = txt.replaceAll(target, escapeSeqDict[key]);
    })
    return txt;
}


function format(txt) {
    Object.keys(escapeSeqDict).forEach(key => {
        var target = escapeSeqDict[key];
        txt = txt.replaceAll(target, escapeSeqChar + key);
    })
    return txt;
}