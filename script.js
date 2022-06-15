starList = [
    document.getElementById('star-1'), document.getElementById('star-2'),
    document.getElementById('star-3'), document.getElementById('star-4'),
    document.getElementById('star-5'), document.getElementById('star-6'),
    document.getElementById('star-7'), document.getElementById('star-8'),
    document.getElementById('star-9'), document.getElementById('star-10'),
    document.getElementById('star-11'), document.getElementById('star-12'),
    document.getElementById('star-13'), document.getElementById('star-14'),
    document.getElementById('star-15'), document.getElementById('star-16'),
    document.getElementById('star-17'), document.getElementById('star-18'),
    document.getElementById('star-19'), document.getElementById('star-20'),
    document.getElementById('star-21'), document.getElementById('star-22'),
    document.getElementById('star-23'), document.getElementById('star-24'),
    document.getElementById('star-25'), document.getElementById('star-26'),
    document.getElementById('star-27'), document.getElementById('star-28'),
    document.getElementById('star-29'), document.getElementById('star-30'),
    document.getElementById('star-31'), document.getElementById('star-32'),
    document.getElementById('star-33'), document.getElementById('star-34'),
    document.getElementById('star-35'), document.getElementById('star-36'),
    document.getElementById('star-37'), document.getElementById('star-38'),
    document.getElementById('star-39'), document.getElementById('star-40'),
    document.getElementById('star-41'), document.getElementById('star-42'),
    document.getElementById('star-43'), document.getElementById('star-44'),
    document.getElementById('star-45'), document.getElementById('star-46'),
    document.getElementById('star-47'), document.getElementById('star-48'),
    document.getElementById('star-49'), document.getElementById('star-50'),
    document.getElementById('star-51'), document.getElementById('star-52'),
    document.getElementById('star-53'), document.getElementById('star-54'),
    document.getElementById('star-55'), document.getElementById('star-56'),
    document.getElementById('star-57'), document.getElementById('star-58'),
    document.getElementById('star-59'), document.getElementById('star-60'),
    document.getElementById('star-61'), document.getElementById('star-62'),
    document.getElementById('star-63'), document.getElementById('star-64'),
    document.getElementById('star-65'), document.getElementById('star-66'),
    document.getElementById('star-67'), document.getElementById('star-68'),
    document.getElementById('star-69'), document.getElementById('star-70'),
    document.getElementById('star-71'), document.getElementById('star-72'),
    document.getElementById('star-73'), document.getElementById('star-74'),
    document.getElementById('star-75'), document.getElementById('star-76'),
    document.getElementById('star-77'), document.getElementById('star-78'),
    document.getElementById('star-79'), document.getElementById('star-80'),
    document.getElementById('star-81'), document.getElementById('star-82'),
    document.getElementById('star-83'), document.getElementById('star-84'),
    document.getElementById('star-85'), document.getElementById('star-86'),
    document.getElementById('star-87'), document.getElementById('star-88'),
    document.getElementById('star-89'), document.getElementById('star-90'),
    document.getElementById('star-91'), document.getElementById('star-92'),
    document.getElementById('star-93'), document.getElementById('star-94'),
    document.getElementById('star-95'), document.getElementById('star-96'),
    document.getElementById('star-97'), document.getElementById('star-98'),
    document.getElementById('star-99'), document.getElementById('star-100'),
    document.getElementById('star-101'), document.getElementById('star-102'),
    document.getElementById('star-103'), document.getElementById('star-104'),
    document.getElementById('star-105'), document.getElementById('star-106'),
    document.getElementById('star-107'), document.getElementById('star-108'),
    document.getElementById('star-109'), document.getElementById('star-110'),
    document.getElementById('star-111'), document.getElementById('star-112'),
    document.getElementById('star-113'), document.getElementById('star-114'),
    document.getElementById('star-115'), document.getElementById('star-116'),
    document.getElementById('star-117'), document.getElementById('star-118'),
    document.getElementById('star-119'), document.getElementById('star-120'),
    document.getElementById('star-121'), document.getElementById('star-122'),
    document.getElementById('star-123'), document.getElementById('star-124'),
    document.getElementById('star-125'), document.getElementById('star-126'),
    document.getElementById('star-127'), document.getElementById('star-128'),
    document.getElementById('star-129'), document.getElementById('star-130'),
    document.getElementById('star-131'), document.getElementById('star-132'),
    document.getElementById('star-133'), document.getElementById('star-134'),
    document.getElementById('star-135'), document.getElementById('star-136'),
    document.getElementById('star-137'), document.getElementById('star-138'),
    document.getElementById('star-139'), document.getElementById('star-140'),
    document.getElementById('star-141'), document.getElementById('star-142'),
    document.getElementById('star-143'), document.getElementById('star-144'),
    document.getElementById('star-145'), document.getElementById('star-146'),
    document.getElementById('star-147'), document.getElementById('star-148'),
    document.getElementById('star-149'), document.getElementById('star-150'),
    document.getElementById('star-151'), document.getElementById('star-152'),
    document.getElementById('star-153'), document.getElementById('star-154'),
    document.getElementById('star-155'), document.getElementById('star-156'),
    document.getElementById('star-157'), document.getElementById('star-158'),
    document.getElementById('star-159'), document.getElementById('star-160'),
    document.getElementById('star-161'), document.getElementById('star-162'),
    document.getElementById('star-163'), document.getElementById('star-164'),
    document.getElementById('star-165'), document.getElementById('star-166'),
    document.getElementById('star-167'), document.getElementById('star-168'),
    document.getElementById('star-169'), document.getElementById('star-170'),
    document.getElementById('star-171'), document.getElementById('star-172'),
    document.getElementById('star-173'), document.getElementById('star-174'),
    document.getElementById('star-175'), document.getElementById('star-176'),
    document.getElementById('star-177'), document.getElementById('star-178'),
    document.getElementById('star-179'), document.getElementById('star-180'),
    document.getElementById('star-181'), document.getElementById('star-182'),
    document.getElementById('star-183'), document.getElementById('star-184'),
    document.getElementById('star-185'), document.getElementById('star-186'),
    document.getElementById('star-187'), document.getElementById('star-188'),
    document.getElementById('star-189'), document.getElementById('star-190'),
    document.getElementById('star-191'), document.getElementById('star-192'),
    document.getElementById('star-193'), document.getElementById('star-194'),
    document.getElementById('star-195'), document.getElementById('star-196'),
    document.getElementById('star-197'), document.getElementById('star-198'),
    document.getElementById('star-199'), document.getElementById('star-200')
]

let e = 1;

for(i=0; i<=99; i++){
    let randomize = (Math.random() * 1000)/2;
    let randomizeSize = (Math.random() * 10); 

        starList[i].style.top +=  i*5 + 'px';
        if(i >= 50){
            starList[i].style.top =  e*5 + 'px';
            e++;
        }
        starList[i].style.left = randomize + 'px';
        starList[i].style.height = randomizeSize + 'px'; 
        starList[i].style.width = randomizeSize + 'px';
}

for(i=100; i<=199; i++){
    let randomize = (Math.random() * 1000)/2;
    let randomizeSize = (Math.random() * 10)/1.7; 

        starList[i].style.top +=  i*5 + 'px';
        if(i >= 50){
            starList[i].style.top =  e*5 + 'px';
            e++;
        }
        starList[i].style.left = randomize + 'px';
        starList[i].style.height = randomizeSize + 'px'; 
        starList[i].style.width = randomizeSize + 'px';
}

let saturn = document.getElementById('saturn'), neptune = document.getElementById('neptune');

let randomize = (Math.random() * 1000)/2;
let randomize2 = (Math.random() * 1000)/3;
let randomizeSign = (Math.random() * 10); 

saturn.style.left = randomize + "px";

if(randomizeSign < 5){
    neptune.style.left = randomize2 + "px";
}
else{
    neptune.style.left = randomize2-(randomize2*2) + "px";
}

let filante1 = document.getElementById('filante-1');
let filante2 = document.getElementById('filante-2');
let filante3 = document.getElementById('filante-3');
let filanteRight1 = document.getElementById('filante-right-1');
let filanteRight2 = document.getElementById('filante-right-2');
let filanteRight3 = document.getElementById('filante-right-3');

let randomizeFilantePlace1 = (Math.random() * 350);
let randomizeFilantePlace2 = (Math.random() * 350);
let randomizeFilantePlace3 = (Math.random() * 350);
let randomizeFilanteRightPlace1 = (Math.random() * 350);
let randomizeFilanteRightPlace2 = (Math.random() * 350);
let randomizeFilanteRightPlace3 = (Math.random() * 350);

filante1.style.top = (randomizeFilantePlace1 -(randomizeFilantePlace1*2)) + 'px';
filante2.style.top = (randomizeFilantePlace2 -(randomizeFilantePlace2*2)) + 'px';
filante3.style.top = (randomizeFilantePlace3 -(randomizeFilantePlace3*2)) + 'px';
filanteRight1.style.top = (randomizeFilanteRightPlace1 -(randomizeFilanteRightPlace1*2)) + 'px';
filanteRight2.style.top = (randomizeFilanteRightPlace2 -(randomizeFilanteRightPlace2*2)) + 'px';
filanteRight3.style.top = (randomizeFilanteRightPlace3 -(randomizeFilanteRightPlace3*2)) + 'px';

NebulaStarList = [
    document.getElementById('nebula-star-1'), document.getElementById('nebula-star-2'),
    document.getElementById('nebula-star-3'), document.getElementById('nebula-star-4'),
    document.getElementById('nebula-star-5'), document.getElementById('nebula-star-6'),
    document.getElementById('nebula-star-7'), document.getElementById('nebula-star-8'),
    document.getElementById('nebula-star-9'), document.getElementById('nebula-star-10'),
    document.getElementById('nebula-star-11'), document.getElementById('nebula-star-12'),
    document.getElementById('nebula-star-13'), document.getElementById('nebula-star-14'),
    document.getElementById('nebula-star-15'), document.getElementById('nebula-star-16'),
    document.getElementById('nebula-star-17'), document.getElementById('nebula-star-18'),
    document.getElementById('nebula-star-19'), document.getElementById('nebula-star-20'),
    document.getElementById('nebula-star-21'), document.getElementById('nebula-star-22'),
    document.getElementById('nebula-star-23'), document.getElementById('nebula-star-24'),
    document.getElementById('nebula-star-25'), document.getElementById('nebula-star-26'),
    document.getElementById('nebula-star-27'), document.getElementById('nebula-star-28'),
    document.getElementById('nebula-star-29'), document.getElementById('nebula-star-30'),
    document.getElementById('nebula-star-31'), document.getElementById('nebula-star-32'),
    document.getElementById('nebula-star-33'), document.getElementById('nebula-star-34'),
    document.getElementById('nebula-star-35'), document.getElementById('nebula-star-36'),
    document.getElementById('nebula-star-37'), document.getElementById('nebula-star-38'),
    document.getElementById('nebula-star-39'), document.getElementById('nebula-star-40'),
    document.getElementById('nebula-star-41'), document.getElementById('nebula-star-42'),
    document.getElementById('nebula-star-43'), document.getElementById('nebula-star-44'),
    document.getElementById('nebula-star-45'), document.getElementById('nebula-star-46'),
    document.getElementById('nebula-star-47'), document.getElementById('nebula-star-48'),
    document.getElementById('nebula-star-49'), document.getElementById('nebula-star-50'),
    document.getElementById('nebula-star-51'), document.getElementById('nebula-star-52'),
    document.getElementById('nebula-star-53'), document.getElementById('nebula-star-54'),
    document.getElementById('nebula-star-55'), document.getElementById('nebula-star-56'), 
    document.getElementById('nebula-star-57'), document.getElementById('nebula-star-58'), 
    document.getElementById('nebula-star-59'), document.getElementById('nebula-star-50'),
    document.getElementById('nebula-star-61'), document.getElementById('nebula-star-62'),
    document.getElementById('nebula-star-63'), document.getElementById('nebula-star-64'),
    document.getElementById('nebula-star-65'), document.getElementById('nebula-star-66'),
    document.getElementById('nebula-star-67'), document.getElementById('nebula-star-68'),
    document.getElementById('nebula-star-69'), document.getElementById('nebula-star-70'),
    document.getElementById('nebula-star-71'), document.getElementById('nebula-star-72'),
    document.getElementById('nebula-star-73'), document.getElementById('nebula-star-74'),
    document.getElementById('nebula-star-75'), document.getElementById('nebula-star-76'),
    document.getElementById('nebula-star-77'), document.getElementById('nebula-star-78'),
    document.getElementById('nebula-star-79'), document.getElementById('nebula-star-80'),
    document.getElementById('nebula-star-81'), document.getElementById('nebula-star-82'),
    document.getElementById('nebula-star-83'), document.getElementById('nebula-star-84'),
    document.getElementById('nebula-star-85'), document.getElementById('nebula-star-86'),
    document.getElementById('nebula-star-87'), document.getElementById('nebula-star-88'),
    document.getElementById('nebula-star-89'), document.getElementById('nebula-star-90'),
    document.getElementById('nebula-star-91'), document.getElementById('nebula-star-92'),
    document.getElementById('nebula-star-93'), document.getElementById('nebula-star-94'),
    document.getElementById('nebula-star-95'), document.getElementById('nebula-star-96'),
    document.getElementById('nebula-star-97'), document.getElementById('nebula-star-98'),
    document.getElementById('nebula-star-99'), document.getElementById('nebula-star-100'),
    document.getElementById('nebula-star-101'), document.getElementById('nebula-star-102'),
    document.getElementById('nebula-star-103'), document.getElementById('nebula-star-104'),
    document.getElementById('nebula-star-105'), document.getElementById('nebula-star-106'),
    document.getElementById('nebula-star-107'), document.getElementById('nebula-star-108'),
    document.getElementById('nebula-star-109'), document.getElementById('nebula-star-110'),
    document.getElementById('nebula-star-111'), document.getElementById('nebula-star-112'),
    document.getElementById('nebula-star-113'), document.getElementById('nebula-star-114'),
    document.getElementById('nebula-star-115'), document.getElementById('nebula-star-116'),
    document.getElementById('nebula-star-117'), document.getElementById('nebula-star-118'),
    document.getElementById('nebula-star-119'), document.getElementById('nebula-star-120'),
    document.getElementById('nebula-star-121'), document.getElementById('nebula-star-122'),
    document.getElementById('nebula-star-123'), document.getElementById('nebula-star-124'),
    document.getElementById('nebula-star-125'), document.getElementById('nebula-star-126'),
    document.getElementById('nebula-star-127'), document.getElementById('nebula-star-128'),
    document.getElementById('nebula-star-129'), document.getElementById('nebula-star-130'),
    document.getElementById('nebula-star-131'), document.getElementById('nebula-star-132'),
    document.getElementById('nebula-star-133'), document.getElementById('nebula-star-134'),
    document.getElementById('nebula-star-135'), document.getElementById('nebula-star-136'), 
    document.getElementById('nebula-star-137'), document.getElementById('nebula-star-138'), 
    document.getElementById('nebula-star-139'), document.getElementById('nebula-star-140'),
    document.getElementById('nebula-star-141'), document.getElementById('nebula-star-142'),
    document.getElementById('nebula-star-143'), document.getElementById('nebula-star-144'),
    document.getElementById('nebula-star-145'), document.getElementById('nebula-star-146'),
    document.getElementById('nebula-star-147'), document.getElementById('nebula-star-148'),
    document.getElementById('nebula-star-149'), document.getElementById('nebula-star-150'),
    document.getElementById('nebula-star-151'), document.getElementById('nebula-star-152'),
    document.getElementById('nebula-star-153'), document.getElementById('nebula-star-154'),
    document.getElementById('nebula-star-155'), document.getElementById('nebula-star-156'),
    document.getElementById('nebula-star-157'), document.getElementById('nebula-star-158'),
    document.getElementById('nebula-star-159'), document.getElementById('nebula-star-160')
]

for(i=0; i<=159; i++){
    let randomizeLeft = (Math.random() * 250);
    let randomizeTop = (Math.random() * 125);
    let randomizeSize = (Math.random() * 2); 

    NebulaStarList[i].style.left = randomizeLeft + 'px';
    NebulaStarList[i].style.top = randomizeTop-i + 'px';
    NebulaStarList[i].style.height = randomizeSize + 'px'; 
    NebulaStarList[i].style.width = randomizeSize + 'px';
}

trueNebulaList = [
    document.getElementById('true-nebula-1'), document.getElementById('true-nebula-2'),
    document.getElementById('true-nebula-3'), document.getElementById('true-nebula-4'),
    document.getElementById('true-nebula-5'), document.getElementById('true-nebula-6'),
    document.getElementById('true-nebula-7'), document.getElementById('true-nebula-8'),
    document.getElementById('true-nebula-9'), document.getElementById('true-nebula-10'),
    document.getElementById('true-nebula-11'), document.getElementById('true-nebula-12'),
    document.getElementById('true-nebula-13'), document.getElementById('true-nebula-14'),
    document.getElementById('true-nebula-15'), document.getElementById('true-nebula-16')
]

for(i=0; i<=15; i++){
    let randomizeTop = (Math.random() * 100);
    let randomizeBlurred; 
    let testRandomizeBlurred = false;

    while(testRandomizeBlurred == false){
        randomizeBlurred = (Math.random() * 40);
        if (randomizeBlurred >= 20){
            testRandomizeBlurred = true;
        }
    }
    trueNebulaList[i].style.top = randomizeTop + 'px';
    trueNebulaList[i].style.boxShadow = "0px 0px "+ randomizeBlurred + "px "+randomizeBlurred/1.5 + "px rgb(255, 255, 255)"; 
}

let nebula = document.getElementById('nebula');
let randomizeNebula = (Math.random() * 250)+50;
nebula.style.left = randomizeNebula + 'px';

let nebula2 = document.getElementById('nebula-2');
let randomizeNebula2 = (Math.random() * 250)+50;
nebula2.style.left = randomizeNebula2 + 'px';

let nebula3 = document.getElementById('nebula-3');
let randomizeNebula3 = (Math.random() * 250)-50;
nebula3.style.left = randomizeNebula3 + 'px';

let nebula4 = document.getElementById('nebula-4');
let randomizeNebula4 = (Math.random() * 250)-50;
nebula4.style.left = randomizeNebula4 + 'px';


let spaceship1 = document.getElementById('spaceship-1');
let spaceship2 = document.getElementById('spaceship-2');

let randomizeSelectSpaceShip1 = Math.random();
let randomizeSelectSpaceShip2 = Math.random();

let randomizePlaceSpaceShip1 = (Math.random()*380)-60;
let beforeRandomizePlaceSpaceShip2 = (Math.random()*360)+230 
let randomizePlaceSpaceShip2 = beforeRandomizePlaceSpaceShip2-(beforeRandomizePlaceSpaceShip2*2);

let keyframeSpaceShip1 = document.styleSheets[0].cssRules[73];
let keyframeSpaceShip2 = document.styleSheets[0].cssRules[75];


function SelectSpaceShip1(){
    console.log('test3');
    spaceship1.style.left = randomizePlaceSpaceShip1 + "px";
    if(randomizeSelectSpaceShip1 < 0.25){
        keyframeSpaceShip1[0].style.transform = "translate(0px, 0px) rotate(-95deg)";
        keyframeSpaceShip1[1].style.transform = "translate(0px, 0px) rotate(-95deg)";
        keyframeSpaceShip1[2].style.transform = "translate(-85px, -590px) rotate(-105deg)";
        keyframeSpaceShip1[3].style.transform = "translate(-85px, -590px) rotate(-105deg)";
        return
    }
    if(randomizeSelectSpaceShip1 < 0.5){
        keyframeSpaceShip1[0].style.transform = "translate(0px, 0px) rotate(-85deg)";
        keyframeSpaceShip1[1].style.transform = "translate(0px, 0px) rotate(-85deg)";
        keyframeSpaceShip1[2].style.transform = "translate( 85px, -590px) rotate(-75deg)";
        keyframeSpaceShip1[3].style.transform = "translate( 85px, -590px) rotate(-75deg)";
        return
    }
    if(randomizeSelectSpaceShip1 < 0.75){
        spaceship1.style.top = "-730px";
        keyframeSpaceShip1[0].style.transform = "translate(0px, 0px) rotate(95deg)";
        keyframeSpaceShip1[1].style.transform = "translate(0px, 0px) rotate(95deg)";
        keyframeSpaceShip1[2].style.transform = "translate( -85px, 590px) rotate(105deg)";
        keyframeSpaceShip1[3].style.transform = "translate( -85px, 590px) rotate(105deg)";
        return
    }
    else{
        spaceship1.style.top = "-730px";
        keyframeSpaceShip1[0].style.transform = "translate(0px, 0px) rotate(85deg)";
        keyframeSpaceShip1[1].style.transform = "translate(0px, 0px) rotate(85deg)";
        keyframeSpaceShip1[2].style.transform = "translate( 85px, 590px) rotate(75deg)";
        keyframeSpaceShip1[3].style.transform = "translate( 85px, 590px) rotate(75deg)";
    }
}
function SelectSpaceShip2(){
    console.log('test');
    spaceship2.style.top = randomizePlaceSpaceShip2 + "px";
    if(randomizeSelectSpaceShip2 < 0.25){
        spaceship2.style.left = "-230px";
        keyframeSpaceShip2[0].style.transform = "translate(0px, 0px) rotate(15deg)";
        keyframeSpaceShip2[1].style.transform = "translate(0px, 0px) rotate(15deg)";
        keyframeSpaceShip2[2].style.transform = "translate(590px, 85px) rotate(25deg)";
        return
    }
    if(randomizeSelectSpaceShip2 < 0.5){
        spaceship2.style.left = "-230px";
        keyframeSpaceShip2[0].style.transform = "translate(0px, 0px) rotate(15deg)";
        keyframeSpaceShip2[1].style.transform = "translate(0px, 0px) rotate(15deg)";
        keyframeSpaceShip2[2].style.transform = "translate(590px, 85px) rotate(25deg)";
        return
    }
    if(randomizeSelectSpaceShip2 < 0.75){
        spaceship2.style.left = "350px";
        keyframeSpaceShip2[0].style.transform = "translate(0px, 0px) rotate(190deg)";
        keyframeSpaceShip2[1].style.transform = "translate(0px, 0px) rotate(190deg)";
        keyframeSpaceShip2[2].style.transform = "translate(-590px, -85px) rotate(200deg)";
        return
    }
    else{
        spaceship2.style.left = "350px";
        keyframeSpaceShip2[0].style.transform = "translate(0px, 0px) rotate(170deg)";
        keyframeSpaceShip2[1].style.transform = "translate(0px, 0px) rotate(170deg)";
        keyframeSpaceShip2[2].style.transform = "translate(-590px, 85px) rotate(160deg)";
    }
}

SelectSpaceShip1();
SelectSpaceShip2();

satellite1 = document.getElementById('satellite-1');
satellite2 = document.getElementById('satellite-2');
let RandomizePlaceSatellite1 = (-Math.random()*750);
if(RandomizePlaceSatellite1 > -350){
    RandomizePlaceSatellite1 = -350;
}
let RandomizePlaceSatellite2 = (-Math.random()*550);
if(RandomizePlaceSatellite2 > -200){
    RandomizePlaceSatellite2 = -200;
}
satellite1.style.top = RandomizePlaceSatellite1 + "px";
satellite2.style.top = RandomizePlaceSatellite2 + "px";