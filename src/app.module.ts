import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { PrismaService } from './prisma.service';
import { CannabisModule } from './cannabis/cannabis.module';
import { Cannabis } from './cannabis/entities/cannabis.entity';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'users',
      entities: [Cannabis],
      synchronize: true, // เซ็ตเป็น true ในการสร้างตารางของฐานข้อมูลโดยอัตโนมัติ
    }),
    UserModule,
    AuthModule,
    CannabisModule,
  ],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}