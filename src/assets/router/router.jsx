import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import Index from "../../pages/Index";
import App from "../../App";

const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children: [
        {
          path: "/",
          element: <Index />,
          
        },
        {
            path: '/paletas',
            element: <Paletas />
          },
          {
            path: '/registro',
            element: <SignUp />
          },
          {
            path: '/iniciar-sesion',
            element: <SignIn />
          },
          {
            path: '/nosotros',
            element: <AboutUS />
          },
          {
            path: '/product/:id',
            element: <ProductDetails />
          },
      ],
    },
  ]);

  export default router;