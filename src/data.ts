export const authorityData = [
  {
    no: 1,
    authority: "Sub-Postmasters of Time Scale Departmental SOs and Lower Selection Grade (LSG) Post Offices",
    limit: "₹50,000",
  },
  {
    no: 2,
    authority: "Sub-Postmasters / Deputy Postmasters / Postmasters of Higher Selection Grade (HSG) (All Non-Gazetted) SOs and HPOs",
    limit: "₹1,00,000",
  },
  {
    no: 3,
    authority: "Senior Postmasters / Deputy Chief Postmasters / Superintendent of Post Offices / Deputy Superintendent of Post Offices (All Gazetted Group-B HPOs & Divisions), Chief Postmasters in GPOs/Head Offices and Senior Superintendents of Post Offices (All Gazetted Group-A HPOs & Divisions) and equivalent authorities in GPOs",
    limit: "₹5,00,000",
  },
  {
    no: 4,
    authority: "Director (HQ) / Regional Director / Director (GPO)",
    limit: "Above ₹5,00,000 (Claims beyond ₹5,00,000 require legal evidence; discretionary settlement is permissible only up to ₹5,00,000.)",
  },
];

export const checklistItems = [
  "Confirm that no nomination exists in the account/certificate.",
  "Confirm that no legal evidence (Succession Certificate/Probate/Letter of Administration) has been produced.",
  "Verify that the claim is submitted after six months from the date of death.",
  "Verify that the balance in the account/certificate does not exceed ₹5,00,000.",
  "Claim Application Form received and duly filled.",
  "Original Death Certificate/Proof of Death received.",
  "Original Passbook/Certificate/Statement of Account received.",
  "Form-13 (Affidavit) submitted.",
  "Form-14 (Letter of Disclaimer) submitted.",
  "Form-15 (Bond of Indemnity) submitted.",
  "Forms 13, 14 & 15 executed on the prescribed Non-Judicial Stamp Paper.",
  "Guardianship Certificate obtained, if required.",
  "Identity Proof of claimant verified.",
  "Address Proof of claimant verified.",
  "Death Certificate verified.",
  "Account particulars verified with Finacle/Sanchay Post.",
  "Balance in the account/certificate verified.",
  "Confirm that no Court Order/Tax Authority Order/Freeze/Pledge/Objection is pending.",
  "Witnesses accepted by the Postmaster.",
  "Annexures (Forms 13, 14 & 15) duly attested.",
  "Pledge Release Certificate obtained, if the account is pledged.",
  "Claim forwarded to the competent sanctioning authority.",
  "Claim scrutinized and sanctioned by the competent authority.",
  "Claimant's acquittance obtained on the sanctioned claim form.",
  "No separate Account Closure Form obtained.",
  "Sanctioned claim form treated as the Account Closure Voucher.",
  "Photocopy/Duplicate of the sanctioned claim form kept in the claim case file.",
  "Account closed/Certificate discharged in Finacle/Sanchay Post.",
  "Payment made by Crossed Cheque or credit to POSB/Bank Account.",
  "Payment details recorded and claim case file completed."
];

export const documentChecklist = [
  "Claim Application Form",
  "Death Certificate/Proof of Death",
  "Original Passbook/Certificate/Statement of Account",
  "Form-13 (Affidavit)",
  "Form-14 (Letter of Disclaimer)",
  "Form-15 (Bond of Indemnity)",
  "Identity Proof of claimant",
  "Address Proof of claimant",
  "Guardianship Certificate (if applicable)",
  "Pledge Release Certificate (if applicable)",
  "Copy of POSB Passbook/Cancelled Cheque (if payment by account credit)"
];

export const stampPaperDetails = [
  {
    form: "Form-13",
    purpose: "Affidavit",
    stampValue: "₹10 Non-Judicial Stamp Paper",
    executedBy: "Claimant",
    witnesses: "Normally 2 witnesses"
  },
  {
    form: "Form-14",
    purpose: "Letter of Disclaimer",
    stampValue: "₹10 Non-Judicial Stamp Paper",
    executedBy: "Every legal heir who is relinquishing his/her claim",
    witnesses: "Normally 2 witnesses"
  },
  {
    form: "Form-15",
    purpose: "Bond of Indemnity",
    stampValue: "₹100 Non-Judicial Stamp Paper (Indemnity Bond)",
    executedBy: "Claimant executing the indemnity bond",
    witnesses: "Normally 2 witnesses"
  }
];

export const signatureDetails = [
  {
    formNo: "Form-13",
    name: "Affidavit",
    claimant: "✓ Signs as Deponent",
    legalHeir: "✗",
    surety: "✗",
    witnesses: "✓ Sign as Witnesses",
    oath: "✓ Attests the Affidavit"
  },
  {
    formNo: "Form-14",
    name: "Letter of Disclaimer",
    claimant: "✗ Does not sign (normally)",
    legalHeir: "✓ Each legal heir relinquishing his/her claim must sign separately",
    surety: "✗",
    witnesses: "✓ Sign as Witnesses",
    oath: "✓ Attests/Notarizes (where applicable as per local practice)"
  },
  {
    formNo: "Form-15",
    name: "Bond of Indemnity",
    claimant: "✓ Signs as Executant",
    legalHeir: "✗",
    surety: "✓ Signs (if the prescribed format requires a surety)",
    witnesses: "✓ Sign as Witnesses",
    oath: "✓ Attests the Bond (where applicable)"
  }
];
