const setChecked = (e) => {
  if (e.parentElement.classList.contains('returned')) {
    e.parentElement.classList.remove('returned');
  }
  e.parentElement.classList.add('checked');
};

const setReturned = (e) => {
  if (e.parentElement.classList.contains('checked')) {
    e.parentElement.classList.remove('checked');
  }
  e.parentElement.classList.add('returned');
};

const addNew = () => {

  const checkBlock = document.createElement('button');
  checkBlock.setAttribute('onclick', 'setChecked(this)');
  checkBlock.innerHTML = '✓';
  checkBlock.classList.add('check');

  const returnBlock = document.createElement('button');
  returnBlock.setAttribute('onclick', 'setReturned(this)');
  returnBlock.innerHTML = 'X';
  returnBlock.classList.add('return');

  const spanEl = document.createElement('span');
  const value = document.querySelector('[name="toDoInput"]').value;
  if (!value) return;
  const ulEl = document.querySelector('#ul');
  const liEl = document.createElement('li');
  liEl.classList.add('li');
  spanEl.innerHTML = value;
  liEl.append(spanEl);
  ul.append(liEl);

  ul.querySelectorAll('.li').forEach((liElement, i) => {
    liElement.append(checkBlock);
    liElement.append(returnBlock);
    liElement.setAttribute('id', i);
  })
}

const selectEl = document.querySelector('#select');
const filter = () => {

  document.querySelectorAll('.li').forEach((liElement) => {
    liElement.classList.contains('hidden') ? liElement.classList.remove('hidden') : '';
  })

  if( selectEl.value === 'nofilter') {
    document.querySelectorAll('.li').forEach((liElement) => {
      liElement.classList.contains('hidden') ? liElement.classList.remove('hidden') : '';
    })
  }
  
  if (selectEl.value === 'none') {
    document.querySelectorAll('.li').forEach((liElement) => {
      if (liElement.classList.contains('checked') | liElement.classList.contains('returned')) {
        liElement.classList.add('hidden');
      }
    })
  }

  if(selectEl.value === 'checked') {
    document.querySelectorAll('.li').forEach((liElement) => {
      if(!liElement.classList.contains('checked')) {
        liElement.classList.add('hidden');
      }
    })
  }
  
  if(selectEl.value === 'returned') {
    document.querySelectorAll('.li').forEach((liElement) => {
      if(!liElement.classList.contains('returned')) {
        liElement.classList.add('hidden');
      }
    })
  }
}
