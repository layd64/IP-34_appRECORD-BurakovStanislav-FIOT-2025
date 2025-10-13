export function setActive(list, target){
  list.forEach(el => el.classList.toggle('is-active', el === target));
}

export function render(outputEl, title, html){
  outputEl.innerHTML = '';
  const wrap = document.createElement('div');
  const body = document.createElement('div');
  body.innerHTML = typeof html === 'string' ? html : '';
  wrap.appendChild(body);
  outputEl.appendChild(wrap);
}


