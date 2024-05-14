const { MongoClient } = require ('mongodb');
require('dotenv').config();

module.exports = class MongoCon{
    constructor (){
        try{
            this.mongoClient = new MongoClient(process.env.mongoURL);
            this.db = process.env.mongoDatabase;
            this.userCol = process.env.mongoColUsers;
        }catch(e){

        }
    }

    async signup (data, encPass){
        let query = {fullname: data.fullname, email: data.email, phone: data.phone, password: encPass};
        
        let res;
        try{
            let queryRes =  await this.mongoClient.db(this.db).collection(this.userCol).insertOne(query);
            res = {
                error: false,
                res: queryRes
            }
            return res;
        }catch(e){
            res = {
                error: true,
                res: e
            }
            return res;
        }
    }
}