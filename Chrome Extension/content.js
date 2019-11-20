chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
	if (request.greeting == "hello"){
		myFunc();
        sendResponse({farewell: "goodbye"});
    }
    return Promise.resolve("Dummy response to keep the console quiet");
});

function myFunc() {
	var selection = window.getSelection();
	var container = selection.anchorNode;
	var children = container.children
    if(container != null){
    	for(var j = 0; j < children.length; j++){
    		var type = window.getSelection().anchorNode.childNodes[j].nodeName;
    		if(type == "INPUT" || type == "TAG"){
    			var input = window.getSelection().anchorNode.childNodes[j].value;
    			var newString = changeMAC(input);
    			window.getSelection().anchorNode.childNodes[j].value = newString;
    		}
        }
	}
}

function changeMAC(myString){
    var size = myString.length;
    var out = "";
    for(var i = 0; i < size; i++){
        var letter = myString.charAt(i);
        if(letter == '-'){
            letter = ':';
        }
        else if(letter == ':'){
            letter = '-';
        }
        out = out.concat(letter);
    }
    return out;
}