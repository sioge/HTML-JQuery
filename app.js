var app = Sammy(function () {
    
    $("div#header").load("../include/header.html");
    $("div#footer").load("../include/footer.html");
    //라우트 설정****
    
    this.get("/", function () {
        //인덱스 페이지
        $("#centerPanel").load("/assets/views/index.html");
    });
    this.get("#/test1", function () {
        $("#centerPanel").load("/assets/views/test1.html", function(){
        });
        
    });
 
    this.get("#/test2", function () {
        $("#centerPanel").load("/assets/views/test2.html");
    });
 
    this.get("#/test3/:id", function () {
        var nID = this.params['id'];
 
        $("#centerPanel").html("넘어온 파라미터 id : " + nID);
    });
    this.get("#/board", function () {
        var nID = this.params['id'];
 
        $("#centerPanel").load("/assets/views/board.html", function(){
            _board = new Board();
        });
    });
 
    //404
    this.notFound = function (verb, path) {
        $("#centerPanel").load("/pages/index.html");
    };
});
 
//어플리케이션 시작
$(function () {
    app.run()
});