import React, { useEffect, useState } from "react";

const Categories = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false); // NEW state to check edit mode
  const [categoryName, setCategoryName] = useState("");
  const [categoryIcon, setCategoryIcon] = useState(null);
  const [editingCategoryId, setEditingCategoryId] = useState(null); // Track which category is being edited
  const [categories, setCategories] = useState([]);

  // Fetching Data
  useEffect(() => {
    fetch("/fakeAPIs/categories.json")
      .then((res) => res.json())
      .then((data) => setCategories([...data]));
  }, []);

  const handleAddCategory = () => {
    setIsModalOpen(true);
    setIsEditing(false);
    setCategoryName("");
    setCategoryIcon(null);
    setEditingCategoryId(null);
  };

  const handleEdit = (categoryId) => {
    const categoryToEdit = categories.find((cat) => cat.id === categoryId);
    if (categoryToEdit) {
      setIsEditing(true);
      setCategoryName(categoryToEdit.name);
      setCategoryIcon(categoryToEdit.image);
      setEditingCategoryId(categoryId);
      setIsModalOpen(true);
    }
  };

  const handleDelete = (categoryId) => {
    // console.log("Delete category:", categoryId);
    // Add your delete logic here
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setCategoryName("");
    setCategoryIcon(null);
    setEditingCategoryId(null);
  };

  const handleSubmitCategory = (e) => {
    e.preventDefault();
    if (isEditing) {
      // console.log("Updating category:", {
      //   id: editingCategoryId,
      //   name: categoryName,
      //   icon: categoryIcon,
      // });
      // Add your update logic here
    } else {
      // console.log("Adding category:", {
      //   name: categoryName,
      //   icon: categoryIcon,
      // });
      // Add your category creation logic here
    }
    handleCloseModal();
  };

  const handleIconUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setCategoryIcon(file);
    }
  };

  return (
    <div className="min-h-screen py-4 sm:py-6 lg:py-8">
      {/* Header */}
      <div className="flex justify-between items-center mb-6 sm:mb-8">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
          Categories
        </h1>
        <button
          onClick={handleAddCategory}
          className="bg-black text-white   px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors duration-200 text-sm sm:text-base"
        >
          Add Category
        </button>
      </div>

      {/* Categories Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-6">
        {categories.map((category) => (
          <div
            key={category?.id}
            className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 sm:p-6 hover:shadow-md transition-shadow duration-200 "
          >
            {/* Category Image Placeholder */}
            <div className="w-full aspect-square bg-gray-300 rounded-full mb-4 flex items-center justify-center overflow-clip ">
              {/* <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gray-400 rounded-full overflow-clip"> */}
              <img
                src={category?.image}
                alt="Category Image"
                className="w-full h-full object-cover"
              />
              {/* </div> */}
            </div>

            {/* Category Name */}
            <h3 className="text-center text-gray-800 font-medium mb-4 text-sm sm:text-base">
              {category?.name}
            </h3>

            {/* Action Buttons */}
            <div className="flex gap-2 sm:gap-3 justify-center items-center">
              <button
                onClick={() => handleEdit(category.id)}
                className="flex-1 bg-black text-white py-2 px-3 rounded-lg hover:bg-gray-800 transition-colors duration-200 text-xs sm:text-sm font-medium"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(category.id)}
                className="flex-1 bg-white text-gray-700 py-2 px-3 rounded-lg border border-gray-300 hover:bg-gray-50 transition-colors duration-200 text-xs sm:text-sm font-medium"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Empty State */}
      {categories.length === 0 && (
        <div className="text-center py-12 sm:py-16">
          <div className="w-24 h-24 bg-gray-300 rounded-full mx-auto mb-4"></div>
          <h3 className="text-lg sm:text-xl font-medium text-gray-900 mb-2">
            No categories yet
          </h3>
          <p className="text-gray-600 mb-6">
            Get started by adding your first category
          </p>
          <button
            onClick={handleAddCategory}
            className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors duration-200"
          >
            Add Category
          </button>
        </div>
      )}

      {/* Modal (Add/Edit) */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/40 bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-md mx-auto">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <div className="flex items-center gap-3">
                <button
                  onClick={handleCloseModal}
                  className="text-gray-600 hover:text-gray-800 transition-colors duration-200"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                </button>
                <h2 className="text-lg font-semibold text-gray-900">
                  {isEditing ? "Edit Category" : "Add New Category"}
                </h2>
              </div>
            </div>

            {/* Modal Form */}
            <form onSubmit={handleSubmitCategory} className="p-6">
              {/* Category Name Field */}
              <div className="mb-6">
                <label
                  htmlFor="categoryName"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Category Name
                </label>
                <input
                  type="text"
                  id="categoryName"
                  value={categoryName}
                  onChange={(e) => setCategoryName(e.target.value)}
                  placeholder="Enter category name"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                  required
                />
              </div>

              {/* Upload Category Icon Field */}
              <div className="mb-6">
                <label
                  htmlFor="categoryIcon"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Upload Category Icon
                </label>
                <div className="relative">
                  <input
                    type="file"
                    id="categoryIcon"
                    onChange={handleIconUpload}
                    accept="image/*"
                    className="hidden"
                  />
                  <label
                    htmlFor="categoryIcon"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-white cursor-pointer hover:bg-gray-50 transition-colors duration-200 flex items-center justify-between"
                  >
                    <span className="text-gray-500 text-sm">
                      {categoryIcon ? categoryIcon.name : "Upload Icon"}
                    </span>
                    <svg
                      className="w-5 h-5 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                      />
                    </svg>
                  </label>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition-colors duration-200 font-medium"
              >
                {isEditing ? "Update Category" : "Add Category"}
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Categories;
