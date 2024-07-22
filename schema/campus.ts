import { user } from "@nextui-org/theme";
import { z } from "zod";

export const CampusLeaderSchema = z.object({
    userId : z.string(),
    WhyCapterLeader: z.string().min(30, { message: "Must be 30 words Long" }),
    LeaderShipExperience: z.string().min(40, { message: "Must be 40 words Long" }),
    StudentOrganizations: z.string().min(1, { message: "Required Field" }),
    StrategyForSoarx: z.string().min(30, { message: "Must be 40 words Long" }),
    CoreTeamSoarx: z.string().min(10, { message: "Must be 10 words Long" }), 
    QualitiesForTeam: z.string().min(10, { message: "Must be 10 words Long" }),
    WeekHoursForChapterLeader: z.string().min(1, { message: "Week Hours Required" }),
    OneYearCommitment: z.string().min(1, { message: "Required Field" }),
    HearAboutSoarx: z.string().min(2, { message: "Required Field" }),
    AdditionalInfo: z.string().optional()
  });


export const CampusAmbassadorSchema = z.object({
    userId : z.string(),
    WhyCampusAmbassador: z.string().min(30, { message: "Must be 30 words Long" }),
    EventOrganization: z.string().min(40, { message: "Must be 40 words Long" }),
    TechnicalSkills: z.string().min(1, { message: "Required Field" }),
    StudentOrganizations: z.string().min(1, { message: "Required Field" }),
    WeekHoursForAmbassador: z.string().min(1, { message: "Week Hours Required" }),
    SixMonthCommitment: z.string().min(1, { message: "Required Field" }),
    HearAboutSoarx: z.string().min(2, { message: "Required Field" }),
    AdditionalInfo: z.string().optional(),
})

export type CampusLeaderSchemaProps = z.infer<typeof CampusLeaderSchema>;
export type CampusAmbassadorSchemaProps = z.infer<typeof CampusAmbassadorSchema>;