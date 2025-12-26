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
        Preferences & Lifestyle
      </h2>
      <p className="text-gray-800 mb-6">
        Help us understand your taste preferences and daily habits.
      </p>

      <div className="space-y-3">
        <label className="block text-sm font-medium text-gray-900">
          Taste Preferences
        </label>
        <p className="text-sm text-gray-600 mb-3">What flavors do you enjoy? (Select all that apply)</p>
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
        label="How Often Do You Cook at Home?"
        value={formData.cookingFrequency}
        onChange={(value) => onChange('cookingFrequency', value)}
        options={COOKING_FREQUENCY_OPTIONS}
        placeholder="Select frequency"
      />

      <SelectField
        label="Family Size"
        value={formData.familySize}
        onChange={(value) => onChange('familySize', value)}
        options={FAMILY_SIZE_OPTIONS}
        placeholder="Select family size"
      />

      <SelectField
        label="Monthly Budget for Salt Reduction Solutions"
        value={formData.budgetRange}
        onChange={(value) => onChange('budgetRange', value)}
        options={BUDGET_RANGE_OPTIONS}
        placeholder="Select budget range"
      />
    </div>
  );
};
