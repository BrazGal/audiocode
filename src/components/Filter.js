import React from 'react'
import $ from 'jquery';
import jQuery from 'jquery'
import "../pages/Suite.css"

const Filter = () => {
  (function () {
    var showResults;

    $('#search-box').keyup(function() {
      var searchText;
      searchText = $('#search-box').val();
      return showResults(searchText);
    });
  
    showResults = function(searchText) {
      $('tbody tr').hide();
      return $('tbody tr:Contains(' + searchText + ')').show();
    };
  
    
    jQuery.expr[":"].Contains = jQuery.expr.createPseudo(function(arg) {
      return function(elem) {
        return jQuery(elem).text().toUpperCase().indexOf(arg.toUpperCase()) >= 0;
      };
    });
  
  }).call(this);

  return (
    <div className="containerFilter">
      <div className="search-box">
        <input type="text" id='search-box' />
        <span></span>
      </div>
    </div>
  )
}
export default Filter
