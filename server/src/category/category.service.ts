import { Injectable } from '@nestjs/common'
import { plainToInstance } from 'class-transformer'
import { PrismaService } from '../prisma/prisma.service'
import { CategoryDto } from './dto/category.dto'
import { CreateCategoryDto } from './dto/create-category.dto'

@Injectable()
export class CategoryService {
	constructor(private readonly prisma: PrismaService) {}

	async create(dto: CreateCategoryDto) {
		const category = await this.prisma.category.create({
			data: dto
		})
		return plainToInstance(CategoryDto, category)
	}

	async findAll() {
		const category = await this.prisma.category.findMany()
		return plainToInstance(CategoryDto, category)
	}

	async findOne(id: number) {
		const category = await this.prisma.category.findFirst({
			where: {
				id
			}
		})
		return plainToInstance(CategoryDto, category)
	}
}
