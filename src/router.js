import {Suspense, lazy} from "react";
import {Navigate} from "react-router-dom";
import SidebarLayout from "./layout/sidebarLayout";
import BaseLayout from "./layout/baseLayout";

import SuspenseLoader from "./components/suspenseLoader";

const Loader = (Component) => (props) =>
  (
    <Suspense fallback={<SuspenseLoader />}>
      <Component {...props} />
    </Suspense>
  );

// Pages

const Login = Loader(lazy(() => import("./pages/login")));

// Dashboards

const Dashboard = Loader(lazy(() => import("./pages/dashboard")));

// Applications

// const Messenger = Loader(lazy(() => import('./pages/applications/Messenger')));

// Components

// const Buttons = Loader(
//   lazy(() => import('src/content/pages/Components/Buttons'))
// );
// const Modals = Loader(
//   lazy(() => import('src/content/pages/Components/Modals'))
// );
// const Accordions = Loader(
//   lazy(() => import('src/content/pages/Components/Accordions'))
// );
// const Tabs = Loader(lazy(() => import('src/content/pages/Components/Tabs')));
// const Badges = Loader(
//   lazy(() => import('src/content/pages/Components/Badges'))
// );
// const Tooltips = Loader(
//   lazy(() => import('src/content/pages/Components/Tooltips'))
// );
// const Avatars = Loader(
//   lazy(() => import('src/content/pages/Components/Avatars'))
// );
// const Cards = Loader(lazy(() => import('src/content/pages/Components/Cards')));
// const Forms = Loader(lazy(() => import('src/content/pages/Components/Forms')));

// Status

// const Status404 = Loader(
//   lazy(() => import('./content/pages/Status/Status404'))
// );
// const Status500 = Loader(
//   lazy(() => import('src/content/pages/Status/Status500'))
// );
// const StatusComingSoon = Loader(
//   lazy(() => import('src/content/pages/Status/ComingSoon'))
// );
// const StatusMaintenance = Loader(
//   lazy(() => import('src/content/pages/Status/Maintenance'))
// );

const routes = [
  {
    path: "",
    element: <BaseLayout />,
    children: [
      {
        path: "/",
        element: <Login />,
      },
      {
        path: "login",
        element: <Navigate to="/" replace />,
      },
      // {
      //   path: 'status',
      //   children: [
      //     {
      //       path: '',
      //       element: <Navigate to="404" replace />
      //     },
      //     {
      //       path: '404',
      //       element: <Status404 />
      //     },
      //     {
      //       path: '500',
      //       element: <Status500 />
      //     },
      //     {
      //       path: 'maintenance',
      //       element: <StatusMaintenance />
      //     },
      //     {
      //       path: 'coming-soon',
      //       element: <StatusComingSoon />
      //     }
      //   ]
      // },
      // {
      //   path: '*',
      //   element: <Status404 />
      // }
    ],
  },

  {
    path: "app",
    element: <SidebarLayout />,
    children: [
      {
        path: "",
        element: <Navigate to="overview" replace />,
      },
      {
        path: "overview",
        element: <Dashboard />,
      },
      // {
      //   path: 'messenger',
      //   element: <Messenger />
      // },
      // {
      //   path: "profile",
      //   element: <UserProfile />,
      // },
      // {
      //   path: "settings",
      //   element: <UserSettings />,
      // },
    ],
  },
  // {
  //   path: 'management',
  //   element: <SidebarLayout />,
  //   children: [
  //     {
  //       path: '',
  //       element: <Navigate to="transactions" replace />
  //     },
  //     {
  //       path: 'profile',
  //       children: [
  //         {
  //           path: '',
  //           element: <Navigate to="details" replace />
  //         },
  //       ]
  //     }
  //   ]
  // },
  // {
  //   path: '/components',
  //   element: <SidebarLayout />,
  //   children: [
  //     {
  //       path: '',
  //       element: <Navigate to="buttons" replace />
  //     },
  //     {
  //       path: 'buttons',
  //       element: <Buttons />
  //     },
  //     {
  //       path: 'modals',
  //       element: <Modals />
  //     },
  //     {
  //       path: 'accordions',
  //       element: <Accordions />
  //     },
  //     {
  //       path: 'tabs',
  //       element: <Tabs />
  //     },
  //     {
  //       path: 'badges',
  //       element: <Badges />
  //     },
  //     {
  //       path: 'tooltips',
  //       element: <Tooltips />
  //     },
  //     {
  //       path: 'avatars',
  //       element: <Avatars />
  //     },
  //     {
  //       path: 'cards',
  //       element: <Cards />
  //     },
  //     {
  //       path: 'forms',
  //       element: <Forms />
  //     }
  //   ]
  // }
];

export default routes;
