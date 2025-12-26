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
        Current Salt Habits
      </h2>
      <p className="text-gray-800 mb-6">
        Help us understand your current salt intake patterns and habits.
      </p>

      <SelectField
        label="Estimated Daily Salt Intake"
        value={formData.dailySaltIntake}
        onChange={(value) => onChange('dailySaltIntake', value)}
        options={DAILY_SALT_INTAKE_OPTIONS}
        placeholder="Select your estimated daily intake"
      />

      <div className="space-y-3">
        <label className="block text-sm font-medium text-gray-900">
          Main Sources of Salt in Your Diet
        </label>
        <p className="text-sm text-gray-600 mb-3">Select all that apply</p>
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
        label="How Often Do You Eat Out or Order Takeout?"
        value={formData.eatingOutFrequency}
        onChange={(value) => onChange('eatingOutFrequency', value)}
        options={EATING_OUT_FREQUENCY_OPTIONS}
        placeholder="Select frequency"
      />

      <SelectField
        label="How Often Do You Eat Processed Foods?"
        value={formData.processedFoodFrequency}
        onChange={(value) => onChange('processedFoodFrequency', value)}
        options={PROCESSED_FOOD_FREQUENCY_OPTIONS}
        placeholder="Select frequency"
      />
      <p className="text-sm text-gray-600">Canned, packaged, or ready-to-eat foods</p>
    </div>
  );
};
