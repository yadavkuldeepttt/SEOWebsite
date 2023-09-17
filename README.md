
# Expense Tracker App

Welcome to the Expense Tracker App! This application allows you to keep track of your expenses, add transactions, view transaction history, calculate your balance, and manage your finances effectively.

## Features

- Add transactions with details like amount, description, and category.
- View transaction history to keep track of your expenses.
- Calculate your balance based on your income and expenditures.

## Technologies Used

- React: A JavaScript library for building user interfaces.
- Context API: A state management solution for sharing data across components.


## Getting Started

1. Clone the repository:

git clone https://github.com/your-username/expense-tracker.git
cd expense-tracker

2. Install dependencies:

npm install

3. Run the application:

npm run dev

4. Open your browser and navigate to `http://localhost:3000` to use the Expense Tracker app.

## Usage

1. Add a Transaction:

   - Click on the "Add Transaction" button.
   - Enter the transaction details, such as amount, description, and category.
   - Select whether it's an income or expense.
   - Click "Add Transaction" to add the transaction.

2. View Transaction History:

   - The transaction history displays all your added transactions.
   - Each transaction includes its amount, description, category, and type (income or expense).

3. Balance Calculation:

   - The balance is calculated based on your total income and total expenses.
   - Your balance gives you an overview of how much money you have left after deducting your expenses.

## Context API

The Expense Tracker app uses the Context API for state management. This enables data sharing between components without prop drilling. The `TransactionContext` provides state and actions for adding transactions.

## Contributing

Contributions are welcome! Feel free to submit pull requests to improve the app.

