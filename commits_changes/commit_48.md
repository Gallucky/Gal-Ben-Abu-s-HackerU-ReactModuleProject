## 📅 Updated to Commit #48 | Date: 09/05/2025

## 🛠️ In Progress

- Working on the actual login and registration logic.

## 🎯 Todo

- [ ] Registration page
  - [x] Layout creation.
  - [x] Styling the layout.
  - [x] Fix styling bugs.
  - [ ] Testing and checking logic.
  - [ ] Adding toast of success and error.
  - [x] Validation.
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

- Added image preview feature in the registration page.
- Added [`TUser`](./src/types/user.t.ts) type for defining a users data.
- Added [`store`](./src/store/) directory.
- Added [`store.ts`](./src/store/store.ts) the bigPie.
- Added [`userSlice.ts`](./src/store/userSlice.ts) manages the global logged in user's data.
- Added [`searchSlice.ts`](./src/store/searchSlice.ts) manages the searches in the project.

### → <u>Changed</u>

- [`CustomNavbar`](./src/components/layout/CustomNavbar.tsx) merged the mobile and desktop versions of the `signup`, `login` and the `DarkModeToggle` links into one instance.
  <br>
  also made classes to the `CustomNavbar` and the `Navbar` collapse.
- [`Login.page.tsx`](./src/pages/Login.page.tsx) to get the user's data and expand the logic further.

### → <u>Removed</u>

- `Test.tsx` file that was located at: [`components`](./src/components/) directory.
- `text.txt` file that was located at: [`components`](./src/components/) directory.
