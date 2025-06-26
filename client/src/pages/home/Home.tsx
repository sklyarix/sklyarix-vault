import TransactionList from "../../components/transaction/TransactionList.tsx";
import TransactionSumMonth from "../../components/transaction/TransactionSumMonth.tsx";

const Home = () => {
  console.log("API URL:", process.env.API_URL);
  return (
    <>
      <div className="mb-4">
        <TransactionSumMonth />
      </div>
      <TransactionList />
    </>
  );
};

export default Home;
