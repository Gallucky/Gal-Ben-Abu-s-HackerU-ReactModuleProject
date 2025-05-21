import { Navigate } from "react-router-dom";
import CustomSpinner from "../../utils/CustomSpinner";
import useTimer from "../../../hooks/useTimer";
import useAuth from "../../../hooks/useAuth";

/**
 * Props for RouteGuard component.
 *
 * If there are not requirements at all assuming that all users
 * regardless of permission level and logged in or not can access.
 *
 * If more than one requirement is provided the most strict one wins.
 * GuestOnly > AdminOnly > Business & Admins > AnyLoggedInUser > Unrestricted.
 *
 * @param allowAdmin - Any logged in Admin users access.
 * @param guestOnly - Only guests can access.
 * @param allowBusiness - Any logged in Business or Admin users access.
 * @param allowLoggedUser - Any logged in user can access.
 *
 * @see RouteGuard
 */
type RouteGuardProps = {
  children: React.ReactNode;

  // Grants access to everyone that is unauthenticated.
  // Example: Signup or Login pages.
  guestOnly?: boolean;

  /** Grants access to any authenticated user. */
  allowLoggedUser?: boolean;

  /** Grants access to business users only. */
  allowBusiness?: boolean;

  /** Grants access to admin users only. */
  allowAdmin?: boolean;
};

/**
 * This component will block / restrict / redirect a user if
 * the permissions of the user doesn't meet the requirements
 * passed to this component.
 *
 * @param props - The properties sent to the component.
 * @see RouteGuardProps
 */
const RouteGuard = (props: RouteGuardProps) => {
  const { children, guestOnly, allowLoggedUser, allowBusiness, allowAdmin } =
    props;

  const noRestrictions =
    !guestOnly && !allowLoggedUser && !allowBusiness && !allowAdmin;

  const user = useAuth().user;

  // Wait for the user data to be loaded.
  const { timerCompleted } = useTimer(500);

  if (!timerCompleted)
    return <CustomSpinner ariaLabel="Loading..." text="Loading..." />;

  // If permission access not provided assumes everyone can access.
  if (noRestrictions) return <>{children}</>;

  // Checking if there is a user.
  if (user) {
    // Prevent access to login or signup pages for users who are already authenticated,
    // as these actions are unnecessary and could lead to inconsistent behavior.
    if (guestOnly)
      return (
        <div className="p-4 text-center text-gray-600">
          You are already logged in. Redirecting...
          <Navigate to="/home" replace />
        </div>
      );

    // For admins only.
    if (allowAdmin && user.isAdmin) return <>{children}</>;

    // For business or admins only.
    if (allowBusiness && (user.isBusiness || user.isAdmin))
      return <>{children}</>;

    // For any logged in user.
    if (allowLoggedUser) return <>{children}</>;
  }

  // If there is no user logged in and it's guest only access requirement.
  if (guestOnly) return <>{children}</>;

  // Otherwise:
  // Incase of user privilege doesn't meet the requirements.
  return <Navigate to="/login" replace />;
};

export default RouteGuard;
