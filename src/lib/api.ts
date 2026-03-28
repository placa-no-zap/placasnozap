import { ReportResponse } from "@/types/report";

const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL ?? "https://api-312049636139.us-east4.run.app";

export async function fetchReport(id: string): Promise<ReportResponse> {
  const res = await fetch(`${API_BASE_URL}/report/${encodeURIComponent(id)}`);
  if (!res.ok) {
    if (res.status === 404) {
      throw new Error("REPORT_NOT_FOUND");
    }
    throw new Error("FETCH_ERROR");
  }
  return res.json();
}
