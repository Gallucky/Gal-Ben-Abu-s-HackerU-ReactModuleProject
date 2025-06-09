# 📘 Gal Ben Abu's - HackerU - React Module Project - Changelog

## 📅 Updated to Commit #79 | Date: 09/06/2025

### 🔗 [Open TODO List](./todo-list.md)

### 📝 General Notes

```
Cleaned up code:
- Removed todo comments
- Removed console logs
- Make sure each file didn't have more than 200 lines of code...
```

### ✅ Completed

> `Nothing has been completed.`

### ➕ Added

- New types directory [`src/types/forms/`](./src/types/forms/) with form data type definitions:
  - [`CreateCardFormData`](./src/types/forms/CreateCardFormData.ts)
  - [`LoginFormData`](./src/types/forms/LoginFormData.ts)
  - [`RegisterFormData`](./src/types/forms/RegisterFormData.ts)
  - [`UpdateUserFormData`](./src/types/forms/UpdateUserFormData.ts)
- Standard CSS `line-clamp` property fallback in [`src/index.css`](./src/index.css)
- Optional `withoutConfirmPassword` prop to [`AccountInfo.section.tsx`](./src/pages/Registration/AccountInfo.section.tsx)

### 🔄 Changed

- Extracted form data types from [`useAuth.ts`](./src/hooks/useAuth.ts) to dedicated type files
- Updated all components and pages to import form types from new locations:
  - [`CardsContainer Component`](./src/components/card/CardsContainer.tsx)
  - [`CreateCard Page`](./src/pages/CreateCard/CreateCard.page.tsx)
  - [`Contact.section.tsx`](./src/pages/CreateCard/Contact.section.tsx)
  - [`Description.section.tsx`](./src/pages/CreateCard/Description.section.tsx)
  - [`Image.section.tsx`](./src/pages/CreateCard/Image.section.tsx)
  - [`Location.section.tsx`](./src/pages/CreateCard/Location.section.tsx)
  - [`TitleSubtitle.section.tsx`](./src/pages/CreateCard/TitleSubtitle.section.tsx)
  - [`Login Page`](./src/pages/Login.page.tsx)
  - [`Profile Page`](./src/pages/Profile/Profile.page.tsx)
  - [`PersonalProfileInfo.section.tsx`](./src/pages/Profile/PersonalProfileInfo.section.tsx)
  - [`Registration Page`](./src/pages/Registration/Registration.page.tsx)
  - [`AccountInfo.section.tsx`](./src/pages/Registration/AccountInfo.section.tsx)
  - [`Address.section.tsx`](./src/pages/Registration/Address.section.tsx)
  - [`Name.section.tsx`](./src/pages/Registration/Name.section.tsx)
  - [`PersonalInfo.section.tsx`](./src/pages/Registration/PersonalInfo.section.tsx)
  - [`convertTUser.ts`](./src/utils/convertTUser.ts)
- Improved CSS animation syntax in [`DarkModeButton.css`](./src/styles/DarkModeButton.css)
- Enhanced cross-browser compatibility in [`FormInput.css`](./src/styles/form/FormInput.css)
- Added dependency array to useEffect in [`CardDetails Page`](./src/pages/CardDetails/CardDetails.page.tsx)
- Simplified Profile page by reusing [`AccountInfo.section.tsx`](./src/pages/Registration/AccountInfo.section.tsx)

### 🗑️ Deleted

- Removed TODO comments across multiple files
- Removed console.log statements from [`CardDetails Page`](./src/pages/CardDetails/CardDetails.page.tsx)
- Removed unused response handling code in [`useAuth.ts`](./src/hooks/useAuth.ts)
- Removed duplicate Account Info section code from [`Profile Page`](./src/pages/Profile/Profile.page.tsx)

### 🏷️ Renamed / Moved

- Moved form data type definitions from [`useAuth.ts`](./src/hooks/useAuth.ts) to dedicated files in [`src/types/forms/`](./src/types/forms/)

---

## Previous Commits

| `Date`       | `Commit #`                                                   |
| ------------ | ------------------------------------------------------------ |
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
