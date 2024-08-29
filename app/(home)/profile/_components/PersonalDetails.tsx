import React, { useEffect, useState } from "react";
// import Select from "react-select";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { userSchema, userSchemaProps } from "@/schema/user";
import { toast } from "react-toastify";
import { updateUser } from "@/actions/user";
import { useTransition } from "react";
import { Select, SelectSection, SelectItem } from "@nextui-org/select";
import {Input} from "@nextui-org/input";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

interface Props {
  //   handleShowForm: () => void;
  email: string;
  id: string;
  username?: string;
  phone?: string | null;
  gender?: string | null;
  country?: string | null;
  city?: string | null;
  college?: string | null;
  profession?: string | null;
}

const PersonalDetails: React.FC<Props> = ({
  //   handleShowForm,
  email,
  id,
  gender = "",
  username = "",
  phone = "",
  city = "",
  country = "",
  college = "",
  profession = "",
}) => {
  const {data: session, update} = useSession(); 
  const [isPending, startTransition] = useTransition();
  const [selectedCountry, setSelectedCountry] = useState<any>([]);
  const [isReadOnly, setIsReadOnly] = useState(true);
  const [selectedGender, setSelectedGender] = useState<any>([]);
  const [selectedProfession, setSelectedProfession] = useState<any>([]);
  const [isEventPath, setIsEventPath] = useState<any>("");
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<userSchemaProps>({
    resolver: zodResolver(userSchema),
    defaultValues: {
      id: id,
      email: email,
      username: username || "",
      phone: phone || "",
      city: city || "",
      gender: gender || "",
      country: country || "",
      college: college || "",
      profession: profession || "",
    },
  });
  // console.log(session);

  useEffect(()=>{
    const getPath = sessionStorage.getItem("prevPath");
    const getPath2 = sessionStorage.getItem("currentPath");
    if(getPath){
      setIsEventPath(getPath);
      sessionStorage.removeItem("prevPath");
      sessionStorage.removeItem("currentPath");
    }
    
  }, [])


  const onSubmit = async (data: userSchemaProps) => {
    setIsReadOnly(true);
    data.gender = selectedGender.label || gender || "";
    data.country = selectedCountry.label || country || "";
    data.profession = selectedProfession.label || profession || "";
    if (data.gender == "" || data.country == "" || data.profession == "") {
      toast.error("All fields are required");
      return;
    }
    console.log(data);
    startTransition(() => {
      updateUser(id, data)
        .then((data) => {
          if (data.error) return toast.error(data.error);
          // signOut()
          toast.success(data.message);
          const res = data.res;
        })
        .catch((err) => {
          throw err;
        });
    });

    await update({
      ...session,
        user: {
          ...session?.user,
          username: data.username,
          phone: data.phone,
          city: data.city,
          college: data.college,
          country: data.country,
          gender: data.gender,
          profession: data.profession,
      }
    })
    // console.log(session)

    // if(isEventPath){
    //   router.push(isEventPath); 
    // }
    
    // console.log(session);
    // toast.success("Profile Updated Successfully");
    // handleShowForm();
    // Handle form submission (e.g., send data to your backend)
  };
  // console.log(isEventPath);

  const Professions = [
    { value: "Student", label: "Student" },
    { value: "Professional", label: "Professional" },
    { value: "Freelancer", label: "Freelancer" },
    { value: "Business Owner", label: "Business Owner" },
    { value: "Job Seeker", label: "Job Seeker" },
    { value: "Other", label: "Other" },
    { value: "Prefer not to say", label: "Prefer not to say" },
  ];

  const userGender = [
    { value: "Male", label: "Male" },
    { value: "Female", label: "Female" },
    { value: "Other", label: "Other" },
    { value: "Prefer not to say", label: "Prefer not to say" },
  ];

  const countries = [
    { value: "AF", label: "Afghanistan" },
    { value: "AL", label: "Albania" },
    { value: "DZ", label: "Algeria" },
    { value: "AS", label: "American Samoa" },
    { value: "AD", label: "Andorra" },
    { value: "AO", label: "Angola" },
    { value: "AI", label: "Anguilla" },
    { value: "AQ", label: "Antarctica" },
    { value: "AG", label: "Antigua and Barbuda" },
    { value: "AR", label: "Argentina" },
    { value: "AM", label: "Armenia" },
    { value: "AW", label: "Aruba" },
    { value: "AU", label: "Australia" },
    { value: "AT", label: "Austria" },
    { value: "AZ", label: "Azerbaijan" },
    { value: "BS", label: "Bahamas" },
    { value: "BH", label: "Bahrain" },
    { value: "BD", label: "Bangladesh" },
    { value: "BB", label: "Barbados" },
    { value: "BY", label: "Belarus" },
    { value: "BE", label: "Belgium" },
    { value: "BZ", label: "Belize" },
    { value: "BJ", label: "Benin" },
    { value: "BM", label: "Bermuda" },
    { value: "BT", label: "Bhutan" },
    { value: "BO", label: "Bolivia" },
    { value: "BA", label: "Bosnia and Herzegovina" },
    { value: "BW", label: "Botswana" },
    { value: "BR", label: "Brazil" },
    { value: "BN", label: "Brunei" },
    { value: "BG", label: "Bulgaria" },
    { value: "BF", label: "Burkina Faso" },
    { value: "BI", label: "Burundi" },
    { value: "CV", label: "Cabo Verde" },
    { value: "KH", label: "Cambodia" },
    { value: "CM", label: "Cameroon" },
    { value: "CA", label: "Canada" },
    { value: "KY", label: "Cayman Islands" },
    { value: "CF", label: "Central African Republic" },
    { value: "TD", label: "Chad" },
    { value: "CL", label: "Chile" },
    { value: "CN", label: "China" },
    { value: "CO", label: "Colombia" },
    { value: "KM", label: "Comoros" },
    { value: "CD", label: "Congo (DRC)" },
    { value: "CG", label: "Congo (Republic)" },
    { value: "CR", label: "Costa Rica" },
    { value: "HR", label: "Croatia" },
    { value: "CU", label: "Cuba" },
    { value: "CY", label: "Cyprus" },
    { value: "CZ", label: "Czech Republic" },
    { value: "DK", label: "Denmark" },
    { value: "DJ", label: "Djibouti" },
    { value: "DM", label: "Dominica" },
    { value: "DO", label: "Dominican Republic" },
    { value: "EC", label: "Ecuador" },
    { value: "EG", label: "Egypt" },
    { value: "SV", label: "El Salvador" },
    { value: "GQ", label: "Equatorial Guinea" },
    { value: "ER", label: "Eritrea" },
    { value: "EE", label: "Estonia" },
    { value: "SZ", label: "Eswatini" },
    { value: "ET", label: "Ethiopia" },
    { value: "FJ", label: "Fiji" },
    { value: "FI", label: "Finland" },
    { value: "FR", label: "France" },
    { value: "GA", label: "Gabon" },
    { value: "GM", label: "Gambia" },
    { value: "GE", label: "Georgia" },
    { value: "DE", label: "Germany" },
    { value: "GH", label: "Ghana" },
    { value: "GR", label: "Greece" },
    { value: "GD", label: "Grenada" },
    { value: "GU", label: "Guam" },
    { value: "GT", label: "Guatemala" },
    { value: "GN", label: "Guinea" },
    { value: "GW", label: "Guinea-Bissau" },
    { value: "GY", label: "Guyana" },
    { value: "HT", label: "Haiti" },
    { value: "HN", label: "Honduras" },
    { value: "HK", label: "Hong Kong" },
    { value: "HU", label: "Hungary" },
    { value: "IS", label: "Iceland" },
    { value: "IN", label: "India" },
    { value: "ID", label: "Indonesia" },
    { value: "IR", label: "Iran" },
    { value: "IQ", label: "Iraq" },
    { value: "IE", label: "Ireland" },
    { value: "IL", label: "Israel" },
    { value: "IT", label: "Italy" },
    { value: "JM", label: "Jamaica" },
    { value: "JP", label: "Japan" },
    { value: "JO", label: "Jordan" },
    { value: "KZ", label: "Kazakhstan" },
    { value: "KE", label: "Kenya" },
    { value: "KI", label: "Kiribati" },
    { value: "KW", label: "Kuwait" },
    { value: "KG", label: "Kyrgyzstan" },
    { value: "LA", label: "Laos" },
    { value: "LV", label: "Latvia" },
    { value: "LB", label: "Lebanon" },
    { value: "LS", label: "Lesotho" },
    { value: "LR", label: "Liberia" },
    { value: "LY", label: "Libya" },
    { value: "LI", label: "Liechtenstein" },
    { value: "LT", label: "Lithuania" },
    { value: "LU", label: "Luxembourg" },
    { value: "MO", label: "Macau" },
    { value: "MG", label: "Madagascar" },
    { value: "MW", label: "Malawi" },
    { value: "MY", label: "Malaysia" },
    { value: "MV", label: "Maldives" },
    { value: "ML", label: "Mali" },
    { value: "MT", label: "Malta" },
    { value: "MH", label: "Marshall Islands" },
    { value: "MR", label: "Mauritania" },
    { value: "MU", label: "Mauritius" },
    { value: "MX", label: "Mexico" },
    { value: "FM", label: "Micronesia" },
    { value: "MD", label: "Moldova" },
    { value: "MC", label: "Monaco" },
    { value: "MN", label: "Mongolia" },
    { value: "ME", label: "Montenegro" },
    { value: "MA", label: "Morocco" },
    { value: "MZ", label: "Mozambique" },
    { value: "MM", label: "Myanmar" },
    { value: "NA", label: "Namibia" },
    { value: "NR", label: "Nauru" },
    { value: "NP", label: "Nepal" },
    { value: "NL", label: "Netherlands" },
    { value: "NZ", label: "New Zealand" },
    { value: "NI", label: "Nicaragua" },
    { value: "NE", label: "Niger" },
    { value: "NG", label: "Nigeria" },
    { value: "KP", label: "North Korea" },
    { value: "MK", label: "North Macedonia" },
    { value: "NO", label: "Norway" },
    { value: "OM", label: "Oman" },
    { value: "PK", label: "Pakistan" },
    { value: "PW", label: "Palau" },
    { value: "PS", label: "Palestine" },
    { value: "PA", label: "Panama" },
    { value: "PG", label: "Papua New Guinea" },
    { value: "PY", label: "Paraguay" },
    { value: "PE", label: "Peru" },
    { value: "PH", label: "Philippines" },
    { value: "PL", label: "Poland" },
    { value: "PT", label: "Portugal" },
    { value: "PR", label: "Puerto Rico" },
    { value: "QA", label: "Qatar" },
    { value: "RO", label: "Romania" },
    { value: "RU", label: "Russia" },
    { value: "RW", label: "Rwanda" },
    { value: "KN", label: "Saint Kitts and Nevis" },
    { value: "LC", label: "Saint Lucia" },
    { value: "VC", label: "Saint Vincent and the Grenadines" },
    { value: "WS", label: "Samoa" },
    { value: "SM", label: "San Marino" },
    { value: "ST", label: "Sao Tome and Principe" },
    { value: "SA", label: "Saudi Arabia" },
    { value: "SN", label: "Senegal" },
    { value: "RS", label: "Serbia" },
    { value: "SC", label: "Seychelles" },
    { value: "SL", label: "Sierra Leone" },
    { value: "SG", label: "Singapore" },
    { value: "SK", label: "Slovakia" },
    { value: "SI", label: "Slovenia" },
    { value: "SB", label: "Solomon Islands" },
    { value: "SO", label: "Somalia" },
    { value: "ZA", label: "South Africa" },
    { value: "KR", label: "South Korea" },
    { value: "SS", label: "South Sudan" },
    { value: "ES", label: "Spain" },
    { value: "LK", label: "Sri Lanka" },
    { value: "SD", label: "Sudan" },
    { value: "SR", label: "Suriname" },
    { value: "SE", label: "Sweden" },
    { value: "CH", label: "Switzerland" },
    { value: "SY", label: "Syria" },
    { value: "TW", label: "Taiwan" },
    { value: "TJ", label: "Tajikistan" },
    { value: "TZ", label: "Tanzania" },
    { value: "TH", label: "Thailand" },
    { value: "TL", label: "Timor-Leste" },
    { value: "TG", label: "Togo" },
    { value: "TO", label: "Tonga" },
    { value: "TT", label: "Trinidad and Tobago" },
    { value: "TN", label: "Tunisia" },
    { value: "TR", label: "Turkey" },
    { value: "TM", label: "Turkmenistan" },
    { value: "TV", label: "Tuvalu" },
    { value: "UG", label: "Uganda" },
    { value: "UA", label: "Ukraine" },
    { value: "AE", label: "United Arab Emirates" },
    { value: "GB", label: "United Kingdom" },
    { value: "US", label: "United States" },
    { value: "UY", label: "Uruguay" },
    { value: "UZ", label: "Uzbekistan" },
    { value: "VU", label: "Vanuatu" },
    { value: "VA", label: "Vatican City" },
    { value: "VE", label: "Venezuela" },
    { value: "VN", label: "Vietnam" },
    { value: "YE", label: "Yemen" },
    { value: "ZM", label: "Zambia" },
    { value: "ZW", label: "Zimbabwe" },
  ];

  const handleChangeCountry = (selectedOption: any) => {
    // console.log(selectedOption.target.value);
    setSelectedCountry(countries[selectedOption.target.value]);
  };

  const handleChangegender = (selectedOption: any) => {
    // console.log(selectedOption.target.value);
    setSelectedGender(userGender[selectedOption.target.value]);
  };

  const handleChangeProfession = (selectedOption: any) => {
    // console.log(selectedOption.target.value);
    setSelectedProfession(Professions[selectedOption.target.value]);
  };

  // console.log(session)

  return (
    <div className="w-full  px-4 md:px-36">
      <div className="w-full p-6  rounded-lg pb-16 shadow-xl dark:shadow-gray-900">
        <form onSubmit={handleSubmit(onSubmit)}>
          <h1 className="text-2xl font-semibold dark:text-white mb-6 text-black">
            Personal Details
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <section className="mb-6">
              <label className="block">
                <span className="text-lg font-medium dark:text-white text-black">
                  Full Name <span className="text-red-400">*</span>
                </span>
                <Input
                size="lg"
                  type="text"
                  isDisabled={isReadOnly}
                  {...register("username")}
                  className={`rounded-lg mt-2  w-full   ${
                    isReadOnly
                      ? "outline-none dark:text-gray-600 text-gray-500  dark:bg-[rgba(0, 0, 0, 0)] border-0 border-gray-600 dark:bg-[#27272a] bg-gray-100"
                      : "dark:bg-[#27272a] border border-gray-300 bg-[#f4f4f5] focus:outline focus:ring-2 focus:ring-blue-500"
                  }`}
                  placeholder="Ex: Mayank Arora"
                />
                {errors.username && (
                  <p className="text-red-500 mt-1">{errors.username.message}</p>
                )}
              </label>
            </section>

            <section className="mb-6">
              <label className="block">
                <span className="text-lg font-medium dark:text-white text-black">
                  Phone Number <span className="text-red-400">*</span>
                </span>
                <Input
                  type="tel"
                  size="lg"
                  isDisabled={isReadOnly}
                  {...register("phone")}
                  className={`rounded-lg mt-2 w-full   ${
                    isReadOnly
                      ? "outline-none dark:text-gray-600 text-gray-500  dark:bg-[rgba(0, 0, 0, 0)] border-0 border-gray-600 dark:bg-[#27272a] bg-gray-100"
                      : "dark:bg-[#27272a] border border-gray-300 bg-[#f4f4f5] focus:outline focus:ring-2 focus:ring-blue-500"
                  }`}
                  placeholder="Enter your phone number"
                />
                {errors.phone && (
                  <p className="text-red-500 mt-1">{errors.phone.message}</p>
                )}
              </label>
            </section>

            <section className="mb-6">
              <label className="block">
                <span className="text-lg font-medium dark:text-white text-black">
                  College/Organization <span className="text-red-400">*</span>
                </span>
                <Input
                  isDisabled={isReadOnly}
                  {...register("college")}
                  type="text"
                  size="lg"
                  className={`rounded-lg mt-2 w-full   ${
                    isReadOnly
                      ? "outline-none dark:text-gray-600 text-gray-500  dark:bg-[rgba(0, 0, 0, 0)] border-0 border-gray-600 dark:bg-[#27272a] bg-gray-100"
                      : "dark:bg-[#27272a] border border-gray-300 bg-[#f4f4f5] focus:outline focus:ring-2 focus:ring-blue-500"
                  }`}
                  placeholder="Enter your college name"
                />
                {errors.college && (
                  <p className="text-red-500 mt-1">{errors.college.message}</p>
                )}
              </label>
            </section>

            <section className="mb-6">
              <label className="block">
                <span className="text-lg font-medium dark:text-white text-black">
                  City <span className="text-red-400">*</span>
                </span>
                <Input
                  isDisabled={isReadOnly}
                  size="lg"
                  {...register("city")}
                  type="text"
                  className={`rounded-lg mt-2 w-full   ${
                    isReadOnly
                      ? "outline-none dark:text-gray-600 text-gray-500  dark:bg-[rgba(0, 0, 0, 0)] border-0 border-gray-600 dark:bg-[#27272a] bg-gray-100"
                      : "dark:bg-[#27272a] border border-gray-300 bg-[#f4f4f5] focus:outline focus:ring-2 focus:ring-blue-500"
                  }`}
                  placeholder="Ex: Bengaluru"
                />
                {errors.city && (
                  <p className="text-red-500 mt-1">{errors.city.message}</p>
                )}
              </label>
            </section>

            <section className="mb-6">
              <label className="block">
                <span className="text-lg font-medium dark:text-white text-black">
                  Gender <span className="text-red-400">*</span>
                </span>
                <Select
                  //   readOnly={isReadOnly}
                  isDisabled={isReadOnly}
                  label={gender || "Select your Gender"}
                  onChange={handleChangegender}
                  className={`rounded-lg mt-2 w-full   ${
                    isReadOnly
                      ? "outline-none dark:text-gray-600 text-gray-500  dark:bg-[rgba(0, 0, 0, 0)] border-0 border-gray-600 dark:bg-[#27272a] bg-gray-100"
                      : "dark:bg-[#27272a] border border-gray-300 bg-[#f4f4f5] focus:outline focus:ring-2 focus:ring-blue-500"
                  }`}
                >
                  {userGender.map((gen, index) => (
                    <SelectItem key={index}>{gen.label}</SelectItem>
                  ))}
                </Select>
              </label>
            </section>

            <section className="mb-6">
              <label className="block">
                <span className="text-lg font-medium dark:text-white text-black">
                  Country <span className="text-red-400">*</span>
                </span>
                <Select
                  isDisabled={isReadOnly}
                  label={country || "Select your Country"}
                  onChange={handleChangeCountry}
                  className={`rounded-lg mt-2 w-full   ${
                    isReadOnly
                      ? "outline-none dark:text-gray-600 text-gray-500  dark:bg-[rgba(0, 0, 0, 0)] border-0 border-gray-600 dark:bg-[#27272a] bg-gray-100"
                      : "dark:bg-[#27272a] border border-gray-300 bg-[#f4f4f5] focus:outline focus:ring-2 focus:ring-blue-500"
                  }`}
                >
                  {countries.map((co, index) => (
                    <SelectItem key={index}>{co.label}</SelectItem>
                  ))}
                </Select>
              </label>
            </section>

            <section className="mb-6">
              <label className="block">
                <span className="text-lg font-medium dark:text-white text-black">
                  Profession <span className="text-red-400">*</span>
                </span>
                <Select
                  isDisabled={isReadOnly}
                  label={profession || "Select a Profession"}
                  onChange={handleChangeProfession}
                  className={`rounded-lg mt-2 w-full   ${
                    isReadOnly
                      ? "outline-none dark:text-gray-600 text-gray-500  dark:bg-[rgba(0, 0, 0, 0)] border-0 border-gray-600 dark:bg-[#27272a] bg-gray-100"
                      : "dark:bg-[#27272a] border border-gray-300 bg-[#f4f4f5] focus:outline focus:ring-2 focus:ring-blue-500"
                  }`}
                >
                  {Professions.map((pro, index) => (
                    <SelectItem key={index}>{pro.label}</SelectItem>
                  ))}
                </Select>
                {errors.profession && (
                  <p className="text-red-500 mt-1">
                    {errors.profession.message}
                  </p>
                )}
              </label>
            </section>

            <section className="md:mt-6 md:ml-3 mb-8 md:mb-0">
              <p className="block">
                <h2 className="text-lg font-medium text-gray-600 mt-2">
                  Email ID{" "} <span className="text-red-400">*</span>
                  <span className="text-gray-400">(Private to you)</span>
                </h2>
                {/* <h3>{session?.user.emailVerified ? "Verified" : null}</h3> */}
              </p>
              <h3 className="pt-2">{email}</h3>
            </section>
          </div>

          <div className="mt-6">
            <button
              className={`min-w-[90px] font-semibold py-2 px-4 rounded-lg text-white focus:outline-none focus:ring-2 transition duration-300 bg-purple-700 hover:bg-purple-900 ${isReadOnly == false ? "hidden" : "block"}`}
              type="button"
              onClick={() => setIsReadOnly(!isReadOnly)}
            >
              Edit
            </button>

            <button
              className={`min-w-[90px] font-semibold py-2 px-4 rounded-lg text-white focus:outline-none focus:ring-2 transition duration-300 signInbut ${isReadOnly == true ? "hidden" : "block"}`}
              disabled={isPending}
              type="submit"
              onClick={() => {
                console.log("Submit button clicked");
                console.log("Form errors:", errors);
              }}
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PersonalDetails;
