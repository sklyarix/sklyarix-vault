import TransactionList from '../../components/transaction/TransactionList.tsx'
import TransactionSumMonth from '../../components/transaction/TransactionSumMonth.tsx'

const Home = () => {
	return (
		<>
			<div className="mb-4">
				<TransactionSumMonth />
			</div>
			<TransactionList />
		</>
	)
}

export default Home
