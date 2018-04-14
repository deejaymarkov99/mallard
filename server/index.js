// eslint-ignore no-consolee
const Morgan = require('morgan');
const Express = require('express');

const app = new Express();

app.use(Morgan("tiny"));

app.use(Express.static('dist'));
app.listen(3000, () => console.log('Example app listening on port 3000!'));
