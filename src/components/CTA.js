import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import './CTA.css';

function CTA({ calledFromAboutUs }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  // Initialize EmailJS (add this to your useEffect or at component mount)
  React.useEffect(() => {
    emailjs.init("x_3X1VY7l5oI5KNSG"); 
  }, []);

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^\+?\d{10,15}$/.test(formData.phone.replace(/[\s-]/g, ''))) {
      newErrors.phone = 'Invalid phone number (10-15 digits)';
    }
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Clear previous status
    setSubmitStatus(null);
    
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length === 0) {
      setIsSubmitting(true);
      setErrors({});
      
      try {
        const result = await emailjs.send(
          'service_p6yzb1e', // Your service ID
          'template_14n1y3c', // Your template ID
          {
            from_name: formData.name,
            from_email: formData.email,
            phone: formData.phone,
            message: formData.message,
            to_name: 'GRO Associates', // Add this if your template expects it
          }
        );
        
        console.log('EmailJS Success:', result);
        setSubmitStatus('Message sent successfully! We\'ll get back to you soon.');
        setFormData({ name: '', email: '', phone: '', message: '' });
        
        // Clear success message after 5 seconds
        setTimeout(() => {
          setSubmitStatus(null);
        }, 5000);
        
      } catch (error) {
        console.error('EmailJS Error:', error);
        setSubmitStatus('Failed to send message. Please try again or contact us directly.');
        
        // Clear error message after 5 seconds
        setTimeout(() => {
          setSubmitStatus(null);
        }, 5000);
      } finally {
        setIsSubmitting(false);
      }
    } else {
      setErrors(validationErrors);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    
    // Clear specific field error when user starts typing
    if (errors[name]) {
      setErrors({ ...errors, [name]: '' });
    }
    
    // Clear status message when user starts typing
    if (submitStatus) {
      setSubmitStatus(null);
    }
  };

  return (
    <section className="cta">
      <div className="cta__background" />
      <div className="cta__container">
        <div className="cta__text">
          {calledFromAboutUs ? (
            <div className="cta__text-about">
              <h2 className="cta__title">Want to work with us?</h2>
              <p className="cta__subtitle">
                Get in touch with us and we'll have a look
              </p>
            </div>
          ) : (
            <h2 className="cta__title">Connect with Us</h2>
          )}
        </div>
        
        <form className="cta__form" onSubmit={handleSubmit}>
          {[
            { name: 'name', label: 'Name', placeholder: 'John Doe' },
            { name: 'email', label: 'Email', placeholder: 'johndoe@email.com' },
            {
              name: 'phone',
              label: 'Phone No.',
              placeholder: '+91 9876543212',
            },
            {
              name: 'message',
              label: 'Message',
              placeholder:
                'Tell us about your requirements or questions. We are here to help!',
            },
          ].map((field) => (
            <div key={field.name} className="cta__field">
              <label className="cta__label" htmlFor={field.name}>
                {field.label}
              </label>
              {field.name === 'message' ? (
                <textarea
                  name={field.name}
                  id={field.name}
                  placeholder={field.placeholder}
                  value={formData[field.name]}
                  onChange={handleChange}
                  className="cta__input cta__textarea"
                  rows="4"
                />
              ) : (
                <input
                  type={field.name === 'email' ? 'email' : 'text'}
                  name={field.name}
                  id={field.name}
                  placeholder={field.placeholder}
                  value={formData[field.name]}
                  onChange={handleChange}
                  className="cta__input"
                  autoComplete={field.name === 'email' ? 'email' : field.name === 'name' ? 'name' : 'off'}
                />
              )}
              {errors[field.name] && (
                <span className="cta__error">{errors[field.name]}</span>
              )}
            </div>
          ))}
          
          <button type="submit" className="cta__submit" disabled={isSubmitting}>
            {isSubmitting ? 'Sending...' : 'Send'}
          </button>
          
          {submitStatus && (
            <div className={`cta__status ${submitStatus.includes('Failed') || submitStatus.includes('try again') ? 'cta__status--error' : ''}`}>
              {submitStatus}
            </div>
          )}
        </form>
      </div>
    </section>
  );
}

export default CTA;