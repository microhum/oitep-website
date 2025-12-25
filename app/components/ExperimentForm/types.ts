export interface FormData {
  // Step 1: Basic Information
  fullName: string;
  email: string;
  phone: string;
  ageGroup: string;
  facilityName: string;

  // Step 2: Address
  streetAddress: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;

  // Step 3: Product Selection
  productVariant: string;
  quantity: string;
  primaryUse: string;

  // Step 4: Health Information
  dietaryRestrictions: string;
  sodiumRestriction: string;
  medicalConditions: string;

  // Step 5: Consent
  researchConsent: boolean;
  followUpConsent: boolean;
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
