function s(ele) {
  return document.querySelector(ele);
}
let sec = s("#sec");
let min = s("#min");
let hour = s("#hour");
setInterval(clockRotaing, 500);

function clockRotaing() {
  let date = new Date();
  let getS = (date.getSeconds() * 360) / 60;
  let getM = (date.getMinutes() * 360) / 60 + getS / 60;
  let getH = (date.getHours() * 360) / 12 + getM / 12;

  sec.style.transform = "rotate(" + getS + "deg)";
  min.style.transform = "rotate(" + getM + "deg)";
  hour.style.transform = "rotate(" + getH + "deg)";
}
let clockContainer = s(".clock_container")
for (let i = 1; i <= 60; i++) {
  let lineCase = document.createElement('div');
  lineCase.setAttribute('style', 'width:100%; height:100%; position: absolute; /*background: rgba(20, 200, 50, 0.02)*/')
  lineCase.style.transform = "rotate(" + i * 6 + "deg)";
  let line = document.createElement('div');
  line.setAttribute('style', 'width:1px; height:8px; position:absolute; left:50%; margin-top:8px; transform: translate(-50%, -50%); background:black');

  let number = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60];
  number.map(function(val) {
    if (i === val) {
      line.style.background = 'red';
      line.style.width = '2px'
    }
    else
    {
      line.style.background = 'black';
    }
  })
  lineCase.appendChild(line);
  clockContainer.appendChild(lineCase);
}