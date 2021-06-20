import './App.css';
import Profile from './Task1/Profile.js';
import user from './Task1/user.json';

import Statistics from './Task2/Statistics';
import statisticalData from './Task2/statistical-data.json';

import FriendsList from './Task3/FriendsList';
import friends from './Task3/friends.json';

import TransactionHistory from './Task4/Transactions';
import transactions from './Task4/transactions.json';

function App() {
  return (
    <div className="App">
      <h2> Task 1</h2>      
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <h2> Task 2</h2>  
      <Statistics title="Upload stats" stats={statisticalData} />
      <Statistics stats={statisticalData} />
      <h2> Task 3</h2>  
      <FriendsList friends={friends} />
      <h2> Task 4</h2>  
      <TransactionHistory items={transactions} />
    </div>
  );
}

export default App;
