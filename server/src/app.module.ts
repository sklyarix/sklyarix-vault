import { Module } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';

import { TransactionModule } from './transaction/transaction.module';
import { CategoryModule } from './category/category.module';

@Module({
  imports: [TransactionModule, CategoryModule],
  providers: [PrismaService],
  exports: [PrismaService],
})
export class AppModule {}
