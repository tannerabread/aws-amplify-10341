# amplify-js#10341

The issue is happeninig on aws-amplify@4.3.32 and later

It happens with any of the imports related to "aws-amplify" found in the main.js of this repo. They can be tested as a whole or isolated 

To test, clone this repo and `npm i` then `npm run dev`

Then cancel the running dev-server, `npm i aws-amplify@4.3.31` and `npm run dev` again and it should work
