const btnStart = document.querySelector('.start');
const btnStop = document.querySelector('.stop');
const btnReset = document.querySelector('.reset');
const hours = document.querySelector('.hours');
const minutes = document.querySelector('.minutes');
const seconds = document.querySelector('.seconds');
const milliseconds = document.querySelector('.milliseconds');

let timer = false
let interval

function updateTime() {
    let ms = parseInt(milliseconds.textContent)
    let sec = parseInt(seconds.textContent)
    let min = parseInt(minutes.textContent)
    let hr = parseInt(hours.textContent)

    ms++

    if(ms > 99){
        ms = 0
        sec++
        if(sec > 59){
            sec = 0
            min++
            if(min > 59){
                min = 0
                hr++
            }
        }
    }

    milliseconds.textContent = String(ms).padStart(2, '0')
    seconds.textContent = String(sec).padStart(2, '0')
    minutes.textContent = String(min).padStart(2, '0')
    hours.textContent = String(hr).padStart(2, '0')
}

function startTimer() {
    if(!timer) {
        timer = true;
        interval = setInterval(updateTime, 10)
    }
}

function stopTimer() {
    if(timer){
        timer = false
        clearInterval(interval)
    }
    if(interval > 0){
        btnStart.textContent = 'Продолжить'
    }
}

function resetTimer() {
    stopTimer()
    milliseconds.textContent = '00'
    seconds.textContent = '00'
    minutes.textContent = '00'
    hours.textContent = '00'
    btnStart.textContent = 'Старт'
}

btnStart.addEventListener('click', startTimer)
btnStop.addEventListener('click', stopTimer)
btnReset.addEventListener('click', resetTimer)
