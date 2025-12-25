import React from 'react';
import {
  TextareaField,
  SelectField,
} from '../FormFields';
import { FormData, FormErrors } from '../types';
import { SODIUM_RESTRICTION_OPTIONS } from '../utils';

interface Step4HealthInfoProps {
  formData: FormData;
  onChange: (field: keyof FormData, value: string) => void;
  errors: FormErrors;
}

export const Step4HealthInfo: React.FC<Step4HealthInfoProps> = ({
  formData,
  onChange,
  errors,
}) => {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">
        Health Information
      </h2>
      <p className="text-gray-800 mb-6">
        This information helps us better understand your needs and
        improve our research. All data is kept confidential.
      </p>

      <TextareaField
        label="Dietary Restrictions or Allergies"
        value={formData.dietaryRestrictions}
        onChange={(value) => onChange('dietaryRestrictions', value)}
        placeholder="Please list any dietary restrictions, allergies, or sensitivities..."
        rows={3}
      />

      <SelectField
        label="Current Sodium Restriction Level"
        value={formData.sodiumRestriction}
        onChange={(value) => onChange('sodiumRestriction', value)}
        options={SODIUM_RESTRICTION_OPTIONS}
        placeholder="Select if applicable"
      />

      <TextareaField
        label="Relevant Medical Conditions"
        value={formData.medicalConditions}
        onChange={(value) => onChange('medicalConditions', value)}
        placeholder="Please list any medical conditions that might affect taste, smell, or dietary needs..."
        rows={3}
      />
    </div>
  );
};
