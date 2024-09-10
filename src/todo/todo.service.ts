import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { v4 as uuidv4 } from 'uuid';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';

@Injectable()
export class TodoService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createTodoDto: CreateTodoDto) {
    const newId = uuidv4();
    const newTodo = await this.prisma.todo.create({
      data: {
        ...createTodoDto,
        id: newId,
      },
    });
    return newTodo;
  }

  async findAll() {
    return await this.prisma.todo.findMany();
  }

  async findOne(id: string) {
    return await this.prisma.todo.findUnique({
      where: { id: id },
    });
  }

  async update(id: string, updateTodoDto: UpdateTodoDto) {
    return await this.prisma.todo.update({
      where: { id: id },
      data: updateTodoDto,
    });
  }

  async remove(id: string) {
    return await this.prisma.todo.delete({
      where: { id: id },
    });
  }
}
