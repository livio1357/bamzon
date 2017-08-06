var mysql = require('mysql');
var inquirer = require('inquirer')
var colors = require('colors');
//var Table = require('cli-table');

var connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'root',
    database: 'bamazon'

});

console.log('============Welcome to Livios BAMAZON! =============');

//connection.connect(function(err) {
//   if (err) throw err;
//  console.log('connected as id' + connection.threadId);
//start();
//});




connection.query("SELECT * FROM `products`", function(err, res) {
    if (err) return err;


    res.forEach(function(val) {


        //console.log(val)

        console.log("Item ID: " + val.id + " || Product Name: " + val.product_name + " || department name" + val.department_name + "|| Price $:" + val.price + "|| Stock" + val.stock_qty);

    })


    pickup();
});



var pickup = function() {

    inquirer.prompt([{

            name: colors.bgGreen('id'),
            message: colors.magenta('Type in the id of the product you would like to buy.')



        },


        {

            name: colors.bgGreen('qty'),
            message: colors.grey('Tell me how many of this product you would like to buy')




        },
        
    ]).then(function(answer) {


        console.log(answer)

    });

}




// connection.connect(function(err) {

//    createProduct();



// });

// function createProduct() {

//    var query = connection.query(



//        'insert into products ?', {

//             product_name:'shake wait',
//             department_name: 'fitnes',
//             price: 11.11,
//             stock_qty: 10


//        },

//         function(err, res) {
//         	console.log('')

//       }



//   )



// }