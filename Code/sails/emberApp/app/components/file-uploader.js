import Ember from 'ember';

export default Ember.Component.extend({
 tagName: 'div',
  classNames: 'uploader dropzone'.w(),
  classNameBindings: 'isDragging isDisabled:is-disabled'.w(),
  attributeBindings: 'data-uploader'.w(),
  'data-uploader': 'true',
  isDisabled: false,

  dragOver(event){
    // this is needed to avoid the default behaviour from the browser
    event.preventDefault();
  },

  dragEnter(event){
    event.preventDefault();
    this.set('isDragging', true);
  },

  dragLeave(event){
    event.preventDefault();
    this.set('isDragging', false);
  },

  drop(event){
    var file;

    if(!this.get('isDisabled')){
      event.preventDefault();
      this.set('isDragging', false);

      // only 1 file for now
      file = event.dataTransfer.files[0];
      this.set('isDisabled', true);
      this.sendAction('fileInputChanged', file);
    } else{
      console.error('you can only upload on file at the time');
    }
  },

  click({target}){
    var $inputField,
        file;

    if(target.tagName.toLocaleLowerCase() === 'input'){
      return;
    }

    $inputField = this.$('input');

    $inputField[0].click();
    $inputField.on('change', ({preventDefault, stopPropagation})=>{
      preventDefault();
      stopPropagation();
      file = $inputField[0].files[0];
      this.sendAction('fileInputChanged', file);

      return false;
    });
  },

  didInsertElement(){
    this.$().on('uploadProgress', ({progress})=>{
      if(progress === 1){
        this.set('isDisabled', false);
        this.$('.progress').css({width: `${0}%`});
      } else {
        this.$('.progress').css({width: `${progress*100}%`});
      }

      this.sendAction('uploadProgress', progress);
    });
  }


});
