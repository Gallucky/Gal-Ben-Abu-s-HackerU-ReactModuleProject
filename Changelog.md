# 📘 Gal Ben Abu's - HackerU - React Module Project - Changelog

## 📅 Updated to Commit #63 | Date: 23/05/2025

## 🛠️ In Progress

- Working on the cards like and dislike functionality.
- Refactored profile page for inline editing and user updates ([`Profile.page.tsx`](src/pages/Profile/Profile.page.tsx)).

## 🎯 Todo

- [ ] Complete [`screenSlice`](src/store/screenSlice.ts).
- [ ] Create custom hooks for auth, screen viewport, etc.
- [ ] Finish and polish profile sections ([`Name.section.tsx`](src/pages/Registration/Name.section.tsx), [`PersonalProfileInfo.section.tsx`](src/pages/Profile/PersonalProfileInfo.section.tsx), [`Address.section.tsx`](src/pages/Registration/Address.section.tsx)).
- [ ] Add card details and favorites functionality.
- [ ] Implement search and CRM pages.

## ✅ Completed

- Refactored profile page for inline editing ([`Profile.page.tsx`](src/pages/Profile/Profile.page.tsx)).
- Added modular personal info section ([`PersonalProfileInfo.section.tsx`](src/pages/Profile/PersonalProfileInfo.section.tsx)).
- Enhanced form input and user update logic ([`FormInput.tsx`](src/components/form/FormInput.tsx), [`useAuth.ts`](src/hooks/useAuth.ts), [`convertTUser.ts`](src/utils/convertTUser.ts)).

## 🔄 Changes

### → <u>Added</u>

- [`PersonalProfileInfo.section.tsx`](src/pages/Profile/PersonalProfileInfo.section.tsx): Modular section for editing personal info inline.
- [`convertTUser.ts`](src/utils/convertTUser.ts): Utility for converting user objects to form/update data.
- `onSave` and `editable` support in [`FormInput.tsx`](src/components/form/FormInput.tsx), [`Name.section.tsx`](src/pages/Registration/Name.section.tsx), [`Address.section.tsx`](src/pages/Registration/Address.section.tsx).

### → <u>Changed</u>

- [`Profile.page.tsx`](src/pages/Profile/Profile.page.tsx): Now supports inline editing and user data updates.
- [`useAuth.ts`](src/hooks/useAuth.ts): Added `userUpdateRequest` for updating user data via API.
- [`userSlice.ts`](src/store/userSlice.ts): Shows "Welcome Back!" toast and handles user updates.
- Types updated in [`user.t.ts`](src/types/user.t.ts) and [`SectionProps.t.ts`](src/types/pages/SectionProps.t.ts) for consistency.

### → <u>Removed</u>

> `Nothing has been removed.`

---

## Previous Commits

| `Date`       | `Commit #`                                                   |
| ------------ | ------------------------------------------------------------ |
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
