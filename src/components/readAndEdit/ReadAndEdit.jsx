import React, { useState, useEffect } from "react";
import ReactQuill from "react-quill-new";
import "quill/dist/quill.snow.css";

const ReadAndEdit = ({ title, fetchUrl, updateUrl = "null" }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  // Fetch content from API
  useEffect(() => {
    const fetchContent = async () => {
      try {
        const response = await fetch(fetchUrl);
        const data = await response.json();
        setContent(data.content || "");
      } catch (error) {
        console.error("Failed to fetch content:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchContent();
  }, [fetchUrl]);

  // Quill toolbar options
  const modules = {
    toolbar: [
      [{ size: ["small", false, "large", "huge"] }],
      ["bold", "italic", "underline"],
      [{ list: "ordered" }, { list: "bullet" }],
      [{ align: [] }],
      ["link", "image"],
      [{ color: [] }, { background: [] }],
      ["clean"],
    ],
  };

  const formats = [
    "size",
    "bold",
    "italic",
    "underline",
    "list",
    "bullet",
    "align",
    "link",
    "image",
    "color",
    "background",
  ];

  // Handle update API
  const handleUpdate = async () => {
    setIsEditing(false);
    setSaving(false);
    setLoading(false);
    // For Actual API
    // setSaving(true);
    // try {
    //   const response = await fetch(updateUrl, {
    //     method: "PUT",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify({ content }),
    //   });
    //   if (!response.ok) throw new Error("Failed to update content");
    //   setIsEditing(false);
    // } catch (error) {
    //   console.error("Update failed:", error);
    // } finally {
    //   setSaving(false);
    // }
  };

  if (loading) {
    return <p className="text-gray-500">Loading {title}...</p>;
  }

  return (
    <div className="w-full lg:mt-5 min-h-[calc(100%-120px)] rounded-lg p-3 lg:p-6 bg-white ">
      {isEditing ? (
        <>
          <h1 className="text-2xl font-semibold text-gray-900 mb-6">
            {title} Edit
          </h1>

          {/* Quill Editor */}
          <div className="border  rounded-lg overflow-hidden h-[calc(100%-120px)] ">
            <ReactQuill
              theme="snow"
              value={content}
              onChange={setContent}
              modules={modules}
              formats={formats}
              className="h-full "
            />
          </div>

          <div className="flex justify-end mt-6">
            <button
              onClick={handleUpdate}
              disabled={saving}
              className={`px-8 py-3 text-white text-sm font-medium rounded-full transition-colors ${
                saving ? "bg-gray-500" : "bg-black hover:bg-gray-800"
              }`}
            >
              {saving ? "Updating..." : "Update"}
            </button>
          </div>
        </>
      ) : (
        <>
          <h1 className="text-2xl font-semibold text-gray-900 mb-6">{title}</h1>

          <div className="bg-white border border-gray-200 rounded-lg p-3 lg:p-6 shadow-sm mt-5">
            <div
              className="text-sm text-gray-700 leading-6"
              dangerouslySetInnerHTML={{ __html: content }}
            />

            <div className="flex justify-end mt-8">
              <button
                onClick={() => setIsEditing(true)}
                className="px-8 py-3 bg-black text-white text-sm font-medium rounded-full hover:bg-gray-800 transition-colors"
              >
                Edit
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default ReadAndEdit;
