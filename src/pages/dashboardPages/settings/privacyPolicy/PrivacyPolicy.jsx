import React, { useState } from "react";

export default function PrivacyPolicy() {
  const [isEditing, setIsEditing] = useState(false);
  const [content, setContent] =
    useState(`Lorem ipsum dolor sit amet consectetur. Fringilla a cras vitae orci. Egestas duis id nisl sed ante congue scelerisque. Eleifend facilisis aliquet tempus morbi leo sagittis. Pellentesque odio amet turpis habitant. Imperdiet tincidunt nisl consectetur hendrerit accumsan vehicula imperdiet mattis. Neque a vitae diam pharetra duis habitasse convallis lectus pulvinar. Pharetra nunc morbi elementum nisl magna convallis arcu enim tortor. Cursus a sed tortor enim mi imperdiet massa donec mauris. Sem morbi morbi posuere faucibus. Cras risus ultrices duis pharetra at porttitor elementum sagittis elementum. Ut vitae blandit pulvinar fermentum in id sed. At pellentesque non semper eget egestas vulputate id volutpat quis. Dolor etiam sodales at elementum mattis nibh quam placerat ut. Suspendisse est adipiscing proin ut. Leo nisl bibendum donec ac non eget euismod suscipit. At ultrices nullam ipsum tellus. Non dictum orci at tortor convallis tortor suspendisse. Ac duis senectus arcu nullam in suspendisse vitae. Tellus interdum enim lorem vel morbi lectus.

Lorem ipsum dolor sit amet consectetur. Fringilla a cras vitae orci. Egestas duis id nisl sed ante congue scelerisque. Eleifend facilisis aliquet tempus morbi leo sagittis. Pellentesque odio amet turpis habitant. Imperdiet tincidunt nisl consectetur hendrerit accumsan vehicula imperdiet mattis. Neque a vitae diam pharetra duis habitasse convallis lectus pulvinar. Pharetra nunc morbi elementum nisl magna convallis arcu enim tortor. Cursus a sed tortor enim mi imperdiet massa donec mauris. Sem morbi morbi posuere faucibus. Cras risus ultrices duis pharetra at porttitor elementum sagittis elementum. Ut vitae blandit pulvinar fermentum in id sed. At pellentesque non semper eget egestas vulputate id volutpat quis. Dolor etiam sodales at elementum mattis nibh quam placerat ut. Suspendisse est adipiscing proin ut. Leo nisl bibendum donec ac non eget euismod suscipit. At ultrices nullam ipsum tellus. Non dictum orci at tortor convallis tortor suspendisse. Ac duis senectus arcu nullam in suspendisse vitae. Tellus interdum enim lorem vel morbi lectus.

Lorem ipsum dolor sit amet consectetur. Fringilla a cras vitae orci. Egestas duis id nisl sed ante congue scelerisque. Eleifend facilisis aliquet tempus morbi leo sagittis. Pellentesque odio amet turpis habitant. Imperdiet tincidunt nisl consectetur hendrerit accumsan vehicula imperdiet mattis. Neque a vitae diam pharetra duis habitasse convallis lectus pulvinar. Pharetra nunc morbi elementum nisl magna convallis arcu enim tortor. Cursus a sed tortor enim mi imperdiet massa donec mauris. Sem morbi morbi posuere faucibus. Cras risus ultrices duis pharetra at porttitor elementum sagittis elementum. Ut vitae blandit pulvinar fermentum in id sed. At pellentesque non semper eget egestas vulputate id volutpat quis. Dolor etiam sodales at elementum mattis nibh quam placerat ut. Suspendisse est adipiscing proin ut. Leo nisl bibendum donec ac non eget euismod suscipit. At ultrices nullam ipsum tellus. Non dictum orci at tortor convallis tortor suspendisse. Ac duis senectus arcu nullam in suspendisse vitae. Tellus interdum enim lorem vel morbi lectus.`);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleUpdate = () => {
    setIsEditing(false);
  };

  // Simple rich text editor using contentEditable
  const RichTextEditor = () => {
    const handleInput = (e) => {
      setContent(e.target.innerHTML);
    };

    const execCommand = (command, value = null) => {
      document.execCommand(command, false, value);
    };

    const ToolbarButton = ({ command, icon, value = null, title }) => (
      <button
        type="button"
        onClick={() => execCommand(command, value)}
        className="p-2 rounded hover:bg-gray-100 transition-colors"
        title={title}
      >
        {icon}
      </button>
    );

    return (
      <div className="border border-gray-300 rounded-lg overflow-hidden mt-5">
        {/* Toolbar */}
        <div className="flex items-center gap-1 p-3 bg-gray-50 border-b border-gray-300">
          <select
            className="text-sm border border-gray-300 rounded px-2 py-1 bg-white"
            onChange={(e) => execCommand("fontSize", e.target.value)}
          >
            <option value="1">12px</option>
            <option value="2">14px</option>
            <option value="3" selected>
              16px
            </option>
            <option value="4">18px</option>
            <option value="5">20px</option>
            <option value="6">24px</option>
          </select>

          <div className="w-px h-6 bg-gray-300 mx-2"></div>

          <ToolbarButton
            command="bold"
            title="Bold"
            icon={
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M14 12a4 4 0 0 0 0-8H6v8" />
                <path d="M15 20a4 4 0 0 0 0-8H6v8" />
              </svg>
            }
          />
          <ToolbarButton
            command="italic"
            title="Italic"
            icon={
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <line x1="19" y1="4" x2="10" y2="4" />
                <line x1="14" y1="20" x2="5" y2="20" />
                <line x1="15" y1="4" x2="9" y2="20" />
              </svg>
            }
          />
          <ToolbarButton
            command="underline"
            title="Underline"
            icon={
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M6 4v6a6 6 0 0 0 12 0V4" />
                <line x1="4" y1="20" x2="20" y2="20" />
              </svg>
            }
          />

          <div className="w-px h-6 bg-gray-300 mx-2"></div>

          <ToolbarButton
            command="justifyLeft"
            title="Align Left"
            icon={
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <line x1="21" y1="10" x2="3" y2="10" />
                <line x1="21" y1="6" x2="3" y2="6" />
                <line x1="11" y1="14" x2="3" y2="14" />
                <line x1="11" y1="18" x2="3" y2="18" />
              </svg>
            }
          />
          <ToolbarButton
            command="justifyCenter"
            title="Align Center"
            icon={
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <line x1="18" y1="10" x2="6" y2="10" />
                <line x1="21" y1="6" x2="3" y2="6" />
                <line x1="16" y1="14" x2="8" y2="14" />
                <line x1="16" y1="18" x2="8" y2="18" />
              </svg>
            }
          />
          <ToolbarButton
            command="justifyRight"
            title="Align Right"
            icon={
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <line x1="21" y1="10" x2="3" y2="10" />
                <line x1="21" y1="6" x2="3" y2="6" />
                <line x1="21" y1="14" x2="13" y2="14" />
                <line x1="21" y1="18" x2="13" y2="18" />
              </svg>
            }
          />

          <div className="w-px h-6 bg-gray-300 mx-2"></div>

          <ToolbarButton
            command="insertUnorderedList"
            title="Bullet List"
            icon={
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <line x1="8" y1="6" x2="21" y2="6" />
                <line x1="8" y1="12" x2="21" y2="12" />
                <line x1="8" y1="18" x2="21" y2="18" />
                <line x1="3" y1="6" x2="3.01" y2="6" />
                <line x1="3" y1="12" x2="3.01" y2="12" />
                <line x1="3" y1="18" x2="3.01" y2="18" />
              </svg>
            }
          />
          <button
            type="button"
            onClick={() => {
              const url = prompt("Enter link URL:");
              if (url) execCommand("createLink", url);
            }}
            className="p-2 rounded hover:bg-gray-100 transition-colors"
            title="Insert Link"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
              <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
            </svg>
          </button>
          <button
            type="button"
            onClick={() => {
              const url = prompt("Enter image URL:");
              if (url) execCommand("insertImage", url);
            }}
            className="p-2 rounded hover:bg-gray-100 transition-colors"
            title="Insert Image"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
              <circle cx="9" cy="9" r="2" />
              <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
            </svg>
          </button>
          <button
            type="button"
            onClick={() => {
              const color = prompt("Enter color (e.g., #ff0000, red):");
              if (color) execCommand("foreColor", color);
            }}
            className="p-2 rounded hover:bg-gray-100 transition-colors"
            title="Text Color"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
            </svg>
          </button>
        </div>

        {/* Editor */}
        <div className="p-4">
          <div
            contentEditable
            onInput={handleInput}
            dangerouslySetInnerHTML={{ __html: content }}
            className="w-full h-80 text-sm text-gray-700 leading-6 outline-none overflow-y-auto"
            style={{ minHeight: "320px" }}
          />
        </div>
      </div>
    );
  };

  if (isEditing) {
    return (
      <div className="w-full p-6 bg-white">
        <h1 className="text-2xl font-semibold text-gray-900 mb-6">
          Privacy & Policy Edit
        </h1>

        <RichTextEditor />

        <div className="flex justify-end mt-6">
          <button
            onClick={handleUpdate}
            className="px-8 py-3 bg-black text-white text-sm font-medium rounded-full hover:bg-gray-800 transition-colors"
          >
            Update
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full p-6 bg-white">
      <h1 className="text-2xl font-semibold text-gray-900 mb-6">
        Privacy & Policy
      </h1>

      <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm mt-5">
        <div
          className="text-sm text-gray-700 leading-6"
          dangerouslySetInnerHTML={{ __html: content }}
        />

        <div className="flex justify-end mt-8">
          <button
            onClick={handleEdit}
            className="px-8 py-3 bg-black text-white text-sm font-medium rounded-full hover:bg-gray-800 transition-colors"
          >
            Edit
          </button>
        </div>
      </div>
    </div>
  );
}
