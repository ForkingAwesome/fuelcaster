/** @jsxImportSource frog/jsx */

import { Button, Frog, TextInput } from 'frog'
import { devtools } from 'frog/dev'
import { handle } from 'frog/next'
import { serveStatic } from 'frog/serve-static'

const app = new Frog({
  assetsPath: '/',
  basePath: '/api',
})

app.frame("/", (c) => {
  return c.res({
    action: "/address",
    image: (
      <div
        style={{
          color: "#101112",
          display: "flex",
          flexDirection: "column",
          fontSize: "3rem",
          backgroundImage: "linear-gradient(120deg, #00c9ff, #92fe9d)",
          height: "100vh",
          padding: "20px",
          textAlign: "center",
          justifyContent: "center",
          alignItems: "center",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
          borderRadius: "10px",
        }}
      >
        <div style={{ marginBottom: "20px" }}>Welcome to FuelCaster! 👋</div>
        <div>Mint your Tokens Here! 💰</div>
      </div>
    ),
    intents: [
      <TextInput placeholder="Enter Your Fuel Address Here"></TextInput>,
      <Button value="Address">Mint 🌱</Button>,
    ],
  });
});

app.frame("/address", async (c) => {
  const { inputText } = c;
  let result = '';

  if (!inputText) {
    return c.res({
      image: (
        <div style={{ color: "white", display: "flex", fontSize: 60 }}>
          Please enter your fuel Address!
        </div>
      ),
      intents: [
        <Button value="Address" action='/'>Go back</Button>,
      ],
    });
  }

  const postData = {
    receiverAddress: inputText
  };

  await fetch('http://localhost:3000/api/check', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(postData)
  })
  .then(response => response.json())
  .then(response => result = response.result)
  .catch(console.error);

  return c.res({
    image: (
      <div
        style={{
          color: "#101112",
          display: "flex",
          flexDirection: "column",
          fontSize: "3rem",
          backgroundImage: "linear-gradient(120deg, #00c9ff, #92fe9d)",
          height: "100vh",
          padding: "20px",
          textAlign: "center",
          justifyContent: "center",
          alignItems: "center",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
          borderRadius: "10px",
        }}
      >
        {" "}
        Address: {result}
      </div>
    ),
  });
});

app.frame("/error", async (c) => {
  return c.res({
    image: (
      <div
        style={{
          color: "#101112",
          display: "flex",
          flexDirection: "column",
          fontSize: "3rem",
          backgroundImage: "linear-gradient(120deg, #00c9ff, #92fe9d)",
          height: "100vh",
          padding: "20px",
          textAlign: "center",
          justifyContent: "center",
          alignItems: "center",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
          borderRadius: "10px",
        }}
      >
        {" "}
        Please enter your Fuel Address
      </div>
    ),
  });
});

devtools(app, { serveStatic })

export const GET = handle(app)
export const POST = handle(app)
