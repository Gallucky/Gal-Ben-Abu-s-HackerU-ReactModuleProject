# 📘 Gal Ben Abu's - HackerU - React Module Project - Changelog

## 📅 Updated to Commit #50-50.1 | Date: 11/05/2025

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

> `Nothing has been completed.`

## 🔄 Changes

- Fixed error of [`RouteGuard`](./src/components/App/Routes/RouteGuard.tsx) wrapping the entire `Route` component element instead of it's children element. [<u>`See More`</u>](./src/components/App/Routes/RoutesHandler.tsx)

### → <u>Added</u>

- Added [`App`](./src/components/App/) directory at [`src/components`](./src/components/).
- Added [`Routes`](./src/components/App/Routes/) directory at [`src/components/App`](./src/components/App/).
- Added [`RouteGuard`](./src/components/App/Routes/RouteGuard.tsx) component.
- Added [`RoutesHandler`](./src/components/App/Routes/RoutesHandler.tsx) component.

### → <u>Changed</u>

- The routes now have `RouteGuard` protection as needed [<u>`See More`</u>](./src/components/App/Routes/RoutesHandler.tsx).

### → <u>Removed</u>

- The `Routes` component was removed from [`App`](./src/App.tsx) component.

---

## Previous Commits

| `Date`       | `Commit #`                                                   |
| ------------ | ------------------------------------------------------------ |
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
