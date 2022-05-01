# Instagram profile get

Get image data from a public Instagram profile 

## Install
```
npm i instagram-profile-get
```

## Example usage

```javascript
var instagramProfileGet = require('instagram-profile-get');

(async () => {
    try {
        const result = await instagramProfileGet('crossfitcornwall');
        console.log(result);
    } catch(err) {
        console.log(err);
    }
})();
```