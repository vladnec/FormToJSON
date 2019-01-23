(function ($) {
    $.fn.serializeFormJSON = function () {

        var obj = {};
        var array = this.serializeArray();
        $.each(array, function () {
            if (obj[this.name]) {
                if (!obj[this.name].push) {
                    obj[this.name] = [o[this.name]];
                }
                obj[this.name].push(this.value || '');
            } else {
                obj[this.name] = this.value || '';
            }
        });
        return obj;
    };
})(jQuery);

$('form').submit(function (event) {
    event.preventDefault();
    var data = $(this).serializeFormJSON();
    console.log(data);

   
});