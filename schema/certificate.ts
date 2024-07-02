import { user } from '@nextui-org/react';
import { Certificate } from 'crypto';
import {z } from 'zod';

export const certificateSchema = z.object({
  id : z.string().optional(),
  userId: z.string(),
  CertificateName: z.string(),
  IssuedBy : z.string(),
    IssueDate: z.date(),
    CredentialId : z.string(),
    CredentialUrl: z.string(),
});


export type certificateSchemaProps = z.infer<typeof certificateSchema>;