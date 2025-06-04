import Link from 'next/link';

export default function Header() {
  const navItems = [
    { label: "Home", link: "/" },
    { label: "Portfolio", link: "/portfolio" },
    { label: "About Me", link: "/about-me" },
    { label: "Contact Me", link: "/contact-me" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 border-b border-white/10 bg-transparent">
      <div className="flex items-center justify-between max-w-7xl mx-auto px-4 py-4 font-outfit">
        
        {/* Logo */}
        <Link href="/" className="block">
          <img
            src="/logo-15.webp"
            alt="Basel Logo"
            className="h-20 object-contain drop-shadow-[0_4px_10px_rgba(255,255,255,0.25)]"
          />
        </Link>

        {/* Navigation Links */}
        <div className="flex gap-6 items-center">
          {navItems.map((item, index) => (
            <Link
              key={index}
              href={item.link}
              className="text-white font-medium text-sm hover:text-gray-300 transition-colors duration-300"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}
