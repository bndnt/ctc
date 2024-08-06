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

//////////

document.addEventListener('DOMContentLoaded', function () {
  // Функция для проверки, находится ли элемент в области видимости
  function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  // Функция для добавления класса с анимацией
  function handleScroll() {
    const items = document.querySelectorAll('.item.bear');
    items.forEach(item => {
      if (isInViewport(item)) {
        item.classList.add('animate');
      }
    });
  }

  // Обработчик события прокрутки
  window.addEventListener('scroll', handleScroll);

  // Проверяем при загрузке, чтобы анимация запускалась, если элемент уже в области видимости
  handleScroll();
});

document
  .querySelector('#mobile_menu_toggle')
  .addEventListener('click', function (e) {
    e.preventDefault();
    this.classList.toggle('active');
    document.querySelector('.mobile__menu').classList.toggle('active');
    document.querySelector('.bg-popup').classList.toggle('active');

    document.querySelector('.top__hamburger').classList.toggle('active');
    document.body.classList.toggle('hidden');
  });

document.querySelector('.js-vote__btn').addEventListener('click', function (e) {
  e.preventDefault();
  document.querySelector('.js-send').classList.toggle('active');
  document.body.classList.toggle('hidden');
});

document.querySelectorAll('a[href^="#"').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();

    let href = this.getAttribute('href').substring(1);

    const scrollTarget = document.getElementById(href);

    const topOffset = document.querySelector('.js-hero__btn').offsetHeight;
    // const topOffset = 0; // если не нужен отступ сверху
    const elementPosition = scrollTarget.getBoundingClientRect().top;
    const offsetPosition = elementPosition - topOffset;

    window.scrollBy({
      top: offsetPosition,
      behavior: 'smooth',
    });
  });
});
