chrome.browserAction.onClicked.addListener(function(tab) { 
        chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
		if (tab){
    		chrome.tabs.sendMessage(tabs[0].id, {greeting: "hello"});
		}
    });
});
