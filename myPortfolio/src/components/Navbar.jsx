// import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
// import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
// import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/react";
// import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
// import { useLocation, Link } from "react-router-dom";
// import React from "react";
// const navigation = [
//   { name: "Home", href: "/" },
//   { name: "Projects", href: "/Projects" },
//   { name: "About", href: "/About" },
//   { name: "Contact", href: "/Contact" },
// ];

// function classNames(...classes) {
//   return classes.filter(Boolean).join(" ");
// }

// export default function Navbar() {
//   const location = useLocation();

//   return (
//     <Disclosure as="nav" className="bg-[#969191] shadow-lg fixed top-0 left-0 w-full z-50">
//       {({ open }) => (
//         <>
//           <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
//             <div className="relative flex h-16 items-center justify-between">
//               {/* Mobile button */}
//               <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
//                 <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-500 hover:bg-gray-800 hover:text-white focus:ring-2 focus:ring-white focus:outline-hidden focus:ring-inset">
//                   <span className="sr-only">{open ? "Close main menu" : "Open main menu"}</span>
//                   <Bars3Icon aria-hidden="true" className="block size-6 group-data-open:hidden" />
//                   <XMarkIcon aria-hidden="true" className="hidden size-6 group-data-open:block" />
//                 </DisclosureButton>
//               </div>

//               {/* Logo + Links */}
//               <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
//                 <h1 className="text-white text-3xl font-extrabold">myPortfolio</h1>
//                 <div className="hidden sm:ml-6 sm:block">
//                   <div className="flex space-x-4 ml-8">
//                     {navigation.map((item) => {
//                       const isActive = location.pathname === item.href;
//                       return (
//                         <Link
//                           key={item.name}
//                           to={item.href}
//                           className={classNames(
//                             isActive
//                               ? "bg-gray-900 text-white"
//                               : "text-gray-300 hover:bg-gray-700 hover:text-white",
//                             "rounded-md px-3 py-2 text-sm font-medium"
//                           )}
//                         >
//                           {item.name}
//                         </Link>
//                       );
//                     })}
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Mobile Menu */}
//           <DisclosurePanel className="sm:hidden">
//             <div className="space-y-1 px-2 pt-2 pb-3">
//               {navigation.map((item) => {
//                 const isActive = location.pathname === item.href;
//                 return (
//                   <DisclosureButton
//                     key={item.name}
//                     as={Link}
//                     to={item.href}
//                     className={classNames(
//                       isActive
//                         ? "bg-gray-900 text-white"
//                         : "text-gray-300 hover:bg-gray-700 hover:text-white",
//                       "block rounded-md px-3 py-2 text-base font-medium"
//                     )}
//                   >
//                     {item.name}
//                   </DisclosureButton>
//                 );
//               })}
//             </div>
//           </DisclosurePanel>
//         </>
//       )}
//     </Disclosure>
//   );
// }



import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useLocation, Link } from "react-router-dom";
import React, { useEffect, useState } from "react";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Projects", href: "/Projects" },
  { name: "About", href: "/About" },
  { name: "Contact", href: "/Contact" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Disclosure
      as="nav"
      className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${
        scrolled ? "bg-[#969191] shadow-lg" : "bg-transparent"
      }`}
    >
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              {/* Mobile button */}
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-500 hover:bg-gray-800 hover:text-white focus:ring-2 focus:ring-white focus:outline-hidden focus:ring-inset">
                  <span className="sr-only">
                    {open ? "Close main menu" : "Open main menu"}
                  </span>
                  <Bars3Icon
                    aria-hidden="true"
                    className="block size-6 group-data-open:hidden"
                  />
                  <XMarkIcon
                    aria-hidden="true"
                    className="hidden size-6 group-data-open:block"
                  />
                </DisclosureButton>
              </div>

              {/* Logo + Links */}
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <h1 className="text-white text-3xl font-extrabold">
                  myPortfolio
                </h1>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4 ml-8">
                    {navigation.map((item) => {
                      const isActive = location.pathname === item.href;
                      return (
                        <Link
                          key={item.name}
                          to={item.href}
                          className={classNames(
                            isActive
                              ? "bg-gray-900 text-white"
                              : "text-gray-300 hover:bg-gray-700 hover:text-white",
                            "rounded-md px-3 py-2 text-sm font-medium"
                          )}
                        >
                          {item.name}
                        </Link>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Menu */}
          <DisclosurePanel className="sm:hidden">
            <div className="space-y-1 px-2 pt-2 pb-3">
              {navigation.map((item) => {
                const isActive = location.pathname === item.href;
                return (
                  <DisclosureButton
                    key={item.name}
                    as={Link}
                    to={item.href}
                    className={classNames(
                      isActive
                        ? "bg-gray-900 text-white"
                        : "text-gray-300 hover:bg-gray-700 hover:text-white",
                      "block rounded-md px-3 py-2 text-base font-medium"
                    )}
                  >
                    {item.name}
                  </DisclosureButton>
                );
              })}
            </div>
          </DisclosurePanel>
        </>
      )}
    </Disclosure>
  );
}

// import React from 'react'
// const navigation = [
//   { name: 'Home', href: '/', current: true },
//   { name: 'Projects', href: '/Projects', current: false },
//   { name: 'About', href: '/About', current: false },
//   { name: 'Contact', href: '/Contact', current: false },
// ]

// function classNames(...classes) {
//   return classes.filter(Boolean).join(' ')
// }

// export default function navbar() {
//   return (
//     <Disclosure as="nav" className="bg-[#969191] shadow-lg fixed top-0 left-0 w-full z-50">


//       <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
//         <div className="relative flex h-16 items-center justify-between">
//           <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
//             {/* Mobile menu button*/}
//             <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-500 hover:bg-gray-800 hover:text-white focus:ring-2 focus:ring-white focus:outline-hidden focus:ring-inset">
//               <span className="absolute -inset-0.5" />
//               <span className="sr-only">Open main menu</span>
//               <Bars3Icon aria-hidden="true" className="block size-6 group-data-open:hidden" />
//               <XMarkIcon aria-hidden="true" className="hidden size-6 group-data-open:block" />
//             </DisclosureButton>
//           </div>
//           <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
//             <div className="flex shrink-0 items-center">
//               {/* <img
//                 alt="Your Company"
//              //   src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500"
//                 className="h-8 w-auto"
//               /> */}
//               <h1 className="text-white text-3xl font-extrabold ">myPortfolio</h1>
//             </div>
//             <div className="hidden sm:ml-6 sm:block">
//               <div className="flex space-x-4 ml-30">
//                 {navigation.map((item) => (
//                   <a
//                     key={item.name}
//                     href={item.href}
//                     aria-current={item.current ? 'page' : undefined}
//                     className={classNames(
//                       item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
//                       'rounded-md px-3 py-2 text-sm font-medium',
//                     )}
//                   >
//                     {item.name}
//                   </a>
//                 ))}
//               </div>
//             </div>
//           </div>
//           <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">

//             {/* <button
//               type="button"
//               className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 focus:outline-hidden"
//             >
//               <span className="absolute -inset-1.5" />
//               <span className="sr-only">View notifications</span>
//               <BellIcon aria-hidden="true" className="size-6" />
//             </button> */}

//             {/* Profile dropdown */}
           
//           </div>
//         </div>
//       </div>

//       <DisclosurePanel className="sm:hidden">
//         <div className="space-y-1 px-2 pt-2 pb-3">
//           {navigation.map((item) => (
//             <DisclosureButton
//               key={item.name}
//               as="a"
//               href={item.href}
//               aria-current={item.current ? 'page' : undefined}
//               className={classNames(
//                 item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
//                 'block rounded-md px-3 py-2 text-base font-medium',
//               )}
//             >
//               {item.name}
//             </DisclosureButton>
//           ))}
//         </div>
//       </DisclosurePanel>
//     </Disclosure>
//   )
// }
