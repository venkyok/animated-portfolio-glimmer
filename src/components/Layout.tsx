import React from "react";
import { Link, useLocation } from "react-router-dom";
import { FileText } from "lucide-react";

const navItems = [
  { name: "Home", path: "/" },
  { name: "Projects", path: "/works" },
  { name: "Skills", path: "/blog" },
  { name: "About", path: "/about" },
];

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation();

  return (
    <div className="h-screen flex flex-col bg-navy">
      <div className="w-full px-4 sm:px-4 max-w-7xl mx-auto">
        <header className="pt-12 pb-2">
          <div className="flex justify-between items-center">
            <Link to="/" className="group flex items-center">
              <div className="w-20 h-20 overflow-hidden rounded-full bg-purple-dark border-2 border-purple transition-all duration-300 group-hover:shadow-lg group-hover:shadow-purple/30">
                <img
                  src="/lovable-uploads/2d332a00-56ad-4a42-bcfe-8f9d494fbe61.png"
                  alt="Profile"
                  className="w-full h-full object-bottom object-cover ml-1"
                />
              </div>
            </Link>

            <nav className="hidden md:flex items-center space-x-2">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`nav-link px-4 py-2 text-base font-medium transition-colors duration-200 ${
                    location.pathname === item.path
                      ? "text-purple"
                      : "text-white/80 hover:text-white"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <div className="nav-separator mx-2 text-white/20">/</div>
            </nav>

            <a
              href="/lovable-uploads/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 py-2 px-4 rounded-full bg-opacity-10 border border-white/10 bg-white/5 text-white hover:bg-white/10 transition-all shadow-lg shadow-purple/5 btn-download"
            >
              <FileText className="w-4 h-4" />
              <span className="text-sm font-medium">View Full Resume</span>
            </a>
          </div>
        </header>
      </div>
      <div className="flex-1 overflow-y-auto overflow-x-hidden">
        <div className="w-full px-6 sm:px-4 max-w-7xl mx-auto">
          <main>{children}</main>
          <footer className="py-6 mt-2 text-center text-white/40 text-sm">
            <p>© {new Date().getFullYear()} Ammati Venkatesh</p>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default Layout;