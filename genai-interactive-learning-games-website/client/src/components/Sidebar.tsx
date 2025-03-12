import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Home, Trophy, User } from 'lucide-react';
import { motion } from 'framer-motion';

export function Sidebar() {
  const location = useLocation();

  const menuItems = [
    { icon: Home, label: 'Dashboard', path: '/' },
    { icon: Trophy, label: 'Rankings', path: '/rankings' },
    { icon: User, label: 'Profile', path: '/profile' },
  ];

  return (
    <div className="w-64 border-r bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex h-full flex-col">
        <div className="flex h-14 items-center border-b px-4">
          <span className="font-bold">Learning Games</span>
        </div>
        <nav className="flex-1 space-y-2 p-4">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;

            return (
              <Link key={item.path} to={item.path}>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={cn(
                    'flex items-center space-x-3 rounded-lg px-3 py-2 transition-colors',
                    isActive ? 'bg-primary text-primary-foreground' : 'hover:bg-accent'
                  )}
                >
                  <Icon className="h-5 w-5" />
                  <span>{item.label}</span>
                </motion.div>
              </Link>
            );
          })}
        </nav>
      </div>
    </div>
  );
}