import React, { useRef, useState } from 'react';
import { Input, Button, Alert } from 'react-daisyui';
import { useAuth } from '../../contexts/AuthContext';
import { Link, useNavigate } from 'react-router-dom';

function Signup() {
	const emailRef = useRef(null);
	const passwordRef = useRef(null);
	const passwordConfirmRef = useRef(null);
	const [error, setError] = useState('');
	const [loading, setLoading] = useState(false);
	const navigate = useNavigate();
	const { signup } = useAuth();

	async function handleSubmit(e) {
		e.preventDefault();

		if (passwordRef.current.value !== passwordConfirmRef.current.value) {
			return setError('Passwords do not match');
		}

		try {
			setError('');
			setLoading(true);
			await signup(emailRef.current.value, passwordRef.current.value);
			navigate('/welcome');
		} catch {
			setError('Failed to create an account');
		}

		setLoading(false);
	}

	return (
		<div className='flex flex-col w-full component-preview p-4 items-center justify-center gap-2 font-sans'>
			<div className='form-control w-full max-w-xs'>
				<h1 className='text-center text-xl uppercase font-bold mb-2'>Sign Up</h1>
				{error && <Alert className='bg-error text-white p-2 mb-2'>{error}</Alert>}
				<label className='label'>
					<span className='label-text'>Email</span>
				</label>
				<Input type='email' className='focus:outline-0 input-bordered focus:border-black' ref={emailRef} required />
				<label className='label'>
					<span className='label-text input-info'>Password</span>
				</label>
				<Input type='password' className='focus:outline-0 input-bordered focus:border-black' ref={passwordRef} />
				<label className='label'>
					<span className='label-text'>Confirm Password</span>
				</label>
				<Input type='password' className='focus:outline-0 input-bordered focus:border-black' ref={passwordConfirmRef} />
				<Button className='bg-black mt-5' onClick={handleSubmit} disabled={loading}>
					Sign Up
				</Button>
			</div>
			<p className='mt-3 text-center'>
				Already have an account?{' '}
				<Link to='/log-in'>
					<span className='text-blue-500 underline'>Log In</span>
				</Link>
			</p>
		</div>
	);
}

export default Signup;
