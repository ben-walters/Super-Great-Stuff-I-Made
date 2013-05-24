var options = new Array();
options['key'] = '7921508331';
var js_api = new Squiz_Matrix_API(options);

$('.inline-comment').each(function (k, v) {
    var id = $(this).find('a').attr('href').replace('#', '');
    $(this).append('<div class="inline-comment-add"><textarea class="inline-comment-text"></textarea><button>Add</button><div class="inline-comments-area"></div></div>');
    $(this).find('.inline-comments-area').load('http://presales.squiz.co.uk/presales/comments/get-comments/_nocache?queries_comment_query=' + id + '&search_page_1195_submit_button=Submit&current_result_page=1&results_per_page=0&submitted_search_category=&mode=&root=' + JSAPI_curId);
});


$('.inline-comment-add button').click(function (e) {
    var theBox = $(this).parent().parent();

    var name = $(this).parent().parent().find('a').attr('href').replace('#', '');
    var text = $(this).parent().find('textarea').val();

    js_api.createAsset({
        "parent_id": JSAPI_curId,
        "type_code": "comment",
        "asset_name": name,
        "link_type": 2,
        "link_value": "",
        "sort_order": 1,
        "is_dependant": 0,
        "is_exclusive": 0,
        "extra_attributes": 1,
        "attributes": "comment=" + text,
        "dataCallback": function (data) {
            console.log(data);
            theBox.find('.inline-comments-area').load('http://presales.squiz.co.uk/presales/comments/get-comments/_nocache?queries_comment_query=' + name + '&search_page_1195_submit_button=Submit&current_result_page=1&results_per_page=0&submitted_search_category=&mode=&root=' + JSAPI_curId);
            theBox.find('textarea').val('')
        }
    });

});
