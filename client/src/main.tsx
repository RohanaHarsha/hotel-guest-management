import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import App from './App.tsx';
import GuestList from './pages/GuestList.tsx';
import {Home} from './pages/Home.tsx';
import {GuestRegistration} from './pages/GuestRegistration.tsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Home />} />
      <Route path="GuestRegistration" element={<GuestRegistration />} />
      <Route path="GuestList" element={<GuestList />} />
    </Route>
  )
);

const rootElement = document.getElementById('root');
if (rootElement) {
  createRoot(rootElement).render(
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>
  );
} else {
  console.error("Root element not found. Make sure there is an element with id 'root' in your HTML.");
}