/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
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

  // Simulate loading data
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

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

  const usersByCountry = [
    { name: "United States", value: 38 },
    { name: "India", value: 25 },
    { name: "United Kingdom", value: 10 },
    { name: "Canada", value: 8 },
    { name: "Australia", value: 6 },
    { name: "Germany", value: 5 },
    { name: "Others", value: 8 },
  ];

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
    <div className="p-6 bg-gray-50">
      <h1 className="mb-6 text-2xl font-bold text-gray-800">
        Dashboard Overview
      </h1>

      {/* Today's Statistics Row */}
      <div className="grid grid-cols-1 gap-6 mb-6 md:grid-cols-3">
        <StatCard
          icon={<Users className="text-blue-500" size={24} />}
          title="Today's New Users"
          value={todayStats.newUsers}
          trend="+12.3%"
          trendUp={true}
          bgColor="bg-gradient-to-r from-blue-50 to-indigo-50"
          borderColor="border-blue-100"
        />
        <StatCard
          icon={<User className="text-indigo-500" size={24} />}
          title="Total Users"
          value={todayStats.totalUsers.toLocaleString()}
          trend="+8.7%"
          trendUp={true}
          bgColor="bg-gradient-to-r from-indigo-50 to-purple-50"
          borderColor="border-indigo-100"
        />
        <StatCard
          icon={<DollarSign className="text-green-500" size={24} />}
          title="Total Income"
          value={`$${todayStats.totalIncome.toLocaleString()}`}
          trend="+15.4%"
          trendUp={true}
          bgColor="bg-gradient-to-r from-green-50 to-emerald-50"
          borderColor="border-green-100"
        />
      </div>

      {/* Payment Statistics Row */}
      <div className="grid grid-cols-1 gap-6 mb-6 md:grid-cols-4">
        <PaymentCard
          title="Total Payment"
          value={`$${paymentStats.totalPayment.toLocaleString()}`}
          icon={<DollarSign className="text-green-500" size={20} />}
          bgColor="bg-white"
        />
        <PaymentCard
          title="Weekly Payment"
          value={`$${paymentStats.weeklyPayment.toLocaleString()}`}
          icon={<Calendar className="text-blue-500" size={20} />}
          bgColor="bg-white"
        />
        <PaymentCard
          title="Monthly Payment"
          value={`$${paymentStats.monthlyPayment.toLocaleString()}`}
          icon={<Calendar className="text-purple-500" size={20} />}
          bgColor="bg-white"
        />
        <PaymentCard
          title="Yearly Payment"
          value={`$${paymentStats.yearlyPayment.toLocaleString()}`}
          icon={<Calendar className="text-orange-500" size={20} />}
          bgColor="bg-white"
        />
      </div>

      {/* Charts - Row 1 */}
      <div className="grid grid-cols-1 gap-6 mb-6 lg:grid-cols-2">
        <ChartCard title="Monthly User Growth">
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart
              data={monthlyUserGrowth}
              margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
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
              <XAxis dataKey="month" stroke="#6b7280" />
              <YAxis stroke="#6b7280" />
              <Tooltip
                contentStyle={{
                  backgroundColor: "#fff",
                  borderRadius: "0.5rem",
                  boxShadow:
                    "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
                  border: "none",
                }}
              />
              <Area
                type="monotone"
                dataKey="users"
                stroke={colors.primary}
                fillOpacity={1}
                fill="url(#colorUsers)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </ChartCard>

        <ChartCard title="Yearly User Growth">
          <ResponsiveContainer width="100%" height={300}>
            <BarChart
              data={yearlyUserGrowth}
              margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="year" stroke="#6b7280" />
              <YAxis stroke="#6b7280" />
              <Tooltip
                contentStyle={{
                  backgroundColor: "#fff",
                  borderRadius: "0.5rem",
                  boxShadow:
                    "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
                  border: "none",
                }}
              />
              <Bar dataKey="users" fill={colors.lightBlue}>
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
      <div className="grid grid-cols-1 gap-6 mb-6 lg:grid-cols-2">
        <ChartCard title="Top Course Ratings">
          <div className="h-[300px] overflow-y-auto pr-2">
            {topCourseRatings.map((course, index) => (
              <div key={index} className="mb-4 last:mb-0">
                <div className="flex items-center justify-between mb-1">
                  <div className="flex items-center">
                    <span className="max-w-xs mr-2 font-medium text-gray-700 truncate">
                      {course.name}
                    </span>
                    <span className="text-sm text-gray-500">
                      ({course.students} students)
                    </span>
                  </div>
                  <div className="flex items-center">
                    <span className="font-bold text-indigo-600">
                      {course.rating}
                    </span>
                    <Award className="ml-1 text-yellow-500" size={16} />
                  </div>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div
                    className="bg-gradient-to-r from-yellow-400 to-yellow-500 h-2.5 rounded-full"
                    style={{ width: `${(course.rating / 5) * 100}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </ChartCard>

        <ChartCard title="Most Registered Courses">
          <ResponsiveContainer width="100%" height={300}>
            <BarChart
              data={mostRegisteredCourses}
              layout="vertical"
              margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" horizontal={false} />
              <XAxis type="number" stroke="#6b7280" />
              <YAxis
                dataKey="name"
                type="category"
                scale="band"
                stroke="#6b7280"
                width={180}
                tick={{ fontSize: 12 }}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: "#fff",
                  borderRadius: "0.5rem",
                  boxShadow:
                    "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
                  border: "none",
                }}
              />
              <Bar dataKey="students" fill={colors.lightGreen}>
                {mostRegisteredCourses.map((entry, index) => (
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

      {/* Charts - Row 3 */}
      <div className="grid grid-cols-1 gap-6 mb-6 lg:grid-cols-2">
        <ChartCard title="Users by Country">
          <div className="flex flex-col items-center justify-center md:flex-row">
            <div className="w-full md:w-1/2">
              <ResponsiveContainer width="100%" height={250}>
                <PieChart>
                  <Pie
                    data={usersByCountry}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={90}
                    fill="#8884d8"
                    dataKey="value"
                    paddingAngle={2}
                    label={(entry) => `${entry.name}: ${entry.value}%`}
                    labelLine={false}
                  >
                    {usersByCountry.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={colorArray[index % colorArray.length]}
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
                    }}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="w-full mt-4 md:w-1/2 md:mt-0">
              <div className="grid grid-cols-1 gap-2">
                {usersByCountry.map((country, index) => (
                  <div key={index} className="flex items-center">
                    <div
                      className="w-3 h-3 mr-2 rounded-full"
                      style={{
                        backgroundColor: colorArray[index % colorArray.length],
                      }}
                    ></div>
                    <div className="flex justify-between w-full">
                      <span className="text-sm text-gray-700">
                        {country.name}
                      </span>
                      <span className="text-sm font-medium">
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
          <div className="h-[300px] overflow-y-auto pr-2">
            {recentConnectedUsers.map((user) => (
              <div
                key={user.id}
                className="flex items-center p-3 border-b border-gray-100 last:border-0"
              >
                <div className="flex items-center justify-center flex-shrink-0 w-10 h-10 font-medium text-indigo-600 bg-indigo-100 rounded-full">
                  {user.avatar}
                </div>
                <div className="flex-grow ml-4">
                  <h4 className="text-sm font-medium text-gray-900">
                    {user.name}
                  </h4>
                  <p className="text-xs text-gray-500">
                    Enrolled in: {user.course}
                  </p>
                </div>
                <div className="flex items-center text-xs text-gray-400">
                  <Clock size={12} className="mr-1" />
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
      className={`${bgColor} border ${borderColor} rounded-xl shadow-sm p-6 transition-all duration-300 hover:shadow-md`}
    >
      <div className="flex items-start justify-between">
        <div>
          <h3 className="mb-1 text-sm font-medium text-gray-500">{title}</h3>
          <p className="text-2xl font-bold text-gray-900">{value}</p>
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
            <span className="ml-1 text-sm">{trend} from yesterday</span>
          </div>
        </div>
        <div className="p-3 bg-white rounded-lg shadow-sm">{icon}</div>
      </div>
    </div>
  );
};

// Payment Card Component with minimalist design
const PaymentCard = ({ title, value, icon, bgColor }) => {
  return (
    <div
      className={`${bgColor} rounded-xl shadow-sm p-5 transition-all duration-300 hover:shadow-md border border-gray-100`}
    >
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-sm font-medium text-gray-500">{title}</h3>
        <div className="p-2 rounded-lg bg-gray-50">{icon}</div>
      </div>
      <p className="text-xl font-bold text-gray-900">{value}</p>
    </div>
  );
};

// Chart Card Component
const ChartCard = ({ title, children }) => {
  return (
    <div className="p-6 bg-white border border-gray-100 shadow-sm rounded-xl">
      <h2 className="mb-4 text-lg font-semibold text-gray-800">{title}</h2>
      {children}
    </div>
  );
};

export default Dashboard;
