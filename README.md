This is a GUI for my ledger program.
The project is written in Typescript and uses Next.js as a framework, with Shadcn UI for the UI (Radix + Tailwind CSS).

> This project is a work in progress, and is not ready for production.

## Warning
This project only works with [my ledger-cli implementation](https://github.com/AlissonSteffens/ledger-gui), which is a work in progress.
If you want to understand how my ledger-cli works, you can check the [documentation at the ledger-cli repository](https://github.com/AlissonSteffens/ledger-gui).


## How to use

you should create a .env file in the root directory with the following variables:

```
LEDGER_SCRIPT_PATH = path/to/ledger/script
LEDGER_TRANSACTIONS_FILE_PATH = path/to/ledger/transactions/file
```

## How to run

```
npm install
npm run dev
```
