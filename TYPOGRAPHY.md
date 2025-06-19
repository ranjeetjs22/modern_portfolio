# Modern Typography Guide

## Font Stack Overview

Your portfolio now uses a carefully curated modern font stack optimized for 2025:

### 🎯 Primary Fonts

1. **Plus Jakarta Sans** - Primary body font
   - Modern, professional, and highly readable
   - Perfect for body text, UI elements, and general content
   - Variable font with excellent web performance
   - Used by companies like Notion, Linear, and many modern startups

2. **Outfit** - Display/Heading font
   - Geometric, stylish, and contemporary
   - Ideal for headings, titles, and emphasis
   - Clean lines with excellent readability at large sizes
   - Popular among design-forward tech companies

3. **JetBrains Mono** - Monospace font
   - Developer-focused with programming ligatures
   - Perfect for code blocks, technical content
   - Excellent readability and character distinction
   - Industry standard for developers

## Font Usage Examples

### In Components
```tsx
// Using CSS classes (recommended)
<h1 className="font-heading text-fluid-5xl font-extrabold tracking-tighter">
  Modern Developer
</h1>

<p className="font-sans text-lg leading-relaxed">
  Body text with perfect readability
</p>

<code className="font-mono text-sm bg-muted px-2 py-1 rounded">
  const portfolio = "amazing";
</code>
```

### Using Design Tokens
```tsx
import { textClasses, typography } from '@/lib/design-tokens';

// With utility classes
<h2 className={textClasses.h2}>Section Title</h2>

// With style objects
<div style={typography.hero}>Hero Text</div>
```

## Font Features Enabled

- **Ligatures**: Automatic character combinations for better readability
- **Contextual Alternates**: Smart character substitutions
- **Stylistic Sets**: Enhanced character variants
- **Optical Sizing**: Automatic adjustments for different sizes
- **Tabular Numbers**: Consistent spacing for data

## Performance Optimizations

- ✅ Font display: swap for better loading
- ✅ Subset loading for faster downloads
- ✅ Preconnect to Google Fonts
- ✅ Font feature settings optimized
- ✅ Text rendering optimized

## Accessibility Features

- ✅ High contrast mode support
- ✅ Reduced motion preferences
- ✅ Excellent readability scores
- ✅ WCAG AA compliant color contrast

## Browser Support

- ✅ All modern browsers (Chrome 80+, Firefox 75+, Safari 14+)
- ✅ Variable font support with fallbacks
- ✅ Font feature settings support
- ✅ Graceful degradation

## Migration from Inter/Playfair

The fonts have been updated from:
- Inter → Plus Jakarta Sans (more modern, better spacing)
- Playfair Display → Outfit (cleaner, more versatile)
- Added JetBrains Mono for technical content

All existing CSS classes will continue to work, but now reference the new fonts through CSS variables.
