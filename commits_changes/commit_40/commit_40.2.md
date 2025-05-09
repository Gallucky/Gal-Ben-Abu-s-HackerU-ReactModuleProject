## 📅 Updated to Commit #40.2 | Date: 30/04/2025

## 🛠️ In Progress

## 🎯 Todo

- Registration page
  - Layout creation.
  - Styling the layout.
  - Testing and checking logic.
  - Adding toast of success and error.
- Global State
  - Creating a global state for the user data.
  - Saving the user data while logged in.
  - Conditional rendering the appropriate links while logged in or not.
- Fixing any style issues or bugs.
- Profile Page - Create a page with some of the user's data.

## ✅ Completed

> `Nothing has been completed.`

## 🔄 Changes

### → <u>Added</u>

- `PageWrapper.css` at the [`styles`](./src/styles) directory.<br>
  Migrated all of the styling of login page to here.
- [`PageWrapper`](./src/components/PageWrapper.tsx) that will include the base structure of the pages where there is a form in the center of the screen.

### → <u>Changed</u>

- The names of the styling classes that were in the `Login.page.css` and were moved to `PageWrapper.css` to be more general.

### → <u>Removed</u>

- `Login.page.css` at the [`styles/pages`](./src/styles/pages) directory.
