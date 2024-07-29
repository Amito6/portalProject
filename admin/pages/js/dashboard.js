import { getDataFunc,formatDateFunc } from "../../module/module.js";


var options = {
    series: [{
    name: 'series1',
    data: [31, 40, 28, 51, 42, 109, 100]
  }, {
    name: 'series2',
    data: [11, 32, 45, 32, 34, 52, 41]
  }],
    chart: {
    height: 350,
    type: 'line'
  },
  dataLabels: {
    enabled: "area"
  },
  stroke: {
    curve: 'smooth'
  },
  xaxis: {
    type: 'datetime',
    categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z", "2018-09-19T02:30:00.000Z", "2018-09-19T03:30:00.000Z", "2018-09-19T04:30:00.000Z", "2018-09-19T05:30:00.000Z", "2018-09-19T06:30:00.000Z"]
  },
  tooltip: {
    x: {
      format: 'dd/MM/yy HH:mm'
    },
  },
  };

  var optionsColumnChart = {
    series: [{
    name: 'Net Profit',
    data: [44, 55, 57, 56, 61, 58, 63, 60, 66]
  }, {
    name: 'Revenue',
    data: [76, 85, 101, 98, 87, 105, 91, 114, 94]
  }, {
    name: 'Free Cash Flow',
    data: [35, 41, 36, 26, 45, 48, 52, 53, 41]
  }],
    chart: {
    type: 'bar',
    height: 350
  },
  plotOptions: {
    bar: {
      horizontal: false,
      columnWidth: '55%',
      endingShape: 'rounded'
    },
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    show: true,
    width: 2,
    colors: ['transparent']
  },
  xaxis: {
    categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
  },
  yaxis: {
    title: {
      text: '$ (thousands)'
    }
  },
  fill: {
    opacity: 1
  },
  tooltip: {
    y: {
      formatter: function (val) {
        return "$ " + val + " thousands"
      }
    }
  }
  };






export const dashboardFunc = () =>{
  //global variable
    let data = getDataFunc();
    let users = data ? data.users ? data.users : [] : [];
    let courses = data ? data.courses ? data.courses : [] : [];
    let recentStudents = users.slice(0,5);
    let recentCourses = users.slice(0,5);
    let dashboardEl = document.querySelector(".dashboard");
    let areaChart = dashboardEl.querySelector(".area-chart");
    let areaColoumnChart = dashboardEl.querySelector(".area-column-chart");
    let recentStudentsEl = dashboardEl.querySelector(".recent-student");
    let recentCoursesEl = dashboardEl.querySelector(".recent-courses")
   
   
   /* Create chart coding */
    var chart = new ApexCharts(areaChart, options);
    chart.render();
    var chartColumn = new ApexCharts(areaColoumnChart,optionsColumnChart);
    chartColumn.render();

    /* recent students */
    recentStudents.forEach((item,index)=>{
      recentStudentsEl.innerHTML += `
      <div class="recent-student">
        <div class="grid grid-cols-4 gap-2 border-b p-2">
        <img src="${item.profile}" class="w-8 h-8 rounded-full " alt="">
        <div class="col-span-2">
            <h5 class="mb-1">${item.name}</h5>
            <p class="text-sm text-gray-400">${formatDateFunc(item.createdAt)}</p>
        </div>
        <div>
            ${
              item.status ? 
              `
              <button class="btn bg-green-600 text-white rounded-full w-9 h-9 flex items-center justify-content-center">
              <i class="fa-regular fa-circle-xmark"></i>
              </button>
              ` : 
              `
              <button class="btn bg-red-600 text-white rounded-full w-9 h-9 flex items-center justify-content-center">
              <i class="fa-regular fa-circle-xmark"></i>
              </button>
              
              `

            }
        </div>
    </div>`
    })

    /* recent courses coding */

    recentCourses.forEach((item,index)=>{
      recentCoursesEl.innerHTML += `
      <div class="recent-student">
        <div class="grid grid-cols-4 gap-2 border-b p-2">
        <img src="${item.profile}" class="w-8 h-8 rounded-full " alt="">
        <div class="col-span-2">
            <h5 class="mb-1">${item.name}</h5>
            <p class="text-sm text-gray-400">${formatDateFunc(item.createdAt)}</p>
        </div>
        <div>
            ${
              item.status ? 
              `
              <button class="btn bg-green-600 text-white rounded-full w-9 h-9 flex items-center justify-content-center">
              <i class="fa-regular fa-circle-xmark"></i>
              </button>
              ` : 
              `
              <button class="btn bg-red-600 text-white rounded-full w-9 h-9 flex items-center justify-content-center">
              <i class="fa-regular fa-circle-xmark"></i>
              </button>
              
              `

            }
        </div>
    </div>`
    })
    
}


`
 
    
`;


`
<div class="grid grid-cols-4 gap-2 border-b p-2">
    <img src="../assets/images/hotelLogo.jpg" class="w-8 h-8 rounded-full " alt="">
    <div class="col-span-2">
        <h5 class="mb-1">Alok kumar</h5>
        <p class="text-sm text-gray-400">24-0901993</p>
    </div>
    <div>
        <button class="btn bg-red-600 text-white rounded-full w-9 h-9 flex items-center justify-content-center"><i class="fa-regular fa-circle-xmark"></i></button>
    </div>
</div>

`