import React, { useState } from "react";
import {
  ChevronDown,
  MoreVertical,
  Search,
  Eye,
  Edit,
  Trash2,
  UserPlus,
} from "lucide-react";

const UserManagement = () => {
  // Sample user data
  const [users] = useState([
    {
      id: 1,
      name: "John Doe",
      email: "john@example.com",
      role: "Admin",
      status: "Active",
      entryDate: "2025-01-15",
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane@example.com",
      role: "User",
      status: "Active",
      entryDate: "2025-02-03",
    },
    {
      id: 3,
      name: "Robert Johnson",
      email: "robert@example.com",
      role: "Editor",
      status: "Inactive",
      entryDate: "2025-01-27",
    },
    {
      id: 4,
      name: "Emily Brown",
      email: "emily@example.com",
      role: "User",
      status: "Active",
      entryDate: "2025-03-12",
    },
    {
      id: 5,
      name: "Michael Wilson",
      email: "michael@example.com",
      role: "Moderator",
      status: "Inactive",
      entryDate: "2025-02-19",
    },
    {
      id: 6,
      name: "Sarah Davis",
      email: "sarah@example.com",
      role: "User",
      status: "Active",
      entryDate: "2025-03-01",
    },
  ]);

  // State for filters
  const [nameFilter, setNameFilter] = useState("");
  const [roleFilter, setRoleFilter] = useState("");
  const [statusFilter, setStatusFilter] = useState("");
  const [recordsPerPage, setRecordsPerPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);
  const [openDropdown, setOpenDropdown] = useState(null);

  // Available roles and statuses for filter dropdowns
  const roles = ["Admin", "User", "Editor", "Moderator"];
  const statuses = ["Active", "Inactive"];

  // Handle user actions
  const handleViewUser = (id) => {
    console.log(`View user with ID: ${id}`);
    setOpenDropdown(null);
  };

  const handleEditUser = (id) => {
    console.log(`Edit user with ID: ${id}`);
    setOpenDropdown(null);
  };

  const handleDeleteUser = (id) => {
    console.log(`Delete user with ID: ${id}`);
    setOpenDropdown(null);
    // Here you would typically show a confirmation dialog before deletion
  };

  // Toggle dropdown menu
  const toggleDropdown = (id) => {
    setOpenDropdown(openDropdown === id ? null : id);
  };

  // Filter users based on selected filters
  const filteredUsers = users.filter((user) => {
    return (
      (nameFilter === "" ||
        user.name.toLowerCase().includes(nameFilter.toLowerCase())) &&
      (roleFilter === "" || user.role === roleFilter) &&
      (statusFilter === "" || user.status === statusFilter)
    );
  });

  // Pagination logic
  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const currentUsers = filteredUsers.slice(
    indexOfFirstRecord,
    indexOfLastRecord
  );
  const totalPages = Math.ceil(filteredUsers.length / recordsPerPage);

  // Reset to first page when filters change
  React.useEffect(() => {
    setCurrentPage(1);
  }, [nameFilter, roleFilter, statusFilter, recordsPerPage]);

  // Close dropdown when clicking outside
  React.useEffect(() => {
    const handleClickOutside = () => {
      setOpenDropdown(null);
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div className="min-h-screen px-2 py-4 sm:px-4 lg:px-6 sm:py-6 lg:py-8 bg-gray-50">
      <div className="p-3 bg-white rounded-lg shadow-md sm:p-4 lg:p-6">
        <div className="flex flex-col gap-3 mb-4 sm:flex-row sm:justify-between sm:items-center sm:mb-6">
          <h1 className="text-xl font-bold text-gray-800 sm:text-2xl">
            User Management
          </h1>
          <button className="flex items-center justify-center w-full gap-2 px-3 py-2 text-white transition-colors bg-blue-600 rounded-md hover:bg-blue-700 sm:w-auto">
            <UserPlus size={16} />
            <span>Add User</span>
          </button>
        </div>

        {/* Filters section - Improved for mobile */}
        <div className="flex flex-col gap-3 mb-4 sm:mb-6">
          {/* Name filter */}
          <div className="relative w-full">
            <Search
              size={16}
              className="absolute text-gray-400 transform -translate-y-1/2 left-3 top-1/2"
            />
            <input
              type="text"
              placeholder="Search by name"
              className="w-full placeholder:text-xs py-2 pl-10 pr-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={nameFilter}
              onChange={(e) => setNameFilter(e.target.value)}
            />
          </div>

          {/* Role and Status filters - side by side on larger screens */}
          <div className="flex flex-col w-full gap-3 sm:flex-row">
            {/* Role filter */}
            <div className="relative w-full sm:w-1/2">
              <select
                className="w-full py-2 text-xs pl-4 pr-10 border border-gray-300 rounded-md appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={roleFilter}
                onChange={(e) => setRoleFilter(e.target.value)}
              >
                <option value="">All Roles</option>
                {roles.map((role) => (
                  <option key={role} value={role}>
                    {role}
                  </option>
                ))}
              </select>
              <ChevronDown
                size={16}
                className="absolute text-gray-400 transform -translate-y-1/2 pointer-events-none right-3 top-1/2"
              />
            </div>

            {/* Status filter */}
            <div className="relative w-full sm:w-1/2">
              <select
                className="w-full py-2 text-xs pl-4 pr-10 border border-gray-300 rounded-md appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
              >
                <option value="">All Status</option>
                {statuses.map((status) => (
                  <option key={status} value={status}>
                    {status}
                  </option>
                ))}
              </select>
              <ChevronDown
                size={16}
                className="absolute text-gray-400 transform -translate-y-1/2 pointer-events-none right-3 top-1/2"
              />
            </div>
          </div>

          {/* Records per page */}
          <div className="flex items-center">
            <span className="mr-2 text-sm text-gray-600">Show</span>
            <select
              className="w-16 px-3 py-2 text-xs border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={recordsPerPage}
              onChange={(e) => setRecordsPerPage(Number(e.target.value))}
            >
              <option value={5}>5</option>
              <option value={10}>10</option>
              <option value={20}>20</option>
            </select>
            <span className="ml-2 text-sm text-gray-600">entries</span>
          </div>
        </div>

        {/* Users table with horizontal scroll on small screens */}
        <div className="-mx-3 overflow-x-auto sm:mx-0">
          <div className="inline-block min-w-full align-middle">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-100">
                <tr>
                  <th
                    scope="col"
                    className="px-3 py-3 text-xs font-semibold tracking-wider text-left text-gray-700 uppercase sm:px-6"
                  >
                    Name
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3 text-xs font-semibold tracking-wider text-left text-gray-700 uppercase sm:px-6"
                  >
                    Email
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3 text-xs font-semibold tracking-wider text-left text-gray-700 uppercase sm:px-6"
                  >
                    Role
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3 text-xs font-semibold tracking-wider text-left text-gray-700 uppercase sm:px-6"
                  >
                    Entry Date
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3 text-xs font-semibold tracking-wider text-left text-gray-700 uppercase sm:px-6"
                  >
                    Status
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3 text-xs font-semibold tracking-wider text-left text-gray-700 uppercase sm:px-6"
                  >
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200 ">
                {currentUsers.length > 0 ? (
                  currentUsers.map((user) => (
                    <tr key={user.id} className="hover:bg-gray-50">
                      <td className="px-3 py-4 text-sm -sm:text-xs font-medium text-gray-900 sm:px-6 whitespace-nowrap">
                        {user.name}
                      </td>
                      <td className="px-3 py-4 text-sm -sm:text-xs text-gray-500 sm:px-6 whitespace-nowrap">
                        {user.email}
                      </td>
                      <td className="px-3 py-4 text-sm -sm:text-xs text-gray-500 sm:px-6 whitespace-nowrap">
                        {user.role}
                      </td>
                      <td className="px-3 py-4 text-sm -sm:text-xs text-gray-500 sm:px-6 whitespace-nowrap">
                        {user.entryDate}
                      </td>
                      <td className="px-3 py-4 text-sm -sm:text-xs sm:px-6 whitespace-nowrap">
                        <span
                          className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                            user.status === "Active"
                              ? "bg-green-100 text-green-800"
                              : "bg-red-100 text-red-800"
                          }`}
                        >
                          {user.status}
                        </span>
                      </td>
                      <td className="relative px-3 py-4 text-sm font-medium sm:px-6 whitespace-nowrap">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            toggleDropdown(user.id);
                          }}
                          className="text-gray-500 hover:text-gray-700 focus:outline-none"
                        >
                          <MoreVertical size={16} />
                        </button>

                        {openDropdown === user.id && (
                          <div className="absolute right-0 z-10 mt-2 bg-white border border-gray-200 rounded-md shadow-lg sm:right-8 w-36 sm:w-48">
                            <div className="py-1">
                              <button
                                onClick={(e) => {
                                  e.stopPropagation();
                                  handleViewUser(user.id);
                                }}
                                className="flex items-center w-full px-4 py-2 text-sm text-left text-gray-700 hover:bg-gray-100"
                              >
                                <Eye size={16} className="mr-2" />
                                View Details
                              </button>
                              <button
                                onClick={(e) => {
                                  e.stopPropagation();
                                  handleEditUser(user.id);
                                }}
                                className="flex items-center w-full px-4 py-2 text-sm text-left text-gray-700 hover:bg-gray-100"
                              >
                                <Edit size={16} className="mr-2" />
                                Edit User
                              </button>
                              <button
                                onClick={(e) => {
                                  e.stopPropagation();
                                  handleDeleteUser(user.id);
                                }}
                                className="flex items-center w-full px-4 py-2 text-sm text-left text-red-600 hover:bg-gray-100"
                              >
                                <Trash2 size={16} className="mr-2" />
                                Delete User
                              </button>
                            </div>
                          </div>
                        )}
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td
                      colSpan="6"
                      className="px-3 py-4 text-sm text-center text-gray-500 sm:px-6"
                    >
                      No users found matching the selected filters.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* Pagination - Improved for mobile */}
        <div className="flex flex-col gap-3 mt-4 sm:flex-row sm:items-center sm:justify-between sm:mt-6">
          <div className="text-xs text-gray-500 sm:text-sm">
            Showing {indexOfFirstRecord + 1} to{" "}
            {Math.min(indexOfLastRecord, filteredUsers.length)} of{" "}
            {filteredUsers.length} entries
          </div>
          <div className="flex flex-wrap justify-center gap-1 sm:gap-2 sm:justify-end">
            <button
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className={`px-2 sm:px-3 py-1 rounded text-xs sm:text-sm border ${
                currentPage === 1
                  ? "bg-gray-100 text-gray-400 cursor-not-allowed border-gray-200"
                  : "bg-white text-gray-700 hover:bg-gray-50 border-gray-300"
              }`}
            >
              Previous
            </button>
            <div className="flex items-center gap-1">
              {Array.from({ length: Math.min(totalPages, 3) }, (_, i) => {
                // Show max 3 page buttons on mobile
                let pageNum;
                if (totalPages <= 3) {
                  // If 3 or fewer pages, show them all
                  pageNum = i + 1;
                } else if (currentPage <= 2) {
                  // Near start, show first 3 pages
                  pageNum = i + 1;
                } else if (currentPage >= totalPages - 1) {
                  // Near end, show last 3 pages
                  pageNum = totalPages - 2 + i;
                } else {
                  // In middle, show currentPage and neighbors
                  pageNum = currentPage - 1 + i;
                }

                return (
                  <button
                    key={pageNum}
                    onClick={() => setCurrentPage(pageNum)}
                    className={`px-2 sm:px-3 py-1 rounded text-xs sm:text-sm ${
                      currentPage === pageNum
                        ? "bg-blue-600 text-white"
                        : "bg-white text-gray-700 hover:bg-gray-50 border border-gray-300"
                    }`}
                  >
                    {pageNum}
                  </button>
                );
              })}
            </div>
            <button
              onClick={() =>
                setCurrentPage((prev) => Math.min(prev + 1, totalPages))
              }
              disabled={currentPage === totalPages || totalPages === 0}
              className={`px-2 sm:px-3 py-1 rounded text-xs sm:text-sm border ${
                currentPage === totalPages || totalPages === 0
                  ? "bg-gray-100 text-gray-400 cursor-not-allowed border-gray-200"
                  : "bg-white text-gray-700 hover:bg-gray-50 border-gray-300"
              }`}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserManagement;
