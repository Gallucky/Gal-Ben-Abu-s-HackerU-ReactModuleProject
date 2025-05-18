## 📅 Updated to Commit #56 | Date: 18/05/2025

## 🛠️ In Progress

- Working on the registration `confirmPassword` validation and error messages and colors.

## 🎯 Todo

- [ ] To complete the work on the `screenSlice`.
- [ ] Create custom hooks for auth, screen view port etc...
- [x] Fix the responsive mobile styling issues.
- [ ] Profile Page - Create a page with some of the user's data.

## ✅ Completed

- Completed the `confirmPassword` validation and error messages and colors.
- Updated the [`useAuth`](./src/hooks/useAuth.tsx) hook registration logic so that errors messages will be more specific and clear.

## 🔄 Changes

- Fixed the validations of `confirmPassword` field at [`Registration Page`](./src/pages/Registration.page.tsx).

### → <u>Added</u>

- Added the support for the whole `useForm` hook to the [`CheckBox`](./src/components/Checkbox.tsx) component.
- Added more specific error messages when there is an axios error in the [`Registration`](./src/pages/Registration.page.tsx) page.
- Added loading [`CustomSpinner`](./src/components/CustomSpinner.tsx) to the [`CardsContainer`](./src/components/CardsContainer.tsx) component when sending an empty array while waiting for the data to be fetched.

### → <u>Changed</u>

> `Nothing has been changed.`

### → <u>Removed</u>

> `Nothing has been removed.`
