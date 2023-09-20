# Lexicon Builder
*Software Authored By [Jedd Dryden (Jaffa Cakes)](https://github.com/Jaffa-Cakes)*

## About

This project is a web application that allows users to compile a lexicon of words for a language from a variety of data sources and entries within those sources.
Data in this application is intended to be imported from a Google Spreadsheets document, edited analysed within the application, and then exported to [Fieldworks Language Explorer](https://software.sil.org/fieldworks/) where a dictionary can be created.

The application is intended to be used by linguists, initially developed during my time at [La Trobe University](https://www.latrobe.edu.au/) for [Andrew Tanner](https://github.com/akrtanner) to use in his work with the Woi Wurrung language.

Contributions are welcome, and can be made by forking this repository and submitting a pull request detailing your changes. New issues can also be created to report bugs or request new features.

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

#### Backing Up Data

The data for this application is stored in a PostgreSQL database.
To back up the data, you simply need to copy the `db-data` directory that was created when the application is first started.
This directory contains the database data files, and can be used to restore the database if needed.

You may want to zip this directory to reduce the size of the backup.
It is recommended that you do not backup the database while it is running to avoid any potential corruption.
Consider storing the backup in cloud storage like [Google Drive](https://www.google.com/drive/), [Dropbox](https://www.dropbox.com/), or [OneDrive](https://www.microsoft.com/onedrive) for maximum safety.

### Development

#### Pre-requisites

- [Node.js](https://nodejs.org/en/)
- [Docker](https://www.docker.com/)

#### Instructions

1. Clone the repository
2. Run `docker compose up -d db --build` to start the PostgreSQL database
3. Run `npm install` to install any dependencies
4. Run `npx prisma migrate deploy` to apply any database migrations that have not been applied, and run `npx prisma migrate dev` if you have made changes to schema.prisma
5. Run `npm run dev` to start the Next.JS development server
6. Access the application from [http://localhost:3000](http://localhost:3000)

The Next.JS portion of the application is not run in Docker for a few reasons.
Docker on Windows does not support hot reloading, and the Next.JS development server does not support hot reloading when run in Docker.
Next.JS in development mode in a container on Windows is very slow for some reason.

As I primarily use Windows, I have chosen to run the Next.JS development server outside of Docker.
If you are using Linux or MacOS and want to run the Next.JS development server in Docker, feel free to submit a pull request to add this functionality.

#### Before Committing

1. Run `npm run build` to to ensure the code compiles without errors
2. Run `npm run format` to format the code
3. Run `npx prisma format` to format the database schema file

## Notable Dependencies in Use

| Name                                          | Note              |
| --------------------------------------------- | ----------------- |
| [Next.JS](https://nextjs.org/)                | React Framework   |
| [React](https://reactjs.org/)                 | Interface Library |
| [Chakra UI](https://chakra-ui.com/)           | Component Library |
| [TypeScript](https://www.typescriptlang.org/) | Language          |
| [Prisma](https://www.prisma.io/)              | Database ORM      |
| [PostgreSQL](https://www.postgresql.org/)     | Database          |
| [Docker](https://www.docker.com/)             | Containerisation  |
| [Prettier](https://prettier.io/)              | Code Formatting   |
| [ESLint](https://eslint.org/)                 | Code Linting      |