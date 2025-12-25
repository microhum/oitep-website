import React from 'react';
import {
  InputField,
} from '../FormFields';
import { FormData, FormErrors } from '../types';

interface Step2AddressProps {
  formData: FormData;
  onChange: (field: keyof FormData, value: string) => void;
  errors: FormErrors;
}

export const Step2Address: React.FC<Step2AddressProps> = ({
  formData,
  onChange,
  errors,
}) => {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">
        Shipping Address
      </h2>

      <div>
        <InputField
          label="Street Address"
          required
          type="text"
          value={formData.streetAddress}
          onChange={(value) => onChange('streetAddress', value)}
          placeholder="123 Main Street"
          error={errors.streetAddress}
          className="w-full"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <InputField
          label="City"
          required
          type="text"
          value={formData.city}
          onChange={(value) => onChange('city', value)}
          placeholder="New York"
          error={errors.city}
        />

        <InputField
          label="State/Province"
          required
          type="text"
          value={formData.state}
          onChange={(value) => onChange('state', value)}
          placeholder="NY"
          error={errors.state}
        />

        <InputField
          label="ZIP/Postal Code"
          required
          type="text"
          value={formData.zipCode}
          onChange={(value) => onChange('zipCode', value)}
          placeholder="10001"
          error={errors.zipCode}
        />
      </div>

      <div>
        <InputField
          label="Country"
          required
          type="text"
          value={formData.country}
          onChange={(value) => onChange('country', value)}
          placeholder="United States"
          error={errors.country}
          className="w-full"
        />
      </div>
    </div>
  );
};
