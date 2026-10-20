
import { useState } from "react";
import { Phone, Mail, Clock, MapPin } from "lucide-react";
import Map from "./Map";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    guests: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you would send the form data to a server
    console.log("Form submitted:", formData);
    alert("Thank you for your reservation request! We'll contact you shortly to confirm.");
    setFormData({
      name: "",
      email: "",
      phone: "",
      date: "",
      time: "",
      guests: "",
      message: ""
    });
  };

  return (
    <section id="contact" className="py-20 bg-ming-light">
      <div className="container-custom">
        {/* Section removed as requested */}
      </div>
    </section>
  );
};

export default Contact;
