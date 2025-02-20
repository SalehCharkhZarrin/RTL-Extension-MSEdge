let isRTL = false;

function toggleRTL(tab) {
    isRTL = !isRTL;
    chrome.scripting.executeScript({
        target: {tabId: tab.id},
        func: (isRTL) => {
            document.body.style.direction = isRTL ? 'rtl' : 'ltr';
            document.body.style.textAlign = isRTL ? 'right' : 'left';
            const allElements = document.querySelectorAll('*');
            allElements.forEach(element => {
                if (element.tagName !== 'PRE' && element.tagName !== 'CODE') {
                    element.style.direction = isRTL ? 'rtl' : 'ltr';
                    element.style.textAlign = isRTL ? 'right' : 'left';
                }
            });

            // Specifically handle pre and code elements
            const codeBlocks = document.querySelectorAll('pre, code');
            codeBlocks.forEach(block => {
                block.style.direction = 'ltr';
                block.style.textAlign = 'left';
            });
        },
        args: [isRTL]
    });
}

chrome.action.onClicked.addListener((tab) => {
    toggleRTL(tab);
});

chrome.commands.onCommand.addListener((command) => {
    if (command === "toggle-rtl") {
        chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
            toggleRTL(tabs[0]);
        });
    }
});
