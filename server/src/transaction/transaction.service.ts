import { Injectable, NotFoundException } from '@nestjs/common'
import { plainToInstance } from 'class-transformer'
import { PrismaService } from '../prisma/prisma.service'
import type { CreateTransactionDto } from './dto/create-transaction.dto'
import { TransactionDto } from './dto/transaction.dto'

@Injectable()
export class TransactionService {
	constructor(private readonly prisma: PrismaService) {}

	/* ------------------------------------------------ */
	async create(dto: CreateTransactionDto) {
		const transaction = await this.prisma.transaction.create({
			data: {
				type: dto.type,
				amount: dto.amount,
				date: new Date(dto.date),
				comment: dto.comment,
				categoryId: dto.categoryId ?? null
			}
		})
		return plainToInstance(TransactionDto, transaction)
	}

	/* ------------------------------------------------ */
	async remove(id: number) {
		const existing = await this.prisma.transaction.findUnique({ where: { id } })
		if (!existing) throw new NotFoundException()
		const transaction = await this.prisma.transaction.delete({ where: { id } })
		return plainToInstance(TransactionDto, transaction)
	}

	/* ------------------------------------------------ */
	async findAll(sortBy?: string, order: 'asc' | 'desc' = 'desc') {
		const allowedFields = ['amount', 'date', 'createdAt']
		const isValid = sortBy && allowedFields.includes(sortBy)
		const transactions = await this.prisma.transaction.findMany({
			orderBy: isValid ? { [sortBy]: order } : undefined
		})
		return plainToInstance(TransactionDto, transactions)
	}

	async findByDateRange(from: Date, to: Date) {
		const transactions = await this.prisma.transaction.findMany({
			where: {
				date: {
					gte: from,
					lt: to
				}
			}
		})
		return plainToInstance(TransactionDto, transactions)
	}

	/*
	
	
 */
}
