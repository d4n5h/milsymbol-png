const ms = require('milsymbol'),
    sharp = require("sharp")
module.exports = class {
    constructor(code, settings) {
        this.symbol = new ms.Symbol(code, settings)
    }
    asSVG() {
        return this.symbol.asSVG()
    }
    async asPNG() {
        const sym = await sharp(Buffer.from(this.symbol.asSVG()))
            .png()
            .toBuffer()
        return Buffer.from(sym).toString('base64')
    }
}