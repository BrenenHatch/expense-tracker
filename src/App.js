import React from "react";
import Expenses from "./components/Expenses/Expenses";
import expenses from "./data/expenses";

const App = () => {
  return (
    <div>
      <h2>Let's get started!</h2>
      <Expenses items={expenses} />
    </div>
  );
}

// function App() {
//   return React.createElement('div', {}, React.createElement('h2', {}, "Let's get started!"), React.createElement(Expenses, {items: expenses})
// )};
 
export default App;