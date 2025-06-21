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





