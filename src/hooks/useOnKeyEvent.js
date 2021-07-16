import { useEffect, useCallback } from 'react';

/**
 * Hook to run a function when a key event happens.
 *
 * Usage:
 *   useOnKeyEvent('Enter', 'keyup', onSubmit);
 *
 * @param {function} key key to listen for, eg/ 'Enter'
 * @param {function} keyEvent key event to listen for, eg/ 'keyup'
 * @param {function} onKeyEvent function to run on key press
 * @param {boolean} shouldListen set false to prevent extra events when something is not open
 */
export const useOnKeyEvent = (key, keyEvent, onKeyEvent, shouldListen = true) => {
  const handleKeyEvent = useCallback(
    event => {
      if (event.key === key) {
        onKeyEvent();
      }
    },
    [key, onKeyEvent]
  );
  useEffect(() => {
    if (shouldListen) {
      document.addEventListener(keyEvent, handleKeyEvent, false);
    } else {
      document.removeEventListener(keyEvent, handleKeyEvent, false);
    }

    return () => {
      document.removeEventListener(keyEvent, handleKeyEvent, false);
    };
  }, [keyEvent, shouldListen, handleKeyEvent]);
};
// 'Escape'
