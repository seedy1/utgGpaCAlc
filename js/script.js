/**
 * Created by ousman mass jobe on 10/13/2016.
 */

function calculation(){
    var g1 = parseInt(document.forms["marksForm"]["grade2"].value);
    //var g2 = parseInt(document.getElementById("b").value);
    var g2 = parseInt(document.forms["marksForm"]["grade2"].value);
    var g3 = parseInt(document.forms["marksForm"]["grade3"].value);
    var g4 = parseInt(document.forms["marksForm"]["grade4"].value);
    var g5 = parseInt(document.forms["marksForm"]["grade5"].value);
    var g6 = parseInt(document.forms["marksForm"]["grade6"].value);

    //gp(g1);

    //for(var i =1;i<=6;i++){
    //
    //}

    var gp1 = gp(100);

    //var sum = g1+g2+g3+g4+g5+g6;
    alert(gp1);

    return false;
}

var gp = function(grade){

    if (grade>90){
        gp = 4;
    }else if(grade>80){
        gp = 3.5;
    }else if(grade>70){
        gp = 3;
    }else if(grade>60){
        gp = 2.5;
    }else if(grade>50){
        gp = 2;
    }else if(grade>40){
        gp = 1;
    }else if(grade>0){
        gp = 0;
        //TODO: ask if 'f' is calculated in the GPA
    }
         return grade;
};
