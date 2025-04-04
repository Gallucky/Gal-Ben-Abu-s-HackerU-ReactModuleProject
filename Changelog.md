# Todo list of React Module Project.

### Updated to commit #20 | Date 4/04/2025:

## Changes:

### Bugs Fixes:

-   Overflow set to hidden to all elements in [Error.page.css](./website/src/styles/Error.page.css) instead to all child elements of elements with the class `error-page-wrapper`.
-   Fixed the warning error of not using a key in rendering the paragraph lines in [Header.tsx - p element](./website/src/components/Header.tsx). Changed it to place a `span` element with a `br` element inside it..

## Todo:

-   [ ] Implement the login functionality.

## Done:

-   [x] Setting up the project structure.

    > #### The NavBar has the following components:

-   [x] Create a NavBar component.

    -   [x] Logo Section.
    -   [x] SearchBox component.
    -   DarkModeToggle component which is already implemented in react. -> Created a wrapper component for customizing the component.

-   [x] Create a card component.

-   [x] To add cards container.
-   [x] To get cards from the api.
