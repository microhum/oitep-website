export { default as ExperimentForm } from './ExperimentForm';
export { default } from './ExperimentForm';

// Export types
export type { FormData, FormErrors, StepConfig, ProductVariant } from './types';

// Export validation utilities
export {
  validateEmail,
  validatePhone,
  validateStep,
  validateAllSteps,
  isStepValid,
} from './validation';

// Export utility functions
export {
  STEP_CONFIGS,
  PRODUCT_VARIANTS,
  AGE_GROUP_OPTIONS,
  QUANTITY_OPTIONS,
  PRIMARY_USE_OPTIONS,
  SODIUM_RESTRICTION_OPTIONS,
  getStepProgress,
  getStepTitle,
  getStepDescription,
  createInitialFormData,
  formatFormDataForSubmission,
  scrollToTop,
  debounce,
} from './utils';

// Export custom hook
export { useExperimentForm } from './useExperimentForm';

// Export form field components
export {
  InputField,
  SelectField,
  TextareaField,
  CheckboxField,
  ProductCard,
} from './FormFields';

// Export step components
export { Step1BasicInfo } from './steps/Step1BasicInfo';
export { Step2Address } from './steps/Step2Address';
export { Step3ProductSelection } from './steps/Step3ProductSelection';
export { Step4HealthInfo } from './steps/Step4HealthInfo';
export { Step5Consent } from './steps/Step5Consent';
