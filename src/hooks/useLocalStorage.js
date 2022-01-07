import { useCallback, useState } from "react";

/**
 * This is custom react hook.
 * It is used to store data in the localStorage.
 *
 * Its API looks similar to the useState react hook thus it is not
 * recommended to use it across many components.
 */
const useLocalStorage = (key, initialValue = undefined) => {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? item : initialValue;
    } catch (error) {
      return initialValue;
    }
  });

  const setValue = useCallback(
    (value) => {
      const valueToStore =
        value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      window.localStorage.setItem(key, valueToStore);
    },
    [key, storedValue]
  );

  return [storedValue, setValue];
};

export default useLocalStorage;
