import React, { useState } from 'react';
import NewExpense from './components/NewExpense/NewExpense';
import Expenses from './components/Expenses/Expenses';


const DUMMY_EXPENSES = [
  {
    id: 'e1',
    title: "Messinger Funeral Services",
    amount: 5000,
    date: new Date(2020, 7, 14),
  },
  { id: 'e2', title: "Viewing Hall", amount: 2500, date: new Date(2021, 2, 12) },
  {
    id: 'e3',
    title: "Transportation",
    amount: 1000,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: "Canopy",
    amount: 2000,
    date: new Date(2021, 5, 12),
  },
];
const App = () => {

  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);
  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };
  // return React.createElement(
  //   'div',
  //   {},
  //   React.createElement('h2', {}, "Let's get started!"),
  //   React.createElement(Expenses, { items: expenses })
  // );

  return (
    <div>
      <h2>Emmanuel Obiesie Nwadiogbu's Funeral Services</h2>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;