import { CgProfile } from "react-icons/cg";
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
        <div className="flex bg-gray-100 hover:shadow-lg hover:scale-105 ease-in-out transition-all duration-300 hover:cursor-pointer dark:bg-gray-700 shadow-md rounded-lg p-8 mb-4">
          <div className="w-1/6 flex justify-center dark:text-white pt-4 text-5xl">
            <CgProfile />
          </div>
          <div className="w-5/6 ml-4">
            <h2 className="text-xl font-semibold">John Smith</h2>
            <p className="mt-2">
              Being a campus ambassador for this program has been an incredible
              experience. Not only did I gain valuable leadership skills, but I
              also had the opportunity to connect with like-minded individuals
              who share the same passion for making a difference. The support
              and guidance provided by the program team have been exceptional,
              and I am grateful for the opportunities it has opened up for me.
            </p>
          </div>
        </div>

        <div className="flex bg-gray-100 hover:shadow-lg hover:cursor-pointer dark:bg-gray-700 shadow-md rounded-lg p-8 mb-4 hover:scale-105 ease-in-out transition-all duration-300">
          <div className="w-1/6 flex justify-center dark:text-white pt-4 text-5xl">
            <CgProfile />
          </div>
          <div className="w-5/6 ml-4">
            <h2 className="text-xl font-semibold">Jane Doe</h2>
            <p className="mt-2">
              As a campus ambassador, I ve had the privilege of representing our
              program in various events and initiatives. Its been an enriching
              experience that has not only allowed me to develop my
              communication skills but also fostered connections with incredible
              individuals who share my passion for community engagement and
              leadership.
            </p>
          </div>
        </div>

        <div className="flex bg-gray-100 hover:shadow-lg hover:cursor-pointer dark:bg-gray-700 shadow-md rounded-lg p-8 mb-4 hover:scale-105 ease-in-out transition-all duration-300">
          <div className="w-1/6 flex justify-center dark:text-white pt-4 text-5xl">
            <CgProfile />
          </div>
          <div className="w-5/6 ml-4">
            <h2 className="text-xl font-semibold">Alex Johnson</h2>
            <p className="mt-2">
              Serving as a campus ambassador has been an incredible journey. It
              has allowed me to develop leadership skills, connect with amazing
              peers, and contribute to meaningful initiatives. I am grateful for
              the support and opportunities this program has provided, and I
              look forward to continuing to make a positive impact on campus.
            </p>
          </div>
        </div>

        <div className="flex bg-gray-100 hover:shadow-lg hover:cursor-pointer dark:bg-gray-700 shadow-md rounded-lg p-8 mb-4 hover:scale-105 ease-in-out transition-all duration-300">
          <div className="w-1/6 flex justify-center dark:text-white pt-4 text-5xl">
            <CgProfile />
          </div>
          <div className="w-5/6 ml-4">
            <h2 className="text-xl font-semibold">Alex Johnson</h2>
            <p className="mt-2">
              Serving as a campus ambassador has been an incredible journey. It
              has allowed me to develop leadership skills, connect with amazing
              peers, and contribute to meaningful initiatives. I am grateful for
              the support and opportunities this program has provided, and I
              look forward to continuing to make a positive impact on campus.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewOfAmbessadar;
