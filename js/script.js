(function(){
    MktoForms2.whenReady(function(form) {
        form.onSuccess(function(values, followUpUrl) {
             //window.location.href = "https://www.tenable.com/products/tenable-ep/evaluate/thank-you";
             window.location.href = "https://www.tenable.com/products/tenable-one/evaluate/thank-you";
             return false;
        });
        $('.mktoForm[data-formid="7469"] .mktoField ').each(function(){
            var name_input = $(this).attr('name');
            $(this).closest('.mktoFormRow').addClass('form_'+name_input);
        })
        setTimeout(function(){
            $('.product-get-started__form .mktoFormRow.form_Phone').insertAfter('.product-get-started__form .mktoFormRow.form_Email');
            $('.product-get-started__form .mktoFormRow.form_Employee_Range__c').insertAfter('.product-get-started__form .mktoFormRow.form_Company');
        },50);

        $('.hero-section .mktoForm[data-formid="7469"] select option').first().text('');
        $('.hero-section .mktoForm[data-formid="7469"] select option').first().hide();
        
        //$('.hero-section p.gdpr-text br + br').remove();
        $('.hero-section p.gdpr-text').parent().addClass('gdpr-row');

        $('.mktoForm[data-formid="7469"] input:not([name="triggerGDPR"]), .mktoForm[data-formid="7469"] textarea').on('focus', function() {
            $(this).closest('.mktoFieldWrap').addClass('focused');
            $(this).closest(".mktoFieldWrap").addClass("typing");
        });
        $('.mktoForm[data-formid="7469"] input:not([name="triggerGDPR"]), .mktoForm[data-formid="7469"] textarea, .mktoForm[data-formid="7469"] select').each( function() {
            var curr = this;
            setInterval(function() {
                if ($(curr).closest('.mktoFieldWrap').find('.mktoError').is(":visible")) {
                    $(curr).closest('.mktoFieldWrap').addClass('error-in');
                } else {
                    $(curr).closest('.mktoFieldWrap').removeClass('error-in');
                }
            }, 100);
        });
        $('.mktoForm[data-formid="7469"] input:not([name="triggerGDPR"]), .mktoForm[data-formid="7469"] textarea, .mktoForm[data-formid="7469"] select').on("blur", function() {
            $(this).closest(".mktoFieldWrap").removeClass("typing");
            if ($(this).val() != '') {
                if ($(this).hasClass('mktoInvalid')) {
                    $(this).closest('.mktoFieldWrap').removeClass('focused');
                }
                $(this).closest('.mktoFieldWrap').addClass('filled');
            } else {
                $(this).closest('.mktoFieldWrap').removeClass('filled');
                $(this).closest('.mktoFieldWrap').removeClass('focused');
            }
        });
        $(document).on('focus', '.mktoForm[data-formid="7469"] select.mktoField', function(e) {
            $(this).closest('.mktoFieldWrap').addClass("focused");
            $(this).closest('.mktoFieldWrap').addClass("typing");
            $(this).click();
        });
    
        $(document).on('click', '.mktoForm[data-formid="7469"] select#LblEmployee_Range__c', function(e) {
            $('.mktoForm[data-formid="7469"] select[name="Employee_Range__c"]').trigger();
        });
        $(document).on('blur', '.mktoForm[data-formid="7469"] select.mktoField', function(e) {
            if ($(this).val() == '') {
                $(this).closest('.mktoFieldWrap').removeClass("focused");
                $(this).closest('.mktoFieldWrap').removeClass("typing");
            };
        });

    });


    // initiate animation
    AOS.init();

})();


//FAQs tab
$(".product-page__faq-item").click(function () {
    if(!$(this).hasClass('open')){
        //closing already open tab
        $('.external-faq-section .open .faq-item-answer').animate({
            height: 'toggle'
        }, 300, "swing");
        $('.external-faq-section .open').removeClass('open');

        //opening new tab that is clicked
        $($(this).children('.faq-item-answer')[0]).animate({
            height: 'toggle'
        }, 300, "swing");
        $(this).addClass('open')
    }
    else{
        //closing self
        $('.external-faq-section .open .faq-item-answer').animate({
            height: 'toggle'
        }, 300, "swing");
        $('.external-faq-section .open').removeClass('open');
    }
});

//click to scroll
var nextspace = 20;
jQuery('.hero-section .cta-watch-video').on('click', function() {
    jQuery('html,body').animate({
    scrollTop: jQuery(".attack-section .video-wrapper").offset().top - nextspace}, 'slow');
});

//animation start
$(document).ready(function() {
    $('body').addClass('hero-animation');
});


//label colone remove from form
var checkFormLoaded = setInterval(function(){
        if($('#LblLastName').length){
            $('#LblLastName').html('<div class="mktoAsterix">*</div> Last Name');
            $('#LblTitle').html('<div class="mktoAsterix">*</div> Title');
            $('#LblEmail').html('<div class="mktoAsterix">*</div> Email Address');
            $('#LblPhone').html('<div class="mktoAsterix">*</div> Phone');
            $('#LblComments__c').html('Comments (Limited to 255 characters)');
            clearInterval(checkFormLoaded);
        }
}, 300);
