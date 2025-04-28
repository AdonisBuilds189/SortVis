async function stalinSort() {
  console.log('In stalinSort()');
  const ele = document.querySelectorAll('.bar');
  let max = parseInt(ele[0].style.height);
  ele[0].style.background = 'green';

  for (let i = 1; i < ele.length; i++) {
    ele[i].style.background = 'blue';
    await waitforme(delay);

    if (parseInt(ele[i].style.height) >= max) {
      max = parseInt(ele[i].style.height);
      ele[i].style.background = 'green';
    } else {
      ele[i].style.background = 'red';
      await waitforme(delay);
      ele[i].style.display = 'none'; // Remove the bar visually
    }
  }
}

const stalinSortBtn = document.querySelector('.stalinSort');
stalinSortBtn.addEventListener('click', async function () {
  disableSortingBtn();
  disableSizeSlider();
  disableNewArrayBtn();

  await stalinSort();
  enableSortingBtn();
  enableSizeSlider();
  enableNewArrayBtn();
});
