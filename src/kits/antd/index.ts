import { UIKit } from '../../core/types/component-types';
import { Button } from './components/Button';

export const antdKit: UIKit = {
  name: 'antd',
  components: {
    Button,
  },
  theme: {
    colors: {
      primary: '#1890ff',
      secondary: '#f0f0f0',
      error: '#ff4d4f',
      warning: '#faad14',
      success: '#52c41a',
    },
    spacing: {
      small: 8,
      medium: 16,
      large: 24,
    },
  },
};
