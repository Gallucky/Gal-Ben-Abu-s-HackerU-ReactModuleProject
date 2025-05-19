import { Footer, FooterCopyright, FooterIcon } from "flowbite-react";
import { BsGithub } from "react-icons/bs";

const CustomFooter = () => {
  return (
    <>
      <Footer>
        <div className="xs-styling fixed bottom-0 z-20 !h-fit w-full bg-blue-300 px-4 py-2 dark:bg-slate-700 sm:flex sm:items-center sm:justify-between">
          <FooterCopyright
            className="footer-credit"
            href="#"
            by="Gal Ben Abu"
            year={2025}
          />

          <FooterIcon
            target="_blank"
            href="https://github.com/Gallucky/Gal-Ben-Abu-s-HackerU-ReactModuleProject"
            icon={BsGithub}
          />
        </div>
      </Footer>
    </>
  );
};

export default CustomFooter;
