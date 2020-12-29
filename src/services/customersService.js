import dbConnection from '../database/dbConnection';

export const getCustomers = () => {

    let sqlQuery = 'SELECT * FROM customers';

    dbConnection.query(sqlQuery, (err) => {
        if (err) throw err;
    });
};