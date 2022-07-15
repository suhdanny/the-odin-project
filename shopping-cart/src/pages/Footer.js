import React from 'react';
import { Footer } from 'react-daisyui';

function FooterUI() {
	return (
		<div>
			<hr className='mt-5' />
			<Footer className='p-10 text-neutral bg-neutral-content'>
				<div>
					<Footer.Title>Services</Footer.Title>
					<btn className='link link-hover'>Branding</btn>
					<btn className='link link-hover'>Design</btn>
					<btn className='link link-hover'>Marketing</btn>
					<btn className='link link-hover'>Advertisement</btn>
				</div>
				<div>
					<Footer.Title>Company</Footer.Title>
					<btn className='link link-hover'>About us</btn>
					<btn className='link link-hover'>Contact</btn>
					<btn className='link link-hover'>Jobs</btn>
					<btn className='link link-hover'>Press kit</btn>
				</div>
				<div>
					<Footer.Title>Legal</Footer.Title>
					<btn className='link link-hover'>Terms of use</btn>
					<btn className='link link-hover'>Privacy policy</btn>
					<btn className='link link-hover'>Cookie policy</btn>
				</div>
			</Footer>
		</div>
	);
}

export { FooterUI };
