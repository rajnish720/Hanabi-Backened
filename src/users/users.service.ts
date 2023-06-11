import { Injectable } from "@nestjs/common"
import {InjectModel} from "@nestjs/mongoose"
import { Model } from "mongoose"
import { UserDocument } from "src/schemas/user.schema"

@Injectable()
export class userService {
    constructor(@InjectModel("User") private readonly userModel: Model<UserDocument>) {
        
    }

    async create(creteUserDto){
        try{
            const user = await this.userModel.create(creteUserDto);
            console.log("User: ", user);
            return user;
        }
        catch(error){
            console.log(error);
        }
    }

    async getUserDetail (data) {
        // console.log('Req: ', data);
        var curUser = {};
        try{
            
            const users = await this.userModel.find();
            for(const user of users){
                if(user?.email === data?.email){
                    curUser = user;
                    break;
                }
            }
            return curUser;
        }
        catch(err) {
            console.log(err);
        }
    }
}