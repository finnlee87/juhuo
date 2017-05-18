import { GET_GOODS_LIST } from '../mutation_type'


const actions = {
    [GET_GOODS_LIST]({commit, state}, pageNo) {
        //

        //
        commit(GET_GOODS_LIST, state.goodsList)
    }
}

const mutations = {
    [GET_GOODS_LIST](state, goodsList) {
        state.goodsList.push(...goodsList);
    }
}

//state
const state = {
	goodsList:[
		{
            id: 1,
			name: '货物名称1',
			totalCount: 10,
			remark: '货物描述货物描述货物描述货物描述货物描述货物描述货物描述货物描述',
			imageUrl : '//placeimg.com/64/64/people/2'
		},
		{
            id: 1,
			name: '货物名称2',
			totalCount: 10,
			remark: '货物描述货物描述货物描述货物描述货物描述货物描述货物描述货物描述',
			imageUrl : '//placeimg.com/64/64/people/2'
		},
        {
            id: 1,
            name: '货物名称3',
            totalCount: 10,
            remark: '货物描述货物描述货物描述货物描述货物描述货物描述货物描述货物描述',
            imageUrl : '//placeimg.com/64/64/people/2'
        },
        {
            id: 1,
            name: '货物名称4',
            totalCount: 10,
            remark: '货物描述货物描述货物描述货物描述货物描述货物描述货物描述货物描述',
            imageUrl : '//placeimg.com/64/64/people/2'
        },
        {
            id: 1,
            name: '货物名称5',
            totalCount: 10,
            remark: '货物描述货物描述货物描述货物描述货物描述货物描述货物描述货物描述',
            imageUrl : '//placeimg.com/64/64/people/2'
        }
	],
	goodsDetail: {
        id: 1,
		name: '货物名称',
		totalCount: 10,
		remark: '货物描述货物描述货物描述货物描述货物描述货物描述货物描述货物描述',
		imageUrl : '//placeimg.com/64/64/people/2',
		inStockTime : '2017-01-01 00:00:00',
		inPrice : '100.00',
		outPrice : '150.00'

	}
}
//action

//mutation

//getter

export default {
	state,
    actions,
    mutations
}