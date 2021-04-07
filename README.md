# yoFio-Challenge

## Formulario realizado en React Natice CLI

- Para instalar el proyecto: npm install
- Para correr el proyecto: npx react-native run-android
- APK : /dist

#### Comentarios
- Al submitear no se esta enviando la foto debido a que el servidor responde con:
{
    "code": 605,
    "message": "photo in body should match '^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$'"
}
revisé la data que se envia comprobando que cumple con ese regex pero de todas maneras me respondia ese error.
