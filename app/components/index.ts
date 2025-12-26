// Re-export all components with locale context
export { default as Navbar } from './Navbar';
export { default as Hero } from './Hero';
export { default as Awards } from './Awards';
export { default as ProblemStatement } from './ProblemStatement';
export { default as ProductPreview } from './ProductPreview';
export { default as ProofSection } from './ProofSection';
export { default as ContactSection } from './ContactSection';
export { default as Footer } from './Footer';
export { default as Teams } from './Teams';

// Context and utilities
export { LocaleProvider, useLocale } from './LocaleProvider';

// All components are now automatically wrapped with locale context
// through the LocaleProvider in the layout
