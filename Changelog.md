# 📘 Gal Ben Abu's - HackerU - React Module Project - Changelog

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

---

## Previous Commits

| `Date`       | `Commit #`                                                   |
| ------------ | ------------------------------------------------------------ |
| `09/05/2025` | [`47`](./commits_changes/commit_47.md)                       |
| `09/05/2025` | [`46`](./commits_changes/commit_46.md)                       |
| `08/05/2025` | [`45`](./commits_changes/commit_45.md)                       |
| `07/05/2025` | [`44`](./commits_changes/commit_44.md)                       |
| `06/05/2025` | [`43`](./commits_changes/commit_43.md)                       |
| `01/05/2025` | [`42`](./commits_changes/commit_42.md)                       |
| `30/04/2025` | [`41`](./commits_changes/commit_41.md)                       |
| `30/04/2025` | [`40.2`](./commits_changes/commit_40/commit_40.2.md)         |
| `30/04/2025` | [`40 - 40.1`](./commits_changes/commit_40/commit_40-40.1.md) |
| `29/04/2025` | [`39`](./commits_changes/commit_39.md)                       |
| `29/04/2025` | [`38`](./commits_changes/commit_38.md)                       |
