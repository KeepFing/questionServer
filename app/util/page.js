exports.returnPage = (page,limit) => {
    let left = (page*limit)-(limit*1);
    let right = (1*limit);
    let pageInfo = {'left':left,'right':right};
    return pageInfo;
}