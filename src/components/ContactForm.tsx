import { useForm, ValidationError } from "@formspree/react";
function ContactForm() {
  const [state, handleSubmit] = useForm("xwkgnkod");
  if (state.succeeded) {
    return <p>Thanks for joining!</p>;
  }
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="email" className="hidden">
        Email Address
      </label>
      <input
        id="email"
        type="email"
        name="email"
        className="w-full p-3 mt-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent"
        placeholder="Email"
      />
      <ValidationError
        prefix="Email"
        field="email"
        errors={state.errors}
        className="text-red-500"
      />
      <label htmlFor="message" className="hidden">
        Message
      </label>
      <textarea
        id="message"
        name="message"
        className="w-full p-3 mt-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent"
        placeholder="Your message..."
      />
      <ValidationError
        prefix="Message"
        field="message"
        errors={state.errors}
        className="text-red-500"
      />
      <button
        type="submit"
        disabled={state.submitting}
        className={`w-full mt-6 ${
          state.submitting ? "bg-gray-800" : "bg-indigo-600 hover:bg-indigo-700"
        }   text-white font-bold py-2 px-4 rounded`}
      >
        Submit
      </button>
    </form>
  );
}

export default ContactForm;
