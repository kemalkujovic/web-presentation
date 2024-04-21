import React, { useState } from "react";

const ContactForm = () => {
  const [showModal, setShowModal] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const validateEmail = (email) => {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    setForm({ ...form, [name]: value });

    if (name === "name" && value.length < 2) {
      setErrors({ ...errors, name: "Name must have at least 2 characters" });
    } else if (name === "subject" && value.length < 3) {
      setErrors({
        ...errors,
        subject: "Subject must have at least 3 characters",
      });
    } else if (name === "message" && value.length < 5) {
      setErrors({
        ...errors,
        message: "Message must have at least 5 characters",
      });
    } else {
      setErrors({ ...errors, [name]: "" });
    }
  };

  const handleForm = (e) => {
    e.preventDefault();
    if (!validateEmail(form.email)) {
      setErrors({ ...errors, email: "Please enter a valid email address" });
      return;
    }

    if (
      form.name.length < 2 ||
      form.subject.length < 3 ||
      form.message.length < 5
    ) {
      return;
    }

    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setForm({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
    setErrors({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <div className="min-h-screen flex flex-col xl:items-center">
      <form className="xl:w-1/2">
        <h1 className="font-semibold text-2xl text-center my-5">
          Send a message to me!
        </h1>
        <div className="flex justify-center flex-col gap-7 mb-5">
          <input
            type="text"
            name="name"
            required
            placeholder="Name"
            className="border rounded-md p-3 border-slate-800"
            value={form.name}
            onChange={handleInputChange}
          />
          {errors.name && <p className="text-red-500">{errors.name}</p>}
          <input
            type="text"
            name="email"
            required
            placeholder="Email"
            className="border rounded-md p-3 border-slate-800"
            value={form.email}
            onChange={handleInputChange}
          />
          {errors.email && <p className="text-red-500">{errors.email}</p>}
          <input
            type="text"
            name="subject"
            required
            placeholder="Subject"
            className="border rounded-md p-3 border-slate-800"
            value={form.subject}
            onChange={handleInputChange}
          />
          {errors.subject && <p className="text-red-500">{errors.subject}</p>}
          <textarea
            type="text"
            name="message"
            rows="6"
            cols="20"
            required
            placeholder="Message"
            className="border rounded-md p-3 border-slate-800"
            value={form.message}
            onChange={handleInputChange}
          />
          {errors.message && <p className="text-red-500">{errors.message}</p>}
        </div>
        <button
          type="submit"
          className="border text-white p-3 bg-black rounded-md font-serif w-full"
          onClick={handleForm}
        >
          Send Message
        </button>
      </form>
      {showModal && (
        <dialog className="fixed inset-0 z-10 overflow-y-auto" open>
          <div className="flex items-center justify-center">
            <div className="bg-blue-500 p-8 rounded shadow-lg">
              <p className="text-xl font-semibold mb-4 text-white">
                Thank you!
              </p>
              <p className="text-white">
                Your message has been sent successfully.
              </p>
              <div className="flex items-center justify-center w-full">
                <button
                  onClick={closeModal}
                  className="bg-gray-200 hover:bg-gray-100 text-lg font-semibold px-6 py-4 my-2 rounded-lg shadow-md w-full"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </dialog>
      )}
    </div>
  );
};

export default ContactForm;
