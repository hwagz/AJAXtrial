$(function (){
  var $orders = $('#orders');
  $.ajax({
    type: 'GET',
    url: 'http://rest.learncode.academy/api/learncode/friends',
    success: function(orders){
      $.each(orders, function(i, order){
        $orders.append('<li>name: '+order.name+' drink: '+order.drink+'</li>')
      });
    }
  });
});
