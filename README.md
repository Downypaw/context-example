[UI Library - Mantine](https://mantine.dev/core/checkbox/)

Условия:

1. Если пользователь отметил чекбокс в выпадашке (_Personal Information_),
   то в этой карточке должны появится табы (_Adress, Finance_), если пользователь снял галку
   с чекбока, то они пропадают;
2. В табе _Settings_ пользователь может выбрать цвет карточки (`background-color`).

При нажатии на кнопку _"Update Users"_ с сервера приходит массив пользователей той же длины,
но один пользователь меняется.

Структуру данных можно изучить в `src/mocks/data/usersData.ts`