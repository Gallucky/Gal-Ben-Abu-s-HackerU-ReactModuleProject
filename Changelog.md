# 📘 Gal Ben Abu's - HackerU - React Module Project - Changelog

## 📅 Updated to Commit #58 | Date: 19/05/2025

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

- [`src/hooks/useContent.ts`](src/hooks/useContent.ts): New hook for like/dislike card functionality.
- [`src/utils/cardDataPropsConvertor.ts`](src/utils/cardDataPropsConvertor.ts): Utility to convert API card data to CardProps.
- [`src/styles/animations/tilting.animation.css`](src/styles/animations/tilting.animation.css): CSS animation for tilting (used for like button).
- [`src/pages/Profile/Name.section.tsx`](src/pages/Profile/Name.section.tsx): (Fully commented out) Incomplete section for profile name input, included to avoid errors.
- [`src/pages/Profile/SectionProps.t.ts`](src/pages/Profile/SectionProps.t.ts): Type definition for section props in profile sections.

### → <u>Changed</u>

- [`package.json`](package.json): Updated `lint` and `lint:fix` scripts to only lint files in the `src` folder for improved performance and accuracy.
- [`.eslintrc.cjs`](.eslintrc.cjs): Updated `ignorePatterns` to only lint files inside the `src` folder, and increased the `max-lines` rule to 200 lines per file.
- [`src/components/card/Card.tsx`](src/components/card/Card.tsx): Added like/dislike heart icon, uses `useContent`, expects `_id` and `userConnected` props, handles like/dislike click with animation and color change.
- [`src/components/card/CardsContainer.tsx`](src/components/card/CardsContainer.tsx): Passes `userConnected` and `_id` props to `Card`, uses `useAuth` to determine if a user is connected.
- [`src/hooks/useAuth.ts`](src/hooks/useAuth.ts): Exposes `userToken` in the returned object for authenticated requests.
- [`src/main.tsx`](src/main.tsx): Imports the new animation CSS file.
- [`src/pages/Home.page.tsx`](src/pages/Home.page.tsx): Uses the new `convertCardDataToProps` utility, adds a function to get favorite cards for the user.
- [`src/types/card.t.ts`](src/types/card.t.ts): Updates the `TCardData` type to match the API response more closely (adds fields, makes types more specific).
- [`src/utils/color.ts`](src/utils/color.ts): Removes commented-out debug lines.

### → <u>Removed</u>

> `Nothing has been removed.`

---

## Previous Commits

| `Date`       | `Commit #`                                                   |
| ------------ | ------------------------------------------------------------ |
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
