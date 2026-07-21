with open('src/slides.tsx', 'r') as f:
    content = f.read()

new_slide = """  ,
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
];"""

content = content.replace("  }\n];", new_slide)

with open('src/slides.tsx', 'w') as f:
    f.write(content)
