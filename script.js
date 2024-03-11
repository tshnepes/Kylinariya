//кнопки
const breakfastButton = document.createElement('button');
breakfastButton.textContent = 'Завтрак';
document.body.append(breakfastButton);

const lunchButton = document.createElement('button');
lunchButton.textContent = 'Обед';
document.body.append(lunchButton);

const dinnerButton = document.createElement('button');
dinnerButton.textContent = 'Ужин';
document.body.append(dinnerButton);

// клики
breakfastButton.addEventListener('click', () => {
  // Действие при клике на кнопку "Завтрак"
  console.log('проверка"');
});

lunchButton.addEventListener('click', () => {
  // Действие при клике на кнопку "Обед"
  console.log('проверка"');
});

dinnerButton.addEventListener('click', () => {
  // Действие при клике на кнопку "Ужин"
  console.log('проверка"');
});
