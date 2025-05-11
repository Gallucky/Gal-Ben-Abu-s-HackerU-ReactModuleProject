## 📅 Updated to Commit #49 | Date: 10/05/2025

## 🛠️ In Progress

- Working on the actual login and registration logic.

## 🎯 Todo

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

- Login logic is now completed.

## 🔄 Changes

### → <u>Added</u>

- Added comments explaining the `tailwindTextSizeValidator` method in [`textSize`](./src/utils/textSize.ts).
- Added documentation comments in [`Home Page`](./src/pages/Home.page.tsx).
- Added the [`Token`](./src/types/token.t.ts) type.
- Added the `Remember Me` feature and the logic is at [`Home Page`](./src/pages/Home.page.tsx).
- Added the `shownWelcomeBackMessage` with it's method `showWelcomeBackMessage` in the [`userSlice.ts`](./src/store/userSlice.ts) file.

### → <u>Changed</u>

- Renamed `setCountries` to `setCards` at [`Home Page`](./src/pages/Home.page.tsx).
- Renamed `getCountries` to `getCards` at [`Home Page`](./src/pages/Home.page.tsx).
- Renamed `TCountryData` to `TCardData` at [`Home Page`](./src/pages/Home.page.tsx).
- Renamed `getCountriesRelevantCardData` to `getRelevantCardData` at [`Home Page`](./src/pages/Home.page.tsx).
- Moved `TCardData` from [`Home Page`](./src/pages/Home.page.tsx) to [`card.t.ts`](./src/types/card.t.ts).

### → <u>Removed</u>

- Removed the `console.log` lines that were used for checks in [`textSize`](./src/utils/textSize.ts).
- Removed `TCardData` type from [`Home Page`](./src/pages/Home.page.tsx).
- Remove `console.log` lines that were used for checks in [`Home Page`](./src/pages/Home.page.tsx).
- Remove `console.log` lines that were used for checks in [`Login Page`](./src/pages/Login.page.tsx).
