import { useState, useCallback, useEffect } from 'react';
import { FormData, FormErrors } from './types';
import { createInitialFormData } from './utils';
import { validateStep, validateAllSteps } from './validation';

interface UseExperimentFormReturn {
  formData: FormData;
  errors: FormErrors;
  currentStep: number;
  isSubmitting: boolean;
  isSubmitted: boolean;
  updateFormData: (field: keyof FormData, value: string | boolean | string[]) => void;
  setCurrentStep: (step: number) => void;
  nextStep: () => boolean;
  prevStep: () => void;
  validateCurrentStep: () => boolean;
  validateAllSteps: () => boolean;
  resetForm: () => void;
  handleSubmit: (onSubmit: (data: FormData) => Promise<void>) => Promise<void>;
}

export const useExperimentForm = (): UseExperimentFormReturn => {
  const [formData, setFormData] = useState<FormData>(createInitialFormData());
  const [errors, setErrors] = useState<FormErrors>({});
  const [currentStep, setCurrentStepState] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const updateFormData = useCallback((field: keyof FormData, value: string | boolean | string[]) => {
    setFormData((prev) => ({ ...prev, [field]: value }));

    // Clear error for this field when user starts typing
    if (errors[field]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[field];
        return newErrors;
      });
    }
  }, [errors]);

  const setCurrentStep = useCallback((step: number) => {
    setCurrentStepState(step);
    // Clear errors when switching steps
    setErrors({});
  }, []);

  const validateCurrentStep = useCallback((): boolean => {
    const stepErrors = validateStep(currentStep, formData);
    setErrors(stepErrors);
    return Object.keys(stepErrors).length === 0;
  }, [currentStep, formData]);

  const validateAllStepsCallback = useCallback((): boolean => {
    const allErrors = validateAllSteps(formData);
    setErrors(allErrors);
    return Object.keys(allErrors).length === 0;
  }, [formData]);

  const nextStep = useCallback((): boolean => {
    const isValid = validateCurrentStep();
    if (isValid && currentStep < 5) {
      setCurrentStep(currentStep + 1);
      return true;
    }
    return false;
  }, [currentStep, validateCurrentStep, setCurrentStep]);

  const prevStep = useCallback(() => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  }, [currentStep, setCurrentStep]);

  const resetForm = useCallback(() => {
    setFormData(createInitialFormData());
    setErrors({});
    setCurrentStep(1);
    setIsSubmitting(false);
    setIsSubmitted(false);
  }, [setCurrentStep]);

  const handleSubmit = useCallback(async (onSubmit: (data: FormData) => Promise<void>) => {
    if (isSubmitting) return;

    setIsSubmitting(true);
    
    try {
      // Validate all steps before submission
      const isValid = validateAllStepsCallback();
      
      if (!isValid) {
        setIsSubmitting(false);
        return;
      }

      await onSubmit(formData);
      setIsSubmitted(true);
    } catch (error) {
      console.error('Form submission error:', error);
      // Handle submission error (could show toast notification)
    } finally {
      setIsSubmitting(false);
    }
  }, [isSubmitting, validateAllStepsCallback, formData]);

  // Clear errors when formData changes (except for controlled changes)
  useEffect(() => {
    if (Object.keys(errors).length > 0) {
      const timer = setTimeout(() => {
        setErrors({});
      }, 5000); // Clear errors after 5 seconds
      
      return () => clearTimeout(timer);
    }
  }, [formData, errors]);

  return {
    formData,
    errors,
    currentStep,
    isSubmitting,
    isSubmitted,
    updateFormData,
    setCurrentStep,
    nextStep,
    prevStep,
    validateCurrentStep,
    validateAllSteps: validateAllStepsCallback,
    resetForm,
    handleSubmit,
  };
};
