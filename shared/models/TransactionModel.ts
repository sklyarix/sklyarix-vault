export interface TransactionModel {
	id: number;
	type: 'income' | 'expense';
	amount: number;
	date: string;
	comment?: string;
	categoryId?: number;
}

export interface CreateDataTransaction {
	type: 'expense' | 'income'
	amount: number
	date: string
	comment?: string
	categoryId?: number
}

export interface TransactionModelUpdate {
	id?: number;
	type?: 'income' | 'expense';
	amount?: number;
	date?: string;
	comment?: string;
	categoryId?: number;
}

