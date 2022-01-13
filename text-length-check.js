function invalidateInput() {
if (question.length < 1){
    document.getElementById("searchBtn").disabled = true;
}else{
    document.getElementById("searchBtn").disabled = false;
}
}