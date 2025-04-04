# Todo list of React Module Project.

### Updated to commit #19 | Date 4/04/2025:

## Changes:

-   Added the `Pages` directory and inside there are the following pages:
    -   [x] `Home` page which all current data before this commit will house, `CardsContainer` component, `Header` component etc...
    -   [x] `About` page which will contain some information.
    -   [x] `Error` page which will be shown when trying to route to non-existent page, it will show an error **404** and will have buttons to go to `Home` and `About` pages.
-   Expanded the customizability of the `Header` component to allow tailwind classes styling for the `h1` element and the `p` element independently.
-   Added the functionality to the `CustomNavbar` component so when the current location is `About` then the about text link will be colored with the color `teal-600`.

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
