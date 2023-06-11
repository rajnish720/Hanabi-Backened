import { MongooseModule } from "@nestjs/mongoose"
import { Global, Module } from "@nestjs/common"
import { User, UserSchema } from "src/schemas/user.schema"
import { userService } from "./users.service"
import { usersController } from "./users.controller"

@Global()
@Module({
    controllers: [usersController],
    imports: [MongooseModule.forFeature([{name: "User", schema: UserSchema}])],
    providers: [userService],
    exports: [MongooseModule],
})

export class UsersModule {}
