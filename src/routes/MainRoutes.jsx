import { Route, Routes } from "react-router-dom";
import { SignIn } from "../pages/SignIn";
import { SignUp } from "../pages/SignUp";
import { UserLayout } from "../layout/UserLayout";
import { AdminLayoat } from "../layout/AdminLayoat";
import { AdminMeals } from "../pages/admin/AdminMeals";
import { useSelector } from "react-redux";
import { ProtectedRoute } from "./ProtectedRoute";
import { USERS_ROLE } from "../constans";
import { MealLayout } from "../layout/MealLayout";

export const MainRoutes = () => {
  const role = useSelector((state) => state.auth.user.role);

  const isAllowed = (roles) => {
    return roles.includes(role);
  };
  return (
    <Routes>
      <Route
        path="/"
        element={
          <ProtectedRoute
            isAllowed={isAllowed([USERS_ROLE.GUEST, USERS_ROLE.USER])}
            fallBacPath="/admin"
            component={UserLayout}
          />
        }
      >
        <Route
          index
          element={
            <ProtectedRoute
              isAllowed={isAllowed([USERS_ROLE.GUEST, USERS_ROLE.USER])}
              fallBacPath="/admin"
              component={MealLayout}
            />
          }
        />
        <Route
          path="signin"
          element={
            <ProtectedRoute
              isAllowed={isAllowed([USERS_ROLE.GUEST, USERS_ROLE.USER])}
              fallBacPath={role === USERS_ROLE.ADMIN ? "/admin" : "/"}
              component={SignIn}
            />
          }
        >
          <Route
            path="signup"
            element={
              <ProtectedRoute
                isAllowed={isAllowed([USERS_ROLE.GUEST, USERS_ROLE.USER])}
                fallBacPath={role === UserLayout.ADMIN ? "/admin" : "/"}
                component={SignUp}
              />
            }
          />
        </Route>
      </Route>

      <Route
        path="/admin"
        element={
          <ProtectedRoute
            isAllowed={isAllowed([USERS_ROLE.ADMIN])}
            fallBacPath="/"
            component={AdminLayoat}
          />
        }
      >
        <Route index element={<AdminMeals />} />
      </Route>
    </Routes>
  );
};
