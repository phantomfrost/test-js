export default function handler(request,response) {
  const name = "test";
  const path = require('path').resolve('./');
  response.status(200).send(`Hello ${name}, ${process.env.Div_Name} , ${path}!`);
}
