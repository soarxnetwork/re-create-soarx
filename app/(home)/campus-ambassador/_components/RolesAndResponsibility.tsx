"use client";
import Image from "next/image";

export const data = [
  {
    title: "Promoting the Organization",
    desc: "Spread awareness about our organization and its mission through various channels such as social media, campus events, and word-of-mouth.",
    image: "/images/empowerment.png",
  },
  {
    title: "Organizing Events",
    desc: "Plan and execute events on campus to engage students and create a sense of community.",
    image: "/images/competence.png",
  },
  {
    title: "Recruting new member",
    desc: "Spread awareness about our organization and its mission through various channels such as social media, campus events, and word-of-mouth.",
    image: "/images/logical-thinking.png",
  },
  {
    title: "Representing the organization",
    desc: "Serve as the face of our organization on your campus and act as a liaison between the organization and the student community.",
    image: "/images/save-the-world.png",
  },
];

const RolesAndResponsibility = () => {
  return (
    <div className="w-full flex flex-col items-center pr-7">
      <div className="text-3xl font-medium">Roles and Responsibilities</div>
      <div>
        <section>
          <div className="custom-container">
            <div className="mt-16 grid divide-x divide-y divide-gray-100  overflow-hidden rounded-3xl border-2 border-gray-300 sm:grid-cols-2 lg:grid-cols-4 lg:divide-y-0 xl:grid-cols-4">
              {data?.map((e, index) => (
                <div
                  key={index}
                  className={`group cursor-pointer relative transition hover:z-[1]  hover:shadow-lg h-full hover:text-[#9241d4] hover:shadow-gray-600/40`}
                >
                  <div className="relative h-full border-l-2 space-y-2  py-12 p-4">
                    <Image
                      src={e?.image}
                      alt=""
                      sizes="100vw"
                      className="w-12"
                      width={512}
                      height={512}
                    />
                    <div className="space-y-2">
                      <h5 className="text-lg font-semibold   transition group-hover:text-[#9241d4]">
                        {e?.title}
                      </h5>
                      <p className="text-sm">{e?.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default RolesAndResponsibility;
