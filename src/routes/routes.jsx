import LandingPage from "../views/LandingPage/LandingPage";
import ProfilePage from "../views/ProfilePage/ProfilePage";

var indexRoutes = [
  { path: "/profile", name: "ProfilePage", component: ProfilePage },
  { path: "/", name: "Home", component: LandingPage }
];

export default indexRoutes;
