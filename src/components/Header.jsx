import React,{useState,useEffect} from 'react'
import { Disclosure } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import CartIcon from '../assets/header_images/shopping-cart.png'
import Logo from '../assets/header_images/cmpLogo.png'

const navigation = [
  { name: 'WHAT WE DO', href: '#what-we-do', id: 'what-we-do'},
  { name: 'SHOP NOW', href: '#shop-now', id: 'shop-now'},
  { name: 'CONNECT', href: '#connect-now', id: 'connect-now'},
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Header() {
  const [currentSection, setCurrentSection] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.target.id) {
            setCurrentSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 } // Adjust threshold as needed
    );

    // Observe each section
    navigation.forEach((item) => {
      const element = document.getElementById(item.id);
      if (element) {
        observer.observe(element);
      }
    });

    // Cleanup
    return () => {
      observer.disconnect();
    };
  }, []);
  const handleNavigationClick = (id) => {
    setCurrentSection(id);
  };
  return (
    <Disclosure as="nav" className="bg-grey-cust fixed w-screen z-50">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between flex-row-reverse">
              <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-end sm:items-stretch sm:justify-end">
                <div className="hidden sm:mr-6 sm:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        onClick={() => handleNavigationClick(item.id)}
                        className={classNames(
                          currentSection === item.id ? 'bg-gray-900 text-amber-500' : 'text-white hover:bg-gray-700 hover:text-white',
                          'rounded-md px-3 py-2 text-sm text-xl'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
                <div
                  className="relative right-cust"
                >
                  <img className='w-6 h-5 md:w-12 md:h-11 lg:w-12 lg:h-11' src={CartIcon} alt="Shopping-cart"/>
                </div>
              </div>
              <div className="absolute inset-y-0 left-0 flex items-center pr-2 sm:static sm:inset-auto sm:pr-0">
                <div className="flex flex-shrink-0 items-center">
                  <img
                    className='lg:w-24 lg:h-12 w-12 h-6'
                    src={Logo}
                    alt="Company-logo"
                  />
                  <h1 className='text-white text-xl lg:text-3xl subpixel-antialiased font-black mx-1.5'>ABHISHADGURU</h1>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'block rounded-md px-3 py-2 text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}
