import { CgProfile } from "react-icons/cg";
import AmbassadorReviewCard from "./AmbassadorReviewCard";
import image from '../../../../public/images/Ali_nasir_pic.jpeg'

const ReviewOfAmbessadar = () => {
  return (
    <div className="w-full pt-10 ml-6 pr-16">
      <div className="flex flex-col items-center gap-y-7">
        <p className="text-3xl font-semibold">What our campus ambassador say</p>
        <p className="text-[#8919E4] font-medium cursor-pointer">
          {"Promote our organization and establish a strong campus presence by undertaking the following responsibilities:".split("").map((child, idx) => (
            <span className={"hoverText font-medium"} key={idx}>
              {child}
            </span>
          ))}
        </p>
      </div>

      <div className="w-full pt-14 grid grid-cols-1 lg:grid-cols-2 gap-10">
          
          <AmbassadorReviewCard name="Ali Nasir" imageURL={require('../../../../public/images/Ali_nasir_pic.jpeg').default} position="Chapter Lead, JMI" review="SoarX has been instrumental in our success. They provided passes for our students to visit Microsoft, arranged a speaker for an offline Master class on Data Structures and Algorithms (DSA), and significantly contributed to upskilling our team. Additionally, we have conducted several online events that have greatly benefited our community." />

          <AmbassadorReviewCard name="Riya Sonal Nazareth" imageURL={require('../../../../public/images/Riya_sonal_pic.jpeg').default} position="Chapter Lead, YIT" review="SoarX has been instrumental in helping me establish and grow our college chapter. From the very start, their guidance and resources empowered me to lay a strong foundation for our activities. One of the most enriching experiences was getting to attend the AI Developers Day at Microsoft Office Bengaluru organized by SoarX. " />

          <AmbassadorReviewCard name="Devesh Kumar" imageURL={require('../../../../public/images/Devash_pic.jpeg').default} position="Community Ambassador, JUET" review="Being a campus Ambassador for SoarX was a game-changer. It boosted my leadership skills and connected me with inspiring peers. I loved promoting a platform that truly helps students and seeing its positive impact firsthand. The support from the SoarX team made it a standout experience." />

          <AmbassadorReviewCard name="Asiya Arif" imageURL={require('../../../../public/images/Asiya_pic.jpeg').default} position="Chapter Lead, IIMT" review="SoarX has provided us with remarkable opportunities, such as visiting Microsoft and participating in skill-boosting challenges. These experiences have significantly enhanced my leadership abilities and teamwork skills. Overall, being a lead in SoarX has made me stronger and more confident in my abilities." />
          
      </div>
    </div>
  );
};

export default ReviewOfAmbessadar;
