/**
 * Design Tokens for Modern Portfolio
 * Featuring Plus Jakarta Sans, Outfit, and JetBrains Mono
 */

export const fonts = {
  // Plus Jakarta Sans - Primary font family
  sans: 'var(--font-sans)',
  // Outfit - Display/Heading font
  heading: 'var(--font-heading)', 
  // JetBrains Mono - Code/Technical font
  mono: 'var(--font-mono)',
} as const;

export const typography = {
  // Hero/Display text
  hero: {
    fontSize: 'clamp(2.5rem, 6vw, 4rem)',
    fontFamily: fonts.heading,
    fontWeight: '800',
    lineHeight: '1.1',
    letterSpacing: '-0.04em',
  },
  
  // Section headers
  h1: {
    fontSize: 'clamp(2rem, 4vw, 3rem)',
    fontFamily: fonts.heading,
    fontWeight: '700',
    lineHeight: '1.2',
    letterSpacing: '-0.03em',
  },
  
  h2: {
    fontSize: 'clamp(1.5rem, 3vw, 2rem)',
    fontFamily: fonts.heading,
    fontWeight: '600',
    lineHeight: '1.3',
    letterSpacing: '-0.02em',
  },
  
  h3: {
    fontSize: 'clamp(1.25rem, 2.5vw, 1.5rem)',
    fontFamily: fonts.heading,
    fontWeight: '600',
    lineHeight: '1.4',
    letterSpacing: '-0.01em',
  },
  
  // Body text
  body: {
    fontSize: '1rem',
    fontFamily: fonts.sans,
    fontWeight: '400',
    lineHeight: '1.6',
    letterSpacing: '0em',
  },
  
  bodyLarge: {
    fontSize: '1.125rem',
    fontFamily: fonts.sans,
    fontWeight: '400',
    lineHeight: '1.7',
    letterSpacing: '0em',
  },
  
  caption: {
    fontSize: '0.875rem',
    fontFamily: fonts.sans,
    fontWeight: '500',
    lineHeight: '1.4',
    letterSpacing: '0.01em',
  },
  
  // Technical/Code text
  code: {
    fontSize: '0.875rem',
    fontFamily: fonts.mono,
    fontWeight: '500',
    lineHeight: '1.5',
    letterSpacing: '0em',
  },
  
  // Button/UI text
  button: {
    fontSize: '0.875rem',
    fontFamily: fonts.sans,
    fontWeight: '600',
    lineHeight: '1.2',
    letterSpacing: '0.01em',
  },
  
  // Navigation text
  nav: {
    fontSize: '0.875rem',
    fontFamily: fonts.sans,
    fontWeight: '500',
    lineHeight: '1.2',
    letterSpacing: '0.02em',
  },
} as const;

export const fontWeights = {
  light: '300',
  normal: '400',
  medium: '500',
  semibold: '600',
  bold: '700',
  extrabold: '800',
  black: '900',
} as const;

export const fontFeatures = {
  // Modern font features for better typography
  default: '"rlig" 1, "calt" 1, "ss01" 1, "ss02" 1',
  numbers: '"tnum" 1, "lnum" 1', // Tabular numbers
  fractions: '"frac" 1', // Automatic fractions
  code: '"liga" 1, "calt" 1', // Code ligatures
} as const;

/**
 * Utility function to create consistent text styles
 */
export const createTextStyle = (variant: keyof typeof typography) => {
  const style = typography[variant];
  return {
    fontFamily: style.fontFamily,
    fontSize: style.fontSize,
    fontWeight: style.fontWeight,
    lineHeight: style.lineHeight,
    letterSpacing: style.letterSpacing,
  };
};

/**
 * CSS class mappings for easy use in components
 */
export const textClasses = {
  hero: 'font-heading text-fluid-5xl font-extrabold leading-none tracking-tighter',
  h1: 'font-heading text-fluid-4xl font-bold leading-tight tracking-tight',
  h2: 'font-heading text-fluid-3xl font-semibold leading-tight tracking-tight',
  h3: 'font-heading text-fluid-2xl font-semibold leading-snug tracking-tight',
  h4: 'font-heading text-fluid-xl font-semibold leading-snug',
  h5: 'font-heading text-fluid-lg font-semibold leading-snug',
  h6: 'font-heading text-base font-semibold leading-snug',
  
  bodyLarge: 'font-sans text-lg font-normal leading-relaxed',
  body: 'font-sans text-base font-normal leading-relaxed',
  bodySmall: 'font-sans text-sm font-normal leading-relaxed',
  
  caption: 'font-sans text-sm font-medium leading-snug tracking-wide',
  code: 'font-mono text-sm font-medium leading-normal',
  button: 'font-sans text-sm font-semibold leading-none tracking-wide',
  nav: 'font-sans text-sm font-medium leading-none tracking-wide',
  
  // Utility classes
  balance: 'text-balance',
  pretty: 'text-pretty',
  shimmer: 'text-shimmer',
  gradient: 'gradient-text',
} as const;