const connection = require('./config/connection');

// Get all burgers
const getburger = () => {
  return new Promise((resolve, reject) => {
    connection.query('SELECT * FROM burgers', (err, burgersdata) => {
      if (err) {
        console.log(err);
        
        return reject(err);
      }

      resolve(burgersdata);
    });
  });
};
// Add a burger
const addBurger = burgersObj => {
  return new Promise((resolve, reject) => {
    connection.query('INSERT INTO burgers SET ?', burgersObj, (err, burgersdata) => {
      if (err) {
        console.log(err);
        
        return reject(err);
      }

      resolve(burgersdata);
    });
  });
};

// Update a burger
const updateBurger = (burgersObj, burgersId) => {
  return new Promise((resolve, reject) => {
    connection.query('UPDATE burgers SET ? WHERE id = ?', [burgersObj, burgersId], (err, burgersdata) => {
      if (err) {
        console.log(err);
        return reject(err);
      } else if (burgersdata.affectedRows === 0) {
        return resolve({ message: "No burger with that id!", code: 404 });
      }

      resolve({ message: 'Burger updated successfully!', code: 200 });
    });
  });
};

module.exports = { getBurger, addBurger, updateBurger, };