const anchors = document.querySelectorAll('a[href*="#"]');

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    const blockID = anchor.getAttribute('href').substr(1);

    document.getElementById('anchor').scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  });
}

document.querySelectorAll('.list').forEach(list => {
  list.querySelectorAll('input[type="radio"]').forEach(radio => {
    radio.addEventListener('change', event => {
      // Удаляем класс 'active' у всех <li> в данном списке и сбрасываем текст
      list.querySelectorAll('.item').forEach(item => {
        item.classList.remove('active');
        const radioStyleDiv = item.querySelector('.radio__sstyle');
        if (radioStyleDiv) {
          radioStyleDiv.textContent = 'голосовать';
        }
      });

      // Добавляем класс 'active' к родительскому <li> элемента, который содержит выбранный радио-кнопку
      if (event.target.checked) {
        const parentItem = event.target.closest('.item');
        parentItem.classList.add('active');
        const radioStyleDiv = parentItem.querySelector('.radio__sstyle');
        if (radioStyleDiv) {
          radioStyleDiv.textContent = 'Твой выбор';
        }
      }
    });
  });
});
document
  .querySelector('#mobile_menu_toggle')
  .addEventListener('click', function (e) {
    e.preventDefault();
    this.classList.toggle('active');
    document.querySelector('.mobile__menu').classList.toggle('active');

    document.querySelector('.top__hamburger').classList.toggle('active');
    document.body.classList.toggle('hidden');
  });
