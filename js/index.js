const powerIcon = document.querySelector('.power-icon');

powerIcon.addEventListener('click', function () {
    if (localStorage.getItem('medium_rtl_active') == true) {
        runChrome({active: false});
    } else {
        runChrome({active: true});
    }
});

function runChrome(data) {
    chrome.runtime.sendMessage(data, function(response) {
        console.log(response);
    });
}
