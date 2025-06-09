import Divider from "../../components/other/Divider";
import Header from "../../components/other/Header";
import KeyFeaturesSection from "./Sections/KeyFeatures/KeyFeatures.section";
import ProtectedRoutesSection from "./Sections/ProtectedRoutes/ProtectedRoutes.section";
import TechnicalArchitectureSection from "./Sections/TechnicalArchitecture/TechnicalArchitecture.section";
import UserRolesSection from "./Sections/UserRoles/UserRoles.section";

const About = () => {
  return (
    <>
      <Header
        title="About Business Cards Platform"
        paragraph="Create, share, and manage professional digital business cards with ease. Our platform offers role-based access for different user types - from casual browsers to business owners and administrators. Built with modern web technologies, we provide a secure, intuitive experience for networking in the digital age."
      />
      <Divider />

      {/* Content below divider */}
      <div className="mx-auto mb-10 max-w-7xl space-y-12 px-4 py-8 sm:px-6 lg:px-8">
        {/* User Roles Section */}
        <UserRolesSection />

        {/* Key Features */}
        <KeyFeaturesSection />

        {/* Protected Routes */}
        <ProtectedRoutesSection />

        {/* Technical Architecture */}
        <TechnicalArchitectureSection />
      </div>
    </>
  );
};

export default About;
