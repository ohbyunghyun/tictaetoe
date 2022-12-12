    const a = document.getElementById("a");
    const b = document.getElementById("b");
    const c = document.getElementById("c");
    const d = document.getElementById("d");
    const e = document.getElementById("e");
    const f = document.getElementById("f");
    const g = document.getElementById("g");
    const h = document.getElementById("h");
    const ii = document.getElementById("ii");
    const p = document.getElementById("p");
    const pp = document.getElementById("pp");

    let i = 0;    let aa = 0;    let bb = 0;    let cc = 0;
    let dd = 0;    let ee = 0;    let ff = 0;    let gg = 0;
    let hh = 0;    let iii = 0;
    
    let ax = 0; let ao = 0; let leftdaeo = 0; let leftdaex = 0; 
    let aseroo = 0; let aserox = 0; let bseroo = 0; let bserox = 0;
    let rightdaeo = 0; let rightdaex = 0; let cseroo = 0; let cserox = 0;
    let ddo = 0; let ddx = 0; let go = 0; let gx = 0; let moo = 0;
    let win; let mooo;

    const cursoro = document.querySelector("#cursoro");
    const cursorx = document.querySelector("#cursorx");

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
            cursoro.style.display = 'none';
            cursorx.style.display = 'block';
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
            cursoro.style.display = 'block';
            cursorx.style.display = 'none';
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
            cursoro.style.display = 'none';
            cursorx.style.display = 'block';
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
            cursoro.style.display = 'block';
            cursorx.style.display = 'none';
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
            cursoro.style.display = 'none';
            cursorx.style.display = 'block';
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
            cursoro.style.display = 'block';
            cursorx.style.display = 'none';
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
            cursoro.style.display = 'none';
            cursorx.style.display = 'block';
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
            cursoro.style.display = 'block';
            cursorx.style.display = 'none';
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
            cursoro.style.display = 'none';
            cursorx.style.display = 'block';
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
            cursoro.style.display = 'block';
            cursorx.style.display = 'none';
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
            cursoro.style.display = 'none';
            cursorx.style.display = 'block';
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
            cursoro.style.display = 'block';
            cursorx.style.display = 'none';
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
            cursoro.style.display = 'none';
            cursorx.style.display = 'block';
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
            cursoro.style.display = 'block';
            cursorx.style.display = 'none';
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
            cursoro.style.display = 'none';
            cursorx.style.display = 'block';
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
            cursoro.style.display = 'block';
            cursorx.style.display = 'none';
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
            cursoro.style.display = 'none';
            cursorx.style.display = 'block';
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
            cursoro.style.display = 'block';
            cursorx.style.display = 'none';
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


    
    
    document.addEventListener("mousemove", (mo) => { 
        const mouseX = mo.clientX;
        const mouseY = mo.clientY;
        
        cursoro.style.left = mouseX + 'px';
        cursoro.style.top = mouseY + 'px';
    });
    document.addEventListener("mousemove", (mx) => { 
        const mouseA = mx.clientX;
        const mouseB = mx.clientY;
        
        cursorx.style.left = mouseA + 'px';
        cursorx.style.top = mouseB + 'px';
    });


    