import { ApiProperty } from '@nestjs/swagger'

export class CategoryDto {
	@ApiProperty({ example: '1', description: 'ID категории' })
	id!: number

	@ApiProperty({
		example: '2025-07-28T14:30:00.000Z',
		description: 'Дата создания'
	})
	createdAt!: string

	@ApiProperty({
		example: '2025-07-28T14:30:00.000Z',
		description: 'Дата последнего обновления'
	})
	updatedAt!: string

	@ApiProperty({ example: 'Продукты', description: 'Название категории' })
	name!: string
}
