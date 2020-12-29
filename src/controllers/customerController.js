import dbConnection from '../database/dbConnection';

export const getCustomers = (req, res) => {

    let sqlQuery = 'SELECT * FROM customers';

    dbConnection.query(sqlQuery, (err, result) => {
        if (err) throw err;
        res.status(200).json(result);
    });
};

export const getCustomersById = (req, res) => {

    const id = req.params.id;
    let sqlQuery = 'SELECT * FROM customers WHERE id = ?'

    dbConnection.query(sqlQuery, id, (err, result) => {
        if (err) throw err;
        res.status(200).json(result);
    });
};