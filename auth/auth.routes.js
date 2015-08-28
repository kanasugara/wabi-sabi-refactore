module.exports = function(router, passport){
	//localhost:8080/auth/
	router.get('/', function(req, res){
		res.render('auth.html');
	});
};