import { useState, useEffect } from 'react';

// Utility function to get formatted date and time
const getFormattedDateTime = (locale: string) => {
  const now = new Date();
  return new Intl.DateTimeFormat(locale, {
    dateStyle: 'full',  // Can use 'full', 'long', 'medium', 'short'
    timeStyle: 'medium',  // Can use 'medium', 'short', etc.
  }).format(now);
};

const Clock = () => {
  const [dateTime, setDateTime] = useState<string>('');
  const locale = navigator.language || 'en-US'; // Get user locale

  useEffect(() => {
    const updateDateTime = () => {
      setDateTime(getFormattedDateTime(locale));
    };

    // Update the time every second
    const intervalId = setInterval(updateDateTime, 1000);

    // Cleanup the interval on component unmount
    return () => clearInterval(intervalId);
  }, [locale]);

  return (
    <div className="text-xl font-bold">
      {dateTime}
    </div>
  );
};

export default Clock;
