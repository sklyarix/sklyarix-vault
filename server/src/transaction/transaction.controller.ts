import { Body, Controller, Get, Post } from "@nestjs/common";
import type { Transaction } from "@prisma/client";
import { CreateTransactionDto } from "./dto/create-transaction.dto";
import { TransactionService } from "./transaction.service";

@Controller("transaction")
export class TransactionController {
  constructor(private readonly transactionService: TransactionService) {}

  @Post()
  create(@Body() createTransactionDto: CreateTransactionDto) {
    return this.transactionService.create(createTransactionDto);
  }

  @Get()
  findAll(): Promise<Transaction[]> {
    return this.transactionService.findAll();
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
	
		@Delete(':id')
		remove(@Param('id') id: string) {
			return this.transactionService.remove(+id);
		}
	 */
}
