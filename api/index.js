export default function handler(request,response) {
  const name = "test";
  const urlStr = request.url
  const urlObj = new URL(urlStr)
  const path = urlObj.href.substr(urlObj.origin.length)
  response.status(200).send(`Hello ${name}, ${process.env.Div_Name} , ${path}!`);
}
