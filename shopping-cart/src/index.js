import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ContextProvider } from './contexts/Context';
import { AuthProvider } from './contexts/AuthContext';
import { DbProvider } from './contexts/DbContext';

import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<ContextProvider>
			<DbProvider>
				<AuthProvider>
					<BrowserRouter>
						<App />
					</BrowserRouter>
				</AuthProvider>
			</DbProvider>
		</ContextProvider>
	</React.StrictMode>
);
