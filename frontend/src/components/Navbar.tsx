import React from 'react';

interface NavbarProps {
  className?: string;
}

const Navbar: React.FC<NavbarProps> = ({ className }) => {
  return <div className={className}>Navbar Content</div>;
};

export default Navbar;
