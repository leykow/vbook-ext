function execute(url) {
    const doc = Http.get(url+'/').html();
    var chapter_contents = doc.select(".par p").html().replace(/[\n]/g,'<br>')
    return Response.success(chapter_contents);
}