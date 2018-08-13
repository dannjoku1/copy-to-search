function search(info,tab) {
    chrome.tabs.create({  
      url: "http://www.google.com/search?q=" + info.selectionText,
    });           
  }
  
  chrome.contextMenus.create({
    title: "Let's get it!", 
    id: "some-command",
    contexts:["selection"], 
  });

  chrome.contextMenus.onClicked.addListener(search);