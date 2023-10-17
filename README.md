# Lexicon Builder
*Software Authored by [Jedd Dryden (Jaffa Cakes)](https://github.com/Jaffa-Cakes)*

## About

This project is a web application that allows users to compile a lexicon of words for a language from various data sources and entries within those sources.
Data in this application is intended for import from a Google Sheets document, for editing and analysis within the application, and then for export to [Fieldworks Language Explorer](https://software.sil.org/fieldworks/), where a dictionary can be created.

The application is intended for use by linguists and was initially developed during my time at [La Trobe University](https://www.latrobe.edu.au/) for [Andrew Tanner](https://github.com/akrtanner) to use in his work on the Woi Wurrung language.

Contributions are welcome and can be made by forking this repository and submitting a pull request detailing your changes. New issues may also be created to report bugs or request new features.

## Running

### Production

#### Prerequisites

- [Docker](https://www.docker.com/)

#### Instructions

1. Clone the repository.
2. Run `docker compose up --build` in the root directory.
3. Access the application at [http://localhost:3000](http://localhost:3000).

If this is the first time you are starting the application, you will need to import your spreadsheet data containing language information. Navigate to [http://localhost:3000/import](http://localhost:3000/import) and upload each sheet in `.csv` format, exported from Google Sheets.

#### Backing Up Data

Data for this application is stored in a PostgreSQL database.
To back up your data, simply copy the `db-data` directory that is created when the application is first started. This directory contains the database files and can be used to restore the database if needed.

You may want to compress this directory to reduce the backup size.
Do not back up the database while it is running, to avoid potential corruption.
For maximum safety, consider storing the backup in cloud storage, such as [Google Drive](https://www.google.com/drive/), [Dropbox](https://www.dropbox.com/), or [OneDrive](https://www.microsoft.com/onedrive).

### Development

#### Prerequisites

- [Node.js](https://nodejs.org/en/)
- [Docker](https://www.docker.com/)

#### Instructions

1. Clone the repository.
2. Run `docker compose up -d db --build` to start the PostgreSQL database.
3. Run `npm install` to install dependencies.
4. Run `npx prisma migrate deploy` to apply any pending database migrations, and `npx prisma migrate dev` if you have made schema changes.
5. Run `npm run dev` to start the Next.js development server.
6. Access the application at [http://localhost:3000](http://localhost:3000).

The Next.js portion of the application is not run in Docker for several reasons:
- Docker on Windows lacks hot-reloading support.
- The Next.js development server doesn't support hot reloading when run in Docker.
- Next.js in development mode in a Docker container on Windows performs poorly.

Since I primarily use Windows, I chose to run the Next.js development server outside Docker. If you are using Linux or macOS and wish to run the Next.js development server in Docker, feel free to submit a pull request to add this functionality.

#### Before Committing

1. Run `npm run build` to ensure the code compiles without errors.
2. Run `npm run format` to format the code.
3. Run `npx prisma format` to format the database schema file.

#### AI Chat Prompt for Developers

If you are developing this application, you may find it helpful to use an AI chat (such as ChatGPT) during development. I would recommend pasting the following prompt into the chat to initialise it with some useful information:

```
I am developing a Nextj.js application and will ask you questions to help me in my endeavour. For context, the project uses the following technologies:
- Next.js
- React
- Chakra UI
- TypeScript
- Prisma
- PostgreSQL
- Docker
- Prettier
- ESLint

A breif description of the application:
This project is a web application that allows users to compile a lexicon of words for a language from various data sources and entries within those sources.
```

## Notable Dependencies in Use

| Name                                          | Note              |
| --------------------------------------------- | ----------------- |
| [Next.js](https://nextjs.org/)                | React Framework   |
| [React](https://reactjs.org/)                 | Interface Library |
| [Chakra UI](https://chakra-ui.com/)           | Component Library |
| [TypeScript](https://www.typescriptlang.org/) | Language          |
| [Prisma](https://www.prisma.io/)              | Database ORM      |
| [PostgreSQL](https://www.postgresql.org/)     | Database          |
| [Docker](https://www.docker.com/)             | Containerization  |
| [Prettier](https://prettier.io/)              | Code Formatting   |
| [ESLint](https://eslint.org/)                 | Code Linting      |
