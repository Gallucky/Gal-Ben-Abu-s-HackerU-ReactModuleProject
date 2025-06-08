const KeyFeaturesSection = () => {
  return (
    <div>
      <h2 className="mb-8 overflow-hidden text-3xl font-bold text-gray-900 dark:text-white">
        Platform Features
      </h2>
      <div className="grid gap-6 md:grid-cols-3">
        <div className="rounded-lg bg-white p-6 shadow-lg dark:bg-gray-800">
          <h3 className="mb-3 text-lg font-semibold text-gray-900 dark:text-white">
            🔐 Route Protection
          </h3>
          <p className="text-sm text-gray-700 dark:text-gray-300">
            Advanced RouteGuard component ensures secure access control,
            protecting sensitive pages based on user roles and authentication
            status.
          </p>
        </div>
        <div className="rounded-lg bg-white p-6 shadow-lg dark:bg-gray-800">
          <h3 className="mb-3 text-lg font-semibold text-gray-900 dark:text-white">
            🎨 Card Creation
          </h3>
          <p className="text-sm text-gray-700 dark:text-gray-300">
            Comprehensive card creation system with sections for contact info,
            descriptions, images, location data, and customizable titles.
          </p>
        </div>
        <div className="rounded-lg bg-white p-6 shadow-lg dark:bg-gray-800">
          <h3 className="mb-3 text-lg font-semibold text-gray-900 dark:text-white">
            📱 Responsive Design
          </h3>
          <p className="text-sm text-gray-700 dark:text-gray-300">
            Built with Tailwind CSS and Flowbite components, ensuring perfect
            display across all devices and screen sizes.
          </p>
        </div>

        <div className="rounded-lg bg-white p-6 shadow-lg dark:bg-gray-800">
          <h3 className="mb-3 text-lg font-semibold text-gray-900 dark:text-white">
            🔍 Advanced Search
          </h3>
          <p className="text-sm text-gray-700 dark:text-gray-300">
            Powerful search functionality with custom hooks and Redux state
            management, allowing users to quickly find business cards by name,
            company, or profession.
          </p>
        </div>
      </div>
    </div>
  );
};

export default KeyFeaturesSection;
