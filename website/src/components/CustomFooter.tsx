import { Footer, FooterCopyright, FooterIcon } from "flowbite-react";
import { BiInfoCircle } from "react-icons/bi";
import { BsFacebook, BsInstagram, BsTwitter, BsGithub } from "react-icons/bs";

const CustomFooter = () => {
  return (
    <>
      <Footer>
        <div className="fixed bottom-0 w-full bg-blue-300 p-4 sm:flex sm:items-center sm:justify-between">
          <FooterCopyright href="#" by="Gal Ben Abu" year={2025} />

          <div className="flex flex-col items-center justify-center">
            <FooterIcon className="" href="#" icon={BiInfoCircle} />
            <span style={{ userSelect: "none" }} className="text-sm">
              About
            </span>
          </div>

          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
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
