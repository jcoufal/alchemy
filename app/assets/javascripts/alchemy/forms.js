var CUI = CUI ? CUI : {};

CUI.toggleRadioButtons = function() {
  $('.control_group.double_input .input input[type="radio"]').click(function(){
    var $clickedRadioButton = $(this);
    var $urlInput = $('.control_group.double_input .input input[type="url"]');
    var $fileInput = $('.control_group.double_input .input input[type="file"]');
    var $inputToActivate = $clickedRadioButton.parent().next().find('input');
 
    if ($inputToActivate.attr('type') == 'url') {
      $urlInput.prop('disabled', false);
      $fileInput.prop('disabled', true);
    } else if ($inputToActivate.attr('type') == 'file') {
      $urlInput.prop('disabled', true);
      $fileInput.prop('disabled', false);
    }
  });
};

CUI.toggleInput = function() {
  var inputValue = "";

  $('.control_group.checkbox.inline .control input[type="checkbox"]').click(function(){
    var checkbox = $(this);
    var input = $('.control_group.checkbox.inline .input > input');
    var isDisabled = checkbox.prop('checked');

    input.attr('disabled', isDisabled);

    if(isDisabled) {
      inputValue = input.val();
      input.val('');
    } else {
      input.val(inputValue);
    }
  });
};

$(document).ready(function() {
  CUI.toggleInput();
  CUI.toggleRadioButtons();
});
