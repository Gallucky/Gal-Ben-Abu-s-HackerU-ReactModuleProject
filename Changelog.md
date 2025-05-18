# 📘 Gal Ben Abu's - HackerU - React Module Project - Changelog

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

---

## Previous Commits

| `Date`       | `Commit #`                                                   |
| ------------ | ------------------------------------------------------------ |
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
