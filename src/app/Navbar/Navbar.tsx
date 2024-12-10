'use client';
import {  Heart, ShoppingCart, Search, Menu } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState(''); // State to handle search input
  const [filteredItems, setFilteredItems] = useState<string[]>([]);
  const [isMounted, setIsMounted] = useState(false);

  // Ensure the component is mounted on the client
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Avoid rendering until fully mounted on the client
  if (!isMounted) return null;

  // Sample list of items (you can replace it with actual product data)
  const items = ['Nike Air Max', 'Nike Running Shoes', 'Nike Hoodie', 'Nike Socks', 'Nike T-Shirt'];

  // Function to toggle mobile menu visibility
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // Function to toggle search box visibility
  const toggleSearch = () => setIsSearchOpen(!isSearchOpen);

  // Function to handle search input change
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);

    // Filtering the items based on the search query
    const filtered = items.filter((item) => item.toLowerCase().includes(query.toLowerCase()));
    setFilteredItems(filtered);
  };

  // Function to handle search form submission
  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Searching for:', searchQuery); // Replace with actual search logic or API call
  };

  return (
    <header className="w-full text-black">
      {/* Top Bar */}
      <div className="h-[48px] bg-[#F5F5F5] flex items-center justify-between px-6 text-xs font-light">
        {/* Left */}
        <div className="flex items-center gap-4">
          <Image src="/Images/nike-logo.PNG" alt="Nike logo" width={20} height={20} />
        </div>
        {/* Center */}
        
        <button className="text-gray-600 text-xs font-bold"><Link href="/">Skip to main content</Link></button>
        
        {/* Right */}
        <div className=" gap-3 text-gray-600 text-sm hidden sm:flex">
          <Link href="/FindStore" className="hover:underline">
            Find a Store
          </Link>
          <span>|</span>
          <Link href="/Help" className="hover:underline">
            Help
          </Link>
          <span>|</span>
          <Link href="/JoinUs" className="hover:underline">
            Join Us
          </Link>
          <span>|</span>
          <Link href="/Login" className="hover:underline">
            Sign In
          </Link>
        </div>
      </div>

      {/* Bottom Navbar */}
      <nav className="w-full h-[55px] flex items-center justify-between px-6 border-b border-gray-300">
        {/* Left Logo */}
        <div>
          <Link href="/">
          <Image src="/Images/jordan-logo.PNG" alt="Jordan logo" width={40} height={40} />
          </Link>
        </div>

        {/* Center Links */}
        <ul className="space-x-8 text-sm font-medium hidden md:flex">
          <li>
            <Link href="/Products" className="hover:underline">
              New & Featured
            </Link>
          </li>
          <li>
            <Link href="/Products" className="hover:underline">
              Men
            </Link>
          </li>
          <li>
            <Link href="/Products" className="hover:underline">
              Women
            </Link>
          </li>
          <li>
            <Link href="/Products" className="hover:underline">
              Kids
            </Link>
          </li>
          <li>
            <Link href="/Products" className="hover:underline">
              Sale
            </Link>
          </li>
          <li>
            <Link href="/SnkrsRoute" className="hover:underline">
              SNKRS
            </Link>
          </li>
        </ul>

        {/* Right Search and Icons */}
        <div className="flex items-center gap-6">
          {/* Search Box for Large Screens */}
          <div className="relative w-[183px] hidden sm:block">
            <form onSubmit={handleSearchSubmit}>
              <input
                type="text"
                placeholder="Search"
                value={searchQuery}
                onChange={handleSearchChange}
                className="w-full h-[33px] pl-10 pr-4 text-sm text-gray-700 bg-gray-100 border rounded-full focus:outline-none focus:ring-2 focus:ring-black"
              />
              <Search className="absolute left-3 top-2 text-gray-400" size={18} />
            </form>
          </div>

          {/* Mobile Search Icon */}
          <div className="sm:hidden">
            <button onClick={toggleSearch}>
              <Search className="text-gray-700 hover:text-black cursor-pointer" />
            </button>
          </div>

          {/* Icons */}
          <Heart className="text-gray-700 hover:text-black cursor-pointer" />
          <ShoppingCart className="text-gray-700 hover:text-black cursor-pointer" />
        </div>

        {/* Hamburger Menu for Small Screens */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu}>
            <Menu className="text-gray-700" size={24} />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#F5F5F5] p-4">
          <ul className="space-y-3 text-center">
            <li>
              <Link href="/Products" className="block text-sm hover:underline">
                New & Featured
              </Link>
            </li>
            <li>
              <Link href="/Products" className="block text-sm hover:underline">
                Men
              </Link>
            </li>
            <li>
              <Link href="/Products" className="block text-sm hover:underline">
                Women
              </Link>
            </li>
            <li>
              <Link href="/Products" className="block text-sm hover:underline">
                Kids
              </Link>
            </li>
            <li>
              <Link href="/Products" className="block text-sm hover:underline">
                Sale
              </Link>
            </li>
            <li>
              <Link href="/snkrs" className="block text-sm hover:underline">
                SNKRS
              </Link>
            </li>
          </ul>
        </div>
      )}

      {/* Mobile Search Box */}
      {isSearchOpen && (
        <div className="sm:hidden absolute top-[55px] left-0 w-full bg-white p-4 shadow-md">
          <form onSubmit={handleSearchSubmit}>
            <input
              type="text"
              placeholder="Search"
              value={searchQuery}
              onChange={handleSearchChange}
              className="w-full h-[33px] pl-10 pr-4 text-sm text-gray-700 bg-gray-100 border rounded-full focus:outline-none focus:ring-2 focus:ring-black"
            />
            <Search className="absolute left-3 top-2 text-gray-400" size={18} />
          </form>
          {/* Display filtered items */}
          <ul className="mt-2 space-y-2 text-sm text-gray-700">
            {filteredItems.length === 0 ? (
              <li>No items found</li>
            ) : (
              filteredItems.map((item, index) => <li key={index}>{item}</li>)
            )}
          </ul>
        </div>
      )}
    </header>
  );
}

export default Navbar;
