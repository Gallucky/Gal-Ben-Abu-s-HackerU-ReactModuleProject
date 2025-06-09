import UserRoleCard from "./UserRoleCard";

const UserRolesSection = () => {
  return (
    <div>
      <h2 className="mb-8 overflow-hidden text-3xl font-bold text-gray-900 dark:text-white">
        User Roles & Permissions
      </h2>
      <div className="grid gap-3 md:grid-cols-2">
        {/* Guest Users */}
        <UserRoleCard
          type="Guest"
          color="gray"
          permissions={[
            "View business cards publicly available",
            "Browse the website without restrictions",
            "Access login and signup pages",
            "Cannot save favorites or create cards",
            "Enjoy unrestricted viewing with basic access - no account needed",
          ]}
        />

        {/* Registered Users */}
        <UserRoleCard
          type="Registered"
          color="blue"
          permissions={[
            "View business cards publicly available",
            "Save favorite business cards",
            "Access favorites page",
            "Manage personal profile",
            "Secure logout functionality",
          ]}
        />

        {/* Business Users */}
        <UserRoleCard
          type="Business"
          color="green"
          permissions={[
            "All registered user features",
            "Create new business cards",
            "Access 'My Cards' dedicated page",
            "Edit their own created cards",
            "Delete their own cards",
          ]}
        />

        {/* Admin Users */}
        <UserRoleCard
          type="Admin"
          color="red"
          permissions={[
            "All registered user features",
            "Delete any business cards",
            "Access CRM page (Work in Progress)",
            "Manage users across platform - eg. convert regular to business accounts",
            "Platform-wide administration",
          ]}
        />
      </div>
    </div>
  );
};

export default UserRolesSection;
