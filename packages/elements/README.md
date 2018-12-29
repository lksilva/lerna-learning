<h1 style="text-align: center;">
    <a href="https://avecbrasil.com.br">
        <img src="https://avecshop.vteximg.com.br/arquivos/logo_avec.png?v=636796265594970000" alt="Wix Style React" width="300">
    </a>
</h1>

`elements` é uma coleção de componentes [React](https://facebook.github.io/react/).

## Configuração

Testing
-------
Note that `jest` and `babel-jest` dependency versions should match exactly as those of create-react-app in the `webapp` folder.

```bash
$ yarn test
$ yarn storybook
```

Linting
-------
```bash
$ yarn lint
```

Building
--------
```bash
$ yarn build
```


* Use em seu projeto:

```jsx
import React from 'react';
import Button from 'elements/Button';

const App = () => (
    <Button onClick={() => console.log('thanks for clicking :)')}>
      Click me!
    </Button>
);
```

## Requisitos

* Carregar fonts e ícones da CDN
    ```html
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500">
    <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
    ```
