var mysql = require('mysql');
var inquire = require('inquire')

var connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    passowrd: 'root',
    database: 'bamzon'

});


    connection.query("SELECT * FROM products",function(err, rows){
	if (err) return err;


	rows.forEach(function(val){

		console.log("Item ID: "+val.item_id+" || Product Name: "+val.product_name+" || department name"+val.department_name+"|| Price $" +val.price +"|| Stock" +val.stock_qty);

	})
	
	
	
});

//connection.connect(function(err) {

  //  createProduct();



//});

//function createProduct() {

  //  var query = connection.query(



       // 'insert into products?', {

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





