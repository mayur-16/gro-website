import React, { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import './CTAPopup.css';

function CTAPopup({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  // Initialize EmailJS
  useEffect(() => {
    emailjs.init("x_3X1VY7l5oI5KNSG"); 
  }, []);

  // Prevent body scroll when popup is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

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
    
    setSubmitStatus(null);
    
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length === 0) {
      setIsSubmitting(true);
      setErrors({});
      
      try {
        const result = await emailjs.send(
          'service_p6yzb1e',
          'template_14n1y3c',
          {
            from_name: formData.name,
            from_email: formData.email,
            phone: formData.phone,
            message: formData.message,
            to_name: 'GRO Associates',
          }
        );
        
        console.log('EmailJS Success:', result);
        setSubmitStatus('Message sent successfully! We\'ll get back to you soon.');
        setFormData({ name: '', email: '', phone: '', message: '' });
        
        setTimeout(() => {
          setSubmitStatus(null);
          onClose();
        }, 2000);
        
      } catch (error) {
        console.error('EmailJS Error:', error);
        setSubmitStatus('Failed to send message. Please try again or contact us directly.');
        
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
    
    if (errors[name]) {
      setErrors({ ...errors, [name]: '' });
    }
    
    if (submitStatus) {
      setSubmitStatus(null);
    }
  };

  const handleOverlayClick = (e) => {
    if (e.target.classList.contains('cta-popup__overlay')) {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="cta-popup__overlay" onClick={handleOverlayClick}>
      <div className="cta-popup__container">
        <button className="cta-popup__close" onClick={onClose}>
          ×
        </button>
        
        <form className="cta-popup__form" onSubmit={handleSubmit}>
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
              placeholder: 'Tell us about your requirements or questions. We are here to help!',
            },
          ].map((field) => (
            <div key={field.name} className="cta-popup__field">
              <label className="cta-popup__label" htmlFor={field.name}>
                {field.label}
              </label>
              {field.name === 'message' ? (
                <textarea
                  name={field.name}
                  id={field.name}
                  placeholder={field.placeholder}
                  value={formData[field.name]}
                  onChange={handleChange}
                  className="cta-popup__input cta-popup__textarea"
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
                  className="cta-popup__input"
                  autoComplete={field.name === 'email' ? 'email' : field.name === 'name' ? 'name' : 'off'}
                />
              )}
              {errors[field.name] && (
                <span className="cta-popup__error">{errors[field.name]}</span>
              )}
            </div>
          ))}
          
          <button type="submit" className="cta-popup__submit" disabled={isSubmitting}>
            {isSubmitting ? 'Sending...' : 'Send'}
          </button>
          
          {submitStatus && (
            <div className={`cta-popup__status ${submitStatus.includes('Failed') || submitStatus.includes('try again') ? 'cta-popup__status--error' : ''}`}>
              {submitStatus}
            </div>
          )}
        </form>
      </div>
    </div>
  );
}

export default CTAPopup;