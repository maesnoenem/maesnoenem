# Mães no ENEM

> Projeto colaborativo para auxiliar mães que irão prestar o Exame Nacional do Ensino Médio ENEM.

## Inicie o projeto localmente

**0 -** instale as dependências básicas

- [NodeJS](https://nodejs.org/en/)
- [GulpJS](http://gulpjs.com/)
- [Bower](https://bower.io/)

**1 -** Clone o projeto e instale as dependências:

```sh
$ git clone https://github.com/maesnoenem/maesnoenem
$ cd maesnoenem/
$ npm install
$ bower install
```
  
**2 -** Inicie o ambiente de desenvolvimento:

```sh
$ gulp build
$ gulp server
```

Go to: [localhost:8080](http://localhost:8080/out)

## Stack

- Task Runner: [Gulp](http://gulpjs.com/)
- HTML Template Engine: [Pug](https://pugjs.org/api/getting-started.html)
- CSS Preprocessor: [Stylus](http://stylus-lang.com/)
- JS Transpiler: [Babel](http://babeljs.io/)
- Package Manager: [Bower](https://bower.io/)
- Webcomponents: [Polymer](https://www.polymer-project.org/1.0/)
- Bundler: [Vulcanize](https://www.npmjs.com/package/gulp-vulcanize)

## Estrutura de Pastas

	.
	├── out/
	├── src/
	|   ├── assets/
	|   |   ├── img/
	|   |   ├── scripts/
	|   |   └── styles/
	|   ├── includes/
	|   ├── layouts/
	|   └── index.pug
	├── .babelrc
	├──  bower.json
	├── .editorconfig
	├── .eslintrc.js
	├── .gitignore
	├── gulpfile.js
	├── package.json
	├── CONTRIBUTING.md
	├── LICENSE.md
	└── README.md

## Tarefas Automatizadas

- `$ gulp build`: Compila, concatena e minifica todos os arquivos.
- `$ gulp serve`: Observa os arquiuvos para construir e iniciar um servidor estático.
- `$ gulp stylint`: Validata Stylus.
- `$ gulp vulcanize`: Concatena um set de Web Components em um arquivo.
- `$ gulp deploy`: Deploy.

## Sobre Contrubuir

Encontre em nossas [issues](https://github.com/maesnoenem/maesnoenem/issues/) os próximos passos do projeto ;)
Quer contribuir? [siga essas recomendações](https://https://github.com/maesnoenem/maesnoenem/issues/blob/master/CONTRIBUTING.md).

## Histórico

Veja [Releases](https://github.com/maesnoenem/maesnoenem/releases) para detalhes de changelog.

## Licença

[MIT License](https://github.com/maesnoenem/maesnoenem/blob/master/license.md) © [Mães no ENEM](https:///maesnoenem/maesnoenem.github.io)
