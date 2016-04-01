$.ajax({
	method: "GET",
	dataType: "json",
	url: "data/dados.json",
	success: function(data) {
		

		for(var i in data.estados) {

			$('#content').append('<option>'+ data.estados[i].estado +'</option>');
			
		}
	}
});