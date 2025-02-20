/* // ایجاد یک دکمه برای فعال و غیرفعال کردن راست‌چین کردن متن
let button = document.createElement('button');
button.innerText = 'Toggle RTL';
button.style.position = 'fixed';
button.style.top = '10px';
button.style.left = '10px';
button.style.zIndex = '1000';
button.style.padding = '10px';
button.style.backgroundColor = 'blue';
button.style.color = 'white';
button.style.border = 'none';
button.style.cursor = 'pointer';
document.body.appendChild(button);

let isRTL = false;

function toggleRTL() {
    if (isRTL) {
        document.body.style.direction = 'ltr';
        document.body.style.textAlign = 'left';
        let codeBlocks = document.querySelectorAll('pre, code');
        codeBlocks.forEach(function(block) {
            block.style.direction = 'ltr';
            block.style.textAlign = 'left';
        });
    } else {
        document.body.style.direction = 'rtl';
        document.body.style.textAlign = 'right';
        let codeBlocks = document.querySelectorAll('pre, code');
        codeBlocks.forEach(function(block) {
            block.style.direction = 'ltr';
            block.style.textAlign = 'left';
        });
    }
    isRTL = !isRTL;
}

button.addEventListener('click', toggleRTL);
 */