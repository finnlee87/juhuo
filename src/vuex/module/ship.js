const actions = {

}

const mutations = {

}


const state = {
    shippingList:[
        {
            id : 1,
            name : '出货名称',
            expressNo : '1293894383123455',
            outTime : '2017-05-10 00:00:00',
            imageUrl: '//placeimg.com/64/64/people/2',
            outPrice: '100.00'
        },
        {
            id : 1,
            name : '出货名称',
            expressNo : '1293894383123455',
            outTime : '2017-05-10 00:00:00',
            imageUrl: '//placeimg.com/64/64/people/2',
            outPrice: '100.00'
        },
        {
            id : 1,
            name : '出货名称',
            expressNo : '1293894383123455',
            outTime : '2017-05-10 00:00:00',
            imageUrl: '//placeimg.com/64/64/people/2',
            outPrice: '100.00'
        }
    ],
    shipDetail : {
        id : 1,
        name : '出货名称',
        expressNo : '1293894383123455',
        outTime : '2017-05-10 00:00:00',
        imageUrl: '//placeimg.com/64/64/people/2',
        outPrice: '100.00',
        inPrice: '50.00',
        inTime: '2017-05-01 00:00:00',
        expressInfoList : [
            {
                time: '2017-05-01 00:00:00',
                info: '到达大连'
            },
            {
                time: '2017-05-01 00:00:00',
                info: '签收'
            }
        ]
    }
}

export default {
    state
}