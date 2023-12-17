
 const conn = require("../database-mysql");


 module.exports.getAll = (req, res) => {
    const query = "SELECT * FROM choco ";
    conn.query(query, (err, result) => {
      err ? console.error(err) : res.send(result);
    });
  };
  
  module.exports.getOne = (req, res) => {
    const query = `SELECT * FROM choco where chocoName='${req.params.name}'`;
    conn.query(query, (err, result) => {
      err ? console.error(err) : res.send(result);
    });
  };
  
  module.exports.remove = (req, res) => {
    const query = `delete from choco where idchoco=${req.params.id}`;
    conn.query(query, (err, result) => {
      err ? console.error(err) : res.send(result);
    });
  };
  
  module.exports.add = (req, res) => {
    const query = `insert into choco set ?`;
    conn.query(query, req.body, (err, result) => {
      err ? console.error(err) : res.send(result);
    });
  };
  
  module.exports.update = (req, res) => {
    const query = `update choco set ? where idpatient=${req.params.id}`;
    conn.query(query, req.body, (err, result) => {
        err ? console.error(err) : res.send(result);
      });
 
  };
  module.exports.getAllUser = (req, res) => {
    const query = "SELECT * FROM user ";
    conn.query(query, (err, result) => {
      err ? console.error(err) : res.send(result);
    });
  };
  module.exports.getOneUser = (req, res) => {
      const query = `SELECT * FROM user where userName='${req.params.userName}'`;
      conn.query(query, (err, result) => {
        err ? console.error(err) : res.send(result);
      });
    };
  module.exports.addUser = (req, res) => {
    const query = `insert into user set ?`;
    conn.query(query, req.body, (err, result) => {
      err ? console.error(err) : res.send(result);
    });
  };

  module.exports.addCart = (req, res) => {
    const query = `insert into carts set ?`;
    conn.query(query, req.body, (err, result) => {
      err ? console.error(err) : res.send(result);
    });
  };
  module.exports.getAllCarts = (req, res) => {
    const query = "SELECT * FROM carts ";
    conn.query(query, (err, result) => {
      err ? console.error(err) : res.send(result);
    });
  };
  module.exports.removeOneCart = (req, res) => {
    const query = `delete from carts where idcart=${req.params.id}`;
    conn.query(query, (err, result) => {
      err ? console.error(err) : res.send(result);
    });
  };
  module.exports.removeAllCarts = (req, res) => {
    const query = `delete from carts `;
    conn.query(query, (err, result) => {
      err ? console.error(err) : res.send(result);
    });
  };




  

