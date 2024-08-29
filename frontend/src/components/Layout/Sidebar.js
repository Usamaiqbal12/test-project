// import React, { useState, useRef, useEffect } from 'react';
// import { Link, useLocation } from 'react-router-dom';

// const Sidebar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [isButtonVisible, setIsButtonVisible] = useState(true);
//   const sidebarRef = useRef(null);
//   const buttonRef = useRef(null);
//   const location = useLocation(); 

//   const toggleSidebar = () => {
//     if (isOpen) {
//       setIsOpen(false);
//       setTimeout(() => {
//         setIsButtonVisible(true);
//       }, 300);
//     } else {
//       setIsButtonVisible(false);
//       setIsOpen(true);
//     }
//   };

//   const handleClickOutside = (event) => {
//     if (sidebarRef.current && !sidebarRef.current.contains(event.target) && !buttonRef.current.contains(event.target)) {
//       setIsOpen(false);
//       setTimeout(() => {
//         setIsButtonVisible(true);
//       }, 300);
//     }
//   };

//   useEffect(() => {
//     document.addEventListener('mousedown', handleClickOutside);
//     return () => {
//       document.removeEventListener('mousedown', handleClickOutside);
//     };
//   }, []);

//   return (
//     <div>
//       {/* Mobile menu button */}
//       {isButtonVisible && (
//         <button
//           onClick={toggleSidebar}
//           ref={buttonRef}
//           className="md:hidden text-white bg-red-700 p-2 rounded-md fixed top-4 left-4 z-50"
//         >
//           ☰
//         </button>
//       )}

//       {/* Sidebar */}
//       <div
//         ref={sidebarRef}
//         className={`h-full bg-red-900 text-white w-64 space-y-6 px-2 py-7 fixed inset-y-0 left-0 transform ${
//           isOpen ? 'translate-x-0' : '-translate-x-full'
//         } md:relative md:translate-x-0 transition-transform duration-300 ease-in-out z-40`}
//       >
//         {/* Close button */}
//         <button
//           onClick={toggleSidebar}
//           className="md:hidden text-white bg-red-700 p-2 rounded-md absolute top-4 right-4"
//         >
//           <svg
//             className="h-6 w-6"
//             fill="none"
//             stroke="currentColor"
//             viewBox="0 0 24 24"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth="2"
//               d="M6 18L18 6M6 6l12 12"
//             />
//           </svg>
//         </button>

//         <nav className="space-y-1 mt-5">
//           <Link
//             to="/dashboard"
//             className={`block py-2.5 px-4 rounded transition duration-200 ${
//               location.pathname === '/dashboard' ? 'bg-red-700' : 'hover:bg-red-700'
//             }`}
//             onClick={() => setIsOpen(false)}
//           >
//             Home
//           </Link>
//           <Link
//             to="/dashboard/reports"
//             className={`block py-2.5 px-4 rounded transition duration-200 ${
//               location.pathname === '/dashboard/reports' ? 'bg-red-700' : 'hover:bg-red-700'
//             }`}
//             onClick={() => setIsOpen(false)}
//           >
//             Reports
//           </Link>
//           <Link
//             to="/dashboard/settings"
//             className={`block py-2.5 px-4 rounded transition duration-200 ${
//               location.pathname === '/dashboard/settings' ? 'bg-red-700' : 'hover:bg-red-700'
//             }`}
//             onClick={() => setIsOpen(false)}
//           >
//             Settings
//           </Link>
//         </nav>
//       </div>
//     </div>
//   );
// };

// export default Sidebar;


// import React, { useState, useRef, useEffect } from 'react';
// import { Link, useLocation } from 'react-router-dom';

// const Sidebar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [isButtonVisible, setIsButtonVisible] = useState(true);
//   const sidebarRef = useRef(null);
//   const buttonRef = useRef(null);
//   const location = useLocation(); 

//   const toggleSidebar = () => {
//     if (isOpen) {
//       setIsOpen(false);
//       setTimeout(() => {
//         setIsButtonVisible(true);
//       }, 300);
//     } else {
//       setIsButtonVisible(false);
//       setIsOpen(true);
//     }
//   };

//   const handleClickOutside = (event) => {
//     if (
//       sidebarRef.current &&
//       buttonRef.current &&
//       !sidebarRef.current.contains(event.target) &&
//       !buttonRef.current.contains(event.target)
//     ) {
//       setIsOpen(false);
//       setTimeout(() => {
//         setIsButtonVisible(true);
//       }, 300);
//     }
//   };

//   useEffect(() => {
//     document.addEventListener('mousedown', handleClickOutside);
//     return () => {
//       document.removeEventListener('mousedown', handleClickOutside);
//     };
//   }, []);

//   return (
//     <div>
//       {/* Mobile menu button */}
//       {isButtonVisible && (
//         <button
//           onClick={toggleSidebar}
//           ref={buttonRef}
//           className="md:hidden text-white bg-red-700 p-2 rounded-md fixed top-4 left-4 z-50"
//         >
//           ☰
//         </button>
//       )}

//       {/* Sidebar */}
//       <div
//         ref={sidebarRef}
//         className={`h-full bg-red-900 text-white w-64 space-y-6 px-2 py-7 fixed inset-y-0 left-0 transform ${
//           isOpen ? 'translate-x-0' : '-translate-x-full'
//         } md:relative md:translate-x-0 transition-transform duration-300 ease-in-out z-40`}
//       >
//         {/* Close button */}
//         <button
//           onClick={toggleSidebar}
//           className="md:hidden text-white bg-red-700 p-2 rounded-md absolute top-4 right-4"
//         >
//           <svg
//             className="h-6 w-6"
//             fill="none"
//             stroke="currentColor"
//             viewBox="0 0 24 24"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth="2"
//               d="M6 18L18 6M6 6l12 12"
//             />
//           </svg>
//         </button>

//         <nav className="space-y-1 mt-5">
//           <Link
//             to="/dashboard"
//             className={`block py-2.5 px-4 rounded transition duration-200 ${
//               location.pathname === '/dashboard' ? 'bg-red-700' : 'hover:bg-red-700'
//             }`}
//             onClick={() => setIsOpen(false)}
//           >
//             Home
//           </Link>
//           <Link
//             to="/dashboard/reports"
//             className={`block py-2.5 px-4 rounded transition duration-200 ${
//               location.pathname === '/dashboard/reports' ? 'bg-red-700' : 'hover:bg-red-700'
//             }`}
//             onClick={() => setIsOpen(false)}
//           >
//             Reports
//           </Link>
//           <Link
//             to="/dashboard/settings"
//             className={`block py-2.5 px-4 rounded transition duration-200 ${
//               location.pathname === '/dashboard/settings' ? 'bg-red-700' : 'hover:bg-red-700'
//             }`}
//             onClick={() => setIsOpen(false)}
//           >
//             Settings
//           </Link>
//         </nav>
//       </div>
//     </div>
//   );
// };

// export default Sidebar;

import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isButtonVisible, setIsButtonVisible] = useState(true);
  const sidebarRef = useRef(null);
  const buttonRef = useRef(null);
  const location = useLocation(); 

  const toggleSidebar = () => {
    if (isOpen) {
      setIsOpen(false);
      setIsButtonVisible(true); // Ensure button is visible immediately
    } else {
      setIsButtonVisible(false); // Hide button immediately
      setIsOpen(true);
    }
  };

  const handleClickOutside = (event) => {
    if (
      sidebarRef.current &&
      buttonRef.current &&
      !sidebarRef.current.contains(event.target) &&
      !buttonRef.current.contains(event.target)
    ) {
      setIsOpen(false);
      setIsButtonVisible(true); // Ensure button is visible immediately
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    // Handle visibility of button when sidebar is closed
    if (!isOpen) {
      setIsButtonVisible(true);
    }
  }, [isOpen]);

  return (
    <div>
      {/* Mobile menu button */}
      {isButtonVisible && (
        <button
          onClick={toggleSidebar}
          ref={buttonRef}
          className="md:hidden text-white bg-red-700 p-2 rounded-md fixed top-4 left-4 z-50"
        >
          ☰
        </button>
      )}

      {/* Sidebar */}
      <div
        ref={sidebarRef}
        className={`h-full bg-red-900 text-white w-64 space-y-6 px-2 py-7 fixed inset-y-0 left-0 transform ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } md:relative md:translate-x-0 transition-transform duration-300 ease-in-out z-40`}
      >
        {/* Close button */}
        <button
          onClick={toggleSidebar}
          className="md:hidden text-white bg-red-700 p-2 rounded-md absolute top-4 right-4"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        <nav className="space-y-1 mt-5">
          <Link
            to="/dashboard"
            className={`block py-2.5 px-4 rounded transition duration-200 ${
              location.pathname === '/dashboard' ? 'bg-red-700' : 'hover:bg-red-700'
            }`}
            onClick={() => {
              setIsOpen(false);
              setIsButtonVisible(true); // Ensure button is visible when navigating
            }}
          >
            Home
          </Link>
          <Link
            to="/dashboard/reports"
            className={`block py-2.5 px-4 rounded transition duration-200 ${
              location.pathname === '/dashboard/reports' ? 'bg-red-700' : 'hover:bg-red-700'
            }`}
            onClick={() => {
              setIsOpen(false);
              setIsButtonVisible(true); // Ensure button is visible when navigating
            }}
          >
            Reports
          </Link>
          <Link
            to="/dashboard/settings"
            className={`block py-2.5 px-4 rounded transition duration-200 ${
              location.pathname === '/dashboard/settings' ? 'bg-red-700' : 'hover:bg-red-700'
            }`}
            onClick={() => {
              setIsOpen(false);
              setIsButtonVisible(true); // Ensure button is visible when navigating
            }}
          >
            Settings
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
