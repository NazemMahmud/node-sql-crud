# Package.json

* `"type": "module",`: to use `import` or `export` for module instead of `require`

before it was:
```angular2html
const express = require('express');
```
Now, it is:

```angular2html
import express from 'express';
```

* `express`: this is an `express` js project
* `nodemon`: hot reload of the project in dev environment
To use it, in the **package.json**, use:
```angular2html
"scripts": {
    "dev": "nodemon index.js"
},
```

And, in terminal, run:
```shell
npm run dev
```

* `dotenv`: to use env variable from `.env` file
* `cors`: to handle CORS policy
* `joi`: to validate data

# PGSQL

* General new server name: simple-postgres