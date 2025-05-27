# 📘 Gal Ben Abu's - HackerU - React Module Project - Changelog

## 📅 Updated to Commit #66.1 | Date: 27/05/2025

### 🔗 [Open TODO List](./todo-list.md)

### ✅ Completed

- [x] Implement search across all pages ([src/pages/Home.page.tsx](./src/pages/Home.page.tsx), [src/components/other/SearchBox.tsx](./src/components/other/SearchBox.tsx), [src/hooks/useSearch.ts](./src/hooks/useSearch.ts))
- [x] Polish and extend card like/dislike functionality ([src/components/card/Card.tsx](./src/components/card/Card.tsx), [src/hooks/useContent.ts](./src/hooks/useContent.ts), [src/components/card/CardsContainer.tsx](./src/components/card/CardsContainer.tsx), [src/utils/cardDataPropsConvertor.ts](./src/utils/cardDataPropsConvertor.ts))

### ➕ Added

- Added `alreadyLiked` property to `CardProps` and its usage throughout the card rendering logic ([src/components/card/Card.tsx](./src/components/card/Card.tsx), [src/components/card/CardsContainer.tsx](./src/components/card/CardsContainer.tsx), [src/utils/cardDataPropsConvertor.ts](./src/utils/cardDataPropsConvertor.ts))
- Introduced a new custom React hook: [src/hooks/useSearch.ts](./src/hooks/useSearch.ts) for card search and favorites filtering logic

### 🔄 Changed

- Updated `CardsContainer` to support `alreadyLiked` and null card arrays, and improved responsive rendering ([src/components/card/CardsContainer.tsx](./src/components/card/CardsContainer.tsx))
- Enhanced `useContent` to log like/dislike responses and improve error handling ([src/hooks/useContent.ts](./src/hooks/useContent.ts))
- Refactored `Home.page.tsx` to use the new search logic and pass filtered cards to the container ([src/pages/Home.page.tsx](./src/pages/Home.page.tsx))
- Improved `convertCardDataToProps` to support user-specific like status ([src/utils/cardDataPropsConvertor.ts](./src/utils/cardDataPropsConvertor.ts))

### 🗑️ Deleted

- No files deleted.

### 🏷️ Renamed / Moved

- No files renamed or moved.

---

## Previous Commits

| `Date`       | `Commit #`                                                   |
| ------------ | ------------------------------------------------------------ |
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
