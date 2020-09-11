var Test1 = function(){
    this.page = 1;
	this.ajaxData = {
		"search" : {
			"limit" : 10,
			"page" : this.page - 1
		}
	};
    this.ajaxCall();
}
Test1.prototype.ajaxCall = function(){
    let self = this;
    $("button.testBtn").unbind().click(function(){
        $.ajax({
    		url: "http://api.clinomics-dev.com/language/list.php",
    		type: "post",
    		dataType: "json",
    		data: self.ajaxData,
    		async : false,
    		xhrFields: { withCredentials : true },
    		success: function(res){
    			console.log(res);
    		},
    		error : function(status,error){
    			alert("ERROR this status :"+status+", error : "+error);
    		}
        })
    })
}