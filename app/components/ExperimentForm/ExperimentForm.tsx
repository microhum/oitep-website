import React from "react";
import Image from "next/image";
import { Step1BasicInfo } from "./steps/Step1BasicInfo";
import { Step2Address } from "./steps/Step2Address";
import { Step3ProductSelection } from "./steps/Step3ProductSelection";
import { Step4HealthInfo } from "./steps/Step4HealthInfo";
import { Step5Consent } from "./steps/Step5Consent";
import { useExperimentForm } from "./useExperimentForm";
import { formatFormDataForSubmission, scrollToTop } from "./utils";
import { FormData } from "./types";

const ExperimentForm: React.FC = () => {
  const {
    formData,
    errors,
    currentStep,
    isSubmitting,
    isSubmitted,
    updateFormData,
    setCurrentStep,
    nextStep,
    prevStep,
    handleSubmit,
  } = useExperimentForm();

  const totalSteps = 5;

  const onSubmit = async (data: FormData) => {
    // Format data for submission
    const submissionData = formatFormDataForSubmission(data);

    // Log the data (in real app, this would be sent to an API)
    console.log("Form submitted:", submissionData);

    // Show success message
    alert("Form submitted successfully! We will contact you soon.");

    // You could redirect or show a success page here
    // router.push('/success');
  };

  const handleNextStep = () => {
    const canProceed = nextStep();
    if (canProceed) {
      scrollToTop();
    }
  };

  const handlePrevStep = () => {
    prevStep();
    scrollToTop();
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await handleSubmit(onSubmit);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-linear-to-br from-meadow-1 via-meadow-2 to-meadow-3 flex items-center justify-center">
        <div className="text-center text-white">
          <h1 className="text-4xl font-bold mb-4">Thank You!</h1>
          <p className="text-xl">
            Your application has been submitted successfully.
          </p>
          <p className="text-lg mt-2">We will contact you soon.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-linear-to-br from-meadow-1 via-meadow-2 to-meadow-3">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundRepeat: "repeat",
          }}
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <Image
              src="/static/logo/logo.svg"
              alt="OITEP"
              width={120}
              height={60}
              className="w-24 h-auto"
            />
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Join Our Research Experiment
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
            Help us advance flavor science for better patient care. Participate
            in our groundbreaking study on odor-induced taste enhancement.
          </p>
        </div>

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-2">
            <span className="text-white font-medium">
              Step {currentStep} of {totalSteps}
            </span>
            <span className="text-white/80">
              {Math.round((currentStep / totalSteps) * 100)}% Complete
            </span>
          </div>
          <div className="w-full bg-white/20 rounded-full h-2">
            <div
              className="bg-white h-2 rounded-full transition-all duration-300"
              style={{ width: `${(currentStep / totalSteps) * 100}%` }}
            />
          </div>
        </div>

        {/* Form Container */}
        <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12">
          <form onSubmit={handleFormSubmit} noValidate>
            {/* Step Components */}
            {currentStep === 1 && (
              <Step1BasicInfo
                formData={formData}
                onChange={updateFormData}
                errors={errors}
              />
            )}

            {currentStep === 2 && (
              <Step2Address
                formData={formData}
                onChange={updateFormData}
                errors={errors}
              />
            )}

            {currentStep === 3 && (
              <Step3ProductSelection
                formData={formData}
                onChange={updateFormData}
                errors={errors}
              />
            )}

            {currentStep === 4 && (
              <Step4HealthInfo
                formData={formData}
                onChange={updateFormData}
                errors={errors}
              />
            )}

            {currentStep === 5 && (
              <Step5Consent
                formData={formData}
                onChange={updateFormData}
                errors={errors}
              />
            )}

            {/* Error Summary */}
            {Object.keys(errors).length > 0 && (
              <div className="mt-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                <h3 className="text-red-800 font-medium mb-2">
                  Please correct the following errors:
                </h3>
                <ul className="text-red-700 text-sm space-y-1">
                  {Object.entries(errors).map(([field, error]) => (
                    <li key={field}>• {error}</li>
                  ))}
                </ul>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex justify-between mt-8">
              <button
                type="button"
                onClick={handlePrevStep}
                disabled={currentStep === 1 || isSubmitting}
                className={`px-6 py-3 rounded-lg font-semibold transition-colors ${
                  currentStep === 1 || isSubmitting
                    ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
                aria-label="Go to previous step"
              >
                Previous
              </button>

              {currentStep < 5 ? (
                <button
                  type="button"
                  onClick={handleNextStep}
                  disabled={isSubmitting}
                  className="bg-meadow-3 hover:bg-meadow-2 text-white px-6 py-3 rounded-lg font-semibold transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  aria-label="Go to next step"
                >
                  Next Step
                </button>
              ) : (
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-meadow-3 hover:bg-meadow-2 text-white px-6 py-3 rounded-lg font-semibold transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  aria-label="Submit form"
                >
                  {isSubmitting ? "Submitting..." : "Submit Application"}
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ExperimentForm;
