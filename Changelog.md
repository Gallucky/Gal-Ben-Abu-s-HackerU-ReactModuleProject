# 📘 Gal Ben Abu's - HackerU - React Module Project - Changelog

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

---

## Previous Commits

| `Date`       | `Commit #`                                                   |
| ------------ | ------------------------------------------------------------ |
| `09/06/2025` | [`80`](./commits_changes/commit_80.md)                       |
| `09/06/2025` | [`79`](./commits_changes/commit_79.md)                       |
| `08/06/2025` | [`78`](./commits_changes/commit_78.md)                       |
| `08/06/2025` | [`77`](./commits_changes/commit_77.md)                       |
| `07/06/2025` | [`76`](./commits_changes/commit_76.md)                       |
| `06/06/2025` | [`75`](./commits_changes/commit_75.md)                       |
| `03/06/2025` | [`74`](./commits_changes/commit_74.md)                       |
| `02/06/2025` | [`73`](./commits_changes/commit_73.md)                       |
| `01/06/2025` | [`72`](./commits_changes/commit_72.md)                       |
| `31/05/2025` | [`71`](./commits_changes/commit_71.md)                       |
| `30/05/2025` | [`70`](./commits_changes/commit_70.md)                       |
| `29/05/2025` | [`69`](./commits_changes/commit_69.md)                       |
| `28/05/2025` | [`68`](./commits_changes/commit_68.md)                       |
| `28/05/2025` | [`67`](./commits_changes/commit_67.md)                       |
| `27/05/2025` | [`66.1`](./commits_changes/commit_66.1.md)                   |
| `25/05/2025` | [`66`](./commits_changes/commit_66.md)                       |
| `24/05/2025` | [`65`](./commits_changes/commit_65.md)                       |
| `24/05/2025` | [`64`](./commits_changes/commit_64.md)                       |
| `23/05/2025` | [`63`](./commits_changes/commit_63.md)                       |
| `22/05/2025` | [`62`](./commits_changes/commit_62.md)                       |
| `21/05/2025` | [`61`](./commits_changes/commit_61.md)                       |
| `20/05/2025` | [`60`](./commits_changes/commit_60.md)                       |
| `20/05/2025` | [`59`](./commits_changes/commit_59.md)                       |
| `19/05/2025` | [`58`](./commits_changes/commit_58.md)                       |
| `18/05/2025` | [`57`](./commits_changes/commit_57.md)                       |
| `18/05/2025` | [`56`](./commits_changes/commit_56.md)                       |
| `17/05/2025` | [`55`](./commits_changes/commit_55.md)                       |
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
