<p align="center">
	<a href="https://i.ibb.co/kcpWdj0/EY.png">
		<img src="https://i.ibb.co/kcpWdj0/EY.png" width="330" alt="urley">
	</a>
</p>

<p align="center"> A powerful utility library to work with URL's</p>
<hr / >

<br /><br />

## ⚡️About

[Urley](https://github.com/adenekan41/urley), A powerful utility library
delivering modularity to work with URL's the right way .**the bes was to work
with URL's**.

**Using urley** in **project** provides an **easy way** of **handeling /working
URL** with only a few imports.

## 🛠 Installing [urley](https://github.com/adenekan41/urley)

### Using NPM

```bash
npm i urley
```

### Using Yarn

```bash
yarn add urley
```

## 📁 Helper Function

### Is Absolute

> returns - Boolean

- `isAbsolute` - Returns `Boolean` if the given string is an absolute URL.
  https://seoclarity.net/resources/knowledgebase/difference-relative-absolute-url-15325/
  see file
  [here](https://github.com/adenekan41/urley/blob/master/src/isAbsolute.js)

### Is Browser

> returns - Boolean

- `isAbsolute` -Determines if the current runtime environment is a browser. see
  file [here](https://github.com/adenekan41/urley/blob/master/src/isBrowser.js)

### Get Base URL

> parameters - url (String)

> returns - String

- `getBaseUrl` - Returns the current URL without any parameters. see file
  [here](https://github.com/adenekan41/urley/blob/master/src/getBaseUrl.js)

### Decode URL

> parameters - str (String)

> returns - String

- `decodeUrl` - Function decodes a Uniform Resource Identifier (URI) component
  previously created by decodeURIComponent or by a similar routine. see file
  [here](https://github.com/adenekan41/urley/blob/master/src/decodeUrl.js)

### Encode URL

> parameters - str (String)

> returns - String

- `encodeUrl` - Function encodes a Uniform Resource Identifier (URI) component
  previously created by encodeURIComponent or by a similar routine. see file
  [here](https://github.com/adenekan41/urley/blob/master/src/encodeUrl.js)

### Get URL Parameters

> parameters - url (String)

> returns - Object

- `getUrlParameters` - Returns an object containing the parameters of the
  current URL. see file
  [here](https://github.com/adenekan41/urley/blob/master/src/getUrlParams.js)

### Get Path Name

> parameters - url (String)

> returns - String

- `getPathname` - returns pathname with a regex exec function see file
  [here](https://github.com/adenekan41/urley/blob/master/src/getPathName.js)

### Path Name To Object

> parameters - url (String)

> returns - Object

- `getPathnameToObject` - returns pathname into ann object see file
  [here](https://github.com/adenekan41/urley/blob/master/src/getPathnameToObject.js)

## Usage

Getting familiar with the libary and you want to use some helper functions like
`getBaseUrl`, `getPathnameToObject`, `isAbsoluteUrl` helpers and e.t.c you can
easily just export them the following ways.

```js
import { isAbsolute } from 'urley';
```

All methods are exported as a flat namesapce so you can also call them like this

```js
import isAbsolute from 'urley/bundle-es/getBaseUrl';
```

or

```js
var isAbsolute = require('urley');
```

and then we have the exported helpers and can already do this

```js
isAbsolute({});
// => true
```

> MIT © [codewonders.dev](https://codewonders.dev) &nbsp;&middot;&nbsp; GitHub
> [@adenekan41 / @codewonders](https://github.com/adenekan41) >
> &nbsp;&middot;&nbsp;