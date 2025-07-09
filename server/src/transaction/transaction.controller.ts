import {
	BadRequestException,
	Body,
	Controller,
	Delete,
	Get,
	Param,
	Post,
	Query
} from '@nestjs/common'
import type { Transaction } from '@prisma/client'
import { CreateTransactionDto } from './dto/create-transaction.dto'
import { TransactionService } from './transaction.service'

@Controller('transaction')
export class TransactionController {
	constructor(private readonly transactionService: TransactionService) {}

	@Post()
	create(@Body() createTransactionDto: CreateTransactionDto) {
		return this.transactionService.create(createTransactionDto)
	}

	@Delete(':id')
	remove(@Param('id') id: string) {
		return this.transactionService.remove(+id)
	}

	// @desc Get all transactions (optionally sorted)
	// @route GET /transaction?sortBy=field&order=asc|desc
	@Get()
	findAll(
		@Query('sortBy') sortBy?: string,
		@Query('order') order?: 'asc' | 'desc'
	): Promise<Transaction[]> {
		return this.transactionService.findAll(sortBy, order)
	}

	// @desc Get all transactions by range date
	// @route GET /transaction?month=01&year=2025
	@Get('date')
	findByDateRange(
		@Query('month') month: string,
		@Query('year') year: string
	): Promise<Transaction[]> {
		const monthNum = Number(month)
		const yearNum = Number(year)

		if (isNaN(monthNum) || isNaN(yearNum)) {
			throw new BadRequestException('Year or month must be numbers - 1')
		}

		if (monthNum < 1 || monthNum > 12) {
			throw new BadRequestException('Month must be numbers')
		}

		const from = new Date(yearNum, monthNum - 1)
		const to = new Date(yearNum, monthNum)

		return this.transactionService.findByDateRange(from, to)
	}

	/*
 

@Get()
findAll(
	@Query('sortBy') sortBy?: string,
	@Query('order') order?: 'asc' | 'desc'
): Promise<Transaction[]> {
	return this.transactionService.findAll(sortBy, order);
}
 
	
	
		@Get(':id')
		findOne(@Param('id') id: string) {
			return this.transactionService.findOne(+id);
		}
	
		@Patch(':id')
		update(
			@Param('id') id: string,
			@Body() updateTransactionDto: UpdateTransactionDto,
		) {
			return this.transactionService.update(+id, updateTransactionDto);
		}
	
		
	 */
}
