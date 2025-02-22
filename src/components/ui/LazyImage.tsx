import { useRef } from 'react';
import { useLazyLoad } from '../../utils/hooks';

interface LazyImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
}

export function LazyImage({ src, alt, className, ...props }: LazyImageProps) {
  const imageRef = useRef<HTMLImageElement>(null);
  const isVisible = useLazyLoad(imageRef);

  return (
    <img
      ref={imageRef}
      src={isVisible ? src : ''}
      alt={alt}
      className={`transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0'} ${className}`}
      loading="lazy"
      {...props}
    />
  );
}