export interface ReportResponse {
  registrationData: {
    Result: RegistrationResult[];
    QueryDate?: string;
  };
  lawsuits: {
    Result: LawsuitsResult[];
    QueryDate?: string;
  };
}

export interface RegistrationResult {
  MatchKeys: string;
  RegistrationData: {
    BasicData: BasicData;
  };
}

export interface BasicData {
  TaxIdNumber: string;
  Name: string;
  Gender: string;
  BirthDate: string;
  MotherName: string;
  TaxIdStatus: string;
  TaxIdStatusDate: string;
  NameUniquenessScore: number;
}

export interface LawsuitsResult {
  MatchKeys: string;
  Processes: {
    Lawsuits: Lawsuit[];
  };
}

export interface Lawsuit {
  Number: string;
  Type: string;
  MainSubject: string;
  CourtName: string;
  CourtLevel: string;
  CourtType: string;
  CourtDistrict: string;
  Judge: string;
  JudgingBody: string;
  State: string;
  Status: string;
  NoticeDate: string;
  LastMovementDate: string;
  Parties: Party[];
  Updates: LawsuitUpdate[];
}

export interface Party {
  Name: string;
  Doc?: string;
  Polarity: "ACTIVE" | "PASSIVE" | "NEUTRAL";
  Type: string;
  IsPartyActive: boolean;
  IsInference?: boolean;
  PartyDetails: {
    SpecificType: string;
    OAB?: string;
    State?: string;
  };
}

export interface LawsuitUpdate {
  Content: string;
  PublishDate: string;
  CaptureDate?: string;
}
