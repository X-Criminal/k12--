// pages/class/class.js
Component({
  data:{
    ClassId:1,
    Adds: [],
    Animation:[],
    SoppingPosition:"",
    SoppingNum:1,
    isSopping:false,
  },
  e:{},
  methods:{
    CheckClass(e){
      this.setData({
        ClassId: e.currentTarget.dataset.id,
      })
    },
    AddSopping(e){
      this.e = e;
      let data = wx.getStorageSync("sopping")||[];
      this.setData({
        isSopping: true,
        SoppingNum: 1,
      });
      if(data.length>0){
        for(let i = 0 ; i<data.length;i++){
          if (data[i].id == e.currentTarget.dataset.id){
              this.setData({
                SoppingNum: data[i].number
              })
              break;
          }
        }
      }
    },
    _add(){
        this.setData({
          isSopping:false,
        })
        let e = this.e;
        let Adds = this.data.Adds;
        let Animations = this.data.Animation;
        let X = e.detail.x;
        let Y = e.detail.y;
        Adds.push({ left: X, top: Y });
        this.setData({
          Adds: Adds
        })
        setTimeout(() => {
          let _animation = wx.createAnimation({ duration: 500, timingFunction: "linear" });
              _animation.translate(this.TabBar.data.left - X, this.TabBar.data.top - Y);
          Animations.push(_animation.step());
          this.setData({
            Animation: Animations
          });
          this.addSopping({ 
              id: e.currentTarget.dataset.id, 
              number: this.data.SoppingNum, 
              monery: e.currentTarget.dataset.monery,
              name  : e.currentTarget.dataset.name,
              title: e.currentTarget.dataset.title,
              image: e.currentTarget.dataset.image
            })
        },100)
    },
    addSopping(dateils) {
      let e = this.e;
      let sopping = wx.getStorageSync("sopping")||[];
      let TarBar = wx.getStorageSync("TarBarlis");
      if (sopping.length>0){
        for (let i = 0; i < sopping.length;i++){
          if (e.currentTarget.dataset.id == sopping[i].id){
            sopping[i].number = dateils.number;
            TarBar[2].badge = sopping.length;
            wx.setStorageSync("sopping", sopping);
            wx.setStorageSync("TarBarlis", TarBar);
            this.TabBar.setData({
              list: TarBar
            })
            return false;
          }
        }
      }
      sopping.push(dateils);
      TarBar[2].badge = sopping.length;
      console.log(sopping )
      wx.setStorageSync("sopping", sopping);
      wx.setStorageSync("TarBarlis", TarBar);
      this.TabBar.setData({
        list: TarBar
      })
    },
    reduce(){
      let SoppingNum = this.data.SoppingNum;
      if (SoppingNum>1){
        this.setData({
          SoppingNum: SoppingNum-=1
        })
      }
    },
    add(){
      let SoppingNum = this.data.SoppingNum;
      this.setData({
        SoppingNum: SoppingNum+=1
      })
    },
    _return(){
      this.setData({
        isSopping:false,
      })
    },
    navSearch(){
      wx.navigateTo({
        url: '../search/search',
      })
    }
  },
  TabBar:{},
  pageLifetimes: {
    show() {
      this.TabBar = this.getTabBar();
      if (typeof this.getTabBar === 'function' &&
        this.TabBar) {
        this.TabBar.setData({
          selected: 1
        })
      }
    },
    hide(){
      this.setData({
        Adds: [],
        Animation: []
      })
    }
  }
})