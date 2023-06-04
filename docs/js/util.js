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