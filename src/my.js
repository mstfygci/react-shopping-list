$(document).ready(
    // 1. Aşağıda adresi bulunan sayfadaki ürünün fiyat bilgisini alacak kodu yazınız.
    //      https://www.loft.com.tr/bayan-beyaz-tshirt-kkol-315791
    //      time 10min
    function get_item_price() {
        let price = $('div[data-pro-product-info|=\'sale_price\']')[0].attributes[1].ownerElement.innerText;

        return price;
    },


    // 2. Aşağıda adresi bulunan sayfada Breadcrumb’ın 3.adımındaki metni alacak kodu yazınız.
    //     https://www.loft.com.tr/bayan-beyaz-tshirt-kkol-315791
    // time: 5min
    function get_breadcrumb_text() {
        let breadcrumb_text = $('li[itemprop|=\'itemListElement\']')[2].innerText;

        return breadcrumb_text;
    },

    // 3. Aşağıda adresi bulunan sayfadaki butonun rengini #456789 yapacak kodu yazınız.
    //     https://www.loft.com.tr/bayan-beyaz-tshirt-kkol-315791
    // time 15min
    function change_button_color() {
        $('#add-basket-button').attr('style', 'background-color : #456789  !important');
    },

    // 4. Aşağıda adresi bulunan sayfanın URL adresini alacak kodu yazınız.
    //     https://www.loft.com.tr/bayan-beyaz-tshirt-kkol-315791
    // time 2 min
    function get_full_url() {
        // return window.location.href;
        return $(location).attr('href');
    },

    // 5. Aşağıda adresi bulunan sayfadaki ürün fiyatının 50 TL ile 100 TL arasında olup olmadığını kontrol edecek kodu yazınız.
    //     https://www.loft.com.tr/bayan-beyaz-tshirt-kkol-315791
    // time 10 min
    function from_50_to_100() {
        let str_price = $('div[data-pro-product-info|=\'sale_price\']')[0].attributes[1].ownerElement.innerText;
        let price = parseInt(str_price);
        if (price >= 50 && 100 > price) {
            return true;
        }
        return false;
    },

    // 6. Aşağıda adresi bulunan sayfadaki ürün isminde “Bilezik” geçiyorsa konsola “Geçiyor”, geçmiyorsa “Geçmiyor” yazacak kodu yazınız.
    //     https://www.loft.com.tr/bayan-beyaz-tshirt-kkol-315791
    // time 25 min
    function is_bracelet() {
        let product_name = $('.pro-product-name')[0].innerText;
        if (product_name.search('Bilezik') >= 0) {
            console.log('Geçiyor');
            return true;
        } else {
            console.log('Geçmiyor');
            return false;
        }
    },

    // 7. Aşağıda adresi bulunan sayfada, sayfa 300 piksel scroll edildiğinde alert basacak kodu yazınız.
    //     https://www.loft.com.tr/bayan-beyaz-tshirt-kkol-315791
    // time 40 min

    function scolled_300px() {
        let lastScrollAt = Date.now();
        let timeout;
        let scroll_long = 0;
        let first_scroll_top;

        function scrollStartStop() {
            var $this = $(this);
            if (Date.now() - lastScrollAt > 100)
                $this.trigger('scrollstart');
            lastScrollAt = Date.now();
            clearTimeout(timeout);
            timeout = setTimeout(function () {
                if (Date.now() - lastScrollAt > 99)
                    $this.trigger('scrollend');
            }, 100);
        }

        $(document).on('scroll', scrollStartStop);

        $(document).on('scrollstart', function () {
            first_scroll_top = $(document).scrollTop();
        });

        $(document).on('scrollend', function () {
            scroll_long = $(document).scrollTop() - first_scroll_top;
            if (scroll_long>300){
                alert('Scroll 300')
            }
        });

    },


    // 8. Aşağıda adresi bulunan sayfadaki buton tıklandığında konsola “Basıldı” yazacak kodu yazınız.
    //     https://www.loft.com.tr/bayan-beyaz-tshirt-kkol-315791
    // time 1 min
    function clicked_button() {
        $('#add-basket-button').click(function () {
            console.log('Basıldı');
        });

    },

    // 9. Aşağıda adresi bulunan sayfada ekran genişliği 720’den büyük ise konsola “Web, küçük ise “Mobil” yazacak kodu yazınız.
    //     https://www.loft.com.tr/bayan-beyaz-tshirt-kkol-315791
    // time 2 min
    function check_mobile() {
        $(window).on('resize', function () {
            if ($(this).width() > 720) {
                console.log('Web');
            } else {
                console.log('Mobil');
            }
        });
    },


    // 10. Aşağıda adresi bulunan sayfada “ed-deneme-123” isimli, değeri 10 olan cookie’yi atınız.
    //     https://www.loft.com.tr/bayan-beyaz-tshirt-kkol-315791
    // time 1 min (ed-deneme-123 u goremedim)
    function remove_cookie_ed() {
        $.removeCookie('ed-deneme-123');
    },

    // 11. Aşağıda adresi bulunan sayfada, aşağıda bulabileceğiniz HTML’i Sepete Ekle butonunun altına
    // append edecek kodu yazınız.
    //     https://www.loft.com.tr/bayan-beyaz-tshirt-kkol-315791
    // HTML:
    // <div id="ed-cargo-icon"><img style="height:40px; margin-top:10px; margin-bottom:-20px;" src="//cdn.8digits.com/f/u/2kn7rpnu/54a96759-88bb-4010-9b6c-c681f45122b8.jpg"/></div>
    // time 5 min
    function add_cargo() {
        let add_cargo_html = '<div id="ed-cargo-icon"><img style="height:40px; margin-top:10px; margin-bottom:-20px;" src="//cdn.8digits.com/f/u/2kn7rpnu/54a96759-88bb-4010-9b6c-c681f45122b8.jpg"/></div>';
        $('#add-basket-button').parent().append(add_cargo_html);
    },

    // 12.Aşağıda adresi bulunan sayfada body’i sıfırlayacak kodu yazınız.
    // https://www.loft.com.tr/bayan-beyaz-tshirt-kkol-315791
    // time 1 min
    function empty_body() {
        $('body').empty();
    },

    // 13. Aşağıda adresi bulunan sayfada tarayıcıyı belirleyecek olan kodu yazınız.
    // https://www.loft.com.tr/bayan-beyaz-tshirt-kkol-315791
    // time 1 min ?? bunu anlamadim
    function get_userAgent() {
        return navigator.userAgent;
    },

    // 14. Aşağıda adresi bulunan sayfada focus out yapıldığında tab ismini “Buraya title gelecek” metni ile değiştirecek olan kodu yazınız.
    // https://www.loft.com.tr/bayan-beyaz-tshirt-kkol-315791
    //time 5 min
    function focus_out() {
        $(window).on('focusout', function () {
            $('head title', window.parent.document).text('Buraya title gelecek');
        });
    },


    // 15. Aşağıda adresi bulunan sayfada konsola 1 ile 100 arasındaki sayıları sıralı şekilde yazacak olan kodu yazınız.
    // https://www.loft.com.tr/bayan-beyaz-tshirt-kkol-315791
    // time 1 min
    function print_1_to_100() {
        for (let i = 1; i < 100; i++) {
            console.log(i);
        }
    },

    // 16. Aşağıda adresi bulunan sayfadaki son tıklanan ürünü, listelemede ilk sıraya getirecek kodu yazınız.
    // https://www.loft.com.tr/erkek-pantolon?prices=250.0-500.0
    // time 83 min
    function last_viewed() {
        $('.-GTM-product-click-action').click(function () {
            let product_id = $(this).parents().eq(3).attr('data-gtm-product-id');
            alert(product_id);
            sessionStorage.setItem('last_clicked_product_id', product_id);
        });

        $(document).ready(function () {
            let last_viewed_product_id = sessionStorage.getItem('last_clicked_product_id');
            let last_viewed_item = $(`div[data-gtm-product-id|=${last_viewed_product_id}]`).parent();
            $('.pro-product-list-item').parent().prepend(last_viewed_item);
        });
    },
);
