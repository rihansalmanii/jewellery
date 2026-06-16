const ImageKit = require("@imagekit/nodejs");
require("dotenv").config();

const imageKitClient = new ImageKit({
    privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
})

const upload = async (file) => {
   try {
     const result = await imageKitClient.files.upload({
        file: file.buffer.toString('base64'),
        fileName: "img_"+Date.now(),
        folder: "jewellery-backend/images",
        useUniqueFileName: true
    })
    
    return result;
   } catch(err) {
    console.log("Error uploading file:", err.message)
    throw err;
   }

}

const deleteFile = async (fileId) => {
    try {
        const result = await imageKitClient.files.delete(fileId)
        console.log("File deleted successfully:", fileId);
        return result;
    } catch(error) {
        console.log("Error deleting file:", error.message)
        throw error;
    }
}

module.exports = { upload, deleteFile }