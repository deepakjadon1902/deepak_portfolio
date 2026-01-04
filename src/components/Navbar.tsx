import { useState, useEffect } from 'react';
import { NavLink } from './NavLink';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Mail, Github, Linkedin } from 'lucide-react';

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Projects', path: '/projects' },
  { name: 'Skills', path: '/skills' },
  { name: 'Resume', path: '/resume' },
  { name: 'Contact', path: '/contact' },
];

const socialLinks = [
  { icon: Mail, href: 'mailto:deepakjadon1907@email.com', label: 'Email' },
  { icon: Github, href: 'https://github.com/deepakjadon1902', label: 'GitHub' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/deepak-jadon-612487272', label: 'LinkedIn' },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Rajdhani:wght@500;600;700&family=Orbitron:wght@700;900&display=swap');

        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        .navbar-container {
          background: linear-gradient(135deg, 
            rgba(15, 23, 42, 0.95) 0%, 
            rgba(30, 41, 59, 0.95) 50%, 
            rgba(15, 23, 42, 0.95) 100%);
          backdrop-filter: blur(20px) saturate(180%);
          -webkit-backdrop-filter: blur(20px) saturate(180%);
          border-bottom: 1px solid rgba(125, 211, 252, 0.2);
          box-shadow: 0 4px 30px rgba(0, 0, 0, 0.3),
                      inset 0 1px 0 rgba(255, 255, 255, 0.1);
          position: relative;
        }

        .navbar-container::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(90deg, 
            transparent 0%, 
            rgba(125, 211, 252, 0.05) 50%, 
            transparent 100%);
          pointer-events: none;
        }

        .navbar-scrolled {
          background: linear-gradient(135deg, 
            rgba(15, 23, 42, 0.98) 0%, 
            rgba(30, 41, 59, 0.98) 50%, 
            rgba(15, 23, 42, 0.98) 100%);
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4),
                      inset 0 1px 0 rgba(255, 255, 255, 0.15),
                      0 0 40px rgba(125, 211, 252, 0.1);
        }

        .logo-desktop {
          font-family: 'Orbitron', sans-serif;
          font-size: 1.75rem;
          font-weight: 900;
          background: linear-gradient(135deg, #ffffff 0%, #7dd3fc 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          letter-spacing: 0.05em;
          text-shadow: 0 0 30px rgba(125, 211, 252, 0.5);
          position: relative;
          padding: 0.5rem 1.25rem;
          border-radius: 12px;
          background-color: rgba(125, 211, 252, 0.05);
          border: 1px solid rgba(125, 211, 252, 0.2);
          box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.1),
                      0 4px 15px rgba(125, 211, 252, 0.15);
          transition: all 0.3s ease;
        }

        .logo-desktop:hover {
          transform: translateY(-2px);
          box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.15),
                      0 8px 25px rgba(125, 211, 252, 0.3);
          background-color: rgba(125, 211, 252, 0.1);
        }

        .logo-mobile {
          font-family: 'Orbitron', sans-serif;
          font-size: 1.5rem;
          font-weight: 900;
          background: linear-gradient(135deg, #ffffff 0%, #7dd3fc 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          letter-spacing: 0.1em;
          text-shadow: 0 0 30px rgba(125, 211, 252, 0.5);
          padding: 0.375rem 1rem;
          border-radius: 10px;
          background-color: rgba(125, 211, 252, 0.05);
          border: 1px solid rgba(125, 211, 252, 0.2);
          box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.1);
        }

        .nav-center-group {
          display: flex;
          align-items: center;
          gap: 0;
          padding: 0.5rem;
          background: linear-gradient(135deg, 
            rgba(30, 41, 59, 0.8) 0%, 
            rgba(15, 23, 42, 0.8) 100%);
          border: 1px solid rgba(125, 211, 252, 0.3);
          border-radius: 50px;
          backdrop-filter: blur(12px);
          box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.1),
                      0 8px 32px rgba(0, 0, 0, 0.3),
                      0 0 20px rgba(125, 211, 252, 0.2);
          position: relative;
          overflow: hidden;
        }

        .nav-center-group::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, 
            transparent, 
            rgba(125, 211, 252, 0.1), 
            transparent);
          animation: shimmer 3s infinite;
        }

        @keyframes shimmer {
          0% { left: -100%; }
          100% { left: 100%; }
        }

        .nav-link {
          position: relative;
          padding: 0.65rem 1.75rem;
          color: #e2e8f0;
          font-family: 'Rajdhani', sans-serif;
          font-size: 0.95rem;
          font-weight: 600;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          border-radius: 40px;
          text-decoration: none;
          white-space: nowrap;
        }

        @media (min-width: 1280px) {
          .nav-link {
            font-size: 1rem;
            padding: 0.7rem 2rem;
          }
        }

        .nav-link:hover {
          color: #7dd3fc;
          background: rgba(125, 211, 252, 0.1);
          text-shadow: 0 0 10px rgba(125, 211, 252, 0.5);
        }

        .nav-link-active {
          color: #ffffff;
          background: linear-gradient(135deg, 
            rgba(125, 211, 252, 0.3) 0%, 
            rgba(56, 189, 248, 0.3) 100%);
          font-weight: 700;
          box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2),
                      0 4px 15px rgba(125, 211, 252, 0.3);
          border: 1px solid rgba(125, 211, 252, 0.4);
          text-shadow: 0 0 15px rgba(125, 211, 252, 0.8);
        }

        .menu-button {
          width: 2.75rem;
          height: 2.75rem;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #7dd3fc;
          background: linear-gradient(135deg, 
            rgba(30, 41, 59, 0.8) 0%, 
            rgba(15, 23, 42, 0.8) 100%);
          border-radius: 12px;
          border: 1px solid rgba(125, 211, 252, 0.3);
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.1),
                      0 4px 15px rgba(125, 211, 252, 0.2);
        }

        .menu-button:hover {
          background: linear-gradient(135deg, 
            rgba(125, 211, 252, 0.2) 0%, 
            rgba(56, 189, 248, 0.2) 100%);
          transform: translateY(-2px);
          box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.15),
                      0 8px 25px rgba(125, 211, 252, 0.4);
        }

        .mobile-menu {
          background: linear-gradient(135deg, 
            rgba(15, 23, 42, 0.98) 0%, 
            rgba(30, 41, 59, 0.98) 100%);
          backdrop-filter: blur(20px) saturate(180%);
          -webkit-backdrop-filter: blur(20px) saturate(180%);
          border-left: 1px solid rgba(125, 211, 252, 0.3);
          box-shadow: -10px 0 50px rgba(0, 0, 0, 0.5),
                      inset 1px 0 0 rgba(255, 255, 255, 0.1);
        }

        .mobile-nav-link {
          display: block;
          padding: 1rem 1.25rem;
          color: #e2e8f0;
          font-family: 'Rajdhani', sans-serif;
          font-size: 1.125rem;
          font-weight: 600;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          border-radius: 12px;
          transition: all 0.3s ease;
          margin-bottom: 0.5rem;
          text-decoration: none;
          border: 1px solid transparent;
        }

        .mobile-nav-link:hover {
          background: rgba(125, 211, 252, 0.1);
          color: #7dd3fc;
          border-color: rgba(125, 211, 252, 0.2);
          text-shadow: 0 0 10px rgba(125, 211, 252, 0.5);
        }

        .mobile-nav-link-active {
          background: linear-gradient(135deg, 
            rgba(125, 211, 252, 0.2) 0%, 
            rgba(56, 189, 248, 0.2) 100%);
          color: #ffffff;
          font-weight: 700;
          border: 1px solid rgba(125, 211, 252, 0.4);
          box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.1),
                      0 4px 15px rgba(125, 211, 252, 0.2);
          text-shadow: 0 0 15px rgba(125, 211, 252, 0.8);
        }

        .social-link {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 3rem;
          height: 3rem;
          color: #7dd3fc;
          background: linear-gradient(135deg, 
            rgba(30, 41, 59, 0.6) 0%, 
            rgba(15, 23, 42, 0.6) 100%);
          border-radius: 50%;
          border: 1px solid rgba(125, 211, 252, 0.3);
          transition: all 0.3s ease;
          box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.1),
                      0 4px 15px rgba(125, 211, 252, 0.15);
        }

        .social-link:hover {
          color: #ffffff;
          background: linear-gradient(135deg, 
            rgba(125, 211, 252, 0.3) 0%, 
            rgba(56, 189, 248, 0.3) 100%);
          transform: translateY(-3px) scale(1.05);
          box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2),
                      0 8px 25px rgba(125, 211, 252, 0.4);
          border-color: rgba(125, 211, 252, 0.5);
        }

        .divider {
          height: 1px;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(125, 211, 252, 0.4),
            transparent
          );
          margin: 2rem 0;
          box-shadow: 0 1px 2px rgba(125, 211, 252, 0.2);
        }

        .connect-text {
          font-family: 'Rajdhani', sans-serif;
          font-size: 0.875rem;
          font-weight: 700;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: #7dd3fc;
          margin-bottom: 1rem;
          text-shadow: 0 0 10px rgba(125, 211, 252, 0.5);
        }

        @media (max-width: 1024px) {
          .nav-link {
            padding: 0.625rem 1.25rem;
            font-size: 0.9375rem;
          }
        }

        @media (max-width: 768px) {
          .logo-desktop {
            font-size: 1.5rem;
            padding: 0.375rem 1rem;
          }
        }
      `}</style>

      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 navbar-container ${
          isScrolled ? 'navbar-scrolled' : ''
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo - LEFT */}
            <NavLink to="/" className="flex-shrink-0">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="hidden md:block logo-desktop">DEEPAK JADON</span>
                <span className="block md:hidden logo-mobile">DJ</span>
              </motion.div>
            </NavLink>

            {/* Navigation Links - RIGHT (Laptops/Desktop ONLY) */}
            <div className="hidden xl:flex items-center">
              <div className="nav-center-group">
                {navItems.map((item) => (
                  <NavLink
                    key={item.name}
                    to={item.path}
                    className="nav-link"
                    activeClassName="nav-link-active"
                  >
                    {item.name}
                  </NavLink>
                ))}
              </div>
            </div>

            {/* Hamburger Menu - PHONES/TABLETS ONLY */}
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="xl:hidden menu-button"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} strokeWidth={2.5} /> : <Menu size={24} strokeWidth={2.5} />}
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu - Phones/Tablets ONLY */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 xl:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 250 }}
              className="mobile-menu fixed top-0 right-0 bottom-0 w-80 shadow-2xl z-50 xl:hidden overflow-y-auto"
            >
              <div className="flex flex-col h-full p-6 pt-24">
                <div className="flex-1">
                  {navItems.map((item, index) => (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, x: 30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.08, duration: 0.4 }}
                    >
                      <NavLink
                        to={item.path}
                        className="mobile-nav-link"
                        activeClassName="mobile-nav-link-active"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {item.name}
                      </NavLink>
                    </motion.div>
                  ))}
                </div>

                <div className="divider"></div>

                <div>
                  <p className="connect-text">Connect With Me</p>
                  <div className="flex gap-4 justify-start">
                    {socialLinks.map((social, index) => (
                      <motion.a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.1 + 0.4, duration: 0.4 }}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="social-link"
                        aria-label={social.label}
                      >
                        <social.icon size={20} strokeWidth={2.5} />
                      </motion.a>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
