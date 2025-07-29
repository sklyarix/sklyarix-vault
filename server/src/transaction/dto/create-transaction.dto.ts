import { ApiProperty } from '@nestjs/swagger'
import { TransactionType } from '@shared/enums/transaction-type.enum'
import {
	IsDateString,
	IsEnum,
	IsInt,
	IsNumber,
	IsOptional,
	IsString
} from 'class-validator'

export class CreateTransactionDto {
	@ApiProperty({
		example: 'income',
		description: 'Тип транзакции',
		enum: TransactionType
	})
	@IsEnum(TransactionType, {
		message: 'type must be one of: income, expense'
	})
	type!: TransactionType

	@ApiProperty({ example: 1500, description: 'Сумма транзакции' })
	@IsNumber()
	amount!: number

	@ApiProperty({ example: 2, description: 'ID категории', required: false })
	@IsOptional()
	@IsInt()
	categoryId?: number

	@ApiProperty({
		example: '2025-07-28T14:30:00.000Z',
		description: 'Дата и время',
		required: false
	})
	@IsDateString()
	date!: string

	@ApiProperty({
		example: 'Кофе и сэндвич',
		description: 'Комментарий',
		required: false
	})
	@IsOptional()
	@IsString()
	comment?: string
}
