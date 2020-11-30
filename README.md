# milsymbol-png

milsymbol library with .toPNG() function

## Documentation

Please take a look at: https://github.com/spatialillusions/milsymbol

## Example

```javascript
const ms = require('milsymbol-png')

const main = async ()=>{
    const symbol = await new ms('10050100001101040000', { size: 35 }).asPNG()
    console.log(symbol)
}

main()
```
