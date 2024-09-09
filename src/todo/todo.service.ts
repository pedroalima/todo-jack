import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';

@Injectable()
export class TodoService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createTodoDto: CreateTodoDto) {
    const newTodo = await this.prisma.task.create({
      data: createTodoDto,
    });
    return newTodo;
  }

  async findAll() {
    return await this.prisma.task.findMany();
  }

  async findOne(id: number) {
    return await this.prisma.task.findUnique({
      where: { id: id },
    });
  }

  async update(id: number, updateTodoDto: UpdateTodoDto) {
    return await this.prisma.task.update({
      where: { id: id },
      data: updateTodoDto,
    });
  }

  async remove(id: number) {
    return await this.prisma.task.delete({
      where: { id: id },
    });
  }
}
