import { Injectable } from '@nestjs/common';
import { UpdateResult } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { UsersRepository } from './users.repository';

@Injectable()
export class UsersService {
  constructor(private usersRepository: UsersRepository) { }

  create(user: User): Promise<CreateUserDto> {
    return this.usersRepository.save(user);
  }

  findAll(): Promise<User[]> {
    return this.usersRepository.find();
  }

  findOne(id: number): Promise<User> {
    return this.usersRepository.findOne(id);
  }

  update(id: number, user: User): Promise<UpdateUserDto> {
    return this.usersRepository.update(id, user);
  }

  remove(user: User): Promise<User> {
    return this.usersRepository.remove(user);
  }
}
