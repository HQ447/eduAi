import { useState } from "react";
import { useSelector } from "react-redux";
import { Code, Calendar, User, X } from "lucide-react";

function Blogs() {
  const darkMode = useSelector((state) => state.store.darkMode);
  const [selectedBlog, setSelectedBlog] = useState(null);

  // Sample blog data
  const blogs = [
    {
      id: 1,
      title: "Getting Started with React Hooks",
      author: "Jane Doe",
      date: "April 8, 2025",
      summary:
        "Learn how to use React Hooks to simplify your functional components",
      content:
        "React Hooks were introduced in React 16.8 as a way to use state and other React features without writing a class. They allow you to reuse stateful logic between components, making your code more readable and maintainable.\n\nThe most commonly used hooks are useState and useEffect. useState allows you to add state to functional components, while useEffect lets you perform side effects in your components.\n\nTo use the useState hook, you first import it from React:\n```jsx\nimport { useState } from 'react';\n```\n\nThen, you can declare a state variable in your component:\n```jsx\nconst [count, setCount] = useState(0);\n```\n\nThis creates a state variable called count with an initial value of 0, and a function called setCount that you can use to update the count.\n\nTry implementing these hooks in your next project to see how they can simplify your code!",
    },
    {
      id: 2,
      title: "Advanced TypeScript Patterns",
      author: "John Smith",
      date: "April 2, 2025",
      summary:
        "Explore advanced TypeScript patterns to make your code more robust",
      content:
        "TypeScript offers powerful type-checking capabilities that can help you catch errors before they make it to production. In this blog, we'll explore some advanced TypeScript patterns that can make your code more robust.\n\nOne such pattern is discriminated unions. These allow you to create a type that could be one of several types, but with a common property that can be used to discriminate between them:\n\n```typescript\ntype Circle = {\n  kind: 'circle';\n  radius: number;\n};\n\ntype Square = {\n  kind: 'square';\n  sideLength: number;\n};\n\ntype Shape = Circle | Square;\n\nfunction getArea(shape: Shape) {\n  switch(shape.kind) {\n    case 'circle':\n      return Math.PI * shape.radius ** 2;\n    case 'square':\n      return shape.sideLength ** 2;\n  }\n}\n```\n\nAnother useful pattern is the use of generics. Generics allow you to create reusable components that can work with a variety of types rather than a single one:\n\n```typescript\nfunction identity<T>(arg: T): T {\n  return arg;\n}\n\nlet output = identity<string>('myString');\n```\n\nBy mastering these and other advanced TypeScript patterns, you can write more maintainable and error-free code.",
    },
    {
      id: 3,
      title: "Optimizing React Performance",
      author: "Alex Johnson",
      date: "March 28, 2025",
      summary:
        "Tips and tricks to optimize your React application for better performance",
      content:
        "Performance optimization is crucial for providing a good user experience in React applications. Here are some strategies to improve your React app's performance:\n\n1. **Use React.memo for Component Memoization**\nWrap your functional components with React.memo to prevent unnecessary re-renders when the props haven't changed:\n\n```jsx\nconst MyComponent = React.memo(function MyComponent(props) {\n  // component code\n});\n```\n\n2. **Implement useMemo and useCallback Hooks**\nThese hooks help you memoize expensive calculations and prevent recreation of functions on each render:\n\n```jsx\nconst memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);\nconst memoizedCallback = useCallback(() => { doSomething(a, b); }, [a, b]);\n```\n\n3. **Virtual List for Large Data Sets**\nRender only the visible items in a long list using libraries like react-window or react-virtualized.\n\n4. **Code Splitting**\nSplit your code into smaller chunks that can be loaded on demand using dynamic imports:\n\n```jsx\nconst LazyComponent = React.lazy(() => import('./LazyComponent'));\n```\n\nImplementing these techniques can significantly improve your React application's performance and user experience.",
    },
    {
      id: 4,
      title: "Building a REST API with Node.js",
      author: "Sam Wilson",
      date: "March 20, 2025",
      summary:
        "A comprehensive guide to building RESTful APIs with Node.js and Express",
      content:
        "Node.js is an excellent platform for building RESTful APIs due to its non-blocking I/O model and JavaScript runtime environment. In this guide, we'll explore how to build a robust REST API using Node.js and Express.\n\nFirst, let's set up a basic Express server:\n\n```javascript\nconst express = require('express');\nconst app = express();\nconst PORT = process.env.PORT || 3000;\n\napp.use(express.json());\n\napp.listen(PORT, () => {\n  console.log(`Server running on port ${PORT}`);\n});\n```\n\nNext, let's define some routes for a simple resource, such as users:\n\n```javascript\nlet users = [];\n\n// GET all users\napp.get('/api/users', (req, res) => {\n  res.json(users);\n});\n\n// GET a single user\napp.get('/api/users/:id', (req, res) => {\n  const user = users.find(u => u.id === parseInt(req.params.id));\n  if (!user) return res.status(404).json({ message: 'User not found' });\n  res.json(user);\n});\n\n// POST a new user\napp.post('/api/users', (req, res) => {\n  const user = {\n    id: users.length + 1,\n    name: req.body.name,\n    email: req.body.email\n  };\n  users.push(user);\n  res.status(201).json(user);\n});\n```\n\nFor a production-ready API, you'd want to add validation, error handling, authentication, and connect to a database. Libraries like Joi can help with validation, while Mongoose is great for MongoDB integration.\n\nRemember to secure your API using middleware like Helmet to set HTTP headers properly and implement rate limiting to prevent abuse.",
    },
  ];

  const openBlogPopup = (blog) => {
    setSelectedBlog(blog);
  };

  const closeBlogPopup = () => {
    setSelectedBlog(null);
  };

  return (
    <div
      className={`${
        darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-800"
      } flex flex-col px-20 py-6 min-h-screen -xsm:py-4 -md:px-10 -sm:px-6`}
    >
      <h1 className="w-full mb-10 text-2xl font-bold text-center">
        <span
          style={{
            background:
              "linear-gradient(90deg, #455be7 2.34%, #653bce 100.78%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          B
        </span>
        logs
      </h1>

      {blogs.length === 0 ? (
        <div className="text-center">No Blogs</div>
      ) : (
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className={`${
                darkMode ? "bg-gray-800" : "bg-gray-100"
              } rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer`}
              onClick={() => openBlogPopup(blog)}
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <Code size={20} className="text-blue-500" />
                  <div
                    className={`text-xs ${
                      darkMode ? "text-gray-400" : "text-gray-600"
                    }`}
                  >
                    <div className="flex items-center">
                      <Calendar size={14} className="mr-1" />
                      {blog.date}
                    </div>
                  </div>
                </div>
                <h2 className="mb-2 text-lg font-semibold">{blog.title}</h2>
                <p
                  className={`text-sm ${
                    darkMode ? "text-gray-300" : "text-gray-600"
                  } mb-4`}
                >
                  {blog.summary}
                </p>
                <div className="flex items-center mt-4">
                  <User size={16} className="mr-2" />
                  <span className="text-sm">{blog.author}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Blog Popup Modal */}
      {selectedBlog && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50">
          <div
            className={`${
              darkMode ? "bg-gray-800 text-white" : "bg-white text-gray-800"
            } rounded-lg w-full max-w-4xl max-h-[90vh] overflow-y-auto`}
          >
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold">{selectedBlog.title}</h2>
                <button
                  className="p-1 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"
                  onClick={closeBlogPopup}
                >
                  <X size={24} />
                </button>
              </div>

              <div className="flex items-center mb-4 text-sm">
                <User size={16} className="mr-2" />
                <span className="mr-4">{selectedBlog.author}</span>
                <Calendar size={16} className="mr-2" />
                <span>{selectedBlog.date}</span>
              </div>

              <div className="prose max-w-none dark:prose-invert">
                {selectedBlog.content.split("\n\n").map((paragraph, idx) => {
                  if (paragraph.startsWith("```")) {
                    const codeContent = paragraph.replace(
                      /```(jsx|javascript|typescript)?\n|```$/g,
                      ""
                    );
                    return (
                      <pre
                        key={idx}
                        className={`p-4 rounded ${
                          darkMode ? "bg-gray-900" : "bg-gray-100"
                        } overflow-x-auto`}
                      >
                        <code>{codeContent}</code>
                      </pre>
                    );
                  }
                  return <p key={idx}>{paragraph}</p>;
                })}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Blogs;
