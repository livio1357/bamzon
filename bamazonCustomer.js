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
options();
//connection.connect(function(err) {
//   if (err) throw err;
//  console.log('connected as id' + connection.threadId);
//start();
//});
function options() {
    inquirer
        .prompt([{
            name: 'action',
            type: 'list',
            message: 'What would you like to do?',
            choices: ['Buy products','add product']
        }]).then(function(answer) {
            if (answer.action === 'Buy products') {
                products();
            } else if (answer.action === 'add product') {
         	createProduct();
            } else {
                console.log("========>>>>>>Run Node bamazonCustomer.js to start the program again<<<<<<<<<====")
                process.exit();
            }
        });
}

function products(){
connection.query("SELECT * FROM `products`", function(err, res) {
    if (err) return err;


    res.forEach(function(val) {


        //console.log(val)

        console.log("Item ID: " + val.id + " || Product Name: " + val.product_name + " || department name:" + val.department_name + " || Price $:" + val.price + "|| Stock:" + val.stock_qty);

    })


    pickup();
});
}



function inventory(){
connection.query("SELECT * FROM `products`", function(err, res) {
    if (err) return err;


    res.forEach(function(val) {


        //console.log(val)

        console.log("Item ID: " + val.id + " || Product Name: " + val.product_name + " || department name:" + val.department_name + " || Price $:" + val.price + "|| Stock:" + val.stock_qty);

    })


    
});
}


var pickup = function() {


    inquirer.prompt([{


            name: 'itemID',
            type: 'input',
            message: colors.magenta('Type in the id of the product you would like to buy.')



        },


        {

            name: 'qty',
            message: colors.grey('Tell me how many of this product you would like to buy')




        }

    ]).then(function(answer) {

        connection.query("SELECT * FROM products where id ='" + answer.id + "'"),
            function(err, res) {
                if (err) throw err;
                console.log("Its working");
            };
        //   console.log(answer)

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

function createProduct() 
{
    inquirer.prompt([{

            name: "product_name",
            type: "input",
            message: colors.blue("what product would you like to add")
        },


        {
            name: "department_name",
            type: "input",
            message: colors.blue("what department is the product in")
        }, 

        {
            name: "price",
            type: "input",
            message: colors.blue("What is the price")
        }, 

        {
            name: "stock_qty",
            type: "input",
            message: colors.blue("How many are you adding into the stock")
        }
    ]).then(function(newinfo) {


        connection.query("INSERT INTO `bamazon`.`products` (`product_name`, `department_name`,  `price`,  `stock_qty`)  VALUES ('" + newinfo.product_name + "', '" + newinfo.department_name + "', '" + newinfo.price + "', '" + newinfo.stock_qty + "');", function(err, res) {
            
            if (err) throw err;
            
            console.log(inventory());
            return options();
        });
    })
}

