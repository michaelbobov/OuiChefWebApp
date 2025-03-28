import Link from 'next/link';
import { styles } from '@/types';
import { ROUTES } from '@/constants';

/**
 * Logo component that displays the OuiChef brand with a chef's hat icon.
 * Features responsive design and interactive hover effects.
 */
const Logo = () => {
  // Combine shared styles with component-specific styles
  const textStyles = `text-2xl md:text-3xl font-extrabold ${styles.gradientText} ${styles.hoverGradient} ${styles.transition}`;
  const iconStyles = `w-8 h-8 md:w-10 md:h-10 text-emerald-500 group-hover:text-emerald-400 ${styles.transition}`;

  return (
    <Link href={ROUTES.HOME} className="flex items-center space-x-2 group">
      {/* Brand text with gradient effect */}
      <span className={textStyles}>
        OuiChef
      </span>

      {/* Chef's hat icon */}
      <svg 
        className={iconStyles}
        viewBox="0 0 100 100" 
        fill="none"
        stroke="currentColor"
        strokeWidth="8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M30 60c0-20 20-30 20-30s20 10 20 30c0 0-10-5-20-5s-20 5-20 5z M25 65c0 0 15-8 25-8s25 8 25 8" />
      </svg>
    </Link>
  );
};

export default Logo; 