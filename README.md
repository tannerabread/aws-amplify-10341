# amplify-js#10341

## Background
Vue/Vite apps not working with aws-amplify v4.3.32 up to current latest (v4.3.35)

## Details
* Throws error with 4.3.32-4.3.35

* Does not throw error on 4.3.31 and before

* It happens with any of the imports related to "aws-amplify" found in the `main.js` of this repo. They can be tested as a whole or isolated 

* Shows error: `TypeError: Object prototype may only be an Object or null: undefined at setPrototypeOf (<anonymous>)`

![image](https://user-images.githubusercontent.com/30082936/191274972-dfb447dd-9f72-4c24-8622-3b938a812e52.png)

## Reproduction
To test, clone this repo and `npm i` then `npm run dev`

Then cancel the running dev-server, `npm i aws-amplify@4.3.31` and `npm run dev` again and the app should load correctly

## Reproduce from Scratch

```bash
npm init vue@latest
npm install
npm install aws-amplify
```

Add the following imports to `main.js`, *any* of them individually or all of them
```js
import { Amplify, Auth, Hub, PubSub } from 'aws-amplify'
import { AWSIoTProvider } from '@aws-amplify/pubsub'
```