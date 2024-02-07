import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreateUserDto } from './dto/dto/user.dto';
import { hash } from 'bcrypt';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async create(dto: CreateUserDto) {
    const user = await this.prisma.user.findUnique({
      where: {
        email: dto.email,
      },
    });

    if (user) throw new ConflictException('email duplicated');

    const newUser = await this.prisma.user.create({
      data: {
        ...dto,
        password: await hash(dto.password, 10),
      },
    });

    const { password, ...result } = newUser;
    return result;
  }

  async findByEmail(email: string) {
    if (!email) {
      throw new Error('Email is required'); // หรือเลือกวิธีการจัดการที่เหมาะสมกับแอปพลิเคชันของคุณ
    }
    return await this.prisma.user.findUnique({
      where: {
        email: email,
      },
    });
  }
  async findById(id: number) {
    if (id === undefined || isNaN(id)) {
      throw new Error('Invalid user ID');
    }
    return await this.prisma.user.findUnique({
      where: {
        id: id,
      },
    });
  }
  async remove(userId: number) {
    // แก้ชื่อตัวแปรเป็น userId
    // ตรวจสอบว่ามีข้อมูลผู้ใช้งานในระบบหรือไม่
    const user = await this.prisma.user.findUnique({
      where: {
        id: userId,
      },
    });
    // ถ้าไม่มีข้อมูลผู้ใช้งานในระบบ ให้ throw NotFoundException
    if (!user) {
      throw new NotFoundException(`User with ID ${userId} not found`);
    }
    // ถ้ามีข้อมูลผู้ใช้งานในระบบ ให้ลบข้อมูลผู้ใช้งาน
    return await this.prisma.user.delete({
      where: {
        id: userId,
      },
    });
  }
}

