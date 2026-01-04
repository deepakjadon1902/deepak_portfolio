import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const socialLinks = [
    { icon: Github, href: 'https://github.com/deepakjadon1902', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/deepak-jadon-612487272', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:deepakjadon1907@gmail.com', label: 'Email' },
  ];

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Skills', path: '/skills' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <footer className="relative bg-navy text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 grid-pattern" />
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <Link to="/" className="inline-block mb-4">
              <span className="text-2xl font-bold">
                <span className="text-sky">D</span>eepak <span className="text-sky"> Jadon .</span>
              </span>
            </Link>
            <p className="text-white/60 text-sm max-w-xs">
              Full Stack Developer crafting exceptional digital experiences through innovative code and elegant design.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <nav className="flex flex-wrap gap-x-6 gap-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="text-white/60 hover:text-sky text-sm transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <div className="flex gap-3">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center text-white/60 hover:bg-sky hover:text-white transition-all"
                  aria-label={label}
                >
                  <Icon size={18} />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-sm">
            © {new Date().getFullYear()} Deepak Jadon. All rights reserved.
          </p>
          <p className="text-white/40 text-sm flex items-center gap-1">
            Made with <Heart size={14} className="text-sky fill-sky" /> in India
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
