import React, { startTransition } from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

// Using React.lazy
const BusinessRegistrationForm = React.lazy(() =>
  import("../Dashboard/utils/BusinessRegistrationForm")
);
const PageNotFound = React.lazy(() => import("../Dashboard/PageNotFound"));
const Main = React.lazy(() => import("../Dashboard/Main"));
const Blog = React.lazy(() => import("../Dashboard/Blog"));
const AboutUs = React.lazy(() => import("../Dashboard/AboutUs"));
const UserLayout = React.lazy(() => import("../layout/Userlayout"));
const Services = React.lazy(() => import("../Dashboard/utils/Services"));
const Contact = React.lazy(() => import("../Dashboard/utils/Contact"));
const Login = React.lazy(() => import("../auth/Login"));
const Signup = React.lazy(() => import("../auth/Signup"));
export const MainRoute = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route>
        <Route path="/" element={<UserLayout></UserLayout>}>
          <Route
            index
            element={<Main title="User - Information"></Main>}
          ></Route>

          {/* User Dashboard Components */}
          <Route
            path="/blog"
            element={<Blog title="User - Information"></Blog>}
          ></Route>
          <Route
            path="/aboutus"
            element={<AboutUs title="User - About" />}
          ></Route>

          <Route
            path="/services"
            element={<Services title="User - About" />}
          ></Route>

          <Route
            path="/contact"
            element={<Contact title="User - Contact" />}
          ></Route>
          <Route
            path="/businessRegistrationForm"
            element={
              <BusinessRegistrationForm title="BusinessRegistrationForm" />
            }
          ></Route>
        </Route>

        <Route path="*" element={<PageNotFound />} />
      </Route>
      // auth
      <Route>
        <Route
          path="auth/login"
          element={<Login title="User - Contact" />}
        ></Route>

        <Route
          path="auth/Signup"
          element={<Signup title="User - Contact" />}
        ></Route>
      </Route>
    </>
  )
);

const App = () => {
  return startTransition(() => <MainRoute />);
};

export default App;
