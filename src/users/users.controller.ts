import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { User } from './entities/user.entity';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  create(@Body() user: User) {
    return this.usersService.create(user);
  }

  @Get('all')
  findAll() {
    return this.usersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.usersService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() user: User) {
    return this.usersService.update(id, user);
  }

  @Delete(':id')
  async remove(@Param('id') id: number) {
    const user = await this.findOne(id)
    return this.usersService.remove(user);
  }
}
