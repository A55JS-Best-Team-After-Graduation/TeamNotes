export const validateRegistrationForm = (form: { email: string; username: string; password: string }) => {
    let errors: { email?: string; username?: string; password?: string } = {};
  
    if (!form.username) {
      errors.username = "Username is required.";
    }
  
    const emailRegex = /\S+@\S+\.\S+/;
    if (!form.email) {
      errors.email = "Email is required.";
    } else if (!emailRegex.test(form.email)) {
      errors.email = "Invalid email format.";
    }
  
    if (!form.password) {
      errors.password = "Password is required.";
    } else if (form.password.length < 6) {
      errors.password = "Password must be at least 6 characters long.";
    }
  
    return errors;
  };
  