import React, { useRef, useState } from 'react';
import { Input, Button, Alert } from 'react-daisyui';
import { useAuth } from '../../contexts/AuthContext';
import { Link, useNavigate } from 'react-router-dom';

function Login() {
	const emailRef = useRef(null);
	const passwordRef = useRef(null);
	const [error, setError] = useState('');
	const [loading, setLoading] = useState(false);
	const navigate = useNavigate();
	const { login } = useAuth();

	async function handleSubmit(e) {
		e.preventDefault();

		try {
			setError('');
			setLoading(true);
			await login(emailRef.current.value, passwordRef.current.value);
			navigate('/');
		} catch {
			setError('Failed to Log In');
		}

		setLoading(false);
	}

	return (
		<div className='flex flex-col w-full component-preview p-4 items-center justify-center gap-2 font-sans'>
			<div className='form-control w-full max-w-xs'>
				<h1 className='text-center text-xl uppercase font-bold mb-2'>Log In</h1>
				{error && <Alert className='bg-error p-2 mb-2 text-white'>{error}</Alert>}
				<label className='label'>
					<span className='label-text'>Email</span>
				</label>
				<Input type='email' className='focus:outline-0 input-bordered focus:border-black' ref={emailRef} required />
				<label className='label'>
					<span className='label-text input-info'>Password</span>
				</label>
				<Input type='password' className='focus:outline-0 input-bordered focus:border-black' ref={passwordRef} />
				<Button className='bg-black mt-5' onClick={handleSubmit} disabled={loading}>
					Log In
				</Button>
			</div>
			<p className='mt-3 text-center'>
				New to Fashion?{' '}
				<Link to='/sign-up'>
					<span className='text-blue-500 underline'>Sign Up</span>
				</Link>
			</p>
		</div>
	);
}

export default Login;
