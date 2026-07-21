import React from 'react';
import { Check, X, ArrowDown, FileText } from 'lucide-react';
import { cn } from './lib/utils';
import { authorityData, checklistItems, documentChecklist, stampPaperDetails, signatureDetails } from './data';

interface SlideLayoutProps {
  title?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}

const SlideLayout = ({ title, children, className }: SlideLayoutProps) => (
  <div className={cn("w-full h-full flex flex-col p-6 sm:p-8 md:p-12 text-slate-800 dark:text-slate-100", className)}>
    {title && (
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-6 md:mb-12 text-red-600 dark:text-red-300 border-l-4 border-red-600 dark:border-red-500 pl-4 md:pl-6">
        {title}
      </h2>
    )}
    <div className="flex-1 flex flex-col min-h-0 text-base sm:text-lg md:text-2xl leading-relaxed">
      {children}
    </div>
  </div>
);

const BulletList = ({ items, className }: { items: React.ReactNode[], className?: string }) => (
  <ul className={cn("space-y-6 list-none", className)}>
    {items.map((item, i) => (
      <li key={i} className="flex items-start">
        <span className="text-red-600 dark:text-red-500 mr-4 mt-1.5 shrink-0">▪</span>
        <span>{item}</span>
      </li>
    ))}
  </ul>
);

export const slides = [
  // Slide 1
  function TitleSlide() {
    return (
      <div className="w-full h-full flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-red-50 dark:from-red-950 via-slate-100 dark:via-slate-900 to-slate-50 dark:to-slate-950 opacity-90" />
        <div className="relative z-10 text-center max-w-4xl px-8">
          <div className="w-12 h-12 md:w-16 md:h-16 bg-red-600/20 dark:bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-6 md:mb-8 ring-1 ring-red-600/50 dark:ring-red-500/50">
            <FileText className="w-6 h-6 md:w-8 md:h-8 text-red-500 dark:text-red-400" />
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-slate-950 dark:text-white mb-6 md:mb-8 leading-tight">
            Death Claim Settlement
          </h1>
          <div className="space-y-4 text-red-700/80 dark:text-red-200/80 text-lg sm:text-xl md:text-2xl">
            <p>(Where No Nomination Exists and No Legal Evidence is Produced)</p>
            <p className="font-semibold text-red-500 dark:text-red-400">As per SB Order No. 31/2020</p>
          </div>
        </div>
      </div>
    );
  },

  // Slide 2
  function ConditionsSlide() {
    return (
      <SlideLayout title="Conditions">
        <div className="mb-8">This procedure applies only when:</div>
        <BulletList items={[
          "No nomination exists.",
          "No legal evidence (Succession Certificate/Probate/Letter of Administration) is produced.",
          <span key="amount">The balance in the account/certificate does not exceed <strong className="text-slate-950 dark:text-white">₹5,00,000</strong>.</span>,
          <span key="date">The claim is submitted <strong className="text-slate-950 dark:text-white">after six months from the date of death</strong> of the depositor.</span>
        ]} />
      </SlideLayout>
    );
  },

  // Slide 3
  function SubmissionSlide() {
    return (
      <SlideLayout title="Submission of Claim">
        <div className="mb-6 md:mb-8">The claimant should submit:</div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 overflow-y-auto pb-12 pr-2">
          <BulletList items={[
            <strong key="1" className="text-slate-950 dark:text-white">Prescribed Claim Application Form</strong>,
            <strong key="2" className="text-slate-950 dark:text-white">Original Death Certificate/Proof of Death</strong>,
            <span key="3"><strong className="text-slate-950 dark:text-white">Original Passbook/Certificate</strong> (or Deposit Receipt/Statement of Account)</span>,
            <strong key="4" className="text-slate-950 dark:text-white">Affidavit – Form-13</strong>,
            <strong key="5" className="text-slate-950 dark:text-white">Letter of Disclaimer – Form-14</strong>
          ]} />
          <BulletList items={[
            <strong key="6" className="text-slate-950 dark:text-white">Bond of Indemnity – Form-15</strong>,
            <strong key="7" className="text-slate-950 dark:text-white">Identity Proof (ID Proof)</strong>,
            <strong key="8" className="text-slate-950 dark:text-white">Address Proof</strong>,
            <span key="9"><strong className="text-slate-950 dark:text-white">Guardianship Certificate</strong>, if the claimant is acting on behalf of a minor and is not the natural guardian.</span>
          ]} />
        </div>
      </SlideLayout>
    );
  },

  // Slide 4
  function AcceptanceSlide() {
    return (
      <SlideLayout title="Acceptance of Claim">
        <p className="mb-6 text-base sm:text-lg md:text-xl text-slate-600 dark:text-slate-300">After receiving the claim application, the Postmaster should ensure the following before accepting the claim:</p>
        
        <div className="space-y-6 md:space-y-8 overflow-y-auto pr-4 pb-12">
          <div>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-medium text-red-500 dark:text-red-400 mb-3 md:mb-4">Verify Eligibility</h3>
            <BulletList items={[
              "Ensure no nomination exists in the account/certificate.",
              "Ensure no legal evidence (Succession Certificate/Probate/Letter of Administration) has been produced.",
              "Ensure the balance in the account/certificate does not exceed ₹5,00,000.",
              "Ensure the claim has been submitted after six months from the date of death of the depositor."
            ]} />
          </div>

          <div>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-medium text-red-500 dark:text-red-400 mb-3 md:mb-4">Receive the Claim Documents</h3>
            <BulletList items={[
              "Accept the prescribed Claim Application Form along with all supporting documents."
            ]} />
          </div>

          <div>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-medium text-red-500 dark:text-red-400 mb-3 md:mb-4">Check the Supporting Forms</h3>
            <BulletList items={[
              "Verify that Forms 13, 14 and 15 are executed on the required value of Non-Judicial Stamp Paper as per the applicable State Stamp Act.",
              "If the claimant is acting on behalf of a minor and is not the natural guardian, ensure a Guardianship Certificate is enclosed."
            ]} />
          </div>

          <div>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-medium text-red-500 dark:text-red-400 mb-3 md:mb-4">Forwarding of Claim</h3>
            <BulletList items={[
              "If the claim is submitted at a Post Office other than the office where the account stands, the receiving Post Office should accept the claim and forward all documents to the concerned Post Office by Service Insured Post after completing the prescribed formalities."
            ]} />
          </div>
        </div>
      </SlideLayout>
    );
  },

  // Slide 5
  function VerificationSlide() {
    return (
      <SlideLayout title="Verification by the Postmaster">
        <p className="mb-4 md:mb-6 text-base sm:text-lg md:text-xl text-slate-600 dark:text-slate-300">After accepting the claim application, the Postmaster shall verify the following before forwarding the case to the competent sanctioning authority:</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6 md:gap-y-8 overflow-y-auto pb-12 text-base sm:text-lg md:text-xl pr-2">
          <div>
            <h4 className="text-red-500 dark:text-red-400 font-medium mb-2">Verify the particulars of the account/certificate</h4>
            <p className="pl-6 border-l-2 border-slate-300 dark:border-slate-700 text-slate-600 dark:text-slate-300">Check that the account/certificate details mentioned in the claim application are correctly filled in and tally with the records in Finacle/Sanchay Post.</p>
          </div>
          <div>
            <h4 className="text-red-500 dark:text-red-400 font-medium mb-2">Verify the claimant</h4>
            <p className="pl-6 border-l-2 border-slate-300 dark:border-slate-700 text-slate-600 dark:text-slate-300">Ensure that the claimant is properly identified by verifying the Identity Proof and Address Proof.</p>
          </div>
          <div>
            <h4 className="text-red-500 dark:text-red-400 font-medium mb-2">Verify the Death Certificate</h4>
            <p className="pl-6 border-l-2 border-slate-300 dark:border-slate-700 text-slate-600 dark:text-slate-300">Ensure that the original or attested copy of the Death Certificate/Proof of Death is enclosed and is in order.</p>
          </div>
          <div>
            <h4 className="text-red-500 dark:text-red-400 font-medium mb-2">Verify Supporting Documents</h4>
            <p className="pl-6 border-l-2 border-slate-300 dark:border-slate-700 text-slate-600 dark:text-slate-300">Check that all annexures attached to the claim application, including Form-13 (Affidavit), Form-14 (Letter of Disclaimer), and Form-15 (Bond of Indemnity), are duly completed and attested by the prescribed authorities.</p>
          </div>
          <div>
            <h4 className="text-red-500 dark:text-red-400 font-medium mb-2">Verify Witnesses</h4>
            <p className="pl-6 border-l-2 border-slate-300 dark:border-slate-700 text-slate-600 dark:text-slate-300">Ensure that the witnesses on the claim application have been accepted by the Postmaster.</p>
          </div>
          <div>
            <h4 className="text-red-500 dark:text-red-400 font-medium mb-2">Verify Pledge Status</h4>
            <p className="pl-6 border-l-2 border-slate-300 dark:border-slate-700 text-slate-600 dark:text-slate-300">Check whether the account/certificate is pledged. If pledged, ensure that a Pledge Release Certificate from the pledgee is enclosed before processing the claim.</p>
          </div>
          <div className="md:col-span-2">
            <h4 className="text-red-500 dark:text-red-400 font-medium mb-2">Verify Court Orders/Objections</h4>
            <p className="pl-6 border-l-2 border-slate-300 dark:border-slate-700 text-slate-600 dark:text-slate-300">Ensure that there is no Court Order, Tax Authority Order, Freeze, Pledge, or Objection pending against the account/certificate before recommending the claim for sanction. This verification is part of the prescribed scrutiny before settlement.</p>
          </div>
        </div>
      </SlideLayout>
    );
  },

  // Slide 6
  function AuthoritySlide() {
    return (
      <SlideLayout title="Determine the Competent Sanctioning Authority">
        <div className="overflow-x-auto rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-100/50 dark:bg-slate-900/50 mt-4">
          <table className="w-full text-left border-collapse min-w-[600px]">
            <thead>
              <tr className="bg-slate-200 dark:bg-slate-800 text-red-600 dark:text-red-300 border-b border-slate-300 dark:border-slate-700 text-lg md:text-xl">
                <th className="p-3 md:p-4 font-semibold w-12 md:w-16 text-center">Sl. No.</th>
                <th className="p-3 md:p-4 font-semibold">Competent Sanctioning Authority</th>
                <th className="p-3 md:p-4 font-semibold">Present Sanction Limit</th>
              </tr>
            </thead>
            <tbody className="text-base md:text-lg">
              {authorityData.map((row) => (
                <tr key={row.no} className="border-b border-slate-300/50 dark:border-slate-700/50 last:border-0 hover:bg-slate-200/30 dark:hover:bg-slate-800/30 transition-colors">
                  <td className="p-3 md:p-4 text-center align-top text-slate-500 dark:text-slate-400">{row.no}</td>
                  <td className="p-3 md:p-4 align-top leading-snug">{row.authority}</td>
                  <td className="p-3 md:p-4 align-top font-medium text-red-700 dark:text-red-200">{row.limit}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </SlideLayout>
    );
  },

  // Slide 7
  function ScrutinySummarySlide() {
    return (
      <SlideLayout title="Scrutiny by the Sanctioning Authority">
        <div className="mb-8">The competent authority ensures that:</div>
        <BulletList items={[
          "Account particulars are correctly verified.",
          "Witnesses have been accepted by the Postmaster.",
          "ID Proof and Address Proof are attached.",
          "Death Certificate is in order.",
          "Forms 13, 14 and 15 are properly executed and attested.",
          "Pledge release certificate is enclosed, if the account is pledged."
        ]} />
      </SlideLayout>
    );
  },

  // Slide 8
  function ScrutinyDetailed1Slide() {
    return (
      <SlideLayout title="Scrutiny by the Sanctioning Authority (Part 1)">
        <p className="mb-6 text-xl text-slate-600 dark:text-slate-300 border-l-4 border-red-600 dark:border-red-500 pl-4">
          After receiving the claim from the Postmaster, the Competent Sanctioning Authority shall scrutinize the claim to ensure that all requirements have been complied with before issuing the sanction.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 overflow-y-auto pb-12 text-base sm:text-lg text-slate-700 dark:text-slate-200 pr-2">
          <div className="bg-slate-200/40 dark:bg-slate-800/40 p-6 rounded-lg border border-slate-300/50 dark:border-slate-700/50">
            <h4 className="text-red-500 dark:text-red-400 font-semibold mb-2 flex items-center gap-2">
              <span className="bg-red-600/20 dark:bg-red-500/20 text-red-600 dark:text-red-300 w-8 h-8 rounded-full flex items-center justify-center shrink-0">1</span>
              Verify Account Particulars
            </h4>
            <ul className="list-disc pl-5 space-y-1 text-slate-600 dark:text-slate-300 ml-9">
              <li>Ensure that the particulars of the account/certificate are correctly filled in the claim application.</li>
              <li>Verify that these particulars have been checked and certified by the Postmaster.</li>
            </ul>
          </div>
          
          <div className="bg-slate-200/40 dark:bg-slate-800/40 p-6 rounded-lg border border-slate-300/50 dark:border-slate-700/50">
            <h4 className="text-red-500 dark:text-red-400 font-semibold mb-2 flex items-center gap-2">
              <span className="bg-red-600/20 dark:bg-red-500/20 text-red-600 dark:text-red-300 w-8 h-8 rounded-full flex items-center justify-center shrink-0">2</span>
              Verify Witnesses
            </h4>
            <p className="pl-10 text-slate-600 dark:text-slate-300">Ensure that the witnesses on the claim application have been accepted by the Postmaster.</p>
          </div>

          <div className="bg-slate-200/40 dark:bg-slate-800/40 p-6 rounded-lg border border-slate-300/50 dark:border-slate-700/50">
            <h4 className="text-red-500 dark:text-red-400 font-semibold mb-2 flex items-center gap-2">
              <span className="bg-red-600/20 dark:bg-red-500/20 text-red-600 dark:text-red-300 w-8 h-8 rounded-full flex items-center justify-center shrink-0">3</span>
              Verify Identity and Address Proof
            </h4>
            <p className="pl-10 text-slate-600 dark:text-slate-300">Confirm that the claimant's Identity Proof and Address Proof are attached with the claim application.</p>
          </div>

          <div className="bg-slate-200/40 dark:bg-slate-800/40 p-6 rounded-lg border border-slate-300/50 dark:border-slate-700/50">
            <h4 className="text-red-500 dark:text-red-400 font-semibold mb-2 flex items-center gap-2">
              <span className="bg-red-600/20 dark:bg-red-500/20 text-red-600 dark:text-red-300 w-8 h-8 rounded-full flex items-center justify-center shrink-0">4</span>
              Verify Death Certificate
            </h4>
            <p className="pl-10 text-slate-600 dark:text-slate-300">Ensure that the original or attested copy of the Death Certificate/Proof of Death issued by the competent authority accompanies the claim application and is in order.</p>
          </div>
        </div>
      </SlideLayout>
    );
  },

  // Slide 9
  function ScrutinyDetailed2Slide() {
    return (
      <SlideLayout title="Scrutiny & Sanction (Part 2)">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 overflow-y-auto pb-12 text-base sm:text-lg text-slate-700 dark:text-slate-200 pr-2">
          <div className="bg-slate-200/40 dark:bg-slate-800/40 p-6 rounded-lg border border-slate-300/50 dark:border-slate-700/50">
            <h4 className="text-red-500 dark:text-red-400 font-semibold mb-2 flex items-center gap-2">
              <span className="bg-red-600/20 dark:bg-red-500/20 text-red-600 dark:text-red-300 w-8 h-8 rounded-full flex items-center justify-center shrink-0">5</span>
              Verify Annexures
            </h4>
            <p className="pl-10 text-slate-600 dark:text-slate-300">Ensure that all annexures (Form-13, Form-14, and Form-15) are duly completed and attested by the prescribed authorities.</p>
          </div>
          
          <div className="bg-slate-200/40 dark:bg-slate-800/40 p-6 rounded-lg border border-slate-300/50 dark:border-slate-700/50">
            <h4 className="text-red-500 dark:text-red-400 font-semibold mb-2 flex items-center gap-2">
              <span className="bg-red-600/20 dark:bg-red-500/20 text-red-600 dark:text-red-300 w-8 h-8 rounded-full flex items-center justify-center shrink-0">6</span>
              Verify Pledge Status
            </h4>
            <p className="pl-10 text-slate-600 dark:text-slate-300">Ensure Release Certificate is attached if pledged. Payment shall first be made to the pledgee if claimed wholly or partly.</p>
          </div>

          <div className="bg-slate-200/40 dark:bg-slate-800/40 p-6 rounded-lg border border-slate-300/50 dark:border-slate-700/50">
            <h4 className="text-red-500 dark:text-red-400 font-semibold mb-2 flex items-center gap-2">
              <span className="bg-red-600/20 dark:bg-red-500/20 text-red-600 dark:text-red-300 w-8 h-8 rounded-full flex items-center justify-center shrink-0">7</span>
              Deficiencies in the Claim
            </h4>
            <p className="pl-10 text-slate-600 dark:text-slate-300">Address the claimant directly to rectify material defects. Where witnesses, ID, address, and annexures are in order, no further verification is required.</p>
          </div>

          <div className="bg-red-100/30 dark:bg-red-900/30 p-6 rounded-lg border border-red-600/30 dark:border-red-500/30">
            <h4 className="text-red-600 dark:text-red-300 font-semibold mb-2 flex items-center gap-2">
              <span className="bg-red-600 dark:bg-red-500 w-8 h-8 rounded-full flex items-center justify-center text-slate-950 dark:text-white shrink-0">8</span>
              Issue of Sanction
            </h4>
            <p className="pl-10 text-red-800/90 dark:text-red-100/90">If the claim is complete and found admissible, the Competent Sanctioning Authority shall issue the sanction for payment without reference to any higher authority (if within powers).</p>
          </div>
        </div>
      </SlideLayout>
    );
  },

  // Slide 9.1
  function SanctionOfClaim1Slide() {
    return (
      <SlideLayout title="Sanction of Claim (Part 1)">
        <p className="mb-6 text-xl text-slate-600 dark:text-slate-300">
          After scrutiny of the claim and verification of all documents, the Competent Sanctioning Authority shall take the following action:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 overflow-y-auto pb-12 text-base sm:text-lg text-slate-700 dark:text-slate-200 pr-2">
          <div className="bg-slate-200/40 dark:bg-slate-800/40 p-6 rounded-lg border border-slate-300/50 dark:border-slate-700/50">
            <h4 className="text-red-500 dark:text-red-400 font-semibold mb-2 flex items-center gap-2">
              <span className="bg-red-600/20 dark:bg-red-500/20 text-red-600 dark:text-red-300 w-8 h-8 rounded-full flex items-center justify-center shrink-0">1</span>
              Satisfy about Genuineness
            </h4>
            <ul className="list-disc pl-5 space-y-1 text-slate-600 dark:text-slate-300 ml-9">
              <li>Ensure that the claim is complete in all respects.</li>
              <li>Verify that all prescribed documents, Forms 13, 14 and 15, ID proof, address proof, and death certificate are in order.</li>
              <li>Ensure that the claimant is legally entitled to receive the amount.</li>
            </ul>
          </div>
          
          <div className="bg-slate-200/40 dark:bg-slate-800/40 p-6 rounded-lg border border-slate-300/50 dark:border-slate-700/50">
            <h4 className="text-red-500 dark:text-red-400 font-semibold mb-2 flex items-center gap-2">
              <span className="bg-red-600/20 dark:bg-red-500/20 text-red-600 dark:text-red-300 w-8 h-8 rounded-full flex items-center justify-center shrink-0">2</span>
              Issue Sanction
            </h4>
            <p className="pl-10 text-slate-600 dark:text-slate-300">If the claim is found admissible, the Competent Sanctioning Authority shall sanction the claim without reference to any higher authority, provided it is within his/her financial powers.</p>
          </div>

          <div className="bg-slate-200/40 dark:bg-slate-800/40 p-6 rounded-lg border border-slate-300/50 dark:border-slate-700/50">
            <h4 className="text-red-500 dark:text-red-400 font-semibold mb-2 flex items-center gap-2">
              <span className="bg-red-600/20 dark:bg-red-500/20 text-red-600 dark:text-red-300 w-8 h-8 rounded-full flex items-center justify-center shrink-0">3</span>
              Doubtful or Contested Claims
            </h4>
            <ul className="list-disc pl-5 space-y-1 text-slate-600 dark:text-slate-300 ml-9">
              <li>Conduct necessary enquiries.</li>
              <li>Record the findings.</li>
              <li>Forward the case to the higher authority, if required, for appropriate orders.</li>
            </ul>
          </div>

          <div className="bg-slate-200/40 dark:bg-slate-800/40 p-6 rounded-lg border border-slate-300/50 dark:border-slate-700/50">
            <h4 className="text-red-500 dark:text-red-400 font-semibold mb-2 flex items-center gap-2">
              <span className="bg-red-600/20 dark:bg-red-500/20 text-red-600 dark:text-red-300 w-8 h-8 rounded-full flex items-center justify-center shrink-0">4</span>
              Claims with Special Features
            </h4>
            <p className="pl-10 text-slate-600 dark:text-slate-300">Cases involving lacunae in the rules or other special features should not be disposed of as a matter of course. Such cases should be referred to the Directorate for orders.</p>
          </div>
        </div>
      </SlideLayout>
    );
  },

  // Slide 9.2
  function SanctionOfClaim2Slide() {
    return (
      <SlideLayout title="Sanction of Claim (Part 2)">
        <div className="space-y-4 md:space-y-8 overflow-y-auto pb-12 text-base sm:text-lg text-slate-700 dark:text-slate-200 pr-2">
          <div className="bg-slate-200/40 dark:bg-slate-800/40 p-6 rounded-lg border border-slate-300/50 dark:border-slate-700/50">
            <h4 className="text-red-500 dark:text-red-400 font-semibold mb-2 flex items-center gap-2">
              <span className="bg-red-600/20 dark:bg-red-500/20 text-red-600 dark:text-red-300 w-8 h-8 rounded-full flex items-center justify-center shrink-0">5</span>
              Claims Beyond Financial Powers
            </h4>
            <p className="pl-10 text-slate-600 dark:text-slate-300">If the amount exceeds the financial powers of the sanctioning authority, the claim shall be forwarded to the next higher competent authority after completing all verifications.</p>
          </div>

          <div className="bg-slate-200/40 dark:bg-slate-800/40 p-6 rounded-lg border border-slate-300/50 dark:border-slate-700/50">
            <h4 className="text-red-500 dark:text-red-400 font-semibold mb-2 flex items-center gap-2">
              <span className="bg-red-600/20 dark:bg-red-500/20 text-red-600 dark:text-red-300 w-8 h-8 rounded-full flex items-center justify-center shrink-0">6</span>
              Communication of Sanction
            </h4>
            <div className="pl-10 text-slate-600 dark:text-slate-300">
              After sanction is accorded, the sanctioned claim form is returned to the Postmaster for:
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>Obtaining the claimant's acquittance.</li>
                <li>Closing the account/certificate.</li>
                <li>Arranging payment as per rules.</li>
              </ul>
            </div>
          </div>

          <div className="bg-red-100/30 dark:bg-red-900/30 p-6 rounded-lg border border-red-600/30 dark:border-red-500/30">
            <h4 className="text-red-600 dark:text-red-300 font-semibold mb-3">Important Points</h4>
            <ul className="list-disc pl-5 text-red-800/90 dark:text-red-100/90 space-y-2">
              <li>The sanction should be issued only after ensuring that all prescribed formalities have been completed.</li>
              <li>The sanction order forms the basis for payment and account closure.</li>
              <li>No separate account closure form is required; the sanctioned claim form itself serves as the account closure voucher.</li>
            </ul>
          </div>
        </div>
      </SlideLayout>
    );
  },

  // Slide 10
  function AcquittanceSlide() {
    return (
      <SlideLayout title="Obtain Acquittance">
        <div className="flex flex-col gap-8 md:gap-12 max-w-3xl mt-4 md:mt-8 overflow-y-auto pr-2 pb-12">
          <div className="flex gap-4 md:gap-6 items-start">
            <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-slate-200 dark:bg-slate-800 flex items-center justify-center shrink-0 border-2 border-red-600 dark:border-red-500">
              <span className="text-xl md:text-3xl font-bold text-red-500 dark:text-red-400">1</span>
            </div>
            <div>
              <h3 className="text-xl md:text-3xl font-medium text-slate-950 dark:text-white mb-2 md:mb-3">Present the Sanctioned Claim Form</h3>
              <p className="text-base md:text-xl text-slate-600 dark:text-slate-300 leading-relaxed">
                The claimant should appear before the Postmaster with the original sanctioned claim form.
              </p>
            </div>
          </div>
          
          <div className="flex gap-4 md:gap-6 items-start">
            <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-slate-200 dark:bg-slate-800 flex items-center justify-center shrink-0 border-2 border-red-600 dark:border-red-500">
              <span className="text-xl md:text-3xl font-bold text-red-500 dark:text-red-400">2</span>
            </div>
            <div>
              <h3 className="text-xl md:text-3xl font-medium text-slate-950 dark:text-white mb-2 md:mb-3">Obtain the Claimant's Signature</h3>
              <p className="text-base md:text-xl text-slate-600 dark:text-slate-300 leading-relaxed">
                Obtain the acquittance (signature/thumb impression) of the claimant on the sanctioned claim form as a token of receipt of the claim amount.
              </p>
            </div>
          </div>
        </div>
      </SlideLayout>
    );
  },

  // Slide 11
  function ClosureSlide() {
    return (
      <SlideLayout title="Closure of Account">
        <p className="mb-6 md:mb-10 text-base md:text-xl text-slate-600 dark:text-slate-300">
          After the claim has been sanctioned and the claimant's acquittance has been obtained, the Postmaster shall take the following action for closure of the account:
        </p>
        
        <div className="space-y-6 md:space-y-10 overflow-y-auto pr-2 pb-12">
          <div>
            <h3 className="text-lg md:text-2xl font-semibold text-red-500 dark:text-red-400 mb-2">1. No Separate Account Closure Form</h3>
            <p className="pl-4 md:pl-6 border-l-2 border-slate-300 dark:border-slate-700 text-slate-600 dark:text-slate-300 text-base md:text-lg">
              <strong className="text-slate-950 dark:text-white font-medium">No separate Account Closure Form is required.</strong><br/>
              The receipt obtained on the sanctioned claim form at the time of payment shall itself be treated as the Account Closure Voucher.
            </p>
          </div>
          <div>
            <h3 className="text-lg md:text-2xl font-semibold text-red-500 dark:text-red-400 mb-2">2. Preserve Office Copy</h3>
            <p className="pl-4 md:pl-6 border-l-2 border-slate-300 dark:border-slate-700 text-slate-600 dark:text-slate-300 text-base md:text-lg">
              A photocopy or duplicate copy of the sanctioned claim form shall be retained in the deceased claim case file as the office copy for future reference and record.
            </p>
          </div>
          <div>
            <h3 className="text-lg md:text-2xl font-semibold text-red-500 dark:text-red-400 mb-2">3. Close the Account/Discharge the Certificate</h3>
            <div className="pl-4 md:pl-6 border-l-2 border-slate-300 dark:border-slate-700 text-slate-600 dark:text-slate-300 text-base md:text-lg">
              After receipt of the acquitted claim form (and original certificates, where applicable), the office of payment shall:
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Close the account in Finacle/Sanchay Post, or</li>
                <li>Discharge the certificate, as the case may be.</li>
              </ul>
            </div>
          </div>
        </div>
      </SlideLayout>
    );
  },

  // Slide 12
  function PaymentSlide() {
    return (
      <SlideLayout title="Payment">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 h-full overflow-y-auto md:overflow-hidden pb-12 md:pb-0 pr-2 md:pr-0">
          <div className="space-y-4 md:space-y-6 md:overflow-y-auto md:pr-4 md:pb-12 text-base sm:text-lg">
            <div className="bg-slate-200/50 dark:bg-slate-800/50 p-5 rounded-lg">
              <h3 className="text-red-500 dark:text-red-400 font-semibold mb-3">1. Mode of Payment</h3>
              <p className="text-slate-600 dark:text-slate-300 mb-2">Payment shall be made only by:</p>
              <ul className="list-disc pl-5 text-slate-700 dark:text-slate-200 space-y-1">
                <li>Crossed Cheque, or</li>
                <li>Credit to the claimant's Post Office Savings Account (POSB Account), or</li>
                <li>Credit to the claimant's Bank Account.</li>
              </ul>
            </div>
            
            <div className="bg-slate-200/50 dark:bg-slate-800/50 p-5 rounded-lg">
              <h3 className="text-red-500 dark:text-red-400 font-semibold mb-3">2. Payment by Crossed Cheque</h3>
              <p className="text-slate-600 dark:text-slate-300">If payment is made by cheque, it shall be made <strong className="text-slate-950 dark:text-white">only through a crossed cheque</strong>. The details of the cheque issued should be recorded on the sanctioned claim form.</p>
            </div>

            <div className="bg-slate-200/50 dark:bg-slate-800/50 p-5 rounded-lg border border-orange-100/50 dark:border-orange-900/50 bg-orange-50/20 dark:bg-orange-950/20">
              <h3 className="text-orange-500 dark:text-orange-400 font-semibold mb-3">Important Policy</h3>
              <p className="text-slate-950 dark:text-white font-medium mb-2 uppercase tracking-wide text-sm">Cash payment is not permitted.</p>
              <p className="text-slate-600 dark:text-slate-300">All deceased claim payments shall invariably be made by crossed cheque or by credit to the claimant's POSB/Bank account.</p>
            </div>
          </div>

          <div className="space-y-4 md:space-y-6 md:overflow-y-auto md:pr-4 md:pb-12 text-base sm:text-lg">
             <div className="bg-slate-200/50 dark:bg-slate-800/50 p-5 rounded-lg">
              <h3 className="text-red-500 dark:text-red-400 font-semibold mb-3">3. Credit to POSB Account</h3>
              <p className="text-slate-600 dark:text-slate-300 mb-2">Required details:</p>
              <ul className="list-disc pl-5 text-slate-700 dark:text-slate-200 space-y-1">
                <li>POSB Account Number.</li>
                <li>Copy of the first page of the POSB passbook.</li>
              </ul>
            </div>

            <div className="bg-slate-200/50 dark:bg-slate-800/50 p-5 rounded-lg">
              <h3 className="text-red-500 dark:text-red-400 font-semibold mb-3">4. Credit to Bank Account</h3>
              <p className="text-slate-600 dark:text-slate-300 mb-2">Required details:</p>
              <ul className="list-disc pl-5 text-slate-700 dark:text-slate-200 space-y-1">
                <li>Bank Account Number.</li>
                <li>IFSC Code.</li>
                <li>Name of the Bank.</li>
                <li>Copy of the first page of the bank passbook or a cancelled cheque.</li>
              </ul>
            </div>
          </div>
        </div>
      </SlideLayout>
    );
  },

  // Slide 13
  function FlowChartSlide() {
    const steps = [
      "Eligible Legal Heir submits Claim (after 6 months)",
      "Submission of Forms 13, 14 & 15 and other required documents",
      "Verification by Postmaster",
      "Determine Competent Sanctioning Authority",
      "Scrutiny and Sanction of Claim",
      "Obtain Acquittance from Claimant",
      "Close Account (No Separate Closure Form Required)",
      "Payment by Crossed Cheque or Credit to POSB/Bank Account"
    ];

    return (
      <SlideLayout title="Process Flow Chart">
        <div className="flex flex-col items-center h-full overflow-y-auto pb-12 pr-2 md:pr-4 scroll-smooth">
          <div className="w-full flex flex-col items-center mt-2 md:my-auto">
            {steps.map((step, index) => (
              <React.Fragment key={index}>
                <div className="bg-slate-200 dark:bg-slate-800 border border-red-600/30 dark:border-red-500/30 text-red-800 dark:text-red-100 px-4 md:px-6 py-2 md:py-3 rounded-lg shadow-lg w-full max-w-2xl text-center text-base sm:text-lg md:text-xl shrink-0">
                  {step}
                </div>
                {index < steps.length - 1 && (
                  <div className="my-1 md:my-2 text-red-600 dark:text-red-500 shrink-0">
                    <ArrowDown className="w-6 h-6 md:w-8 md:h-8" />
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </SlideLayout>
    );
  },

  // Slide 14
  function ChecklistSlide() {
    return (
      <SlideLayout title="Comprehensive Checklist">
        <div className="overflow-auto border border-slate-300 dark:border-slate-700 rounded-xl bg-slate-100/50 dark:bg-slate-900/50 max-h-[60vh] md:max-h-[65vh] relative">
          <table className="w-full text-left border-collapse min-w-[500px]">
            <thead className="sticky top-0 bg-slate-200/95 dark:bg-slate-800/95 backdrop-blur shadow-sm z-10">
              <tr className="text-red-600 dark:text-red-300 border-b border-slate-300 dark:border-slate-700 text-base md:text-lg">
                <th className="p-2 md:p-3 font-semibold w-12 md:w-16 text-center">Sl. No.</th>
                <th className="p-2 md:p-3 font-semibold">Checklist Item</th>
                <th className="p-2 md:p-3 font-semibold w-20 md:w-24 text-center">Status</th>
              </tr>
            </thead>
            <tbody className="text-sm md:text-base">
              {checklistItems.map((item, index) => (
                <tr key={index} className="border-b border-slate-300/50 dark:border-slate-700/50 last:border-0 hover:bg-slate-200/30 dark:hover:bg-slate-800/30 transition-colors">
                  <td className="p-2 md:p-3 text-center align-middle text-slate-500 dark:text-slate-400">{index + 1}</td>
                  <td className="p-2 md:p-3 align-middle text-slate-700 dark:text-slate-200">{item}</td>
                  <td className="p-2 md:p-3 align-middle text-center text-red-500 dark:text-red-400">
                    <div className="w-5 h-5 border border-slate-500 dark:border-slate-500 rounded mx-auto bg-slate-200/50 dark:bg-slate-800/50 flex items-center justify-center">
                      <Check className="w-3.5 h-3.5 opacity-50" />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </SlideLayout>
    );
  },

  // Slide 15
  function DocumentChecklistSlide() {
    return (
      <SlideLayout title="Document Check List">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 md:gap-x-12 gap-y-4 md:gap-y-6 bg-slate-200/30 dark:bg-slate-800/30 p-4 sm:p-6 md:p-8 rounded-2xl border border-slate-300/50 dark:border-slate-700/50 overflow-y-auto mb-12">
          {documentChecklist.map((doc, idx) => (
            <div key={idx} className="flex items-start gap-3 md:gap-4">
               <div className="w-5 h-5 md:w-6 md:h-6 border-2 border-red-600/50 dark:border-red-500/50 rounded flex-shrink-0 mt-0.5 md:mt-1 flex items-center justify-center bg-slate-100/50 dark:bg-slate-900/50" />
               <span className="text-base sm:text-lg md:text-xl text-slate-700 dark:text-slate-200 leading-relaxed">{doc}</span>
            </div>
          ))}
        </div>
      </SlideLayout>
    );
  },

  // Slide 16
  function StampPaperSlide() {
    return (
      <SlideLayout title="Stamp Paper Details">
        <div className="overflow-x-auto rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-100/50 dark:bg-slate-900/50 mt-4 md:mt-8">
          <table className="w-full text-left border-collapse min-w-[800px]">
            <thead>
              <tr className="bg-slate-200 dark:bg-slate-800 text-red-600 dark:text-red-300 border-b border-slate-300 dark:border-slate-700 text-base md:text-lg">
                <th className="p-3 md:p-5 font-semibold">Form</th>
                <th className="p-3 md:p-5 font-semibold">Purpose</th>
                <th className="p-3 md:p-5 font-semibold">Stamp Paper Value</th>
                <th className="p-3 md:p-5 font-semibold">Executed by</th>
                <th className="p-3 md:p-5 font-semibold">Witnesses</th>
              </tr>
            </thead>
            <tbody className="text-sm md:text-lg">
              {stampPaperDetails.map((row, idx) => (
                <tr key={idx} className="border-b border-slate-300/50 dark:border-slate-700/50 last:border-0 hover:bg-slate-200/30 dark:hover:bg-slate-800/30">
                  <td className="p-3 md:p-5 font-medium text-slate-950 dark:text-white">{row.form}</td>
                  <td className="p-3 md:p-5 text-slate-600 dark:text-slate-300">{row.purpose}</td>
                  <td className="p-3 md:p-5 text-red-700 dark:text-red-200">{row.stampValue}</td>
                  <td className="p-3 md:p-5 text-slate-600 dark:text-slate-300">{row.executedBy}</td>
                  <td className="p-3 md:p-5 text-slate-500 dark:text-slate-400">{row.witnesses}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </SlideLayout>
    );
  },

  // Slide 17
  function SignatureDetailsSlide() {
    return (
      <SlideLayout title="Signature Details of Forms 13, 14 & 15">
        <div className="overflow-x-auto rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-100/50 dark:bg-slate-900/50 mt-4 pb-2">
          <table className="w-full text-left border-collapse min-w-max">
            <thead>
              <tr className="bg-slate-200 dark:bg-slate-800 text-red-600 dark:text-red-300 border-b border-slate-300 dark:border-slate-700 text-base leading-tight">
                <th className="p-4 font-semibold text-center border-r border-slate-300/50 dark:border-slate-700/50">Form No.</th>
                <th className="p-4 font-semibold border-r border-slate-300/50 dark:border-slate-700/50">Name of Form</th>
                <th className="p-4 font-semibold border-r border-slate-300/50 dark:border-slate-700/50">Claimant</th>
                <th className="p-4 font-semibold border-r border-slate-300/50 dark:border-slate-700/50 text-center">Legal Heir(s) Giving<br/>Disclaimer</th>
                <th className="p-4 font-semibold border-r border-slate-300/50 dark:border-slate-700/50 text-center">Surety</th>
                <th className="p-4 font-semibold border-r border-slate-300/50 dark:border-slate-700/50">Two Witnesses</th>
                <th className="p-4 font-semibold">Oath Commissioner /<br/>Notary Public</th>
              </tr>
            </thead>
            <tbody className="text-sm">
              {signatureDetails.map((row, idx) => {
                const renderCell = (text: string, isCenter = false) => {
                  if (text === '✗') {
                    return <div className="flex justify-center"><X className="text-orange-500 dark:text-orange-500 w-6 h-6" /></div>;
                  }
                  if (text.startsWith('✓')) {
                     return (
                       <div className={cn("flex items-start gap-2", isCenter && "justify-center text-center")}>
                         <Check className="text-red-600 dark:text-red-500 w-5 h-5 shrink-0 mt-0.5" />
                         <span className="text-slate-700 dark:text-slate-200 leading-snug">{text.substring(1).trim()}</span>
                       </div>
                     );
                  }
                  if (text.startsWith('✗ Does')) {
                    return (
                       <div className={cn("flex items-start gap-2 text-slate-500 dark:text-slate-400", isCenter && "justify-center text-center")}>
                         <X className="text-orange-500 dark:text-orange-500 w-5 h-5 shrink-0 mt-0.5" />
                         <span className="leading-snug">{text.substring(1).trim()}</span>
                       </div>
                     );
                  }
                  return <span className="text-slate-600 dark:text-slate-300">{text}</span>;
                };

                return (
                  <tr key={idx} className="border-b border-slate-300/50 dark:border-slate-700/50 last:border-0 hover:bg-slate-200/30 dark:hover:bg-slate-800/30">
                    <td className="p-4 font-bold text-slate-950 dark:text-white text-center border-r border-slate-300/50 dark:border-slate-700/50 whitespace-nowrap">{row.formNo}</td>
                    <td className="p-4 font-medium text-slate-600 dark:text-slate-300 border-r border-slate-300/50 dark:border-slate-700/50">{row.name}</td>
                    <td className="p-4 border-r border-slate-300/50 dark:border-slate-700/50 align-top">{renderCell(row.claimant)}</td>
                    <td className="p-4 border-r border-slate-300/50 dark:border-slate-700/50 align-top">{renderCell(row.legalHeir, true)}</td>
                    <td className="p-4 border-r border-slate-300/50 dark:border-slate-700/50 align-top">{renderCell(row.surety, true)}</td>
                    <td className="p-4 border-r border-slate-300/50 dark:border-slate-700/50 align-top">{renderCell(row.witnesses)}</td>
                    <td className="p-4 align-top">{renderCell(row.oath)}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        
        <div className="mt-4 p-4 bg-red-50/20 dark:bg-red-950/20 border border-red-100/30 dark:border-red-900/30 rounded-lg text-xs text-red-700/60 dark:text-red-200/60 leading-relaxed">
          <p><strong>Form-13 (Affidavit):</strong> Claimant (Deponent), Two Witnesses, Oath Commissioner/Notary Public</p>
          <p><strong>Form-14 (Letter of Disclaimer):</strong> Each legal heir giving up his/her claim, Two Witnesses, Oath Commissioner/Notary Public (where applicable)</p>
          <p><strong>Form-15 (Bond of Indemnity):</strong> Claimant (Executant), Surety (if applicable), Two Witnesses, Oath Commissioner/Notary Public</p>
        </div>
      </SlideLayout>
    );
  },
  () => (
    <SlideLayout title="Document list">
      <div className="flex flex-col gap-4 md:gap-6 w-full max-w-4xl mx-auto mt-2 md:mt-4">
        <a href="https://drive.google.com/file/d/1IR7wTbQRkWsbh37LeiV-RGdL25DhMZvW/view?usp=drivesdk" target="_blank" rel="noopener noreferrer" className="flex items-center p-5 md:p-6 bg-slate-100 dark:bg-slate-800/50 rounded-xl hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors border border-slate-300 dark:border-slate-700">
          <FileText className="w-8 h-8 md:w-10 md:h-10 text-red-600 dark:text-red-500 mr-4 md:mr-6 shrink-0" />
          <div>
            <h3 className="text-lg md:text-xl font-bold text-slate-900 dark:text-white">Application Form (Form 11)</h3>
            <p className="text-xs md:text-sm text-slate-600 dark:text-slate-400 mt-1">Download and fill the application form</p>
          </div>
        </a>
        <a href="https://drive.google.com/file/d/1iCI4_V-moGul_JPOVa_SKEqFfVK2GWrO/view?usp=drivesdk" target="_blank" rel="noopener noreferrer" className="flex items-center p-5 md:p-6 bg-slate-100 dark:bg-slate-800/50 rounded-xl hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors border border-slate-300 dark:border-slate-700">
          <FileText className="w-8 h-8 md:w-10 md:h-10 text-red-600 dark:text-red-500 mr-4 md:mr-6 shrink-0" />
          <div>
            <h3 className="text-lg md:text-xl font-bold text-slate-900 dark:text-white">Affidavit (Form 13)</h3>
            <p className="text-xs md:text-sm text-slate-600 dark:text-slate-400 mt-1">Download the affidavit format</p>
          </div>
        </a>
        <a href="https://drive.google.com/file/d/1L6LHn-TrKPaIdNPFewGn-dK8WgnCNdgT/view?usp=drivesdk" target="_blank" rel="noopener noreferrer" className="flex items-center p-5 md:p-6 bg-slate-100 dark:bg-slate-800/50 rounded-xl hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors border border-slate-300 dark:border-slate-700">
          <FileText className="w-8 h-8 md:w-10 md:h-10 text-red-600 dark:text-red-500 mr-4 md:mr-6 shrink-0" />
          <div>
            <h3 className="text-lg md:text-xl font-bold text-slate-900 dark:text-white">Letter of disclaimer (Form 14)</h3>
            <p className="text-xs md:text-sm text-slate-600 dark:text-slate-400 mt-1">Download the letter of disclaimer format</p>
          </div>
        </a>
        <a href="https://drive.google.com/file/d/1IuWRPEQWNDH_WUplsspa5hOBn6CQ61lH/view?usp=drivesdk" target="_blank" rel="noopener noreferrer" className="flex items-center p-5 md:p-6 bg-slate-100 dark:bg-slate-800/50 rounded-xl hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors border border-slate-300 dark:border-slate-700">
          <FileText className="w-8 h-8 md:w-10 md:h-10 text-red-600 dark:text-red-500 mr-4 md:mr-6 shrink-0" />
          <div>
            <h3 className="text-lg md:text-xl font-bold text-slate-900 dark:text-white">Letter of indemnity (Form 15)</h3>
            <p className="text-xs md:text-sm text-slate-600 dark:text-slate-400 mt-1">Download the letter of indemnity format</p>
          </div>
        </a>
      </div>
    </SlideLayout>
  )
];
