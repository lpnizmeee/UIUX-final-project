// import React from "react";
// import { Card, CardContent, Typography, Box } from "@mui/material";
// import Chart from 'react-apexcharts';

// const SalesOverview = () => {
//   const optionssalesoverview = {
//     grid: {
//       show: true,
//       borderColor: "transparent",
//       strokeDashArray: 2,
//       padding: {
//         left: 0,
//         right: 0,
//         bottom: 0,
//       },
//     },
//     plotOptions: {
//       bar: {
//         horizontal: false,
//         columnWidth: "42%",
//         endingShape: "rounded",
//         borderRadius: 5,
//       },
//     },

//     colors: ["#1e4db7", "#a7e3f4"],
//     fill: {
//       type: "solid",
//       opacity: 1,
//     },
//     chart: {
//       offsetX: -15,
//       toolbar: {
//         show: false,
//       },
//       foreColor: "#adb0bb",
//       fontFamily: "'DM Sans',sans-serif",
//       sparkline: {
//         enabled: false,
//       },
//     },
//     dataLabels: {
//       enabled: false,
//     },
//     markers: {
//       size: 0,
//     },
//     legend: {
//       show: false,
//     },
//     xaxis: {
//       type: "category",
//       categories: [
//         "Jan",
//         "Feb",
//         "Mar",
//         "Apr",
//         "May",
//         "Jun",
//         "July",
//         "Aug",
//         "Sept",
//         "Oct",
//         "Nov",
//         "Dec",
//       ],
//       labels: {
//         style: {
//           cssClass: "grey--text lighten-2--text fill-color",
//         },
//       },
//     },
//     yaxis: {
//       show: true,
//       min: 100,
//       max: 400,
//       tickAmount: 3,
//       labels: {
//         style: {
//           cssClass: "grey--text lighten-2--text fill-color",
//         },
//       },
//     },
//     stroke: {
//       show: true,
//       width: 5,
//       lineCap: "butt",
//       colors: ["transparent"],
//     },
//     tooltip: {
//       theme: "dark",
//     },
//   };
//   const seriessalesoverview = [
//     {
//       name: "Ample Admin",
//       data: [355, 390, 300, 350, 390, 180, 355, 390, 300, 350, 390, 180],
//     },
//     {
//       name: "Pixel Admin",
//       data: [280, 250, 325, 215, 250, 310, 280, 250, 325, 215, 250, 310],
//     },
//   ];

//   return (
//     <Card
//       variant="outlined"
//       sx={{
//         paddingBottom: "0",
//       }}
//     >
//       <CardContent
//         sx={{
//           paddingBottom: "16px !important",
//         }}
//       >
//         <Box
//           sx={{
//             display: {
//               sm: "flex",
//               xs: "block",
//             },
//             alignItems: "center",
//           }}
//         >
//           <Box>
//             <Typography
//               variant="h3"
//               sx={{
//                 marginBottom: "0",
//               }}
//               gutterBottom
//             >
//               Sales Overview
//             </Typography>
//           </Box>
//           <Box
//             sx={{
//               marginLeft: "auto",
//               display: "flex",
//               mt: {
//                 lg: 0,
//                 xs: 2,
//               },
//             }}
//           >
//             <Box
//               sx={{
//                 display: "flex",
//                 alignItems: "center",
//               }}
//             >
//               <Box
//                 sx={{
//                   backgroundColor: "secondary.main",
//                   borderRadius: "50%",
//                   height: 8,
//                   width: 8,
//                   mr: 1,
//                 }}
//               />
//               <Typography
//                 variant="h6"
//                 sx={{
//                   color: "secondary.main",
//                 }}
//               >
//                 Ample
//               </Typography>
//             </Box>
//             <Box
//               sx={{
//                 display: "flex",
//                 alignItems: "center",
//                 marginLeft: "10px",
//               }}
//             >
//               <Box
//                 sx={{
//                   backgroundColor: "primary.main",
//                   borderRadius: "50%",
//                   height: 8,
//                   width: 8,
//                   mr: 1,
//                 }}
//               />
//               <Typography
//                 variant="h6"
//                 sx={{
//                   color: "primary.main",
//                 }}
//               >
//                 Pixel Admin
//               </Typography>
//             </Box>
//           </Box>
//         </Box>
//         <Box
//           sx={{
//             marginTop: "25px",
//           }}
//         >
//           <Chart
//             options={optionssalesoverview}
//             series={seriessalesoverview}
//             type="bar"
//             height="295px"
//           />
//         </Box>
//       </CardContent>
//     </Card>
//   );
// };

// export default SalesOverview;
import React, { useState } from "react";
import { Card, CardContent, Typography, Box, colors } from "@mui/material";
import Chart from "react-apexcharts";
import { CheckboxesAutocomplete } from "../../../components/Forms/AutoComplete/CheckboxesAutocomplete";

const KPIOverview = () => {
  const optionssalesoverview = {
    labels: ["Completed", "Not Completed"],
    colors: ["#1a97f5", "#a7e3f4"],
    chart: {
      toolbar: {
        show: false,
      },
      // foreColor: "#adb0bb",
      fontFamily: "'DM Sans',sans-serif",
    },
    dataLabels: {
      enabled: true,
      style: {
        fontSize: "12px",
      },
      formatter: function (val, opts) {
        return `${val}%`;
      },
    },
    legend: {
      show: false,
    },
    stroke: {
      show: true,
      width: 5,
      lineCap: "butt",
      colors: ["transparent"],
    },
    tooltip: {
      theme: "dark",
    },
  };

  const seriessalesoverview = [
    [80, 20],
    [70, 30],
    [25, 75],
    [60, 40],
    [90, 10],
  ];
  const seriesDiscription = [
    { title: "Work" },
    { title: "Social Activities" },
    { title: "House Chores" },
    { title: "Charity" },
    { title: "Health" },
  ];

  // Add a new state to track the selected KPIs
  const [selectedKPIs, setSelectedKPIs] = useState([0, 1, 2, 3]);
  // Update the CheckboxesAutocomplete component to handle changes
  // const handleKPIsChange = (event, value) => {
  //   setSelectedKPIs(value.map(item => seriesDiscription.indexOf(item)));
  // };

  return (
    <Card
      variant="outlined"
      sx={{
        marginY: 0,
        paddingBottom: "0",
      }}
    >
      <CardContent
        sx={{
          paddingBottom: "16px !important",
        }}
      >
        <Box
          sx={{
            display: {
              sm: "flex",
              xs: "block",
            },
            alignItems: "center",
          }}
        >
          <Box>
            <Typography
              variant="h3"
              sx={{
                marginBottom: "0",
              }}
              gutterBottom
            >
              KPIs Overview
            </Typography>
          </Box>
          <Box
            sx={{
              marginLeft: "auto",
              display: "flex",
              mt: {
                lg: 0,
                xs: 2,
              },
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <Box
                sx={{
                  backgroundColor: "primary.main",
                  borderRadius: "50%",
                  height: 8,
                  width: 8,
                  mr: 1,
                }}
              />
              <Typography
                variant="h6"
                sx={{
                  color: "primary.main",
                }}
              >
                Completed (%)
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                marginLeft: "10px",
              }}
            >
              <Box
                sx={{
                  backgroundColor: "#a7e3f4",
                  borderRadius: "50%",
                  height: 8,
                  width: 8,
                  mr: 1,
                }}
              />
              <Typography
                variant="h6"
                sx={{
                  color: "#a7e3f4",
                }}
              >
                Not Completed (%)
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            marginTop: "25px",
            display: {
              md: "grid",
              sm: "grid",
              xs: "block",
            },
            gridTemplateColumns: {
              md: "repeat(4, 1fr)",
              sm: "repeat(2, 1fr)",
            },
            justifyContent: "space-between",
          }}
        >
          {seriessalesoverview.map(
            (series, index) =>
              selectedKPIs.includes(index) && (
                <Box
                  key={index}
                  sx={{
                    display: "flex-column",
                    alignItems: "center",
                  }}
                >
                  <Chart
                    options={optionssalesoverview}
                    series={series}
                    type="pie"
                    height="230px"
                  />
                  <Typography variant="body1" align="center">
                    {seriesDiscription[index].title}
                  </Typography>
                </Box>
              )
          )}
        </Box>
      </CardContent>
    </Card>
  );
};

export default KPIOverview;
