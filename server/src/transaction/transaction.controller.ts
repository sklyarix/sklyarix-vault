import {
	BadRequestException,
	Body,
	Controller,
	Delete,
	Get,
	Param,
	Post,
	Put,
	Query
} from '@nestjs/common'
import {
	ApiBody,
	ApiCreatedResponse,
	ApiNotFoundResponse,
	ApiOkResponse,
	ApiOperation,
	ApiQuery,
	ApiResponse,
	ApiTags
} from '@nestjs/swagger'
import { CreateTransactionDto } from './dto/create-transaction.dto'
import { TransactionDto } from './dto/transaction.dto'
import { UpdateTransactionDto } from './dto/update-transaction.dto'
import { TransactionService } from './transaction.service'

@ApiTags('Транзакции')
@Controller('transactions')
export class TransactionController {
	constructor(private readonly transactionService: TransactionService) {}

	/* ------------------------------------------------ */
	@Post()
	@ApiOperation({ summary: 'Создать транзакцию' })
	@ApiBody({ type: CreateTransactionDto })
	@ApiCreatedResponse({
		description: 'Транзакция успешно создана',
		type: TransactionDto
	})
	@ApiResponse({ status: 400, description: 'Ошибка валидации' })
	create(@Body() dto: CreateTransactionDto) {
		return this.transactionService.create(dto)
	}

	/* ------------------------------------------------ */
	@Put(':id')
	@ApiOperation({ summary: 'Изменить транзакцию' })
	@ApiBody({ type: UpdateTransactionDto })
	@ApiOkResponse({
		description: 'Итоговый вид транзакции после изменений',
		type: TransactionDto
	})
	@ApiNotFoundResponse({ description: 'Транзакция не найдена' })
	update(@Param('id') id: string, @Body() dto: UpdateTransactionDto) {
		return this.transactionService.update(+id, dto)
	}

	/* ------------------------------------------------ */
	@Delete(':id')
	@ApiOperation({ summary: 'Удалить транзакцию' })
	@ApiOkResponse({
		description: 'Транзакция успешно удалена',
		type: TransactionDto
	})
	@ApiNotFoundResponse({
		description: 'Транзакция с таким ID не найдена'
	})
	remove(@Param('id') id: string) {
		return this.transactionService.remove(+id)
	}

	/* ------------------------------------------------ */
	@Get()
	@ApiOperation({ summary: 'Получить список транзакций' })
	@ApiQuery({
		name: 'sortBy',
		required: false,
		description: 'Поле сортировки (допустимые: amount, date, createdAt)',
		schema: {
			type: 'string',
			enum: ['amount', 'date', 'createdAt'],
			default: 'date'
		}
	})
	@ApiQuery({
		name: 'order',
		required: false,
		enum: ['asc', 'desc'],
		description: 'Направление сортировки',
		schema: {
			type: 'string',
			default: 'desc'
		}
	})
	@ApiOkResponse({
		description: 'Список транзакций',
		type: TransactionDto,
		isArray: true
	})
	findAll(
		@Query('sortBy') sortBy?: string,
		@Query('order') order?: 'asc' | 'desc'
	) {
		return this.transactionService.findAll(sortBy, order)
	}

	/* ------------------------------------------------ */
	@Get('date')
	@ApiOperation({ summary: 'Получить транзакции за месяц/год' })
	@ApiQuery({
		name: 'month',
		required: true,
		type: Number,
		example: '7',
		description: 'Номер месяца от 1 до 12'
	})
	@ApiQuery({
		name: 'year',
		required: true,
		type: Number,
		example: '2025',
		description: 'Год, например 2025'
	})
	@ApiOkResponse({
		description: 'Список транзакций за указанный месяц',
		type: TransactionDto,
		isArray: true
	})
	findByDateRange(@Query('month') month: string, @Query('year') year: string) {
		const monthNum = Number(month)
		const yearNum = Number(year)

		if (isNaN(monthNum) || isNaN(yearNum)) {
			throw new BadRequestException('Year or month must be numbers ')
		}

		if (monthNum < 1 || monthNum > 12) {
			throw new BadRequestException('Month must be between 1 and 12')
		}

		const from = new Date(yearNum, monthNum - 1)
		const to = new Date(yearNum, monthNum)

		return this.transactionService.findByDateRange(from, to)
	}
}
