# 📘 Gal Ben Abu's - HackerU - React Module Project - Changelog

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

---

## Previous Commits

| `Date`       | `Commit #`                                                   |
| ------------ | ------------------------------------------------------------ |
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
