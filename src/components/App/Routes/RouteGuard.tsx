import { useSelector } from "react-redux";
import { TRootState } from "../../../store/store";
import { Navigate } from "react-router-dom";

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

  const user = useSelector((state: TRootState) => state.userSlice.user);
  const noRestrictions =
    !guestOnly && !allowLoggedUser && !allowBusiness && !allowAdmin;

  // If permission access not provided assumes everyone can access.
  if (noRestrictions) return <>{children}</>;

  // Prevent access to login or signup pages for users who are already authenticated,
  // as these actions are unnecessary and could lead to inconsistent behavior.
  if (user && guestOnly) return <Navigate to="/home" replace />;

  // If permission access was provided and
  // there is no user connected, redirect to login page.
  if (!user) return <Navigate to="/login" replace />;

  // For admins only.
  if (allowAdmin && user.isAdmin) return <>{children}</>;

  // For business only.
  if (allowBusiness && user.isBusiness) return <>{children}</>;

  // For any logged in user.
  if (allowLoggedUser && user) return <>{children}</>;

  // Incase of user privilege doesn't meet the requirements.
  return <Navigate to="/home" replace />;
};

export default RouteGuard;
