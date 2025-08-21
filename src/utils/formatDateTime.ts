export function formatDateTime(dateString: string) {
  const dateObj = new Date(dateString);

  const day = String(dateObj.getDate()).padStart(2, "0");
  const month = dateObj.toLocaleString("en-US", { month: "short" });
  const year = dateObj.getFullYear();

  const hours = String(dateObj.getHours()).padStart(2, "0");
  const minutes = String(dateObj.getMinutes()).padStart(2, "0");

  const formattedDate = `${day} ${month} ${year}`;
  const formattedTime = `${hours}:${minutes}`;

  return {
    formattedDate,
    formattedTime,
    full: `${formattedDate} ${formattedTime}`,
  };
}