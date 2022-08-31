# Поиск по репозиториям Github

Данный проект создан с использованием 
[Create React App (TypeScript)](https://github.com/facebook/create-react-app), [TailwinCSS](https://tailwindcss.com/docs/installation) и [Redux Toolkit](https://redux-toolkit.js.org/introduction/getting-started)

## Кастомные хуки

Так как в проекте используются запросы к серверам github.api, то для оптимизации этих запросов написан хук ***debounced***, у которого задержка стоит в 300мс.
И для упрощения работы с RTK, написан хук ***useAppSelector***, цель которого прокидывать интерфейсы useSelector.
