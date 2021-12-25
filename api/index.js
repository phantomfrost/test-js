export default function handler(request,response) {
  const name = "test";
  response.status(200).send(`Hello ${name}!`);
}
