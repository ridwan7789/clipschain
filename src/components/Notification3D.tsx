import { useState, useEffect } from 'react';

interface NotificationProps {
  message: string;
  isVisible: boolean;
  onClose: () => void;
}

const Notification3D = ({ message, isVisible, onClose }: NotificationProps) => {
  // Close notification after 3 seconds
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        onClose();
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [isVisible, onClose]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-[9999] pointer-events-none">
      <div className="relative transform transition-all duration-300 ease-out">
        {/* 3D Container - using CSS classes that will be defined in CSS */}
        <div className="notification-3d-container">
          <div className="notification-3d-content animate-float-3d">
            {/* Main content */}
            <div className="bg-card border border-primary/30 rounded-lg p-6 transform transition-transform duration-300 hover:scale-105 relative z-10 shadow-2xl">
              <div className="text-center">
                <h3 className="text-xl font-bold mb-2 text-foreground neon-text">Notice</h3>
                <p className="text-muted-foreground text-lg font-medium notification-3d-text">{message}</p>
              </div>
            </div>

            {/* 3D effect elements - shadows and layers */}
            <div className="absolute -inset-4 rounded-lg bg-primary/10 blur-2xl transform -rotate-6 scale-110 z-0 animate-pulse"></div>
            <div className="absolute -inset-4 rounded-lg bg-secondary/10 blur-2xl transform rotate-6 scale-110 z-0 animate-pulse opacity-50" style={{ animationDelay: '0.2s' }}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notification3D;