var Board = function(){

    this.powers = [];

    this.document();
}

Board.prototype.document = function(){
    let self = this;

    $.ajax({
		url: "../data.json",
		type: "post",
		dataType: "json",
		data: '',
		async : false,
		xhrFields: { withCredentials : true },
		success: function(res){
            $.each(res.members, function(k, v){

                $.each(v.powers, function(pk, pv){
                    self.powers.push(pv);
                    if(pk === 0){
            			$("table tbody").append(
                            '<tr>' +
                                '<td rowspan="' + v.powers.length + '">' + v.age + '</td>' +
                                '<td rowspan="' + v.powers.length + '">' + v.name + '</td>' +
                                '<td rowspan="' + v.powers.length + '">' + v.secretIdentity + '</td>' +
                                '<td>' + v.powers[pk] + '</td>' +
                            '</tr>'
                        );
                    } else {
                        $("table tbody").append(
                            '<tr>' +
                                '<td>' + self.powers[pk] + '</td>' +
                            '</tr>'
                        );
                    }
                });
            })
		},
		error : function(status,error){
			alert("ERROR status :"+status+", error : "+error);
		},
	})
}

Board.prototype.clickEvent = function(){


}