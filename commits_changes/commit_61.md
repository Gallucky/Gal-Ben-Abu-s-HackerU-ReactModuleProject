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
