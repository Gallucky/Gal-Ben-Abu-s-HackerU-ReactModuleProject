# 📘 Gal Ben Abu's - HackerU - React Module Project - Changelog

## 📅 Updated to Commit #55 | Date: 17/05/2025

## 🛠️ In Progress

- Working on the registration `confirmPassword` validation and error messages and colors.

## 🎯 Todo

- [x] Fix the navbar links not working on [`render.com`](https://dashboard.render.com/).
- [ ] To complete the work on the `screenSlice`.
- [ ] Create custom hooks for auth, screen view port etc...
- [ ] Fix the responsive mobile styling issues.

- [x] Add the signout link in the navbar.
- [x] Registration page
  - [x] Layout creation.
  - [x] Styling the layout.
  - [x] Fix styling bugs.
  - [x] Testing and checking logic.
  - [x] Adding toast of success and error.
  - [x] Validation.
- [x] Global State
  - [x] Creating a global state for the user data.
  - [x] Saving the user data while logged in.
  - [x] Conditional rendering the appropriate links while logged in or not.
- [x] Fixing any style issues or bugs.
- [ ] Profile Page - Create a page with some of the user's data.

## ✅ Completed

- [`Login Page`](./src/pages/Login.page.tsx) and all of it's logic completed.
- [`Registration Page`](./src/pages/Registration.page.tsx) and most of it's logic including auto login.

## 🔄 Changes

### → <u>Added</u>

- [`SearchBox`](./src/components/other/SearchBox.tsx)'s icon color for dark mode was added at [`SearchBox.css`](./src/styles/SearchBox.css).
- [`src/hooks`](./src/hooks/) directory to contain custom hooks.
- [`useTimer`](./src/hooks/useTimer.ts) creating a timer for components to have a `spinner` while waiting.
- [`CustomSpinner`](./src/components/utils/CustomSpinner.tsx) component. <br><br>
- `TailwindShadeColor` — added to [`color.t`](./src/types/color.t.ts)
- `HexColor` — added to [`color.t`](./src/types/color.t.ts)
- `RGBColor` — added to [`color.t`](./src/types/color.t.ts)
- `RGBAColor` — added to [`color.t`](./src/types/color.t.ts)
- `HSLColor` — added to [`color.t`](./src/types/color.t.ts)
- `HSLAColor` — added to [`color.t`](./src/types/color.t.ts)

### → <u>Changed</u>

- `LoginFormData` and `RegisterFormData` were transferred from [`Login Page`](./src/pages/Login.page.tsx) and [`Registration Page`](./src/pages/Registration.page.tsx) respectfully to [`useAuth`](./src/hooks/useAuth.ts)
- `Color` - changed to contain all of the different color types that were added at [`color.t`](./src/types/color.t.ts).

### → <u>Removed</u>

> `Nothing has been removed.`

---

## Previous Commits

| `Date`       | `Commit #`                                                   |
| ------------ | ------------------------------------------------------------ |
| `16/05/2025` | [`54`](./commits_changes/commit_54.md)                       |
| `14/05/2025` | [`53`](./commits_changes/commit_53.md)                       |
| `13/05/2025` | [`52`](./commits_changes/commit_52.md)                       |
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
