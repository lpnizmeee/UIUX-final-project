import { lazy } from "react";
import { Navigate } from "react-router-dom";

/****Layouts*****/
const FullLayout = lazy(() => import("../layouts/FullLayout/FullLayout.js"));
/****End Layouts*****/

/*****Pages******/
const Dashboard1 = lazy(() => import("../views/dashboards/Dashboard1.js"));

/*****Tables******/
const BasicTable = lazy(() => import("../views/tables/BasicTable.js"));

// form elements
const ExAutoComplete = lazy(() =>
  import("../views/FormElements/ExAutoComplete.js")
);
const ExButton = lazy(() => import("../views/FormElements/ExButton.js"));
const ExCheckbox = lazy(() => import("../views/FormElements/ExCheckbox.js"));
const ExRadio = lazy(() => import("../views/FormElements/ExRadio.js"));
const ExSlider = lazy(() => import("../views/FormElements/ExSlider.js"));
const ExSwitch = lazy(() => import("../views/FormElements/ExSwitch.js"));
// form layouts
const FormLayouts = lazy(() => import("../views/FormLayouts/FormLayouts.js"));
const KPI = lazy(() => import("../views/kpi/KPI.js"));
const AddKPI = lazy(() => import("../views/kpi/AddKPI.js"));
const KPIFake = lazy(() => import("../views/kpi/KPIFake.js"));
const KPIDetail = lazy(() => import("../views/kpi/KPIDetail.js"));
const Setting = lazy(() => import("../views/Setting/Setting.js"));
const UpdateProgress = lazy(() => import("../views/update-progress/UpdateProgress.js"));
/*****Routes******/

const ThemeRoutes = [
  {
    path: "/",
    element: <FullLayout />,
    children: [
      { path: "/", element: <Navigate to="dashboards" /> },
      { path: "dashboards", exact: true, element: <Dashboard1 /> },
      { path: "tables/basic-table", element: <BasicTable /> },
      { path: "/form-layouts/form-layouts", element: <FormLayouts /> },
      { path: "/form-elements/autocomplete", element: <ExAutoComplete /> },
      { path: "/form-elements/button", element: <ExButton /> },
      { path: "/form-elements/checkbox", element: <ExCheckbox /> },
      { path: "/form-elements/radio", element: <ExRadio /> },
      { path: "/form-elements/slider", element: <ExSlider /> },
      { path: "/form-elements/switch", element: <ExSwitch /> },
      { path: "/kpi", element: <KPI /> },
<<<<<<< HEAD
      { path: "/setting", element: <></> },
=======
      { path: "/setting", element: <Setting /> },
      { path: "/update-progress", element: <></> },
>>>>>>> refs/remotes/origin/main
      { path: "/kpi/add-kpi", element: <AddKPI /> },
      { path: "/kpi/add-success", element: <KPIFake /> },
      { path: "/kpi/detail", element: <KPIDetail /> },
      { path: "/update-progress", element: <UpdateProgress /> },
    ],
  },
];

export default ThemeRoutes;
