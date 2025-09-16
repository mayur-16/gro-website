import React, { useState } from 'react';
import './CTA.css';

function CTA({ calledFromAboutUs }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [errors, setErrors] = useState({});

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
    } else if (!/^\+?\d{10,12}$/.test(formData.phone.replace(/\s/g, ''))) {
      newErrors.phone = 'Invalid phone number';
    }
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length === 0) {
      // Validation successful, call empty function
      // Placeholder for future action (e.g., API call)
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
                Get in touch with us and we’ll have a look
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
                'Message can we written here. We are a business support service organization incorporated in the emerging smart city of Mangaluru, providing a wide array.',
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
                />
              )}
              {errors[field.name] && (
                <span className="cta__error">{errors[field.name]}</span>
              )}
            </div>
          ))}
          <button type="submit" className="cta__submit">
            Send
          </button>
        </form>
      </div>
    </section>
  );
}

export default CTA;