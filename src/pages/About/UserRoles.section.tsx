const UserRolesSection = () => {
  return (
    <div>
      <h2 className="mb-8 overflow-hidden text-3xl font-bold text-gray-900 dark:text-white">
        User Roles & Permissions
      </h2>
      <div className="grid gap-6 md:grid-cols-2">
        {/* Guest Users */}
        <div className="rounded-lg border-l-4 border-gray-400 bg-white p-6 shadow-lg dark:bg-gray-800">
          <div className="mb-4 flex items-center">
            <div className="mr-3 flex size-10 items-center justify-center rounded-full bg-gray-400">
              <span className="text-sm font-bold text-white">G</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              Guest Users
            </h3>
          </div>
          <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
            <li>• View business cards publicly available</li>
            <li>• Browse the website without restrictions</li>
            <li>• Access login and signup pages</li>
            <li>• Cannot save favorites or create cards</li>
          </ul>
        </div>

        {/* Registered Users */}
        <div className="rounded-lg border-l-4 border-blue-500 bg-white p-6 shadow-lg dark:bg-gray-800">
          <div className="mb-4 flex items-center">
            <div className="mr-3 flex size-10 items-center justify-center rounded-full bg-blue-500">
              <span className="text-sm font-bold text-white">R</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              Registered Users
            </h3>
          </div>
          <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
            <li>• View business cards publicly available</li>
            <li>• Save favorite business cards</li>
            <li>• Access favorites page</li>
            <li>• Manage personal profile</li>
            <li>• Secure logout functionality</li>
          </ul>
        </div>

        {/* Business Users */}
        <div className="rounded-lg border-l-4 border-green-500 bg-white p-6 shadow-lg dark:bg-gray-800">
          <div className="mb-4 flex items-center">
            <div className="mr-3 flex size-10 items-center justify-center rounded-full bg-green-500">
              <span className="text-sm font-bold text-white">B</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              Business Users
            </h3>
          </div>
          <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
            <li>• All registered user features</li>
            <li>• Create new business cards</li>
            <li>• Access "My Cards" dedicated page</li>
            <li>• Edit their own created cards</li>
            <li>• Delete their own cards</li>
          </ul>
        </div>

        {/* Admin Users */}
        <div className="rounded-lg border-l-4 border-red-500 bg-white p-6 shadow-lg dark:bg-gray-800">
          <div className="mb-4 flex items-center">
            <div className="mr-3 flex size-10 items-center justify-center rounded-full bg-red-500">
              <span className="text-sm font-bold text-white">A</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              Admin Users
            </h3>
          </div>
          <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
            <li>• All registered user features</li>
            <li>• Delete any business cards</li>
            <li>• Access CRM page (Work in Progress)</li>
            <li>• Manage users across platform</li>
            <li>• Convert regular to business accounts</li>
            <li>• Platform-wide administration</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default UserRolesSection;
