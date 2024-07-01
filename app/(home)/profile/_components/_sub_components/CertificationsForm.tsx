import React  from 'react'

function CertificationsForm({ handleShowForm }: { handleShowForm: () => void}){
  return (
    <div className="z-[200] fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 overflow-auto">
    <div className=" max-h-[80vh] fixed top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/4 max-w-[640px] w-full shadow bg-white z-[200] overflow-y-auto">
      <div className="flex justify-between items-center py-4 px-6 border-b-2 border-[#D9D9D9]">
        <h1 className="text-[30px] font-semibold">Add Certifications</h1>
        <button className="" onClick={handleShowForm}>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 19L19 1M1 1L19 19" stroke="#636363" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </button>
      </div>
      <div className="p-6 space-y-6">
        <div>
          <label className="">
            Name of Certificate <span className="text-red-400">*</span>
            <input
              type="text"
              className="border border-[#837E7E] p-4 rounded-lg mt-2 w-full"
              placeholder="Ex: Maharshi Dayanand University"
            />
          </label>
        </div>
        <div>
          <label htmlFor="degree" className="">
          Name/Issuing organization <span className="text-red-400">*</span>
            <input
              type="text"
              id="degree"
              className="border border-[#837E7E] p-4 rounded-lg mt-2 w-full"
              placeholder="Ex: Bachelor's"
            />
          </label>
        </div>

        <div className="flex justify-between space-x-4 items-center">
          <label htmlFor="start-date" className="">
            Issue Date<span className="text-red-400">*</span>
            <input
              type="month"
              id="start-date"
              className="border border-[#837E7E] p-4 rounded-lg mt-2 w-full"
            />
          </label>
          
        </div>
        <div>
          <label htmlFor="grade" className="">
          Credential ID <span className="text-red-400">*</span>
            <input
              type="number"
              className="border border-[#837E7E] p-4 rounded-lg mt-2 w-full"
              placeholder="Enter here..."
            />
          </label>
        </div>
        <div>
          <label htmlFor="grade" className="">
          Credential URL <span className="text-red-400">*</span>
            <input
              type="number"
              className="border border-[#837E7E] p-4 rounded-lg mt-2 w-full"
              placeholder="Enter here..."
            />
          </label>
        </div>
      </div>
      <div className="text-right px-6 py-4 bg-[#E3DDDD]">
        <button className="signInbut min-w-[90px] font-semibold mx-auto">Save</button>
      </div>
    </div>
  </div>
  )
}

export default CertificationsForm