## 📅 Updated to Commit #81 | Date: 09/06/2025

### 🔗 [Open TODO List](./todo-list.md)

### 📝 General Notes

```
Fixing bugs and styling issues.
Making sure that the spinners while loading / fetching data will be shown and based on the result the data / a message will be shown.
```

### ✅ Completed

- Implemented loading spinners across pages that fetch card data to improve user experience while data is being retrieved.
- Fixed a bug in the [`Login Page`](./src/pages/Login.page.tsx) where the password field was not correctly masked.
- Enhanced the user roles display on the [`About Page`](./src/pages/About/About.page.tsx) to indicate the user's current role.

### ➕ Added

- Added loading state management with `CustomSpinner` to the [`Home Page`](./src/pages/Home.page.tsx), [`Favorites Page`](./src/pages/Favorites.page.tsx), and [`UserCreatedCards Page`](./src/pages/UserCreatedCards/UserCreatedCards.page.tsx) to provide feedback during data fetching.
- Created [`commit_80.md`](./commits_changes/commit_80.md) to document previous changes.

### 🔄 Changed

> **Styling & UX:**

- In [`UserRoleCard Component`](./src/pages/About/Sections/UserRoles/UserRoleCard.tsx), added a "(Current)" label to highlight the active user's role and prevented text selection on the role badge.
- Refined the descriptions for "Guest" and "Admin" roles in the [`UserRoles Component`](./src/pages/About/Sections/UserRoles/UserRoles.section.tsx) for better clarity and adjusted grid spacing.
- Fixed a minor visual overflow issue with the phone icon in the [`Card Component`](./src/components/card/Card.tsx).

> **Functionality & Logic:**

- Modified the `RouteGuard` for the [`CardDetails Page`](./src/pages/CardDetails.page.tsx) in [`RoutesHandler Component`](./src/components/App/Routes/RoutesHandler.tsx) to adjust access permissions.
- Disabled the account information fields in the [`Profile Page`](./src/pages/Profile/Profile.page.tsx) by passing a `disabled` prop to the [`AccountInfo Component`](./src/pages/Registration/AccountInfo.section.tsx).
- Made the layout of fields in [`AccountInfo Component`](./src/pages/Registration/AccountInfo.section.tsx) more flexible.

### 🗑️ Deleted

- Removed a redundant `console.log` from the [`UserRoleCard Component`](./src/pages/About/Sections/UserRoles/UserRoleCard.tsx) to clean up the codebase.

### 🏷️ Renamed / Moved

> `No files renamed or moved.`
