import React from 'react';
import {
  CheckboxField,
} from '../FormFields';
import { FormData, FormErrors } from '../types';
import { useLocale } from '../../LocaleProvider';

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
  const { translations } = useLocale();

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">
        {translations.formSteps.consent.title}
      </h2>

      <div className="space-y-4">
        <div className="bg-meadow-1/20 border border-meadow-2 rounded-lg p-4">
          <h3 className="font-bold text-lg mb-2">
            {translations.formSteps.consent.plannerTitle}
          </h3>
          <p className="text-gray-700 mb-4">
            {translations.formSteps.consent.plannerDescription}
          </p>
        </div>

        <CheckboxField
          checked={formData.dataCollectionConsent}
          onChange={(value) => onChange('dataCollectionConsent', value)}
          error={errors.dataCollectionConsent}
          required
        >
          {translations.formSteps.consent.dataConsent}
        </CheckboxField>

        <CheckboxField
          checked={formData.personalizedTipsConsent}
          onChange={(value) => onChange('personalizedTipsConsent', value)}
          error={errors.personalizedTipsConsent}
        >
          {translations.formSteps.consent.tipsConsent}
        </CheckboxField>

        <CheckboxField
          checked={formData.termsAgreement}
          onChange={(value) => onChange('termsAgreement', value)}
          error={errors.termsAgreement}
          required
        >
          {translations.formSteps.consent.termsAgreement}
        </CheckboxField>

        <CheckboxField
          checked={formData.privacyPolicy}
          onChange={(value) => onChange('privacyPolicy', value)}
          error={errors.privacyPolicy}
          required
        >
          {translations.formSteps.consent.privacyAgreement}
        </CheckboxField>
      </div>
    </div>
  );
};
