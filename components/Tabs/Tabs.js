
class TabLink {
  constructor(tabElement){
    this.tabElement = tabElement;
    this.tabData = this.tabElement.dataset.tab;
    if(this.tabData === 'all'){
      // If `all` is true, select all cards regardless of their data attribute values
      this.cards = document.querySelectorAll('.card');
    } else {
      // else if `all` is false, only select the cards with matching this.tabData values
      this.cards = document.querySelectorAll(`*[data-tab='${this.tabData}']`);
    }

    this.cards = Array.from(this.cards).map( cardElement => new TabCard(cardElement));
    this.tabElement.addEventListener('click',() => this.selectTab());
  }

  selectTab(){
    const tabs = document.querySelectorAll('.tab');
    tabs.forEach(item => item.classList.remove('active-tab'));
    
    const cards = document.querySelectorAll('.card');
    cards.forEach(item => {item.style.display = 'none'});
    
    
    this.tabElement.classList.add('active-tab');
    this.cards.forEach(card => card.selectCard());
  }
}

class TabCard {
  constructor(cardElement){
    // Assign this.cardElement to the cardElement DOM reference
    this.cardElement = cardElement;
  }
  selectCard(){
    // Update the style of this.cardElement to display = "flex"
    this.cardElement.style.display = 'flex';
  }
}

let tabs = document.querySelectorAll('.tab');
tabs.forEach(tab => new TabLink(tab));