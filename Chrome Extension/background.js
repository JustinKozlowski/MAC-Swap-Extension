chrome.browserAction.onClicked.addListener(function(tab) { 
    /*var selection = window.getSelection();
    var container = selection.anchorNode;
    if(container != null){
        alert("clicked");
        container.nodeValue = changeMAC(container.nodeValue);
    }*/
        chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
		if (tab){
    			chrome.tabs.sendMessage(tabs[0].id, {greeting: "hello"}, function(response) {
    		});
		}

            /*chrome.tabs.executeScript( {
                code: "window.getSelection();"
                }, function(selection) {
                        var container = selection[0].anchorNode;
                        if(container != null){
                            alert("clicked");
                            container.nodeValue = changeMAC(container.nodeValue);
                        }
            });*/
    });
});

/*chrome.tabs.query({ active: true, lastFocusedWindow: true }, function (tabs) {
    tabs.executeScript( {
        code: "window.getSelection().toString();"
        }, function(selection) {
                var container = selection.anchorNode;
                if(container != null){
                alert("clicked");
                container.nodeValue = changeMAC(container.nodeValue);
            }
        });
});*/

/*function changeMAC(myString){
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
        out.concat(letter);
    }
    return out;
}*/