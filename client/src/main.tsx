import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './assets/styles/main.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import LayoutDev from './components/layout/LayoutDev.tsx'
import Home from './pages/home/Home.tsx'
import InDevelopmentPage from './pages/InDevelopment.tsx'
import SettingsPage from './pages/settings/Settings.tsx'

const router = createBrowserRouter([
	{
		path: '/',
		element: <LayoutDev />,
		children: [
			{
				index: true,
				element: <Home />
			}
		]
	},
	{
		path: '/statistics',
		element: <LayoutDev />,
		children: [
			{
				index: true,
				element: <InDevelopmentPage />
			}
		]
	},
	{
		path: '/calendar',
		element: <LayoutDev />,
		children: [
			{
				index: true,
				element: <InDevelopmentPage />
			}
		]
	},
	{
		path: '/settings',
		element: <LayoutDev />,
		children: [
			{
				index: true,
				element: <SettingsPage />
			}
		]
	}
])

const queryClient = new QueryClient()

console.log(import.meta.env.VITE_API_URL)

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<QueryClientProvider client={queryClient}>
			<RouterProvider router={router} />
			<ReactQueryDevtools initialIsOpen={false} />
		</QueryClientProvider>
	</StrictMode>
)
