import PageWrapper from "../../components/layout/PageWrapper";
import PageForm from "../../components/utils/PageForm";

const Profile = () => {
  return (
    <>
      <PageWrapper>
        <PageForm title="Profile Page">
          {/* 
            Grid area with the following sections:
            "blank blank"
            "Profile Picture NameSection"
            "Profile Picture AccountInfoSection"
            "Profile Picture PersonalInfoSection"
            "Profile Picture AddressSection"
            "blank"
          */}
          <div className="grid grid-cols-[1fr_3fr] gap-4 p-6">
            {/* Top blank row */}
            <div className="col-span-2" />

            {/* Profile Picture spanning 4 rows */}
            <div className="row-span-4 flex items-start justify-center">
              <img
                src="/profile.jpg"
                alt="Profile"
                className="size-40 rounded-xl border border-black object-cover dark:border-white"
              />
            </div>

            {/* Sections to the right of the profile picture */}
            <div>[Name Section]</div>
            <div>[Account Info Section]</div>
            <div>[Personal Info Section]</div>
            <div>[Address Section]</div>

            {/* Bottom blank row */}
            <div className="col-span-2" />
          </div>
        </PageForm>
      </PageWrapper>
    </>
  );
};

export default Profile;
