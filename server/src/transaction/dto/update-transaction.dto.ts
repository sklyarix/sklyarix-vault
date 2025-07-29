import { PartialType } from '@nestjs/mapped-types'
import { IsNumber, IsOptional, IsString } from 'class-validator'
import { CreateTransactionDto } from './create-transaction.dto'

export class UpdateTransactionDto extends PartialType(CreateTransactionDto) {
	@IsOptional()
	@IsNumber()
	amount?: number

	@IsOptional()
	@IsString()
	category?: string

	@IsOptional()
	@IsString()
	comment?: string
}
