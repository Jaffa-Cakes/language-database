# Lexicon Builder
*Software Authored By [Jedd Dryden (Jaffa Cakes)](https://github.com/Jaffa-Cakes)*

## About

This project is a web application that allows users to compile a lexicon of words for a language from a variety of data sources and entries within those sources.
Data in this application is intended to be imported from a Google Spreadsheets document, edited analysed within the application, and then exported to (Fieldworks Language Explorer)[https://software.sil.org/fieldworks/] where a dictionary can be created.

## Running

### Production

#### Pre-requisites

- [Docker](https://www.docker.com/)

#### Instructions

1. Clone the repository
2. Run `docker compose up --build` in the root directory
3. Access the application from [http://localhost:3000](http://localhost:3000)

If this is the first time this application is being started, you will need to import your spreadsheet data containing your language data.
This can be done by navigating to [http://localhost:3000/import](http://localhost:3000/import) and uploading each sheet in the `.csv` format when exported from Google Sheets.

### Development

#### Pre-requisites

- [Node.js](https://nodejs.org/en/)
- [Docker](https://www.docker.com/)

#### Instructions

1. Clone the repository
2. Run `docker compose up -d db --build` to start the PostgreSQL database
3. Run `npm install` to install any dependencies
4. Run `npm run dev` to start the Next.JS development server
5. Access the application from [http://localhost:3000](http://localhost:3000)

#### Before Committing

1. Run `npm run build` to to ensure the code compiles without errors
2. Run `npm run format` to format the code

## Notable Dependencies in Use

| Name | Note |
| --- | --- |
| [Next.JS](https://nextjs.org/) | React Framework |
| [React](https://reactjs.org/) | Interface Library |
| [Chakra UI](https://chakra-ui.com/) | Component Library |
| [TypeScript](https://www.typescriptlang.org/) | Language |
| [Prisma](https://www.prisma.io/) | Database ORM |
| [PostgreSQL](https://www.postgresql.org/) | Database |
| [Docker](https://www.docker.com/) | Containerisation |
| [Prettier](https://prettier.io/) | Code Formatting |
| [ESLint](https://eslint.org/) | Code Linting |