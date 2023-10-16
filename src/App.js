import React from "react";
import Expenses from "./components/Expenses";
import expenses from "./data/expenses";

function App() {
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