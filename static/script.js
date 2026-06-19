// Ждем полную загрузку DOM, чтобы избежать ошибок
document.addEventListener('DOMContentLoaded', () => {

    // Получаем элементы интерфейса
    const toggleBtn = document.getElementById('themeToggle');
    const themeIcon = document.getElementById('themeIcon');
    const themeText = document.getElementById('themeText');
    const htmlElement = document.documentElement;

    // Функция смены темы
    const switchTheme = () => {
        // Проверяем текущую тему на элементе <html>
        const currentTheme = htmlElement.getAttribute('data-theme');
        let newTheme = 'light';

        if (currentTheme === 'light') {
            newTheme = 'dark';
            // Прокачиваем UX: меняем иконку и текст на противоположные
            themeIcon.textContent = '☀️';
            themeText.textContent = 'Светлая';
        } else {
            newTheme = 'light';
            themeIcon.textContent = '🌙';
            themeText.textContent = 'Темная';
        }

        // Применяем новую тему (CSS моментально среагирует на это изменение)
        htmlElement.setAttribute('data-theme', newTheme);

        // Опционально: сохраняем выбор в браузер
        localStorage.setItem('theme', newTheme);
    };

    // Вешаем прослушиватель событий на клик
    if (toggleBtn) {
        toggleBtn.addEventListener('click', switchTheme);
    }

    // Автоопределение сохраненной темы при загрузке страницы
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        htmlElement.setAttribute('data-theme', savedTheme);
        if (savedTheme === 'dark' && themeIcon && themeText) {
            themeIcon.textContent = '☀️';
            themeText.textContent = 'Светлая';
        }
    }
});