// pages/sopping/sopping.js
Component({
  data: {
    isnull:0,
    sopping:[],
    _sopping:[],
    Goods:[],
    MoneryNum:0,
    isAll:false,
  },
  pageLifetimes: {
    show() {
      this.isnull(); 
      if (typeof this.getTabBar === 'function' && this.getTabBar()) {
        let TarBar = wx.getStorageSync("TarBarlis") || this.data.list;
        this.getTabBar().setData({
          selected: 2,
          list: TarBar
        })
      }
    },
    hide(){
      this.setData({
        Goods:[],
        sopping: this.data._sopping,
      });
      this.moneryS( );
    },
  },
  lifetimes:{
    attached(){
    }
  },
  methods:{
    isnull() {
      let sopping = wx.getStorageSync("sopping") || [];
      this.setData({
        isnull: Number(sopping.length), 
        sopping: sopping,
        _sopping: sopping
      })
    },
    GetGoods(e){
      let index = e.currentTarget.dataset.idx;
      let data = this.data.sopping;
      if (data[index].isGet){
        data[index].isGet = false;
        this.CGoods(data[index].id)
      }else{
        data[index].isGet = true;
        this.AGoods(data[index])
      }
      this.setData({
        sopping:data
      })
    },
    AGoods(goods){
      let _data = this.data.Goods;
      _data.push(goods )
      this.setData({
        Goods: _data
      })
      this.moneryS(_data)
    },
    CGoods(idx){
      let _data = this.data.Goods;
      for(let i = 0 ; i<_data.length;i++){
        if(_data[i].id===idx){
          _data.splice(i, 1);
          break;
        }
      }
      this.setData({
        Goods:_data
      })
      this.moneryS(_data)
    },
    All(){
      let arr = [];
      let _data = this.data.sopping;
      for(let i = 0;i<_data.length;i++){
        _data[i].isGet=true;
        arr.push(_data[i]);
      }
      this.setData({
        sopping: _data,
        Goods:arr,
      })
      this.moneryS(arr);
    },
    CNumber(e){
      let idx = e.currentTarget.dataset.idx;
      let sopping = this.data.sopping;
      if (sopping[idx].number>1){
        sopping[idx].number -= 1;
      }
      this.setData({
        sopping: sopping
      });
      wx.setStorageSync("sopping", sopping)
      this.moneryS( )
    },
    ANumber(e){
      let idx = e.currentTarget.dataset.idx;
      let sopping = this.data.sopping;
      sopping[idx].number+=1
      this.setData({
        sopping: sopping
      })
      wx.setStorageSync("sopping", sopping)
      this.moneryS()
    },
    moneryS(){
      let data = this.data.Goods; 
      let isAll = false;
      let MoneryNum  = 0;
      for(let i = 0 ; i <data.length;i++){
        MoneryNum += Number((data[i].monery * 10000) * data[i].number)
      }
      MoneryNum = MoneryNum / 10000;
      if(data.length==this.data.sopping.length){
        isAll=true
      }
      this.setData({
        MoneryNum: MoneryNum.toFixed(2),
        isAll: isAll,
      })
    },
    _getGoods(){
      console.log(123)
    }
  }
})