# AI Log

This is a log of how I used AI in this assignment. I have included everything AI helped with. I can explain all the code I'm handing in. I asked Claude to keep track of where and how it helped me to make sure I could include the information in this document. I tried to use Claude as a study partner and tutor, not as someone to do the work for me. I asked it to explain things step by step, check my work and help me when I was stuck, so I could learn how the tools work.

**AI tools I used**

- **Claude** (chat)

---

## What I did myself

- I forked the repo, made the `workflow` branch and installed all the tools.
- I set up the `.env` file and registered a test user on the site.
- When the API was updated/corrected, I synced my fork so I got the fixes.
- I ran the tests and checked that ESLint, Prettier and the pre-commit hook worked.
- I decided where to put the tests:
  - Unit tests are next to the file they test, because the project is small.
  - End-to-end tests are in the `tests` folder, because they test the whole site, not one file.
- I wrote all the unit tests except the first `isActivePath` test, plus both login tests and the navigation test.
- I checked the AI's answers against the course material before using them.

---

## 1. Understanding new things

- **Date:** 2026-09-28 – 2026-10-14
- **Purpose:** I asked Claude to explain things from the course I didn't fully understand, like version numbers, environment variables, Husky, the Arrange/Act/Assert pattern, how to test `localStorage`, and how to get updates from the teachers' repo into my fork.
- **Outcome:** Only explanations. They helped me understand the course material.

## 2. Setting up the config files

- **Date:** 2026-09-30 – 2026-10-14
- **Purpose:** Help with the right way to write the config files for ESLint, Prettier, lint-staged, Vitest and Playwright, and the scripts in `package.json`.
- **Outcome:** Claude gave me the code. I compared it with the course material, changed what was needed and added it myself.

## 3. Fixing errors

- **Date:** 2026-10-05 – 2026-10-13
- **Purpose:** Help when something didn't work. For example, an ESLint error in `displayMessage.js`, Vitest trying to run the Playwright tests, problems pushing to GitHub, and the API giving errors.
- **Outcome:** Claude suggested fixes and I made the changes. One fix changed the site's own code: in `displayMessage.js` I changed how a variable is created so ESLint stopped complaining. The API errors went away after I synced my fork with the updated version.

## 4. Unit tests

- **Date:** 2026-10-05 – 2026-10-13
- **Purpose:** Help writing tests for `isActivePath` and `getUsername`.
- **Outcome:**
  - **From Claude:** the first `isActivePath` test (exact match). I asked Claude to explain each line, what it does and why it's needed, and used that to understand how a test is built.
  - **Written by me:** the other three `isActivePath` tests and both `getUsername` tests.

## 5. End-to-end tests

- **Date:** 2026-10-05 – 2026-10-14
- **Purpose:** Help writing Playwright tests for logging in and moving around the site.
- **Outcome:**
  - **Login tests:** I wrote them after Claude explained the course example to me step by step.
  - **Navigation test:** I wrote it with some help from VS Code auto-suggestions, and double-checked against course material. Claude reviewed and pointed out that the test should check for the "Venue details" heading, and I fixed it.

## 6. README and this log

- **Date:** 2026-10-14
- **Purpose:** Help to include the right sections and information the README and this log.
- **Outcome:** Claude made a first draft. I read through it and changed a lot to fit my project and style.

---

## Summary

AI helped me understand the tools faster and get past errors I was stuck on. I need a lot of repetition and many explanations to get there, and I still use docs and notes when I write tests. I learn best by doing things many times, and that’s how I worked on this assignment.
