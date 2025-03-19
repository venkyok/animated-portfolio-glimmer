
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
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="h-screen flex bg-navy">

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        <header className="w-full px-4 sm:px-4 pt-12 pb-2">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-4">
              <button 
                onClick={() => setIsOpen(true)}
                className="md:hidden p-2 text-white hover:text-purple transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="4" y1="12" x2="20" y2="12"></line>
                  <line x1="4" y1="6" x2="20" y2="6"></line>
                  <line x1="4" y1="18" x2="20" y2="18"></line>
                </svg>
              </button>
              <Link to="/" className="group flex items-center">
                <div className="w-16 h-16 overflow-hidden rounded-full bg-purple-dark border-2 border-purple transition-all duration-300 group-hover:shadow-lg group-hover:shadow-purple/30">
                <img
                  src="/lovable-uploads/2d332a00-56ad-4a42-bcfe-8f9d494fbe61.png"
                  alt="Profile"
                  className="w-full h-full object-bottom object-cover ml-1"
                />
              </div>
            </Link>

            

            {/* Mobile Menu */}
            <div 
              className={`fixed inset-0 bg-black/50 z-50 transition-opacity ${
                isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
              }`} 
              onClick={() => setIsOpen(false)}
            >
              <div 
                className={`absolute left-0 top-0 h-full w-64 bg-navy-light p-6 shadow-xl transform transition-transform ${
                  isOpen ? 'translate-x-0' : '-translate-x-full'
                }`} 
                onClick={e => e.stopPropagation()}
              >
                <div className="flex flex-col space-y-4">
                  {navItems.map((item) => (
                    <Link
                      key={item.name}
                      to={item.path}
                      onClick={() => setIsOpen(false)}
                      className={`px-4 py-2 text-base font-medium transition-colors duration-200 ${
                        location.pathname === item.path
                          ? "text-purple"
                          : "text-white/80 hover:text-white"
                      }`}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

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

        <main className="flex-1 overflow-y-auto overflow-x-hidden">
          <div className="w-full px-6 sm:px-4 max-w-7xl mx-auto">
            {children}
            <footer className="py-6 mt-2 text-center text-white/40 text-sm">
              <p>© {new Date().getFullYear()} Ammati Venkatesh</p>
            </footer>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Layout;
