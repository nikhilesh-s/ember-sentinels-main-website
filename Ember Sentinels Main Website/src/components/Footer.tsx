import React from 'react';
import { Flame } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-custom py-12">
        <div className="flex items-center justify-center space-x-2 mb-8">
          <div className="w-8 h-8 bg-scarlet-600 hexagon flex items-center justify-center">
            <Flame className="text-white" size={18} />
          </div>
          <span className="text-xl font-bold">Ember Sentinels</span>
        </div>
        
        <div className="text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} Ember Sentinels. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;