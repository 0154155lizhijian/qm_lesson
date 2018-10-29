// 云函数入口文件
const AppId = "wxf2e603fd69763e89"
const SecretKey = "cJqGVnyxlLReiaP2teEdrupZnwujV9ct"
const SecretId  = "AKIDhIlCSapJwOgy4NbTRDAwfifR4Zv937vX"
const cloud = require('wx-server-sdk')
const fs = require('fs');  //module.exports
const path = require('path')
const ImageClient = require('image-node-sdk')

cloud.init()

let ImageClient = new ImageClient({AppId,SecretId,SecretKey});
// 云函数入口函数
exports.main = async (event, context) => {
    return await ImageClient.imgPornDetect({
        formData: {
            // node 文件系统 fs rwd+  path提供路径对象 path.join 
            image: fs.createReadStream(path.join(__dirname,'test.png'))
        },
        headers:{ 
            'content-Type':'mutipart/form-data'
        }
    })
}