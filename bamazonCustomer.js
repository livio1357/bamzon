var mysql = require('mysql');
var inquirer = require('inquirer')

var connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    passowrd: 'root',
    database: 'bamazon'

});


    connection.query("SELECT * FROM `products`",function(err, row){
	if (err) return err;


	row.forEach(function(val){

		console.log("Item ID: "+val.item_id+" || Product Name: "+val.product_name+" || department name"+val.department_name+"|| Price $" +val.price +"|| Stock" +val.stock_qty);

	})
	
	
	
});


    inquirer.prompt([
    {

    			name: 'id',
    			message: 'Type in the id of the product you would like to buy.'



		},


		{

			name:'qty',
			message:'Tell me how many of this product you would like to buy'




		}])




//connection.connect(function(err) {

  //  createProduct();



//});

//function createProduct() {

  //  var query = connection.query(



       // 'insert into products ?', {

         //   product_name:'shake wait',
           // department_name: 'fitnes',
            //price: 11.11,
            //stock_qty: 10


       // },

       // function(err, res) {
        //	console.log('')
           
      //  }



  //  )



//}





