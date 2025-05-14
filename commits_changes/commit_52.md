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
