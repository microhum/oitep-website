import { StepConfig, ProductVariant, FormData } from './types';

export const STEP_CONFIGS: StepConfig[] = [
  {
    id: 1,
    title: 'Basic Information',
    description: 'Tell us about yourself',
    fields: ['fullName', 'email', 'phone', 'ageGroup', 'facilityName'],
  },
  {
    id: 2,
    title: 'Shipping Address',
    description: 'Where should we send your products?',
    fields: ['streetAddress', 'city', 'state', 'zipCode', 'country'],
  },
  {
    id: 3,
    title: 'Product Selection',
    description: 'Choose your preferred products',
    fields: ['productVariant', 'quantity', 'primaryUse'],
  },
  {
    id: 4,
    title: 'Health Information',
    description: 'Help us understand your needs',
    fields: ['dietaryRestrictions', 'sodiumRestriction', 'medicalConditions'],
  },
  {
    id: 5,
    title: 'Consent & Agreement',
    description: 'Review and agree to terms',
    fields: ['researchConsent', 'followUpConsent', 'termsAgreement', 'privacyPolicy'],
  },
];

export const PRODUCT_VARIANTS: ProductVariant[] = [
  {
    id: 'beef',
    name: 'Beef Odor',
    description: 'For main protein-based meals with strongest neuro-triggering effect',
    image: '/static/Elements/Solution/Amber_Bottle_Mockup_beef.png',
    impulse: '1.5x Impulse',
  },
  {
    id: 'seabreeze',
    name: 'Sea Breeze',
    description: 'Refreshing oceanic profile ideal for salads & healthy snacks',
    image: '/static/Elements/Solution/Amber_Bottle_Mockup_fish.png',
    impulse: '1.2x Impulse',
  },
];

export const AGE_GROUP_OPTIONS = [
  { value: 'under-60', label: 'Under 60' },
  { value: '60-70', label: '60-70 years' },
  { value: '70-80', label: '70-80 years' },
  { value: 'over-80', label: '80+ years' },
];

export const QUANTITY_OPTIONS = [
  { value: '1', label: '1 bottle' },
  { value: '2', label: '2 bottles' },
  { value: '3', label: '3 bottles' },
  { value: '4', label: '4 bottles' },
  { value: '5+', label: '5+ bottles' },
];

export const PRIMARY_USE_OPTIONS = [
  { value: 'home', label: 'Personal home use' },
  { value: 'healthcare', label: 'Healthcare facility' },
  { value: 'research', label: 'Research purposes' },
  { value: 'gift', label: 'Gift for someone else' },
];

export const SODIUM_RESTRICTION_OPTIONS = [
  { value: '', label: 'Select if applicable' },
  { value: 'none', label: 'No restriction' },
  { value: 'mild', label: 'Mild restriction (<2000mg/day)' },
  { value: 'moderate', label: 'Moderate restriction (1500mg/day)' },
  { value: 'strict', label: 'Strict restriction (<1000mg/day)' },
  { value: 'unsure', label: 'Not sure' },
];

export const getStepProgress = (currentStep: number, totalSteps: number): number => {
  return Math.round((currentStep / totalSteps) * 100);
};

export const getStepTitle = (step: number): string => {
  const config = STEP_CONFIGS.find(config => config.id === step);
  return config?.title || `Step ${step}`;
};

export const getStepDescription = (step: number): string | undefined => {
  const config = STEP_CONFIGS.find(config => config.id === step);
  return config?.description;
};

export const createInitialFormData = () => ({
  fullName: '',
  email: '',
  phone: '',
  ageGroup: '',
  facilityName: '',
  streetAddress: '',
  city: '',
  state: '',
  zipCode: '',
  country: '',
  productVariant: '',
  quantity: '',
  primaryUse: '',
  dietaryRestrictions: '',
  sodiumRestriction: '',
  medicalConditions: '',
  researchConsent: false,
  followUpConsent: false,
  termsAgreement: false,
  privacyPolicy: false,
});

export const formatFormDataForSubmission = (formData: FormData) => {
  const submissionData = {
    ...formData,
    submittedAt: new Date().toISOString(),
    stepProgress: 100,
  };
  
  // Remove sensitive data if needed in the future
  return submissionData;
};

export const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
};

export const debounce = <T extends (...args: unknown[]) => unknown>(
  func: T,
  wait: number
): ((...args: Parameters<T>) => void) => {
  let timeout: NodeJS.Timeout;
  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
};
