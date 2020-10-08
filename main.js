function insertNum(number){
    var existingNumbers = $("#result").val();

    $("#result").val( existingNumbers + number)


}
function clearResult(){
    $("#result").val('')
}
