import { useState } from "react";
import { useSelector } from "react-redux";
import {
  ChevronDown,
  ChevronUp,
  Code,
  Star,
  FileCheck,
  Shield,
  Zap,
  BookOpen,
} from "lucide-react";

function Guidelines() {
  const darkMode = useSelector((state) => state.store.darkMode);
  const [expandedSections, setExpandedSections] = useState({});

  const toggleSection = (id) => {
    setExpandedSections((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const guidelines = [
    {
      id: "code-quality",
      title: "Code Quality Standards",
      icon: <Code size={20} />,
      description: "Standards for maintaining high-quality, readable code.",
      details: [
        {
          title: "Formatting",
          content:
            "Use consistent indentation (2 spaces recommended). Follow the language style guide. Maintain a line length of 80-100 characters. Use meaningful variable and function names.",
        },
        {
          title: "Comments & Documentation",
          content:
            "Document public APIs and complex functions. Include JSDoc or similar for function parameters and return values. Comment complex algorithms and business logic. Keep comments up-to-date when code changes.",
        },
        {
          title: "Error Handling",
          content:
            "Handle all potential errors with try-catch blocks. Provide meaningful error messages. Log errors appropriately. Never silently fail or catch errors without proper handling.",
        },
      ],
    },
    {
      id: "best-practices",
      title: "Best Practices",
      icon: <Star size={20} />,
      description:
        "Recommended approaches for efficient and maintainable development.",
      details: [
        {
          title: "Component Structure",
          content:
            "Keep components small and focused on a single responsibility. Use functional components with hooks when possible. Extract reusable logic into custom hooks. Maintain a clean component hierarchy.",
        },
        {
          title: "State Management",
          content:
            "Use local state for UI-only concerns. Leverage Redux for application-wide state. Avoid prop drilling by using context or state management. Keep state normalized to avoid duplication.",
        },
        {
          title: "Performance Optimization",
          content:
            "Memoize expensive calculations with useMemo. Prevent unnecessary re-renders with React.memo and useCallback. Implement virtualization for long lists. Use code splitting for large applications.",
        },
      ],
    },
    {
      id: "testing",
      title: "Testing Requirements",
      icon: <FileCheck size={20} />,
      description: "Guidelines for comprehensive testing of your code.",
      details: [
        {
          title: "Unit Testing",
          content:
            "Aim for at least 80% code coverage. Test all business logic thoroughly. Use Jest and React Testing Library for component tests. Write tests for success and failure scenarios.",
        },
        {
          title: "Integration Testing",
          content:
            "Test component interactions and data flow. Verify that components work together as expected. Mock external services appropriately. Test important user workflows end-to-end.",
        },
        {
          title: "Test Organization",
          content:
            "Group tests logically by feature or component. Use describe blocks to organize test cases. Follow the Arrange-Act-Assert pattern. Keep test files alongside source files.",
        },
      ],
    },
    {
      id: "security",
      title: "Security Guidelines",
      icon: <Shield size={20} />,
      description:
        "Essential security practices for protecting your application.",
      details: [
        {
          title: "Input Validation",
          content:
            "Validate all user inputs on both client and server. Sanitize data before displaying it to prevent XSS attacks. Use parameterized queries to prevent SQL injection. Never trust client-side data.",
        },
        {
          title: "Authentication & Authorization",
          content:
            "Implement proper authentication flows. Use HTTPS for all communications. Store sensitive data securely. Follow the principle of least privilege for user roles.",
        },
        {
          title: "Dependency Management",
          content:
            "Regularly update dependencies to patch security vulnerabilities. Use tools like npm audit to detect security issues. Avoid using packages with known vulnerabilities.",
        },
      ],
    },
    {
      id: "performance",
      title: "Performance Standards",
      icon: <Zap size={20} />,
      description: "Requirements for ensuring optimal application performance.",
      details: [
        {
          title: "Load Time",
          content:
            "First Contentful Paint should be under 1.8 seconds. Time to Interactive should be under 3.5 seconds. Optimize bundle size using code splitting and tree shaking. Implement lazy loading for images and components.",
        },
        {
          title: "Runtime Performance",
          content:
            "Maintain 60fps animations and transitions. Avoid layout thrashing by batching DOM reads and writes. Optimize JavaScript execution time. Use Web Workers for CPU-intensive tasks.",
        },
        {
          title: "Network Optimization",
          content:
            "Implement caching strategies for API requests. Minimize number of HTTP requests. Use HTTP/2 when possible. Compress assets appropriately. Consider implementing a service worker for offline support.",
        },
      ],
    },
    {
      id: "documentation",
      title: "Documentation Requirements",
      icon: <BookOpen size={20} />,
      description: "Standards for thorough documentation of your project.",
      details: [
        {
          title: "Code Documentation",
          content:
            "Document all public APIs and components. Include examples of component usage. Document props, return values, and side effects. Keep documentation up-to-date with code changes.",
        },
        {
          title: "Project Documentation",
          content:
            "Maintain a comprehensive README with setup instructions. Document the architecture and design decisions. Include troubleshooting guides for common issues. Provide contributing guidelines.",
        },
        {
          title: "Change Documentation",
          content:
            "Maintain a detailed changelog. Document breaking changes prominently. Include migration guides for major version updates. Follow semantic versioning principles.",
        },
      ],
    },
  ];

  return (
    <div
      className={`${
        darkMode ? "bg-[#0f1113] text-white" : "bg-[#ffff] text-[#000000b5]"
      } flex flex-col px-20 py-6 min-h-[50vh] -xsm:py-4 -md:px-10 -sm:px-6`}
    >
      <h1 className="w-full text-center text-xl font-[600] mb-8">
        Guid
        <span
          style={{
            background:
              "linear-gradient(90deg, #455be7 2.34%, #653bce 100.78%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          lines
        </span>
      </h1>

      {guidelines.length === 0 ? (
        <div className="text-center">No Guidelines</div>
      ) : (
        <div className="max-w-4xl mx-auto space-y-4">
          <p className="mb-6 text-center">
            Follow these guidelines to ensure high-quality, maintainable, and
            secure code across all projects.
          </p>

          {guidelines.map((guideline) => (
            <div
              key={guideline.id}
              className={`rounded-lg overflow-hidden ${
                darkMode ? "bg-gray-800" : "bg-gray-100"
              } transition-all duration-200`}
            >
              <div
                className="flex items-center justify-between p-4 cursor-pointer"
                onClick={() => toggleSection(guideline.id)}
              >
                <div className="flex items-center space-x-3">
                  <div
                    className={`${
                      darkMode ? "text-blue-400" : "text-blue-600"
                    }`}
                  >
                    {guideline.icon}
                  </div>
                  <div>
                    <h3 className="font-medium">{guideline.title}</h3>
                    <p
                      className={`text-sm ${
                        darkMode ? "text-gray-400" : "text-gray-600"
                      }`}
                    >
                      {guideline.description}
                    </p>
                  </div>
                </div>
                <div>
                  {expandedSections[guideline.id] ? (
                    <ChevronUp size={20} />
                  ) : (
                    <ChevronDown size={20} />
                  )}
                </div>
              </div>

              {expandedSections[guideline.id] && (
                <div
                  className={`p-4 border-t ${
                    darkMode ? "border-gray-700" : "border-gray-200"
                  }`}
                >
                  <div className="space-y-4">
                    {guideline.details.map((detail, index) => (
                      <div key={index}>
                        <h4
                          className={`font-medium mb-1 ${
                            darkMode ? "text-blue-400" : "text-blue-600"
                          }`}
                        >
                          {detail.title}
                        </h4>
                        <p className="text-sm">{detail.content}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}

          <div className="p-4 mt-8 text-center bg-opacity-50 border border-dashed rounded-lg bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-800">
            <p className={`${darkMode ? "text-gray-300" : "text-gray-600"}`}>
              These guidelines are regularly updated. Check back frequently for
              the latest best practices.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Guidelines;
