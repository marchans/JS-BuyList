$(function(){

    // var  TEMPLATE = $(".center").html();

    // var  RIGHT_TEMPLATE = $(".column .right").html();

    var LIST = $(".list");
    var ITEM = $(".lineProduct").html();
    var LEFT_ITEM_TEMPLATE = $('.leftItem').html();
    var LEFT_TO_BUY_LIST = $('.rightProduct');

    function addProduct(nameT) {
        var node = $(ITEM);
        var rightNode = $(LEFT_ITEM_TEMPLATE);
        node.find(".nameT").text(nameT);
        rightNode.find('.name').text(nameT);
        rightNode.find('.amount').text(1);



        node.find('.plus').click(function () {
            var quant = parseInt(node.find('span.label').text());
            node.find('span.label').text(quant + 1);
            rightNode.find('.amount').text(quant + 1);
        });
        node.find('.minus').click(function () {
            var quant = parseInt(node.find('span.label').text());
            if (quant > 1) {
                node.find('span.label').text(quant - 1);
                rightNode.find('.amount').text(quant - 1);
            }
            else
                node.find('.minus').prop('disabled', true);

        });
        LIST.append(node);
        LEFT_TO_BUY_LIST.append(rightNode);
        // LEFT_TO_BUY_LIST.append(rightNode);


    }
    $('#naming').click(function(){
        var name = $('input').val();

        if(name)
        addProduct(name);
    });

    });