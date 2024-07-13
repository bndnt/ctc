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
