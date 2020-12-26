import express from 'express';

//* Call the controller with the methods
import {} from '../controllers/customerController';

const router = express.Router();

//* Here I defined the methods 
router.get('/'); //localhost:5000/customers/
router.get('/id/:id'); //localhost:5000/customers/id/1
router.post('/newCustomer'); //localhost:5000/customers/newCustomer
router.put('/editCustomer/:id'); //localhost:5000/customers/editCustomer/1
router.delete('/deleteCustomer/:id'); //localhost:5000/customers/deleteCustomer/1
router.delete('/deleteCustomers'); //localhost:5000/customers/deleteCustomers

export default router;