import React from 'react';
const useMousePosition = () => {
  const [
    mousePosition,
    setMousePosition
  ] = React.useState({ x: null, y: null });
  const [
    oldMousePosition,
    setOldMousePosition
  ] = React.useState({ x: null, y: null });
  React.useEffect(() => {
    const updateMousePosition = (ev:any) => {
        setOldMousePosition({x:mousePosition.x, y:mousePosition.y})
      setMousePosition({ x: ev.clientX, y: ev.clientY });

    };
    window.addEventListener('mousemove', updateMousePosition);
    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
    };
  }, []);
  return {mousePosition, oldMousePosition};
};
export default useMousePosition;