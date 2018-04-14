// eslint-ignore no-console
const Express = require('express');

const app = new Express();

app.use(Express.static('dist'));
app.listen(3000, () => console.log('Example app listening on port 3000!'));
