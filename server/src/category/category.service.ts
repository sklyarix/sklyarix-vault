import { Injectable } from '@nestjs/common'
import { PrismaService } from '../prisma/prisma.service'
import { CreateCategoryDto } from './dto/create-category.dto'

@Injectable()
export class CategoryService {
	constructor(private readonly prisma: PrismaService) {}

	create(createCategoryDto: CreateCategoryDto) {
		return this.prisma.category.create({
			data: createCategoryDto
		})
	}

	findAll() {
		return this.prisma.category.findMany()
	}

	findOne(id: number) {
		return this.prisma.category.findFirst({
			where: {
				id
			}
		})
	}

	/*
		
	
		update(id: number, updateCategoryDto: UpdateCategoryDto) {
			return `This action updates a #${id} category`;
		}
	
		remove(id: number) {
			return `This action removes a #${id} category`;
		}
		
	 */
}
