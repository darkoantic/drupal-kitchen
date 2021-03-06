(function ($) {

/**
 * On the signup edit form, add some bling to make users "confirm" the edit.
 *
 * When the form first loads, all the form elements are disabled
 * except for the 'Update signup' button.  When a user clicks that,
 * the other form elements are enabled, and the 'Update signup' button
 * text changes into 'Save changes'.
 */
Drupal.behaviors.enableSignupEditForm = {
  attach: function (context, settings) {
    if (!Drupal.settings.signupEditFormErrors) {
      var $button = $('#edit-save', context).click(enableSave);
      var $form = $button.parents('form:first');
      var $form_elements = $form.find(':visible');
      var original_button_title = $button.val();

      $form_elements.attr('disabled', 'disabled');
      $button.attr('disabled', '').val(Drupal.t('Edit'));
    }
   
    function enableSave() {
      $form_elements.attr('disabled', '');
      $button.unbind('click', enableSave).val(original_button_title);
      return false;
    }
  }
};

})(jQuery);
