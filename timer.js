let timeWidget;
const seconds = 1000; // 1 second = 1000 milliseconds
const minute = seconds * 60;
const hour = minute * 60;
const offsetM = -(new Date().getTimezoneOffset());
const offsetH = offsetM / 60;
const offsetSign = offsetM >= 0 ? '+' : '-';

function init_js() {
  timeWidget = document.getElementById("js_timer");
  update_time();
  setInterval(update_time, 1000);
  console.log(offsetH, offsetM);
}

function update_time() {
  let s = Date.now() / seconds;
  let m = s / 60;
  const h = String(Math.round(m / 60 + offsetH) % 24).padStart(2, "0");
  
  m = String(Math.round(m + offsetM) % 60).padStart(2, "0");
  s = String(Math.round(s) % 60).padStart(2, "0");
  
  const offsetMStr = String(offsetM % 60).padStart(2, "0");
  const offsetHStr = String(offsetH).padStart(2, "0");
  
  timeWidget.innerText = `${h}:${m}:${s} (GMT ${offsetSign}${offsetHStr}:${offsetMStr})`;
}