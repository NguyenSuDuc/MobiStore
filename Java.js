
$(document).ready(function(){
    $("#gototop").hide()

    $(window).scroll(function(){
        if($(this).scrollTop() >=300)
            $("#gototop").show("slow")
        else
            $("#gototop").hide("slow")
    })

    $("#gototop").click(function(){
        $("html, body").animate({
            scrollTop:0
        },2500)
    })
    $("#submit1").click(function(){
        var x=$("#contact-hoten").val();
        var y=$("#contact-dt").val();
        if(x&&y){
            alert("Đăng nhập thành công")
        }
        else{   
            alert("Đăng nhập không thành công")
        }
    })
    $("#submit2").click(function(){
        var x=$("#contact-sdt").val();
        var y=$("#contact-MK").val();
        var z=$("#contact-NMK").val();
        if(x&&y&&z){
            if(y==z)
                alert("Đăng kí thành công")
            else
            alert("Mật khẩu không trùng khớp")
        }
        else{   
            alert("Hãy nhập đầy đủ thông tin")
        }
    })
})