export const formatDateRelativeToNow = (date: Date) => {
  const currentDate = new Date();

  const timeDifferenceInSeconds = Math.floor((+currentDate - +date) / 1000);
  const minutesElapsed = Math.floor(timeDifferenceInSeconds / 60);
  const hoursElapsed = Math.floor(timeDifferenceInSeconds / 3600);
  const daysElapsed = Math.floor(timeDifferenceInSeconds / 86400);

  switch (true) {
    case timeDifferenceInSeconds < 60:
      return timeDifferenceInSeconds === 1
        ? `${timeDifferenceInSeconds} second ago`
        : `${timeDifferenceInSeconds} seconds ago`;
    case timeDifferenceInSeconds < 3600:
      return minutesElapsed === 1
        ? `${minutesElapsed} minute ago`
        : `${minutesElapsed} minutes ago`;
    case timeDifferenceInSeconds < 86400:
      return hoursElapsed === 1
        ? `${hoursElapsed} hour ago`
        : `${hoursElapsed} hours ago`;

    case timeDifferenceInSeconds < 172800:
      // Less than 2 days ago
      return daysElapsed === 1
        ? `${daysElapsed} day ago`
        : `${daysElapsed} days ago`;
    default:
      // If more than 2 days, return the date in "DD MMM" format
      return date.toLocaleDateString('en-GB', {
        day: '2-digit',
        month: 'short',
      });
  }
};

export const formatShortDate = (date: Date) =>
  date.toLocaleDateString('en-US', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  });
