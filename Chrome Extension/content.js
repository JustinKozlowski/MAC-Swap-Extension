chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    myFunc(request.args);
});

function myFunc(args) {
	var selection = window.getSelection();
	var container = selection.anchorNode;
        if(container != null){
                container.nodeValue = changeMAC(container.nodeValue);
	}
}

function changeMAC(myString){
    var size = myString.length;
    var out = "";
    for(var i = 0; i < size; i++){
        var letter = myString.charAt(i);
        if(letter == '-'){
	    alert("found -");
            letter = ':';
        }
        else if(letter == ':'){
            letter = '-';
        }
        out.concat(letter);
    }
    return out;
}