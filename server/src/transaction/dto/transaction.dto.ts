import { ApiProperty } from '@nestjs/swagger'
import { TransactionType } from '@shared/enums/transaction-type.enum'

export class TransactionDto {
	@ApiProperty({ example: 1 })
	id!: number

	@ApiProperty({ example: 1500 })
	amount!: number

	@ApiProperty({ enum: TransactionType, example: 'income' })
	type!: TransactionType

	@ApiProperty({ example: 'Зарплата за июль', required: false })
	comment?: string

	@ApiProperty({ example: '2025-07-28T14:30:00.000Z' })
	date!: string

	@ApiProperty({ example: 1, nullable: true })
	categoryId?: number | null

	@ApiProperty({ example: '2025-07-28T14:30:00.000Z' })
	createdAt!: string

	@ApiProperty({ example: '2025-07-28T14:30:00.000Z' })
	updatedAt!: string
}
