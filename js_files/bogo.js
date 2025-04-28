async function bogoSort() {
  console.log('In bogoSort()');
  const ele = document.querySelectorAll('.bar');
  while (!isSorted(ele)) {
    shuffle(ele);
    await waitforme(delay);
  }
  for (let i = 0; i < ele.length; i++) {
    ele[i].style.background = 'green';
  }
}

function isSorted(ele) {
  for (let i = 0; i < ele.length - 1; i++) {
    if (parseInt(ele[i].style.height) > parseInt(ele[i + 1].style.height)) {
      return false;
    }
  }
  return true;
}

function shuffle(ele) {
  for (let i = ele.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [ele[i].style.height, ele[j].style.height] = [ele[j].style.height, ele[i].style.height];
  }
}

const bogoSortBtn = document.querySelector('.bogoSort');
bogoSortBtn.addEventListener('click', async function () {
  disableSortingBtn();
  disableSizeSlider();
  disableNewArrayBtn();

  await bogoSort();
  enableSortingBtn();
  enableSizeSlider();
  enableNewArrayBtn();
});
