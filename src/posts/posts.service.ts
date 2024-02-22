import { Injectable } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { DatabaseService } from 'src/database/database.service';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { Prisma } from '@prisma/client';

@Injectable()
export class PostsService {
  constructor(private databaseService: DatabaseService) {}
  async create(createPostDto: Prisma.PostCreateInput) {
    return await this.databaseService.post.create({
      data: createPostDto,
    });
  }

  findAll() {
    return `This action returns all posts`;
  }

  findOne(id: number) {
    return `This action returns a #${id} post`;
  }

  update(id: number, updatePostDto: UpdatePostDto) {
    return `This action updates a #${id} post`;
  }

  remove(id: number) {
    return `This action removes a #${id} post`;
  }
}
