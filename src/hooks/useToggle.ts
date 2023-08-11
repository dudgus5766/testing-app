import {useState, useCallback} from 'react';

export default function useToggle(
  initialValue: boolean,
): [boolean, (b: boolean) => void] {
  const [value, setValue] = useState(initialValue);

  const toggle = useCallback(() => {
    setValue(prev => !prev);
  }, []);

  return [value, toggle];
}
