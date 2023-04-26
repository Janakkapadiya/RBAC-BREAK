import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { CreateUserDto } from './user-dto-class';
import { UserM } from 'src/domain/model/UserM';
import { JwtAuthGuard } from 'src/infrastructure/common/guards/jwtAuth.guard';
import { roleGuard } from 'src/infrastructure/common/guards/roles.guard';
import { Role } from 'src/domain/enums/Roles.enum';
import { role } from 'src/infrastructure/common/decoretors/Roles.decoretor';
import { UserPresenter } from './user.presenter';
import { ApiExtraModels, ApiResponse } from '@nestjs/swagger';
import { UserService } from 'src/infrastructure/services/user/user.service';

@Controller('user')
@ApiResponse({ status: 500, description: 'Internal error' })
@ApiExtraModels(UserPresenter)
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async createUser(@Body() userData: CreateUserDto) {
    const { name, email, password, role } = userData;

    const insert_user = new UserM();
    insert_user.email = email;
    insert_user.name = name;
    insert_user.role = role;
    insert_user.password = password;

    const user = await this.userService.createUser(insert_user);

    console.log(user);

    return user;
  }

  @role(Role.User)
  @UseGuards(roleGuard)
  @UseGuards(JwtAuthGuard)
  @Get('all')
  async getAllUser() {
    return this.userService.getAll();
  }

  @role(Role.User)
  @UseGuards(roleGuard)
  @UseGuards(JwtAuthGuard)
  @Get(':id')
  async getUser(@Param('id') id: number) {
    return this.userService.getById(id);
  }
}
