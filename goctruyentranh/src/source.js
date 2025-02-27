function execute(url, page) {
    if(!page) page = '0';
    let response = fetch('https://goctruyentranhhay.net/api/comic/search/category',{
        method : "GET",
        queries : {
            p : page,
            value : url
        }
    });
    if(response.ok){
        let json = response.json();
        let allItem = json.result.data;
        if(json.result.next === true) let next = (parseInt(page) + 1).toString();
        else next = null;
        if(allItem){
            let data = [];
            allItem.forEach(item => data.push({
                name: item.name,
                link: 'https://goctruyentranhhay.net/truyen/'+item.nameEn,
                cover: item.photo,
                description: 'Chap '+item.chapterLatest[0],
                host: "https://goctruyentranhhay.net"
            }))
            return Response.success(data,next)
        }
    }
    return null;
}