$(document).ready(function(){

    $('.btn-add').click(function(e){
        e.preventDefault()

        let url = $(this).attr('href')

        $('#content').empty()

        $('#content').load(url)
    })
})