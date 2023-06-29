import React from "react";

const FormNumberThree = () => {
  return (
    <div className="bg-white p-8 rounded-xl mt-0 md:mt-12">
      <h2 className="font-semibold text-2xl ">Form title</h2>
      <p className="font-light">
        Sed tortor, sed velit ridiculus ipsum pharetra lacus odio gravida augue
        enim.
      </p>
      <form className="card-body mt-8 p-0">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Lable title</span>
          </label>
          <input
            type="text"
            placeholder="Placeholder content"
            className="input border-2 input-bordered"
          />
        </div>
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Lable title</span>
          </label>
          <select defaultValue="chose" className="select border-2 w-full">
            <option value="chose" disabled>
              Chose
            </option>
            <option>Homer</option>
            <option>Marge</option>
            <option>Bart</option>
            <option>Lisa</option>
            <option>Maggie</option>
          </select>
        </div>

        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Lable title</span>
          </label>
          <textarea
            type="text"
            placeholder="Placeholder content"
            className="input border-2 p-5 h-44 input-bordered"
          ></textarea>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary bg-blue-600">Button title</button>
        </div>
      </form>
    </div>
  );
};

export default FormNumberThree;
