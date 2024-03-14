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
      title: "Insur Dekho",
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
      title: "SDE ",
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
      title: "Amazon ",
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
      title: " ex-Paytm",
    },
  ];
  return (
    <article className=" py-12">
      <div className="container mx-auto space-y-8 flex-col flex  items-center justify-center">
        <div className="flex justify-evenly text-center gap-2">
          <div className="flex flex-col gap-2">
            <Image
              src="/images/Niket-Thakur.png"
              width={224}
              height={224}
              alt="DSA item 3"
              className="rounded-full"
            />
            <h4 className=" font-semibold text-2xl">Niket Thakur</h4>
          </div>
          <div className="flex flex-col gap-2">
            <Image
              src="/images/Deepak-Kumar.png"
              width={224}
              height={224}
              alt="DSA item 3"
              className="rounded-full"
            />
            <h4 className=" font-semibold text-2xl">Deepak Kumar</h4>
          </div>
        </div>
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
