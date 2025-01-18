This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

# Project Overview

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.  
You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses `next/font` to automatically optimize and load **Geist**, a new font family for Vercel.

## Overview

This project is a personal reusable React table component built using the `@tanstack/react-table` library. It is designed to be highly customizable and easy to integrate into any React application. The table supports features such as sorting, filtering, and pagination.

## Key Features

- **Sorting**: Click on column headers to sort data in ascending or descending order.
- **Filtering**: Filter data by selecting a column and entering a filter value.
- **Pagination**: Navigate through data pages using previous and next buttons.
- **Customizable Columns**: Define columns with custom headers, cell renderers, and more.
- **Dropdown Actions**: Perform actions on table rows using dropdown menus.

## File Structure

- `app/page.tsx`: Main entry point for the application, rendering the user data table.
- `app/food/page.tsx`: Renders the food data table.
- `components/Data-table.tsx`: Reusable data table component with sorting, filtering, and pagination.
- `components/Users/columns.tsx`: Column definitions for the user data table.
- `components/Foods/columns.tsx`: Column definitions for the food data table.
- `lib/data.ts`: Sample data for users and foods.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - Learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - An interactive Next.js tutorial.
- [Next.js GitHub Repository](https://github.com/vercel/next.js) - Your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/) from the creators of Next.js. Check out the [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
