    var a = document.getElementById("a");
    var b = document.getElementById("b");
    var c = document.getElementById("c");
    var d = document.getElementById("d");
    var e = document.getElementById("e");
    var f = document.getElementById("f");
    var g = document.getElementById("g");
    var h = document.getElementById("h");
    var ii = document.getElementById("ii");

    var p = document.getElementById("p");
    var pp = document.getElementById("pp");

    var i = 0;    var aa = 0;    var bb = 0;    var cc = 0;
    var dd = 0;    var ee = 0;    var ff = 0;    var gg = 0;
    var hh = 0;    var iii = 0;
    
    var ax = 0; var ao = 0; var leftdaeo = 0; var leftdaex = 0; 
    var aseroo = 0; var aserox = 0; var bseroo = 0; var bserox = 0;
    var rightdaeo = 0; var rightdaex = 0; var cseroo = 0; var cserox = 0;
    var ddo = 0; var ddx = 0; var go = 0; var gx = 0; var moo = 0;
    var win; var mooo;

    a.onclick = function() {
        aa++;
        console.log(i);
        if (aa > 1){
            alert("중복");
        } else if (i%2 == 0) {
            console.log("짝")
            a.innerHTML = "<font color=blue>O</font>";
            i++;
            p.innerHTML = "<font color=red>X</font>턴";
            ao++;
            leftdaeo++;
            aseroo++;
            moo++;
            //console.log(ao, leftdaeo, aseroo);
             if (ao > 2) {
                p.innerHTML = "게임끝"
                setTimeout(function (){
                    win=confirm("O 승리, 다시하실?");    
                    window.location.reload();
                }, 10);                
             } else if (leftdaeo > 2) {
                p.innerHTML = "게임끝"
                setTimeout(function (){
                    win=confirm("O 승리, 다시하실?");    
                    window.location.reload();
                }, 10);
             } else if (aseroo > 2) {
                    p.innerHTML = "게임끝"
                setTimeout(function (){
                    win=confirm("O 승리, 다시하실?");    
                    window.location.reload();
                }, 10);
             } else if (moo == 9) {
                setTimeout(function() {
                    mooo=confirm("무승부, 다시해");
                    window.location.reload();
                }, 300);
             }
        } else {
            console.log("홀")
            a.innerHTML = "<font color=red>X</font>";
            i++;
            p.innerHTML = "<font color=blue>O</font>턴";
            ax++;
            leftdaex++;
            aserox++;
            moo++;
            //console.log(ax, leftdaex, aserox);
            
            if (ax > 2) {
                p.innerHTML = "게임끝"
                setTimeout(function (){
                    win=confirm("X 승리, 다시하실?");    
                    window.location.reload();
                }, 10);                
             } else if (leftdaex > 2) {
                p.innerHTML = "게임끝"
                setTimeout(function (){
                    win=confirm("X 승리, 다시하실?");    
                    window.location.reload();
                }, 10);
             } else if (aserox > 2) {
                p.innerHTML = "게임끝"
                setTimeout(function (){
                    win=confirm("X 승리, 다시하실?");    
                    window.location.reload();
                }, 10);
                
             } else if (moo == 9) {
                setTimeout(function() {
                    mooo=confirm("무승부, 다시해");
                    window.location.reload();
                }, 300);
             }
        }
    }

    b.onclick = function() {
        bb++;
        console.log(i);
        if (bb > 1){
            alert("중복");
        } else if (i%2 == 0) {
            console.log("짝")
            b.innerHTML = "<font color=blue>O</font>";
            i++;
            p.innerHTML = "<font color=red>X</font>턴";
            ao++;
            bseroo++;
            moo++;
            //console.log(ao, bseroo);
             if (ao > 2) {
                p.innerHTML = "게임끝"
                setTimeout(function (){
                    win=confirm("O 승리, 다시하실?");    
                    window.location.reload();
                }, 10);                
             } else if (bseroo > 2) {
                p.innerHTML = "게임끝"
                setTimeout(function (){
                    win=confirm("O 승리, 다시하실?");    
                    window.location.reload();
                }, 10);
             } else if (moo == 9) {
                setTimeout(function() {
                    mooo=confirm("무승부, 다시해");
                    window.location.reload();
                }, 300);
             }
        } else {
            console.log("홀")
            b.innerHTML = "<font color=red>X</font>";
            i++;
            p.innerHTML = "<font color=blue>O</font>턴";
            ax++;
            bserox++;
            moo++;
            //console.log(ax, bserox);
             if (ax > 2) {
                p.innerHTML = "게임끝"
                setTimeout(function (){
                    win=confirm("X 승리, 다시하실?");    
                    window.location.reload();
                }, 10);                
             } else if (bserox > 2) {
                p.innerHTML = "게임끝"
                setTimeout(function (){
                    win=confirm("X 승리, 다시하실?");    
                    window.location.reload();
                }, 10);
             } else if (moo == 9) {
                setTimeout(function() {
                    mooo=confirm("무승부, 다시해");
                    window.location.reload();
                }, 300);
             }
        }
    }

    c.onclick = function() {
        cc++;
        console.log(i);
        if (cc > 1){
            alert("중복");
        } else if (i%2 == 0) {
            console.log("짝")
            c.innerHTML = "<font color=blue>O</font>";
            i++;
            p.innerHTML = "<font color=red>X</font>턴";
            ao++;
            rightdaeo++;
            cseroo++;
            moo++;
            //console.log(ao, rightdaeo, cseroo);
             if (ao > 2) {
                p.innerHTML = "게임끝"
                setTimeout(function (){
                    win=confirm("O 승리, 다시하실?");    
                    window.location.reload();
                }, 10);                
             } else if (rightdaeo > 2) {
                p.innerHTML = "게임끝"
                setTimeout(function (){
                    win=confirm("O 승리, 다시하실?");    
                    window.location.reload();
                }, 10);
             } else if (cseroo > 2) {
                p.innerHTML = "게임끝"
                setTimeout(function () {
                    win=confirm("O 승리, 다시하실?");
                    window.location.reload();
                }, 10);
             } else if (moo == 9) {
                setTimeout(function() {
                    mooo=confirm("무승부, 다시해");
                    window.location.reload();
                }, 300);
             }
        } else {
            console.log("홀")
            c.innerHTML = "<font color=red>X</font>";
            i++;
            p.innerHTML = "<font color=blue>O</font>턴";
            ax++;
            rightdaex++;
            cserox++;
            moo++;
            //console.log(ax, rightdaex, cserox);
             if (ax > 2) {
                p.innerHTML = "게임끝"
                setTimeout(function (){
                    win=confirm("X 승리, 다시하실?");    
                    window.location.reload();
                }, 10);                
             } else if (rightdaex > 2) {
                p.innerHTML = "게임끝"
                setTimeout(function (){
                    win=confirm("X 승리, 다시하실?");    
                    window.location.reload();
                }, 10);
             } else if (cserox > 2) {
                p.innerHTML = "게임끝"
                setTimeout(function () {
                    win=confirm("X 승리, 다시하실?");
                    window.location.reload();
                }, 10);
             } else if (moo == 9) {
                setTimeout(function() {
                    mooo=confirm("무승부, 다시해");
                    window.location.reload();
                }, 300);
             }
        }
    }

   d.onclick = function() {
        dd++;
        console.log(i);
        if (dd > 1){
            alert("중복");
        } else if (i%2 == 0) {
            console.log("짝")
            d.innerHTML = "<font color=blue>O</font>";
            i++;
            p.innerHTML = "<font color=red>X</font>턴";
            aseroo++;
            ddo++;
            moo++;
            //console.log(aseroo, ddo);
             if (aseroo > 2) {
                p.innerHTML = "게임끝"
                setTimeout(function (){
                    win=confirm("O 승리, 다시하실?");    
                    window.location.reload();
                }, 10);                
             } else if (ddo > 2) {
                p.innerHTML = "게임끝"
                setTimeout(function (){
                    win=confirm("O 승리, 다시하실?");    
                    window.location.reload();
                }, 10);
             } else if (moo == 9) {
                setTimeout(function() {
                    mooo=confirm("무승부, 다시해");
                    window.location.reload();
                }, 300);
             }
        } else {
            console.log("홀")
            d.innerHTML = "<font color=red>X</font>";
            i++;
            p.innerHTML = "<font color=blue>O</font>턴";
            aserox++;
            ddx++;
            moo++;
            //console.log(aserox, ddx);
             if (aseroo > 2) {
                p.innerHTML = "게임끝"
                setTimeout(function (){
                    win=confirm("X 승리, 다시하실?");    
                    window.location.reload();
                }, 10);                
             } else if (ddx > 2) {
                p.innerHTML = "게임끝"
                setTimeout(function (){
                    win=confirm("X 승리, 다시하실?");    
                    window.location.reload();
                }, 10);
             } else if (moo == 9) {
                setTimeout(function() {
                    mooo=confirm("무승부, 다시해");
                    window.location.reload();
                }, 300);
             }
        }
    }

    e.onclick = function() {
        ee++;
        console.log(i);
        if (ee > 1){
            alert("중복");
        } else if (i%2 == 0) {
            console.log("짝")
            e.innerHTML = "<font color=blue>O</font>";
            i++;
            p.innerHTML = "<font color=red>X</font>턴";
            leftdaeo++;
            bseroo++;
            rightdaeo++;
            ddo++;
            moo++;
            //console.log(leftdaeo, bseroo, rightdaeo, ddo);
             if (leftdaeo > 2) {
                p.innerHTML = "게임끝"
                setTimeout(function (){
                    win=confirm("O 승리, 다시하실?");    
                    window.location.reload();
                }, 10);                
             } else if (bseroo > 2) {
                p.innerHTML = "게임끝"
                setTimeout(function (){
                    win=confirm("O 승리, 다시하실?");    
                    window.location.reload();
                }, 10);
             } else if (rightdaeo > 2) {
                p.innerHTML = "게임끝"
                setTimeout(function (){
                    win=confirm("O 승리, 다시하실?");    
                    window.location.reload();
                }, 10);
             } else if (ddo > 2) {
                p.innerHTML = "게임끝"
                setTimeout(function (){
                    win=confirm("O 승리, 다시하실?");    
                    window.location.reload();
                }, 10);
             } else if (moo == 9) {
                setTimeout(function() {
                    mooo=confirm("무승부, 다시해");
                    window.location.reload();
                }, 300);
             }
        } else {
            console.log("홀")
            e.innerHTML = "<font color=red>X</font>";
            i++;
            p.innerHTML = "<font color=blue>O</font>턴";
            leftdaex++;
            bserox++;
            rightdaex++;
            ddx++;
            moo++;
            //console.log(leftdaex, bserox, rightdaex, ddx);
             if (leftdaex > 2) {
                p.innerHTML = "게임끝"
                setTimeout(function (){
                    win=confirm("X 승리, 다시하실?");    
                    window.location.reload();
                }, 10);                
             } else if (bserox > 2) {
                p.innerHTML = "게임끝"
                setTimeout(function (){
                    win=confirm("X 승리, 다시하실?");    
                    window.location.reload();
                }, 10);
             } else if (rightdaex > 2) {
                p.innerHTML = "게임끝"
                setTimeout(function (){
                    win=confirm("X 승리, 다시하실?");    
                    window.location.reload();
                }, 10);
             } else if (ddx > 2) {
                p.innerHTML = "게임끝"
                setTimeout(function (){
                    win=confirm("X 승리, 다시하실?");    
                    window.location.reload();
                }, 10);
             } else if (moo == 9) {
                setTimeout(function() {
                    mooo=confirm("무승부, 다시해");
                    window.location.reload();
                }, 300);
             }
        }
    }

    f.onclick = function() {
        ff++;
        console.log(i);
        if (ff > 1){
            alert("중복");
        } else if (i%2 == 0) {
            console.log("짝")
            f.innerHTML = "<font color=blue>O</font>";
            i++;
            p.innerHTML = "<font color=red>X</font>턴";
            cseroo++;
            ddo++;
            moo++;
            //console.log(cseroo, ddo);
             if (cseroo > 2) {
                p.innerHTML = "게임끝"
                setTimeout(function (){
                    win=confirm("O 승리, 다시하실?");    
                    window.location.reload();
                }, 10);                
             } else if (ddo > 2) {
                p.innerHTML = "게임끝"
                setTimeout(function (){
                    win=confirm("O 승리, 다시하실?");    
                    window.location.reload();
                }, 10);
             } else if (moo == 9) {
                setTimeout(function() {
                    mooo=confirm("무승부, 다시해");
                    window.location.reload();
                }, 300);
             }
        } else {
            console.log("홀")
            f.innerHTML = "<font color=red>X</font>";
            i++;
            p.innerHTML = "<font color=blue>O</font>턴";
            cserox++;
            ddx++;
            moo++;
            //console.log(cserox, ddx);
             if (cserox > 2) {
                p.innerHTML = "게임끝"
                setTimeout(function (){
                    win=confirm("X 승리, 다시하실?");    
                    window.location.reload();
                }, 10);                
             } else if (ddx > 2) {
                p.innerHTML = "게임끝"
                setTimeout(function (){
                    win=confirm("X 승리, 다시하실?");    
                    window.location.reload();
                }, 10);
             } else if (moo == 9) {
                setTimeout(function() {
                    mooo=confirm("무승부, 다시해");
                    window.location.reload();
                }, 300);
             }
        }
    }

    g.onclick = function() {
        gg++;
        console.log(i);
        if (gg > 1){
            alert("중복");
        } else if (i%2 == 0) {
            console.log("짝")
            g.innerHTML = "<font color=blue>O</font>";
            i++;
            p.innerHTML = "<font color=red>X</font>턴";
            aseroo++;
            rightdaeo++;
            go++;
            moo++;
            //console.log(aseroo, rightdaeo, go);
             if (aseroo > 2) {
                p.innerHTML = "게임끝"
                setTimeout(function (){
                    win=confirm("O 승리, 다시하실?");    
                    window.location.reload();
                }, 10);                
             } else if (rightdaeo > 2) {
                p.innerHTML = "게임끝"
                setTimeout(function (){
                    win=confirm("O 승리, 다시하실?");    
                    window.location.reload();
                }, 10);
             } else if (go > 2) {
                p.innerHTML = "게임끝"
                setTimeout(function (){
                    win=confirm("O 승리, 다시하실?");    
                    window.location.reload();
                }, 10);
             } else if (moo == 9) {
                setTimeout(function() {
                    mooo=confirm("무승부, 다시해");
                    window.location.reload();
                }, 300);
             }
        } else {
            console.log("홀")
            g.innerHTML = "<font color=red>X</font>";
            i++;
            p.innerHTML = "<font color=blue>O</font>턴";
            aserox++;
            rightdaex++;
            gx++;
            moo++;
            //console.log(aserox, rightdaex, gx);
             if (aserox > 2) {
                p.innerHTML = "게임끝"
                setTimeout(function (){
                    win=confirm("X 승리, 다시하실?");    
                    window.location.reload();
                }, 10);                
             } else if (rightdaex > 2) {
                p.innerHTML = "게임끝"
                setTimeout(function (){
                    win=confirm("X 승리, 다시하실?");    
                    window.location.reload();
                }, 10);
             } else if (gx > 2) {
                p.innerHTML = "게임끝"
                setTimeout(function (){
                    win=confirm("X 승리, 다시하실?");    
                    window.location.reload();
                }, 10);
             } else if (moo == 9) {
                setTimeout(function() {
                    mooo=confirm("무승부, 다시해");
                    window.location.reload();
                }, 300);
             }
        }
    }

    h.onclick = function() {
        hh++;
        console.log(i);
        if (hh > 1){
            alert("중복");
        } else if (i%2 == 0) {
            console.log("짝")
            h.innerHTML = "<font color=blue>O</font>";
            i++;
            p.innerHTML = "<font color=red>X</font>턴";
            bseroo++;
            go++;
            moo++;
            //console.log(bseroo, go);
             if (bseroo > 2) {
                p.innerHTML = "게임끝"
                setTimeout(function (){
                    win=confirm("O 승리, 다시하실?");    
                    window.location.reload();
                }, 10);                
             } else if (go > 2) {
                p.innerHTML = "게임끝"
                setTimeout(function (){
                    win=confirm("O 승리, 다시하실?");    
                    window.location.reload();
                }, 10);
             }  else if (moo == 9) {
                setTimeout(function() {
                    mooo=confirm("무승부, 다시해");
                    window.location.reload();
                }, 300);
             }
        } else {
            console.log("홀")
            h.innerHTML = "<font color=red>X</font>";
            i++;
            p.innerHTML = "<font color=blue>O</font>턴";
            bserox++;
            gx++;
            moo++;
            //console.log(bserox, gx);
             if (bserox > 2) {
                p.innerHTML = "게임끝"
                setTimeout(function (){
                    win=confirm("X 승리, 다시하실?");    
                    window.location.reload();
                }, 10);                
             } else if (gx > 2) {
                p.innerHTML = "게임끝"
                setTimeout(function (){
                    win=confirm("X 승리, 다시하실?");    
                    window.location.reload();
                }, 10);
             }  else if (moo == 9) {
                setTimeout(function() {
                    mooo=confirm("무승부, 다시해");
                    window.location.reload();
                }, 300);
             }
        }
    }

    ii.onclick = function() {
        
        iii++;
        console.log(i);
        if (iii > 1){
            alert("중복");
        } else if (i%2 == 0) {
            console.log("짝")
            ii.innerHTML = "<font color=blue>O</font>";
            i++;
            p.innerHTML = "<font color=red>X</font>턴";
            leftdaeo++;
            cseroo++;
            go++;
            moo++;
            //console.log(leftdaeo, cseroo, go);
             if (leftdaeo > 2) {
                p.innerHTML = "게임끝"
                setTimeout(function (){
                    win=confirm("O 승리, 다시하실?");    
                    window.location.reload();
                }, 10);                
             } else if (cseroo > 2) {
                p.innerHTML = "게임끝"
                setTimeout(function (){
                    win=confirm("O 승리, 다시하실?");    
                    window.location.reload();
                }, 10);
             } else if (go > 2) {
                p.innerHTML = "게임끝"
                setTimeout(function (){
                    win=confirm("O 승리, 다시하실?");    
                    window.location.reload();
                }, 10);
             } else if (moo == 9) {
                setTimeout(function() {
                    mooo=confirm("무승부, 다시해");
                    window.location.reload();
                }, 300);
             }
        } else {
            console.log("홀")
            ii.innerHTML = "<font color=red>X</font>";
            i++;
            p.innerHTML = "<font color=blue>O</font>턴";
            leftdaex++;
            cserox++;
            gx++;
            moo++;
            //console.log(leftdaex, cserox, gx);
             if (leftdaex > 2) {
                p.innerHTML = "게임끝"
                setTimeout(function (){
                    win=confirm("X 승리, 다시하실?");    
                    window.location.reload();
                }, 10);                
             } else if (cserox > 2) {
                p.innerHTML = "게임끝"
                setTimeout(function (){
                    win=confirm("X 승리, 다시하실?");    
                    window.location.reload();
                }, 10);
             } else if (gx > 2) {
                p.innerHTML = "게임끝"
                setTimeout(function (){
                    win=confirm("X 승리, 다시하실?");    
                    window.location.reload();
                }, 10);
             } else if (moo == 9) {
                setTimeout(function() {
                    mooo=confirm("무승부, 다시해");
                    window.location.reload();
                }, 300);
             }
        }
    }
