import React from 'react';
import {
  InputField,
  SelectField,
} from '../FormFields';
import { FormData, FormErrors } from '../types';
import { AGE_GROUP_OPTIONS } from '../utils';

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
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">
        Basic Information
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <InputField
          label="Full Name"
          required
          type="text"
          value={formData.fullName}
          onChange={(value) => onChange('fullName', value)}
          placeholder="John Doe"
          error={errors.fullName}
        />

        <InputField
          label="Email Address"
          required
          type="email"
          value={formData.email}
          onChange={(value) => onChange('email', value)}
          placeholder="john@example.com"
          error={errors.email}
        />

        <InputField
          label="Phone Number"
          required
          type="tel"
          value={formData.phone}
          onChange={(value) => onChange('phone', value)}
          placeholder="+1 (555) 123-4567"
          error={errors.phone}
        />

        <SelectField
          label="Age Group"
          required
          value={formData.ageGroup}
          onChange={(value) => onChange('ageGroup', value)}
          options={AGE_GROUP_OPTIONS}
          error={errors.ageGroup}
        />
      </div>

      <InputField
        label="Occupation"
        type="text"
        value={formData.occupation}
        onChange={(value) => onChange('occupation', value)}
        placeholder="Your job or profession"
        className="w-full"
      />
    </div>
  );
};
