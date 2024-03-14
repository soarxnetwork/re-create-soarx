import Image from "next/image";

const ProfileDsa = () => {
  const itemsProfile = [
    {
      image: (
        <Image
          src="https://i.pinimg.com/474x/a7/2b/ab/a72bab07ea196a095b250a55c93e2b2a.jpg"
          width={72}
          height={72}
          alt="DSA Profile"
          className="rounded-full"
        />
      ),
      title: "SDE",
    },
    {
      image: (
        <Image
          src="https://i.pinimg.com/474x/a7/2b/ab/a72bab07ea196a095b250a55c93e2b2a.jpg"
          width={72}
          height={72}
          alt="DSA item 1"
          className="rounded-full"
        />
      ),
      title: "Insurance Dekho",
    },
    {
      image: (
        <Image
          src="https://i.pinimg.com/236x/f7/9d/6a/f79d6aeb0a33e520cff702e7b67d6550.jpg"
          width={72}
          height={72}
          alt="DSA item 2"
          className="rounded-full"
        />
      ),
      title: " ex-Amazon ",
    },
  ];
  return (
    <article className=" py-12">
      <div className="container mx-auto space-y-8 flex-col flex  items-center justify-center">
        <Image
          src="/images/Niket-Thakur.png"
          width={224}
          height={224}
          alt="DSA item 3"
          className="rounded-full"
        />
        <h3 className=" text-dsaPrimary text-3xl font-bold">TAUGHT BY</h3>
        <h4 className=" font-semibold text-2xl">Niket Thakur</h4>
        <div className=" grid grid-cols-3 gap-4 justify-between items-center w-full">
          {itemsProfile.map((item) => (
            <div key={item.title} className=" flex items-center flex-col gap-2">
              {item.image}
              <h4 className=" font-medium text-xl">{item.title}</h4>
            </div>
          ))}
        </div>
      </div>
    </article>
  );
};

export default ProfileDsa;
