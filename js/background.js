chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
        if (request.active) {
            document.dir = "rtl";
            sendResponse({result: "./images/power.png"});
        } else {
            document.dir = "ltr";
            sendResponse({result: "./images/power-on.png"});
        }
    }
);
