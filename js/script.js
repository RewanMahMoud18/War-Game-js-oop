function Character(name, strength, health) {
  this.name = name;
  this.strength = strength;
  this.health = health;
  this.attackBtn = document.querySelector(`#${this.name}-attack`);
  this.healthBtn = document.querySelector(`#${this.name}-make-health`);
  this.progress = document.querySelector(`.${this.name}-health span`);
  this.alive= document.querySelector(`#${this.name}-alive`);

}
Character.prototype.attack = function (opponent) {
    if(opponent.health>0){
        opponent.health -= this.strength;
        opponent.progress.style.width = `${opponent.health}%`;
    }else{
        opponent.attackBtn.style.visibility="hidden";
        opponent.healthBtn.style.visibility="hidden";
        opponent.alive.innerHTML=`${opponent.name} is died......`

    }
 
};
// Character.prototype.status = function () {};

Character.prototype.makeHealth = function () {
  if (this.health < 100) {
    this.health += 10;
    this.progress.style.width = `${this.health}%`;
  }
  if (this.health > 100) {
    this.health = 100;
  }
};
let maria = new Character("maria", 10, 100);
let nami = new Character("nami", 5, 100);
console.log(nami);

maria.attackBtn.addEventListener("click", function () {
  maria.attack(nami);
});
nami.attackBtn.addEventListener("click", function () {
  nami.attack(maria);
});
maria.healthBtn.addEventListener("click", function () {
  maria.makeHealth();
});
nami.healthBtn.addEventListener("click", function () {
  nami.makeHealth();
});
