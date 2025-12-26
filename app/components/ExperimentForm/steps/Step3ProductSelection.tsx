import React from 'react';
import {
  TextareaField,
  SelectField,
} from '../FormFields';
import { FormData, FormErrors } from '../types';
import {
  SODIUM_RESTRICTION_OPTIONS,
  WEIGHT_GOAL_OPTIONS,
  SALT_REDUCTION_GOAL_OPTIONS
} from '../utils';

interface Step3HealthGoalsProps {
  formData: FormData;
  onChange: (field: keyof FormData, value: string | boolean | string[]) => void;
  errors: FormErrors;
}

export const Step3ProductSelection: React.FC<Step3HealthGoalsProps> = ({
  formData,
  onChange,
  errors,
}) => {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">
        Health & Goals
      </h2>
      <p className="text-gray-800 mb-6">
        Tell us about your health concerns and salt reduction goals.
      </p>

      <TextareaField
        label="Health Conditions or Medical History"
        value={formData.healthConditions}
        onChange={(value) => onChange('healthConditions', value)}
        placeholder="Please describe any health conditions that might be affected by salt intake..."
        rows={3}
      />

      <SelectField
        label="Current Sodium Restriction Level"
        value={formData.sodiumRestriction}
        onChange={(value) => onChange('sodiumRestriction', value)}
        options={SODIUM_RESTRICTION_OPTIONS}
        placeholder="Select if applicable"
      />

      <SelectField
        label="Weight Management Goal"
        value={formData.weightGoal}
        onChange={(value) => onChange('weightGoal', value)}
        options={WEIGHT_GOAL_OPTIONS}
        placeholder="Select your goal"
      />

      <SelectField
        label="Salt Reduction Goal"
        value={formData.saltReductionGoal}
        onChange={(value) => onChange('saltReductionGoal', value)}
        options={SALT_REDUCTION_GOAL_OPTIONS}
        placeholder="Select your goal"
      />
    </div>
  );
};
