import { useUIKitContext } from '../providers/UIKitProvider';

export const useUIKit = () => {
  const { activeKit } = useUIKitContext();
  return activeKit;
};
