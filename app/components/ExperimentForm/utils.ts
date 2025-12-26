import { StepConfig, ProductVariant, FormData } from './types';

export const STEP_CONFIGS: StepConfig[] = [
  {
    id: 1,
    title: 'Basic Information',
    description: 'Tell us about yourself',
    fields: ['fullName', 'email', 'phone', 'ageGroup', 'occupation'],
  },
  {
    id: 2,
    title: 'Current Salt Habits',
    description: 'Help us understand your current salt intake',
    fields: ['dailySaltIntake', 'mainSaltSources', 'eatingOutFrequency', 'processedFoodFrequency'],
  },
  {
    id: 3,
    title: 'Health & Goals',
    description: 'Your health concerns and salt reduction goals',
    fields: ['healthConditions', 'sodiumRestriction', 'weightGoal', 'saltReductionGoal'],
  },
  {
    id: 4,
    title: 'Preferences & Lifestyle',
    description: 'Your taste preferences and daily habits',
    fields: ['tastePreferences', 'cookingFrequency', 'familySize', 'budgetRange'],
  },
  {
    id: 5,
    title: 'Consent & Planning',
    description: 'Review and agree to terms',
    fields: ['dataCollectionConsent', 'personalizedTipsConsent', 'termsAgreement', 'privacyPolicy'],
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

export const DAILY_SALT_INTAKE_OPTIONS = [
  { value: 'under-2000', label: 'Under 2000mg/day' },
  { value: '2000-3000', label: '2000-3000mg/day' },
  { value: '3000-4000', label: '3000-4000mg/day' },
  { value: '4000-5000', label: '4000-5000mg/day' },
  { value: 'over-5000', label: 'Over 5000mg/day' },
  { value: 'unsure', label: 'Not sure' },
];

export const MAIN_SALT_SOURCES_OPTIONS = [
  { value: 'processed-foods', label: 'Processed foods (canned, packaged)' },
  { value: 'restaurant-food', label: 'Restaurant/fast food' },
  { value: 'cooking-salt', label: 'Salt added during cooking' },
  { value: 'table-salt', label: 'Table salt at meals' },
  { value: 'snacks', label: 'Salty snacks (chips, nuts)' },
  { value: 'condiments', label: 'Condiments (soy sauce, ketchup)' },
  { value: 'bread-bakery', label: 'Bread and bakery items' },
  { value: 'cheese-dairy', label: 'Cheese and dairy products' },
];

export const EATING_OUT_FREQUENCY_OPTIONS = [
  { value: 'never', label: 'Never' },
  { value: 'rarely', label: 'Rarely (1-2 times/month)' },
  { value: 'sometimes', label: 'Sometimes (1-2 times/week)' },
  { value: 'often', label: 'Often (3-4 times/week)' },
  { value: 'daily', label: 'Daily or almost daily' },
];

export const PROCESSED_FOOD_FREQUENCY_OPTIONS = [
  { value: 'never', label: 'Never' },
  { value: 'rarely', label: 'Rarely' },
  { value: 'sometimes', label: 'Sometimes' },
  { value: 'often', label: 'Often' },
  { value: 'daily', label: 'Daily' },
];

export const WEIGHT_GOAL_OPTIONS = [
  { value: 'maintain', label: 'Maintain current weight' },
  { value: 'lose', label: 'Lose weight' },
  { value: 'gain', label: 'Gain weight' },
  { value: 'not-applicable', label: 'Not applicable' },
];

export const SALT_REDUCTION_GOAL_OPTIONS = [
  { value: 'none', label: 'No reduction needed' },
  { value: 'mild', label: 'Mild reduction (10-20%)' },
  { value: 'moderate', label: 'Moderate reduction (20-50%)' },
  { value: 'significant', label: 'Significant reduction (50%+)' },
  { value: 'unsure', label: 'Not sure yet' },
];

export const TASTE_PREFERENCES_OPTIONS = [
  { value: 'salty', label: 'Very salty foods' },
  { value: 'mild', label: 'Mildly seasoned' },
  { value: 'spicy', label: 'Spicy flavors' },
  { value: 'herbs', label: 'Herb-based seasonings' },
  { value: 'citrus', label: 'Citrus/acid flavors' },
  { value: 'umami', label: 'Umami-rich foods' },
  { value: 'bland', label: 'Bland/simple flavors' },
];

export const COOKING_FREQUENCY_OPTIONS = [
  { value: 'never', label: 'Never cook' },
  { value: 'rarely', label: 'Rarely (1-2 times/week)' },
  { value: 'sometimes', label: 'Sometimes (3-4 times/week)' },
  { value: 'often', label: 'Often (5-6 times/week)' },
  { value: 'daily', label: 'Daily' },
];

export const FAMILY_SIZE_OPTIONS = [
  { value: 'single', label: 'Single person' },
  { value: 'couple', label: 'Couple' },
  { value: 'small-family', label: 'Small family (3-4 people)' },
  { value: 'large-family', label: 'Large family (5+ people)' },
];

export const BUDGET_RANGE_OPTIONS = [
  { value: 'low', label: 'Budget conscious (<$50/month)' },
  { value: 'medium', label: '$50-100/month' },
  { value: 'high', label: '$100-200/month' },
  { value: 'premium', label: '$200+/month' },
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
  occupation: '',
  dailySaltIntake: '',
  mainSaltSources: [],
  eatingOutFrequency: '',
  processedFoodFrequency: '',
  healthConditions: '',
  sodiumRestriction: '',
  weightGoal: '',
  saltReductionGoal: '',
  tastePreferences: [],
  cookingFrequency: '',
  familySize: '',
  budgetRange: '',
  dataCollectionConsent: false,
  personalizedTipsConsent: false,
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
