import { Module } from '@nestjs/common';
import { PostsService } from './posts.service';
import { PostsController } from './posts.controller';
import { DatabaseModule } from 'src/database/database.module';
import { UsersModule } from 'src/users/users.module';

@Module({
  imports: [DatabaseModule, UsersModule],
  controllers: [PostsController],
  providers: [PostsService],
  exports: [PostsService],
})
export class PostsModule {}
