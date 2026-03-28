import { format, parseISO, differenceInYears } from "date-fns";

export function maskCPF(cpf: string): string {
  const digits = cpf.replace(/\D/g, "");
  if (digits.length !== 11) return cpf;
  return `${digits.slice(0, 3)}.***.***-${digits.slice(9)}`;
}

export function formatCNJ(number: string): string {
  const digits = number.replace(/\D/g, "");
  if (digits.length !== 20) return number;
  return `${digits.slice(0, 7)}-${digits.slice(7, 9)}.${digits.slice(9, 13)}.${digits.slice(13, 14)}.${digits.slice(14, 16)}.${digits.slice(16)}`;
}

export function formatDate(isoString: string): string {
  if (!isoString) return "—";
  try {
    return format(parseISO(isoString), "dd/MM/yyyy");
  } catch {
    return "—";
  }
}

export function formatDateTime(isoString: string): string {
  if (!isoString) return "—";
  try {
    return format(parseISO(isoString), "dd/MM/yyyy HH:mm:ss");
  } catch {
    return "—";
  }
}

export function calculateAge(birthDate: string): string {
  if (!birthDate) return "—";
  try {
    const age = differenceInYears(new Date(), parseISO(birthDate));
    return `${age} anos`;
  } catch {
    return "—";
  }
}

export function formatGender(gender: string): string {
  switch (gender?.toUpperCase()) {
    case "M":
      return "Masculino";
    case "F":
      return "Feminino";
    default:
      return gender || "—";
  }
}
