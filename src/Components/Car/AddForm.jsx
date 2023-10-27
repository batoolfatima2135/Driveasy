import React, { useState } from 'react';

const MyForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    price: '',
    color: '',
    model: '',
    image: null, // For file input
  });

  const handleChange = (e) => {
    const {
      name, value, type, files,
    } = e.target;
    if (type === 'file') {
      const selectedImage = files[0];
      setFormData({
        ...formData,
        image: selectedImage,
        imagePreview: URL.createObjectURL(selectedImage), // Create a preview URL
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  //   const handleImagePreview = () => {
  //     const { image } = formData;
  //     if (!image) return;
  //     const reader = new FileReader();
  //     reader.onloadend = () => {
  //       setFormData({
  //         ...formData,
  //         image: reader.result,
  //       });
  //     };
  //     reader.readAsDataURL(image);
  //   };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="min-h-screen flex items-center justify-center ml-[0.1em] md:max-w-md md:mx-auto max-w-[16rem]">
      <div>
        <h1 className="text-2xl font-bold text-center mb-5 text-[#a5d606]">
          Add Car
        </h1>
        <form
          onSubmit={handleSubmit}
          className="mx-auto p-4 space-y-4 shadow-lg shadow-gray-500 bg-white rounded-md lg:w-[34rem]"
        >
          <div className="rounded-full">
            {formData.imagePreview && (
              <img
                src={formData.imagePreview}
                alt="Preview"
                className="w-20 h-20 mx-auto rounded-full object-cover"
              />
            )}
          </div>
          <div>
            <label htmlFor="image" className="block text-gray-600">
              Image
              <input
                id="image"
                type="file"
                name="image"
                onChange={handleChange}
                className="w-full border-b outline-none rounded p-2"
              />
            </label>
          </div>
          <div>
            <label htmlFor="name" className="block text-gray-600">
              Name
              <input
                id="name"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full border-b outline-none rounded p-2"
              />
            </label>
          </div>
          <div>
            <label htmlFor="price" className="block text-gray-600">
              Price
              <input
                id="price"
                type="number"
                name="price"
                value={formData.price}
                onChange={handleChange}
                className="w-full border-b outline-none rounded p-2"
              />
            </label>
          </div>
          <div>
            <label htmlFor="color" className="block text-gray-600">
              Color
              <input
                id="color"
                type="text"
                name="color"
                value={formData.color}
                onChange={handleChange}
                className="w-full border-b outline-none rounded p-2"
              />
            </label>
          </div>
          <div>
            <label htmlFor="model" className="block text-gray-600">
              Model
              <input
                id="model"
                type="text"
                name="model"
                value={formData.model}
                onChange={handleChange}
                className="w-full border-b outline-none rounded p-2"
              />
            </label>
          </div>
          <div className="flex items-center justify-center">
            <button
              type="submit"
              className="bg-custom-green text-white rounded py-2 px-5 hover:bg-custom-green-light transition duration-300"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default MyForm;
