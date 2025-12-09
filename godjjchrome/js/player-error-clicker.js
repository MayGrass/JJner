// 檢測Twitch播放器錯誤按鈕並自動按下

// 檢查間隔 (毫秒)
const CHECK_INTERVAL = 5000;
let intervalId = null;

function clickPlayerErrorButton() {
    try {
        // 直接鎖定重整符號的向量圖
        const targetPath = document.querySelector('path[d="M20 5.999A9.985 9.985 0 0 0 12 2C6.477 2 2 6.477 2 12h2a8 8 0 0 1 14.93-4H14v2h8V2h-2v3.999ZM12 20a8 8 0 0 0 8-8h2c0 5.523-4.477 10-10 10a9.985 9.985 0 0 1-8-3.999V22H2v-8h8v2H5.07A7.997 7.997 0 0 0 12 20Z"]');

        // 往父元素持續尋找按鈕並點擊
        if (targetPath) {
            let currentElement = targetPath;
            while (currentElement && currentElement.tagName.toLowerCase() !== 'button') {
                currentElement = currentElement.parentElement;
                if (currentElement.tagName.toLowerCase() === 'button') {
                    currentElement.click();
                    console.log('clicked player error button!, Time: ' + new Date());
                    break;
                }
                if (!currentElement) break; // 防止無限迴圈，到最上層時跳出
            }
        }
    } catch (err) {
        console.error('Error clicking player error button:', err);
    }
}

// 初始化播放器錯誤檢測
function initializePlayerErrorDetection() {
    // 清除之前的定時器
    if (intervalId) {
        clearInterval(intervalId);
    }
    // 定期檢查
    intervalId = setInterval(clickPlayerErrorButton, CHECK_INTERVAL);
    console.log('Player error detection initialized!');
}

initializePlayerErrorDetection();
