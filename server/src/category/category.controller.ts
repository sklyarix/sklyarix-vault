import { Body, Controller, Get, Param, Post } from '@nestjs/common'
import {
	ApiBody,
	ApiCreatedResponse,
	ApiNotFoundResponse,
	ApiOkResponse,
	ApiOperation,
	ApiResponse
} from '@nestjs/swagger'

import { CategoryService } from './category.service'
import { CategoryDto } from './dto/category.dto'
import { CreateCategoryDto } from './dto/create-category.dto'

@Controller('category')
export class CategoryController {
	constructor(private readonly categoryService: CategoryService) {}

	/* ------------------------------------------------ */
	@Post()
	@ApiOperation({ summary: 'Создать категорию' })
	@ApiBody({ type: CreateCategoryDto })
	@ApiCreatedResponse({
		description: 'Категория успешно создана',
		type: CategoryDto
	})
	@ApiResponse({ status: 400, description: 'Ошибка валидации' })
	create(@Body() dto: CreateCategoryDto) {
		return this.categoryService.create(dto)
	}

	/* ------------------------------------------------ */
	@Get()
	@ApiOperation({ summary: 'Получить все категории' })
	@ApiOkResponse({
		description: 'Список категорий',
		type: CategoryDto,
		isArray: true
	})
	findAll() {
		return this.categoryService.findAll()
	}

	/* ------------------------------------------------ */
	@Get(':id')
	@ApiOperation({ summary: 'Получить категорию' })
	@ApiOkResponse({
		description: 'Категория',
		type: CategoryDto
	})
	@ApiNotFoundResponse({
		description: 'Категория не найдена'
	})
	findOne(@Param('id') id: string) {
		return this.categoryService.findOne(+id)
	}
}

/*
	 @Get(':id')
	 findOne(@Param('id') id: string) {
		 return this.categoryService.findOne(+id);
	 }
 
	 @Patch(':id')
	 update(@Param('id') id: string, @Body() updateCategoryDto: UpdateCategoryDto) {
		 return this.categoryService.update(+id, updateCategoryDto);
	 }
 
	 @Delete(':id')
	 remove(@Param('id') id: string) {
		 return this.categoryService.remove(+id);
	 }
	 
	*/
