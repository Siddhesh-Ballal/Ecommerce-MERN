import bcrypt from "bcrypt";

// Function to hash password
export const hashPassword = async (password) => {
  try {
    const saltrounds = 10;
    // Salt rounds = Cost Factor. The cost factor controls how much time is needed to calculate a single
    // BCrypt hash. The higher the cost factor, the more hashing rounds are done

    const hashedPassword = await bcrypt.hash(password, saltrounds);
    return hashedPassword;
  } catch (error) {
    console.log(`Error: ${error} occured`);
  }
};

// Function to compare the passwords
export const comparePasswords = async (password, hashedPassword) => {
  try {
    return bcrypt.compare(password, hashedPassword);
  } catch (error) {
    console.log(`Error: ${error} occured`);
  }
};
