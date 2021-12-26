export default function handler(request,response) {
  const name = "test";
  response.status(200).send(`Hello ${name}, ${process.env.Div_Name} , ${path}!`);
}
