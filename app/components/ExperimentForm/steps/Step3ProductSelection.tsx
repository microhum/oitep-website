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
import { useLocale } from '../../LocaleProvider';

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
  const { translations } = useLocale();

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">
        {translations.formSteps.healthGoals.title}
      </h2>
      <p className="text-gray-800 mb-6">
        {translations.formSteps.healthGoals.description}
      </p>

      <TextareaField
        label={translations.formSteps.healthGoals.healthConditions}
        value={formData.healthConditions}
        onChange={(value) => onChange('healthConditions', value)}
        placeholder={translations.formSteps.healthGoals.healthConditionsPlaceholder}
        rows={3}
      />

      <SelectField
        label={translations.formSteps.healthGoals.sodiumRestriction}
        value={formData.sodiumRestriction}
        onChange={(value) => onChange('sodiumRestriction', value)}
        options={SODIUM_RESTRICTION_OPTIONS}
        placeholder={translations.formSteps.healthGoals.selectApplicable}
      />

      <SelectField
        label={translations.formSteps.healthGoals.weightGoal}
        value={formData.weightGoal}
        onChange={(value) => onChange('weightGoal', value)}
        options={WEIGHT_GOAL_OPTIONS}
        placeholder={translations.formSteps.healthGoals.selectGoal}
      />

      <SelectField
        label={translations.formSteps.healthGoals.saltReductionGoal}
        value={formData.saltReductionGoal}
        onChange={(value) => onChange('saltReductionGoal', value)}
        options={SALT_REDUCTION_GOAL_OPTIONS}
        placeholder={translations.formSteps.healthGoals.selectGoal}
      />
    </div>
  );
};
