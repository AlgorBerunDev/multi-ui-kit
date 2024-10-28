import { UIKit } from '../../core/types/component-types';
import { Button } from './components/Button';

export const materialKit: UIKit = {
  name: 'material',
  components: {
    Button,
  },
  theme: {
    colors: {
      primary: '#1976d2',
      secondary: '#dc004e',
      error: '#f44336',
      warning: '#ff9800',
      success: '#4caf50',
    },
    spacing: {
      small: 8,
      medium: 16,
      large: 24,
    },
  },
};
