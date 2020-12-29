//* Import express and initialize the routers
import express from 'express';
const router = express.Router();

//* Call the controller with the methods
import { getCustomers, getCustomersById } from '../controllers/customerController'

//* Here I defined the methods 
router.get('/', getCustomers); //localhost:5000/customers/
router.get('/id/:id', getCustomersById); //localhost:5000/customers/id/1
router.post('/newCustomer'); //localhost:5000/customers/newCustomer
router.put('/editCustomer/:id'); //localhost:5000/customers/editCustomer/1
router.delete('/deleteCustomer/:id'); //localhost:5000/customers/deleteCustomer/1
router.delete('/deleteCustomers'); //localhost:5000/customers/deleteCustomers

export default router;