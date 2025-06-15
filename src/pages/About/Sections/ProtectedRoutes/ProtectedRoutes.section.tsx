const ProtectedRoutesSection = () => {
  return (
    <div>
      <h2 className="mb-8 overflow-hidden text-3xl font-bold text-gray-900 dark:text-white">
        Protected Routes
      </h2>
      <div className="rounded-lg bg-white p-8 shadow-lg dark:bg-gray-800">
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <h3 className="mb-4 text-xl font-semibold text-gray-900 dark:text-white">
              Guest-Only Routes
            </h3>
            <ul className="space-y-2 text-gray-700 dark:text-gray-300">
              <li>
                • <strong>/registration</strong> - New user registration
              </li>
              <li>
                • <strong>/login</strong> - User authentication
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-xl font-semibold text-gray-900 dark:text-white">
              Registered+ Routes
            </h3>
            <ul className="space-y-2 text-gray-700 dark:text-gray-300">
              <li>
                • <strong>/favorites</strong> - Saved business cards
              </li>
              <li>
                • <strong>/profile</strong> - Personal information
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-xl font-semibold text-gray-900 dark:text-white">
              Business-Only Routes
            </h3>
            <ul className="space-y-2 text-gray-700 dark:text-gray-300">
              <li>
                • <strong>/my-cards</strong> - Manage created cards
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-xl font-semibold text-gray-900 dark:text-white">
              Admin-Only Routes
            </h3>
            <ul className="space-y-2 text-gray-700 dark:text-gray-300">
              <li>
                • <strong>/crm</strong> - User & card management
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-xl font-semibold text-gray-900 dark:text-white">
              All Users Routes
            </h3>
            <ul className="space-y-2 text-gray-700 dark:text-gray-300">
              <li>
                •{" "}
                <strong>
                  /card-details/*<u>cardID</u>*
                </strong>{" "}
                - Selected card details page
              </li>
              <li>
                • <strong>/home</strong> - The home page / The starting page
                containing all cards
              </li>
              <li>
                • <strong>/about</strong> - The about page |{" "}
                <u>
                  <i>Currently Viewing</i>
                </u>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProtectedRoutesSection;
