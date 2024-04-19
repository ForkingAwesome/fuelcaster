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

app.frame("/address", (c) => {
  const { inputText } = c;
  console.log(inputText);
  return c.res({
    image: (
      <div style={{ color: "white", display: "flex", fontSize: 60 }}>
        Address: {inputText}
      </div>
    ),
  });
});

devtools(app, { serveStatic })

export const GET = handle(app)
export const POST = handle(app)
