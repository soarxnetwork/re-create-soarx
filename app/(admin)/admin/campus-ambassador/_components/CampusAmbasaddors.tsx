import { formatDate } from "@/utils/formatDate";
import { CampusAmbassador } from "@prisma/client";
import ActionCampusAmbassador from "./ActionCampusAmbassador";

const CampusAmbasaddors = ({
  fullname,
  collegeEmail,
  collegeLocation,
  collegeName,
  createdAt,
  graduationYear,
  id,
  // inCodingClub,
  // stream,
  // strenghtStem,
}: CampusAmbassador) => {
  return (
    <div className="grid grid-cols-2">
      <div>
        <p>{fullname}</p>
        <p>{collegeEmail}</p>
        <p>{collegeLocation}</p>
        <p>{collegeName}</p>
        <p>{graduationYear}</p>
      </div>
      <div>
        {/* <p>{inCodingClub}</p>
        <p>{stream}</p>
        <p>{strenghtStem}</p> */}
        <p>{formatDate(createdAt)}</p>
        <ActionCampusAmbassador id={id} />
      </div>
    </div>
  );
};

export default CampusAmbasaddors;
