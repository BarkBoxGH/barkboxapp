import { useState } from "react";
import { useNavigate } from "react-router-dom";
import signUpBg from "../assets/signUpBg.png";
import { Link } from "react-router-dom";

const SignUp = () => {
  // State to navigate 
  const navigate = useNavigate();
  // State to store form data
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    role: 'user',
  });

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // Implement your form submission logic here
    console.log(formData); // Example: Log the form data for now
  };

  return (
    <section
      className="h-screen overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: `url(${signUpBg})` }}
    >
      <div className="flex flex-col h-full justify-center items-center p-4 lg:p-0">
        <div className="w-full max-w-md lg:max-w-lg bg-white rounded-lg shadow-lg p-6 mt-10 mb-10">
          <h1 className="text-3xl font-bold text-center mb-6">Create an Account</h1>
          <form className="flex flex-col" onSubmit={handleSubmit}>
            {['firstname', 'lastname', 'email', 'password'].map((field) => (
              <div className="mb-4" key={field}>
                <label htmlFor={field} className="text-lg font-semibold">{`Enter your ${field}`}</label>
                <input
                  type={field === 'email' ? 'email' : field === 'password' ? 'password' : 'text'}
                  id={field}
                  className="mt-1 h-12 w-full border-2 border-gray-300 rounded-lg p-2 focus:outline-none focus:border-blue-500"
                  onChange={(e) => setFormData({ ...formData, [field]: e.target.value })}
                  required
                />
              </div>
            ))}
            <button
              className="h-12 bg-[#A8DEF8] text-lg font-extrabold text-black rounded-lg hover:bg-blue-400 transition duration-300 mt-4"
              type="submit"
            >
              Create Account
            </button>
            <p className="text-center text-lg mt-4">
              Already have an account? <Link to="/login" className="text-blue-500 hover:underline">Log In</Link>
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
