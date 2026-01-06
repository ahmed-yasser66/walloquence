export function formatRelativeDate(dateString: string) {
  const inputDate: any = new Date(dateString);
  const now = new Date();

  if (isNaN(inputDate)) {
    throw new Error("Invalid date format");
  }

  let years = now.getFullYear() - inputDate.getFullYear();
  let months = now.getMonth() - inputDate.getMonth();

  // Adjust if current month/day is before the input month/day
  if (
    now.getDate() < inputDate.getDate()
  ) {
    months--;
  }

  if (months < 0) {
    years--;
    months += 12;
  }

  const parts = [];

  if (years > 0) {
    parts.push(`${years} year${years > 1 ? "s" : ""}`);
  }

  if (months > 0) {
    parts.push(`${months} month${months > 1 ? "s" : ""}`);
  }

  if (parts.length === 0) {
    return "Less than a month ago";
  }

  return `${parts.join(", ")} ago`;
}
