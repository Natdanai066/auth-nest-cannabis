import { Controller, Delete, Get, NotFoundException, Param, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { JwtGuard } from 'src/auth/guards/jwt.guard';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @UseGuards(JwtGuard)
  @Get(':id')
  async getUserProfile(@Param('id') id: number) {
    return await this.userService.findById(id);
    
  }
  @Delete(':id')
  async remove(@Param('id') id: string) {
    // ลองแก้โดยใช้ try-catch เพื่อจัดการข้อผิดพลาดได้อย่างถูกต้อง
    try {
      await this.userService.remove(+id);
      return { message: 'User deleted successfully' };
    } catch (error) {
      // ในกรณีที่เกิดข้อผิดพลาดเนื่องจากไม่พบข้อมูลผู้ใช้
      if (error instanceof NotFoundException) {
        throw new NotFoundException(error.message);
      }
      // ในกรณีอื่นๆ ที่ไม่ได้ระบุไว้ในรูปแบบของ NotFoundException
      throw error;
    }
}
}
