class TabLink {
  constructor(tabElement){
    this.tabElement = tabElement;
    this.tabData = this.tabElement.dataset.tab; 
    if( this.tabData = document.querySelectorAll(`.tab`)) {
      this.cards = document.querySelectorAll(`.tab active-tab[data-tab='${this.tabData}']`) ;
    } else {
      this.cards = document.querySelectorAll(`.card[data-tab='${this.tabData}']`);
    }
         
    this.cards = Array.from(this.cards).map( cardElement => new TabCard(cardElement));
    this.tabElement.addEventListener('click',() => this.selectTab());
  }

  selectTab(){

    const tabs = document.querySelectorAll('.tab');
    tabs.forEach(item => item.classList.remove('.active-tab'));
    const cards = document.querySelectorAll('.card');
    cards.forEach(item => {item.style.display = "hide"});
    this.tabElement.classList.add('active-tab');
    this.cards.forEach(card => card.selectCard());
  }
}

class TabCard {
  constructor(cardElement){
    this.cardElement=document.querySelectorAll('.cardElement');
  }
  selectCard(){
    this.cardElement.style.flex = 'auto';
  }

}


let tabs = document.querySelectorAll('.tab');
tabs.forEach(tabElement => new TabLink(tabElement));