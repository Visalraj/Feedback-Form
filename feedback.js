
        $("#submit-form").validate({
                rules:{
                        firstname:{
                                required:true,
                                minlength:2,
                                maxlength:25
                        },
                        lastname:{
                                minlength:1
                        },
                        comments:{
                                required:true
                        }
                },
                highlight: function (element) {
                        $(element).parent().addClass('error')
                    },
                    unhighlight: function (element) {
                        $(element).parent().removeClass('error')
                    }           
})

