import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ColorRing } from 'react-loader-spinner';
import { addCar } from '../../Redux/Car/carAddSlice';

const MyForm = () => {
  const status = useSelector((state) => state.addCar.message);
  const loading = useSelector((state) => state.addCar.loading);
  const dispatch = useDispatch();

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
        imagePreview: URL.createObjectURL(selectedImage),
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addCar(formData));
    setFormData({
      name: '',
      price: '',
      color: '',
      model: '',
      image: null, // For file input
    });
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
                required
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
                required
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
                required
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
                required
                value={formData.model}
                onChange={handleChange}
                className="w-full border-b outline-none rounded p-2"
              />
            </label>
          </div>
          {loading && (
            <div className="flex justify-center align-middle">
              <ColorRing
                visible
                height="50"
                width="50"
                className="m-2"
                ariaLabel="blocks-loading"
                wrapperStyle={{}}
                wrapperClass="blocks-wrapper"
                colors={['#FFFFFF', '#EDEADE', '#F9F6EE', '#FFF8DC', '#FFFFF0', '#FAF9F6']}
              />
            </div>
          )}
          {!loading && status && (<p className="text-green-800 text-center">{status}</p>)}
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
