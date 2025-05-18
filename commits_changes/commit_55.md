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
