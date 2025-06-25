import { Injectable } from '@nestjs/common';
import type { Transaction } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';
import { CreateTransactionDto } from './dto/create-transaction.dto';

@Injectable()
export class TransactionService {
  constructor(private readonly prisma: PrismaService) {}

  create(dto: CreateTransactionDto) {
    return this.prisma.transaction.create({
      data: {
        type: dto.type,
        amount: dto.amount,
        date: new Date(dto.date),
        comment: dto.comment,
        categoryId: dto.categoryId ?? null,
      },
    });
  }

  findAll(): Promise<Transaction[]> {
    return this.prisma.transaction.findMany({
      orderBy: { date: 'desc' },
    });
  }

  /*
	async findAll(sortBy?: string, order: 'asc' | 'desc' = 'asc'): Promise<Transaction[]> {
	const validSortFields = ['date', 'amount', 'createdAt']; // защита от SQL-инъекций

	return this.prisma.transaction.findMany({
		orderBy: sortBy && validSortFields.includes(sortBy)
			? { [sortBy]: order }
			: undefined,
	});
}

	
	
		findOne(id: number) {
			return `This action returns a #${id} transaction`;
		}
	
		update(id: number, updateTransactionDto: UpdateTransactionDto) {
			return `This action updates a #${id} transaction`;
		}
	
		remove(id: number) {
			return this.prisma.transaction.delete({ where: { id } });
		}
		
	 */
}
