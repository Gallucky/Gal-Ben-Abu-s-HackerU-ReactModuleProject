# 📘 Gal Ben Abu's - HackerU - React Module Project - Changelog

## 📅 Updated to Commit #72 | Date: 01/06/2025

### 🔗 [Open TODO List](./todo-list.md)

### General Notes

```
Mainly working on the create card page and its logic.
- Validation and the form itself is completed.
- Created the logic to send the request for creating a new card.
- Still need to work on the requesting and form logic.
  It is not working properly and most of the time the request is not sent.
```

### ✅ Completed

> `Nothing has been completed.`

### ➕ Added

- ➕ Added new sections to the CreateCard page:  
  [`Contact.section.tsx`](./src/pages/CreateCard/Contact.section.tsx)  
  [`Description.section.tsx`](./src/pages/CreateCard/Description.section.tsx)  
  [`Image.section.tsx`](./src/pages/CreateCard/Image.section.tsx)  
  [`Location.section.tsx`](./src/pages/CreateCard/Location.section.tsx)  
  [`TitleSubtitle.section.tsx`](./src/pages/CreateCard/TitleSubtitle.section.tsx)

- ➕ Added Joi validation file for card creation  
  [`createCard.joi.ts`](./src/validations/createCard.joi.ts)

- ➕ Created commit-specific log file [Latest Commit]
  [`commit_71.md`](./commits_changes/commit_71.md)

### 🔄 Changed

- 🔄 Extended `FormInput` component with `grayscale` state option  
  [`FormInput.tsx`](./src/components/form/FormInput.tsx)

- 🔄 Improved `Divider` component with customizable margin prop  
  [`Divider.tsx`](./src/components/other/Divider.tsx)

- 🔄 Updated `FormAreaTitle` text color to adapt to light/dark modes  
  [`FormAreaTitle.tsx`](./src/components/utils/FormAreaTitle.tsx)

- 🔄 Minor cleanup in `useAuth` hook file  
  [`useAuth.ts`](./src/hooks/useAuth.ts)

- 🔄 Progressed logic in CreateCard page  
  [`CreateCard.page.tsx`](./src/pages/CreateCard/CreateCard.page.tsx)

- 🔄 Corresponding style improvements  
  [`FormInput.css`](./src/styles/form/FormInput.css)

### 🗑️ Deleted

> `Nothing has been deleted.`

### 🏷️ Renamed / Moved

> `No files renamed or moved.`

---

## Previous Commits

| `Date`       | `Commit #`                                                   |
| ------------ | ------------------------------------------------------------ |
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
