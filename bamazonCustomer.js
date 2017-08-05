var mysql = require('mysql');

var connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    passowrd: 'root',
    database: 'bamazon'

});

connection.connect(function(err) {

    createProduct();

});

function createProduct() {

    var query = connection.query(



        'insert into products set ?', {

            product_name:'shake wait',
            department_name: 'fitnes',
            price: 11.11,
            stock_qty: 999


        },

        function(err, res) {
            console.log(res.affectRows + 'product inserted');
        }



    )



}