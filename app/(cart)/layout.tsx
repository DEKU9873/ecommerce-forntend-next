import Navbar, { NavigationSection } from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";

const navigationData: NavigationSection[] = [
  {
    title: 'Home',
    href: '/'
  },
  {
    title: 'Products',
    href: '/products'
  },
  {
    title: 'About Us',
    href: '#'
  },
  {
    title: 'Contacts',
    href: '#'
  }
]

export default function MainLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="w-full">
      <div className="sticky top-0 z-50">
        <Navbar navigationData={navigationData} />
      </div>
      <div className="">
        {children}
      </div>
      <Footer />
    </div>
  )
}
