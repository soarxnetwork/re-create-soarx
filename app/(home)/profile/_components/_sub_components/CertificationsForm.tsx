import React  from 'react'
import { useTransition } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { certificateSchema , certificateSchemaProps } from '@/schema/certificate';
import { createUserCertificate , updateUserCertificate } from '@/actions/certificate';
import { toast } from 'react-toastify';

interface Props{
  handleShowForm: () => void;
  userId: string;
  certificateId?: string;
  CertificateName?: string;
  IssuedBy?: string;
  IssueDate?: Date;
  CredentialId?: string;
  CredentialUrl?: string;
}





function CertificationsForm({
  handleShowForm,
  userId,
  certificateId = '',
  CertificateName = '',
  IssuedBy = '',
  IssueDate = new Date(),
  CredentialId = '',
  CredentialUrl = '',
}: Props){

  const [isPending, startTransition] = useTransition();
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(certificateSchema),
    defaultValues: {
      userId: userId,
      CertificateName: CertificateName || '',
      IssuedBy: IssuedBy || '',
      IssueDate: IssueDate || new Date(),
      CredentialId: CredentialId || '',
      CredentialUrl: CredentialUrl || '',
    },
  });

  const dateStringToDate = (value: string): Date | null => {
    if (!value) return null;
    const date = new Date(value + "-01");
    return isNaN(date.getTime()) ? null : date;
  };

  const onSubmit = (data: certificateSchemaProps) => {
    if (certificateId) {
      startTransition(() => {
        const formattedData = {
          ...data,
        };
        updateUserCertificate(certificateId, formattedData)
          .then((response) => {
            if (!response) return toast.error('Something went wrong, please try again');
            toast.success('Certificate details updated successfully!');
            handleShowForm();
          })
          .catch((error) => {
            toast.error('Something went wrong, please try again');
          });
      });
    } else {
      startTransition(() => {
        const formattedData = {
          ...data,
        };
        createUserCertificate(formattedData)
          .then((response) => {
            if (!response) return toast.error('Something went wrong, please try again');
            toast.success('Certificate details added successfully!');
            handleShowForm();
          })
          .catch((error) => {
            toast.error('Something went wrong, please try again');
          });
      });
    }
  }



  return (
    <div className="z-[200] fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 overflow-auto">
    <div className=" max-h-[80vh] fixed top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/4 max-w-[640px] w-full shadow bg-white z-[200] overflow-y-auto">
      <form onSubmit={handleSubmit(onSubmit)} >
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
              {...register('CertificateName')}
              type="text"
              className="border border-[#837E7E] p-4 rounded-lg mt-2 w-full"
              placeholder="Enter here..."
            />
          </label>
        </div>
        <div>
          <label  className="">
          Name/Issuing organization <span className="text-red-400">*</span>
            <input
              {...register('IssuedBy')}
              type="text"
              className="border border-[#837E7E] p-4 rounded-lg mt-2 w-full"
              placeholder="Enter here..."
            />
          </label>
        </div>

        <div className="flex justify-between space-x-4 items-center">
          <label className="">
            Issue Date<span className="text-red-400">*</span>
            <input
              {...register('IssueDate' , {setValueAs: dateStringToDate})}
              type="month"
              className="border border-[#837E7E] p-4 rounded-lg mt-2 w-full"
            />
          </label>
          
        </div>
        <div>
          <label className="">
          Credential ID <span className="text-red-400">*</span>
            <input
              {...register('CredentialId')}
              type="text"
              className="border border-[#837E7E] p-4 rounded-lg mt-2 w-full"
              placeholder="Enter here..."
            />
          </label>
        </div>
        <div>
          <label className="">
          Credential URL <span className="text-red-400">*</span>
            <input
              {...register('CredentialUrl')}
              type="text"
              className="border border-[#837E7E] p-4 rounded-lg mt-2 w-full"
              placeholder="Enter here..."
            />
          </label>
        </div>
      </div>
      <div className="text-right px-6 py-4 bg-[#E3DDDD]">
        <button className="signInbut min-w-[90px] font-semibold mx-auto" type='submit'>Save</button>
      </div>
      </form>
    </div>
  </div>
  )
}

export default CertificationsForm