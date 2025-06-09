const TechnicalArchitectureSection = () => {
  return (
    <div>
      <h2 className="mb-8 overflow-hidden text-3xl font-bold text-gray-900 dark:text-white">
        Technical Architecture
      </h2>
      <div className="rounded-lg bg-white p-8 shadow-lg dark:bg-gray-800">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="mb-3 text-lg font-semibold text-gray-900 dark:text-white">
              🧩 Components
            </h3>
            <ul className="space-y-1 text-sm text-gray-700 dark:text-gray-300">
              <li>• Reusable UI components</li>
              <li>• Form input handling</li>
              <li>• Card display systems</li>
              <li>• Layout components</li>
            </ul>
          </div>
          <div>
            <h3 className="mb-3 text-lg font-semibold text-gray-900 dark:text-white">
              🗂️ State Management
            </h3>
            <ul className="space-y-1 text-sm text-gray-700 dark:text-gray-300">
              <li>• Redux Toolkit store</li>
              <li>• User authentication slice</li>
              <li>• Search functionality</li>
              <li>• Screen responsive state</li>
            </ul>
          </div>
          <div>
            <h3 className="mb-3 text-lg font-semibold text-gray-900 dark:text-white">
              🎯 Custom Hooks
            </h3>
            <ul className="space-y-1 text-sm text-gray-700 dark:text-gray-300">
              <li>• useAuth - Authentication</li>
              <li>• useCards - Card management</li>
              <li>• useSearch - Search functionality</li>
              <li>• useTimer - Timing utilities</li>
            </ul>
          </div>
          <div>
            <h3 className="mb-3 text-lg font-semibold text-gray-900 dark:text-white">
              ✅ Validation
            </h3>
            <ul className="space-y-1 text-sm text-gray-700 dark:text-gray-300">
              <li>• Joi schema validation</li>
              <li>• Form input validation</li>
              <li>• User registration rules</li>
              <li>• Card creation validation</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechnicalArchitectureSection;
