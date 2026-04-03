import React from 'react';

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  loading?: 'lazy' | 'eager';
  priority?: boolean;
}

/**
 * OptimizedImage component that serves WebP with fallback
 * 
 * Usage:
 *   <OptimizedImage 
 *     src="/image.png" 
 *     alt="Description" 
 *     className="w-full h-auto"
 *     width={800}
 *     height={600}
 *   />
 * 
 * This will automatically look for /optimized/image.webp and fall back to /image.png
 */
const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  className = '',
  width,
  height,
  loading = 'lazy',
  priority = false,
}) => {
  // Generate WebP path from original path
  const getWebPPath = (originalPath: string): string => {
    const pathParts = originalPath.split('/');
    const filename = pathParts.pop() || '';
    const nameWithoutExt = filename.replace(/\.(png|jpg|jpeg|gif)$/i, '');
    
    // Check if it's in a subdirectory
    if (pathParts.length > 1) {
      const subdir = pathParts.slice(1).join('/');
      return `/optimized/${subdir}/${nameWithoutExt}.webp`;
    }
    
    return `/optimized/${nameWithoutExt}.webp`;
  };

  const webpSrc = getWebPPath(src);

  return (
    <picture>
      <source srcSet={webpSrc} type="image/webp" />
      <img
        src={src}
        alt={alt}
        className={className}
        width={width}
        height={height}
        loading={priority ? 'eager' : loading}
        decoding={priority ? 'sync' : 'async'}
      />
    </picture>
  );
};

export default OptimizedImage;
