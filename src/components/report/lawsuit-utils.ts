export function getLawsuitStatusColor(status: string): string {
  switch (status?.toUpperCase()) {
    case "ARQUIVADO":
    case "ENCERRADO":
      return "bg-gray-100 text-gray-700 border-gray-200";
    case "REDISTRIBUIDO":
      return "bg-yellow-100 text-yellow-800 border-yellow-200";
    case "JULGADO":
      return "bg-blue-100 text-blue-700 border-blue-200";
    case "ATIVO":
    case "EM ANDAMENTO":
      return "bg-green-100 text-green-700 border-green-200";
    default:
      return "bg-gray-100 text-gray-600 border-gray-200";
  }
}

export function getPolarityColor(polarity: string): string {
  switch (polarity?.toUpperCase()) {
    case "ACTIVE":
      return "bg-blue-100 text-blue-700 border-blue-200";
    case "PASSIVE":
      return "bg-red-100 text-red-700 border-red-200";
    case "NEUTRAL":
    default:
      return "bg-gray-100 text-gray-600 border-gray-200";
  }
}

export function getPolarityLabel(polarity: string): string {
  switch (polarity?.toUpperCase()) {
    case "ACTIVE":
      return "Ativo";
    case "PASSIVE":
      return "Passivo";
    case "NEUTRAL":
      return "Neutro";
    default:
      return polarity;
  }
}
