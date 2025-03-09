import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react';
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline';
import { useParams, useSearchParams } from 'react-router';

const user = {
  name: 'Tom Cook',
  email: 'tom@example.com',
  imageUrl:
    'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
};

const userNavigation = [
  { name: 'Your Profile', href: '#' },
  { name: 'Settings', href: '#' },
  { name: 'Sign out', href: '#' },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Header() {
  const [searchParams, setSearchParams] = useSearchParams();
  const { single } = useParams()

  return (
    <>
      <div className="min-h-full">
        <Disclosure as="nav" className="bg-gray-800">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 items-center justify-between">
              <div className="flex items-center w-full">
                {/* Rick and Morty Icon */}
                <div className="shrink-0">
                  <img
                    alt="Rick and Morty"
                    src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Rick_and_Morty.svg" // Replace with your local path if needed
                    class="h-12 w-auto"
                  />
                </div>

                {/* Navigation and Search Bar */}
                <div className="hidden md:block w-full">
                  <nav className={`ml-10 ${single?'hidden':'flex'} items-center justify-evenly w-full space-x-4`}>
                    <input
                      className="bg-gray-700 p-2 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
                      placeholder="Search..."
                    />
                    <button
                      className="bg-gray-700 text-white cursor-pointer px-4 py-2 rounded-lg hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
                      onClick={() => setSearchParams({ s: 'all' })}
                    >
                      All
                    </button>
                    <button
                      className="bg-gray-700 text-white cursor-pointer px-4 py-2 rounded-lg hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
                      onClick={() => setSearchParams({ s: 'alive' })}
                    >
                      Alives
                    </button>
                    <button
                      className="bg-red-600 text-white cursor-pointer px-4 py-2 rounded-lg hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 transition duration-200"
                      title="Favorites"
                      onClick={() => setSearchParams({ s: 'fave' })}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        stroke="currentColor"

                        stroke-linecap="round"
                        stroke-linejoin="round"
                        className="icon icon-tabler icons-tabler-outline icon-tabler-heart"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" />
                      </svg>
                    </button>
                  </nav>
                </div>
              </div>

              {/* Mobile Menu Button */}
              <div className="-mr-2 flex md:hidden">
                <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  <Bars3Icon aria-hidden="true" className="block size-6 group-data-[open]:hidden" />
                  <XMarkIcon aria-hidden="true" className="hidden size-6 group-data-[open]:block" />
                </DisclosureButton>
              </div>
            </div>
          </div>

          {/* Mobile Menu */}
          <DisclosurePanel className="md:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
              <input
                className="bg-gray-700 p-2 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200 w-full"
                placeholder="Search..."
              />
              <button
                className="bg-gray-700 text-white cursor-pointer px-4 py-2 rounded-lg hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 w-full text-left"
                onClick={() => setSearchParams({ s: 'all' })}
              >
                All
              </button>
              <button
                className="bg-gray-700 text-white cursor-pointer px-4 py-2 rounded-lg hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 w-full text-left"
                onClick={() => setSearchParams({ s: 'alive' })}
              >
                Alives
              </button>
              <button
                className="bg-red-600 text-white cursor-pointer px-4 py-2 rounded-lg hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 transition duration-200 w-full text-left"
                title="Favorites"
                onClick={() => setSearchParams({ s: 'fave' })}
              >
                Favorites
              </button>
            </div>
          </DisclosurePanel>
        </Disclosure>
        <main>
          <div className="mx-auto max-w-7xl px-4 py-1 sm:px-6 lg:px-8">{/* Your content */}</div>
        </main>
      </div>
    </>
  );
}