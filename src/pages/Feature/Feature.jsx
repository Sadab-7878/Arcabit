import s1 from "../../assets/s1.png";
import s2 from "../../assets/s2.png";
import s3 from "../../assets/s3.png";
import s4 from "../../assets/s4.png";
import s5 from "../../assets/s5.png";
import s6 from "../../assets/s6.png";
import s7 from "../../assets/s7.png";
import s8 from "../../assets/s8.png";
import s9 from "../../assets/s9.png";
import s10 from "../../assets/s10.png";
import s11 from "../../assets/s11.png";
import s12 from "../../assets/s12.png";

const Feature = () => {
  const elements = [
    {
      category_picture: s1,
      category_title: "File protection",
      category_description:
        "It monitors all files used in the system in real time, both those opened, modified and created by the user and those processed by applications working in the background. Intelligent scanning mechanisms ensure optimal use of system resources and adjustment of the load to the user's needs.",
    },

    {
      category_picture: s2,
      category_title: "Mail protection",
      category_description:
        "It checks email before it even appears in the inbox or is sent. Behavioral heuristics focused on the characteristics of email-borne threats keep even the newest, unanalyzed threats out of the system.",
    },

    {
      category_picture: s3,
      category_title: "Spam filter",
      category_description:
        "An intelligent and autonomous filter marks unwanted messages, allowing users to create simple rules to clear their inbox of junk messages.",
    },

    {
      category_picture: s4,
      category_title: "Browser protection",
      category_description:
        "It controls all content and objects processed during web browsing. Thanks to the use of multi-threaded scanning mechanisms, it does not affect the speed of web pages and file transfers.",
    },

    {
      category_picture: s5,
      category_title: "Firewall",
      category_description:
        "Barrier to all types of network attacks. Allows you to create rules for access to the network and to the computer for selected applications and network protocols.",
    },

    {
      category_picture: s6,
      category_title: "Access Control/ Parental Control",
      category_description:
        "It allows you to define rules for accessing websites on the Internet, both based on their addresses and content. It offers a set of ready-made rules that block access to undesirable content. It allows you to track the history of pages viewed and block or allow them currently. It works based on settings defined individually for each user of the system.",
    },

    {
      category_picture: s7,
      category_title: "Safe Browser",
      category_description:
        "It ensures a high level of security when using Internet resources, especially during banking, payment and sensitive data operations. It prevents situations in which sensitive data could fall into the wrong hands.",
    },

    {
      category_picture: s8,
      category_title: "USB Device Control",
      category_description:
        "Controls the flow of data carried out via USB devices (drives, network cards, printers). Allows you to block access to selected devices depending on which user is logged in.",
    },

    {
      category_picture: s9,
      category_title: "Encrypted Disks - Secure Storage for Your Data",
      category_description:
        "If you have particularly important data and want to store it safely without fear of unauthorized access, then encrypted disks are the tool for you. This module allows you to create many virtual, encrypted drives of selected capacity protected by a password against unauthorized access.",
    },

    {
      category_picture: s10,
      category_title: "Cloud protection",
      category_description:
        "It multiplies the effectiveness of protection thanks to access to constantly updated Arcabit cloud resources. It allows for the examination of the reputation of launched processes and analysis of threats based on knowledge collected in the cloud.",
    },

    {
      category_picture: s11,
      category_title: "Registry protection",
      category_description:
        "Controls changes in areas of the registry that are important for system operation. Detects threats that install themselves in the system registry.",
    },

    {
      category_picture: s12,
      category_title: "Roundkick EDR",
      category_description:
        "It uses the potential of all the protective mechanisms of the Arcabit package and analyzes the behavior of applications in various areas of their interaction with the system and the network. It allows for a response to new threats within a few seconds.",
    },
  ];
  return (
    <>
      <div className="mb-32">
        {/* 1 */}
        <div>
          <header>
            <p className="haha font-[400] text-[38px] text-center  my-20">
              The main protective functions of the package
            </p>
          </header>
        </div>

        {/* 2 */}

        <div className="flex flex-wrap justify-center gap-10">
          {elements.map((element, i) => (
            <div
              key={i}
              className="group h-[650px] w-80   [perspective:1000px] transition-all duration-300 "
            >
              <div className="relative h-full w-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:-rotate-y-180">
                <div className="absolute inset-0 flex items-center justify-start  bg-[#F9F9F9] text-white  [backface-visibility:hidden] p-10 ">
                  <div className="transition-transform duration-300 ease-out group-hover:-translate-x-10">
                    <img
                      src={element.category_picture}
                      alt={element.category_title}
                      className="h-20 w-20"
                    />
                    <p className="block mt-5 text-[23px] text-black  haha  font-[700]">
                      {element.category_title}
                    </p>
                  </div>
                </div>

                <div className="absolute inset-0 flex items-center justify-center bg-[#E41E25] text-white  [backface-visibility:hidden] [transform:rotateY(180deg)] p-4">
                  <div
                    className="text-2xl 
                     transition-all duration-500 ease-out
                     group-hover:translate-x-0 group-hover:opacity-100
                     translate-x-full opacity-0 delay-200 mx-2"
                  >
                    <span className="text-[13px] font-[400] haha  text-justify text-gray-300">
                      {element.category_description}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Feature;
