import { useState } from 'react';
import Notification3D from '@/components/Notification3D';

const useNotification3D = () => {
  const [notification, setNotification] = useState({
    isVisible: false,
    message: ''
  });

  const showNotification = (message: string) => {
    setNotification({
      isVisible: true,
      message: message
    });
  };

  const hideNotification = () => {
    setNotification({
      isVisible: false,
      message: ''
    });
  };

  const NotificationComponent = () => (
    <Notification3D 
      message={notification.message} 
      isVisible={notification.isVisible} 
      onClose={hideNotification} 
    />
  );

  return { 
    showNotification, 
    hideNotification, 
    NotificationComponent,
    isNotificationVisible: notification.isVisible 
  };
};

export default useNotification3D;