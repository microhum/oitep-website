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
      break;

    case 2:
      // Address
      if (!formData.streetAddress.trim()) {
        errors.streetAddress = 'Street address is required';
      }
      if (!formData.city.trim()) {
        errors.city = 'City is required';
      }
      if (!formData.state.trim()) {
        errors.state = 'State is required';
      }
      if (!formData.zipCode.trim()) {
        errors.zipCode = 'ZIP code is required';
      }
      if (!formData.country.trim()) {
        errors.country = 'Country is required';
      }
      break;

    case 3:
      // Product Selection
      if (!formData.productVariant) {
        errors.productVariant = 'Product selection is required';
      }
      if (!formData.quantity) {
        errors.quantity = 'Quantity is required';
      }
      if (!formData.primaryUse) {
        errors.primaryUse = 'Primary use is required';
      }
      break;

    case 4:
      // Health Information (all fields optional)
      break;

    case 5:
      // Consent
      if (!formData.researchConsent) {
        errors.researchConsent = 'Research consent is required';
      }
      if (!formData.termsAgreement) {
        errors.termsAgreement = 'Terms agreement is required';
      }
      if (!formData.privacyPolicy) {
        errors.privacyPolicy = 'Privacy policy agreement is required';
      }
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
