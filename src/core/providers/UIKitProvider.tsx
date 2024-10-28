import React, { createContext, useContext } from 'react';
import { UIKit } from '../types/component-types';
import { antdKit } from '../../kits/antd';
import { materialKit } from '../../kits/material';
import { ThemeConfig } from '../types/theme';

interface UIKitContextType {
  activeKit: UIKit;
  setActiveKit: (kit: UIKit) => void;
}

const UIKitContext = createContext<UIKitContextType | undefined>(undefined);

interface UIKitProviderProps {
  kit: 'antd' | 'material' | 'custom';
  theme?: ThemeConfig;
  children: React.ReactNode;
  customKit?: UIKit;
}

export const UIKitProvider: React.FC<UIKitProviderProps> = ({
  kit = 'antd',
  theme,
  children,
  customKit,
}) => {
  const [activeKit, setActiveKit] = React.useState<UIKit>(() => {
    switch (kit) {
      case 'antd':
        return antdKit;
      case 'material':
        return materialKit;
      case 'custom':
        return customKit || antdKit;
      default:
        return antdKit;
    }
  });

  React.useEffect(() => {
    if (theme) {
      setActiveKit((prevKit) => ({
        ...prevKit,
        theme: { ...prevKit.theme, ...theme },
      }));
    }
  }, [theme]);

  return (
    <UIKitContext.Provider value={{ activeKit, setActiveKit }}>{children}</UIKitContext.Provider>
  );
};

export const useUIKitContext = () => {
  const context = useContext(UIKitContext);
  if (!context) {
    throw new Error('useUIKitContext must be used within UIKitProvider');
  }
  return context;
};
