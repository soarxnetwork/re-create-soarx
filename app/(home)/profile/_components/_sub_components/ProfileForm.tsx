import React, { useState } from "react";
// import Select from "react-select";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { userSchema, userSchemaProps } from "@/schema/user";
import { toast } from "react-toastify";
import { updateUser } from "@/actions/user";
import { useTransition } from "react";
import { Select, SelectSection, SelectItem } from "@nextui-org/select";

interface Props {
  handleShowForm: () => void;
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

const ProfileForm: React.FC<Props> = ({
  handleShowForm,
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
  const [isPending, startTransition] = useTransition();

  const [selectedCountry, setSelectedCountry] = useState<any>([]);
  const [selectedGender, setSelectedGender] = useState<any>([]);
  const [selectedProfession, setSelectedProfession] = useState<any>([]);

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

  const onSubmit = (data: userSchemaProps) => {
    data.gender = selectedGender.label || "";
    data.country = selectedCountry.label || "";
    data.profession = selectedProfession.label || "";
    if (data.gender == "" || data.country == "" || data.profession == "") {
      toast.error("All fields are required");
      return;
    }
    // console.log(data);
    startTransition(() => {
      updateUser(id, data)
        .then((data) => {
          if (data.error) return toast.error(data.error);
          // signOut()
          toast.success(data.message);
        })
        .catch((err) => {
          throw err;
        });
    });

    toast.success("Profile Updated Successfully");
    handleShowForm();
    // Handle form submission (e.g., send data to your backend)
  };
  
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

  return (
    <div className="z-[200] fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 overflow-auto">
      <div className="max-h-[90vh] fixed top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/4 max-w-[640px] w-full shadow bg-white dark:bg-black z-[200] overflow-y-auto">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex justify-between items-center py-4 px-6 border-b-2 border-[#D9D9D9]">
            <h1 className="text-[30px] font-semibold">Personal Details</h1>
            <button type="button" onClick={handleShowForm}>
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 19L19 1M1 1L19 19"
                  stroke="#636363"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </div>
          <div className="p-6 space-y-6">
            <div>
              <label>
                Full Name <span className="text-red-400">*</span>
                <input
                  type="text"
                  {...register("username")}
                  className="p-4 rounded-lg mt-2 w-full dark:bg-[#27272a] bg-[#f4f4f5]"
                  placeholder="Ex: Mayank Arora"
                />
                {errors.username && (
                  <p className="text-red-500">{errors.username.message}</p>
                )}
              </label>
            </div>
            <div>
              <label>
                Phone Number <span className="text-red-400">*</span>
                <input
                  type="tel"
                  {...register("phone")}
                  className="p-4 rounded-lg mt-2 w-full dark:bg-[#27272a] bg-[#f4f4f5]"
                  placeholder="Enter here...."
                />
                {errors.phone && (
                  <p className="text-red-500">{errors.phone.message}</p>
                )}
              </label>
            </div>
            <div className="flex  justify-between space-x-4">
              <label htmlFor="gender" className="w-1/2">
                Gender
                <Select
                  label="Select your Gender"
                  onChange={handleChangegender}
                  className="w-full"
                >
                  {userGender.map((gen, index) => (
                    <SelectItem key={index}>{gen.label}</SelectItem>
                  ))}
                </Select>


                {/* <Select
                  {...register("gender")}
                  value={selectedGender}
                  onChange={handleChangegender}
                  options={userGender}
                  placeholder="Choose your gender"
                />
                {errors.gender && (
                  <p className="text-red-500">{errors.gender.message}</p>
                )} */}

              </label>
              <label htmlFor="country" className="w-1/2">
                Country

                <Select
                  label="Select your Country"
                  onChange={handleChangeCountry}
                  className="w-full"
                >
                  {countries.map((co, index) => (
                    <SelectItem key={index}>{co.label}</SelectItem>
                  ))}
                </Select>


                {/* <Select
                  {...register("country")}
                  value={selectedCountry}
                  onChange={handleChange}
                  options={countries}
                  placeholder="Select a country"
                  className="dark:bg-gray-800 dark:text-white"
                />
                {errors.country && (
                  <p className="text-red-500">{errors.country.message}</p>
                )} */}
              </label>
            </div>

            <div>
              <label>
                College
                <input
                  {...register("college")}
                  type="string"
                  className="p-4 rounded-lg mt-2 w-full dark:bg-[#27272a] bg-[#f4f4f5]"
                  placeholder="Enter here...."
                />
                {errors.college && (
                  <p className="text-red-500">{errors.college.message}</p>
                )}
              </label>
            </div>

            <div className="grid grid-cols-2 items-center justify-evenly gap-4">
              <label>
                City
                <input
                  {...register("city")}
                  type="text"
                  className="p-3 rounded-lg  w-full dark:bg-[#27272a] bg-[#f4f4f5]"
                  placeholder="Ex: Bengaluru"
                />
                {errors.city && (
                  <p className="text-red-500">{errors.city.message}</p>
                )}
              </label>
              <label htmlFor="profession">
                Profession
                <Select
                  label="Select a Profession"
                  onChange={handleChangeProfession}
                  className="w-full"
                >
                  {Professions.map((pro, index) => (
                    <SelectItem key={index}>{pro.label}</SelectItem>
                  ))}
                </Select>

                {/* <Select
                  {...register("profession")}
                  value={selectedProfession}
                  onChange={handleChangeProfession}
                  options={Professions}
                  placeholder="Choose your Profession"
                  className="dark:bg-gray-800 dark:text-white"
                /> */}

                {errors.profession && (
                  <p className="text-red-500">{errors.profession.message}</p>
                )}
              </label>
            </div>
          </div>
          <div className="text-right px-6 py-4 bg-[#E3DDDD] dark:bg-gray-900">
            <button
              className="signInbut min-w-[90px] font-semibold mx-auto"
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

export default ProfileForm;
