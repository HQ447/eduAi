import { useState } from "react";
import {
  Search,
  Plus,
  Edit,
  Trash2,
  X,
  Eye,
  Clock,
  Users,
  DollarSign,
  Tag,
} from "lucide-react";

const ManageCourses = () => {
  const [courses, setCourses] = useState([
    {
      id: 1,
      title: "Introduction to React",
      category: "Web Development",
      price: 49.99,
      status: "active",
      students: 120,
      duration: "12 hours",
      image: "https://mdcatmentor.org/wp-content/uploads/2023/08/8.webp",
      description:
        "Learn the fundamentals of React, including components, props, state, and hooks.",
    },
    {
      id: 2,
      title: "Advanced JavaScript",
      category: "Programming",
      price: 69.99,
      status: "active",
      students: 85,
      duration: "15 hours",
      image:
        "https://www.becodemy.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdokeqryvj%2Fimage%2Fupload%2Fv1719776615%2FTMECA_i5cmqd.png&w=640&q=75",
      description:
        "Master modern JavaScript techniques, closures, promises, async/await, and more.",
    },
    {
      id: 3,
      title: "UI/UX Fundamentals",
      category: "Design",
      price: 59.99,
      status: "draft",
      students: 0,
      duration: "10 hours",
      image:
        "https://i.pcmag.com/imagery/articles/03dI0LmA2GJzfLIGI2xUir4-2..v1708701892.jpg",
      description:
        "Learn essential UI/UX design principles and create beautiful, user-friendly interfaces.",
    },
    {
      id: 4,
      title: "Node.js Backend Development",
      category: "Web Development",
      price: 79.99,
      status: "active",
      students: 64,
      duration: "18 hours",
      image:
        "https://www.becodemy.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdokeqryvj%2Fimage%2Fupload%2Fv1716753276%2Fcourses%2Fggj1npc4ydcqvfi5ssnb.png&w=640&q=75",
      description:
        "Build scalable backend applications with Node.js, Express, and MongoDB.",
    },
  ]);

  const [showAddForm, setShowAddForm] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [viewMode, setViewMode] = useState("cards"); // 'cards' or 'table'
  const [newCourse, setNewCourse] = useState({
    title: "",
    category: "",
    price: "",
    description: "",
    duration: "",
    status: "draft",
    image: null,
  });

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredCourses = courses.filter(
    (course) =>
      course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewCourse((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    // In a real app, you would handle file upload
    setNewCourse((prev) => ({
      ...prev,
      image: URL.createObjectURL(e.target.files[0]),
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create new course with generated ID
    const newCourseWithId = {
      ...newCourse,
      id: Math.max(...courses.map((c) => c.id), 0) + 1,
      students: 0,
      price: parseFloat(newCourse.price),
      image: newCourse.image || "/api/placeholder/600/400", // Default image if none provided
    };

    setCourses([...courses, newCourseWithId]);
    setNewCourse({
      title: "",
      category: "",
      price: "",
      description: "",
      duration: "",
      status: "draft",
      image: null,
    });
    setShowAddForm(false);
  };

  const handleDelete = (id) => {
    setCourses(courses.filter((course) => course.id !== id));
  };

  return (
    <div className="p-6 max-w-full bg-white rounded-lg shadow">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-4 md:mb-0 ">
          Manage Courses
        </h1>

        <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
          <div className="relative">
            <input
              type="text"
              placeholder="Search Courses"
              className="pl-10 pr-4 py-1 border placeholder:text-xs border-gray-300 rounded-lg focus:outline-none  focus:ring-blue-500 w-full sm:w-64"
              value={searchTerm}
              onChange={handleSearch}
            />
            <Search
              className="absolute left-3 top-2.5 text-gray-400"
              size={18}
            />
          </div>

          <div className="flex gap-2">
            <button
              onClick={() => setViewMode("cards")}
              className={`px-3 py-1 rounded-lg text-xs ${
                viewMode === "cards"
                  ? "bg-blue-100 text-blue-700 border border-blue-200"
                  : "bg-gray-100 text-gray-600 border border-gray-200 hover:bg-gray-200"
              }`}
            >
              Cards
            </button>
            <button
              onClick={() => setViewMode("table")}
              className={`px-3 py-1 text-xs rounded-lg ${
                viewMode === "table"
                  ? "bg-blue-100 text-blue-700 border border-blue-200"
                  : "bg-gray-100 text-gray-600 border border-gray-200 hover:bg-gray-200"
              }`}
            >
              Table
            </button>
          </div>

          <button
            onClick={() => setShowAddForm(true)}
            className="flex items-center justify-center gap-2 bg-blue-600 text-white px-4 py-2 text-xs rounded-lg hover:bg-blue-700 transition-colors"
          >
            <Plus size={18} />
            <span>Add New Course</span>
          </button>
        </div>
      </div>

      {/* Card View */}
      {viewMode === "cards" && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-6">
          {filteredCourses.length > 0 ? (
            filteredCourses.map((course) => (
              <div
                key={course.id}
                className="bg-white border rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow"
              >
                {/* Course Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-3 right-3">
                    <span
                      className={`px-2 py-1 text-xs -md:text-[8px] font-medium rounded-full ${
                        course.status === "active"
                          ? "bg-green-100 text-green-800"
                          : "bg-yellow-100 text-yellow-800"
                      }`}
                    >
                      {course.status === "active" ? "Active" : "Draft"}
                    </span>
                  </div>
                </div>

                {/* Course Content */}
                <div className="p-4">
                  <div className="flex items-center mb-2">
                    <Tag size={14} className="text-blue-500 mr-1" />
                    <span className="text-xs font-medium text-blue-600">
                      {course.category}
                    </span>
                  </div>

                  <h3 className="font-bold text-md text-gray-800  mb-2 line-clamp-1">
                    {course.title}
                  </h3>

                  <p className="text-gray-600 text-xs mb-4 line-clamp-2">
                    {course.description}
                  </p>

                  <div className="flex flex-wrap items-center text-sm text-gray-500 mb-4 gap-3">
                    <div className="flex items-center text-xs">
                      <Clock size={14} className="mr-1" />
                      {course.duration}
                    </div>
                    <div className="flex items-center text-xs">
                      <Users size={14} className="mr-1" />
                      {course.students} students
                    </div>
                    <div className="flex items-center text-xs font-medium text-gray-800">
                      <DollarSign size={14} className="mr-0.5" />
                      {course.price.toFixed(2)}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex justify-between mt-2 pt-3 border-t">
                    <button className="p-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-full transition-colors">
                      <Eye size={18} />
                    </button>
                    <button className="p-2 text-gray-600 hover:text-indigo-600 hover:bg-indigo-50 rounded-full transition-colors">
                      <Edit size={18} />
                    </button>
                    <button
                      className="p-2 text-gray-600 hover:text-red-600 hover:bg-red-50 rounded-full transition-colors"
                      onClick={() => handleDelete(course.id)}
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full py-10 text-center text-gray-500">
              No courses found. Try a different search or add a new course.
            </div>
          )}
        </div>
      )}

      {/* Table View */}
      {viewMode === "table" && (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200 rounded-lg">
            <thead className="bg-gray-50">
              <tr>
                <th className="py-3 px-4 text-left text-sm font-medium text-gray-500 uppercase tracking-wider border-b">
                  Title
                </th>
                <th className="py-3 px-4 text-left text-sm font-medium text-gray-500 uppercase tracking-wider border-b">
                  Category
                </th>
                <th className="py-3 px-4 text-left text-sm font-medium text-gray-500 uppercase tracking-wider border-b">
                  Price
                </th>
                <th className="py-3 px-4 text-left text-sm font-medium text-gray-500 uppercase tracking-wider border-b">
                  Status
                </th>
                <th className="py-3 px-4 text-left text-sm font-medium text-gray-500 uppercase tracking-wider border-b">
                  Students
                </th>
                <th className="py-3 px-4 text-left text-sm font-medium text-gray-500 uppercase tracking-wider border-b">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {filteredCourses.length > 0 ? (
                filteredCourses.map((course) => (
                  <tr key={course.id} className="hover:bg-gray-50">
                    <td className="py-3 px-4 text-sm text-gray-800">
                      <div className="flex items-center">
                        <img
                          src={course.image}
                          alt={course.title}
                          className="w-10 h-10 rounded object-cover mr-3"
                        />
                        {course.title}
                      </div>
                    </td>
                    <td className="py-3 px-4 text-sm text-gray-600">
                      {course.category}
                    </td>
                    <td className="py-3 px-4 text-sm text-gray-600">
                      ${course.price.toFixed(2)}
                    </td>
                    <td className="py-3 px-4">
                      <span
                        className={`px-2 py-1 text-xs rounded-full ${
                          course.status === "active"
                            ? "bg-green-100 text-green-800"
                            : "bg-yellow-100 text-yellow-800"
                        }`}
                      >
                        {course.status === "active" ? "Active" : "Draft"}
                      </span>
                    </td>
                    <td className="py-3 px-4 text-sm text-gray-600">
                      {course.students}
                    </td>
                    <td className="py-3 px-4">
                      <div className="flex space-x-2">
                        <button className="p-1 text-blue-600 hover:text-blue-800 transition-colors">
                          <Edit size={18} />
                        </button>
                        <button
                          className="p-1 text-red-600 hover:text-red-800 transition-colors"
                          onClick={() => handleDelete(course.id)}
                        >
                          <Trash2 size={18} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan="6"
                    className="py-4 px-4 text-center text-gray-500"
                  >
                    No courses found. Try a different search or add a new
                    course.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      )}

      {/* Add Course Modal */}
      {showAddForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-2xl max-h-screen overflow-y-auto">
            <div className="flex justify-between items-center border-b p-4">
              <h2 className="text-xl font-bold -md:text-lg text-gray-800">
                Add New Course
              </h2>
              <button
                onClick={() => setShowAddForm(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <X size={20} />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="p-6">
              <div className="flex flex-col gap-6">
                <div className="col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Course Title
                  </label>
                  <input
                    type="text"
                    name="title"
                    value={newCourse.title}
                    onChange={handleInputChange}
                    required
                    className="w-full placeholder:text-xs px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter course title"
                  />
                </div>

                <div className="flex -sm:flex flex-col">
                  <label className=" text-sm font-medium text-gray-700 mb-1">
                    Category
                  </label>
                  <select
                    name="category"
                    value={newCourse.category}
                    onChange={handleInputChange}
                    required
                    className="w-full  text-xs px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">Select category</option>
                    <option value="Web Development">Web Development</option>
                    <option value="Programming">Programming</option>
                    <option value="Design">Design</option>
                    <option value="Marketing">Marketing</option>
                    <option value="Business">Business</option>
                  </select>
                </div>

                <div className="">
                  <label className="  text-sm w-full font-medium text-gray-700 mb-1">
                    Price ($)
                  </label>
                  <input
                    type="number"
                    name="price"
                    value={newCourse.price}
                    onChange={handleInputChange}
                    required
                    min="0"
                    step="0.01"
                    className=" px-3 w-full placeholder:text-xs py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter price"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Duration (in hours)
                  </label>
                  <input
                    type="text"
                    name="duration"
                    value={newCourse.duration}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 placeholder:text-xs border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="e.g. 12 hours"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Status
                  </label>
                  <select
                    name="status"
                    value={newCourse.status}
                    onChange={handleInputChange}
                    className="w-full px-3 text-xs py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="draft">Draft</option>
                    <option value="active">Active</option>
                  </select>
                </div>

                <div className="col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Description
                  </label>
                  <textarea
                    name="description"
                    value={newCourse.description}
                    onChange={handleInputChange}
                    rows="4"
                    className="w-full px-3 placeholder:text-xs py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="course description"
                  ></textarea>
                </div>

                <div className="col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Course Thumbnail Image
                  </label>
                  <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                    <div className="space-y-1 text-center">
                      <svg
                        className="mx-auto h-12 w-12 text-gray-400"
                        stroke="currentColor"
                        fill="none"
                        viewBox="0 0 48 48"
                        aria-hidden="true"
                      >
                        <path
                          d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <div className="flex text-sm text-gray-600">
                        <label
                          htmlFor="file-upload"
                          className="relative cursor-pointer bg-white rounded-md font-medium text-blue-600 hover:text-blue-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-blue-500"
                        >
                          <span>Upload a file</span>
                          <input
                            id="file-upload"
                            name="file-upload"
                            type="file"
                            className="sr-only"
                            onChange={handleFileChange}
                          />
                        </label>
                        <p className="pl-1">or drag and drop</p>
                      </div>
                      <p className="text-xs text-gray-500">
                        PNG, JPG, GIF up to 10MB
                      </p>
                    </div>
                  </div>
                  {newCourse.image && (
                    <div className="mt-2">
                      <div className="relative w-32 h-32">
                        <img
                          src={newCourse.image}
                          alt="Preview"
                          className="w-full h-full object-cover rounded-md"
                        />
                        <button
                          type="button"
                          className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 hover:bg-red-600"
                          onClick={() =>
                            setNewCourse((prev) => ({ ...prev, image: null }))
                          }
                        >
                          <X size={16} />
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              <div className="mt-8 flex justify-end text-xs space-x-3">
                <button
                  type="button"
                  onClick={() => setShowAddForm(false)}
                  className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                >
                  Add Course
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ManageCourses;
