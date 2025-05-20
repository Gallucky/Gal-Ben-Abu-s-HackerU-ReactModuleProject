# 📘 Gal Ben Abu's - HackerU - React Module Project - Changelog

## 📅 Updated to Commit #59 | Date: 20/05/2025

## 🛠️ In Progress

- Working on the cards like and dislike functionality.

## 🎯 Todo

- [ ] To complete the work on the [`screenSlice`](src/store/screenSlice.ts).
- [ ] Create custom hooks for auth, screen view port etc...
- [ ] Profile Page - Create a page with some of the user's data ([`src/pages/Profile/Profile.page.tsx`](src/pages/Profile/Profile.page.tsx)).
- [ ] Cards like and dislike functionality.
- [ ] Favorites Cards Page.
- [ ] Search functionality.
- [ ] CRM Page for admin users.
- [ ] Create cards functionality for business users.
- [ ] Complete and uncomment [`src/pages/Profile/Name.section.tsx`](src/pages/Profile/Name.section.tsx) and other incomplete profile sections.

## ✅ Completed

> `Nothing has been completed.`

## 🔄 Changes

### → <u>Added</u>

- [`src/pages/Registration/Name.section.tsx`](src/pages/Registration/Name.section.tsx): Modular section for registration name fields.
- [`src/pages/Registration/AccountInfo.section.tsx`](src/pages/Registration/AccountInfo.section.tsx): Modular section for registration account info fields.
- [`src/types/pages/SectionProps.t.ts`](src/types/pages/SectionProps.t.ts): Shared type for section props in registration/profile sections.

### → <u>Changed</u>

- [`src/pages/Registration/Registration.page.tsx`](src/pages/Registration/Registration.page.tsx): Refactored to use modular section components for improved maintainability.
- [`src/components/App/Routes/RoutesHandler.tsx`](src/components/App/Routes/RoutesHandler.tsx): Fixed import path for registration page.

### → <u>Removed</u>

- [`src/pages/Registration.page.tsx`](src/pages/Registration.page.tsx): Removed old monolithic registration page.
- [`src/pages/Profile/Name.section.tsx`](src/pages/Profile/Name.section.tsx): Removed unused/incomplete profile section (now replaced by modular version in registration).
- [`src/pages/Profile/SectionProps.t.ts`](src/pages/Profile/SectionProps.t.ts): Removed old section props type (now in `types/pages`).

---

## Previous Commits

| `Date`       | `Commit #`                                                   |
| ------------ | ------------------------------------------------------------ |
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
