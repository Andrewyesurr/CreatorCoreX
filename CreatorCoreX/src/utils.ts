// utils.ts

export const convertFileToUrl = (file: File) => {
  return URL.createObjectURL(file);
};

export const formatDateString = (dateString: string) => {
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "short",
    day: "numeric",
  };
  const date = new Date(dateString);
  const formattedDate = date.toLocaleDateString("en-US", options);
  const time = date.toLocaleTimeString([], { hour: "numeric", minute: "2-digit" });
  return `${formattedDate} at ${time}`;
};

export const multiFormatDateString = (timestamp: string): string => {
  const diff = Date.now() - new Date(timestamp).getTime();
  const minutes = Math.floor(diff / (1000 * 60));
  if (minutes < 1) return "Just now";
  if (minutes < 60) return `${minutes} minutes ago`;
  const hours = Math.floor(minutes / 60);
  if (hours < 24) return `${hours} hours ago`;
  const days = Math.floor(hours / 24);
  if (days < 30) return `${days} days ago`;
  return formatDateString(timestamp);
};
