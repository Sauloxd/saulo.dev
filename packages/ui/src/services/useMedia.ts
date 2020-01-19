import { useState, useEffect } from 'react';

// based on https://stackblitz.com/edit/react-hook-usemedia
const useMedia = (query) => {
  const [matches, setMatches] = useState(
    window.matchMedia(query).matches
  );

  useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }

    const listener = () => setMatches(media.matches);
    media.addListener(listener);

    return () => media.removeListener(listener);
  }, [query]);

  return matches;
};

export default useMedia;
