React.js Assignment: “CrediKhaata – Loan Ledger UI for Shopkeepers”


Objective:
Build a responsive web frontend for CrediKhaata, a simple credit tracking app for small shopkeepers. The app will
let them manage trusted customers, track credit sales, record repayments, and view dues — all from a single
dashboard.
Target User
A small shopkeeper using a desktop or mobile browser to track credit sold to trusted customers (like monthly
groceries or tailors keeping dues from customers).


Core Features
1. Login/Sign-Up
• Build a basic email-password auth flow (mocked or API-connected)
• Persist login state using localStorage or context


2. Dashboard View
• List of all customers with:
o Name
o Outstanding balance
o Next due date (calculated from loan data)
o Status: Up-to-date / Overdue

3. Customer Detail Page
• View all credit transactions for a customer:
o Item sold
o Loan amount
o Due date
o Repayment history (amount + date)
• Show remaining balance per loan


4. Forms
• Add new customer form
• Add loan (credit sale) form
• Record repayment form
• Validate forms on the client side



5. Overdue Highlighting
• On Dashboard or Loan List, visually highlight overdue loans in red or with an icon



Others
• Mobile-responsive design
• Export customer statement as a downloadable PDF (use jspdf or similar)
• Toasts/snackbars for success/error states
• Dark mode toggle



Tech Guidelines
• React (v18+)
• Use Hooks (no class components)
• State management: Context API or use State/use Reduce
• Axios/fetch for API calls
• CSS: Tailwind / Chakra / Styled Components / CSS Modules — your choice
• Form validation: use react-hook-form or any alternative