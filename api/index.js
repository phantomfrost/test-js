export default function handler(request,response) {
  const name = "test";
  const urlStr = request.url;
  response.status(200).send(`Hello ${name}, ${process.env.Div_Name} , ${urlstr}!`);
}
