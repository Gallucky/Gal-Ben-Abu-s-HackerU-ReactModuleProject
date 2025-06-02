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
