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
  <div className="max-h-[80vh] fixed top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/4 max-w-[640px] w-full shadow-lg bg-white dark:bg-gray-800 z-[200] overflow-y-auto rounded-lg">
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex justify-between items-center py-4 px-6 border-b-2 border-gray-200 dark:border-gray-700">
        <h1 className="text-[30px] font-semibold text-gray-900 dark:text-white">Add Certifications</h1>
        <button className="text-gray-900 dark:text-white" onClick={handleShowForm}>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 19L19 1M1 1L19 19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </button>
      </div>
      <div className="p-6 space-y-6">
        <div>
          <label className="block text-gray-900 dark:text-gray-200">
            Name of Certificate <span className="text-red-400">*</span>
            <input
              {...register('CertificateName')}
              type="text"
              className="border border-gray-300 dark:border-gray-600 p-4 rounded-lg mt-2 w-full bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
              placeholder="Enter here..."
            />
          </label>
        </div>
        <div>
          <label className="block text-gray-900 dark:text-gray-200">
            Name/Issuing organization <span className="text-red-400">*</span>
            <input
              {...register('IssuedBy')}
              type="text"
              className="border border-gray-300 dark:border-gray-600 p-4 rounded-lg mt-2 w-full bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
              placeholder="Enter here..."
            />
          </label>
        </div>
        <div className="flex flex-col sm:flex-row justify-between space-y-4 sm:space-y-0 sm:space-x-4 items-center">
          <label className="block text-gray-900 dark:text-gray-200 w-full">
            Issue Date<span className="text-red-400">*</span>
            <input
              {...register('IssueDate', { setValueAs: dateStringToDate })}
              type="month"
              className="border border-gray-300 dark:border-gray-600 p-4 rounded-lg mt-2 w-full bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
            />
          </label>
        </div>
        <div>
          <label className="block text-gray-900 dark:text-gray-200">
            Credential ID <span className="text-red-400">*</span>
            <input
              {...register('CredentialId')}
              type="text"
              className="border border-gray-300 dark:border-gray-600 p-4 rounded-lg mt-2 w-full bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
              placeholder="Enter here..."
            />
          </label>
        </div>
        <div>
          <label className="block text-gray-900 dark:text-gray-200">
            Credential URL <span className="text-red-400">*</span>
            <input
              {...register('CredentialUrl')}
              type="text"
              className="border border-gray-300 dark:border-gray-600 p-4 rounded-lg mt-2 w-full bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
              placeholder="Enter here..."
            />
          </label>
        </div>
      </div>
      <div className="text-right px-6 py-4 bg-gray-100 dark:bg-gray-900">
        <button className="text-white font-semibold py-2 px-4 rounded  disabled:bg-gray-400 signInbut" type='submit'>
          Save
        </button>
      </div>
    </form>
  </div>
</div>

  )
}

export default CertificationsForm