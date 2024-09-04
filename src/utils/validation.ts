/**
 * Validates that the confirm password matches the original password.
 *
 * @param password - The original password.
 * @param confirmPassword - The confirmation password that needs to match the original password.
 * @param message - Optional custom error message to return if passwords do not match.
 * @returns {string | boolean} - Returns a boolean `true` if passwords match, or a string error message if they don't.
 */

export const validateConfirmPassword = (
  password: string,
  confirmPassword: string,
  message?: string,
): string | boolean => {
  if (password !== confirmPassword) {
    return message || 'Your confirmation passwords do not match';
  }
  return true;
};
