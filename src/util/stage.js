export function outOfBounds(boundaryRect, smallRect) {
  let sm = smallRect.current.attrs;
  let br = boundaryRect.current.attrs;
  if (sm.x < br.x || 
      sm.x + sm.width > br.x + br.width) {
    return true;
  }

  if (sm.y < br.y || 
      sm.y + sm.height > br.y + br.height) {
    return true;
  }
  return false;
}