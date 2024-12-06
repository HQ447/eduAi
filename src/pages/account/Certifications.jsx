import certificate from "../../assets/images/certificate template.png";

function Certifications() {
  return (
    <div className="min-h-[50vh] pt-10">
      <h1 className="text-center w-full -xsm:text-sm">
        No Certificate available Please Complete the remaining courses
      </h1>

      <div className="flex mt-6 -md:w-[70%] -sm:w-[80%] -xsm:w-[90%] gap-2 flex-col items-center justify-center mx-auto w-[50%]">
        <h1 className="text-lg">Your Certificate Template</h1>
        <img
          src={certificate}
          alt=""
          className="w-full shadow-lg border- border-2 border-[#c8c8c8] p-2"
        />
      </div>
    </div>
  );
}

export default Certifications;
