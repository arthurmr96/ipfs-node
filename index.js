const IPFS = require('ipfs')

async function main () {
    const ipfsOptions = { repo: './ipfs' };
    const ipfs = await IPFS.create(ipfsOptions)

    ipfs.config.set('API.HTTPHeaders.Access-Control-Allow-Origin', '["*"]')
    ipfs.config.set('API.HTTPHeaders.Access-Control-Allow-Methods', '["POST","PUT","GET"]')

    const { cid } = await ipfs.add('Hello world')
    console.info(cid)
}

try {
    main()
} catch (error) {
    console.error(error)
}
