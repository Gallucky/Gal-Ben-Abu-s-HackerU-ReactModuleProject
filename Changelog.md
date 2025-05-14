# 📘 Gal Ben Abu's - HackerU - React Module Project - Changelog

## 📅 Updated to Commit #52 | Date: 13/05/2025

## 🛠️ In Progress

- Working on the actual login and registration logic.
- On the top 4 todos...

## 🎯 Todo

- [x] Fix the navbar links not working on [`render.com`](https://dashboard.render.com/).
- [ ] To complete the work on the `screenSlice`.
- [ ] Create custom hooks for auth, screen view port etc...
- [ ] Fix the responsive mobile styling issues.

- [ ] Add the signout link in the navbar.
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

- Fixed the navbar links not working on [`render.com`](https://dashboard.render.com/).

## 🔄 Changes

### → <u>Added</u>

- Added the isUserLoaded property in the global state at the [`userSlice`](./src/store/userSlice.ts).
- Added the removal of the token from the `localStorage` when calling the property in the global state at the [`userSlice`](./src/store/userSlice.ts).
- Added the `SignOut` link at the [`CustomNavbar`](./src/components/layout/CustomNavbar.tsx) component.

### → <u>Changed</u>

- Transferred the auto sign-in / remember mer feature from [`Home Page`](./src/pages/Home.page.tsx) to [`App.tsx`](./src/App.tsx) component.

### → <u>Removed</u>

> `Nothing has been removed.`

---

## Previous Commits

| `Date`       | `Commit #`                                                   |
| ------------ | ------------------------------------------------------------ |
| `12/05/2025` | [`51-51.2`](./commits_changes/commit_51-51.2.md)             |
| `11/05/2025` | [`50-50.1`](./commits_changes/commit_50-50.1.md)             |
| `10/05/2025` | [`49`](./commits_changes/commit_49.md)                       |
| `09/05/2025` | [`48`](./commits_changes/commit_48.md)                       |
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
