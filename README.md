# Workflow repo for the CA

This is the Holidaze venue booking site from the Noroff Workflow course assignment. In this assignment I set up tools that help with formatting and checking code.

## Built with

- HTML, JavaScript and Tailwind CSS
- ESLint (finds errors in the code)
- Prettier (formats the code)
- Husky and lint-staged (check the code before each commit)
- Vitest (unit tests)
- Playwright (end-to-end tests that test the site in a browser)
- Noroff API v2

## How to get started

1. Clone the repo and install everything:

   ```bash
   npm install
   npx playwright install
   ```

2. Make a copy of `.env.example` and name it `.env`. Register a test user on the site, then put the email and password in the `.env` file:

   ```
   TEST_USER_EMAIL=
   TEST_USER_PASSWORD=
   ```

3. Start the site:

   ```bash
   npm start
   ```

## Scripts

| Script             | What it does                                       |
| ------------------ | -------------------------------------------------- |
| `npm start`        | Starts the site on port 5500                       |
| `npm run dev`      | Updates the Tailwind CSS when you make changes     |
| `npm run test`     | Runs the unit tests                                |
| `npm run test:e2e` | Runs the end-to-end tests                          |
| `npm run prepare`  | Sets up Husky (runs by itself after `npm install`) |

## Tests

- **Unit tests** are next to the file they test, in the `js` folder. They end with `.test.js`.
- **End-to-end tests** are in the `tests` folder. They end with `.spec.js`. They need the test user in `.env` to work. Playwright starts the site by itself when the tests run.

## AI use

I used AI tools during this assignment. See [AI_LOG.md](AI_LOG.md) for details.

## Credits

- Starter code (the Holidaze site): Noroff
- Workflow setup, tests and documentation: evamaran
