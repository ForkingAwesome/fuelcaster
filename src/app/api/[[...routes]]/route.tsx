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
      <TextInput placeholder="Enter Your Fuel Address Here"></TextInput>,
      <Button value="Address">Mint 🌱</Button>,
    ],
  });
});

app.frame("/address", async (c) => {
  const { inputText } = c;
  let result = '';
  let txLink = '';

  if (!inputText) {
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

  await fetch(`${process.env.NEXT_URL}/api/check`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(postData)
  })
  .then(response => response.json())
  .then(response => {
    result = response.result;
    txLink = 'https://app.fuel.network/tx/' + response.transactionId;
  })
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
        Address: {result}
      </div>
    ),
    intents: [
      <Button.Link href={txLink}>See your transaction</Button.Link>,
    ],
  });
});

devtools(app, { serveStatic })

export const GET = handle(app)
export const POST = handle(app)
