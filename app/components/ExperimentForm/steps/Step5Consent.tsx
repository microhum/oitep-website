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
            Research Participation
          </h3>
          <p className="text-gray-700 mb-4">
            By participating in this experiment, you agree to help us
            advance flavor science research. Your data will be
            anonymized and used solely for research purposes to
            improve our products for patients with dietary
            restrictions.
          </p>
        </div>

        <CheckboxField
          checked={formData.researchConsent}
          onChange={(value) => onChange('researchConsent', value)}
          error={errors.researchConsent}
          required
        >
          I consent to participate in this research experiment and
          understand that my data will be used for research
          purposes.
        </CheckboxField>

        <CheckboxField
          checked={formData.followUpConsent}
          onChange={(value) => onChange('followUpConsent', value)}
          error={errors.followUpConsent}
        >
          I agree to receive follow-up surveys and communications
          regarding my experience with the product (optional).
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
