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

//for testing my connection and finding the stupid spelling mistake
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
            choices: ['Buy products', 'add product']
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

// logging all the product when you click buy product on the options funtions
function products() {
    connection.query("SELECT * FROM `products`", function(err, res) {
        if (err) return err;


        res.forEach(function(val) {


            //console.log(val)

            console.log("Item ID: " + val.id + " || Product Name: " + val.product_name + " || department name:" + val.department_name + " || Price $:" + val.price + "|| Stock:" + val.stock_qty);

        })


        pickup();
    });
}

// inventory only logs after you have added a product this is the same as above just took out (pickup)

function inventory() {
    connection.query("SELECT * FROM `products`", function(err, res) {
        if (err) return err;


        res.forEach(function(val) {


            //console.log(val)

            console.log("Item ID: " + val.id + " || Product Name: " + val.product_name + " || department name:" + val.department_name + " || Price $:" + val.price + "|| Stock:" + val.stock_qty);

        })



    });
}



// buying a product
var pickup = function() {


    inquirer.prompt([{


            name: 'itemID',
            type: 'input',
            message: colors.magenta('Type in the id of the product you would like to buy.')



        },


        {

            name: 'qty',
            type: 'input',
            message: colors.grey('Tell me how many of this product you would like to buy')




        }

    ]).then(function(answer) {

            //console.log(answer.qty);
            // console.log(answer.itemID);

            // starting validation

            // check if product is in stock
            connection.query('SELECT stock_qty FROM products WHERE ? '), [{




                    id: answer.itemID
                }],

         function(err, res) {





            //   



            //     connection.query("SELECT * FROM products where id ='" + answer.itemID + "'"),


            //         function(err, res) {

            //             if (err) throw err;

            if (res[0].stock_qty < answer.qty) {

                //    console.log();

                console.log("not enough");
            } else {

                connection.query("update products set ? where ?", function(err, res) {
                    if (err) return err;


                    res.forEach(function(val) {



                        console.log("Item ID: " + val.id);
                        //console.log(val)


                    })



                });



            }

            // 
        }
        //   console.log(answer)

    });

}

//update database

//var update = function() {


// connection.query("SELECT id# 1 FROM `products`", function(err, res) {
//     if (err) return err;


//     res.forEach(function(val) {



//         console.log("Item ID: " + val.id);
//         //console.log(val)


//     })



// });

// }


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

function createProduct() {
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



    connection.end();
}