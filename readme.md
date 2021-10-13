# XpresserJs JWT Plugin

Easy and Fast jwt setup for your project.

This plugin makes use of [fast-jwt](http://npmjs.org/package/fast-jwt) with caching support out of the box.

### Installation

```sh
npm i @xpresser/jwt
# OR
yarn add @xpresser/jwt
```

### Add to your project config.

```javascript
({
  // ... Other Configs
  "@xpresser/jwt": {
    secretKey: "My Secret Key!",
    signer: {
      expiresIn: 3_600_000 // in 1 hour
    },
    verifier: {cache: true}
  }
  
})
```
More `signer` and `verifier` configuration options can be found [here](http://npmjs.org/package/fast-jwt)

### Add to plugins.json

```json
{
  "npm://@xpresser/jwt": true
}
```

### Usage

In your controller or anywhere in your project.

```javascript
const {signJwt, verifyJwt} = require("@xpresser/jwt");

// Sign Data
const token = signJwt({user: 'john_doe'});

// Verify/Decode
verifyJwt(token) // {user: 'john_doe}
```