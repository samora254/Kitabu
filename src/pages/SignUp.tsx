import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { AuthLayout } from '../components/AuthLayout';
import { Input } from '../components/Input';
import { Button } from '../components/Button';
import { auth, db } from '../lib/firebase';

export const SignUp: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    password: '',
    confirmPassword: '',
    gender: '',
    grade: ''
  });
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        formData.email,
        formData.password
      );

      await setDoc(doc(db, 'users', userCredential.user.uid), {
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        phoneNumber: formData.phoneNumber,
        gender: formData.gender,
        grade: formData.grade,
        createdAt: new Date().toISOString()
      });

      navigate('/home');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    }
  };

  return (
    <AuthLayout
      title="Join the Learning Revolution!"
      subtitle="Create your account and start your personalized learning journey"
    >
      <form onSubmit={handleSubmit} className="space-y-4">
        {error && <p className="text-red-500 text-sm text-center">{error}</p>}
        
        <div className="grid grid-cols-2 gap-4">
          <Input
            label="First Name"
            name="firstName"
            placeholder="Enter your first name"
            type="text"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
          <Input
            label="Last Name"
            name="lastName"
            placeholder="Enter your last name"
            type="text"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </div>
        
        <Input
          label="Email"
          name="email"
          placeholder="you@example.com"
          type="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        
        <Input
          label="Phone Number"
          name="phoneNumber"
          placeholder="Your phone number"
          type="tel"
          value={formData.phoneNumber}
          onChange={handleChange}
          required
        />
        
        <Input
          label="Password"
          name="password"
          placeholder="Create a secure password"
          type="password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        
        <Input
          label="Confirm Password"
          name="confirmPassword"
          placeholder="Repeat your password"
          type="password"
          value={formData.confirmPassword}
          onChange={handleChange}
          required
        />
        
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">Gender</label>
          <div className="flex space-x-4">
            <label className="flex items-center">
              <input
                type="radio"
                name="gender"
                value="male"
                checked={formData.gender === 'male'}
                onChange={handleChange}
                className="mr-2"
              />
              <span>Male</span>
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="gender"
                value="female"
                checked={formData.gender === 'female'}
                onChange={handleChange}
                className="mr-2"
              />
              <span>Female</span>
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="gender"
                value="prefer-not-to-say"
                checked={formData.gender === 'prefer-not-to-say'}
                onChange={handleChange}
                className="mr-2"
              />
              <span>Prefer not to say</span>
            </label>
          </div>
        </div>

        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-1">Grade</label>
          <select
            name="grade"
            value={formData.grade}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          >
            <option value="">Select your grade</option>
            <optgroup label="Primary School">
              <option value="grade-1">Grade 1</option>
              <option value="grade-2">Grade 2</option>
              <option value="grade-3">Grade 3</option>
              <option value="grade-4">Grade 4</option>
              <option value="grade-5">Grade 5</option>
              <option value="grade-6">Grade 6</option>
              <option value="grade-7">Grade 7</option>
              <option value="grade-8">Grade 8</option>
            </optgroup>
            <optgroup label="Secondary School">
              <option value="form-1">Form 1</option>
              <option value="form-2">Form 2</option>
              <option value="form-3">Form 3</option>
              <option value="form-4">Form 4</option>
            </optgroup>
          </select>
        </div>

        <Button type="submit" fullWidth>
          Start Learning Now
        </Button>

        <p className="text-center text-sm text-gray-600 mt-4">
          Already have an account?{' '}
          <Link to="/signin" className="text-blue-600 hover:underline">
            Sign in
          </Link>
        </p>
      </form>
    </AuthLayout>
  );
};