const powerIcon = document.querySelector('.power-icon');

powerIcon.addEventListener('click', async () => {
    let [tab] = await chrome.tabs.query({active: true, currentWindow: true});
    chrome.scripting.executeScript({
        target: {tabId: tab.id},
        function: () => {
            if (document.dir === 'rtl') {
                document.dir = "ltr"
            } else {
                document.dir = "rtl"
            }
        },
    });


});
