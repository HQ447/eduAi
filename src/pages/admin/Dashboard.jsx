/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
// Dashboard.jsx
// Dashboard.jsx
import { useState, useEffect } from "react";
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  PieChart,
  Pie,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Cell,
  RadialBarChart,
  RadialBar,
} from "recharts";
import {
  Users,
  DollarSign,
  TrendingUp,
  Globe,
  Award,
  CheckCircle,
  Calendar,
  Clock,
  ArrowUp,
  User,
} from "lucide-react";

const Dashboard = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // Handle window resize for responsive charts
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Simulate loading data
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  // Responsive chart configurations
  const getChartHeight = () => {
    if (windowWidth < 640) return 200; // Small screens
    if (windowWidth < 1024) return 250; // Medium screens
    return 300; // Large screens
  };

  const getFontSize = () => {
    return windowWidth < 640 ? 10 : 12; // Smaller font on small screens
  };

  // Responsive margins for charts
  const getChartMargins = () => {
    if (windowWidth < 640) {
      return { top: 5, right: 10, left: 0, bottom: 0 };
    }
    return { top: 10, right: 30, left: 0, bottom: 0 };
  };

  // Dummy data for charts and statistics
  const todayStats = {
    newUsers: 42,
    totalUsers: 8745,
    totalIncome: 125678.9,
  };

  const paymentStats = {
    totalPayment: 568942.5,
    weeklyPayment: 18450.75,
    monthlyPayment: 78500.25,
    yearlyPayment: 568942.5,
  };

  const monthlyUserGrowth = [
    { month: "Jan", users: 1520 },
    { month: "Feb", users: 1750 },
    { month: "Mar", users: 2120 },
    { month: "Apr", users: 2340 },
    { month: "May", users: 2790 },
    { month: "Jun", users: 3140 },
    { month: "Jul", users: 3580 },
    { month: "Aug", users: 4120 },
    { month: "Sep", users: 4360 },
    { month: "Oct", users: 4780 },
    { month: "Nov", users: 5240 },
    { month: "Dec", users: 5780 },
  ];

  // For small screens, reduce data points to prevent crowding
  const responsiveMonthlyUserGrowth =
    windowWidth < 640
      ? monthlyUserGrowth.filter((_, i) => i % 2 === 0)
      : monthlyUserGrowth;

  const yearlyUserGrowth = [
    { year: "2020", users: 2150 },
    { year: "2021", users: 3650 },
    { year: "2022", users: 5120 },
    { year: "2023", users: 6780 },
    { year: "2024", users: 8745 },
    { year: "2025", users: 9120 },
  ];

  const topCourseRatings = [
    { name: "Web Development Bootcamp", rating: 4.9, students: 1245 },
    { name: "Machine Learning A-Z", rating: 4.8, students: 980 },
    { name: "Python for Data Science", rating: 4.7, students: 1120 },
    { name: "UI/UX Design Masterclass", rating: 4.7, students: 856 },
    { name: "JavaScript Advanced Concepts", rating: 4.6, students: 745 },
  ];

  const mostRegisteredCourses = [
    { name: "Web Development Bootcamp", students: 1245 },
    { name: "Python for Data Science", students: 1120 },
    { name: "Machine Learning A-Z", students: 980 },
    { name: "UI/UX Design Masterclass", students: 856 },
    { name: "JavaScript Advanced Concepts", students: 745 },
  ];

  // For small screens, abbreviate course names
  const getResponsiveCourseName = (name) => {
    if (windowWidth < 640) {
      if (name.includes("Development")) return "Web Dev Bootcamp";
      if (name.includes("Machine Learning")) return "ML A-Z";
      if (name.includes("Python")) return "Python Data Sci";
      if (name.includes("UI/UX")) return "UI/UX Design";
      if (name.includes("JavaScript")) return "JS Advanced";
      return name;
    }
    return name;
  };

  const responsiveMostRegisteredCourses = mostRegisteredCourses.map(
    (course) => ({
      ...course,
      name: getResponsiveCourseName(course.name),
    })
  );

  const usersByCountry = [
    { name: "United States", value: 38 },
    { name: "India", value: 25 },
    { name: "United Kingdom", value: 10 },
    { name: "Canada", value: 8 },
    { name: "Australia", value: 6 },
    { name: "Germany", value: 5 },
    { name: "Others", value: 8 },
  ];

  // Abbreviate country names for small screens
  const responsiveUsersByCountry = usersByCountry.map((country) => ({
    ...country,
    name:
      windowWidth < 640
        ? country.name === "United States"
          ? "USA"
          : country.name === "United Kingdom"
          ? "UK"
          : country.name
        : country.name,
  }));

  const recentConnectedUsers = [
    {
      id: 1,
      name: "John Smith",
      course: "Web Development Bootcamp",
      time: "5 minutes ago",
      avatar: "JS",
    },
    {
      id: 2,
      name: "Emma Wilson",
      course: "UI/UX Design Masterclass",
      time: "10 minutes ago",
      avatar: "EW",
    },
    {
      id: 3,
      name: "Michael Brown",
      course: "Python for Data Science",
      time: "25 minutes ago",
      avatar: "MB",
    },
    {
      id: 4,
      name: "Sophia Chen",
      course: "Machine Learning A-Z",
      time: "30 minutes ago",
      avatar: "SC",
    },
    {
      id: 5,
      name: "Daniel Lee",
      course: "JavaScript Advanced Concepts",
      time: "45 minutes ago",
      avatar: "DL",
    },
    {
      id: 6,
      name: "Olivia Taylor",
      course: "Web Development Bootcamp",
      time: "1 hour ago",
      avatar: "OT",
    },
  ];

  // Colors for charts
  const colors = {
    primary: "#4f46e5",
    secondary: "#10b981",
    accent: "#f59e0b",
    lightBlue: "#60a5fa",
    lightGreen: "#34d399",
    pink: "#ec4899",
    purple: "#8b5cf6",
    red: "#ef4444",
    orange: "#f97316",
    teal: "#14b8a6",
  };

  const colorArray = [
    colors.primary,
    colors.secondary,
    colors.accent,
    colors.lightBlue,
    colors.pink,
    colors.purple,
    colors.teal,
  ];

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-full">
        <div className="w-16 h-16 border-t-2 border-b-2 border-indigo-600 rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="p-4 md:p-6 bg-gray-50">
      <h1 className="mb-6 text-xl font-bold text-gray-800 md:text-2xl">
        Dashboard Overview
      </h1>

      {/* Today's Statistics Row */}
      <div className="grid grid-cols-1 gap-4 mb-6 md:grid-cols-3 md:gap-6">
        <StatCard
          icon={
            <Users
              className="text-blue-500"
              size={windowWidth < 640 ? 20 : 24}
            />
          }
          title="Today's New Users"
          value={todayStats.newUsers}
          trend="+12.3%"
          trendUp={true}
          bgColor="bg-gradient-to-r from-blue-50 to-indigo-50"
          borderColor="border-blue-100"
        />
        <StatCard
          icon={
            <User
              className="text-indigo-500"
              size={windowWidth < 640 ? 20 : 24}
            />
          }
          title="Total Users"
          value={todayStats.totalUsers.toLocaleString()}
          trend="+8.7%"
          trendUp={true}
          bgColor="bg-gradient-to-r from-indigo-50 to-purple-50"
          borderColor="border-indigo-100"
        />
        <StatCard
          icon={
            <DollarSign
              className="text-green-500"
              size={windowWidth < 640 ? 20 : 24}
            />
          }
          title="Total Income"
          value={`$${todayStats.totalIncome.toLocaleString()}`}
          trend="+15.4%"
          trendUp={true}
          bgColor="bg-gradient-to-r from-green-50 to-emerald-50"
          borderColor="border-green-100"
        />
      </div>

      {/* Payment Statistics Row */}
      <div className="grid grid-cols-2 gap-4 mb-6 md:grid-cols-4 md:gap-6">
        <PaymentCard
          title="Total Payment"
          value={`$${paymentStats.totalPayment.toLocaleString()}`}
          icon={
            <DollarSign
              className="text-green-500"
              size={windowWidth < 640 ? 16 : 20}
            />
          }
          bgColor="bg-white"
        />
        <PaymentCard
          title="Weekly Payment"
          value={`$${paymentStats.weeklyPayment.toLocaleString()}`}
          icon={
            <Calendar
              className="text-blue-500"
              size={windowWidth < 640 ? 16 : 20}
            />
          }
          bgColor="bg-white"
        />
        <PaymentCard
          title="Monthly Payment"
          value={`$${paymentStats.monthlyPayment.toLocaleString()}`}
          icon={
            <Calendar
              className="text-purple-500"
              size={windowWidth < 640 ? 16 : 20}
            />
          }
          bgColor="bg-white"
        />
        <PaymentCard
          title="Yearly Payment"
          value={`$${paymentStats.yearlyPayment.toLocaleString()}`}
          icon={
            <Calendar
              className="text-orange-500"
              size={windowWidth < 640 ? 16 : 20}
            />
          }
          bgColor="bg-white"
        />
      </div>

      {/* Charts - Row 1 */}
      <div className="grid grid-cols-1 gap-4 mb-6 lg:grid-cols-2 md:gap-6">
        <ChartCard title="Monthly User Growth">
          <ResponsiveContainer width="100%" height={getChartHeight()}>
            <AreaChart
              data={responsiveMonthlyUserGrowth}
              margin={getChartMargins()}
            >
              <defs>
                <linearGradient id="colorUsers" x1="0" y1="0" x2="0" y2="1">
                  <stop
                    offset="5%"
                    stopColor={colors.primary}
                    stopOpacity={0.8}
                  />
                  <stop
                    offset="95%"
                    stopColor={colors.primary}
                    stopOpacity={0.1}
                  />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis
                dataKey="month"
                stroke="#6b7280"
                tick={{ fontSize: getFontSize() }}
                interval={windowWidth < 640 ? 0 : "preserveStartEnd"}
              />
              <YAxis
                stroke="#6b7280"
                tick={{ fontSize: getFontSize() }}
                tickFormatter={(value) =>
                  windowWidth < 640 ? value / 1000 + "k" : value
                }
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: "#fff",
                  borderRadius: "0.5rem",
                  boxShadow:
                    "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
                  border: "none",
                  fontSize: getFontSize(),
                }}
              />
              <Area
                type="monotone"
                dataKey="users"
                stroke={colors.primary}
                strokeWidth={2}
                fillOpacity={1}
                fill="url(#colorUsers)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </ChartCard>

        <ChartCard title="Yearly User Growth">
          <ResponsiveContainer width="100%" height={getChartHeight()}>
            <BarChart data={yearlyUserGrowth} margin={getChartMargins()}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis
                dataKey="year"
                stroke="#6b7280"
                tick={{ fontSize: getFontSize() }}
              />
              <YAxis
                stroke="#6b7280"
                tick={{ fontSize: getFontSize() }}
                tickFormatter={(value) =>
                  windowWidth < 640 ? value / 1000 + "k" : value
                }
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: "#fff",
                  borderRadius: "0.5rem",
                  boxShadow:
                    "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
                  border: "none",
                  fontSize: getFontSize(),
                }}
              />
              <Bar
                dataKey="users"
                fill={colors.lightBlue}
                radius={[4, 4, 0, 0]}
              >
                {yearlyUserGrowth.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={colorArray[index % colorArray.length]}
                  />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </ChartCard>
      </div>

      {/* Charts - Row 2 */}
      <div className="grid grid-cols-1 gap-4 mb-6 lg:grid-cols-2 md:gap-6">
        <ChartCard title="Top Course Ratings">
          <div className="h-[250px] md:h-[300px] overflow-y-auto pr-2 custom-scrollbar">
            {topCourseRatings.map((course, index) => (
              <div
                key={index}
                className="p-2 mb-4 transition-all duration-300 rounded-lg last:mb-0 hover:bg-gray-50"
              >
                <div className="flex items-center justify-between mb-1">
                  <div className="flex items-center">
                    <span className="mr-2 font-medium text-gray-700 truncate max-w-[120px] md:max-w-xs text-xs md:text-sm">
                      {getResponsiveCourseName(course.name)}
                    </span>
                    <span className="hidden text-xs text-gray-500 sm:inline">
                      ({course.students} students)
                    </span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-xs font-bold text-indigo-600 md:text-sm">
                      {course.rating}
                    </span>
                    <Award
                      className="ml-1 text-yellow-500"
                      size={windowWidth < 640 ? 14 : 16}
                    />
                  </div>
                </div>
                <div className="w-full h-2 bg-gray-200 rounded-full">
                  <div
                    className="h-2 transition-all duration-500 ease-in-out transform rounded-full bg-gradient-to-r from-yellow-400 to-yellow-500 hover:scale-y-110"
                    style={{ width: `${(course.rating / 5) * 100}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </ChartCard>

        <ChartCard title="Most Registered Courses">
          <ResponsiveContainer width="100%" height={getChartHeight()}>
            <BarChart
              data={responsiveMostRegisteredCourses}
              layout="vertical"
              margin={{
                top: 5,
                right: 10,
                left: windowWidth < 640 ? 80 : 120,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" horizontal={false} />
              <XAxis
                type="number"
                stroke="#6b7280"
                tick={{ fontSize: getFontSize() }}
                tickFormatter={(value) =>
                  windowWidth < 640 ? value / 1000 + "k" : value
                }
              />
              <YAxis
                dataKey="name"
                type="category"
                scale="band"
                stroke="#6b7280"
                width={windowWidth < 640 ? 80 : 120}
                tick={{ fontSize: getFontSize() }}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: "#fff",
                  borderRadius: "0.5rem",
                  boxShadow:
                    "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
                  border: "none",
                  fontSize: getFontSize(),
                }}
                formatter={(value) => [`${value} Students`, "Enrollment"]}
              />
              <Bar
                dataKey="students"
                fill={colors.lightGreen}
                radius={[0, 4, 4, 0]}
                animationDuration={1500}
              >
                {mostRegisteredCourses.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={colorArray[index % colorArray.length]}
                    className="transition-opacity duration-300 hover:opacity-80"
                  />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </ChartCard>
      </div>

      {/* Charts - Row 3 */}
      <div className="grid grid-cols-1 gap-4 mb-6 lg:grid-cols-2 md:gap-6">
        <ChartCard title="Users by Country">
          <div className="flex flex-col items-center justify-center md:flex-row">
            <div className="w-full md:w-1/2">
              <ResponsiveContainer
                width="100%"
                height={windowWidth < 640 ? 200 : 250}
              >
                <PieChart>
                  <Pie
                    data={responsiveUsersByCountry}
                    cx="50%"
                    cy="50%"
                    innerRadius={windowWidth < 640 ? 40 : 60}
                    outerRadius={windowWidth < 640 ? 70 : 90}
                    fill="#8884d8"
                    dataKey="value"
                    paddingAngle={2}
                    label={
                      windowWidth < 640
                        ? false
                        : (entry) => `${entry.name.substring(0, 3)}..`
                    }
                    labelLine={false}
                  >
                    {usersByCountry.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={colorArray[index % colorArray.length]}
                        className="transition-opacity duration-300 hover:opacity-80"
                        style={{
                          filter: "drop-shadow(0px 2px 3px rgba(0, 0, 0, 0.1))",
                        }}
                      />
                    ))}
                  </Pie>
                  <Tooltip
                    formatter={(value) => [`${value}%`, "Percentage"]}
                    contentStyle={{
                      backgroundColor: "#fff",
                      borderRadius: "0.5rem",
                      boxShadow:
                        "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
                      border: "none",
                      fontSize: getFontSize(),
                    }}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="w-full mt-4 md:w-1/2 md:mt-0">
              <div className="grid grid-cols-1 gap-2">
                {responsiveUsersByCountry.map((country, index) => (
                  <div
                    key={index}
                    className="flex items-center p-1.5 hover:bg-gray-50 rounded-md transition-all duration-300"
                  >
                    <div
                      className="w-2.5 h-2.5 rounded-full mr-2"
                      style={{
                        backgroundColor: colorArray[index % colorArray.length],
                      }}
                    ></div>
                    <div className="flex justify-between w-full">
                      <span className="text-xs text-gray-700 md:text-sm">
                        {country.name}
                      </span>
                      <span className="text-xs font-medium md:text-sm">
                        {country.value}%
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </ChartCard>

        <ChartCard title="Recent Connected Students">
          <div className="h-[250px] md:h-[300px] overflow-y-auto pr-2 custom-scrollbar">
            {recentConnectedUsers.map((user) => (
              <div
                key={user.id}
                className="flex items-center p-2.5 border-b border-gray-100 last:border-0 hover:bg-gray-50 transition-all duration-300 rounded-lg cursor-pointer"
              >
                <div className="flex items-center justify-center flex-shrink-0 w-8 h-8 font-medium text-indigo-600 transition-transform duration-300 bg-indigo-100 rounded-full shadow-sm md:w-10 md:h-10 hover:scale-110">
                  {user.avatar}
                </div>
                <div className="flex-grow ml-3 md:ml-4">
                  <h4 className="text-xs font-medium text-gray-900 md:text-sm">
                    {user.name}
                  </h4>
                  <p className="text-xs text-gray-500 truncate max-w-[140px] md:max-w-full">
                    {windowWidth < 640
                      ? getResponsiveCourseName(user.course)
                      : `Enrolled in: ${user.course}`}
                  </p>
                </div>
                <div className="flex items-center text-xs text-gray-400 whitespace-nowrap">
                  <Clock size={windowWidth < 640 ? 10 : 12} className="mr-1" />
                  {user.time}
                </div>
              </div>
            ))}
          </div>
        </ChartCard>
      </div>
    </div>
  );
};

// Stat Card Component with enhanced styling
const StatCard = ({
  icon,
  title,
  value,
  trend,
  trendUp,
  bgColor,
  borderColor,
}) => {
  return (
    <div
      className={`${bgColor} border ${borderColor} rounded-xl shadow-sm p-4 md:p-6 transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1 group`}
    >
      <div className="flex items-start justify-between">
        <div>
          <h3 className="mb-1 text-xs font-medium text-gray-500 md:text-sm">
            {title}
          </h3>
          <p className="text-lg font-bold text-gray-900 md:text-2xl">{value}</p>
          <div
            className={`mt-2 flex items-center ${
              trendUp ? "text-green-600" : "text-red-600"
            }`}
          >
            {trendUp ? (
              <ArrowUp size={14} />
            ) : (
              <ArrowUp size={14} className="transform rotate-180" />
            )}
            <span className="ml-1 text-xs md:text-sm">
              {trend} from yesterday
            </span>
          </div>
        </div>
        <div className="p-2 transition-shadow duration-300 bg-white rounded-lg shadow-sm md:p-3 group-hover:shadow-md">
          {icon}
        </div>
      </div>
    </div>
  );
};

// Payment Card Component with minimalist design and hover effects
const PaymentCard = ({ title, value, icon, bgColor }) => {
  return (
    <div
      className={`${bgColor} rounded-xl shadow-sm p-3 md:p-5 transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1 border border-gray-100 group`}
    >
      <div className="flex items-center justify-between mb-1 md:mb-2">
        <h3 className="text-xs font-medium text-gray-500 md:text-sm">
          {title}
        </h3>
        <div className="p-1.5 md:p-2 rounded-lg bg-gray-50 group-hover:bg-gray-100 transition-colors duration-300">
          {icon}
        </div>
      </div>
      <p className="text-sm font-bold text-gray-900 md:text-xl">{value}</p>
    </div>
  );
};

// Chart Card Component with improved shadows and hover effects
const ChartCard = ({ title, children }) => {
  return (
    <div className="p-4 transition-all duration-300 bg-white border border-gray-100 shadow-sm rounded-xl md:p-6 hover:shadow-md">
      <h2 className="mb-3 text-base font-semibold text-gray-800 md:text-lg md:mb-4">
        {title}
      </h2>
      {children}
    </div>
  );
};

// Add a style block for custom scrollbar
const styleElement = document.createElement("style");
styleElement.textContent = `
  .custom-scrollbar::-webkit-scrollbar {
    width: 4px;
  }
  
  .custom-scrollbar::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 10px;
  }
  
  .custom-scrollbar::-webkit-scrollbar-thumb {
    background: #d1d5db;
    border-radius: 10px;
  }
  
  .custom-scrollbar::-webkit-scrollbar-thumb:hover {
    background: #9ca3af;
  }
`;
document.head.appendChild(styleElement);

export default Dashboard;
