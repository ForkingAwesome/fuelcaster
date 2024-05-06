/** @jsxImportSource frog/jsx */

import { Button, Frog, TextInput } from 'frog'
import { devtools } from 'frog/dev'
// import { neynar } from 'frog/hubs'
import { handle } from 'frog/next'
import { serveStatic } from 'frog/serve-static'

const app = new Frog({
  assetsPath: '/',
  basePath: '/api',
  // Supply a Hub to enable frame verification.
  // hub: neynar({ apiKey: 'NEYNAR_FROG_FM' })
})

app.frame("/", (c) => {
  return c.res({
    action: "/address",
    image: (
      <div style={{ color: "white", display: "flex", fontSize: 60 }}>
        Mint your Token here!
      </div>
    ),
    intents: [
      <TextInput placeholder="Enter your address here"></TextInput>,
      <Button value="Address">Submit</Button>,
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
  // .then(() => console.log(result))
  .catch(console.error);

  return c.res({
    image: (
      <div style={{ color: "white", display: "flex", fontSize: 60 }}>
        Address: {result}
      </div>
    ),
  });
});

app.frame("/error", async (c) => {
  return c.res({
    image: (
      <div style={{ color: "white", display: "flex", fontSize: 60 }}>
        Please enter your Fuel Address
      </div>
    ),
  });
});

devtools(app, { serveStatic })

export const GET = handle(app)
export const POST = handle(app)
