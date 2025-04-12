import { useState } from "react";
import {
  Bell,
  AlertCircle,
  Info,
  AlertTriangle,
  Paperclip,
  X,
  Send,
  Calendar,
} from "lucide-react";

const Notifications = () => {
  const [showForm, setShowForm] = useState(false);
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      title: "System Maintenance",
      message: "The system will be down for maintenance on Saturday night.",
      type: "info",
      date: "2025-04-15",
    },
    {
      id: 2,
      title: "New Feature Available",
      message: "Check out our latest feature in the dashboard!",
      type: "info",
      date: "2025-04-10",
    },
    {
      id: 3,
      title: "Payment Issue",
      message:
        "There was an issue processing some payments. Please check your payment settings.",
      type: "warning",
      date: "2025-04-08",
    },
  ]);

  const [newNotification, setNewNotification] = useState({
    title: "",
    message: "",
    type: "info",
    file: null,
    scheduleDate: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewNotification((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    setNewNotification((prev) => ({ ...prev, file: e.target.files[0] }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newNotificationWithId = {
      ...newNotification,
      id: Math.max(...notifications.map((n) => n.id), 0) + 1,
      date:
        newNotification.scheduleDate || new Date().toISOString().split("T")[0],
    };

    setNotifications([newNotificationWithId, ...notifications]);
    setNewNotification({
      title: "",
      message: "",
      type: "info",
      file: null,
      scheduleDate: "",
    });
    setShowForm(false);
  };

  const handleDelete = (id) => {
    setNotifications(
      notifications.filter((notification) => notification.id !== id)
    );
  };

  const getTypeIcon = (type) => {
    switch (type) {
      case "info":
        return <Info size={18} className="text-blue-500" />;
      case "warning":
        return <AlertTriangle size={18} className="text-amber-500" />;
      case "alert":
        return <AlertCircle size={18} className="text-red-500" />;
      default:
        return <Info size={18} className="text-blue-500" />;
    }
  };

  return (
    <div className="p-6 max-w-full bg-white rounded-lg shadow">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800 flex items-center gap-2 mb-4 md:mb-0">
          <Bell className="text-gray-700" size={24} />
          Notifications
        </h1>

        <button
          onClick={() => setShowForm(true)}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors w-full md:w-auto"
        >
          Create Notification
        </button>
      </div>

      {/* Notifications List */}
      <div className="space-y-4 mt-6">
        {notifications.length > 0 ? (
          notifications.map((notification) => (
            <div
              key={notification.id}
              className="border rounded-lg p-4 hover:shadow-md transition-shadow"
            >
              <div className="flex justify-between items-start">
                <div className="flex items-start gap-3">
                  <div className="mt-1">{getTypeIcon(notification.type)}</div>
                  <div>
                    <h3 className="font-medium text-gray-900">
                      {notification.title}
                    </h3>
                    <p className="text-gray-600 mt-1">{notification.message}</p>
                    <div className="flex items-center mt-2 text-xs text-gray-500">
                      <Calendar size={14} className="mr-1" />
                      {notification.date}
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => handleDelete(notification.id)}
                  className="text-gray-400 hover:text-red-500"
                >
                  <X size={18} />
                </button>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center py-8 text-gray-500">
            No notifications yet. Create your first notification!
          </div>
        )}
      </div>

      {/* Create Notification Modal */}
      {showForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-lg max-h-screen overflow-y-auto">
            <div className="flex justify-between items-center border-b p-4">
              <h2 className="text-xl font-bold text-gray-800">
                Create Notification
              </h2>
              <button
                onClick={() => setShowForm(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <X size={20} />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="p-6">
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Title
                  </label>
                  <input
                    type="text"
                    name="title"
                    value={newNotification.title}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Notification title"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={newNotification.message}
                    onChange={handleInputChange}
                    required
                    rows="4"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Notification message"
                  ></textarea>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Notification Type
                  </label>
                  <div className="flex space-x-4">
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="type"
                        value="info"
                        checked={newNotification.type === "info"}
                        onChange={handleInputChange}
                        className="mr-2"
                      />
                      <Info size={18} className="text-blue-500 mr-1" />
                      Info
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="type"
                        value="warning"
                        checked={newNotification.type === "warning"}
                        onChange={handleInputChange}
                        className="mr-2"
                      />
                      <AlertTriangle
                        size={18}
                        className="text-amber-500 mr-1"
                      />
                      Warning
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="type"
                        value="alert"
                        checked={newNotification.type === "alert"}
                        onChange={handleInputChange}
                        className="mr-2"
                      />
                      <AlertCircle size={18} className="text-red-500 mr-1" />
                      Alert
                    </label>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Attachment (Optional)
                  </label>
                  <div className="flex items-center justify-center w-full">
                    <label className="flex flex-col w-full h-16 border-2 border-dashed border-gray-300 rounded-lg hover:bg-gray-50 cursor-pointer">
                      <div className="flex flex-col items-center justify-center pt-3">
                        <Paperclip size={20} className="text-gray-400" />
                        <p className="text-xs text-gray-500">
                          {newNotification.file
                            ? newNotification.file.name
                            : "Attach file (PDF, DOC, IMG)"}
                        </p>
                      </div>
                      <input
                        type="file"
                        className="hidden"
                        onChange={handleFileChange}
                      />
                    </label>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Schedule Date (Optional)
                  </label>
                  <input
                    type="date"
                    name="scheduleDate"
                    value={newNotification.scheduleDate}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              <div className="mt-6 flex justify-end space-x-3">
                <button
                  type="button"
                  onClick={() => setShowForm(false)}
                  className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 flex items-center gap-1"
                >
                  <Send size={16} />
                  Send Notification
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Notifications;
