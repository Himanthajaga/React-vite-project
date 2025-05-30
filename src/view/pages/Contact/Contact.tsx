// import './Contact.css';
import {useForm} from "react-hook-form";
type FormData = {
    email: string;
    subject: string;
    message: string;
}
export function Contact() {
    const {register,
        handleSubmit,
        formState: {errors}} = useForm();

    const  onSubmit = (data: FormData) => {
        console.log('Form submitted:', data);
        alert(`Thank you for contacting us, ${data.subject}! We will get back to you soon.`);
        // Here you can handle the form submission, e.g., send data to an API
}
    return (
       <div className="max-w-md mx-auto mt-10 p-6 bg-green-500 rounded-lg text-white">
        <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
           <form className="flex flex-col gap-4"
                 onSubmit={handleSubmit(onSubmit)}>
               <div className="flex flex-col gap-2">
                   <label htmlFor="email">Email:</label>
                   <input
                       type="email"
                       className="p-2 rounded border border-gray-300"
                       {...register('email', {
                           required: 'Email is required',
                           pattern: {
                               value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                               message: 'Invalid email address'
                           }
                       })}
                       />
                       {errors.email && <span className="text-red-500 text-sm">{errors.email.message}</span>}
               </div>
               <div className="flex flex-col gap-2">
                   <label htmlFor="subject">Subject:</label>
                   <input
                       type="text"
                       className="p-2 rounded border border-gray-300"
                       {...register('subject', {
                           required: 'Subject is required',
                           minLength: {
                               value: 5,
                               message: 'Subject must be at least 5 characters long'
                           }
                       })}
                   />
                   {errors.subject && <span className="text-red-500 text-sm">{errors.subject.message}</span>}
               </div>
               <div className="flex flex-col gap-2">
                   <label htmlFor="message">Message:</label>
                   <textarea
                       className="p-2 rounded border border-gray-300"
                       {...register('message', { required: 'Message is required' })}
                   />
                   {errors.message && <span className="text-red-500 text-sm">Message is required</span>}
               </div>
               <button type="submit" className="bg-white text-gray-800 px-4 py-2 rounded hover:bg-green-600">
                   Submit
               </button>
           </form>
       </div>
    );
}