import { ApiProperty } from '@nestjs/swagger';
import { Post } from '@prisma/client';

export class PostEntity implements Post {
  constructor(partial: Partial<PostEntity>) {
    Object.assign(this, partial);
  }

  @ApiProperty()
  id: number;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;

  @ApiProperty()
  title: string;

  @ApiProperty()
  slug: string;

  @ApiProperty()
  content: string;

  @ApiProperty()
  authorId: number;

  @ApiProperty()
  author: number;
}
