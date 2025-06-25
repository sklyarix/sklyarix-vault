export interface TransactionModel {
	id: number;
	type: 'INCOME' | 'EXPENSE';
	amount: number;
	date: string;
	comment?: string;
	categoryId?: number;
}