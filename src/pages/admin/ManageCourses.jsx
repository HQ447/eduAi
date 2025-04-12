import { useState } from "react";
import { Search, Plus, Edit, Trash2, X } from "lucide-react";

const ManageCourses = () => {
  const [courses, setCourses] = useState([
    {
      id: 1,
      title: "Introduction to React",
      category: "Web Development",
      price: 49.99,
      status: "active",
      students: 120,
    },
    {
      id: 2,
      title: "Advanced JavaScript",
      category: "Programming",
      price: 69.99,
      status: "active",
      students: 85,
    },
    {
      id: 3,
      title: "UI/UX Fundamentals",
      category: "Design",
      price: 59.99,
      status: "draft",
      students: 0,
    },
  ]);

  const [showAddForm, setShowAddForm] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [newCourse, setNewCourse] = useState({
    title: "",
    category: "",
    price: "",
    description: "",
    duration: "",
    status: "draft",
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

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create new course with generated ID
    const newCourseWithId = {
      ...newCourse,
      id: Math.max(...courses.map((c) => c.id), 0) + 1,
      students: 0,
      price: parseFloat(newCourse.price),
    };

    setCourses([...courses, newCourseWithId]);
    setNewCourse({
      title: "",
      category: "",
      price: "",
      description: "",
      duration: "",
      status: "draft",
    });
    setShowAddForm(false);
  };

  const handleDelete = (id) => {
    setCourses(courses.filter((course) => course.id !== id));
  };

  return (
    <div className="p-6 max-w-full bg-white rounded-lg shadow">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-4 md:mb-0">
          Manage Courses
        </h1>

        <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
          <div className="relative">
            <input
              type="text"
              placeholder="Search courses..."
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-full sm:w-64"
              value={searchTerm}
              onChange={handleSearch}
            />
            <Search
              className="absolute left-3 top-2.5 text-gray-400"
              size={18}
            />
          </div>

          <button
            onClick={() => setShowAddForm(true)}
            className="flex items-center justify-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            <Plus size={18} />
            <span>Add New Course</span>
          </button>
        </div>
      </div>

      {/* Course Table */}
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
                    {course.title}
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
                <td colSpan="6" className="py-4 px-4 text-center text-gray-500">
                  No courses found. Try a different search or add a new course.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Add Course Modal */}
      {showAddForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-2xl max-h-screen overflow-y-auto">
            <div className="flex justify-between items-center border-b p-4">
              <h2 className="text-xl font-bold text-gray-800">
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
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter course title"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Category
                  </label>
                  <select
                    name="category"
                    value={newCourse.category}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">Select category</option>
                    <option value="Web Development">Web Development</option>
                    <option value="Programming">Programming</option>
                    <option value="Design">Design</option>
                    <option value="Marketing">Marketing</option>
                    <option value="Business">Business</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
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
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter course description"
                  ></textarea>
                </div>

                <div className="col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Thumbnail Image
                  </label>
                  <input
                    type="file"
                    className="w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                  />
                </div>
              </div>

              <div className="mt-8 flex justify-end space-x-3">
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
