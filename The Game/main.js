var hero = new Object();
hero.element = 'hero';
hero.x = 250;
hero.y = 460;

function setPosition(sprite){
    var e = document.getElementById(sprite.element);
    e.style.left = sprite.x + 'px';
    e.style.top = sprite.y + 'px';
}

setPosition(hero);