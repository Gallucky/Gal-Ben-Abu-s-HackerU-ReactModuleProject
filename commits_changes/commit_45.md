## 📅 Updated to Commit #45 | Date: 08/05/2025

## 🛠️ In Progress

- Continue work of the registration / sign-up page.
- Working on fixing the styling bugs.

## 🎯 Todo

- [ ] Registration page
  - [x] Layout creation.
  - [x] Styling the layout.
  - [ ] Fix styling bugs.
  - [ ] Testing and checking logic.
  - [ ] Adding toast of success and error.
  - [ ] Validation.
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

- Added [`tailwindSizeString.t`](./src/types/tailwind/tailwindSizeString.t.ts) type file there is a type which is exported and defines the tailwind `size` class logic.
- Added [`register.joi`](./src/validations/register.joi.ts) validation file for the checking of the registration fields validity.

### → <u>Changed</u>

- [`CheckBox`](./src/components/utils/CheckBox.tsx) now has support for text size and the checkbox size itself.
- Added [`textSize`](./src/utils/textSize.ts) moved the constants to be with the type in the type file itself and export from there and added the import to this file.
- Added [`sizeUnit`](./src/types/sizeUnit.t.ts) moved the constants to be with this file type itself and export it.

### → <u>Removed</u>

> `Nothing has been removed.`
