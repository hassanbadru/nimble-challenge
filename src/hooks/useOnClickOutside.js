import { useRef, useEffect, useCallback } from 'react';

/**
 * Hook to run a function when clicking outside of a react element.
 *
 * Usage:
 *   const [isOpen, setIsOpen] = useState(false);
 *   const closeDropdown = useCallback(() => setIsOpen(false), []);
 *   const onClickOutsideNode = useOnClickOutside(onClose, isOpen);
 *
 *   // Attach ref to desired node via ref
 *   return <div ref={onClickOutsideNode}>{...content...}</div>
 *
 * @param {function} onClickOutside function to run on click outside
 * @param {boolean} shouldListen set false to prevent extra events when something is not open
 */
export const useOnClickOutside = (onClickOutside, shouldListen = true) => {
  const node = useRef();

  const handleClick = useCallback(
    event => {
      if (!node.current) return;

      if (node.current.contains(event.target)) {
        // inside click
        return;
      }
      // outside click
      onClickOutside();
    },
    [onClickOutside]
  );

  useEffect(() => {
    if (shouldListen) {
      document.addEventListener('mousedown', handleClick, false);
    } else {
      document.removeEventListener('mousedown', handleClick, false);
    }

    return () => {
      document.removeEventListener('mousedown', handleClick, false);
    };
  }, [shouldListen, handleClick]);

  return node;
};
