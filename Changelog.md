# 📘 Gal Ben Abu's - HackerU - React Module Project - Changelog

## 📅 Updated to Commit #61 | Date: 21/05/2025

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

- Refactored [`src/pages/Profile/Profile.page.tsx`](src/pages/Profile/Profile.page.tsx) to use modular, reusable section components ([`NameSection`](src/pages/Registration/Name.section.tsx), [`AddressSection`](src/pages/Registration/Address.section.tsx), etc.) and integrated form validation with react-hook-form and Joi. Improved layout and maintainability.
- Enhanced [`src/types/pages/SectionProps.t.ts`](src/types/pages/SectionProps.t.ts) and [`src/components/form/FormInput.tsx`](src/components/form/FormInput.tsx) to support new props for flexibility and disabled state.
- Updated [`src/pages/Registration/Name.section.tsx`](src/pages/Registration/Name.section.tsx) and [`src/pages/Registration/Address.section.tsx`](src/pages/Registration/Address.section.tsx) to accept new props for consistency and reusability.
- Cleaned up debug code and improved dark mode styling in [`src/styles/form/FormInput.css`](src/styles/form/FormInput.css).
- Simplified [`src/pages/Test.page.tsx`](src/pages/Test.page.tsx) for input testing.

## 🔄 Changes

### → <u>Added</u>

- Modular Profile Page layout using section components and validation.
- Support for editable/disabled state in [`FormInput`](src/components/form/FormInput.tsx) and section components.
- Additional props in [`SectionProps`](src/types/pages/SectionProps.t.ts) for flexible section styling.

### → <u>Changed</u>

- Refactored [`Profile.page.tsx`](src/pages/Profile/Profile.page.tsx), [`NameSection`](src/pages/Registration/Name.section.tsx), [`AddressSection`](src/pages/Registration/Address.section.tsx), and related components for maintainability and reusability.
- Improved dark mode support in [`FormInput.css`](src/styles/form/FormInput.css).
- Removed all console.log and debug statements from components and hooks.
- Simplified [`Test.page.tsx`](src/pages/Test.page.tsx) to focus on input testing.

### → <u>Removed</u>

- All debug and console.log statements from production code.

---

## Previous Commits

| `Date`       | `Commit #`                                                   |
| ------------ | ------------------------------------------------------------ |
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
