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
