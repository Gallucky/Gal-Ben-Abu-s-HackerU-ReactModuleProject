## 📅 Updated to Commit #51.2 | Date: 12/05/2025

## 🛠️ In Progress

- Working on the actual login and registration logic.

## 🎯 Todo

- [ ] Fix the navbar links not working on [`render.com`](https://dashboard.render.com/).
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

> `Nothing has been completed.`

## 🔄 Changes

- Created a [`render.com`](https://dashboard.render.com/) static project.
- No longer using the `Web Service` project that I used previously.
- Fixed the links in the [`Navbar`](/src/components/layout/CustomNavbar.tsx) not working by adding a check if there is a user logged in and the requirements in [`RouteGuard`](./src/components/App/Routes/RouteGuard.tsx) component are for guests only.<br>
  If that check was false we check if the requirements for guest only is provided because:
  - If guest only was provided then there is no user.
  - If guest only was not provided then there is user and skipping both checks.

### → <u>Added</u>

- Added layout prop for the `Pagination` at [`CardsContainer`](./src/components/card/CardsContainer.tsx).

### → <u>Changed</u>

- Changed the styling a bit at [`CardsContainer`](./src/components/card/CardsContainer.tsx)

### → <u>Removed</u>

- The `Routes` component was removed from [`App`](./src/App.tsx) component.
