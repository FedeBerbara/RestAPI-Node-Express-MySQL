//* Import the customers.routes file with all de methods
import customerRoutes from './routes/customers.routes';

//* Here I defined the first endpoint
const router = (app) => {
    app.use('/customers', customerRoutes);
};

export default router;