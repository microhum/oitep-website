import { FormData, FormErrors } from './types';

export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const validatePhone = (phone: string): boolean => {
  const phoneRegex = /^[\d\s\-\+\(\)]+$/;
  return phoneRegex.test(phone) && phone.replace(/\D/g, '').length >= 10;
};

export const validateStep = (step: number, formData: FormData): FormErrors => {
  const errors: FormErrors = {};

  switch (step) {
    case 1:
      // Basic Information
      if (!formData.fullName.trim()) {
        errors.fullName = 'Full name is required';
      }
      if (!formData.email.trim()) {
        errors.email = 'Email address is required';
      } else if (!validateEmail(formData.email)) {
        errors.email = 'Please enter a valid email address';
      }
      if (!formData.phone.trim()) {
        errors.phone = 'Phone number is required';
      } else if (!validatePhone(formData.phone)) {
        errors.phone = 'Please enter a valid phone number';
      }
      if (!formData.ageGroup) {
        errors.ageGroup = 'Age group is required';
      }
      // occupation is optional
      break;

    case 2:
      // Current Salt Habits
      if (!formData.dailySaltIntake) {
        errors.dailySaltIntake = 'Please estimate your daily salt intake';
      }
      if (!formData.mainSaltSources || formData.mainSaltSources.length === 0) {
        errors.mainSaltSources = 'Please select at least one main source of salt';
      }
      if (!formData.eatingOutFrequency) {
        errors.eatingOutFrequency = 'Please select your eating out frequency';
      }
      if (!formData.processedFoodFrequency) {
        errors.processedFoodFrequency = 'Please select your processed food consumption frequency';
      }
      break;

    case 3:
      // Health & Goals (all fields optional for this step)
      break;

    case 4:
      // Preferences & Lifestyle
      if (!formData.tastePreferences || formData.tastePreferences.length === 0) {
        errors.tastePreferences = 'Please select at least one taste preference';
      }
      if (!formData.cookingFrequency) {
        errors.cookingFrequency = 'Please select your cooking frequency';
      }
      if (!formData.familySize) {
        errors.familySize = 'Please select your family size';
      }
      if (!formData.budgetRange) {
        errors.budgetRange = 'Please select your budget range';
      }
      break;

    case 5:
      // Consent & Planning
      if (!formData.dataCollectionConsent) {
        errors.dataCollectionConsent = 'Data collection consent is required';
      }
      if (!formData.termsAgreement) {
        errors.termsAgreement = 'Terms agreement is required';
      }
      if (!formData.privacyPolicy) {
        errors.privacyPolicy = 'Privacy policy agreement is required';
      }
      // personalizedTipsConsent is optional
      break;
  }

  return errors;
};

export const validateAllSteps = (formData: FormData): FormErrors => {
  let allErrors: FormErrors = {};
  
  for (let step = 1; step <= 5; step++) {
    const stepErrors = validateStep(step, formData);
    allErrors = { ...allErrors, ...stepErrors };
  }
  
  return allErrors;
};

export const isStepValid = (step: number, formData: FormData): boolean => {
  const errors = validateStep(step, formData);
  return Object.keys(errors).length === 0;
};
