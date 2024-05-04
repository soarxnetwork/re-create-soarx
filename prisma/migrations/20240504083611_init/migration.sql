-- AlterTable
ALTER TABLE "User" ADD COLUMN     "city" STRING;
ALTER TABLE "User" ADD COLUMN     "collegeName" STRING;
ALTER TABLE "User" ADD COLUMN     "degree" STRING;
ALTER TABLE "User" ADD COLUMN     "dob" STRING;
ALTER TABLE "User" ADD COLUMN     "name" STRING;
ALTER TABLE "User" ADD COLUMN     "skill" STRING;
ALTER TABLE "User" ADD COLUMN     "stream" STRING;
ALTER TABLE "User" ADD COLUMN     "yearOfPassing" STRING;

-- CreateTable
CREATE TABLE "Registration" (
    "id" STRING NOT NULL,
    "userId" STRING NOT NULL,
    "eventId" STRING NOT NULL,
    "registrationDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Registration_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Registration" ADD CONSTRAINT "Registration_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Registration" ADD CONSTRAINT "Registration_eventId_fkey" FOREIGN KEY ("eventId") REFERENCES "Event"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
