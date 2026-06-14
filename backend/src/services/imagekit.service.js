const ImageKit = require("@imagekit/nodejs");
require("dotenv").config();

const imageKitClient = new ImageKit({
    privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
})

const upload = async (file) => {
    const result = await imageKitClient.files.upload({
        file: file.buffer.toString('base64'),
        fileName: "img_"+Date.now(),
        folder: "jewellery-backend/images"
    })
    
    return result;

}

module.exports = { upload }