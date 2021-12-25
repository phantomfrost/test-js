export default function handler(response) {
  const { name } = "test";
  response.status(200).send(`Hello ${name}!`);
}
