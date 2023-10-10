var postCount = 0;
var comment1 = 0;
var comment2 = 0;

function postFunction(){
    var inputText = document.getElementById("text1").value;

    if (postCount == 0){
        document.getElementById("topic1").innerHTML = inputText;
        postCount = 1;
    }
    else if ((postCount != 0) && (comment1 == 0)){
        document.getElementById("comment1").innerHTML = inputText;
        comment1 = 1;
    }
    else if ((comment1 != 0) && (comment2 == 0)){
        document.getElementById("comment2").innerHTML = inputText;
        comment2 = 1;
    }
}

function clearFunction(){
    document.getElementById("topic1").innerHTML = "";
    document.getElementById("comment1").innerHTML = "";
    document.getElementById("comment2").innerHTML = "";
    postCount = 0;
    comment1 = 0;
    comment2 = 0;
}