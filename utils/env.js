export function validateEnv() {
  const required = [
    'APP_CONSUMER_KEY',
    'APP_CONSUMER_SECRET',
    // ... other required vars
  ];

  const missing = required.filter(
    (key) => !process.env[key]
  );

  if (missing.length > 0) {
    throw new Error(
      `Missing required environment variables: ${missing.join(', ')}`
    );
  }
} 