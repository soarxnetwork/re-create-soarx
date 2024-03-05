import ImageLogo from "./ImageLogo";

export const Logo = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <ImageLogo />
      <div className="flex items-center justify-center gap-2 ">
        <h1 className="">
          SoarX <span className="text-muted-foreground">&#8506;</span>
        </h1>
        <p className="muted-text">Shoppy!</p>
      </div>
    </div>
  );
};
