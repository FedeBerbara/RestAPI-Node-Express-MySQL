import dbConnection from '../database/dbConnection';

export const getCustomers = (req, res) => {

    let sqlQuery = 'SELECT * FROM customers';

    dbConnection.query(sqlQuery, (error, results) => {
        if (error) throw error;
        res.status(200).json(results);
    });
};

export const getCustomersById = (req, res) => {

    const id = parseInt(req.params.id);
    let sqlQuery = `SELECT * FROM customers WHERE id = ${id}`;

    // This method verifies that the id passed by parameter is a number, if it is not, it sends an error message
    if (isNaN(id)) {
        return res.json('You must enter a valid id as a parameter');
    }

    dbConnection.query(sqlQuery, (error, result) => {
        if (error) throw error;
        res.status(200).json(result[0]);
    });
};

export const createNewCustomer = (req, res) => {

    // Declare that I store the request body in a constant
    const customer = req.body;
    // So, I create the object with the table fields by calling the constant customer
    const customerObj = [
        customer.first_name,
        customer.last_name,
        customer.email,
        customer.age
    ];

    // This method verifies that the request body has all the complete fields, otherwise the operation will not be executed and sends an error message
    if (!customer.first_name || !customer.last_name || !customer.email || !customer.age) {
        return res.json({
            ErrorCode: 204,
            Message: 'Fields cannot be empty'
        });
    }

    let sqlQuery = 'INSERT INTO customers (first_name, last_name, email, age) VALUES ( ?,?,?,? )';

    dbConnection.query(sqlQuery, customerObj, (err, result) => {
        if (err) throw err;
        res.status(201).json('Customer created with id: ' + result.insertId);
    });
};

export const updateCustomer = (req, res) => {
    
    const id = parseInt(req.params.id);
    const customer = req.body;
    const customerObj = [
        customer.first_name,
        customer.last_name,
        customer.email,
        customer.age
    ];

    if (isNaN(id)) {
        return res.json('You must enter a valid id as a parameter');
    }

    if (!customer.first_name || !customer.last_name || !customer.email || !customer.age) {
        return res.json({
            ErrorCode: 204,
            Message: 'Fields cannot be empty'
        });
    }

    let sqlQuery = `UPDATE customers SET first_name = ?, last_name = ?, email = ?, age = ? WHERE id = ${id}`

    dbConnection.query(sqlQuery, customerObj,  (error, result) => {
        if (error) throw error;
        if (result.affectedRow === 0) {
            res.send('No customer was updated');
        }
        res.json(`Customer with id ${id} updated successfully`);
    });
};

export const deleteOneCustomer = (req, res) => {

    const id = parseInt(req.params.id);

    if (isNaN(id)) {
        return res.json('You must enter a valid id as a parameter');
    }
    
    let sqlQuery = `DELETE FROM customers WHERE id = ${id}`;

    dbConnection.query(sqlQuery, error => {
        if (error) throw error; 
        res.status(200).json(`Customer with id ${id} deleted successfully`);
    });
};

export const deleteAllCustomers = (req, res) => {

    let sqlQuery = 'TRUNCATE TABLE customers';

    dbConnection.query(sqlQuery, error => {
        if (error) throw error; 
        res.status(200).json('All records have been erased');
    });
};