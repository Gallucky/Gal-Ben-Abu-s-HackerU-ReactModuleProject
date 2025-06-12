import { Badge } from "flowbite-react";
import useAuth from "../../../../hooks/useAuth";

type FlowbiteReactBadgeSupportedColors =
  | "info"
  | "gray"
  | "failure"
  | "success"
  | "warning"
  | "indigo"
  | "purple"
  | "pink"
  | "blue"
  | "cyan"
  | "dark"
  | "light"
  | "green"
  | "lime"
  | "red"
  | "teal"
  | "yellow";

type UserRole = "Guest" | "Registered" | "Business" | "Admin";

type UserRoleCardProps = {
  type: UserRole;
  permissions: string[];
  color: FlowbiteReactBadgeSupportedColors;
  userHasThisPermissions?: boolean;
};

const UserRoleCard = (props: UserRoleCardProps) => {
  const { user } = useAuth();
  const { type, color, permissions, userHasThisPermissions = false } = props;

  let userRole: UserRole = "Guest";
  // If the user is a guest user.
  if (!user) userRole = "Guest";
  // else if (user.isAdmin && user.isBusiness) userRole = ["Admin", "Business"];
  // If the user has only admin permissions.
  else if (user.isAdmin) userRole = "Admin";
  // If the user has only business permissions.
  else if (user.isBusiness) userRole = "Business";
  // If the user is a registered user.
  else if (user) userRole = "Registered";

  const badgeLetter = type.charAt(0).toUpperCase();

  const guestColors = ["border-gray-400", "bg-gray-400"];
  const registeredUserColors = ["border-blue-500", "bg-blue-500"];
  const businessColors = ["border-green-500", "bg-green-500"];
  const adminColors = ["border-red-500", "bg-red-500"];

  let colorsList = guestColors;

  if (type === "Registered") colorsList = registeredUserColors;
  else if (type === "Business") colorsList = businessColors;
  if (type === "Admin") colorsList = adminColors;

  return (
    <div className="relative p-4">
      <div
        className={`rounded-lg border-l-4 bg-white p-6 shadow-lg dark:bg-gray-800 ${colorsList[0]}`}
      >
        <div className="mb-4 flex items-center">
          <div
            className={`mr-3 flex size-10 items-center justify-center rounded-full ${colorsList[1]}`}
          >
            <span className="select-none text-sm font-bold text-white">
              {badgeLetter}
            </span>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
            {type} Users{" "}
            {userRole === type && (
              <span className="text-sm text-gray-500 dark:text-gray-400">
                (Current)
              </span>
            )}
          </h3>
        </div>
        <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
          {permissions.map((permissions) => {
            return <li key={permissions}>• {permissions}</li>;
          })}
        </ul>
      </div>

      {userHasThisPermissions && (
        <Badge color={color} className="absolute right-2 top-2">
          You have this permissions
        </Badge>
      )}
    </div>
  );
};

export default UserRoleCard;
