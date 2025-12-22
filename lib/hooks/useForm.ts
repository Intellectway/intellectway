import { useState, type FormEvent } from "react";

type UseFormOptions<TValues> = {
  initialValues: TValues;
  onSubmit?: (values: TValues) => Promise<void> | void;
};

export function useForm<TValues>({ initialValues, onSubmit }: UseFormOptions<TValues>) {
  const [values, setValues] = useState<TValues>(initialValues);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);
    setError(null);
    setSuccess(null);

    try {
      await onSubmit?.(values);
      setSuccess("Submitted successfully.");
    } catch (submitError) {
      setError(
        submitError instanceof Error
          ? submitError.message
          : "Something went wrong. Please try again.",
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  function handleChange<K extends keyof TValues>(key: K, value: TValues[K]) {
    setValues((prev) => ({ ...prev, [key]: value }));
  }

  return {
    values,
    isSubmitting,
    error,
    success,
    setValues,
    handleChange,
    handleSubmit,
  };
}

