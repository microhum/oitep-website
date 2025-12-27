import React from 'react';
import {
  SelectField,
  CheckboxField,
} from '../FormFields';
import { FormData, FormErrors } from '../types';
import {
  TASTE_PREFERENCES_OPTIONS,
  COOKING_FREQUENCY_OPTIONS,
  FAMILY_SIZE_OPTIONS,
  BUDGET_RANGE_OPTIONS
} from '../utils';
import { useLocale } from '../../LocaleProvider';

interface Step4PreferencesProps {
  formData: FormData;
  onChange: (field: keyof FormData, value: string | boolean | string[]) => void;
  errors: FormErrors;
}

export const Step4HealthInfo: React.FC<Step4PreferencesProps> = ({
  formData,
  onChange,
  errors,
}) => {
  const { translations } = useLocale();

  const handleTastePreferenceChange = (preference: string, checked: boolean) => {
    const currentPreferences = formData.tastePreferences || [];
    const newPreferences = checked
      ? [...currentPreferences, preference]
      : currentPreferences.filter(p => p !== preference);
    onChange('tastePreferences', newPreferences);
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">
        {translations.formSteps.preferences.title}
      </h2>
      <p className="text-gray-800 mb-6">
        {translations.formSteps.preferences.description}
      </p>

      <div className="space-y-3">
        <label className="block text-sm font-medium text-gray-900">
          {translations.formSteps.preferences.tastePreferences}
        </label>
        <p className="text-sm text-gray-600 mb-3">{translations.formSteps.preferences.tastePreferencesNote}</p>
        <div className="space-y-2">
          {TASTE_PREFERENCES_OPTIONS.map((option) => (
            <CheckboxField
              key={option.value}
              checked={(formData.tastePreferences || []).includes(option.value)}
              onChange={(checked) => handleTastePreferenceChange(option.value, checked)}
              className="mb-2"
            >
              {option.label}
            </CheckboxField>
          ))}
        </div>
      </div>

      <SelectField
        label={translations.formSteps.preferences.cookingFrequency}
        value={formData.cookingFrequency}
        onChange={(value) => onChange('cookingFrequency', value)}
        options={COOKING_FREQUENCY_OPTIONS}
        placeholder={translations.formSteps.saltHabits.selectFrequency}
      />

      <SelectField
        label={translations.formSteps.preferences.familySize}
        value={formData.familySize}
        onChange={(value) => onChange('familySize', value)}
        options={FAMILY_SIZE_OPTIONS}
        placeholder={translations.formSteps.preferences.selectFamilySize}
      />

      <SelectField
        label={translations.formSteps.preferences.budgetRange}
        value={formData.budgetRange}
        onChange={(value) => onChange('budgetRange', value)}
        options={BUDGET_RANGE_OPTIONS}
        placeholder="Select budget range"
      />
    </div>
  );
};
