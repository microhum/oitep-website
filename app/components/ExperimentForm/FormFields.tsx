import React from 'react';
import Image from 'next/image';

interface FormFieldProps {
  label: string;
  required?: boolean;
  error?: string;
  className?: string;
}

interface InputFieldProps extends FormFieldProps {
  type: 'text' | 'email' | 'tel';
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

interface SelectFieldProps extends FormFieldProps {
  value: string;
  onChange: (value: string) => void;
  options: { value: string; label: string }[];
  placeholder?: string;
}

interface TextareaFieldProps extends FormFieldProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  rows?: number;
}

interface CheckboxFieldProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  children: React.ReactNode;
  label?: string;
  required?: boolean;
  error?: string;
  className?: string;
}

interface ProductCardProps {
  id: string;
  name: string;
  description: string;
  image: string;
  impulse: string;
  isSelected: boolean;
  onSelect: () => void;
}

export const InputField: React.FC<InputFieldProps> = ({
  label,
  required,
  error,
  className = '',
  type,
  value,
  onChange,
  placeholder,
}) => (
  <div className={`space-y-2 ${className}`}>
    <label className="block text-sm font-medium text-gray-900">
      {label}
      {required && <span className="text-red-500 ml-1">*</span>}
    </label>
    <input
      type={type}
      required={required}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-meadow-3 focus:border-transparent text-black transition-colors ${
        error
          ? 'border-red-300 focus:ring-red-3'
          : 'border-gray-300'
      }`}
      placeholder={placeholder}
      aria-invalid={!!error}
      aria-describedby={error ? `${label}-error` : undefined}
    />
    {error && (
      <p id={`${label}-error`} className="text-sm text-red-600">
        {error}
      </p>
    )}
  </div>
);

export const SelectField: React.FC<SelectFieldProps> = ({
  label,
  required,
  error,
  className = '',
  value,
  onChange,
  options,
  placeholder,
}) => (
  <div className={`space-y-2 ${className}`}>
    <label className="block text-sm font-medium text-gray-900">
      {label}
      {required && <span className="text-red-500 ml-1">*</span>}
    </label>
    <select
      required={required}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-meadow-3 focus:border-transparent text-black transition-colors ${
        error
          ? 'border-red-300 focus:ring-red-3'
          : 'border-gray-300'
      }`}
      aria-invalid={!!error}
      aria-describedby={error ? `${label}-error` : undefined}
    >
      <option value="">{placeholder || 'Select an option'}</option>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
    {error && (
      <p id={`${label}-error`} className="text-sm text-red-600">
        {error}
      </p>
    )}
  </div>
);

export const TextareaField: React.FC<TextareaFieldProps> = ({
  label,
  required,
  error,
  className = '',
  value,
  onChange,
  placeholder,
  rows = 3,
}) => (
  <div className={`space-y-2 ${className}`}>
    <label className="block text-sm font-medium text-gray-900">
      {label}
      {required && <span className="text-red-500 ml-1">*</span>}
    </label>
    <textarea
      required={required}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      rows={rows}
      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-meadow-3 focus:border-transparent text-black transition-colors resize-none ${
        error
          ? 'border-red-300 focus:ring-red-3'
          : 'border-gray-300'
      }`}
      placeholder={placeholder}
      aria-invalid={!!error}
      aria-describedby={error ? `${label}-error` : undefined}
    />
    {error && (
      <p id={`${label}-error`} className="text-sm text-red-600">
        {error}
      </p>
    )}
  </div>
);

export const CheckboxField: React.FC<CheckboxFieldProps> = ({
  label,
  error,
  className = '',
  checked,
  onChange,
  children,
  required = false,
}) => (
  <div className={`space-y-2 ${className}`}>
    {label && (
      <label className="block text-sm font-medium text-gray-900">
        {label}
      </label>
    )}
    <label className="flex items-start space-x-3 cursor-pointer">
      <input
        type="checkbox"
        required={required}
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        className="mt-1 w-4 h-4 text-meadow-3 border-gray-300 rounded focus:ring-meadow-3 focus:ring-2"
        aria-invalid={!!error}
        aria-describedby={error ? `${label}-error` : undefined}
      />
      <span className="text-sm text-gray-700">{children}</span>
    </label>
    {error && (
      <p id={`${label}-error`} className="text-sm text-red-600">
        {error}
      </p>
    )}
  </div>
);

export const ProductCard: React.FC<ProductCardProps> = ({
  id,
  name,
  description,
  image,
  impulse,
  isSelected,
  onSelect,
}) => (
  <div
    className={`border-2 rounded-lg p-6 cursor-pointer transition-all ${
      isSelected
        ? 'border-meadow-3 bg-meadow-1/10'
        : 'border-gray-200 hover:border-meadow-2'
    }`}
    onClick={onSelect}
    role="button"
    tabIndex={0}
    onKeyDown={(e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        onSelect();
      }
    }}
    aria-pressed={isSelected}
  >
    <div className="flex items-center mb-3">
      <Image
        src={image}
        alt={name}
        width={80}
        height={120}
        className="w-16 h-auto mr-4"
      />
      <div>
        <h3 className="font-bold text-lg text-gray-900">{name}</h3>
        <span className="inline-block bg-meadow-3 text-white text-sm px-2 py-1 rounded-full">
          {impulse}
        </span>
      </div>
    </div>
    <p className="text-gray-800 text-sm">{description}</p>
  </div>
);
