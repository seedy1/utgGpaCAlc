/**
 * Created by ousman mass jobe on 10/13/2016.
 */

function calculation(){

    var gradePoint = 0;
    var gpa = 0;

    var g1 = parseInt(document.forms["marksForm"]["grade2"].value);
    var g2 = parseInt(document.forms["marksForm"]["grade2"].value);
    var g3 = parseInt(document.forms["marksForm"]["grade3"].value);
    var g4 = parseInt(document.forms["marksForm"]["grade4"].value);
    var g5 = parseInt(document.forms["marksForm"]["grade5"].value);
    var g6 = parseInt(document.forms["marksForm"]["grade6"].value);

    //gp(g1);

    for(var i =1;i<=6;i++){

        if(eval('g'+i) == null || eval('g'+i) == ""){
            alert("ALL FIELDS MUST BE ENTERED")
        }else{
            gradePoint += calcGradePoint( eval('g'+i) );
        }
    }

    var gpa = parseInt(gradePoint) / 6;

    //alert(gpa);

    var results = document.getElementById('results');
    results.innerHTML = '<h4>YOUR GPA = ' +gpa+' </h4>';

    return false;
}

var calcGradePoint = function(grade){

    if (grade>=90){
        gp = 4;
    }else if(grade>=80){
        gp = 3.5;
    }else if(grade>=70){
        gp = 3;
    }else if(grade>=60){
        gp = 2.5;
    }else if(grade>=50){
        gp = 2;
    }else if(grade>=40){
        gp = 1;
    }else if(grade>0){
        gp = 0;
        //TODO: ask if 'f' is calculated in the GPA
    }
         return gp;
}

function clearFields(){
document.getElementById("form").reset();
}