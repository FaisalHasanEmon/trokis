import { Link } from "react-router-dom";
import ReadAndEdit from "../../../../components/readAndEdit/ReadAndEdit";
import { ChevronLeft } from "lucide-react";
export default function PrivacyPolicy() {
  return (
    <>
      <Link
        to="/settings"
        className="flex justify-start items-center gap-4 mt-0 mb-5 lg:mt-5"
      >
        <ChevronLeft />
        <h2 className="text-2xl font-medium gap-4">Privacy & Policy Edit</h2>
      </Link>
      <ReadAndEdit
        title="Privacy & Policy"
        fetchUrl="/fakeAPIs/privacyAndPolicy.json"
        updateUrl="/fakeAPIs/privacyAndPolicy.json"
      ></ReadAndEdit>
    </>
  );
}
