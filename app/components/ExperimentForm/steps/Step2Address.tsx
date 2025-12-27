import React from 'react';
import {
  SelectField,
  CheckboxField,
} from '../FormFields';
import { FormData, FormErrors } from '../types';
import {
  DAILY_SALT_INTAKE_OPTIONS,
  MAIN_SALT_SOURCES_OPTIONS,
  EATING_OUT_FREQUENCY_OPTIONS,
  PROCESSED_FOOD_FREQUENCY_OPTIONS
} from '../utils';
import { useLocale } from '../../LocaleProvider';

interface Step2AddressProps {
  formData: FormData;
  onChange: (field: keyof FormData, value: string | string[]) => void;
  errors: FormErrors;
}

export const Step2Address: React.FC<Step2AddressProps> = ({
  formData,
  onChange,
  errors,
}) => {
  const { translations } = useLocale();

  const handleSaltSourceChange = (source: string, checked: boolean) => {
    const currentSources = formData.mainSaltSources || [];
    const newSources = checked
      ? [...currentSources, source]
      : currentSources.filter(s => s !== source);
    onChange('mainSaltSources', newSources);
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">
        {translations.formSteps.saltHabits.title}
      </h2>
      <p className="text-gray-800 mb-6">
        {translations.formSteps.saltHabits.description}
      </p>

      <SelectField
        label={translations.formSteps.saltHabits.estimatedDailyIntake}
        value={formData.dailySaltIntake}
        onChange={(value) => onChange('dailySaltIntake', value)}
        options={DAILY_SALT_INTAKE_OPTIONS}
        placeholder={translations.formSteps.saltHabits.selectIntake}
      />

      <div className="space-y-3">
        <label className="block text-sm font-medium text-gray-900">
          {translations.formSteps.saltHabits.mainSources}
        </label>
        <p className="text-sm text-gray-600 mb-3">{translations.formSteps.saltHabits.selectAllApply}</p>
        <div className="space-y-2">
          {MAIN_SALT_SOURCES_OPTIONS.map((option) => (
            <CheckboxField
              key={option.value}
              checked={(formData.mainSaltSources || []).includes(option.value)}
              onChange={(checked) => handleSaltSourceChange(option.value, checked)}
              className="mb-2"
            >
              {option.label}
            </CheckboxField>
          ))}
        </div>
      </div>

      <SelectField
        label={translations.formSteps.saltHabits.eatingOutFrequency}
        value={formData.eatingOutFrequency}
        onChange={(value) => onChange('eatingOutFrequency', value)}
        options={EATING_OUT_FREQUENCY_OPTIONS}
        placeholder={translations.formSteps.saltHabits.selectFrequency}
      />

      <SelectField
        label={translations.formSteps.saltHabits.processedFoodFrequency}
        value={formData.processedFoodFrequency}
        onChange={(value) => onChange('processedFoodFrequency', value)}
        options={PROCESSED_FOOD_FREQUENCY_OPTIONS}
        placeholder={translations.formSteps.saltHabits.selectFrequency}
      />
      <p className="text-sm text-gray-600">{translations.formSteps.saltHabits.processedFoodNote}</p>
    </div>
  );
};
