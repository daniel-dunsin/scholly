'use client';
import { FC, useEffect, useState } from 'react';

interface Props {
  maxWidth?: number;
  minWidth?: number;
}

export const useMediaQuery: FC<Props> = ({ maxWidth, minWidth }) => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const resize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener('resize', resize);

    return () => window.removeEventListener('resize', resize);
  });

  if (!maxWidth && !minWidth) {
    return true;
  } else if (maxWidth && !minWidth) {
    return width < maxWidth;
  } else if (minWidth && !maxWidth) {
    return width > minWidth;
  } else if (minWidth && maxWidth) {
    return width > minWidth && width < maxWidth;
  }
};

export const screenSizes = {
  mobile: { min: 320, max: 414 },
  tablet: { min: 600, max: 1024 },
  laptop: { min: 1280, max: 1440 },
};
