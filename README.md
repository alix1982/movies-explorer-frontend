# movies-explorer-frontend

1. Фронтенд для приложения **Movie** со страницами лендинга (результаты обучения в Я.Практикум) и фильмотекой (при регистрации).

2. Реализована семантическая верстка и стилизация по БЭМ, регистрация и вход пользователей по токену, реализация функционала подсчета (добавления и удаления) лайков и сохранение понравившихся фильмов в индивидуальную фильмотеку, форма редактирования профиля, открытие(закрытие) попапов, применение хуков (использование стейт переменных, эффектов, навигации и контекста), в том числе пользовательских, работа с несколькими файлами js. Сохранение данных в  localStorage и на сервер в базе данных MangoDB, валидация данных, использование роутинга.

3. Необходимо добавить проверку почту, возможность добавлять аватар.
 
 + [Ссылка на проект в gitHub](https://github.com/alix1982/movies-explorer-frontend)

## Запуск фронтенда 
*при запуске фронтенда без серверной части работает только лендинг, доступный без регистрации, фильмотека не доступна*
### Для запуска удаленно:
- задать адрес обращения приложения к серверу (задать переменной `MAIN_URL` нужный адрес сервера в компоненте `utils/MainApi.js` (строка 1-2)),
- залить проект на облачный сервер (для копирования фронтенд части в компилированном виде использовать `npm run deploy`, предварительно в `package.json` настроить скрипт `deploy`, изменив в нем имя облачного сервера (изменить `movie@130.193.51.14`)),
- установить зависимости (npm i),
- оставить комментарии в GitHub по совершенствованию проекта.

### Для запуска проекта локально:
- клонировать проект c gitHub,
- задать адрес обращения приложения к локальному серверу (задать переменной `MAIN_URL` значение `http://localhost:3001` в компоненте `utils/MainApi.js` (строка 1-2)),
- установить зависимости (npm i),
- запустить приложение:
  - `npm run start` — запускает приложение.
