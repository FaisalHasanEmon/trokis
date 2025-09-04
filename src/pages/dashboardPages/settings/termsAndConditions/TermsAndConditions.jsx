import { ChevronLeft } from "lucide-react";
import ReadAndEdit from "../../../../components/readAndEdit/ReadAndEdit";
import { Link } from "react-router-dom";

const TermsAndConditions = () => {
  return (
    <>
      <Link
        to="/settings"
        className="flex justify-start items-center gap-4 mt-0 mb-5 lg:mt-5"
      >
        <ChevronLeft />
        <h2 className="text-2xl font-medium gap-4">Terms & Conditions Edit</h2>
      </Link>
      <ReadAndEdit
        title="Terms & Conditions"
        fetchUrl="/fakeAPIs/termsAndConditions.json"
        updateUrl="/fakeAPIs/termsAndConditions.json"
      ></ReadAndEdit>
    </>
  );
};

export default TermsAndConditions;
