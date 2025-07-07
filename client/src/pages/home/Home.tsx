import TransactionList from '../../components/transaction/TransactionList.tsx'
import TransactionSum from '../../components/transaction/TransactionSum.tsx'

const Home = () => {
	return (
		<>
			<div className='mb-4'>
				<TransactionSum />
			</div>
			<TransactionList />
		</>
	)
}

export default Home
