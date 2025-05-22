
// 'use client';
// import { usePathname } from 'next/navigation';
// import Navbar from '../../components/Navbar';

// export default function AppWrapper({ children }) {
//   const pathname = usePathname();
//   const hideNavbar = pathname?.startsWith('/auth',);

//   return (
//     <div className="flex flex-col min-h-screen">
//       {!hideNavbar && <Navbar/>}
//       <main className="flex-grow">{children}</main>
//     </div>
//   );
// }




// 'use client';
// import { usePathname } from 'next/navigation';
// import Navbar from '../../components/Navbar';

// export default function AppWrapper({ children }) {
//   const pathname = usePathname();
//   const noNavbarRoutes = ['/auth/login','/auth/register','/auth']; // Add all auth routes here

//   const shouldHideNavbar = noNavbarRoutes.some(route =>
//     pathname?.startsWith(route)
//   );

//   return (
//     <div className="flex flex-col min-h-screen">
//       {!shouldHideNavbar && <Navbar />}
//       <main className="flex-grow">{children}</main>
//     </div>
//   );
// }


'use client';
import { usePathname } from 'next/navigation';
import Navbar from '../../components/Navbar';

export default function AppWrapper({ children }) {
  const pathname = usePathname();
  const shouldHideNavbar = pathname?.startsWith('/auth');

  return (
    <div className="flex flex-col min-h-screen">
      {!shouldHideNavbar && <Navbar />}
      <main className="flex-grow">{children}</main>
    </div>
  );
}