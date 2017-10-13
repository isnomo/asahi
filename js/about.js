(function () {

    $('.shops-nav li').on('click', function () {
        var val = $(this).html();
        $('.shops-nav li').removeClass('active');
        $(this).addClass('active');
        if (val <= 0) {
            return false;
        } else {
            drawHtml(val);
        }
    });


    function drawHtml(val) {
        var shopsHtml = '';
        for (var i = 0; i < shopsData.length; i++) {
            var cityList = shopsData[i];
            if (val == cityList.city) {
                for (var c = 0; c < cityList.data.length; c++) {
                    var shopsList = cityList.data[c];
                    shopsHtml += `<tr>
                                    <td>${shopsList.name}</td>
                                    <td>${shopsList.mall}</td>
                                    <td>${shopsList.site}</td>
                                </tr>`;

                }
                $('.shops-list table tbody').html(shopsHtml);
            }
        }

    }

    drawHtml('北京');

})();