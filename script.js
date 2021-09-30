var a = 0;
var y = 1;
var res = 0;
var id;
var max = 0;
var mom = 0;
var mom1 = 0;
var Timer = /** @class */ (function () {
    function Timer(counter) {
        var _this = this;
        if (counter === void 0) { counter = 60; }
        this.counter = counter;
        var intervalId = setInterval(function () {
            document.getElementById("timer").innerText = String(_this.counter);
            _this.counter = _this.counter - 1;
            if (_this.counter === 0)
                clearInterval(intervalId);
        }, 1000);
    }
    return Timer;
}());
var Board = /** @class */ (function () {
    function Board(a) {
        this.c = 0;
        this.totsum = 0;
        this.z = a;
        console.log(a);
        var table = document.createElement('table');
        table.innerHTML = "<thead>\n        <tr>\n          <th scope=\"col\">TEAM 1</th>\n          <th scope=\"col\">B1</th>\n          <th scope=\"col\">B2</th>\n          <th scope=\"col\">B3</th>\n          <th scope=\"col\">B4</th>\n          <th scope=\"col\">B5</th>\n          <th scope=\"col\">B6</th>\n          <th scope=\"col\">TOTAL</th>\n        </tr>\n      </thead>\n      ";
        for (var index = 1; index <= 10; index++) {
            var sum = 0;
            var tr = document.createElement('tr');
            var th = document.createElement('th');
            th.innerText = "Player " + index;
            tr.appendChild(th);
            for (var index_1 = 1; index_1 <= 6; index_1++) {
                this.c = 0;
                var td = document.createElement('td');
                var rand = Math.floor(Math.random() * 7);
                sum += rand;
                td.innerText = String(rand);
                tr.appendChild(td);
                if (rand === 0) {
                    this.c = 6 - index_1;
                    break;
                }
            }
            if (sum > max && this.z === 0) {
                max = sum;
                mom = index;
            }
            if (sum > max) {
                max = sum;
                mom1 = index;
            }
            this.totsum += sum;
            for (var i = 0; i < this.c; i++) {
                var ts = document.createElement('td');
                ts.innerText = " ";
                tr.appendChild(ts);
            }
            var s = document.createElement('td');
            s.innerText = String(sum);
            tr.appendChild(s);
            table.appendChild(tr);
        }
        table.setAttribute("class", "table  table-bordered");
        if (this.z === 0) {
            document.getElementById("table1").appendChild(table);
        }
        else {
            document.getElementById("table2").appendChild(table);
        }
        if (this.totsum > res) {
            res = this.totsum;
            id = this.z;
        }
    }
    return Board;
}());
function func() {
    new Board(a);
}
var b = document.getElementById('btn1');
b.addEventListener("click", func);
function func1() {
    new Board(y);
}
var x = document.getElementById('btn2');
x.addEventListener("click", func1);
var w = document.getElementById('won');
function func2() {
    if (id === 0) {
        w.innerHTML = "TEAM1";
        var m = document.getElementById('man');
        m.innerHTML = "PLAYER" + mom;
    }
    else {
        w.innerHTML = "TEAM2";
        var m = document.getElementById('man');
        m.innerHTML = "PLAYER" + mom1;
    }
}
var r = document.getElementById('resu');
r.addEventListener("click", func2);
