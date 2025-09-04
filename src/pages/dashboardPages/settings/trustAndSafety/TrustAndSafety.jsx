import { ChevronLeft } from "lucide-react";
import ReadAndEdit from "../../../../components/readAndEdit/ReadAndEdit";
import { Link } from "react-router-dom";

const TrustAndSafety = () => {
  return (
    <>
      <Link
        to="/settings"
        className="flex justify-start items-center gap-4 mt-5"
      >
        <ChevronLeft />
        <h2 className="text-2xl font-medium gap-4">Trust & Safety Edit</h2>
      </Link>
      <ReadAndEdit
        title="Trust And Safety"
        fetchUrl="/fakeAPIs/trustAndSafety.json"
        updateUrl="/fakeAPIs/trustAndSafety.json"
      ></ReadAndEdit>
    </>
  );
};

export default TrustAndSafety;
