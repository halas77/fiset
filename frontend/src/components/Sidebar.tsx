import React from 'react';

// Define the props type for Sidebar
interface SidebarProps {
  className?: string;
}

const Sidebar: React.FC<SidebarProps> = ({ className }) => {
  return <div className={className}>Sidebar Content</div>;
};

export default Sidebar;
