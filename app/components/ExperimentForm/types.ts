export interface FormData {
  // Step 1: Basic Information
  fullName: string;
  email: string;
  phone: string;
  ageGroup: string;
  occupation: string;

  // Step 2: Current Salt Habits
  dailySaltIntake: string;
  mainSaltSources: string[];
  eatingOutFrequency: string;
  processedFoodFrequency: string;

  // Step 3: Health & Goals
  healthConditions: string;
  sodiumRestriction: string;
  weightGoal: string;
  saltReductionGoal: string;

  // Step 4: Preferences & Lifestyle
  tastePreferences: string[];
  cookingFrequency: string;
  familySize: string;
  budgetRange: string;

  // Step 5: Consent & Planning
  dataCollectionConsent: boolean;
  personalizedTipsConsent: boolean;
  termsAgreement: boolean;
  privacyPolicy: boolean;
}

export interface FormErrors {
  [key: string]: string;
}

export interface StepConfig {
  id: number;
  title: string;
  description?: string;
  fields: string[];
}

export interface ProductVariant {
  id: string;
  name: string;
  description: string;
  image: string;
  impulse: string;
}
