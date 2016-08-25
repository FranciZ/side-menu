
class SideMenu{

  constructor(container, buttons){

    this.$container = $(container);
    this.buttons = buttons;

    this._render();

  }

  _render(){

    TweenLite.set(this.$container, {perspective:800});

    for(var i=0;i<this.buttons.length; i++){

      const $button = $('<div>', { class:'side-menu-button' });
      const $label = $('<div>', { class:'side-label', text:this.buttons[i].name });

      $button.append($label);

      TweenLite.set($button, {transformStyle:'preserve-3d'});

      this.$container.append($button);

      TweenLite.from($button, 0.6, {
        rotationY:180,
        opacity:0,
        transformOrigin:'0 50%',
        delay:0.1 * i
      });

      $button.on('mouseenter', (evt)=>{

        let $label = $(evt.currentTarget).find('.side-label');

        TweenLite.to(evt.currentTarget, 0.2, {
          rotationY:30,
          opacity:0.8,
          transformOrigin:'0 50%'
        });

        TweenLite.to($label, 0.2, {
          opacity:1,
          left:60
        });

      });

      $button.on('mouseleave', (evt)=>{

        let $label = $(evt.currentTarget).find('.side-label');

        TweenLite.to(evt.currentTarget, 0.2, {
          rotationY:0,
          opacity:1,
          transformOrigin:'0 50%'
        });

        TweenLite.to($label, 0.2, {
          opacity:0,
          left:40
        });

      });

    }

  }

}

const buttons = [
  {
    name:'Home',
    icon:'icon-home',
    activeColor:'#ff0000'
  },
  {
    name:'About',
    icon:'icon-home',
    activeColor:'#ff0000'
  },
  {
    name:'Portfolio',
    icon:'icon-home',
    activeColor:'#ff0000'
  },
  {
    name:'Contact',
    icon:'icon-home',
    activeColor:'#ff0000'
  },
  {
    name:'Team',
    icon:'icon-home',
    activeColor:'#ff0000'
  }
];

const sideMenu = new SideMenu('.side-menu-container', buttons);