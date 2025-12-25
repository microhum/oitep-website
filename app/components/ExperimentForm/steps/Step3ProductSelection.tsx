import React from 'react';
import {
  SelectField,
  ProductCard,
} from '../FormFields';
import { FormData, FormErrors } from '../types';
import { PRODUCT_VARIANTS, QUANTITY_OPTIONS, PRIMARY_USE_OPTIONS } from '../utils';

interface Step3ProductSelectionProps {
  formData: FormData;
  onChange: (field: keyof FormData, value: string | boolean) => void;
  errors: FormErrors;
}

export const Step3ProductSelection: React.FC<Step3ProductSelectionProps> = ({
  formData,
  onChange,
  errors,
}) => {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">
        Product Selection
      </h2>

      <div>
        <label className="block text-sm font-medium text-gray-900 mb-4">
          Choose Your Product Variant <span className="text-red-500">*</span>
        </label>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {PRODUCT_VARIANTS.map((variant) => (
            <ProductCard
              key={variant.id}
              id={variant.id}
              name={variant.name}
              description={variant.description}
              image={variant.image}
              impulse={variant.impulse}
              isSelected={formData.productVariant === variant.id}
              onSelect={() => onChange('productVariant', variant.id)}
            />
          ))}
        </div>
        {errors.productVariant && (
          <p className="text-sm text-red-600 mt-2">{errors.productVariant}</p>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <SelectField
          label="Quantity"
          required
          value={formData.quantity}
          onChange={(value) => onChange('quantity', value)}
          options={QUANTITY_OPTIONS}
          error={errors.quantity}
        />

        <SelectField
          label="Primary Use"
          required
          value={formData.primaryUse}
          onChange={(value) => onChange('primaryUse', value)}
          options={PRIMARY_USE_OPTIONS}
          error={errors.primaryUse}
        />
      </div>
    </div>
  );
};
