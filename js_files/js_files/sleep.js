async function sleepSort() {
  console.log('In sleepSort()');
  const ele = document.querySelectorAll('.bar');
  const sorted = [];
  const promises = [];
  const scaleFactor = 10; // Reduce delay by scaling down the height

  for (let i = 0; i < ele.length; i++) {
    const height = parseInt(ele[i].style.height);
    promises.push(
      new Promise((resolve) => {
        setTimeout(() => {
          sorted.push(height);
          ele[i].style.background = 'green';
          resolve();
        }, height * scaleFactor); // Scaled-down delay
      })
    );
  }

  await Promise.all(promises);

  for (let i = 0; i < ele.length; i++) {
    ele[i].style.height = `${sorted[i]}px`;
    ele[i].style.background = 'green';
  }
}

const sleepSortBtn = document.querySelector('.sleepSort');
sleepSortBtn.addEventListener('click', async function () {
  disableSortingBtn();
  disableSizeSlider();
  disableNewArrayBtn();

  await sleepSort();
  enableSortingBtn();
  enableSizeSlider();
  enableNewArrayBtn();
});
