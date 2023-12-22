
const mysql = require("mysql2/promise");
const db = mysql.createPool({
    host: "localhost",
    user: "root",
    database: "kampus-merdeka",
    password: "embus123", //!sdsdscas.
    connectionLimit: 10,
    enableKeepAlive: true,
    keepAliveInitialDelay: 0,
});

// query adalah string
// value adalah array query
async function query (query, value) {
try {
    const [executeQuery] = await db.query(query, value ?? []); // hasil dari query
    return executeQuery;
}catch (err){
    next(err);
    }

}

module.exports = query;
