var Common = function(){
    this.document();
}
Common.prototype.document = function(){
    let self = this;

    $("div#header").load("/assets/include/header.html");
    $("div#leftPanel").load("/assets/include/left.html");
    $("div#footer").load("/assets/include/footer.html");
}