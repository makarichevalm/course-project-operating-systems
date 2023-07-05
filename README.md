# to-do-list-project

## Окружение

-   node v.16.13.1

## Установка

Установка приложения осуществляется с помощью следующих команд.

```sh
cd application_folder
npm install
```

## Переменные окружения

Переменные окружения добавляются в корень приложения в файл .env
_Пример обьявления переменной окружения_

```
REACT_SOME_ENV_VALUE = VALUE
```

Обязательные переменные окружения:

```
REACT_APP_MAP_LINK
# Ссылка на геосервер для отображения карт
Например: https://geolocation-server-addr/tile
```

## Используемые скрипты

В директории проекта вы можете запустить:

### `npm start`

Запуск приложения в режиме разработки
Откройте [http://localhost:3000](http://localhost:3000) что бы увидить приложение в браузере.

Страница будет перезагружаться при изменении кода.

### `npm test`

Запуск тестов в интерактивном режиме

### `npm eslint`

Запуск проверки кодстайла утилитой eslint

### `npm run checkPrettier`

Запуск проверки кодстайла утилитой Prettier

### `npm run runPrettier`

Запуск исправления кодстайла утилитой Prettier

### `npm run build`

Запуск сборки приложения в продакшен версию

## CI

За CI приложения отвечает файл `.gitlab-ci.yml`
CI состоит из двух этапов:

-   Проверка код стайла, команды: `npm run checkPrettier && npm run eslint`
-   Проверка тестов, команды: `npm run test -- --coverage --watchAll=false --reporters=default --env=jest-environment-jsdom-sixteen`

## Стек технологий

`Все зависимости должны быть свободно распространяемы или иметь аттестацию в соответсвующих органах`

-   Dependencies
    -- "@reduxjs/toolkit": "^1.7.1",  
    -- "@testing-library/jest-dom": "^5.16.1",  
    -- "@testing-library/react": "^12.1.2",  
    -- "@testing-library/user-event": "^13.5.0",  
    -- "@types/jest": "^27.4.0",  
    -- "@types/node": "^17.0.8",  
    -- "@types/react": "^17.0.38",  
    -- "@types/react-dom": "^17.0.11",  
    -- "eslint-plugin-simple-import-sort": "^7.0.0",  
    -- "i18next": "^21.6.6",  
    -- "leaflet": "^1.7.1",  
    -- "react": "^17.0.2",  
    -- "react-dom": "^17.0.2",  
    -- "react-i18next": "^11.15.3",  
    -- "react-redux": "^7.2.6",  
    -- "react-scripts": "5.0.0",  
    -- "redux-saga": "^1.1.3",  
    -- "typescript": "^4.5.4",  
    -- "web-vitals": "^2.1.3"
-   devDependencies
    -- "@types/leaflet": "^1.7.8",  
    -- "@types/webpack-env": "^1.16.3",  
    -- "@typescript-eslint/eslint-plugin": "^5.9.0",  
    -- "@typescript-eslint/parser": "^5.9.0",  
    -- "airbnb": "^0.0.2",  
    -- "eslint": "^8.6.0",  
    -- "eslint-config-airbnb": "^19.0.4",  
    -- "eslint-config-airbnb-typescript": "^16.1.0",  
    -- "eslint-config-prettier": "^8.3.0",  
    -- "eslint-plugin-prettier": "^4.0.0",  
    -- "eslint-plugin-react": "^7.28.0",  
    -- "prettier": "^2.5.1"

**CORS**
Для обхода CORS политики используется HTTP-proxy-middleware конфигурация находится в setupProxy.js

## Соглашения, принятые в проекте

**Файловая структура соответсвует принципу проектирования atomic-design**

**Структура файлов**

-   `api/api.ts`
    Основной файл, отвечающий за взаимодействие с API
-   `hooks/defaulthooks.ts, store/store.ts`
    Основные файлы управления глобальным стейтом приложения
-   `translation/translation.ts, translation/ru.json`
    Основные файлы, отвечающие за интернациализацию приложения

**Atomic design**
Компоненты находятся в директории components

_Разделение компонентов в соответсвии с Atomic Design_

-   `Atoms`
    Базовый блок (кнопки инпуты и т.д.)
-   `Molecules`
    Скомбинированные атомы, например инпут с кнопкой отправки сообщений
-   `Organisms`
    Комбинация молекул в отдельную часть интерфейса (например строка поиска, хедер страницы)
-   `Templates`
    Комбинация организмов макет страницы
-   `Pages`
    Комбинация темплейтов — сама страница

`Импорт модулей осуществляется или "сверху-вниз", или в одной "плоскости".`

Компонент состоит из 4 папок:

-   logic — в случае надобности создается для кастомных хуков, описывается логика работы компонента
-   reducers — при необходимости описывается стор компонента
-   requests — при необходимости описывается сетевая логика компонента
-   UI — сам компонент
