import React from 'react';
import {
  InputField,
  SelectField,
} from '../FormFields';
import { FormData, FormErrors } from '../types';
import { AGE_GROUP_OPTIONS } from '../utils';
import { useLocale } from '../../LocaleProvider';

interface Step1BasicInfoProps {
  formData: FormData;
  onChange: (field: keyof FormData, value: string) => void;
  errors: FormErrors;
}

export const Step1BasicInfo: React.FC<Step1BasicInfoProps> = ({
  formData,
  onChange,
  errors,
}) => {
  const { translations } = useLocale();

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">
        {translations.formSteps.basicInfo.title}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <InputField
          label={translations.formSteps.basicInfo.fullName}
          required
          type="text"
          value={formData.fullName}
          onChange={(value) => onChange('fullName', value)}
          placeholder="John Doe"
          error={errors.fullName}
        />

        <InputField
          label={translations.formSteps.basicInfo.emailAddress}
          required
          type="email"
          value={formData.email}
          onChange={(value) => onChange('email', value)}
          placeholder="john@example.com"
          error={errors.email}
        />

        <InputField
          label={translations.formSteps.basicInfo.phoneNumber}
          required
          type="tel"
          value={formData.phone}
          onChange={(value) => onChange('phone', value)}
          placeholder="+1 (555) 123-4567"
          error={errors.phone}
        />

        <SelectField
          label={translations.formSteps.basicInfo.ageGroup}
          required
          value={formData.ageGroup}
          onChange={(value) => onChange('ageGroup', value)}
          options={AGE_GROUP_OPTIONS}
          error={errors.ageGroup}
        />
      </div>

      <InputField
        label={translations.formSteps.basicInfo.occupation}
        type="text"
        value={formData.occupation}
        onChange={(value) => onChange('occupation', value)}
        placeholder={translations.formSteps.basicInfo.occupationPlaceholder}
        className="w-full"
      />
    </div>
  );
};
