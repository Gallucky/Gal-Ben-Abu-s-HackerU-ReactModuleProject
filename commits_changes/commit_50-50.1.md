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
