// 拖拽功能
document.querySelectorAll('.draggable').forEach(item => {
  item.addEventListener('mousedown', dragMouseDown);
});

function dragMouseDown(e) {
  e.preventDefault();
  let elem = e.target.closest('.draggable');
  let shiftX = e.clientX - elem.getBoundingClientRect().left;
  let shiftY = e.clientY - elem.getBoundingClientRect().top;

  function onMouseMove(e) {
    elem.style.left = e.pageX - shiftX + 'px';
    elem.style.top = e.pageY - shiftY + 'px';
  }

  document.addEventListener('mousemove', onMouseMove);

  document.addEventListener('mouseup', () => {
    document.removeEventListener('mousemove', onMouseMove);
  }, { once: true });
}

// // p5.js 部分
// function setup() {
//   let canvas = createCanvas(400, 200);
//   canvas.parent("eyes");
//   colorMode(HSB);
//   angleMode(DEGREES);
// }

// function draw() {
//   background(255);

//   let leftX = 150;
//   let leftY = 100;
//   let leftAngle = atan2(mouseY - leftY, mouseX - leftX);

//   push();
//   translate(leftX, leftY);
//   fill(255);
//   ellipse(0, 0, 50, 50);
//   rotate(leftAngle);
//   fill(0);
//   ellipse(12.5, 0, 25, 25);
//   pop();

//   let rightX = 250;
//   let rightY = 100;
//   let rightAngle = atan2(mouseY - rightY, mouseX - rightX);

//   push();
//   translate(rightX, rightY);
//   fill(255);
//   ellipse(0, 0, 50, 50);
//   rotate(rightAngle);
//   fill(0);
//   ellipse(12.5, 0, 25, 25);
//   pop();
// }
