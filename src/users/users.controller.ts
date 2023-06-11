import { Body, Controller, Get, Post } from "@nestjs/common";
import { userService } from "./users.service";


@Controller("/")
export class usersController {
    constructor(private readonly userService: userService) {

    }

    @Post("save-user/")
    create(@Body() creteUserDto){
        return this.userService.create(creteUserDto);
    }

    @Post("get-user/")
    getUser(@Body() email: object){
        return this.userService.getUserDetail(email);
    }

}