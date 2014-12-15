// requireJS module for handling common form validation
define(['jQuery'], function ($) {

  var my= {
    noErrorMsg: false // if true highlight field state, but don't show any error messages
  };

  my.empty = function (elm) {
    var $elm = $(elm);
    return $elm.length > 0 && $elm.val().length === 0;
  };

  my.notEmpty = function (elm) {
    var $elm = $(elm);
    return $elm.length > 0 && $elm.val().length > 0;
  };

  my.equalsInt = function (elm,theValue) {
    var $elm = $(elm);
    var re = /^\d+$/;
    return ($elm.length > 0) && ($elm.val().length > 0) && re.test($elm.val()) && (parseInt($elm.val(),10) == theValue);
  };

  my.minLength = function (elm,min) {
    var $elm = $(elm);
    return $elm.length > 0 && $elm.val().length >= min;
  };

  my.username = function (elm) {
    var $elm = $(elm);
    var re = /^[a-zA-Z]+[a-zA-Z\-_\.0-9]{2,}$/;
    return ($elm.length > 0) && ($elm.val().length > 0) && re.test($elm.val());
  };

  // very weak add your own regex
  my.password = function (elm) {
    var $elm = $(elm);
    var re = /^\S{5,}$/;
    return ($elm.length > 0) && ($elm.val().length > 0) && re.test($elm.val());
  };

  my.maxLength = function (elm,max) {
    var $elm = $(elm);
    return $elm.length > 0 && $elm.val().length <= max;
  };

  my.lengthBetween = function (elm,min,max) {
    var $elm = $(elm);
    return $elm.length > 0 && $elm.val().length >= min && $elm.val().length <= max;
  };

  my.int = function (elm) {
    var $elm = $(elm);
    var re = /^\d+$/;
    return $elm.length > 0 && $elm.val().length > 0 && re.test($elm.val());
  };

  my.intMin = function (elm,min) {
    var $elm = $(elm);
    var re = /^\d+$/;
    return ($elm.length > 0) && ($elm.val().length > 0) && re.test($elm.val()) && (parseInt($elm.val(),10) >= min);
  };
  
  my.intMax = function (elm,max) {
    var $elm = $(elm);
    var re = /^\d+$/;
    return ($elm.length > 0) && ($elm.val().length > 0) && re.test($elm.val()) && (parseInt($elm.val(),10) <= max);
  };
  
  my.intBetween = function (elm,min,max) {
    var $elm = $(elm);
    var re = /^\d+$/;
    return ($elm.length > 0) &&
            ($elm.val().length > 0) &&
            re.test($elm.val()) &&
            (parseInt($elm.val(),10) >= min &&
            (parseInt($elm.val(),10) <= max));
  };

  my.float = function (elm) {
    var $elm = $(elm);
    var re = /^\d+$/;
    return $elm.length > 0 && $elm.val().length > 0 && re.test($elm.val());
  };

  // ISO yyyy-mm-dd
  my.date = function (elm) {
    var $elm = $(elm);
    var re = /^\d{4}-\d{2}-\d{2}$/;
    return ($elm.length > 0) && ($elm.val().length > 0) && re.test($elm.val());
  };

  my.time = function (elm) {
    var $elm = $(elm);
    var re = /^[0-2]\d:[0-6]\d$/;
    if(($elm.length > 0) && ($elm.val().length > 0) && re.test($elm.val())) return true;
    return false;
  };

  my.telephone = function(elm) {
    var $elm = $(elm);
    var re = /^[0-9-()+]{3,20}$/;
    return ($elm.length > 0) && re.test($elm.val());
  };

  my.email = function (elm) {
    var $elm = $(elm);
    var re = /^(([^<>()\[\]\\.,;:\s@\"]+(\.[^<>()\[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return ($elm.length > 0) && re.test($elm.val());
  };

  my.url = function (elm) {
    var $elm = $(elm);
    var re = /^https?:\/\/[a-z0-9-\.]+\.[a-z]{2,4}\/?([^\s<>\#%"\,\{\}\\|\\\^\[\]`]+)?$/i;
    return ($elm.length > 0) && re.test($elm.val());
  };

  my.twitter = function (elm) {
    var $elm = $(elm);
    var re = /^[a-z0-9_.]{1,15}$/i;
    return ($elm.length > 0) && re.test($elm.val());
  };

  my.facebookPage = function (elm) {
    var $elm = $(elm);
    var re = /^[a-z0-9_]+$/i;
    return ($elm.length > 0) && re.test($elm.val());
  };
  
  // show error message after input field plays well with bootstrap 2 form markup)
  my.showError = function (elm,msg) {
    var $elm = $(elm);
    var $formgroup = $elm.closest('div[class*="col-"], .form-group');
    if ($formgroup.length === 0) $formgroup = $elm;  // use the element itself if no form group
    $formgroup.removeClass('has-success').addClass('has-error');
    if (!my.noErrorMsg) {
      if ($('div.error',$formgroup).length == 1) {
        $('div.error',$formgroup).html(msg);
      } else {
        $formgroup.append('<div class="error">'+msg+'</div>');
      }
    }
  };

  // remove error message after input field (plays well with bootstrap 2 form markup)
  my.removeError = function (elm) {
    var $elm = $(elm);
    var $formgroup = $elm.closest('div[class*="col-"], .form-group');
    $formgroup.removeClass('has-error').addClass('has-success');
    $formgroup.find('div.error').remove();
  };
  return my;
});
