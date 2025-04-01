import { Footer, FooterCopyright, FooterIcon } from "flowbite-react";
import { BiInfoCircle } from "react-icons/bi";
import { BsFacebook, BsInstagram, BsTwitter, BsGithub } from "react-icons/bs";

const CustomFooter = () => {
  return (
    <>
      <Footer>
        <div className="xs-styling fixed bottom-0 w-full bg-blue-300 p-4 dark:bg-slate-700 sm:flex sm:items-center sm:justify-between">
          <FooterCopyright
            className="footer-credit"
            href="#"
            by="Gal Ben Abu"
            year={2025}
          />

          <div className="footer-about flex flex-col items-center justify-center">
            <FooterIcon className="" href="#" icon={BiInfoCircle} />
            <span
              style={{ userSelect: "none" }}
              className="text-sm text-gray-500"
            >
              About
            </span>
          </div>

          <div className="footer-links mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            <FooterIcon
              target="_blank"
              href="https://github.com/Gallucky/Gal-Ben-Abu-s-HackerU-ReactModuleProject"
              icon={BsGithub}
            />
            <FooterIcon href="#" icon={BsFacebook} />
            <FooterIcon href="#" icon={BsInstagram} />
            <FooterIcon href="#" icon={BsTwitter} />
          </div>
        </div>
      </Footer>
    </>
  );
};

export default CustomFooter;
