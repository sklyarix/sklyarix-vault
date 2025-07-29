import TotalExpensesMonth from '../../components/transaction/TotalExpensesMonth.tsx'
import TransactionList from '../../components/transaction/TransactionList.tsx'

const Home = () => {
	return (
		<>
			<div className='mb-4'>
				<TotalExpensesMonth />
			</div>
			<TransactionList />
		</>
	)
}

export default Home
