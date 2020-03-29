import loadable from "@loadable/component";

const HomePage = loadable(() => import("./pages/HomePage"));
const SecondPage = loadable(() => import("./pages/SecondPage"));

import { homePageLoadData } from "./pages/HomePage";

export const routes = [
  {
    path: "/homepage",
    component: HomePage,
    loadData: homePageLoadData
  },
  {
    path: "/secondpage",
    component: SecondPage
  }
];
