import { useState } from "react";
import {
  CreditCard,
  Bell,
  Shield,
  Mail,
  Save,
  User,
  LogOut,
  Moon,
  Sun,
} from "lucide-react";

const AdminSettings = () => {
  const [activeTab, setActiveTab] = useState("payments");
  const [darkMode, setDarkMode] = useState(false);

  // Payment settings state
  const [paymentSettings, setPaymentSettings] = useState({
    stripeEnabled: true,
    paypalEnabled: false,
    bankTransferEnabled: true,
    autoWithdrawal: false,
    withdrawalThreshold: "100",
    currency: "USD",
  });

  // Notification settings state
  const [notificationSettings, setNotificationSettings] = useState({
    emailNotifications: true,
    pushNotifications: true,
    marketingEmails: false,
    newCourseAlerts: true,
    paymentAlerts: true,
  });

  // Contact email settings
  const [contactSettings, setContactSettings] = useState({
    supportEmail: "support@yourdomain.com",
    salesEmail: "sales@yourdomain.com",
    technicalEmail: "tech@yourdomain.com",
    responseTime: "24",
  });

  const handlePaymentChange = (e) => {
    const { name, value, type, checked } = e.target;
    setPaymentSettings((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleNotificationChange = (e) => {
    const { name, checked } = e.target;
    setNotificationSettings((prev) => ({
      ...prev,
      [name]: checked,
    }));
  };

  const handleContactChange = (e) => {
    const { name, value } = e.target;
    setContactSettings((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case "payments":
        return (
          <div>
            <h2 className="text-xl font-bold text-gray-800 mb-6">
              Payment Settings
            </h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-medium text-gray-700 mb-3">
                  Payment Methods
                </h3>
                <div className="space-y-3">
                  <label className="flex items-center space-x-3">
                    <input
                      type="checkbox"
                      name="stripeEnabled"
                      checked={paymentSettings.stripeEnabled}
                      onChange={handlePaymentChange}
                      className="h-5 w-5 text-blue-600"
                    />
                    <span>Enable Stripe Payments</span>
                  </label>

                  <label className="flex items-center space-x-3">
                    <input
                      type="checkbox"
                      name="paypalEnabled"
                      checked={paymentSettings.paypalEnabled}
                      onChange={handlePaymentChange}
                      className="h-5 w-5 text-blue-600"
                    />
                    <span>Enable PayPal Payments</span>
                  </label>

                  <label className="flex items-center space-x-3">
                    <input
                      type="checkbox"
                      name="bankTransferEnabled"
                      checked={paymentSettings.bankTransferEnabled}
                      onChange={handlePaymentChange}
                      className="h-5 w-5 text-blue-600"
                    />
                    <span>Enable Bank Transfer</span>
                  </label>
                </div>
              </div>

              <div className="border-t pt-6">
                <h3 className="text-lg font-medium text-gray-700 mb-3">
                  Withdrawal Settings
                </h3>
                <div className="space-y-4">
                  <label className="flex items-center space-x-3">
                    <input
                      type="checkbox"
                      name="autoWithdrawal"
                      checked={paymentSettings.autoWithdrawal}
                      onChange={handlePaymentChange}
                      className="h-5 w-5 text-blue-600"
                    />
                    <span>Enable Automatic Withdrawals</span>
                  </label>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Withdrawal Threshold
                    </label>
                    <div className="flex">
                      <span className="inline-flex items-center px-3 border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm rounded-l-md">
                        $
                      </span>
                      <input
                        type="number"
                        name="withdrawalThreshold"
                        value={paymentSettings.withdrawalThreshold}
                        onChange={handlePaymentChange}
                        className="w-full max-w-xs px-3 py-2 border border-gray-300 rounded-r-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Currency
                    </label>
                    <select
                      name="currency"
                      value={paymentSettings.currency}
                      onChange={handlePaymentChange}
                      className="w-full max-w-xs px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="USD">USD - US Dollar</option>
                      <option value="EUR">EUR - Euro</option>
                      <option value="GBP">GBP - British Pound</option>
                      <option value="CAD">CAD - Canadian Dollar</option>
                      <option value="AUD">AUD - Australian Dollar</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case "notifications":
        return (
          <div>
            <h2 className="text-xl font-bold text-gray-800 mb-6">
              Notification Settings
            </h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-medium text-gray-700 mb-3">
                  Email Preferences
                </h3>
                <div className="space-y-3">
                  <label className="flex items-center space-x-3">
                    <input
                      type="checkbox"
                      name="emailNotifications"
                      checked={notificationSettings.emailNotifications}
                      onChange={handleNotificationChange}
                      className="h-5 w-5 text-blue-600"
                    />
                    <span>Receive Email Notifications</span>
                  </label>

                  <label className="flex items-center space-x-3">
                    <input
                      type="checkbox"
                      name="marketingEmails"
                      checked={notificationSettings.marketingEmails}
                      onChange={handleNotificationChange}
                      className="h-5 w-5 text-blue-600"
                    />
                    <span>Receive Marketing Emails</span>
                  </label>
                </div>
              </div>

              <div className="border-t pt-6">
                <h3 className="text-lg font-medium text-gray-700 mb-3">
                  Push Notifications
                </h3>
                <div className="space-y-3">
                  <label className="flex items-center space-x-3">
                    <input
                      type="checkbox"
                      name="pushNotifications"
                      checked={notificationSettings.pushNotifications}
                      onChange={handleNotificationChange}
                      className="h-5 w-5 text-blue-600"
                    />
                    <span>Enable Push Notifications</span>
                  </label>

                  <label className="flex items-center space-x-3">
                    <input
                      type="checkbox"
                      name="newCourseAlerts"
                      checked={notificationSettings.newCourseAlerts}
                      onChange={handleNotificationChange}
                      className="h-5 w-5 text-blue-600"
                    />
                    <span>New Course Alerts</span>
                  </label>

                  <label className="flex items-center space-x-3">
                    <input
                      type="checkbox"
                      name="paymentAlerts"
                      checked={notificationSettings.paymentAlerts}
                      onChange={handleNotificationChange}
                      className="h-5 w-5 text-blue-600"
                    />
                    <span>Payment Alerts</span>
                  </label>
                </div>
              </div>
            </div>
          </div>
        );

      case "privacy":
        return (
          <div>
            <h2 className="text-xl font-bold text-gray-800 mb-6">
              Privacy Policy Settings
            </h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-medium text-gray-700 mb-3">
                  Data Collection
                </h3>
                <div className="space-y-4">
                  <label className="flex items-center space-x-3">
                    <input
                      type="checkbox"
                      className="h-5 w-5 text-blue-600"
                      defaultChecked
                    />
                    <span>Allow Usage Analytics</span>
                  </label>

                  <label className="flex items-center space-x-3">
                    <input
                      type="checkbox"
                      className="h-5 w-5 text-blue-600"
                      defaultChecked
                    />
                    <span>Allow Cookies</span>
                  </label>
                </div>
              </div>

              <div className="border-t pt-6">
                <h3 className="text-lg font-medium text-gray-700 mb-3">
                  Privacy Policy
                </h3>
                <div className="bg-gray-50 p-4 rounded-lg border">
                  <p className="text-sm text-gray-600 mb-3">
                    Last updated: April 1, 2025
                  </p>
                  <p className="text-sm text-gray-600 mb-3">
                    Your privacy policy appears here. This should detail how you
                    collect, use, and protect user data.
                  </p>
                  <p className="text-sm text-gray-600 mb-3">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nullam in dui mauris. Vivamus hendrerit arcu sed erat
                    molestie vehicula. Sed auctor neque eu tellus rhoncus ut
                    eleifend nibh porttitor. Ut in nulla enim.
                  </p>
                  <div className="flex justify-end">
                    <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 text-sm">
                      Edit Privacy Policy
                    </button>
                  </div>
                </div>
              </div>

              <div className="border-t pt-6">
                <h3 className="text-lg font-medium text-gray-700 mb-3">
                  Account Data
                </h3>
                <div className="space-y-4">
                  <button className="px-4 py-2 bg-yellow-100 text-yellow-800 rounded-md hover:bg-yellow-200 text-sm flex items-center">
                    <Shield size={16} className="mr-2" />
                    Request Data Export
                  </button>

                  <button className="px-4 py-2 bg-red-100 text-red-800 rounded-md hover:bg-red-200 text-sm flex items-center">
                    <Shield size={16} className="mr-2" />
                    Delete Account Data
                  </button>
                </div>
              </div>
            </div>
          </div>
        );

      case "contact":
        return (
          <div>
            <h2 className="text-xl font-bold text-gray-800 mb-6">
              Contact Email Settings
            </h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-medium text-gray-700 mb-3">
                  Support Emails
                </h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Support Email Address
                    </label>
                    <input
                      type="email"
                      name="supportEmail"
                      value={contactSettings.supportEmail}
                      onChange={handleContactChange}
                      className="w-full max-w-md px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Sales Email Address
                    </label>
                    <input
                      type="email"
                      name="salesEmail"
                      value={contactSettings.salesEmail}
                      onChange={handleContactChange}
                      className="w-full max-w-md px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Technical Support Email
                    </label>
                    <input
                      type="email"
                      name="technicalEmail"
                      value={contactSettings.technicalEmail}
                      onChange={handleContactChange}
                      className="w-full max-w-md px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>
              </div>

              <div className="border-t pt-6">
                <h3 className="text-lg font-medium text-gray-700 mb-3">
                  Response Settings
                </h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Expected Response Time (hours)
                    </label>
                    <input
                      type="number"
                      name="responseTime"
                      value={contactSettings.responseTime}
                      onChange={handleContactChange}
                      className="w-32 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  <div className="flex items-center mt-2">
                    <input
                      type="checkbox"
                      id="autoResponder"
                      className="h-5 w-5 text-blue-600"
                      defaultChecked
                    />
                    <label
                      htmlFor="autoResponder"
                      className="ml-2 text-sm text-gray-700"
                    >
                      Enable Auto-Responder
                    </label>
                  </div>
                </div>
              </div>

              <div className="border-t pt-6">
                <h3 className="text-lg font-medium text-gray-700 mb-3">
                  Contact Form Template
                </h3>
                <div className="bg-gray-50 p-4 rounded-lg border">
                  <p className="text-sm text-gray-600 mb-3">
                    Customize the fields and messages for your contact form.
                  </p>
                  <div className="flex justify-end">
                    <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 text-sm">
                      Edit Contact Form
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row gap-6">
          {/* Settings Sidebar */}
          <div className="w-full md:w-64 bg-white rounded-lg shadow">
            <div className="p-6 border-b">
              <h2 className="text-xl font-bold text-gray-800">Settings</h2>
            </div>

            <nav className="p-4">
              <ul className="space-y-1">
                <li>
                  <button
                    onClick={() => setActiveTab("payments")}
                    className={`w-full flex items-center px-4 py-2 text-left rounded-md ${
                      activeTab === "payments"
                        ? "bg-blue-50 text-blue-700"
                        : "text-gray-700 hover:bg-gray-100"
                    }`}
                  >
                    <CreditCard size={18} className="mr-3" />
                    <span>Payments</span>
                  </button>
                </li>

                <li>
                  <button
                    onClick={() => setActiveTab("notifications")}
                    className={`w-full flex items-center px-4 py-2 text-left rounded-md ${
                      activeTab === "notifications"
                        ? "bg-blue-50 text-blue-700"
                        : "text-gray-700 hover:bg-gray-100"
                    }`}
                  >
                    <Bell size={18} className="mr-3" />
                    <span>Notifications</span>
                  </button>
                </li>

                <li>
                  <button
                    onClick={() => setActiveTab("privacy")}
                    className={`w-full flex items-center px-4 py-2 text-left rounded-md ${
                      activeTab === "privacy"
                        ? "bg-blue-50 text-blue-700"
                        : "text-gray-700 hover:bg-gray-100"
                    }`}
                  >
                    <Shield size={18} className="mr-3" />
                    <span>Privacy Policy</span>
                  </button>
                </li>

                <li>
                  <button
                    onClick={() => setActiveTab("contact")}
                    className={`w-full flex items-center px-4 py-2 text-left rounded-md ${
                      activeTab === "contact"
                        ? "bg-blue-50 text-blue-700"
                        : "text-gray-700 hover:bg-gray-100"
                    }`}
                  >
                    <Mail size={18} className="mr-3" />
                    <span>Contact Email</span>
                  </button>
                </li>
              </ul>

              <hr className="my-4" />

              <ul className="space-y-1">
                <li>
                  <button
                    onClick={() => setDarkMode(!darkMode)}
                    className="w-full flex items-center justify-between px-4 py-2 text-left rounded-md text-gray-700 hover:bg-gray-100"
                  >
                    <div className="flex items-center">
                      {darkMode ? (
                        <Moon size={18} className="mr-3" />
                      ) : (
                        <Sun size={18} className="mr-3" />
                      )}
                      <span>{darkMode ? "Dark Mode" : "Light Mode"}</span>
                    </div>
                    <div
                      className={`w-10 h-5 rounded-full ${
                        darkMode ? "bg-blue-600" : "bg-gray-300"
                      } relative transition-colors duration-200`}
                    >
                      <div
                        className={`absolute top-0.5 left-0.5 bg-white w-4 h-4 rounded-full transform transition-transform duration-200 ${
                          darkMode ? "translate-x-5" : ""
                        }`}
                      ></div>
                    </div>
                  </button>
                </li>

                <li>
                  <button className="w-full flex items-center px-4 py-2 text-left rounded-md text-gray-700 hover:bg-gray-100">
                    <User size={18} className="mr-3" />
                    <span>Account</span>
                  </button>
                </li>

                <li>
                  <button className="w-full flex items-center px-4 py-2 text-left rounded-md text-red-600 hover:bg-red-50">
                    <LogOut size={18} className="mr-3" />
                    <span>Logout</span>
                  </button>
                </li>
              </ul>
            </nav>
          </div>

          {/* Tab Content */}
          <div className="flex-1 bg-white rounded-lg shadow p-6">
            {renderTabContent()}

            <div className="mt-8 pt-6 border-t flex justify-end">
              <button className="flex items-center gap-2 px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
                <Save size={18} />
                Save Changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminSettings;
