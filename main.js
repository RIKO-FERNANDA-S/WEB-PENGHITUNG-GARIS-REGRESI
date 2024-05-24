// INPUT DATA
const Input = document.getElementById('input');
let sx = document.getElementById('Sx');
let sy = document.getElementById('Sy');
let sx2 = document.getElementById('Sx2');
let sy2 = document.getElementById('Sy2');
let sxy = document.getElementById('Sxy');
let n = document.getElementById('n');
const Submit = document.getElementById('submit');

// OUTPUT DATA
const Output = document.getElementById('ouput');
const HRx = document.getElementById('rata-x');
const HRy = document.getElementById('rata-y');
const HSSxx = document.getElementById('nilai-ssxx');
// const HSSyy = document.getElementById('rata-x');
const HSSxy = document.getElementById('nilai-ssxy');
const Ha = document.getElementById('nilai-a');
const Hb = document.getElementById('nilai-b');
const Hy = document.getElementById('nilai-y');

// SUBMIT

Submit.addEventListener('click', function() {

    var valueSx = parseInt(sx.value);
    var valueSy = parseInt(sy.value);
    var valueSx2 = parseInt(sx2.value);
    // var valueSy2 = parseInt(sy2.value);
    var valueSxy = parseInt(sxy.value);
    var valueN = parseInt(n.value);

    // console.log("sigma x:", hasilSx); 
    // console.log("sigma y:", hasilSy); 
    // console.log("sigma x2:", hasilSx2); 
    // console.log("sigma y2:", hasilSy2); 
    // console.log("sigma xy:", hasilSxy); 
    // console.log("nilai n:", nilaiN); 

    // RUMUS PERSAMAAN REGRESI
    var NRx = valueSx / valueN;
    var NRy = valueSy / valueN;
    var NSSxy = valueSxy - ((valueSx * valueSy) / valueN);
    // var NSSyy = valueSx / valueN;
    var NSSxx = valueSx2 - ((valueSx ** 2) / valueN);
    var Nb = NSSxy / NSSxx;
    var Na = NRy - (Nb * NRx);
    var Ny = ((Na.toFixed(2)) + "+" + (Nb.toFixed(2)) + "x") ;



    HRx.innerHTML = (NRx.toFixed(2));
    HRy.innerHTML = (NRy.toFixed(2));
    HSSxy.innerHTML = (NSSxy.toFixed(2));
    HSSxx.innerHTML = (NSSxx.toFixed(2));
    Ha.innerHTML = (Na.toFixed(2));
    Hb.innerHTML = (Nb.toFixed(2));
    Hy.innerHTML = Ny;

});
