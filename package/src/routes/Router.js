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
const Personal = lazy(() => import("../views/personal/Personal.js"));
const KPIFake = lazy(() => import("../views/kpi/KPIFake.js"));
const KPIDetail = lazy(() => import("../views/kpi/KPIDetail.js"));

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
      { path: "/setting", element: <></> },
      { path: "/update-progress", element: <></> },
      { path: "/kpi/add-kpi", element: <AddKPI /> },
      { path: "/kpi/add-success", element: <KPIFake /> },
      { path: "/kpi/detail", element: <KPIDetail /> },
      { path: "/personal", element: <Personal /> }
    ],
  },
];

export default ThemeRoutes;
