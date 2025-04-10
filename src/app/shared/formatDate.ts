export function FormatDateToDDMMYYYY(date?: Date | string | null): string {
  if (!date) {
    return 'Actualidad';
  }

  let parsedDate: Date;
  if (typeof date === 'string') {
    parsedDate = new Date(date);
  } else if (date instanceof Date) {
    parsedDate = date;
  } else {
    return 'N/A';
  }

  const day = String(parsedDate.getDate()).padStart(2, '0');
  const month = String(parsedDate.getMonth() + 1).padStart(2, '0');
  const year = parsedDate.getFullYear();

  return `${day}/${month}/${year}`;
}
