/* eslint-disable tailwindcss/classnames-order */
export type NavbarLinkProps = {
  href: string;
  text: string;
};

const NavbarLink = (props: NavbarLinkProps) => {
  const { href, text } = props;
  console.log("props:", props);

  return (
    <>
      <a
        href={href}
        className="
        navbar-link-xs
            block rounded-sm bg-blue-700 text-white
            sm:bg-transparent sm:p-0
            sm:text-blue-700 sm:dark:text-blue-500 md:bg-transparent md:p-0
            md:text-blue-700 md:dark:text-blue-500 lg:px-3 lg:py-2 xl:px-3 xl:py-2 2xl:px-3 2xl:py-2"
        aria-current="page"
      >
        {text}
      </a>
    </>
  );
};

export default NavbarLink;
