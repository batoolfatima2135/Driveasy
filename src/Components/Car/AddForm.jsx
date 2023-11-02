import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ColorRing } from 'react-loader-spinner';
import { useNavigate } from 'react-router-dom';

import { addCar } from '../../Redux/Car/carAddSlice';

const MyForm = () => {
  const status = useSelector((state) => state.addCar.message);
  const loading = useSelector((state) => state.addCar.loading);
  const navigate = useNavigate();
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
    console.log(formData);
    dispatch(addCar(formData));
  };

  useEffect(() => {
    if (!loading && status) {
      navigate(`/thankyou/${status}`);
    }
  }, [status, loading, navigate]);

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="lg:w-3/4">

        <form
          onSubmit={handleSubmit}
          className=" px-12 p-5 m-4 shadow-lg shadow-gray-500 rounded-md"
        >
          <h1 className="text-2xl font-bold text-center uppercase  text-custom-green">
            Add Car
          </h1>
          <div className="rounded-full">
            {formData.imagePreview && (
              <img
                src={formData.imagePreview}
                alt="Preview"
                className="w-20 h-20 mx-auto rounded-full object-cover"
              />
            )}
          </div>
          <div className="my-2">
            <label htmlFor="image" className="block text-gray-600">
              Car Image
              <input
                id="image"
                type="file"
                name="image"
                onChange={handleChange}
                className="w-full border-b  border-gray-300 outline-none rounded p-2"
              />
            </label>
          </div>
          <div className="my-2">
            <label htmlFor="name" className="block text-gray-600">
              Car Name
              <input
                id="name"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full border-b border-gray-300 outline-none rounded p-2"
              />
            </label>
          </div>
          <div className="my-2">
            <label htmlFor="price" className="block text-gray-600">
              Price Per Day ($)
              <input
                id="price"
                type="number"
                name="price"
                required
                value={formData.price}
                onChange={handleChange}
                className="w-full border-b  border-gray-300 outline-none rounded p-2 "
              />
            </label>
          </div>
          <div className="my-2">
            <label htmlFor="color" className="block text-gray-600">
              Car Color
              <input
                id="color"
                type="text"
                name="color"
                required
                value={formData.color}
                onChange={handleChange}
                className="w-full border-b outline-none border-gray-300  rounded p-2"
              />
            </label>
          </div>
          <div className="my-2">
            <label htmlFor="model" className="block text-gray-600">
              Car Model
              <input
                id="model"
                type="text"
                name="model"
                required
                value={formData.model}
                onChange={handleChange}
                className="w-full border-b border-gray-300 outline-none rounded p-2"
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
                colors={[
                  '#8EB904',
                  '#A5D606',
                  '#8EB904',
                  '#A5D606',
                  '#8EB904',
                  '#A5D606',
                ]}
              />
            </div>
          )}
          <div className="flex items-center justify-center">
            <button
              type="submit"
              className="bg-custom-green text-white rounded py-2 px-5 hover:bg-custom-green-light transition duration-300"
            >
              SUBMIT
            </button>
          </div>
        </form>

      </div>
    </div>
  );
};

export default MyForm;
