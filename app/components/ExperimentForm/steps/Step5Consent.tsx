import React from 'react';
import {
  CheckboxField,
} from '../FormFields';
import { FormData, FormErrors } from '../types';

interface Step5ConsentProps {
  formData: FormData;
  onChange: (field: keyof FormData, value: boolean) => void;
  errors: FormErrors;
}

export const Step5Consent: React.FC<Step5ConsentProps> = ({
  formData,
  onChange,
  errors,
}) => {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">
        Consent & Agreement
      </h2>

      <div className="space-y-4">
        <div className="bg-meadow-1/20 border border-meadow-2 rounded-lg p-4">
          <h3 className="font-bold text-lg mb-2">
            Personal Salt Usage Planner
          </h3>
          <p className="text-gray-700 mb-4">
            By submitting this form, you&apos;ll receive personalized salt reduction recommendations
            based on your current habits and goals. Your information helps us create
            tailored plans to support healthier eating patterns.
          </p>
        </div>

        <CheckboxField
          checked={formData.dataCollectionConsent}
          onChange={(value) => onChange('dataCollectionConsent', value)}
          error={errors.dataCollectionConsent}
          required
        >
          I consent to the collection and analysis of my salt usage data
          to create a personalized reduction plan.
        </CheckboxField>

        <CheckboxField
          checked={formData.personalizedTipsConsent}
          onChange={(value) => onChange('personalizedTipsConsent', value)}
          error={errors.personalizedTipsConsent}
        >
          I would like to receive personalized tips and recommendations
          for salt reduction (optional).
        </CheckboxField>

        <CheckboxField
          checked={formData.termsAgreement}
          onChange={(value) => onChange('termsAgreement', value)}
          error={errors.termsAgreement}
          required
        >
          I have read and agree to the Terms and Conditions of this
          experiment.
        </CheckboxField>

        <CheckboxField
          checked={formData.privacyPolicy}
          onChange={(value) => onChange('privacyPolicy', value)}
          error={errors.privacyPolicy}
          required
        >
          I have read and agree to the Privacy Policy and understand
          how my data will be protected.
        </CheckboxField>
      </div>
    </div>
  );
};
