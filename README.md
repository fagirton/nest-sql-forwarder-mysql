<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="100" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">


## Description

The simplest method to connect to MySQL database using [Nest](https://github.com/nestjs/nest) framework.

This one uses [nestjs-mysql](https://github.com/Tony133/nestjs-mysql) module to connect to database. 

## Installation

```bash
$ yarn install
```

## Running the app

```bash
# development
$ yarn run start

# watch mode
$ yarn run start:dev

# production mode
$ yarn run start:prod
```

## Usage

Send a POST request with one or many SQL queries in the array of JSON body like this:
```json
{
  "queries": ["SELECT * FROM Table;]"
}
```
And it will send you back everything it selected as JSON array of objects.

### WARNING: This method is NOT safe in any way. DO NOT USE this in production in any case. This server literally sends anything you type in request to the database. Also it has my credentials to the database but I dont care it's in localhost anyway

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).
